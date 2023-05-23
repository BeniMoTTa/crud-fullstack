import { Request, Response } from "express";
import { Tlogin } from "../interfaces/login.interface";
import { createLoginService } from "../services/login/loginService.service";

export const createLoginController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const loginData: Tlogin = req.body;

  const token = await createLoginService(loginData);
  return res.json({
    token: token,
  });
};
