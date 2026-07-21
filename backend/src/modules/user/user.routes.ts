import { Router } from "express";
import { getUsers } from "./user.controller";
import { authMiddleware } from "../../middleware/auth.middleware";

const router = Router();

// GET
router.get("/", authMiddleware, getUsers);

export default router;
