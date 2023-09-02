import { Logger } from '../../util/logger'
import { User } from '../model/user'
import { BaseGetOptions } from './base'

export type UserRepositoryFactory = (logger: Logger) => UserRepository

export interface UserRepository {
  get(query: UserRepositoryGetQuery): Promise<User | undefined>
}

export type UserRepositoryGetQuery = {
  id?: string
} & BaseGetOptions
