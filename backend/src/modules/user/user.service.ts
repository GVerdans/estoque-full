import { prisma } from "../../database/prisma";
import JWT from "jsonwebtoken";
import bcrypt from "bcryptjs";

export async function findAllUsers() {
      return await prisma.user.findMany();
}

export async function createUser(
      name: string,
      email: string,
      password: string,
) {
      const data = await prisma.user.create({
            data: {
                  name: name,
                  email: email,
                  password: password,
            },
      });

      return data;
}

export async function login(email: string, password: string) {
      const user = await prisma.user.findUnique({
            where: {
                  email: email,
            },
      });

      if (!user) {
            throw new Error("CREDENCIAIS INVALIDAS !");
      }

      const isValidPswd = await bcrypt.compare(password, user.password);

      if (!isValidPswd) {
            throw new Error("CREDENCIAIS INVALIDAS !");
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
