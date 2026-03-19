import { Prisma, PrismaClient } from "@prisma/client";

export default class ProductRepository {
  constructor(private prisma: PrismaClient) {}

  async create(data: Prisma.ProductCreateInput) {
    return await this.prisma.product.create({ data });
  }

  async findById(id: string) {
    return await this.prisma.product.findUnique({
      where: { id },
    });
  }

  async updateById(id: string, data: Prisma.ProductUpdateInput) {
    return await this.prisma.product.update({ where: { id }, data });
  }

  async deleteById(id: string) {
    return await this.prisma.product.delete({ where: { id } });
  }

  async findAll() {
    return await this.prisma.product.findMany();
  }
}
