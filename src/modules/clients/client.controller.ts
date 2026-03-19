import { Request, Response, NextFunction } from "express";
import ClientService from "./client.service";
import ApiResponse from "@/shared/utils/api-response";

export default class ClientController {
  constructor(private clientService: ClientService) { }

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const client = await this.clientService.create(req.body);
      return ApiResponse.success(res, client, 201);
    } catch (err) {
      next(err);
    }
  }

  async findById(req: Request<{ id: string }>, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const client = await this.clientService.findById(id);
      return ApiResponse.success(res, client, 200);
    } catch (err) {
      next(err);
    }
  }

  async updateById(req: Request<{ id: string }>, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const client = await this.clientService.updateById(req.body, id);
      return ApiResponse.success(res, client, 200);
    } catch (err) {
      next(err);
    }
  }

  async deleteById(req: Request<{ id: string }>, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const client = await this.clientService.deleteById(id);
      return ApiResponse.success(res, client, 200);
    } catch (err) {
      next(err);
    }
  }

  async findAll(req: Request, res: Response, next: NextFunction) {
    try {
      const clients = await this.clientService.findAll();
      return ApiResponse.success(res, clients, 200);
    } catch (err) {
      next(err);
    }
  }
}