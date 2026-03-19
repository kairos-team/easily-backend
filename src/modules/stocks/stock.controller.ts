import { Request, Response, NextFunction } from "express";
import StockService from "./stock.service";
import ApiResponse from "@/shared/utils/api-response";

export default class StockController {
  constructor(private stockService: StockService) { }

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const stock = await this.stockService.create(req.body);
      return ApiResponse.success(res, stock, 201);
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
      const stock = await this.stockService.findById(id);
      return ApiResponse.success(res, stock, 200);
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
      const stock = await this.stockService.updateById(req.body, id);
      return ApiResponse.success(res, stock, 200);
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
      const stock = await this.stockService.deleteById(id);
      return ApiResponse.success(res, stock, 200);
    } catch (err) {
      next(err);
    }
  }

  async findAll(req: Request, res: Response, next: NextFunction) {
    try {
      const clients = await this.stockService.findAll();
      return ApiResponse.success(res, clients, 200);
    } catch (err) {
      next(err);
    }
  }
}
