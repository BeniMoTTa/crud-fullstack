import { Request, Response } from "express";
import { createContactService } from "../services/contacts/createContact.service";
import { retrieveOneContactService } from "../services/contacts/retrieveOneContact.service";
import { retrieveContactService } from "../services/contacts/retrieveAllContacts.service";
import { deleteContactService } from "../services/contacts/deleteContact.service";
import updateContactService from "../services/contacts/updateContact.service";

export const createContactController = async (req: Request, res: Response) => {
  try {
    const contactData = req.body;
    const contact = await createContactService(contactData, req);

    return res.status(201).json(contact);
  } catch (err) {
    console.log(err);
  }
};

export const retrieveAllContactsController = async (
  req: Request,
  res: Response
) => {
  const contact = await retrieveContactService();
  return res.status(200).json(contact);
};

export const retrieveOneContactController = async (
  req: Request,
  res: Response
) => {
  const contact = await retrieveOneContactService(req.params.id);

  return res.status(200).json(contact);
};

export const deleteContactController = async (req: Request, res: Response) => {
  await deleteContactService(req.params.id);

  return res.status(204).send();
};

export const updateContactController = async (req: Request, res: Response) => {
  const newContact = req.body;
  const id = req.params.id;

  const updatedContact = await updateContactService(newContact, id);

  return res.status(200).json(updatedContact);
};
