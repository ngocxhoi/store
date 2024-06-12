import { z } from "zod";

export const billingSchema = z.object({
  companyName: z.string().optional(),
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email("Email is invalid"),
  phone: z.string().min(1),
  address: z.string().min(1),
  city: z.string().min(1),
  state: z.string().min(1),
  zip: z.string().min(1),
  country: z.string().min(1),
});

export type BillingSchema = z.input<typeof billingSchema>;
