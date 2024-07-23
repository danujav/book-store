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
        .string({
            required_error: "Telephone is required",
            invalid_type_error: "Telephone must be a string",
        })
        .min(10, { message: "Must be 10 or more character long for telephone" }),
    country: z
        .string(),
    city: z
        .string(),
    streetaddress: z
        .string({
            required_error: "Street address is required",
            invalid_type_error: "Street address must be a string",
        })
        .min(10, { message: "Must be 10 or more character long for streed address" }),
    postalcode: z
        .string(),
    othernotes: z
        .string()
});

export type TBillingFormSchema = z.infer<typeof BillingFormSchema>;