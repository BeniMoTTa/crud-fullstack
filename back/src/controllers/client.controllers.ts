import { Request, Response } from "express";
import { TClient } from "../interfaces/client.interface";
import { createClientService } from "../services/client/createClient.service";
import { retrieveClientService } from "../services/client/retrieveAllClient.service";
import { deleteClientService } from "../services/client/deleteClient.service";
import { retrieveOneClientService } from "../services/client/retrieveOneClient.service";
import updateClientService from "../services/client/updateClient.service";

const createClientController = async (req: Request, res: Response) => {
  const clientData: TClient = req.body;

  const newClient = await createClientService(clientData);

  return res.status(201).json(newClient);
};
const retrieveAllClientController = async (req: Request, res: Response) => {
  const client = await retrieveClientService();

  return res.status(200).json(client);
};

const deleteClientController = async (req: Request, res: Response) => {
  await deleteClientService(req.params.id);

  return res.status(204).send();
};

const retrieveOneClientController = async (req: Request, res: Response) => {
  const client = await retrieveOneClientService(req.params.id, req.user.id);
  return res.status(200).json(client);
};

export const updateClientController = async (req: Request, res: Response) => {
  const newClient = req.body;
  const id = req.params.id;

  const updatedClient = await updateClientService(newClient, id);

  return res.status(200).json(updatedClient);
};

export {
  createClientController,
  retrieveAllClientController,
  deleteClientController,
  retrieveOneClientController,
};
