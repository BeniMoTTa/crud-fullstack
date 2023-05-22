import "reflect-metadata";
import "express-async-errors";
import express from "express";
import cors from "cors";
import { clientRoutes } from "./routes/client.routes";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/client", clientRoutes);

export { app };
