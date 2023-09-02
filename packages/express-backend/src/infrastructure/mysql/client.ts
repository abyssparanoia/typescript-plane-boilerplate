import { MySql2Database, drizzle } from 'drizzle-orm/mysql2'
import { migrate } from 'drizzle-orm/mysql2/migrator'
import mysql from 'mysql2/promise'
import { environment } from '../enviroment'
import * as schema from './schema'

const poolConnection = mysql.createPool({
  host: environment.DB_HOST,
  port: environment.DB_PORT,
  user: environment.DB_USER,
  password: environment.DB_PASSWORD,
  database: 'maindb',
  debug: environment.DB_DEBUG_LOG
})

export type MySqlClient = MySql2Database<typeof schema>

export const mysqlClient = drizzle(poolConnection, { schema, mode: 'default' })

export const runMigrate = async () => {
  await migrate(mysqlClient, {
    migrationsFolder: './db/migrations'
  })
  await poolConnection.end()
}
