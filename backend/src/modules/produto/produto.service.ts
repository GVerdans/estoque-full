import { prisma } from "../../database/prisma";

export default async function findAllProdutos() {
      const data = await prisma.produto.findMany();
      return data;
}
