import { Request, Response, NextFunction } from "express";
import ServiceOrderService from "./serviceOrder.service";
import ApiResponseHandler from "@/shared/utils/ApiResponseHandler";

export default class ServiceOrderController {
  constructor(private serviceOrderService: ServiceOrderService) {}

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const serviceOrder = await this.serviceOrderService.create(req.body);
      return ApiResponseHandler.success(res, serviceOrder, 201);
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
      const { id } = req.body;
      const serviceOrder = await this.serviceOrderService.findById(id);
      return ApiResponseHandler.success(res, serviceOrder, 200);
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
      const { id } = req.body;
      const serviceOrder = await this.serviceOrderService.updateById(
        req.body,
        id,
      );
      return ApiResponseHandler.success(res, serviceOrder, 200);
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
      const { id } = req.body;
      const serviceOrder = await this.serviceOrderService.deleteById(id);
      return ApiResponseHandler.success(res, serviceOrder, 200);
    } catch (err) {
      next(err);
    }
  }

  async findAll(req: Request, res: Response, next: NextFunction) {
    try {
      const serviceOrder = await this.serviceOrderService.findAll();
      return ApiResponseHandler.success(res, serviceOrder, 200);
    } catch (err) {
      next(err);
    }
  }
}
