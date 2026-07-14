import { Router } from "express";
import { getProdutos } from "./produto.controller";

const router = Router();

router.get("/", getProdutos);

export default router;
