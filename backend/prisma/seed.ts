import "dotenv/config";
import { PrismaClient } from "../src/generated/prisma/client.js";
import { PrismaPg } from "@prisma/adapter-pg";
import bcrypt from "bcryptjs";

const adapter = new PrismaPg({
      connectionString: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({
      adapter,
});

async function main() {
      const pswd = "demo";
      const hash = await bcrypt.hash(pswd, 10);

      await prisma.user.create({
            data: {
                  name: "demo",
                  email: "demo@estoque.com",
                  password: hash,
            },
      });

      console.log("Seed executado com sucesso!");
}

main()
      .then(async () => {
            await prisma.$disconnect();
      })
      .catch(async (e) => {
            console.error(e);
            await prisma.$disconnect();
            process.exit(1);
      });
