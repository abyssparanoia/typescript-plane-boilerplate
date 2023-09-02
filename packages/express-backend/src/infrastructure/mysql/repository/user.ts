import { UserRepository, UserRepositoryFactory, UserRepositoryGetQuery } from '../../../domain/repository/user'
import { User } from '../../../domain/model/user'
import { Logger } from '../../../util/logger'

export const newUserRepositoryFactory = (): UserRepositoryFactory => {
  return (logger: Logger): UserRepository => {
    return newUserRepository(logger)
  }
}

const newUserRepository = (logger: Logger): UserRepository => new UserRepositoryImpl(logger)

class UserRepositoryImpl implements UserRepository {
  constructor(readonly logger: Logger) {}

  public async get(_: UserRepositoryGetQuery): Promise<User> {
    const user = {
      id: '1',
      name: 'John',
      email: '',
      createdAt: new Date(),
      updatedAt: new Date()
    }
    return user
  }
}
