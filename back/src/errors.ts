import { NextFunction, Request, Response } from "express";
import { ZodError } from "zod";

export class AppError extends Error {
  statusCode: number;
  constructor(message: string, statusCode: number = 400) {
    super(message);
    this.statusCode = statusCode;
  }
}
export const handleErrors = (
  err: any,
  req: Request,
  res: Response,
  _: NextFunction
) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      message: err.message,
    });
  }
  if (err instanceof ZodError) {
    return res.status(400).json({ message: err.flatten().fieldErrors });
  }
  return res.status(500).json({
    message: "Internal server error",
  });
};
