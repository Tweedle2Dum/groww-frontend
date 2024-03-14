import {z} from 'zod';
import { UpiIdSchema, cardSchema } from './schema';

export type Product = {
    id: number;
    title: string;
    price: number;
    image: string;
    quantity: number;
  };
  
export  type PaymentMethod = "UPI" | "CARDS";
  
export type StoreData = {
    products: Product[];
    paymentMethods: PaymentMethod[];
  };
  
 
export type CardSchema = z.infer<typeof cardSchema >

export type upiIdSchema = z.infer<typeof UpiIdSchema>;
