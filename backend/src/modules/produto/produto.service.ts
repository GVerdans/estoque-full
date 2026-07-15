import { prisma } from "../../database/prisma";
import { Prisma } from "../../generated/prisma/client";

export async function findAllProdutos() {
      const data = await prisma.produto.findMany();
      return data;
}

export async function cadastraProd(
      name: string,
      price: number | Prisma.Decimal,
      quantidade: number,
      userId: string,
) {
      const novoProd = await prisma.produto.create({
            data: {
                  name: name,
                  price: new Prisma.Decimal(price),
                  quantidade: quantidade,
                  userId: userId,
            },
      });

      return novoProd;
}

export async function desativaProd(id: string) {
      const updatedProd = await prisma.produto.updateMany({
            where: {
                  id: id,
                  active: true,
            },
            data: {
                  active: false,
            },
      });

      return updatedProd.count > 0;
}
