import { Router } from "express";
import {
  createClientController,
  deleteClientController,
  retrieveAllClientController,
  retrieveOneClientController,
  updateClientController,
} from "../controllers/client.controllers";
import { ensureRequestIsValidMiddleware } from "../middlewares/ensureIsValidRequest.middlewares";
import { clientSchema, updateClientSchema } from "../schemas/client.schema";
import { ensureIsExistsClientMiddleware } from "../middlewares/ensureIsExists.middleware";

const clientRoutes = Router();

clientRoutes.post(
  "",
  ensureRequestIsValidMiddleware(clientSchema),
  createClientController
);

clientRoutes.get("", retrieveAllClientController);
clientRoutes.get(
  "/:id",
  ensureIsExistsClientMiddleware,
  retrieveOneClientController
);

clientRoutes.patch(
  "/:id",
  ensureIsExistsClientMiddleware,
  ensureRequestIsValidMiddleware(updateClientSchema),
  updateClientController
);

clientRoutes.delete(
  "/:id",
  ensureIsExistsClientMiddleware,
  deleteClientController
);

export { clientRoutes };
