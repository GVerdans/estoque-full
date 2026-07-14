import "dotenv/config";
import { PrismaClient } from "../src/generated/prisma/client.js";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({
      connectionString: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({
      adapter,
});

async function main() {
      await prisma.user.create({
            data: {
                  name: "Admin",
                  email: "admin@estoque.com",
                  password: "senha-hash",
                  role: "ADMIN",
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
