import { generateId } from '../../util/id'

export type User = {
  id: string
  name: string
  email: string
  createdAt: Date
  updatedAt: Date
}

export const newUser = (name: string, email: string, t: Date): User => ({
  id: generateId(),
  name,
  email,
  createdAt: t,
  updatedAt: t
})
