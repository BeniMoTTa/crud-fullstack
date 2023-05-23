import { z } from "zod";
import { GenderContact } from "../entities/contact.entity";

export const contactSchema = z.object({
  contactName: z.string(),
  email: z.string().email(),
  phone: z.string(),
  gender: z.nativeEnum(GenderContact),
});

export const returnContactSchema = contactSchema.extend({
  id: z.string(),
  dateRegister: z.date().optional(),
});

export const returnRetrieveContactSchema = returnContactSchema.array();
export const updateContactSchema = contactSchema.partial();
