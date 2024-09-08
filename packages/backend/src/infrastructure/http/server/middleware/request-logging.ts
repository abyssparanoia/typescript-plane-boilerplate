import { NextFunction, Request, Response } from 'express'

export const requestLogging = (req: Request, res: Response, next: NextFunction) => {
  const { headers, body, url, method } = req
  next()
  res.on('finish', () => {
    if (res.statusCode < 400) {
      req.logger.info(`${req.method}: ${req.url} -> ${res.statusCode}`, { headers, body, url, method })
    }
  })
}
