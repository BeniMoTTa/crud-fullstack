import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contact.entity";
import { TContactRetrieveAll } from "../../interfaces/contact.interface";
import { returnRetrieveContactSchema } from "../../schemas/contact.schema";

export const retrieveContactService =
  async (): Promise<TContactRetrieveAll> => {
    const repositoryClient = AppDataSource.getRepository(Contact);

    const findUsers: Array<Contact> = await repositoryClient.find();

    const contact = returnRetrieveContactSchema.parse(findUsers);
    return contact;
  };
