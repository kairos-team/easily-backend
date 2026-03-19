import { Prisma, PrismaClient } from "@prisma/client";

export default class VehicleRepository {
  constructor(private prisma: PrismaClient) {}

  async create(data: Prisma.VehicleCreateInput) {
    return await this.prisma.vehicle.create({ data });
  }

  async findById(id: string) {
    return await this.prisma.vehicle.findUnique({
      where: { id },
    });
  }

  async updateById(id: string, data: Prisma.VehicleUpdateInput) {
    return await this.prisma.vehicle.update({
      where: { id },
      data,
    });
  }

  async deleteById(id: string) {
    return await this.prisma.vehicle.delete({ where: { id } });
  }

  async findAll() {
    return await this.prisma.vehicle.findMany();
  }
}
