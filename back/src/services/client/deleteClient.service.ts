import { AppDataSource } from "../../data-source";
import { Client } from "../../entities/client.entity";
import { AppError } from "../../errors";

export const deleteClientService = async (id: string): Promise<void> => {
  const clientRepository = AppDataSource.getRepository(Client);

  await clientRepository.delete(id);
};
