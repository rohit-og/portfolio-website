"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-10 bg-white dark:bg-[#121212] bg-opacity-100 px-2 md:px-20 shadow-sm"
    >
      <div className="flex flex-wrap items-center justify-between mx-auto px-4 py-2 md:py-8">
        <Link
          href={"/"}
          className="text-2xl md:text-5xl text-black dark:text-white font-semibold"
        >
          RohiT
        </Link>
        <div className="flex items-center">
          <div className="mobile-menu block md:hidden">
            {navbarOpen ? (
              <button
                onClick={() => setNavbarOpen(false)}
                className="text-black dark:text-slate-200 flex items-center px-3 py-2 border rounded border-black dark:border-slate-200 hover:text-gray-600 dark:hover:text-white hover:border-gray-600 dark:hover:border-white"
              >
                <XMarkIcon className="h-5 w-5" />
              </button>
            ) : (
              <button
                onClick={() => setNavbarOpen(true)}
                className="text-black dark:text-slate-200 flex items-center px-3 py-2 border rounded border-black dark:border-slate-200 hover:text-gray-600 dark:hover:text-white hover:border-gray-600 dark:hover:border-white"
              >
                <Bars3Icon className="h-5 w-5" />
              </button>
            )}
          </div>
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0 items-center">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
            {mounted && (
              <li>
                <motion.button
                  onClick={toggleTheme}
                  className="p-2 rounded-full text-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
                  aria-label="Toggle theme"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {theme === "dark" ? (
                    <SunIcon className="h-6 w-6" />
                  ) : (
                    <MoonIcon className="h-6 w-6" />
                  )}
                </motion.button>
              </li>
            )}
          </ul>
        </div>
      </div>
      {navbarOpen ? (
        <MenuOverlay
          links={navLinks}
          toggleTheme={toggleTheme}
          theme={theme}
          mounted={mounted}
        />
      ) : null}
    </motion.nav>
  );
};

export default Navbar;
