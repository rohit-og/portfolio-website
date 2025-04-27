"use client";
import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-50px" }}
      className="footer border z-10 border-t-gray-200 dark:border-t-[#33353F] border-l-transparent border-r-transparent text-black dark:text-white"
    >
      <div className="container p-12 flex justify-between">
        <motion.span
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          RohiT
        </motion.span>
        <p className="text-gray-700 dark:text-slate-600">
          All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
