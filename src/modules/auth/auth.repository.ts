import { Prisma, PrismaClient } from "@prisma/client";

export default class AuthRepository {
  constructor(private prisma: PrismaClient) {}

  async findByEmail(email: string) {
    return await this.prisma.user.findUnique({ where: { email } });
  }

  async create(data: Prisma.UserCreateInput) {
    return await this.prisma.user.create({ data });
  }
}
