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

export async function login(email: string) {
      return await prisma.user.findUnique({
            where: {
                  email: email,
            },
      });
}
