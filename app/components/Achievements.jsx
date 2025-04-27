"use client";
import React from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);

const achievementsList = [
  {
    metric: "Projects",
    value: "10",
    postfix: "+",
  },
  {
    prefix: "~",
    metric: "Users",
    value: "100,000",
  },
  {
    metric: "Awards",
    value: "7",
  },
  {
    metric: "Years",
    value: "2",
  },
];

const Achievements = () => {
  return (
    <motion.div
      className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <motion.div
        className="sm:border-gray-200 dark:sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between bg-gray-50 dark:bg-[#121212] shadow-md"
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
        viewport={{ once: true, margin: "-100px" }}
      >
        {achievementsList.map((achievement, index) => {
          return (
            <motion.div
              key={index}
              className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <h2 className="text-black dark:text-white text-4xl font-bold flex flex-row">
                {achievement.prefix}
                <AnimatedNumbers
                  includeComma
                  animateToNumber={parseInt(achievement.value)}
                  locale="en-US"
                  className="text-black dark:text-white text-4xl font-bold"
                  configs={(_, index) => {
                    return {
                      mass: 1,
                      friction: 100,
                      tensions: 140 * (index + 1),
                    };
                  }}
                />
                {achievement.postfix}
              </h2>
              <p className="text-gray-800 dark:text-[#ADB7BE] text-base">
                {achievement.metric}
              </p>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default Achievements;
