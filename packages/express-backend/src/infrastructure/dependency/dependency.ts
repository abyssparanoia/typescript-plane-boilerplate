import { UserInteractor, newUserInteractor } from '../../usecase/user'
import { newUserRepository } from '../mysql/repository/user'

export interface Dependency {
  userInteractor: UserInteractor
}

export const newDependency = (): Dependency => {
  const userRepository = newUserRepository()

  return {
    userInteractor: newUserInteractor(userRepository)
  }
}
