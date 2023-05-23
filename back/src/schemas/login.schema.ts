import { z } from "zod";

export const createLoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(3).max(80),
});
