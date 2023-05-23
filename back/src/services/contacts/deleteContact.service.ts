import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contact.entity";

export const deleteContactService = async (id: string): Promise<void> => {
  const clientRepository = AppDataSource.getRepository(Contact);

  await clientRepository
    .createQueryBuilder()
    .delete()
    .from(Contact)
    .where("id = :id", { id })
    .execute();
};
