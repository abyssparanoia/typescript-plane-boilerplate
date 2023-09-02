import express, { NextFunction, Request, Response } from 'express'
import { environment } from '../enviroment'
import { newDependency } from '../dependency/dependency'
import { UserHandler } from './server/handler/user'
import { attachLogger } from './server/middleware/attach-logger'
import { Logger } from '../../util/logger'
import { requestLogging } from './server/middleware/request-logging'

declare global {
  namespace Express {
    interface Request {
      logger: Logger
    }
    interface Response {}
  }
}
export const runHttpServer = () => {
  const dependency = newDependency()
  const userHandler = new UserHandler(dependency.userInteractor)

  const app = express()
  app.use(attachLogger)
  app.use(requestLogging)

  app.get('/', (_req, res) => {
    res.send('hello world')
  })
  app.get(
    '/v1/users/:userId',
    asyncWrapper((req, res) => userHandler.get(req, res))
  )

  app.listen(environment.PORT, () => console.log(`Example app listening on port ${environment.PORT}!`))
}

const asyncWrapper = (fn: (req: Request, res: Response, next: NextFunction) => Promise<void>) => {
  return (req: Request, res: Response, next: NextFunction) => {
    return fn(req, res, next).catch(next)
  }
}
