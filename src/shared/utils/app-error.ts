import { Prisma } from "@prisma/client";

export default class AppError extends Error {
  public statusCode: number;
  public validationErrors?: string[];

  constructor(message: string, statusCode: number = 400, validationErrors?: string[]) {
    super(message);
    this.statusCode = statusCode;
    this.validationErrors = validationErrors;

    Error.captureStackTrace(this, this.constructor);
  }

  static fromPrismaError(error: any): AppError {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      switch (error.code) {
        case "P2002":
          return new AppError(
            `Campo único violado: ${error.meta?.target}`,
            409
          );

        case "P2025":
          return new AppError(
            "Registro não encontrado",
            404
          );

        case "P2003":
          return new AppError(
            "Violação de chave estrangeira",
            400
          );

        default:
          return new AppError(`Erro conhecido do Primsa: ${error.code}`, 400);
      }
    }

    if (error instanceof Prisma.PrismaClientValidationError) {
      return new AppError("Erro de validação do Prisma", 400);
    }

    return new AppError(error.message || "Erro interno", 500);
  }
}