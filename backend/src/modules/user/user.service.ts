import { prisma } from "../../database/prisma";
import { Prisma } from "../../generated/prisma/client";

export async function findAllUsers() {
      return await prisma.user.findMany();
}

export async function createUser(
      name: string,
      email: string,
      password: string,
) {
      try {
            const data = await prisma.user.create({
                  data: {
                        name: name,
                        email: email,
                        password: password,
                  },
            });

            return data;
      } catch (err) {
            if (
                  err instanceof Prisma.PrismaClientKnownRequestError &&
                  err.code === "P2002"
            ) {
                  throw new Error("EMAIL_JA_CADASTRADO");
            }
            throw err;
      }
}
