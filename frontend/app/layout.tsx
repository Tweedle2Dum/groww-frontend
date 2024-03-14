import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import AppProvider from "@/Components/Providers/AppProvider";
import { useTheme } from "@/Components/Providers/ThemeProvider";

const font = Poppins({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Groww Assignment",
  description: "Checkout Flow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={font.className}
      >
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
