import express from 'express'
import { environment } from '../enviroment'
import { newDependency } from '../dependency/dependency'
import { UserHandler } from './server/handler/user'
import { attachLogger } from './server/middleware/attach-logger'
import { Logger } from '../../util/logger'
import { requestLogging } from './server/middleware/request-logging'
import { errorLogging } from './server/middleware/error-logging'
import { initialize } from 'express-openapi'

declare global {
  namespace Express {
    interface Request {
      logger: Logger
    }
  }
}

export const runHttpServer = () => {
  const dependency = newDependency()
  const userHandler = new UserHandler(dependency.userInteractorFactory)

  const app = express()
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))
  app.use(attachLogger)
  app.use(requestLogging)

  app.get('/', (_req, res) => {
    res.send('hello world')
  })

  initialize({
    app: app,
    apiDoc: './openapi/api.yaml',
    validateApiDoc: true,
    operations: {
      getUser: (req, res) => userHandler.get(req, res)
    },
    errorMiddleware: errorLogging,
    promiseMode: true
  })
  app.listen(environment.PORT, () => console.log(`Example app listening on port ${environment.PORT}!`))
}
