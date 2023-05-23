import { Router } from "express";
import {
  createClientController,
  retrieveAllClientController,
} from "../controllers/client.controllers";
import { ensureRequestIsValidMiddleware } from "../middlewares/ensureIsValidRequest.middlewares";
import { clientSchema } from "../schemas/client.schema";

const clientRoutes = Router();

clientRoutes.post(
  "",
  ensureRequestIsValidMiddleware(clientSchema),
  createClientController
);

clientRoutes.get("", retrieveAllClientController);

export { clientRoutes };
