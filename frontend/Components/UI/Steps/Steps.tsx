import React from "react";
import { motion } from "framer-motion";

type Step = {
  name: string;
  path: string;
};

type Props = {
  steps: Step[];
  currentStep: string;
};

function Steps({ steps, currentStep }: Props) {
  const getStepStyles = (stepPath: string) => {
    return stepPath === currentStep ? activeStyles : inactiveStyles;
  };

  const activeStyles = {
    background: "bg-indigo-50",
    circle: "bg-indigo-600",
    circleText: "text-slate-50",
    heading: "text-indigo-600",
  };

  const inactiveStyles = {
    background: "",
    circle: "",
    circleText: "text-gray-900",
    heading: "text-gray-900",
  };

  const stepVariants = {
    active: {
      scale: 1.1,
    },
    inactive: {
      scale: 1,
    },
  };

  const transition = {
    type: "spring",
    stiffness: 200,
    damping: 20,
  };

  return (
    <div className="flex items-center justify-center w-full space-y-4 lg:space-y-0" style={{}}> 
      {steps.map((step, index) => (
        <motion.div
          key={index + 1}
          initial="inactive"
          animate={step.path === currentStep ? "active" : "inactive"}
          variants={stepVariants}
          transition={transition}
          className={`lg:flex-[0.25] max-w-[300px] mx-auto md:flex items-center  ${
            index + 1 === steps.findIndex((s) => s.path === currentStep) + 1
              ? ""
              : "hidden"
          }`}
        >
          <a
            onClick={() => {
              /* handle step click logic if needed */
            }}
            className={`flex items-center font-medium px-4 py-5 w-full rounded-lg justify-center cursor-pointer ${
              getStepStyles(step.path).background
            }`}
          >
            <motion.span
              className={`w-8 h-8 rounded-full flex justify-center items-center mr-3 text-sm lg:w-10 lg:h-10 ${
                getStepStyles(step.path).circle
              } ${getStepStyles(step.path).circleText}`}
            >
              {index + 1 < 10 ? `0${index + 1}` : index + 1}
            </motion.span>
            <motion.h4
              className={`text-sm ${getStepStyles(step.path).heading}`}
            >
              {step.name}
            </motion.h4>
          </a>
        </motion.div>
      ))}
    </div>
  );
}

export default Steps;
