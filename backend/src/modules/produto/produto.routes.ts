import { Router } from "express";
import {
      getProdutosController,
      postProdutosController,
      updateStatusProdController,
      findProdutoByIdController,
      findActiveProdController,
      findInactiveProdController,
      getDashboardController,
      findProdBaixoEstoqueController,
      findByNameController,
      updateProdController,
      incrementStockController,
      decrementStockController,
} from "./produto.controller";

const router = Router();

// GET
router.get("/", getProdutosController);
router.get("/active", findActiveProdController);
router.get("/inactive", findInactiveProdController);
router.get("/low-stock", findProdBaixoEstoqueController);
router.get("/search", findByNameController);
router.get("/dashboard", getDashboardController);
router.get("/:id", findProdutoByIdController);

// POST
router.post("/", postProdutosController);

//PATCH
router.patch("/:id", updateProdController);
router.patch("/:id/status", updateStatusProdController);
router.patch("/:id/increment", incrementStockController);
router.patch("/:id/decrement", decrementStockController);

export default router;
