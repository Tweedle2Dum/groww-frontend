import Divider from "@/components/ui/Divider/Divider";
import CartItem from "@/components/ui/cartitem/CartItem";
import { StoreData } from "@/util";

const store: StoreData = {
  products: [
    {
      id: 6,
      title: "Solid Gold Petite Micropave",
      price: 168,
      image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
      quantity: 10,
    },
    {
      id: 8,
      title: "Pierced Owl Rose Gold Plated Stainless Steel Double",
      price: 10.99,
      image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
      quantity: 4,
    },
    {
      id: 18,
      title: "MBJ Women's Solid Short Sleeve Boat Neck V",
      price: 9.85,
      image: "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
      quantity: 10,
    },
    {
      id: 16,
      title:
        "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
      price: 29.95,
      image: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
      quantity: 6,
    },
  ],
  paymentMethods: ["UPI", "CARDS"],
};

type Props = {};

function page({}: Props) {
  return (
    <main className=" flex gap-6 flex-wrap justify-between">
      <div className="cart shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] px-8 py-4">
        <h1 className=" text-4xl font-bold">Shopping Cart</h1>
        <Divider className=" my-8" />

        {store.products.map((product) => (
          <div key={product.id} className=" my-7">
            <CartItem {...product} />
          </div>
        ))}
      </div>
      <div className="summary">
        <h1 className=" text-4xl font-bold">Summary</h1>
      </div>
    </main>
  );
}

export default page;
