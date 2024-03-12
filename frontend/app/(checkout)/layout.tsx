import Steps from "@/components/ui/steps/Steps";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Checkout",
  description: "Checkout Page",
};

export default function CheckoutLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Steps />
      <main className=" px-40">{children}</main>
    </>
  );
}
