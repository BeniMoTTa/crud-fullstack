import "reflect-metadata";
import "express-async-errors";
import express from "express";
import cors from "cors";
import { clientRoutes } from "./routes/client.routes";
import { handleErrors } from "./errors";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/client", clientRoutes);

app.use(handleErrors);
export { app };
