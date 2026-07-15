import { resolveSoa } from "node:dns";
import {
      findAllProdutos,
      cadastraProd,
      desativaProd,
      ativaProd,
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

export async function desativaProdutosController(req: Request, res: Response) {
      try {
            const id = req.params.id;

            if (typeof id !== "string" || id.trim() === "") {
                  return res.status(400).json({
                        error: {
                              message: "ID inválido !",
                        },
                  });
            }

            const foiDesativado = await desativaProd(id);

            if (!foiDesativado) {
                  return res.status(404).json({
                        error: "Produto não foi encontrado ou ja se encontra inativo !",
                  });
            }

            return res.status(200).json({
                  message: "Produto desativado com sucesso !",
            });
      } catch (err) {
            return res.status(500).json({
                  error: "Erro interno ao desativar produto !",
            });
      }
}
export async function ativaProdutosController(req: Request, res: Response) {
      try {
            const id = req.params.id;

            if (typeof id !== "string" || id.trim() === "") {
                  return res.status(400).json({
                        error: {
                              message: "ID inválido !",
                        },
                  });
            }

            const foiAtivado = await ativaProd(id);

            if (!foiAtivado) {
                  return res.status(404).json({
                        error: "Produto não foi encontrado ou ja se encontra ativo !",
                  });
            }

            return res.status(200).json({
                  message: "Produto ativo com sucesso !",
            });
      } catch (err) {
            return res.status(500).json({
                  error: "Erro interno ao ativar produto !",
            });
      }
}

export async function getDashboardController(req: Request, res: Response) {
      return await getDashboard();
}
