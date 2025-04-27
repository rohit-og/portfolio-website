"use client";
import React from "react";
import GithubIcon from "../../public/images/github.png";
import LinkedinIcon from "../../public/images/linkedin.png";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

function EmailSection() {
  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-400 dark:from-purple-900 to-transparent rounded-full h-80 w-80 z-1 blur-lg absolute -left-80 top-40 -translate-x-20"></div>

      <motion.div
        className="z-4"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, margin: "-50px" }}
      >
        <h5 className="text-xl font-bold text-black dark:text-white my-2">
          Let's Connect
        </h5>
        <p className="text-gray-800 dark:text-[#adb7be] mb-4 max-w-md">
          I'm currently looking for new oppoutunities, my inbox is always open,
          Whether you have a question or just want to say hi, I'll try my best
          to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Link href="https://github.com/rohit-og" target="_blank">
              <Image
                src={GithubIcon}
                alt="GitHub Icon"
                className="w-10 text-white"
              />
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Link href="https://www.linkedin.com/in/rohitog/" target="_blank">
              <Image
                src={LinkedinIcon}
                alt="Linkedin Icon"
                className="w-10 text-white ms-2"
              />
            </Link>
          </motion.div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, margin: "-50px" }}
      >
        <form className="flex flex-col">
          <div className="mb-6">
            <label
              htmlFor="email"
              type="email"
              className="text-black dark:text-white block mb-2 text-sm font-medium"
            >
              Your Email
            </label>
            <input
              type="email"
              name=""
              id="email"
              required
              placeholder="kim@google.com"
              className="bg-gray-100 dark:bg-[#18191e] border border-gray-300 dark:border-[#33353F] placeholder-gray-500 dark:placeholder-[#9ca2a9] text-gray-900 dark:text-gray-100 text-sm rounded-lg block w-full p-2.5"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-black dark:text-white block mb-2 text-sm font-medium"
            >
              Subject
            </label>
            <input
              type="text"
              name=""
              id="subject"
              required
              placeholder="Just saying hi"
              className="bg-gray-100 dark:bg-[#18191e] border border-gray-300 dark:border-[#33353F] placeholder-gray-500 dark:placeholder-[#9ca2a9] text-gray-900 dark:text-gray-100 text-sm rounded-lg block w-full p-2.5"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-black dark:text-white block mb-2 text-sm font-medium"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              required
              placeholder="Let's talk about..."
              className="bg-gray-100 dark:bg-[#18191e] border border-gray-300 dark:border-[#33353F] placeholder-gray-500 dark:placeholder-[#9ca2a9] text-gray-900 dark:text-gray-100 text-sm rounded-lg block w-full p-2.5"
            />
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
}

export default EmailSection;
