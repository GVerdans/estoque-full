import { Router } from "express";
import {
      getUsers,
      createUserController,
      loginController,
} from "./user.controller";

const router = Router();

// GET
router.get("/", getUsers);

// POST
router.post("/", createUserController);
router.post("/login", loginController);
export default router;
