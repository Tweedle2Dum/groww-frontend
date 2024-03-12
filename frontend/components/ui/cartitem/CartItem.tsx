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
  return <>
    <div className="flex gap-4">
        <div className=" mh-40 mw-40 relative">
            <Image fill alt={props.title} src={props.image} />
        </div>
            {props.title}
    </div>
  
  </>;
}

export default CartItem;
