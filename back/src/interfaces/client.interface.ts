import { z } from "zod";
import {
  clientSchema,
  returnClientSchema,
  returnRetrieveClientSchema,
} from "../schemas/client.schema";
import { DeepPartial } from "typeorm";

type TClient = z.infer<typeof clientSchema>;
type TClientReturn = z.infer<typeof returnClientSchema>;
type TClientRetrieveAll = z.infer<typeof returnRetrieveClientSchema>;
type TClientUpdate = DeepPartial<TClient>[];

export { TClient, TClientReturn, TClientRetrieveAll, TClientUpdate };
