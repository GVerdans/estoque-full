import { prisma } from "../../database/prisma";
import { Prisma } from "../../generated/prisma/client";

export async function findAllProdutos() {
      const data = await prisma.produto.findMany();
      return data;
}

export async function findProdutoById(id: string) {
      const data = await prisma.produto.findUnique({
            where: {
                  id,
            },
      });

      return data;
}

export async function findActiveProd() {
      const data = await prisma.produto.findMany({
            where: {
                  active: true,
            },
            select: {
                  id: true,
                  name: true,
                  price: true,
                  quantidade: true,
                  active: true,
                  userId: true,
            },
            orderBy: {
                  name: "asc",
            },
      });

      return data;
}

export async function findInactiveProd() {
      const data = await prisma.produto.findMany({
            where: {
                  active: false,
            },
      });

      return data;
}

export async function totalItens() {
      const data = await prisma.produto.findMany();

      return data.length;
}

export async function findByName(name: string) {
      const data = await prisma.produto.findMany({
            where: {
                  name: name,
            },
      });

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

export async function updateStatusProd(id: string) {
      const prod = await prisma.produto.findUnique({
            where: {
                  id,
            },
      });

      if (!prod) return false;

      const novoStatus = !prod.active;

      const updatedProd = await prisma.produto.updateMany({
            where: {
                  id,
            },
            data: {
                  active: novoStatus,
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
