import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CardForm from "../../UI/Payment/CardForm";
import UPIForm from "../../UI/Payment/UPIForm";

type Props = {
  paymentMethods: string[];
};

function PaymentModule(props: Props) {
  const { paymentMethods } = props;
  const [expandedMethod, setExpandedMethod] = useState<string | null>(null);

  const toggleMethod = (method: string) => {
    setExpandedMethod((prevMethod) =>
      prevMethod === method ? null : method
    );
  };

  const handleInputClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation(); // Stop event propagation
  };

  return (
    <main className="rounded-lg">
      {paymentMethods.map((method, index) => (
        <div
          key={index}
          className={`${method.toLowerCase()} space-y-2 mb-4 hover:bg-indigo-50 cursor-pointer rounded p-4 ${
            expandedMethod === method ? "bg-indigo-50" : ""
          }`}
          onClick={() => toggleMethod(method)}
        >
          <h3 className={`text-xl`}>{method}</h3>
          <AnimatePresence>
            {expandedMethod === method && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="w-full overflow-hidden"
                onClick={handleInputClick}
              >
                {method === "CARDS" ? <CardForm /> : <UPIForm />}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </main>
  );
}

export default PaymentModule;
