import {z} from "zod" ; 
export const cardSchema = z.object({
    cardNumber: z.string().refine((value) => /^\d{16}$/.test(value), {
      message: "Invalid card number. It should be a 16-digit numeric value.",
    }),
    expiryTime: z.string().refine((value) => /^\d{2}\/\d{2}$/.test(value), {
      message: "Invalid expiry time. It should be in the format MM/YY.",
    }),
    cvv: z.string().refine((value) => /^\d{3,4}$/.test(value), {
      message: "Invalid CVV. It should be a 3 or 4-digit numeric value.",
    }),
  });