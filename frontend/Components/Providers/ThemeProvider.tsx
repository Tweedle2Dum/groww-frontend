"use client";
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import useThemeData, {
  ThemeApiResponse,
  ThemeData,
} from "../Hooks/Theme/useThemeData";
import Loader from "../UI/Loader/Loader";

// Create a context for the theme
interface ThemeContextType {
  theme: ThemeData;
  merchantName: string;
  merchantLogo: string;
  loading: boolean; // Add loading state
}

const ThemeContext = createContext<ThemeContextType | null>(null);

export const useTheme = () => {
  const themeContext = useContext(ThemeContext);
  if (!themeContext) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return themeContext;
};

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState(true); // Track loading state
  const themeData = useThemeData();

  const defaultThemeData: ThemeApiResponse = {
    merchantName: "LOGO",
    merchantLogo: "null",
    theme: {
      "--background": "white",
      "--foreground": "black",
      "--primary": "blue",
      "--primary-foreground": "white",
    },
  };

  const mergedThemeData = themeData ? themeData : defaultThemeData;

  useEffect(() => {
    if (themeData) {
      updateCssVariables(themeData.theme);
      setLoading(false); // Once theme data is set, update loading state
    }
  }, [themeData]);
  const updateCssVariables = (theme: ThemeData) => {
    const root = document.documentElement;
    Object.entries(theme).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });
  };

  if (loading) {
    // If loading, render loading indicator or placeholder
    return (
      <div className="mx-auto mt-[30vh] text-center">
        <Loader alignment="text-center" />
      </div>
    );
  }

  return (
    <ThemeContext.Provider
      value={{
        theme: mergedThemeData.theme,
        merchantName: mergedThemeData.merchantName,
        merchantLogo: mergedThemeData.merchantLogo,
        loading,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
