import { resolveSoa } from "node:dns";
import {
      findAllProdutos,
      cadastraProd,
      updateStatusProd,
      getDashboard,
} from "./produto.service";
import { Request, Response } from "express";

export async function getProdutosController(req: Request, res: Response) {
      try {
            const data = await findAllProdutos();
            if (data.length == 0) {
                  res.json({
                        error: {
                              message: "Nenhum produto cadastrado !",
                        },
                  });
            }

            const sanitazedProdutos = data.map((prod) => ({
                  id: prod.id,
                  nome: prod.name,
                  quantidade: prod.quantidade,
                  preco: prod.price,
                  ativo: prod.active,
                  register_by: prod.userId,
            }));

            res.status(200).json({
                  produtos: sanitazedProdutos,
            });
      } catch (err) {
            res.status(400).json({
                  error: {
                        message: "Erro ao listar produtos !",
                  },
            });
      }
}

export async function postProdutosController(req: Request, res: Response) {
      try {
            const { name, price, quantidade, userId } = req.body;

            if (!name || !price || !quantidade || !userId) {
                  return res
                        .status(400)
                        .json({ error: "Todos os campos são obrigatórios !" });
            }

            const produto = await cadastraProd(name, price, quantidade, userId);

            return res.status(201).json({
                  message: "Produto cadastrado com sucesso !",
                  produto: produto,
            });
      } catch (err) {
            return res.status(400).json({ error: "Erro ao criar produto !" });
      }
}

export async function updateStatusProdController(req: Request, res: Response) {
      try {
            const { id } = req.params;
            if (typeof id !== "string" || id.trim() == "") {
                  return res.status(400).json({
                        error: "Algum dos dados não foi preenchido corretamente !",
                  });
            }

            const prodAtt = await updateStatusProd(id);

            return res.status(200).json({
                  message: "Status Alterado com Sucesso !",
            });
      } catch (err) {
            res.json(400).json({
                  message: "Erro ao alterar status !",
            });
      }
}

export async function getDashboardController(req: Request, res: Response) {
      return await getDashboard();
}
