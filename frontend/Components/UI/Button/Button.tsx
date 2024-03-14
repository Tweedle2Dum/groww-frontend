import React, { ButtonHTMLAttributes } from "react";
import { HTMLMotionProps, motion } from "framer-motion";
import { useTheme } from "@/Components/Providers/ThemeProvider";

interface Props extends HTMLMotionProps<"button"> {
  content: string;
}

function Button(props: Props) {
  const { content, ...rest } = props;
  const { isWhiteLabelling, theme } = useTheme();
  const buttonStyle = isWhiteLabelling ? {
    color: theme["--primary"], 
    background: theme["--background"] 
  } : {};
  return (
    <motion.button
      whileHover={{ scale: 1.1 }} // Scale animation on hover
      {...rest}
      type="button"
      style={buttonStyle}
      className="w-full font-bold text-white bg-blue-700 hover:bg-blue-800 focus:outline-none rounded-full text-sm px-5 py-2.5 text-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
/*       style={{color:theme.theme["--primary"],background:theme.theme["--background"]}}
 */    >
      {content}
    </motion.button>
  );
}

export default Button;
