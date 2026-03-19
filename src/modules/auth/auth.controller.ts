import { Request, Response, NextFunction } from "express";
import AuthService from "./auth.service";
import ApiResponse from "@/shared/utils/api-response";
import { generateSecretToken, verifyRefreshToken } from "@/shared/utils/jwt";

export default class AuthController {
  constructor(private authService: AuthService) { }

  async register(req: Request, res: Response, next: NextFunction) {
    try {
      const { name, email, password } = req.body;
      const user = await this.authService.register(name, email, password);
      return ApiResponse.success(res, user, 201);
    } catch (err) {
      next(err);
    }
  }

  async login(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, password } = req.body;
      const tokens = await this.authService.login(email, password);
      return ApiResponse.success(res, tokens, 200);
    } catch (err) {
      next(err);
    }
  }

  async refresh(req: Request, res: Response, next: NextFunction) {
    const { refreshToken } = req.body;

    if (!refreshToken) {
      return ApiResponse.error(res, 401, "Refresh obrigatório")
    }

    try {
      const decoded = verifyRefreshToken(refreshToken) as any;

      const newSecretToken = generateSecretToken({
        id: decoded.id,
        name: decoded.name
      });

      return res.json({ secretToken: newSecretToken });
    } catch (err) {
      next(err);
    }
  }
}