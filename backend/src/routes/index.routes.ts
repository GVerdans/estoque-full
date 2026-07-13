import { Router, type Request, type Response } from "express";

const router = Router();

router.get("/", (req: Request, res: Response) => {
      res.json({
            status: "Online",
            version: "1.0",
            author: "Gabriel Verdan",
      });
});

export default router;
