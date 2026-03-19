import { Prisma } from "@prisma/client";
import StockRepository from "./stock.repository";
import AppError from "@/shared/utils/app-error";

export default class StockService {
  constructor(private stockRepository: StockRepository) {}

  async create(data: Prisma.StockCreateInput) {
    return await this.stockRepository.create(data);
  }

  async findById(id: string) {
    const stock = await this.stockRepository.findById(id);
    if (!stock) {
      throw new AppError("Estoque não encontrado", 404);
    }

    return stock;
  }

  async updateById(data: Prisma.StockUpdateInput, id: string) {
    const stock = await this.stockRepository.findById(id);
    if (!stock) {
      throw new AppError("Estoque não encontrado", 404);
    }

    return await this.stockRepository.updateById(id, data);
  }

  async deleteById(id: string) {
    const stock = await this.stockRepository.findById(id);
    if (!stock) {
      throw new AppError("Estoque não encontrado", 404);
    }

    return await this.stockRepository.deleteById(id);
  }

  async findAll() {
    return await this.stockRepository.findAll();
  }
}
