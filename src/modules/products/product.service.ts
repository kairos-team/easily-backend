import { Prisma } from "@prisma/client";
import ProductRepository from "./product.repository";
import AppError from "@/shared/utils/app-error";

export default class ProductService {
  constructor(private productRepository: ProductRepository) {}

  async create(data: Prisma.ProductCreateInput) {
    return await this.productRepository.create(data);
  }

  async findById(id: string) {
    const product = await this.productRepository.findById(id);
    if (!product) {
      throw new AppError("Cliente não encontrado", 404);
    }

    return product;
  }

  async updateById(data: Prisma.ProductUpdateInput, id: string) {
    const product = await this.productRepository.findById(id);
    if (!product) {
      throw new AppError("Produto não encontrado", 404);
    }

    return await this.productRepository.updateById(id, data);
  }

  async deleteById(id: string) {
    const product = await this.productRepository.findById(id);
    if (!product) {
      throw new AppError("Produto não encontrado", 404);
    }

    return await this.productRepository.deleteById(id);
  }

  async findAll() {
    return await this.productRepository.findAll();
  }
}
