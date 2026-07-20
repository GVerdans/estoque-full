import express, { type Express, type Request, type Response } from "express";
import cors from "cors";
import router from "./routes/index.routes.js";

const app: Express = express();

// Mudar quando for pra prod
app.use(
      cors({
            origin: "http://localhost:5173",
            credentials: true,
      }),
);

app.use(express.json());
app.use(router);

export default app;
