import { Prisma, PrismaClient } from "@prisma/client";

export default class ServiceOrderRepository {
  constructor(private prisma: PrismaClient) {}

  async create(data: Prisma.ServiceOrderCreateInput) {
    return await this.prisma.serviceOrder.create({ data });
  }

  async findById(id: string) {
    return await this.prisma.serviceOrder.findUnique({
      where: { id },
    });
  }

  async updateById(id: string, data: Prisma.ServiceOrderUpdateInput) {
    return await this.prisma.serviceOrder.update({
      where: { id },
      data,
    });
  }

  async deleteById(id: string) {
    return await this.prisma.serviceOrder.findUnique({
      where: { id },
    });
  }

  async findAll() {
    return await this.prisma.serviceOrder.findMany();
  }
}
