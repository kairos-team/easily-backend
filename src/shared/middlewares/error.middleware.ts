import { Request, Response, NextFunction } from "express";
import AppError from "../utils/app-error";
import ApiResponse from "../utils/api-response";

export function errorMiddleware(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (!(err instanceof AppError)) {
    err = AppError.fromPrismaError(err);
  }

  return ApiResponse.error(
    res,
    err,
    err.message,
    err.statusCode
  );
}