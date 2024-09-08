import { User } from '../domain/model/user'
import { Transactable } from '../domain/repository/transactable'
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

export const newUserInteractorFactory = (
  transactable: Transactable,
  userRepositoryFactory: UserRepositoryFactory
): UserInteractorFactory => {
  return (logger: Logger): UserInteractor => {
    return newUserInteractor(logger, transactable, userRepositoryFactory(logger))
  }
}

const newUserInteractor = (
  logger: Logger,
  transactable: Transactable,
  userRepository: UserRepository
): UserInteractor => {
  return new UserInteractorImpl(logger, transactable, userRepository)
}

class UserInteractorImpl implements UserInteractor {
  constructor(
    readonly _: Logger,
    private readonly transactable: Transactable,
    private readonly userRepository: UserRepository
  ) {}

  public async get(input: UserInteractorGetInput): Promise<UserInteractorGetOutput> {
    let user: User
    await this.transactable.ROTx(async ctx => {
      user = await this.userRepository.get(ctx, { id: input.id }, { orFail: true })
    })
    return { user: user! }
  }
}
