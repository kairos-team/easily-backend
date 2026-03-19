import { Request, Response, NextFunction } from "express";
import ProductService from "./product.service";
import ApiResponseHandler from "@/shared/utils/ApiResponseHandler";

export default class ProductController {
  constructor(private productService: ProductService) {}

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const product = await this.productService.create(req.body);
      return ApiResponseHandler.success(res, product, 201);
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
      return ApiResponseHandler.success(res, product, 200);
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
      return ApiResponseHandler.success(res, product, 200);
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
      return ApiResponseHandler.success(res, product, 200);
    } catch (err) {
      next(err);
    }
  }

  async findAll(req: Request, res: Response, next: NextFunction) {
    try {
      const clients = await this.productService.findAll();
      return ApiResponseHandler.success(res, clients, 200);
    } catch (err) {
      next(err);
    }
  }
}
