import { Prisma } from "@prisma/client";
import UserRepository from "./user.repository";
import AppError from "@/shared/utils/app-error";

export default class UserService {
  constructor(private userRepository: UserRepository) {}

  async create(data: Prisma.UserCreateInput) {
    return await this.userRepository.create(data);
  }

  async findById(id: string) {
    const user = await this.userRepository.findById(id);
    if (!user) {
      throw new AppError("Cliente não encontrado", 404);
    }
    return user;
  }

  async updateById(data: Prisma.UserUpdateInput, id: string) {
    const user = await this.userRepository.updateById(id, data);
    if (!user) {
      throw new AppError("Cliente não encontrado", 404);
    }
    return await this.userRepository.updateById(id, data);
  }

  async deleteById(id: string) {
    const user = await this.userRepository.deleteById(id);
    if (!user) {
      throw new AppError("Cliente não encontrato", 404);
    }
    return await this.userRepository.deleteById(id);
  }

  async findAll() {
    return await this.userRepository.findAll();
  }
}
