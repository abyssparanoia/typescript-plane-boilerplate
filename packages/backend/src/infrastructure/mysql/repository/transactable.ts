import { MySql2PreparedQueryHKT, MySql2QueryResultHKT } from 'drizzle-orm/mysql2'
import { Transactable, TransactionContext } from '../../../domain/repository/transactable'
import { MySqlClient } from '../client'
import { MySqlTransaction } from 'drizzle-orm/mysql-core'
import * as schema from '../schema'
import { ExtractTablesWithRelations } from 'drizzle-orm'

export const newTransactable = (cli: MySqlClient): Transactable => {
  return new TransactableImpl(cli)
}

class TransactableImpl implements Transactable {
  constructor(private readonly cli: MySqlClient) {}

  public async ROTx(fn: (ctx: TransactionContext) => Promise<void>): Promise<void> {
    return this.cli.transaction(
      async tx => {
        return fn(tx)
      }
      //   FIXME: 指定するとエラーになる
      //   { isolationLevel: 'read uncommitted', accessMode: 'read only' }
    )
  }

  public async RWTx(fn: (ctx: TransactionContext) => Promise<void>): Promise<void> {
    return this.cli.transaction(
      async tx => {
        return fn(tx)
      }
      //FIXME: 指定するとエラーになる
      //   { isolationLevel: 'repeatable read', accessMode: 'read write' }
    )
  }
}

export const getTransactionFromContext = (
  ctx: TransactionContext
): MySqlTransaction<
  MySql2QueryResultHKT,
  MySql2PreparedQueryHKT,
  typeof schema,
  ExtractTablesWithRelations<typeof schema>
> => {
  return ctx
}
