import { Request, Response } from 'express'
import { UserInteractor } from '../../../../usecase/user'

export const newUserHandler = (userInteractor: UserInteractor) => {
  return new UserHandler(userInteractor)
}

export class UserHandler {
  constructor(private readonly userInteractor: UserInteractor) {}

  public async get(req: Request, res: Response) {
    const { userId } = req.params
    req.logger.info('user get start param')
    const user = await this.userInteractor.get({ id: userId })
    req.logger.info('user get done')
    res.json(user)
  }
}
