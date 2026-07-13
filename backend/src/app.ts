import express, { type Express, type Request, type Response } from "express";
import router from "./routes/index.routes";

const app: Express = express();
app.use(router);

export default app;
