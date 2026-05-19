import { Request, Response } from 'express'

export const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: any
) => {
  const status = err.status || 500
  const message = err.message || 'Error interno del servidor'

  console.error(`[Error] Status: ${status}, Message: ${message}`, err)

  res.status(status).json({
    error: {
      status,
      message,
      ...(process.env.NODE_ENV === 'development' && { details: err.details }),
    },
  })
}
