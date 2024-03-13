import React, { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  content: string;
}

function Button(props: Props) {
  const { content, ...rest } = props;
  return (
    <button
      {...rest}
      type="button"
      className="  w-full text-white bg-blue-700 hover:bg-blue-800 focus:outline-none  font-medium rounded-full text-sm px-5 py-2.5 text-center me-2  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      {content}
    </button>
  );
}

export default Button;
