import { Request } from "express";
import { AppDataSource } from "../../data-source";
import { Client } from "../../entities/client.entity";
import { Contact } from "../../entities/contact.entity";
import { AppError } from "../../errors";
import { TContact, TContactReturn } from "../../interfaces/contact.interface";
import { returnContactSchema } from "../../schemas/contact.schema";

export const createContactService = async (
  data: TContact,
  req: Request
): Promise<TContactReturn> => {
  const userId = req.user.id;
  const clientRepository = AppDataSource.getRepository(Client);
  const client = await clientRepository.findOne({ where: { id: userId } });
  if (!client) {
    throw new AppError("Client not found");
  }
  const contactRepository = AppDataSource.getRepository(Contact);
  const contact = contactRepository.create({
    ...data,
    client: client,
  });
  await contactRepository.save(contact);
  const newContact = returnContactSchema.parse(contact);
  return newContact;
};
