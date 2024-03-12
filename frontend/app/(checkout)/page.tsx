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
        title: "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
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
      <div className="cart">
        <h1 className=" text-4xl">Shopping Cart</h1>
            {store.products.map((product)=>(<>
                <CartItem {...product} key={product.id}/>
            </>))}

      </div>
      <div className="summary">
            <h1 className=" text-4xl">
                Summary
            </h1>
      </div>
    </main>
  );
}

export default page;
