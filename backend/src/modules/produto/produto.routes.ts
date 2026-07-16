import { Router } from "express";
import {
      getProdutosController,
      postProdutosController,
      updateStatusProdController,
      findProdutoByIdController,
      findActiveProdController,
      findInactiveProdController,
      getDashboardController,
} from "./produto.controller";

const router = Router();

router.get("/", getProdutosController);
router.get("/activeprods", findActiveProdController);
router.get("/inactiveprods", findInactiveProdController);
router.get("/dashboard", getDashboardController);
router.get("/:id", findProdutoByIdController);

router.post("/", postProdutosController);
router.patch("/:id/status", updateStatusProdController);

export default router;
