import "reflect-metadata";
import "express-async-errors";
import express from "express";
import cors from "cors";
import { clientRoutes } from "./routes/client.routes";
import { handleErrors } from "./errors";
import { loginRoutes } from "./routes/login.routes";
import { contactRouter } from "./routes/contact.routes";
import { pdfRoutes } from "./routes/pdf.routes";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/client", clientRoutes);
app.use("/login", loginRoutes);
app.use("/contact", contactRouter);
app.use("/pdf", pdfRoutes);
app.use(handleErrors);
export { app };
