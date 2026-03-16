import { Prisma, PrismaClient } from "@prisma/client"

export default class ClientRepository {
  constructor(private prisma: PrismaClient) {}

  async create(data: Prisma.ClientCreateInput) {
    return await this.prisma.client.create({ data });
  }

  async findById(id: string) {
    return await this.prisma.client.findUnique({
      where: { id }
    });
  }

  async updateById(id: string, data: Prisma.ClientUpdateInput) {
    return await this.prisma.client.update({
      where: { id },
      data
    });
  }

  async deleteById(id: string) {
    return await this.prisma.client.delete({
      where: { id }
    });
  }

  async findAll() {
    return await this.prisma.client.findMany();
  }
}