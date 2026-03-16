import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@prisma/client";

const connectionString = `${process.env.DATABASE_URL}`;

const adapter = new PrismaPg({ connectionString });

export const prisma = new PrismaClient({ adapter });

export default async function dbConnection() {
  try {
    await prisma.$connect();
    console.log("✅ Conectado ao PostgreSQL");
  } catch (error) {
    console.error("❌ Erro ao conectar no banco:", error);
  }
}
