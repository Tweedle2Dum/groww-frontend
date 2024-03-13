"use client";
import Divider from "@/Components/UI/Divider/Divider";
import CartItem from "@/Components/UI/CartItem/CartItem";
import Summary from "@/Components/UI/Summary/Summary";
import Button from "@/Components/UI/Button/Button";
import useGetCart from "@/Components/Hooks/APIs/Cart/useGetCart";
import { useRouter } from "next/navigation";
import Loader from "@/Components/UI/Loader/Loader";

export default function Page() {
  const cart = useGetCart();
  const router = useRouter();

  if (cart.isLoading) {
    return <><Loader alignment="text-center"/></>;
  }
  if (!cart.data) return null;
  return (
    <main className=" flex gap-6 flex-wrap justify-between rounded-lg">
      <div className="cart shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] px-8 py-4 flex-1">
        <h1 className=" text-4xl font-bold">Shopping Cart</h1>
        <Divider className=" my-8" label={"Order List"} />

        {cart.data.products.map((product) => (
          <div key={product.id} className=" my-7">
            <CartItem {...product} />
          </div>
        ))}
      </div>
      <div className="summary px-8 py-4 flex-1 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] max-w-[400px] ">
        <h1 className=" text-4xl font-bold">Summary</h1>
        <Divider className="my-8" label={"Total Pricing"} />
        <Summary products={cart.data.products} />
        <Button
          content="Continue"
          onClick={() => {
            router.push("/payment");
          }}
        />
      </div>
    </main>
  );
}

