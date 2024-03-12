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
  
  