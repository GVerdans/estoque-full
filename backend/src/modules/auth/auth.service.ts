import { prisma } from "../../database/prisma";
import JWT from "jsonwebtoken";
import bcrypt from "bcryptjs";

export async function login(email: string, password: string) {
      const user = await prisma.user.findUnique({
            where: {
                  email: email,
            },
      });

      if (!user) {
            throw new Error("Usuário Inválido !");
      }

      const isValidPswd = await bcrypt.compare(password, user.password);

      if (!isValidPswd) {
            throw new Error("Senha Inválida !");
      }

      const token = JWT.sign(
            {
                  id: user.id,
                  email: user.email,
            },
            process.env.SECRET_DEV as string,
            { expiresIn: "1h" },
      );

      return { token, user };
}

export async function changePassword(id: string, password: string) {
      if (password.length < 6) {
            throw new Error("Senha deve possuir o mínimo de 6 caracteres !");
      }

      const newPassword = await bcrypt.hash(password, 10);

      try {
            const data = await prisma.user.update({
                  where: {
                        id: id,
                  },
                  data: {
                        password: newPassword,
                  },
            });

            return data;
      } catch (err) {
            throw new Error("USUARIO NAO ENCONTRADO !");
      }
}
