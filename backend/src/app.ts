import express, { type Express, type Request, type Response } from "express";
import router from "./routes/index.routes";

const app: Express = express();
app.use(express.json());
app.use(router);

export default app;
