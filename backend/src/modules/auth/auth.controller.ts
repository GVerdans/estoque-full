import { Request, Response } from "express";
import validator from "validator";
import { login, changePassword } from "./auth.service";

export async function loginController(req: Request, res: Response) {
      try {
            const { email, password } = req.body;
            if (
                  !email ||
                  !validator.isEmail(email) ||
                  !password ||
                  password.trim() === ""
            ) {
                  return res.status(400).json({
                        message: "Dados inválidos !",
                  });
            }

            const { token, user } = await login(email, password);

            return res.status(200).json({
                  message: "Login efetuado com sucesso !",
                  token,
                  user: {
                        name: user.name,
                        email: user.email,
                  },
            });
      } catch (err) {
            if (
                  err instanceof Error &&
                  (err.message === "Usuário Inválido !" ||
                        err.message === "Senha Inválida !")
            ) {
                  return res.status(401).json({
                        message: "Email ou senha inválidos !",
                  });
            }

            return res.status(500).json({
                  message: "Erro interno",
            });
      }
}

export async function changePasswordController(req: Request, res: Response) {
      try {
            const { id } = req.params;
            const { newPassword } = req.body;

            if (typeof id !== "string" || !id) {
                  return res.status(400).json({
                        message: "ID inválido !",
                  });
            }
            if (typeof newPassword !== "string" || !newPassword) {
                  return res.status(400).json({
                        message: "Senha inválida !",
                  });
            }

            const data = await changePassword(id, newPassword);

            return res.status(200).json({
                  message: "Senha alterada com Sucesso !",
                  name: data.name,
            });
      } catch (err) {
            if (
                  err instanceof Error &&
                  err.message ===
                        "Senha deve possuir o mínimo de 6 caracteres !"
            ) {
                  return res.status(400).json({ message: err.message });
            }
            if (
                  err instanceof Error &&
                  err.message === "USUARIO NAO ENCONTRADO !"
            ) {
                  return res.status(404).json({ message: err.message });
            }

            return res.status(500).json({
                  message: "Erro interno",
            });
      }
}
