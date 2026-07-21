import { prisma } from "../../database/prisma";
import { Prisma } from "../../generated/prisma/client";
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

export async function createUser(
      name: string,
      email: string,
      password: string,
) {
      try {
            const data = await prisma.user.create({
                  data: {
                        name: name,
                        email: email,
                        password: password,
                  },
            });

            return data;
      } catch (err) {
            if (
                  err instanceof Prisma.PrismaClientKnownRequestError &&
                  err.code === "P2002"
            ) {
                  throw new Error("EMAIL_JA_CADASTRADO");
            }
            throw err;
      }
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
