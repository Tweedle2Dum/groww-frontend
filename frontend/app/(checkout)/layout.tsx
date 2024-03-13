import Steps from "@/Components/UI/Steps/Steps";
import Header from "@/Components/UI/Header/Header";
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
      <div className="pt-10">
        {" "}
        <Header />
      </div>
      <div className=" px-0 ">
        <nav className=" mt-4 sm:mt-10 flex justify-center items-center mb-10 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] py-4 px-10 rounded-xl">
          <Steps />
        </nav>
        <main>{children}</main>
      </div>
    </>
  );
}
