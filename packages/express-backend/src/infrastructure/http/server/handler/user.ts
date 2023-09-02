import { Request, Response } from 'express'
import { UserInteractor } from '../../../../usecase/user'

export const newUserHandler = (userInteractor: UserInteractor) => {
  return new UserHandler(userInteractor)
}

export class UserHandler {
  constructor(private readonly userInteractor: UserInteractor) {}

  public async get(req: Request, res: Response) {
    const { userId } = req.params
    const user = await this.userInteractor.get({ id: userId })
    res.json(user)
  }
}
