import { Product } from "@/Types/types";
import React from "react";
import Divider from "../Divider/Divider";

type Props = {
  products: Product[];
};

function Summary(props: Props) {
  const totalCost = props.products.reduce((acc, product) => {
    return acc + product.quantity * product.price;
  }, 0);

  return (
    <main className=" w-full  flex-wrap  rounded-lg text-md">
      <div className="cart w-full space-y-10 pb-4 md:w-full">
        {props.products.map((product) => (
          <div
            className="mx-auto hidden text-base text-pretty sm:flex w-full gap-6 justify-between items-center"
            key={product.id}
          >
            <h6 className="flex-[0.5] font-extralight">{product.title}</h6>
            <h6 className="flex-[0.25] font-extralight text-center text-indigo-500">
              x{product.quantity}
            </h6>
            <h6 className="flex-[0.25] font-extralight">
              ${(product.quantity * product.price).toFixed(2)}
            </h6>
          </div>
        ))}
        <Divider className="hidden sm:block" label="" />
        <div className="hidden sm:flex justify-between">
          <h6 className="font-bold">Total Price</h6>
          <h6 className="text-indigo-600 font-bold">$ {totalCost.toFixed(2)}</h6>
        </div>
      </div>
    </main>
  );
}

export default Summary;
