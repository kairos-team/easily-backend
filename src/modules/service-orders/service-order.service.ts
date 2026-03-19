import { Prisma } from "@prisma/client";
import ServiceOrderRepository from "./service-order.repository";
import AppError from "@/shared/utils/app-error";

export default class ServiceOrderService {
  constructor(private serviceOrderRepository: ServiceOrderRepository) { }

  async create(data: Prisma.ServiceOrderCreateInput) {
    return await this.serviceOrderRepository.create(data);
  }

  async findById(id: string) {
    const serviceOrder = await this.serviceOrderRepository.findById(id);
    if (!serviceOrder) {
      throw new AppError("Ordem de serviço não encontrada");
    }
    return serviceOrder;
  }

  async updateById(data: Prisma.ServiceOrderUpdateInput, id: string) {
    const serviceOrder = await this.serviceOrderRepository.findById(id);
    if (!serviceOrder) {
      throw new AppError("Ordem de serviço não encontrada");
    }
    return await this.serviceOrderRepository.updateById(id, data);
  }

  async deleteById(id: string) {
    const serviceOrder = await this.serviceOrderRepository.findById(id);
    if (!serviceOrder) {
      throw new AppError("Ordem de serviço não encontrada");
    }
    return await this.serviceOrderRepository.deleteById(id);
  }

  async findAll() {
    return await this.serviceOrderRepository.findAll();
  }
}
