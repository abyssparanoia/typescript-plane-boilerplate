import { default as axios, AxiosResponse, AxiosInstance, AxiosError, AxiosRequestConfig } from 'axios'
// import sentry from 'helpers/sentry'
// const { captureException } = sentry()
import * as convertKeys from 'convert-keys'

export type HttpStatus = 200 | 400 | 404 | 500

export interface IPageInfo {
  totalCount?: number
  offsetValue?: number
  perPage?: number
  totalPages?: number
  currentPage?: number
  nextPage?: number
  prevPage?: number
  isFirstPage?: boolean
  isLastPage?: boolean
}

export class AxiosClient {
  private basedUrl: string
  private accessToken?: string
  private readonly axiosInstance: AxiosInstance

  public constructor({ url, accessToken }: { url: string; accessToken?: string }) {
    this.basedUrl = url
    this.accessToken = accessToken
    this.axiosInstance = axios.create({
      headers: {
        'Content-Type': 'application/json',
        Authorization: this.accessToken ? `Bearer ${this.accessToken}` : ''
      }
    })
  }

  public async get<T>(params: object = {}, option: AxiosRequestConfig = {}): Promise<AxiosResponse<T>> {
    return this.axiosInstance.get(this.basedUrl, { params, ...option }).then(res => {
      res.data = convertKeys.toCamel(res.data)
      return res
    })
  }

  public async post<T>(params: object, option: AxiosRequestConfig = {}): Promise<AxiosResponse<T>> {
    return this.axiosInstance.post(this.basedUrl, params, option).then(res => {
      return res
    })
  }

  public async put<T>(params: object, option: AxiosRequestConfig = {}): Promise<AxiosResponse<T>> {
    return this.axiosInstance.put(this.basedUrl, params, option).then(res => {
      return res
    })
  }

  public async patch<T>(params: object, option: AxiosRequestConfig = {}): Promise<AxiosResponse<T>> {
    return this.axiosInstance.patch(this.basedUrl, params, option).then(res => {
      return res
    })
  }

  public async delete<T>(): Promise<AxiosResponse<T>> {
    return this.axiosInstance
      .delete(this.basedUrl, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: this.accessToken ? `Bearer ${this.accessToken}` : ''
        },
        data: null
      })
      .then(res => {
        res.data = convertKeys.toCamel(res.data)
        return res
      })
  }
}

interface ErrorResponse {
  code: number
  debug_message: string
  error_title: string
  errors: string[]
  status: string
  title: string
}

export class HttpError extends Error {
  private readonly axiosError: AxiosError
  private readonly type?: string

  constructor(error: AxiosError) {
    super(error.message)
    this.name = new.target.name
    this.axiosError = error
    Object.setPrototypeOf(this, new.target.prototype)

    if (this.axiosError.response) {
      const { error_title, status } = this.axiosError.response.data as ErrorResponse
      this.message = error_title
      this.type = status
      //   captureException(error, this.axiosError.response)
    } else {
      this.message = 'アプリケーションエラーが発生しました'
      //   captureException(error, {})
    }
  }
}
