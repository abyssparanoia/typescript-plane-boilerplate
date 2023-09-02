import { Request, Response } from 'express'
import { UserInteractorFactory } from '../../../../usecase/user'
import { userToOpenAPIModel } from './marshaller/user'
import { GetUserResponse } from '../generated/model/getUserResponse'

export const newUserHandler = (userInteractorFactory: UserInteractorFactory) => {
  return new UserHandler(userInteractorFactory)
}

export class UserHandler {
  constructor(private readonly userInteractorFactory: UserInteractorFactory) {}

  public async get(req: Request, res: Response) {
    const userInteractor = this.userInteractorFactory(req.logger)
    const { userId } = req.params
    const { user } = await userInteractor.get({ id: userId })
    const result: GetUserResponse = {
      user: userToOpenAPIModel(user)
    }
    res.json(result)
  }
}
