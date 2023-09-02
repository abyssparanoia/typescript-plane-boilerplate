import { UserRepository, UserRepositoryGetQuery } from '../../../domain/repository/user'
import { User } from '../../../domain/model/user'

export const newUserRepository = (): UserRepository => new UserRepositoryImpl()

class UserRepositoryImpl implements UserRepository {
  constructor() {}

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
