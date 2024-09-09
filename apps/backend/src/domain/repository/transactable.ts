export interface Transactable {
  ROTx(fn: (ctx: TransactionContext) => Promise<void>): Promise<void>
  RWTx(fn: (ctx: TransactionContext) => Promise<void>): Promise<void>
}

export type TransactionContext = any
