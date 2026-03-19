import { Request, Response, NextFunction } from "express";
import ApiResponse from "../utils/api-response";
import { verifySecretToken } from "../utils/jwt";

export function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return ApiResponse.error(res, 401, "Sem token");
  }

  const [, token] = authHeader.split(" ");

  try{
    const decoded = verifySecretToken(token);

    (req as any).user = decoded;

    next();
  }catch {
    return ApiResponse.error(res, 403, "Token inválido")
  }
}