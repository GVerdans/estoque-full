import { Request, Response } from "express";
import { findAllUsers } from "./user.service";

export async function getUsers(req: Request, res: Response) {
      const users = await findAllUsers();
      res.status(200).json(users);
}
