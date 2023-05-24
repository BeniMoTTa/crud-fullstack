import { AppDataSource } from "../../data-source";

import { Contact } from "../../entities/contact.entity";
import { AppError } from "../../errors";
import { TContact } from "../../interfaces/contact.interface";

export const retrieveOneContactService = async (
  id: string,
  token_id: string
): Promise<TContact> => {
  const contactRepository = AppDataSource.getRepository(Contact);
  const contact = await contactRepository.findOne({
    where: { id },
    relations: {
      client: true,
    },
  });
  if (!contact) {
    throw new AppError("Contact not Found", 404);
  }
  if (contact.client.id !== token_id) {
    throw new AppError("Unauthorized", 401);
  }
  return contact;
};
