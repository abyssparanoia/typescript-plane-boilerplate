import { NextFunction, Request, Response } from 'express'
import { Logger } from '../../../../util/logger'

export const attachLogger = (req: Request, _res: Response, next: NextFunction) => {
  req.logger = new Logger()
  next()
}
