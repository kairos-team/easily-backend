import { Prisma } from "@prisma/client";
import CompanyRepository from "./company.repository";
import AppError from "@/shared/utils/AppError";

export default class CompanyService {
  constructor(private companyRepository: CompanyRepository) {}

  async create(data: Prisma.CompanyCreateInput) {
    return await this.companyRepository.create(data);
  }

  async findById(id: string) {
    const company = await this.companyRepository.findById(id);
    if (!company) {
      throw new AppError("Empresa não encontrada", 404);
    }
    return company;
  }

  async updateById(data: Prisma.CompanyUpdateInput, id: string) {
    const company = await this.companyRepository.updateById(id, data);
    if (!company) {
      throw new AppError("Empresa não encontrada", 404);
    }
    return await this.companyRepository.updateById(id, data);
  }

  async deleteById(id: string) {
    const company = await this.companyRepository.deleteById(id);
    if (!company) {
      throw new AppError("Empresa não encontrada", 404);
    }

    return await this.companyRepository.deleteById(id);
  }

  async findAll() {
    return await this.companyRepository.findAll();
  }
}
