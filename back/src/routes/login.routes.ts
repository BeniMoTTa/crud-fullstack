import { Router } from "express";
import { ensureRequestIsValidMiddleware } from "../middlewares/ensureIsValidRequest.middlewares";
import { createLoginSchema } from "../schemas/login.schema";
import { createLoginController } from "../controllers/login.controller";

export const loginRoutes: Router = Router();

loginRoutes.post(
  "",
  ensureRequestIsValidMiddleware(createLoginSchema),
  createLoginController
);
