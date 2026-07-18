import { Router } from "express";
import { getUsers, createUserController } from "./user.controller";

const router = Router();

// GET
router.get("/", getUsers);

// POST
router.post("/", createUserController);
export default router;
