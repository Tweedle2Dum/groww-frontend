import { Product } from "@/util";
import React from "react";
import CartItem from "../CartItem/CartItem";
import Divider from "../Divider/Divider";
import Button from "../Button/Button";
type Props = {
  products: Product[];
};

function Summary(props: Props) {
  const totalCost = props.products.reduce((acc, product) => {
    return acc + product.quantity * product.price;
  }, 0);
  return (
    <main className=" flex-wrap justify-between  rounded-lg">
      <div className="cart space-y-10 ">
        {props.products.map((product) => (
          <>
            <div
              className=" text-sm flex w-full gap-6 justify-between items-center"
              key={product.id}
            >
              <h6 className="flex-[0.5] font-extralight">{product.title}</h6>
              <h6 className=" flex-[0.25] font-extralight text-center text-sky-500">
                x{product.quantity}
              </h6>
              <h6 className=" flex-[0.25] font-extralight">
                ${product.quantity * product.price}
              </h6>
            </div>
          </>
        ))}
        <Divider className="" label="" />
        <div className="flex justify-between">
          <h6 className=" font-bold">Total Price</h6>
          <h6 className=" text-sky-500 font-bold">$ {totalCost}</h6>
        </div>
        <Button content="Continue" />
      </div>
    </main>
  );
}

export default Summary;
