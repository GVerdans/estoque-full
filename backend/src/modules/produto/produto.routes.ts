import { Router } from "express";
import {
      getProdutosController,
      postProdutosController,
      desativaProdutosController,
      ativaProdutosController,
} from "./produto.controller";

const router = Router();

router.get("/", getProdutosController);
router.post("/cadastro", postProdutosController);
router.put("/desativa/:id", desativaProdutosController);
router.put("/ativa/:id", ativaProdutosController);

export default router;
