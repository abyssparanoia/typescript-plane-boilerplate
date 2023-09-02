import { User } from '../domain/model/user'
import { UserRepository } from '../domain/repository/user'

export interface UserInteractor {
  get(input: UserInteractorGetInput): Promise<UserInteractorGetOutput>
}

type UserInteractorGetInput = {
  id: string
}

type UserInteractorGetOutput = {
  user: User
}

export const newUserInteractor = (userRepository: UserRepository): UserInteractor => {
  return new UserInteractorImpl(userRepository)
}

class UserInteractorImpl implements UserInteractor {
  constructor(private readonly userRepository: UserRepository) {}

  public async get(input: UserInteractorGetInput): Promise<UserInteractorGetOutput> {
    const user = await this.userRepository.get({ id: input.id })
    return { user }
  }
}
