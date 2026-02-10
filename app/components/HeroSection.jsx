"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import FileSaver from "file-saver";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="py-10">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-50px" }}
          className="col-span-7 place-self-center text-center sm:text-left"
        >
          <h1 className="text-black dark:text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Hello, I&apos;m{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Rohit Sharma",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "Software Engineer",
                1000,
                "UI/UX Designer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-gray-800 dark:text-[#adb7be] text-base sm:text-lg lg:text-xl mb-6">
            I’m a Software Engineer and UI/UX Designer based in India, passionate about building high-impact digital products. I work across the full stack, blending strong engineering fundamentals with thoughtful design to contribute to innovative, user-focused projects.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="block sm:inline-flex px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:cursor-pointer text-white"
              href="https://www.linkedin.com/in/rohitog/"
              target="blank"
            >
              Hire Me
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="block sm:inline-flex px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-white text-gray-800 dark:text-white mt-3"
              href="https://drive.google.com/file/d/1m3TCr03nUGMKQnSMUB4RTd1wXil9lMxv/view?usp=drive_link"
              target="blank"
            >
              <span className="block bg-white dark:bg-[#121212] hover:bg:white rounded-full px-5 py-2">
                Download CV
              </span>
            </motion.a>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-50px" }}
          className="col-span-5 place-self-center mt-4 lg:mt-0"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
            viewport={{ once: true }}
            className="rounded-full bg-gradient-to-r from-purple-400 to-pink-600 p-1 w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative"
          >
            <div className="rounded-full bg-white dark:bg-[#121212] w-full h-full relative overflow-hidden">
              <Image
                src="/images/snapchat.jpg"
                alt="hero image"
                className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full border-2 border-white dark:border-[#333333]"
                width={400}
                height={400}
              ></Image>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
