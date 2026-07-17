import { prisma } from "../../database/prisma";
import { Prisma } from "../../generated/prisma/client";

// QUERiES
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

export async function findByName(name: string) {
      const data = await prisma.produto.findMany({
            where: {
                  name: {
                        contains: name,
                        mode: "insensitive",
                  },
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

export async function findProdBaixoEstoque(min = 5) {
      const data = await prisma.produto.findMany({
            where: {
                  active: true,
                  quantidade: {
                        lte: min,
                  },
            },
      });

      return data;
}

// COMANDS
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

export async function updateProd(
      id: string,
      name?: string,
      price?: number | Prisma.Decimal,
      quantidade?: number,
) {
      const prod = await prisma.produto.findUnique({
            where: {
                  id,
            },
      });

      if (!prod) return null;

      const newProd: {
            name?: string;
            price?: Prisma.Decimal;
            quantidade?: number;
      } = {};

      if (name !== undefined && name !== prod.name) {
            newProd.name = name;
      }

      if (price !== undefined) {
            const newPrice =
                  price instanceof Prisma.Decimal
                        ? price
                        : new Prisma.Decimal(price);
            if (newPrice.toString() !== prod.price.toString()) {
                  newProd.price = newPrice;
            }
      }

      if (quantidade !== undefined && quantidade !== prod.quantidade) {
            newProd.quantidade = quantidade;
      }

      if (Object.keys(newProd).length === 0) {
            return prod;
      }

      const AttProd = await prisma.produto.update({
            where: { id },
            data: newProd,
      });

      return AttProd;
}

// DASHBOARD
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
