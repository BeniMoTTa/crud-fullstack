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
import { ensureIsExistsClientMiddleware } from "../middlewares/ensureIsExists.middleware";
import { ensureIsExistsContactMiddleware } from "../middlewares/ensureIsExistisContact.middleware";

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
  ensureIsExistsContactMiddleware,
  retrieveOneContactController
);

contactRouter.delete(
  "/:id",
  ensureIsExistsContactMiddleware,
  deleteContactController
);

contactRouter.patch(
  "/:id",
  ensureIsExistsContactMiddleware,
  updateContactController
);
