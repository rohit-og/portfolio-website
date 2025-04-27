"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const NavLink = ({ href, title }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: -10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
    >
      <Link
        href={href}
        className="block py-2 pl-3 pr-4 text-gray-800 dark:text-[#adb7be] sm:text-xl rounded md:p-0 hover:text-black dark:hover:text-white transition-colors"
      >
        {title}
      </Link>
    </motion.div>
  );
};

export default NavLink;
