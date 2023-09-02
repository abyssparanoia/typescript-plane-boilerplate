import { UserInteractorFactory, newUserInteractorFactory } from '../../usecase/user'
import { mysqlClient } from '../mysql/client'
import { newUserRepositoryFactory } from '../mysql/repository/user'

export interface Dependency {
  userInteractorFactory: UserInteractorFactory
}

export const newDependency = (): Dependency => {
  const userRepositoryFactory = newUserRepositoryFactory(mysqlClient)

  return {
    userInteractorFactory: newUserInteractorFactory(userRepositoryFactory)
  }
}
