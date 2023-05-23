import { z } from "zod";
import { createLoginSchema } from "../schemas/login.schema";

export type Tlogin = z.infer<typeof createLoginSchema>;
