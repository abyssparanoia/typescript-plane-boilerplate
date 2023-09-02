import { UserInteractorFactory, newUserInteractorFactory } from '../../usecase/user'
import { newUserRepositoryFactory } from '../mysql/repository/user'

export interface Dependency {
  userInteractorFactory: UserInteractorFactory
}

export const newDependency = (): Dependency => {
  const userRepositoryFactory = newUserRepositoryFactory()

  return {
    userInteractorFactory: newUserInteractorFactory(userRepositoryFactory)
  }
}
