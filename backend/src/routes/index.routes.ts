import { Router, type Request, type Response } from "express";
import userRoutes from "../modules/user/user.routes";
import produtoRoutes from "../modules/produto/produto.routes";
import authRoutes from "../modules/auth/auth.routes";

const router = Router();

router.get("/", (req: Request, res: Response) => {
      res.json({
            status: "Online",
            version: "1.0",
            author: "Gabriel Verdan",
      });
});

router.use("/user", userRoutes);
router.use("/produtos", produtoRoutes);
router.use("/auth", authRoutes);

export default router;
