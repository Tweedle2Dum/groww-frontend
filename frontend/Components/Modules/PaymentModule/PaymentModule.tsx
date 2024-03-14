'use client'
import React, { useState } from "react";
import CardForm from "../../UI/Payment/CardForm";
import UPIForm from "../../UI/Payment/UPIForm";

type Props = {
  paymentMethods: string[];
};

function PaymentModule(props: Props) {
  const { paymentMethods } = props;
  const [expandedMethod, setExpandedMethod] = useState<string | null>(null);

  const toggleMethod = (method: string) => {
    setExpandedMethod(prevMethod => prevMethod === method ? null : method);
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
          <h3
            className={`text-xl`}
          >
            {method}
          </h3>
          {expandedMethod === method && (
            <div className="w-full" onClick={handleInputClick}>
              {method === "CARDS" ? <CardForm /> : <UPIForm />}
            </div>
          )}
        </div>
      ))}
    </main>
  );
}

export default PaymentModule;
