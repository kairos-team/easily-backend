import { Request, Response, NextFunction } from "express";
import VehicleService from "./vehicle.service";
import ApiResponseHandler from "@/shared/utils/ApiResponseHandler";

export default class VehicleController {
  constructor(private vehicleService: VehicleService) {}

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const vehicle = await this.vehicleService.create(req.body);
      return ApiResponseHandler.success(res, vehicle, 201);
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
      const vehicle = await this.vehicleService.findById(id);
      return ApiResponseHandler.success(res, vehicle, 200);
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
      const vehicle = await this.vehicleService.updateById(req.body, id);
      return ApiResponseHandler.success(res, vehicle, 200);
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
      const vehicle = await this.vehicleService.deleteById(id);
      return ApiResponseHandler.success(res, vehicle, 200);
    } catch (err) {
      next(err);
    }
  }

  async findAll(req: Request, res: Response, next: NextFunction) {
    try {
      const vehicle = await this.vehicleService.findAll();
      return ApiResponseHandler.success(res, vehicle, 200);
    } catch (err) {
      next(err);
    }
  }
}
