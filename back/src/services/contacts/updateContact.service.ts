import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contact.entity";
import {
  TContactReturn,
  TContactUpdate,
} from "../../interfaces/contact.interface";
import { returnContactSchema } from "../../schemas/contact.schema";

const updateContactService = async (
  newContact: TContactUpdate,
  id: string
): Promise<TContactReturn> => {
  const userRepository = AppDataSource.getRepository(Contact);

  const oldContactData = await userRepository.findOneBy({
    id: id,
  });
  const user = userRepository.create({
    ...oldContactData,
    ...newContact,
  });

  await userRepository.save(user);

  const updatedUser = returnContactSchema.parse(user);

  return updatedUser;
};

export default updateContactService;
