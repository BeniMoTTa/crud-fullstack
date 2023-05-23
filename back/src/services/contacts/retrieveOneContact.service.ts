import { AppDataSource } from "../../data-source";

import { Contact } from "../../entities/contact.entity";
import { AppError } from "../../errors";
import { TContact } from "../../interfaces/contact.interface";

export const retrieveOneContactService = async (
  id: string
): Promise<TContact> => {
  const contactRepository = AppDataSource.getRepository(Contact);
  const contact = await contactRepository.findOne({ where: { id } });
  if (!contact) {
    throw new AppError("Client not Found", 404);
  }
  return contact;
};
