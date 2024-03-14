import { CardSchema } from "@/Types/types";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { cardSchema } from "@/Types/schema";
import { motion } from "framer-motion";
import { useEffect } from "react";

type Props = {
  onError: (error: boolean) => void;
};
type FormData = CardSchema;

function CardForm({onError}: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(cardSchema),
    mode: "onChange",
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  useEffect(() => {
    onError(Object.keys(errors).length > 0);
  }, [errors, onError]);

  return (
    <form
      className="flex items-center gap-4 flex-wrap relative pb-6"
      onSubmit={handleSubmit(onSubmit)}
    >
      <label htmlFor="card-number-input" className="sr-only">
        Card number:
      </label>
      <div className="relative flex-1 min-w-[200px] max-w-[400px]">
        <input
          {...register("cardNumber")}
          type="text"
          id="card-number-input"
          className="bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pe-10 p-2.5  dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Card Number"
          required
        />
        {errors.cardNumber && (
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="text-xs text-center absolute top-full left-0 text-red-500 mt-1 "
          >
            {errors.cardNumber.message}
          </motion.span>
        )}
      </div>
      <div className="flex gap-4 my-4 flex-wrap">
        <div className="relative col-span-2">
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
            {...register("expirationDate")}
            type="text"
            id="card-expiration-input"
            className="w-full sm:max-w-[400px] min-w-[200px] flex-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block ps-10 p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Expiry MM/YY"
            required
          />
          {errors.expirationDate && (
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="text-xs text-center absolute top-full left-0 text-red-500 mt-1 "
              >
              {errors.expirationDate.message}
            </motion.span>
          )}
        </div>
        <div className=" sm:min-w-[150px] sm:max-w-[100px] flex-1 relative">
          <label htmlFor="cvv-input" className="sr-only">
            Card CVV code:
          </label>
          <input
            {...register("cvv")}
            type="text"
            id="cvv-input"
            className="w-full sm:max-w-[400px] min-w-[200px] bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="CVV"
            required
          />
          {errors.cvv && (
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="text-xs  absolute top-full left-0 text-red-500 mt-1 "
              >
              {errors.cvv.message}
            </motion.span>
          )}
        </div>
      </div>
    </form>
  );
}

export default CardForm;
