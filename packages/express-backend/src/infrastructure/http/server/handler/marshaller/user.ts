import { User } from '../../generated/model/user'
import { User as UserModel } from '../../../../../domain/model/user'

export const userToOpenAPIModel = (user: UserModel): User => ({
  id: user.id,
  name: user.name,
  email: user.email,
  createdAt: user.createdAt.toISOString(),
  updatedAt: user.updatedAt.toISOString()
})
