import { AppDataSource } from "../../data-source";
import { Client } from "../../entities/client.entity";
import { AppError } from "../../errors";

export const retrieveOneClientService = async (
  id: string,
  token_id: string
): Promise<Client> => {
  const clientRepository = AppDataSource.getRepository(Client);
  const client = await clientRepository.findOne({
    where: { id },
    relations: {
      contact: true,
    },
  });
  if (!client) {
    throw new AppError("Client not Found", 404);
  }
  if (client.id !== token_id) {
    throw new AppError("Unauthorized", 401);
  }
  return client;
};
