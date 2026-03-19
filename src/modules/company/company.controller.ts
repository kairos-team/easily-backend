import { Request, Response, NextFunction } from "express";
import CompanyService from "./company.service";
import ApiResponseHandler from "@/shared/utils/ApiResponseHandler";

export default class CompanyController {
  constructor(private companyService: CompanyService) {}

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const company = await this.companyService.create(req.body);
      return ApiResponseHandler.success(res, company, 201);
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
      const company = await this.companyService.findById(id);
      return ApiResponseHandler.success(res, company, 200);
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
      const company = await this.companyService.updateById(req.body, id);
      return ApiResponseHandler.success(res, company, 200);
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
      const company = await this.companyService.deleteById(id);
      return ApiResponseHandler.success(res, company, 200);
    } catch (err) {
      next(err);
    }
  }

  async findAll(req: Request, res: Response, next: NextFunction) {
    try {
      const company = await this.companyService.findAll();
      return ApiResponseHandler.success(res, company, 200);
    } catch (err) {
      next(err);
    }
  }
}
