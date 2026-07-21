import { prisma } from "../../database/prisma";

export async function findAllUsers() {
      return await prisma.user.findMany();
}
