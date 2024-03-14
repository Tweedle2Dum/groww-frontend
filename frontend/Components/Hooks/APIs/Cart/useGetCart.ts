"use client";
import { useQuery } from "@tanstack/react-query";
import { StoreData } from "@/Types/types";
async function getCart(): Promise<StoreData> {
  // Check if data exists in localStorage
  const localStorageData = localStorage.getItem("cartData");
  if (localStorageData) {
    return JSON.parse(localStorageData);
  }
  // If data is not available in localStorage, fetch it
  const response = await fetch(
    "https://groww-intern-assignment.vercel.app/v1/api/order-details",
    {
      mode: "cors",
      headers: { "content-type": "application/json" },
    }
  );

  if (!response.ok) {
    throw new Error("Some error occurred while getting card details...");
  }

  // Parse and store data in localStorage
  const data = await response.json();
  localStorage.setItem("cartData", JSON.stringify(data));

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
