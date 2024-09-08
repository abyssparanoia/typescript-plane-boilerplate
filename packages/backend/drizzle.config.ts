import { Config } from 'drizzle-kit'

export default {
  schema: './src/infrastructure/mysql/schema',
  out: './db/migrations'
} satisfies Config
