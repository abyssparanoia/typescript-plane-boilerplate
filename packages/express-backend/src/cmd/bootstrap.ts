import cac from 'cac'
import { runHttpServer } from '../infrastructure/http/run'

const cli = cac()

cli.command('run-http-server', 'Enter your name').action(() => {
  runHttpServer()
})

cli.help()
cli.parse()
