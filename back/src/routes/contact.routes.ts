import { Router } from "express";
import {
  createContactController,
  deleteContactController,
  retrieveAllContactsController,
  retrieveOneContactController,
  updateContactController,
} from "../controllers/contact.controllers";
import { ensureRequestIsValidMiddleware } from "../middlewares/ensureIsValidRequest.middlewares";
import { contactSchema } from "../schemas/contact.schema";
import { ensureTokenValid } from "../middlewares/ensureTokenIsValid.middleware";
import { ensureIsExistsContactMiddleware } from "../middlewares/ensureIsExistisContact.middleware";
import { ensureIsClient } from "../middlewares/ensureIsClient.middleware";

export const contactRouter: Router = Router();

contactRouter.post(
  "",
  ensureRequestIsValidMiddleware(contactSchema),
  ensureTokenValid,
  createContactController
);
contactRouter.get("", retrieveAllContactsController);

contactRouter.get(
  "/:id",
  ensureTokenValid,
  ensureIsExistsContactMiddleware,
  retrieveOneContactController
);

contactRouter.delete(
  "/:id",
  ensureIsClient,
  ensureIsExistsContactMiddleware,
  deleteContactController
);

contactRouter.patch(
  "/:id",
  ensureIsClient,
  ensureIsExistsContactMiddleware,
  ensureRequestIsValidMiddleware(contactSchema),
  updateContactController
);
