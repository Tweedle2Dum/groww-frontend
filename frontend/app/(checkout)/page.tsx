"use client"
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Divider from "@/Components/UI/Divider/Divider";
import CartItem from "@/Components/UI/CartItem/CartItem";
import Summary from "@/Components/UI/Summary/Summary";
import Button from "@/Components/UI/Button/Button";
import useGetCart from "@/Components/Hooks/APIs/Cart/useGetCart";
import { useRouter } from "next/navigation";
import Loader from "@/Components/UI/Loader/Loader";
import EmptyCart from "@/Components/UI/EmptyCart/EmptyCart";

export default function Page() {
  const cart = useGetCart();
  const router = useRouter();

  if (cart.isLoading) {
    return (
      <>
        <Loader alignment="text-center" />
      </>
    );
  }
  if (!cart.data) return null;

  if (cart.data.products.length === 0) {
    return (
      <>
        <div className="my-10 sm:my-40">
          <EmptyCart />
        </div>
      </>
    );
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <main className="flex gap-6 flex-wrap justify-between rounded-lg">
      <motion.div
        className="cart shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] py-4 md:px-8 flex-[1]"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <h1 className="text-center sm:text-left text-2xl font-bold md:text-4xl">
          Shopping Cart
        </h1>
        <Divider className="my-8" label={"Order List"} />

        <AnimatePresence>
          {cart.data.products.map((product) => (
            <motion.div
              key={product.id}
              className="my-7"
              variants={itemVariants}
            >
              <CartItem {...product} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
      <div className="summary px-8 py-4 flex-[1] shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] sm:max-w-[400px]">
        <h1 className="text-center sm:text-left text-2xl font-bold md:text-4xl">
          Summary
        </h1>
        <Divider className="my-8 hidden sm:block" label={"Total Pricing"} />
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
