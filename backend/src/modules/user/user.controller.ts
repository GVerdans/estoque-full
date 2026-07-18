import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import validator from "validator";
import { findAllUsers, createUser } from "./user.service";

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

export async function createUserController(req: Request, res: Response) {
      try {
            const { name, email, password } = req.body;

            if (
                  !name ||
                  name.trim() === "" ||
                  !email ||
                  !password ||
                  password.trim() === "" ||
                  password.length < 6
            ) {
                  return res.status(400).json({
                        message: "Insira os dados corretamente !",
                  });
            }

            if (!validator.isEmail(email)) {
                  return res.status(400).json({
                        message: "Insira um email valido !",
                  });
            }

            const hash = await bcrypt.hash(password, 10);
            const data = await createUser(name, email, hash);

            return res.status(201).json({
                  message: "Usuário criado !",
                  data: {
                        user: data.name,
                        email: data.email,
                  },
            });
      } catch (err) {
            return res.status(400).json({
                  message: String(err),
            });
      }
}
