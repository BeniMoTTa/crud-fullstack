import { Request, Response, NextFunction } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { AppError } from "../errors";
import { Client } from "../entities/client.entity";

export const ensureIsExistsClientMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const userRepository: Repository<Client> =
    AppDataSource.getRepository(Client);

  const findClient = await userRepository.findOne({
    where: {
      id: req.params.id,
    },
  });

  if (!findClient) {
    throw new AppError("Client not found", 404);
  }

  return next();
};
