import { Router } from "express";
import {
      getProdutosController,
      postProdutosController,
      updateStatusProdController,
} from "./produto.controller";

const router = Router();

router.get("/", getProdutosController);
router.post("/cadastro", postProdutosController);
router.patch("/status/:id", updateStatusProdController);

export default router;
