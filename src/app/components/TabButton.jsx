import React from "react";
import { motion } from "framer-motion";

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active
    ? "text-white font-semibold"
    : "text-gray-500 hover:text-gray-300";

  return (
    <button onClick={selectTab} className="mr-1">
      <p className={`mr-3 font-medium transition-colors ${buttonClasses}`}>
        {children}
      </p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className="h-0.5 bg-white mt-1 mr-3 rounded-full"
      />
    </button>
  );
};

export default TabButton;
