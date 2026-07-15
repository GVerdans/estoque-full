import { Router } from "express";
import {
      getProdutosController,
      postProdutosController,
} from "./produto.controller";

const router = Router();

router.get("/", getProdutosController);
router.post("/", postProdutosController);

export default router;
