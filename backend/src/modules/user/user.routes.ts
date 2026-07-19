import { Router } from "express";
import {
      getUsers,
      createUserController,
      loginController,
      changePasswordController,
} from "./user.controller";

const router = Router();

// GET
router.get("/", getUsers);

// POST
router.post("/", createUserController);
router.post("/login", loginController);

// PATCH
router.patch("/:id/change-password", changePasswordController);
export default router;
