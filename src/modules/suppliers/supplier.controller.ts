import { Request, Response, NextFunction } from "express";
import SupplierService from "./supplier.service";
import ApiResponse from "@/shared/utils/api-response";

export default class SupplierController {
  constructor(private supplierService: SupplierService) { }

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const supplier = await this.supplierService.create(req.body);
      return ApiResponse.success(res, supplier, 201);
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
      const supplier = await this.supplierService.findById(id);
      return ApiResponse.success(res, supplier, 200);
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
      const supplier = await this.supplierService.updateById(req.body, id);
      return ApiResponse.success(res, supplier, 200);
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
      const supplier = await this.supplierService.deleteById(id);
      return ApiResponse.success(res, supplier, 200);
    } catch (err) {
      next(err);
    }
  }

  async findAll(req: Request, res: Response, next: NextFunction) {
    try {
      const supplier = await this.supplierService.findAll();
      return ApiResponse.success(res, supplier, 200);
    } catch (err) {
      next(err);
    }
  }
}
