import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import { UpiIdSchema } from '@/Types/schema'; // Assuming you have a schema for UPI ID validation
import Button from '../Button/Button';

type FormData = {
  upiId: string;
};

export default function UPIForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(UpiIdSchema),
    mode: 'onChange',
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
    // Perform form submission logic here
  };
  

  return (
    <form
      className="flex items-center gap-4 flex-wrap relative pb-6"
      onSubmit={handleSubmit(onSubmit)}
    >
      <label htmlFor="upi-id-input" className="sr-only">
        Enter your UPI ID:
      </label>
      <div className="relative flex-1 min-w-[200px] max-w-[400px]">
        <input
          {...register('upiId')}
          type="text"
          id="upi-id-input"
          className="bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pe-10 p-2.5  dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="UPI ID"
          required
        />
        {errors.upiId && (
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="text-xs text-center absolute top-full left-0 text-red-500 mt-1 "
          >
            {errors.upiId.message}
          </motion.span>
        )}
      </div>
      <div className="flex gap-4 my-4 flex-wrap">
        <div className="relative col-span-2">
          <Button content='Verify'/>
        </div>
      </div>
    </form>
  );
}
