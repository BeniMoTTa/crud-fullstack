import * as z from "zod";
import { GenderC } from "../entities/client.entity";

export const clientSchema = z.object({
  clientName: z.string(),
  email: z.string().email(),
  password: z.string().min(3),
  phone: z.string(),
  gender: z.nativeEnum(GenderC),
  clientPhoto: z.string(),
  clientCity: z.string(),
});

export const returnClientSchema = clientSchema
  .extend({
    id: z.string(),
    dateRegister: z.date().optional(),
  })
  .omit({ password: true });

export const returnRetrieveClientSchema = returnClientSchema.array();
export const updateClientSchema = clientSchema.partial();
