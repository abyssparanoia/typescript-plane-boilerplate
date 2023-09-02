import { Request, Response } from 'express'
import { UserInteractorFactory } from '../../../../usecase/user'

export const newUserHandler = (userInteractorFactory: UserInteractorFactory) => {
  return new UserHandler(userInteractorFactory)
}

export class UserHandler {
  constructor(private readonly userInteractorFactory: UserInteractorFactory) {}

  public async get(req: Request, res: Response) {
    const userInteractor = this.userInteractorFactory(req.logger)
    const { userId } = req.params
    const user = await userInteractor.get({ id: userId })
    res.json(user)
  }
}
