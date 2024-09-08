import { UserInteractorFactory, newUserInteractorFactory } from '../../usecase/user'
import { mysqlClient } from '../mysql/client'
import { newTransactable } from '../mysql/repository/transactable'
import { newUserRepositoryFactory } from '../mysql/repository/user'

export interface Dependency {
  userInteractorFactory: UserInteractorFactory
}

export const newDependency = (): Dependency => {
  const transactable = newTransactable(mysqlClient)
  const userRepositoryFactory = newUserRepositoryFactory()

  return {
    userInteractorFactory: newUserInteractorFactory(transactable, userRepositoryFactory)
  }
}
