import type { Metadata } from "next";
import {PT_Sans} from "next/font/google";
import "./globals.css";

const font = PT_Sans({
  subsets: ["latin"],
  weight: "400"
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
      <body className={font.className}>{children}</body>
    </html>
  );
}
