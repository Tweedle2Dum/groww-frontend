import React from "react";

type Props = {};

function Steps({}: Props) {
  return (
    <ol className="lg:flex items-center w-full space-y-4 lg:space-y-0  ">
 	<li className="  flex-1 ">
 		<a className="flex items-center font-medium px-4 py-5 w-full rounded-lg bg-indigo-50 justify-center">
 			<span className="w-8 h-8 bg-indigo-600  rounded-full flex justify-center items-center mr-3 text-sm text-white lg:w-10 lg:h-10">01</span>
 			<h4 className="text-base  text-indigo-600">Review Order</h4>
 		</a>
 	</li>
 	<li className="  flex-1 ">
 		<a className="flex items-center font-medium px-4 py-5 w-full justify-center">
 			<span className="w-8 h-8 bg-indigo-50 border border-indigo-600 rounded-full flex justify-center items-center mr-3 text-sm text-indigo-600 lg:w-10 lg:h-10">02</span>
 			<h4 className="text-base  text-gray-900">Choose Payment Method</h4>
 		</a>
 	</li>
 	<li className=" flex-1">
 		<a className="flex items-center font-medium px-4 py-5 w-full justify-center">
 			<span className="w-8 h-8 bg-gray-50 border border-gray-200 rounded-full flex justify-center items-center mr-3 text-sm  lg:w-10 lg:h-10">03</span>
 			<h4 className="text-base  text-gray-900">Confirmation</h4>
 		</a>
 	</li>
 </ol>
  );
}

export default Steps;
