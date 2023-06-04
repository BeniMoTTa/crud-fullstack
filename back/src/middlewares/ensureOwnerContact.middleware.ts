import { NextFunction, Request, Response } from "express";

import { AppDataSource } from "../data-source";

import { Contact } from "../entities/contact.entity";
import { AppError } from "../errors";

export const ensureOwnerContact = async (
  req: Request,
  resp: Response,
  next: NextFunction
): Promise<Response | void> => {
  const authenticatedClientId: string = req.user.id;
  const idContact = req.params.id;
  const contactRepository = AppDataSource.getRepository(Contact);

  const contact = await contactRepository.findOne({
    where: {
      id: idContact,
      client: {
        id: authenticatedClientId,
      },
    },
  });
  if (!contact) {
    throw new AppError("Contact not found", 404);
  }

  return next();
};
