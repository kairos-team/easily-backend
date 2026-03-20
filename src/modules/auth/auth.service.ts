import AppError from "@/shared/utils/app-error";
import { comparePassword, hashPassword } from "@/shared/utils/hash";
import { generateRefreshToken, generateSecretToken } from "@/shared/utils/jwt";
import AuthRepository from "./auth.repository";

export default class AuthService {
  constructor(private authRepository: AuthRepository) {}

  async register(name: string, email: string, password: string) {
    const exists = await this.authRepository.findByEmail(email);

    if (exists) {
      throw new AppError("Usuário já existente", 303);
    };

    const hashed = await hashPassword(password);

    return this.authRepository.create({ name, email, password: hashed });
  }

  async login(email: string, password: string) {
    const user = await this.authRepository.findByEmail(email);

    if (!user) {
      throw new AppError("Usuário não encontrado", 404);
    };

    const valid = await comparePassword(password, user.password);

    if (!valid) {
      throw new AppError("Senha inválida", 401);
    };

    const payload = {
      id: user.id,
      name: user.name
    };

    return {
      secretToken: generateSecretToken(payload),
      refreshToken: generateRefreshToken(payload)
    };
  }
}
