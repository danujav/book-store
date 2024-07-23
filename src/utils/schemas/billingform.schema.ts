import { z } from "zod";

export const BillingFormSchema = z.object({
    firstname: z
        .string({
            required_error: "First name is required",
            invalid_type_error: "First name must be a string",
        })
        .min(3, { message: "Must be 3 or more character long for firstname" }),
    secondname: z
        .string({
            required_error: "Second name is required",
            invalid_type_error: "Second name must be a string",
        })
        .min(3, { message: "Must be 3 or more character long for secondname" }),
    email: z
        .string()
        .email(),
    telephone: z
        .string(),
    country: z
        .string(),
    city: z
        .string(),
    streetaddress: z
        .string(),
    postalcode: z
        .number()
        .int()
        .positive(),
    othernotes: z
        .string()
});

export type TBillingFormSchema = z.infer<typeof BillingFormSchema>;