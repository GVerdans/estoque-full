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

export async function ativaProd(id: string) {
      const updatedProd = await prisma.produto.updateMany({
            where: {
                  id: id,
                  active: false,
            },
            data: {
                  active: true,
            },
      });

      return updatedProd.count > 0;
}

export async function getDashboard() {
      const produtos = await prisma.produto.findMany({
            where: {
                  active: true,
            },
      });

      const valorEstoque = produtos.reduce(
            (acc, prod) => acc + prod.price.toNumber() * prod.quantidade,
            0,
      );

      return {
            totalProdutos: produtos.length,
            valorEstoque,
      };
}
