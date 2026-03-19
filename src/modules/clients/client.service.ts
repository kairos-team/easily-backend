import { Prisma } from "@prisma/client";
import ClientRepository from "./client.repository";
import AppError from "@/shared/utils/app-error";

export default class ClientService {
  constructor(private clientRepository: ClientRepository) { }

  async create(data: Prisma.ClientCreateInput) {
    return await this.clientRepository.create(data);
  }

  async findById(id: string) {
    const client = await this.clientRepository.findById(id);
    if (!client) {
      throw new AppError("Cliente não encontrado", 404);
    }

    return client;
  }

  async updateById(data: Prisma.ClientUpdateInput, id: string) {
    const client = await this.clientRepository.findById(id);
    if (!client) {
      throw new AppError("Cliente não encontrado", 404);
    }

    return await this.clientRepository.updateById(id, data);
  }

  async deleteById(id: string) {
    const client = await this.clientRepository.findById(id);
    if (!client) {
      throw new AppError("Cliente não encontrado", 404);
    }

    return await this.clientRepository.deleteById(id);
  }

  async findAll() {
    return await this.clientRepository.findAll();
  }
}