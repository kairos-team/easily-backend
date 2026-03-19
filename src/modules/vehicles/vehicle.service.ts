import { Prisma } from "@prisma/client";
import VehicleRepository from "./vehicle.repository";
import AppError from "@/shared/utils/app-error";

export default class VehicleService {
  constructor(private vehicleRepository: VehicleRepository) {}

  async create(data: Prisma.VehicleCreateInput) {
    return await this.vehicleRepository.create(data);
  }

  async findById(id: string) {
    const vehicle = await this.vehicleRepository.findById(id);
    if (!vehicle) {
      throw new AppError("Veículo não encontrado", 404);
    }
    return vehicle;
  }

  async updateById(data: Prisma.VehicleUpdateInput, id: string) {
    const vehicle = await this.vehicleRepository.findById(id);
    if (!vehicle) {
      throw new AppError("Veículo não encontrado", 404);
    }
    return await this.vehicleRepository.updateById(id, data);
  }

  async deleteById(id: string) {
    const vehicle = await this.vehicleRepository.findById(id);
    if (!vehicle) {
      throw new AppError("Veículo não encontrado", 404);
    }
    return await this.vehicleRepository.deleteById(id);
  }

  async findAll() {
    return await this.vehicleRepository.findAll();
  }
}
