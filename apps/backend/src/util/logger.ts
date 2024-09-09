import * as winston from 'winston'
import path from 'path'
import { v4 as uuidv4 } from 'uuid'

export class Logger {
  logger: winston.Logger

  constructor() {
    const logger = winston.createLogger({
      level: 'debug',
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.errors({ stack: true }),
        winston.format.label({ label: path.basename(require.main?.filename || '') }),
        winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        winston.format.metadata({ fillExcept: ['message', 'level', 'timestamp', 'label'] })
      ),
      defaultMeta: {
        get requestId() {
          return uuidv4()
        }
      },
      transports: [
        new winston.transports.Console({
          format: winston.format.combine(winston.format.json())
        })
      ]
    })
    this.logger = logger
  }

  getLogger() {
    return this.logger
  }

  info(message: string, ...args: unknown[]) {
    this.logger.info(message, ...args)
  }

  error(err: Error | string, ...args: unknown[]) {
    // @ts-expect-error Winston logger accepts string or Error for error method
    this.logger.error(err, ...args)
  }

  warn(message: string, ...args: unknown[]) {
    this.logger.warn(message, ...args)
  }

  debug(message: string, ...args: unknown[]) {
    this.logger.debug(message, ...args)
  }

  verbose(message: string, ...args: unknown[]) {
    this.logger.verbose(message, ...args)
  }
}

export const logger = new Logger()
