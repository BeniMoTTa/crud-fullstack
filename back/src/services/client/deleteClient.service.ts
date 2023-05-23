import { AppDataSource } from "../../data-source";
import { Client } from "../../entities/client.entity";

export const deleteClientService = async (id: string): Promise<void> => {
  const clientRepository = AppDataSource.getRepository(Client);

  await clientRepository
    .createQueryBuilder()
    .delete()
    .from(Client)
    .where("id = :id", { id })
    .execute();
};
