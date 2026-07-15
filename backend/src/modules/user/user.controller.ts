import { Request, Response } from "express";
import { findAllUsers } from "./user.service";

export async function getUsers(req: Request, res: Response) {
      try {
            const users = await findAllUsers();
            if (users.length == 0) {
                  res.status(200).json({
                        message: "A lista de usuarios está vazia !",
                  });
            }

            const sanitazedUsers = users.map((user) => ({
                  nome: user.name,
                  email: user.email,
            }));

            res.status(200).json({
                  usuarios: sanitazedUsers,
            });
      } catch (err) {
            res.status(500).json({
                  err: "Erro ao buscar usuarios ",
            });
      }
}
