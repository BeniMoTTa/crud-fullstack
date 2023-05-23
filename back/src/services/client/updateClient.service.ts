import { AppDataSource } from "../../data-source";
import { Client } from "../../entities/client.entity";
import {
  TClientReturn,
  TClientUpdate,
} from "../../interfaces/client.interface";
import { returnClientSchema } from "../../schemas/client.schema";

const updateClientService = async (
  newClient: TClientUpdate,
  id: string
): Promise<TClientReturn> => {
  const userRepository = AppDataSource.getRepository(Client);

  const oldClientData = await userRepository.findOneBy({
    id: id,
  });
  const user = userRepository.create({
    ...oldClientData,
    ...newClient,
  });

  await userRepository.save(user);

  const updatedUser = returnClientSchema.parse(user);

  return updatedUser;
};

export default updateClientService;
