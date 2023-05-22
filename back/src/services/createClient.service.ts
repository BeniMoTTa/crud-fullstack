import { AppDataSource } from "../data-source";
import { Client } from "../entities/client.entity";
import { TClientReturn, TClient } from "../interfaces/client.interface";
import { returnClientSchema } from "../schemas/client.schema";

export const createClientService = async (
  clientData: TClient
): Promise<TClientReturn> => {
  const clientRepository = AppDataSource.getRepository(Client);

  const client = clientRepository.create(clientData);
  await clientRepository.save(client);

  console.log(client);
  const newClient = returnClientSchema.parse(client);

  return newClient;
};
