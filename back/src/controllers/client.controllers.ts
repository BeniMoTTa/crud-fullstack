import { Request, Response } from "express";

const createClientController = async (req: Request, res: Response) => {
  return res.status(201).json("Client created");
};

export { createClientController };
