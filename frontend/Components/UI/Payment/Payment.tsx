import React from "react";
import Button from "../Button/Button";

type Props = {
  paymentMethods: string[];
};

function Payment(props: Props) {
  return (
    <main>
      <div className="cards space-y-6">
        <h3 className=" text-xl font-extralight">Debit/Credit Card</h3>
        <form className="max-w-sm">
          <label htmlFor="card-number-input" className="sr-only">
            Card number:
          </label>
          <div className="relative">
            <input
              type="text"
              id="card-number-input"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pe-10 p-2.5  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Card Number"
              pattern="^4[0-9]{12}(?:[0-9]{3})?$"
              required
            />
          </div>
          <div className="grid grid-cols-3 gap-4 my-4">
            <div className="relative max-w-sm col-span-2">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </div>
              <label htmlFor="card-expiration-input" className="sr-only">
                Card expiration date:
              </label>
              <input
                datepicker-htmlFormat="mm/yy"
                id="card-expiration-input"
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Expiry MM/YY"
                required
              />
            </div>
            <div className="col-span-1">
              <label htmlFor="cvv-input" className="sr-only">
                Card CVV code:
              </label>
              <input
                type="number"
                id="cvv-input"
                aria-describedby="helper-text-explanation"
                className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="CVV"
                required
              />
            </div>
          </div>
        </form>
      </div>
      <div className="upi space-y-6">
        <h3 className=" text-xl text-slate-700">UPI</h3>
        <label htmlFor="card-number-input" className="sr-only">
          Enter your UPI ID :
        </label>
        <div className="relative ">
          <div className=" flex gap-4 items-center">
            <input
              type="text"
              id="card-number-input"
              className=" max-w-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pe-10 p-2.5  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="UPI ID"
              pattern="^4[0-9]{12}(?:[0-9]{3})?$"
              required
            />
            <div className="max-w-[100px]">
              <Button content="Verify" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Payment;
