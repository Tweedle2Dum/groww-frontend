import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import AppProvider from "@/Components/Providers/AppProvider";

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
        className={font.className + " px-4 md:px-20 md:pb-20 bg-primary-color"}
      >
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
