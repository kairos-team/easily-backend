import { Request, Response, NextFunction } from "express";
import AppError from "../utils/AppError";
import ApiResponseHandler from "../utils/ApiResponseHandler";

export function errorMiddleware(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (!(err instanceof AppError)) {
    err = AppError.fromPrismaError(err);
  }

  return ApiResponseHandler.error(
    res,
    err,
    err.message,
    err.statusCode
  );
}