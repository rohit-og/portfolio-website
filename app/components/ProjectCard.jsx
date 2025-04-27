"use client";
import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { motion } from "framer-motion";

function ProjectCard({ imgUrl, title, description, gitUrl, previewUrl }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -5 }}
    >
      <div
        className="h-52 md:h-72 rounded-t-xl relative group shadow-lg"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      >
        <div className="overlay flex items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-500 opacity-0 group-hover:opacity-100">
          <div className="flex items-center justify-center gap-4">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Link
                href={gitUrl}
                target="_blank"
                className="h-14 w-14 border-2 relative rounded-full border-[#adb7be] hover:border-white group/link flex items-center justify-center"
              >
                <CodeBracketIcon className="h-10 w-10 text-[#adb7be] cursor-pointer group-hover/link:text-white" />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Link
                href={previewUrl}
                target="_blank"
                className="h-14 w-14 border-2 relative rounded-full border-[#adb7be] hover:border-white group/link flex items-center justify-center"
              >
                <EyeIcon className="h-10 w-10 text-[#adb7be] cursor-pointer group-hover/link:text-white" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="text-black dark:text-white rounded-b-xl bg-gray-100 dark:bg-[#181818] py-6 px-4 shadow-lg">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-gray-800 dark:text-[#Adb7b3] min-h-[100px]">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
