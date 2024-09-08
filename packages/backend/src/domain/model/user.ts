import { generateId } from '../../util/id'

export class User {
  id: string
  name: string
  email: string
  createdAt: Date
  updatedAt: Date

  constructor(id: string, name: string, email: string, createdAt: Date, updatedAt: Date) {
    this.id = id
    this.name = name
    this.email = email
    this.createdAt = createdAt
    this.updatedAt = updatedAt
  }
}

export const newUser = (name: string, email: string, t: Date): User => new User(generateId(), name, email, t, t)
