import { Request, Response, NextFunction } from "express";
import UserService from "./user.service";
import ApiResponse from "@/shared/utils/api-response";

export default class UserController {
  constructor(private userService: UserService) { }

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const user = await this.userService.create(req.body);
      return ApiResponse.success(res, user, 201);
    } catch (err) {
      next(err);
    }
  }

  async findById(
    req: Request<{ id: string }>,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const { id } = req.params;
      const user = await this.userService.findById(id);
      return ApiResponse.success(res, user, 200);
    } catch (err) {
      next(err);
    }
  }

  async updateById(
    req: Request<{ id: string }>,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const { id } = req.params;
      const user = await this.userService.updateById(req.body, id);
      return ApiResponse.success(res, user, 200);
    } catch (err) {
      next(err);
    }
  }

  async deleteById(
    req: Request<{ id: string }>,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const { id } = req.params;
      const user = await this.userService.deleteById(id);
      return ApiResponse.success(res, user, 200);
    } catch (err) {
      next(err);
    }
  }

  async findAll(req: Request, res: Response, next: NextFunction) {
    try {
      const users = await this.userService.findAll();
      return ApiResponse.success(res, users, 200);
    } catch (err) {
      next(err);
    }
  }
}
