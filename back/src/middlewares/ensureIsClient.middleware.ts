import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { AppError } from "../errors";

export const ensureIsClient = (
  req: Request,
  res: Response,
  next: NextFunction
): Response | void => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    throw new AppError("Missing bearer token", 401);
  }

  jwt.verify(token, process.env.SECRET_KEY!, (error, decoded: any) => {
    if (error) {
      throw new AppError(error.message, 401);
    }
    if (decoded.sub !== req.params.id) {
      throw new AppError("You are not authorized to delete this item", 401);
    }
    next();
  });
};
