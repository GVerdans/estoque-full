import { Router, type Request, type Response } from "express";
import userRoutes from "../modules/user/user.routes";

const router = Router();

router.get("/", (req: Request, res: Response) => {
      res.json({
            status: "Online",
            version: "1.0",
            author: "Gabriel Verdan",
      });
});

router.use("/user", userRoutes);

export default router;
