import { Request, Response, NextFunction } from "express";
import ProductService from "./product.service";
import ApiResponse from "@/shared/utils/api-response";

export default class ProductController {
  constructor(private productService: ProductService) { }

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const product = await this.productService.create(req.body);
      return ApiResponse.success(res, product, 201);
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
      const product = await this.productService.findById(id);
      return ApiResponse.success(res, product, 200);
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
      const product = await this.productService.updateById(req.body, id);
      return ApiResponse.success(res, product, 200);
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
      const product = await this.productService.deleteById(id);
      return ApiResponse.success(res, product, 200);
    } catch (err) {
      next(err);
    }
  }

  async findAll(req: Request, res: Response, next: NextFunction) {
    try {
      const clients = await this.productService.findAll();
      return ApiResponse.success(res, clients, 200);
    } catch (err) {
      next(err);
    }
  }
}
