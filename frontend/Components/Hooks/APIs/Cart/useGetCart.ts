"use client";
import { useQuery } from "@tanstack/react-query";
import { StoreData } from "@/util";
async function getCart(): Promise<StoreData> {
  const response = await fetch(
    "https://groww-intern-assignment.vercel.app/v1/api/order-details",
    {
      mode: "cors",
      headers: { "content-type": "application/json" },
    }
  );

  if (!response.ok) {
    throw new Error("Some error occured while getting card details...");
  }
  const data = response.json();
  return data;
}

export default function useGetCart() {
  return useQuery({
    queryKey: ["getCart"],
    queryFn: () => {
      return getCart();
    },
  });
}
