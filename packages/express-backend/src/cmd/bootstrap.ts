import cac from 'cac'
import { runHttpServer } from '../infrastructure/http/run'
import { runMigrate } from '../infrastructure/mysql/client'

const cli = cac()

cli.command('run-http-server').action(() => {
  runHttpServer()
})
cli.command('migrate.up').action(async () => {
  await runMigrate()
  console.log('migrate up done')
})

cli.help()
cli.parse()
