import { z } from "zod";

export const BookSchema = z.object({
    id: z
        .number({
            required_error: "Id is required",
            invalid_type_error: "Id must be a number",
        })
        .positive({
            message: "Id should be greater than zero"
        }),
    title: z
        .string({
            required_error: "Title is required",
            invalid_type_error: "Title must be a string",
        }),
    subtitle: z
        .string({
            required_error: "Subtitle is required",
            invalid_type_error: "Subtitle must be a string",
        })
        .min(5, {
            message: "Must be 5 or more character long to subtitle"
        }),
    isbn13: z
        .number({
            required_error: "ISBN is required",
            invalid_type_error: "ISBN must be a number",
        })
        .positive({
            message: "ISBN should be greater than zero"
        })
        .int(),
    price: z.
        number({
            required_error: "Price is required",
            invalid_type_error: "Price must be a number",
        })
        .positive({
            message: "Price should be greate than zero"
        }),
    image: z
        .string()
        .min(5, { message: "Must be 5 or more characters long" })
        .url({ message: "Invalid url" })
        .startsWith("http", { message: "Must provide URL" }),
    url: z
        .string()
        .min(5, { message: "Must be 5 or more characters long" })
        .url({ message: "Invalid url" })
        .startsWith("http", { message: "Must provide URL" }),
    author: z
        .string({
            required_error: "Author is required",
            invalid_type_error: "Author must be a string",
        })
        .min(3, { message: "Must be 3 or more characters long" }),
    category: z
        .string({
            required_error: "Category is required",
            invalid_type_error: "Category must be a number",
        }),
});

export const BooksSchema = z.array(BookSchema);

export type Book = z.infer<typeof BookSchema>;
export type Books = z.infer<typeof BooksSchema>;