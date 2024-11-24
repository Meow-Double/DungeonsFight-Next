import { PrismaClient } from "@prisma/client";

const prismaClientSingleton = () => {
  return new PrismaClient();
};

const prismaGlobal = globalThis as typeof globalThis & {
  prisma?: ReturnType<typeof prismaClientSingleton>;
};

if (!prismaGlobal.prisma) {
  prismaGlobal.prisma = prismaClientSingleton();
}

export const prisma = prismaGlobal.prisma;

if (process.env.NODE_ENV === "production") {
  prismaGlobal.prisma = prisma;
}
