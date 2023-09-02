import { User } from '../domain/model/user'
import { UserRepository, UserRepositoryFactory } from '../domain/repository/user'
import { Logger } from '../util/logger'

export type UserInteractorFactory = (logger: Logger) => UserInteractor

export interface UserInteractor {
  get(input: UserInteractorGetInput): Promise<UserInteractorGetOutput>
}

type UserInteractorGetInput = {
  id: string
}

type UserInteractorGetOutput = {
  user: User
}

export const newUserInteractorFactory = (userRepositoryFactory: UserRepositoryFactory): UserInteractorFactory => {
  return (logger: Logger): UserInteractor => {
    return newUserInteractor(logger, userRepositoryFactory(logger))
  }
}

const newUserInteractor = (logger: Logger, userRepository: UserRepository): UserInteractor => {
  return new UserInteractorImpl(logger, userRepository)
}

class UserInteractorImpl implements UserInteractor {
  constructor(readonly _: Logger, private readonly userRepository: UserRepository) {}

  public async get(input: UserInteractorGetInput): Promise<UserInteractorGetOutput> {
    const user = await this.userRepository.get({ id: input.id })
    return { user }
  }
}
