import { Router } from "express";
import { getUsers, createUserController } from "./user.controller";
import { authMiddleware } from "../../middleware/auth.middleware";

const router = Router();

// GET
router.get("/", authMiddleware, getUsers);

// POST
router.post("/", createUserController);

export default router;
