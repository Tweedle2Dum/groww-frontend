import Steps from "@/Components/UI/Steps/Steps";
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
      <div className=" px-40">
        <nav className=" mt-10 flex justify-center items-center mb-10">
          <Steps />
        </nav>
        <main>{children}</main>
      </div>
    </>
  );
}
