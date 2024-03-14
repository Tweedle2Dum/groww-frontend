'use client'
import useGetCart from "@/Components/Hooks/APIs/Cart/useGetCart";
import Button from "@/Components/UI/Button/Button";
import Divider from "@/Components/UI/Divider/Divider";
import Summary from "@/Components/UI/Summary/Summary";
import PaymentModule from "@/Components/Modules/PaymentModule/PaymentModule";
import { useRouter } from "next/navigation";
import Loader from "@/Components/UI/Loader/Loader";
import { useTheme } from "@/Components/Providers/ThemeProvider";

export default function Page() {
  const cart = useGetCart();
  const router = useRouter();

  if (cart.isLoading) {
    return <><Loader alignment="text-center"/></>;
  }
  if (!cart.data) return null;

  const theme = useTheme();
  const totalCost = cart.data.products.reduce((acc, product) => {
    return acc + product.quantity * product.price;
  }, 0);

  return (
    <main className="flex flex-wrap gap-6 justify-between rounded-lg relative">
      <div className="min-w-[300px] px-4 sm:px-8 py-4 payment flex-1 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] rounded-lg space-y-4 mb-10">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold">Choose Payment Method</h1>
        <PaymentModule paymentMethods={cart.data.paymentMethods} />
      </div>
      <div className="summary mx-auto min-w-[320px] px-8 py-4 flex-1 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] sticky rounded-lg max-w-[400px]">
        <h1 className="hidden sm:block text-xl sm:text-2xl md:text-3xl font-semibold">Summary</h1>
        <Divider className="hidden sm:block my-8" label={"Item Name"} />
        <Summary products={cart.data.products} />
      </div>
      <div className="fixed bottom-0 right-[50%] w-full bg-white shadow-md p-4 flex  items-center translate-x-[50%] justify-center gap-6 flex-wrap">

        <div className="">
          <h3 className="text-2xl"><span className=" text-indigo-600">Total Price:</span> ${totalCost.toFixed(2)}</h3>
        </div>
        <div className="max-w-[250px]">
          <Button
            content="Make Payment"
            onClick={() => {
              router.push("/confirmation");
            }}
          />
        </div>
      </div>
    </main>
  );
}
