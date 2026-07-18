import { prisma } from "../../database/prisma";

export async function findAllUsers() {
      return await prisma.user.findMany();
}

export async function createUser(
      name: string,
      email: string,
      password: string,
) {
      const data = await prisma.user.create({
            data: {
                  name: name,
                  email: email,
                  password: password,
            },
      });

      return data;
}

export async function login(email: string, hash: string) {
      try {
            const data = await prisma.user.findUnique({
                  where: {
                        email: email,
                        password: hash,
                  },
            });

            return data;
      } catch (err) {
            throw new Error("Erro ao fazer Login !");
      }
}
