import { z } from "zod";

import { DeepPartial } from "typeorm";
import {
  contactSchema,
  returnContactSchema,
  returnRetrieveContactSchema,
} from "../schemas/contact.schema";

type TContact = z.infer<typeof contactSchema>;
type TContactReturn = z.infer<typeof returnContactSchema>;
type TContactRetrieveAll = z.infer<typeof returnRetrieveContactSchema>;
type TContactUpdate = DeepPartial<TContact>[];

export { TContact, TContactRetrieveAll, TContactUpdate, TContactReturn };
