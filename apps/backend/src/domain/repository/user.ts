import { Logger } from '../../util/logger'
import { User } from '../model/user'
import { TransactionContext } from './transactable'

export type UserRepositoryFactory = (logger: Logger) => UserRepository

export interface UserRepository {
  get(ctx: TransactionContext, query: UserRepositoryGetQuery, option: { orFail: true }): Promise<User>
  get(ctx: TransactionContext, query: UserRepositoryGetQuery, option: { orFail: false }): Promise<User | undefined>
  get(ctx: TransactionContext, query: UserRepositoryGetQuery, option: { orFail: boolean }): Promise<User | undefined>
}

export type UserRepositoryGetQuery = {
  id?: string
}
