import findAllProdutos from "./produto.service";
import { Request, Response } from "express";

export async function getProdutos(req: Request, res: Response) {
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
                  nome: prod.name,
                  quantidade: prod.quantidade,
                  preco: prod.price,
                  register_by: prod.userId,
            }));

            res.status(200).json({
                  produtos: sanitazedProdutos,
            });
      } catch (err) {}
}
