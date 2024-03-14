"use client";
import { useEffect, useState } from "react";

export interface ThemeData {
  "--background": string;
  "--foreground": string;
  "--primary": string;
  "--primary-foreground": string;
}

export interface ThemeApiResponse {
  merchantName: string;
  merchantLogo: string;
  theme: ThemeData;
}

const useThemeData = (): ThemeApiResponse | null => {
  const [themeData, setThemeData] = useState<ThemeApiResponse | null>(null);

  useEffect(() => {
    const fetchThemeData = async () => {
      try {
        const response = await fetch(
          "https://groww-intern-assignment.vercel.app/v1/api/merchant-metadata"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch theme data");
        }
        const data: ThemeApiResponse = await response.json();
        setThemeData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchThemeData();
  }, []);

  return themeData;
};

export default useThemeData;
