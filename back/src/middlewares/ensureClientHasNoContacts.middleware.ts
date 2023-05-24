import { Request, Response, NextFunction } from "express";
import { AppDataSource } from "../data-source";
import { Contact } from "../entities/contact.entity";

export const ensureClientHasNoContacts = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const contactRepository = AppDataSource.getRepository(Contact);
  const contacts = await contactRepository.find({
    where: {
      client: {
        id: req.params.id,
      },
    },
  });
  if (contacts.length > 0) {
    return res.status(400).json({
      message:
        "It is not possible to delete a client with contacts linked to it. Please delete all contacts before deleting the client.",
    });
  }
  next();
};
