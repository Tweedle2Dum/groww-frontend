import React from "react";
import Image from "next/image";

type Props = {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
};

function CartItem(props: Props) {
  return (
    <>
      <div className="flex gap-10 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] px-10 py-2 rounded-lg">
        <div className=" min-h-24 min-w-24 relative block " >
          <Image fill alt={props.title} src={props.image} unoptimized />
        </div>

        <div className="content max-w-80 space-y-2"><h5 className=" font-semibold">{props.title}</h5>
        <h6 className=" font-extralight">ID: {props.id}</h6>
        </div>

        <div className="content-details ml-auto space-y-2">
          <h5 className=" font-semibold">${props.price}</h5>
          <h6 className=" font-semibold">QTY: <span className=" text-sky-600">{props.quantity}</span></h6>
        </div>
        
      </div>
    </>
  );
}

export default CartItem;
