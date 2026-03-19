import { Prisma, PrismaClient } from "@prisma/client";

export default class SupplierRepository {
  constructor(private prisma: PrismaClient) {}

  async create(data: Prisma.SupplierCreateInput) {
    return await this.prisma.supplier.create({ data });
  }

  async findById(id: string) {
    return await this.prisma.supplier.findUnique({
      where: { id },
    });
  }

  async updateById(id: string, data: Prisma.SupplierUpdateInput) {
    return await this.prisma.supplier.update({
      where: { id },
      data,
    });
  }

  async deleteById(id: string) {
    return await this.prisma.supplier.delete({
      where: { id },
    });
  }

  async findAll() {
    return await this.prisma.supplier.findMany();
  }
}
