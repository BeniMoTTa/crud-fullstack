import { Request, Response } from "express";
import { TClient } from "../interfaces/client.interface";
import { createClientService } from "../services/createClient.service";
import { retrieveClientService } from "../services/retrieveAllClient.service";

const createClientController = async (req: Request, res: Response) => {
  const clientData: TClient = req.body;

  const newClient = await createClientService(clientData);

  return res.status(201).json(newClient);
};
const retrieveAllClientController = async (req: Request, res: Response) => {
  const client = await retrieveClientService();

  return res.status(200).json(client);
};

export { createClientController, retrieveAllClientController };
