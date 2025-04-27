"use client";
import React from "react";
import NavLink from "./NavLink";
import { motion } from "framer-motion";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

const MenuOverlay = ({ links, toggleTheme, theme, mounted }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <motion.ul
      className="flex flex-col py-4 items-center bg-white dark:bg-[#121212]"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.3 }}
    >
      {links.map((link, index) => (
        <motion.li key={index} variants={itemVariants}>
          <NavLink href={link.path} title={link.title} />
        </motion.li>
      ))}

      {mounted && (
        <motion.li variants={itemVariants} className="mt-4 mb-2">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="flex items-center gap-2"
          >
            <button
              onClick={toggleTheme}
              className="flex items-center gap-2 px-4 py-2 rounded-full text-gray-800 dark:text-white bg-gray-100 dark:bg-gray-800"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <>
                  <SunIcon className="h-5 w-5" />
                  <span>Light Mode</span>
                </>
              ) : (
                <>
                  <MoonIcon className="h-5 w-5" />
                  <span>Dark Mode</span>
                </>
              )}
            </button>
          </motion.div>
        </motion.li>
      )}
    </motion.ul>
  );
};

export default MenuOverlay;
