import { compare } from "bcryptjs";
import jwt from "jsonwebtoken";
import { AppDataSource } from "../../data-source";
import { Client } from "../../entities/client.entity";
import { AppError } from "../../errors";
import { Tlogin } from "../../interfaces/login.interface";

export const createLoginService = async (
  loginData: Tlogin
): Promise<object> => {
  const clientRepository = AppDataSource.getRepository(Client);
  const client: Client | null = await clientRepository.findOneBy({
    email: loginData.email,
  });
  if (!client) {
    throw new AppError("Invalid credentials", 403);
  }
  const passwordHash = await compare(loginData.password, client.password);

  if (!passwordHash) {
    throw new AppError("Invalid credentials", 403);
  }
  const token: string = jwt.sign(
    {
      email: client.email,
    },
    process.env.SECRET_KEY!,
    {
      expiresIn: "1h",
      subject: client.id,
    }
  );
  return { token, id: client.id };
};
