import React, { ButtonHTMLAttributes } from "react";
import { HTMLMotionProps, motion } from "framer-motion";

interface Props extends HTMLMotionProps<"button"> {
  content: string;
}

function Button(props: Props) {
  const { content, ...rest } = props;
  return (
    <motion.button
      whileHover={{ scale: 1.1 }} // Scale animation on hover
      {...rest}
      type="button"
      className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      {content}
    </motion.button>
  );
}

export default Button;
