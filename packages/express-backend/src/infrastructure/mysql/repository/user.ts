import { UserRepository, UserRepositoryFactory, UserRepositoryGetQuery } from '../../../domain/repository/user'
import { User } from '../../../domain/model/user'
import { Logger } from '../../../util/logger'
import { MySqlClient } from '../client'
import { ApplicationError } from '../../../util/application-error'

export const newUserRepositoryFactory = (cli: MySqlClient): UserRepositoryFactory => {
  return (logger: Logger): UserRepository => {
    return newUserRepository(logger, cli)
  }
}

const newUserRepository = (logger: Logger, cli: MySqlClient): UserRepository => new UserRepositoryImpl(logger, cli)

class UserRepositoryImpl implements UserRepository {
  constructor(readonly logger: Logger, private readonly cli: MySqlClient) {}

  public async get(query: UserRepositoryGetQuery): Promise<User | undefined> {
    const dbUser = await this.cli.query.users.findFirst({ where: (users, { eq }) => eq(users.id, query.id!) })
    if (!dbUser) {
      if (query.orFail) {
        throw new ApplicationError(`user ${query.id!} not found`, 404)
      }
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
