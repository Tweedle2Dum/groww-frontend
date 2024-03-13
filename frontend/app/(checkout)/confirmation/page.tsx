'use client'

import useGetCart from "@/Components/Hooks/APIs/Cart/useGetCart";
import CartItem from "@/Components/UI/CartItem/CartItem";
import Loader from "@/Components/UI/Loader/Loader";

type Props = {};

export default function Page({}: Props) {

  const cart = useGetCart()
  if (cart.isLoading) {
    return <><Loader alignment="text-center"/></>;
  }
  if (!cart.data) return null;

  const totalCost = cart.data.products.reduce((acc, product) => {
    return acc + product.quantity * product.price;
  }, 0);


  return (
    <>
      <section className="py-24 relative">
        <div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">
          <h2 className="font-manrope font-bold text-4xl leading-10 text-black text-center">
            Payment Successful
          </h2>
          <p className="mt-4 font-normal text-lg leading-8 text-gray-500 mb-11 text-center">
            Thanks for making a purchase you can check the order summary 
            below
          </p>
          <div className="main-box border border-gray-200 rounded-xl pt-6 max-w-xl max-lg:mx-auto lg:max-w-full">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between px-6 pb-6 border-b border-gray-200">
              <div className="data">
                <p className="font-semibold text-base leading-7 text-black">
                  Order Id:{" "}
                  <span className="text-indigo-600 font-medium">#10234987</span>
                </p>
                <p className="font-semibold text-base leading-7 text-black mt-4">
                  Order Payment :{" "}
                  <span className="text-gray-400 font-medium">
                    {" "}
                    18th march 2021
                  </span>
                </p>
              </div>
              <button className="rounded-full py-3 px-7 font-semibold text-sm leading-7 text-white bg-indigo-600 max-lg:mt-5 shadow-sm shadow-transparent transition-all duration-500 hover:bg-indigo-700 hover:shadow-indigo-400">
                Track Your Order
              </button>
            </div>
            <div className="w-full px-3 min-[400px]:px-6 space-y-6 pb-4">
            {cart.data.products.map((product)=>(<>
              <CartItem {...product} key={product.id}/>
            </>))}

            </div>
            <div className="w-full border-t border-gray-200 px-6 flex flex-col lg:flex-row items-center justify-between ">
              <div className="flex flex-col sm:flex-row items-center max-lg:border-b border-gray-200">
                <button className="flex outline-0 py-6 sm:pr-6  sm:border-r border-gray-200 whitespace-nowrap gap-2 items-center justify-center font-semibold group text-lg text-black bg-white transition-all duration-500 hover:text-indigo-600">
                  <svg
                    className="stroke-black transition-all duration-500 group-hover:stroke-indigo-600"
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                  >
                    <path
                      d="M5.5 5.5L16.5 16.5M16.5 5.5L5.5 16.5"
                      stroke=""
                      stroke-width="1.6"
                      stroke-linecap="round"
                    />
                  </svg>
                  Cancel Order
                </button>
              </div>
              <p className="font-semibold text-lg text-black py-6">
                Total Price: <span className="text-indigo-600"> $ {totalCost.toFixed(2)}</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
