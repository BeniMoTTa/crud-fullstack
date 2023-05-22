import { Request, Response } from "express";
import { TClient } from "../interfaces/client.interface";
import { createClientService } from "../services/createClient.service";

const createClientController = async (req: Request, res: Response) => {
  const clientData: TClient = req.body;

  const newClient = await createClientService(clientData);

  return res.status(201).json(newClient);
};

export { createClientController };
