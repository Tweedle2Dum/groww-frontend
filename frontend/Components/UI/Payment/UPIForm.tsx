import React from 'react'
import Button from '../Button/Button'

type Props = {}

export default function UPIForm({}: Props) {
  return (

    <div>
        <label htmlFor="card-number-input" className="sr-only">
          Enter your UPI ID :
        </label>
        <div className="relative ">
          <div className=" flex gap-4 items-center">
            <input
              style={{ color: "black" }}
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
  )
}