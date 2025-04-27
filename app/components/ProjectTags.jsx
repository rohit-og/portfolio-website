"use client";
import React from "react";
import { motion } from "framer-motion";

function ProjectTags({ name, onClick, isSelected }) {
  const buttonStyle = isSelected
    ? "text-black dark:text-white border-purple-500"
    : "text-gray-500 dark:text-[#adb7be] border-gray-300 dark:border-slate-600 hover:border-gray-500 dark:hover:border-white";
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${buttonStyle} rounded-full border-2 px-6 py-3 text-xl cursor-pointer`}
      onClick={() => onClick(name)}
    >
      {name}
    </motion.button>
  );
}

export default ProjectTags;
