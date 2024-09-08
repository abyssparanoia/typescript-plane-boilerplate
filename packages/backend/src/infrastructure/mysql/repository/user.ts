import { UserRepository, UserRepositoryFactory, UserRepositoryGetQuery } from '../../../domain/repository/user'
import { User } from '../../../domain/model/user'
import { Logger } from '../../../util/logger'
import { ApplicationError } from '../../../util/application-error'
import { TransactionContext } from '../../../domain/repository/transactable'
import { getTransactionFromContext } from './transactable'

export const newUserRepositoryFactory = (): UserRepositoryFactory => {
  return (logger: Logger): UserRepository => {
    return newUserRepository(logger)
  }
}

const newUserRepository = (logger: Logger): UserRepository => new UserRepositoryImpl(logger)

class UserRepositoryImpl implements UserRepository {
  constructor(readonly logger: Logger) {}

  public async get(ctx: TransactionContext, query: UserRepositoryGetQuery, option: { orFail: true }): Promise<User>
  public async get(
    ctx: TransactionContext,
    query: UserRepositoryGetQuery,
    option: { orFail: false }
  ): Promise<User | undefined>
  public async get(
    ctx: TransactionContext,
    query: UserRepositoryGetQuery,
    option: { orFail: boolean }
  ): Promise<User | undefined> {
    const dbUser = await getTransactionFromContext(ctx).query.users.findFirst({
      where: (users, { eq }) => eq(users.id, query.id!)
    })
    if (!dbUser && option.orFail) {
      throw new ApplicationError(`user ${query.id!} not found`, 404)
    } else if (!dbUser) {
      return undefined
    }
    return {
      id: dbUser.id,
      name: dbUser.name,
      email: dbUser.email,
      createdAt: dbUser.createdAt,
      updatedAt: dbUser.updatedAt
    }
  }
}
