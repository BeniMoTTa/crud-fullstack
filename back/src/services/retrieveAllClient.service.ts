import { AppDataSource } from "../data-source";
import { Client } from "../entities/client.entity";
import { TClientRetrieveAll } from "../interfaces/client.interface";
import { returnRetrieveClientSchema } from "../schemas/client.schema";

export const retrieveClientService = async (): Promise<TClientRetrieveAll> => {
  const repositoryClient = AppDataSource.getRepository(Client);

  const findUsers: Array<Client> = await repositoryClient.find();

  const clients = returnRetrieveClientSchema.parse(findUsers);
  return clients;
};
