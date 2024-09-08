import { NextFunction, Request, Response } from 'express'
import { ApplicationError } from '../../../../util/application-error'

export const errorLogging = (err: Error, req: Request, res: Response, _: NextFunction) => {
  const { headers, body, url, method } = req
  if (err instanceof ApplicationError) {
    const logArgs = {
      headers,
      body,
      url,
      method,
      err: err.serializeToJson()
    }
    if (err.statusCode < 500) {
      req.logger.warn(`${req.method}: ${req.url} -> ${err.statusCode.toString()}`, logArgs)
    } else {
      req.logger.error(`${req.method}: ${req.url} -> ${err.statusCode.toString()}`, logArgs)
    }
    res.status(err.statusCode).json(err.serializeToJson())
  } else {
    req.logger.error(`${req.method}: ${req.url} -> 500`, { headers, body, url, method, err: err.message })
    res.status(500).json({ statusCode: 500, message: 'Internal Server Error' })
  }
}
