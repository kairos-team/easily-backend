import { Prisma, PrismaClient } from "@prisma/client";

export default class UserRepository {
  constructor(private prisma: PrismaClient) {}

  async create(data: Prisma.UserCreateInput) {
    return await this.prisma.user.create({ data });
  }

  async findById(id: string) {
    return await this.prisma.user.findUnique({
      where: { id },
    });
  }

  async updateById(id: string, data: Prisma.UserUpdateInput) {
    return await this.prisma.user.update({
      where: { id },
      data,
    });
  }

  async deleteById(id: string) {
    return await this.prisma.user.delete({
      where: { id },
    });
  }

  async findAll() {
    return await this.prisma.user.findMany();
  }
}
