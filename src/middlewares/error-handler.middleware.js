import { StatusCodes } from 'http-status-codes';

export function errorHandler(err, _req, res, _next) {
  const statusCode = err.status || StatusCodes.INTERNAL_SERVER_ERROR;
  console.log(`[ERROR] ${err.message}`)
  return res.status(statusCode).json({
    status: err.status,
    message: err.message
  });
}