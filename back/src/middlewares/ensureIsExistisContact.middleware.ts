import { Request, Response, NextFunction } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { AppError } from "../errors";

import { Contact } from "../entities/contact.entity";

export const ensureIsExistsContactMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const userRepository = AppDataSource.getRepository(Contact);

  const findClient = await userRepository.findOne({
    where: {
      id: req.params.id,
    },
  });

  if (!findClient) {
    throw new AppError("Contact not found", 404);
  }

  return next();
};
