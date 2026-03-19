import { Prisma, PrismaClient } from "@prisma/client";

export default class CompanyRepository {
  constructor(private prisma: PrismaClient) {}

  async create(data: Prisma.CompanyCreateInput) {
    return await this.prisma.company.create({ data });
  }

  async findById(id: string) {
    return await this.prisma.company.findUnique({
      where: { id },
    });
  }

  async updateById(id: string, data: Prisma.CompanyUpdateInput) {
    return await this.prisma.company.update({
      where: { id },
      data,
    });
  }

  async deleteById(id: string) {
    return await this.prisma.company.delete({
      where: { id },
    });
  }

  async findAll() {
    return await this.prisma.company.findMany();
  }
}
