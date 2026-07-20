import { Response, NextFunction } from "express";
import JWT, { TokenExpiredError, JsonWebTokenError } from "jsonwebtoken";
import { AuthRequest } from "../types/auth.types";

export function authMiddleware(
      req: AuthRequest,
      res: Response,
      next: NextFunction,
) {
      const authHeader = req.headers.authorization;
      const token = authHeader?.split(" ")[1];

      if (!token) {
            return res.status(401).json({ message: "Token não fornecido !" });
      }

      try {
            const decoded = JWT.verify(token, process.env.SECRET_DEV as string);
            req.user = decoded;
            next();
      } catch (err) {
            if (err instanceof TokenExpiredError) {
                  return res.status(401).json({
                        message: "Token expirado, faça login novamente !",
                  });
            }
            if (err instanceof JsonWebTokenError) {
                  return res.status(401).json({ message: "Token inválido !" });
            }
            return res.status(500).json({ message: "Erro interno" });
      }
}
