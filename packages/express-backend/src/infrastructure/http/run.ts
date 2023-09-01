import express from 'express'
import { environment } from '../enviroment'

export const runHttpServer = () => {
  const app = express()
  app.get('/', (_, res) => res.send('Hello World!'))

  app.listen(environment.PORT, () => console.log(`Example app listening on port ${environment.PORT}!`))
}
