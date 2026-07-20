import { Router } from "express";
import { loginController, changePasswordController } from "./auth.controller";
import { authMiddleware } from "../../middleware/auth.middleware";

const router = Router();

// POST
router.post("/login", loginController);

// PATCH
router.patch("/change-password/:id", authMiddleware, changePasswordController);

export default router;
