import { Router } from "express";
import app from "../app";
import { type Request, type Response } from "express";

const router = Router();

router.get("/", (req: Request, res: Response) => {
      res.json({
            Status: "Online",
            Version: "1.0",
            Author: "Gabriel Verdan",
      });
});

export default router;
