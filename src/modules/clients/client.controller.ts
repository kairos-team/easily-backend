import { Request, Response, NextFunction } from "express";
import ClientService from "./client.service";
import ApiResponseHandler from "@/shared/utils/ApiResponseHandler";

export default class ClientController {
  constructor(private clientService: ClientService) {}

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const client = await this.clientService.create(req.body);
      return ApiResponseHandler.success(res, client, 201);
    } catch (err) {
      next(err);
    }
  }

  async findById(req: Request<{ id: string }>, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const client = await this.clientService.findById(id);
      return ApiResponseHandler.success(res, client, 200);
    } catch (err) {
      next(err);
    }
  }

  async updateById(req: Request<{ id: string }>, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const client = await this.clientService.updateById(req.body, id);
      return ApiResponseHandler.success(res, client, 200);
    } catch (err) {
      next(err);
    }
  }

  async deleteById(req: Request<{ id: string }>, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const client = await this.clientService.deleteById(id);
      return ApiResponseHandler.success(res, client, 200);
    } catch (err) {
      next(err);
    }
  }

  async findAll(req: Request, res: Response, next: NextFunction) {
    try {
      const clients = await this.clientService.findAll();
      return ApiResponseHandler.success(res, clients, 200);
    } catch (err) {
      next(err);
    }
  }
}