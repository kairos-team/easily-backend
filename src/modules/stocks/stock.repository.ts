import { Prisma, PrismaClient } from "@prisma/client";

export default class StockRepository {
  constructor(private prisma: PrismaClient) {}

  async create(data: Prisma.StockCreateInput) {
    return await this.prisma.stock.create({ data });
  }

  async findById(id: string) {
    return await this.prisma.stock.findUnique({
      where: { id },
    });
  }

  async updateById(id: string, data: Prisma.StockUpdateInput) {
    return await this.prisma.stock.update({
      where: { id },
      data,
    });
  }

  async deleteById(id: string) {
    return await this.prisma.stock.delete({
      where: { id },
    });
  }

  async findAll() {
    return await this.prisma.stock.findMany();
  }
}
