"use client";
import useGetCart from "@/Components/Hooks/APIs/Cart/useGetCart";
import Button from "@/Components/UI/Button/Button";
import Divider from "@/Components/UI/Divider/Divider";
import Summary from "@/Components/UI/Summary/Summary";
import { useRouter } from "next/navigation";

function page() {
  const cart = useGetCart();
  const router = useRouter();

  if (cart.isLoading) {
    return <>Loading</>;
  }
  if (!cart.data) return null;

  return (
    <main className=" flex gap-6 flex-wrap justify-between rounded-lg">
      <div className="payment"></div>
      <div className="summary px-8 py-4 flex-1 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] max-w-[400px] max-h-[90vh] ">
        <h1 className=" text-4xl font-bold">Summary</h1>
        <Divider className="my-8" label={"Item Name"} />
        <Summary products={cart.data.products} />
        <Button
          content="Continue"
          onClick={() => {
            router.push("/confirmation");
          }}
        />
      </div>
    </main>
  );
}

export default page;