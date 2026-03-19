import { Prisma } from "@prisma/client";
import SupplierRepository from "./supplier.repository";
import AppError from "@/shared/utils/AppError";

export default class SupplierService {
  constructor(private supplierRepository: SupplierRepository) {}

  async create(data: Prisma.SupplierCreateInput) {
    return await this.supplierRepository.create(data);
  }

  async findById(id: string) {
    const supplier = await this.supplierRepository.findById(id);
    if (!supplier) {
      throw new AppError("Suprimento não encontrado", 404);
    }
    return supplier;
  }

  async updateById(data: Prisma.SupplierUpdateInput, id: string) {
    const supplier = await this.supplierRepository.findById(id);
    if (!supplier) {
      throw new AppError("Suprimento não encontrado", 404);
    }
    return await this.supplierRepository.updateById(data, id);
  }

  async deleteById(id: string) {
    const supplier = await this.supplierRepository.findById(id);
    if (!supplier) {
      throw new AppError("Suprimento não encontrado", 404);
    }
    return await this.supplierRepository.deleteById(id);
  }

  async findAll() {
    return await this.supplierRepository.findAll();
  }
}
