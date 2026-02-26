import { PrismaClient } from "@prisma/client"

export class ClientService {
  constructor(private prisma: PrismaClient) {}

  async createClient(data: {
    name: string
    email: string
    phone?: string
  }): Promise<Client> {
    return this.prisma.client.create({
      data
    })
  }
}