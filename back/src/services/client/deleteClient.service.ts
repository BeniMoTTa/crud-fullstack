import { AppDataSource } from "../../data-source";
import { Client } from "../../entities/client.entity";
import { AppError } from "../../errors";

export const deleteClientService = async (id: string): Promise<void> => {
  const clientRepository = AppDataSource.getRepository(Client);

  const client = await clientRepository.findOne({
    where: {
      id: id,
    },
    relations: ["contact"],
  });

  if (!client) {
    throw new Error("Client not found");
  }

  for (const contact of client.contact) {
    await clientRepository.manager.remove(contact);
  }

  await clientRepository.delete(client.id);
};
