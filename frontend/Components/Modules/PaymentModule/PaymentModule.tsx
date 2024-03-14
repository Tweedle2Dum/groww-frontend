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
    if (expandedMethod === method) {
      setExpandedMethod(null);
    } else {
      setExpandedMethod(method);
    }
  };

  return (
    <main className="">
      {paymentMethods.map((method, index) => (
        <div key={index} className={`${method.toLowerCase()} space-y-2 mb-4 `}>
          <h3
            className={method === "CARDS" ? "text-xl font-extralight" : "text-xl text-slate-700"}
            onClick={() => toggleMethod(method)}
            style={{ cursor: "pointer" }}
          >
            {method}
          </h3>
          {expandedMethod === method && (
            <div className="w-full">
              {method === "CARDS" ? <CardForm /> : <UPIForm />}
            </div>
          )}
        </div>
      ))}
    </main>
  );
}

export default PaymentModule;
