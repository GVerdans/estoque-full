import { Router } from "express";
import { loginController, changePasswordController } from "./auth.controller";

const router = Router();

// POST
router.post("/login", loginController);

// PATCH
router.patch("/change-password/:id", changePasswordController);

export default router;
