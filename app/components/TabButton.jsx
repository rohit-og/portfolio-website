"use client";
import React from "react";
import { motion } from "framer-motion";

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active
    ? "text-black dark:text-white border-b border-purple-500"
    : "text-gray-500 dark:text-[#adb7be]";
  return (
    <motion.button
      onClick={selectTab}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <p
        className={`mr-3 font-semibold hover:text-black dark:hover:text-white ${buttonClasses}`}
      >
        {children}
      </p>
    </motion.button>
  );
};

export default TabButton;
