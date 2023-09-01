import { User } from '../model/user'
import { BaseGetOptions } from './base'

export interface UserRepository {
  get(query: UserRepositoryGetQuery): Promise<User>
}

export type UserRepositoryGetQuery = {
  id?: string
} & BaseGetOptions
