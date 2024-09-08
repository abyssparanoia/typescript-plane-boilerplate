export class ApplicationError extends Error {
  statusCode: number

  constructor(msg: string, statusCode: number) {
    super(msg)
    Object.setPrototypeOf(this, ApplicationError.prototype)
    this.statusCode = statusCode
  }

  public serializeToJson() {
    return {
      statusCode: this.statusCode,
      message: this.message
    }
  }
}
