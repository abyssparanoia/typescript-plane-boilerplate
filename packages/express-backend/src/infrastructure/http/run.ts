import express from 'express'
import { environment } from '../enviroment'
import { newDependency } from '../dependency/dependency'
import { UserHandler } from './server/handler/user'

export const runHttpServer = () => {
  const dependency = newDependency()
  const userHandler = new UserHandler(dependency.userInteractor)

  const app = express()
  app.get('/', (_, res) => res.send('Hello World!'))

  app.get('/v1/users/:userId', async (req, res) => userHandler.get(req, res))

  app.listen(environment.PORT, () => console.log(`Example app listening on port ${environment.PORT}!`))
}
