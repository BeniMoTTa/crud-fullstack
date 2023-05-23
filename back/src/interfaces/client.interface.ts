import { z } from "zod";
import {
  clientSchema,
  returnClientSchema,
  returnRetrieveClientSchema,
} from "../schemas/client.schema";

type TClient = z.infer<typeof clientSchema>;
type TClientReturn = z.infer<typeof returnClientSchema>;
type TClientRetrieveAll = z.infer<typeof returnRetrieveClientSchema>;
export { TClient, TClientReturn, TClientRetrieveAll };
