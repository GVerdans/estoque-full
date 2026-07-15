import { Router } from "express";
import {
      getProdutosController,
      postProdutosController,
      desativaProdutosController,
} from "./produto.controller";

const router = Router();

router.get("/", getProdutosController);
router.post("/cadastro", postProdutosController);
router.put("/produto/:id", desativaProdutosController);

export default router;
