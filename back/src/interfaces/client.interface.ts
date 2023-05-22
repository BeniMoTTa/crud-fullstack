import { z } from "zod";
import { clientSchema, returnClientSchema } from "../schemas/client.schema";

type TClient = z.infer<typeof clientSchema>;
type TClientReturn = z.infer<typeof returnClientSchema>;

export { TClient, TClientReturn };
