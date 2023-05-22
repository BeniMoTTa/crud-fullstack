import { Router } from "express";
import { createClientController } from "../controllers/client.controllers";

const clientRoutes = Router();

clientRoutes.post("", createClientController);

export { clientRoutes };
