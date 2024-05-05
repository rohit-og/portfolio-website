import React from "react";
import GithubIcon from "../../public/github-mark.svg";
import LinkedinIcon from "../../public/linkedin.svg";
import Link from "next/link";
import Image from "next/image";

function EmailSection() {
  return (
    <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4">
      <div>
        <h5 className="text-xl font-bold text-white my-2">Let's Connect</h5>
        <p className="text-[#adb7be] mb-4 max-w-md">
          I'm currently looking for new oppoutunities, my inbox is always open,
          Whether you have a question or just want to say hi, I'll try my best
          to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="/">
            <Image src={GithubIcon} alt="GitHub Icon" />
          </Link>
          <Link href="/">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
        </div>
      </div>
      <div>
        <form className="flex flex-col">
          <div className="mb-6">
            <label
              htmlFor="email"
              type="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              Your Email
            </label>
            <input
              type="email"
              name=""
              id="email"
              required
              placeholder="kim@google.com"
              className="bg-[#18191e] border-[#33353F] placeholder-[#9ca2a9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white block mb-2 text-sm font-medium"
            >
              Subject
            </label>
            <input
              type="text"
              name=""
              id="subject"
              required
              placeholder="Just saying hi"
              className="bg-[#18191e] border-[#33353F] placeholder-[#9ca2a9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block mb-2 text-sm font-medium"
            >
              Subject
            </label>
            <textarea
              type="text"
              name=""
              id="subject"
              required
              placeholder="Just saying hi"
              className="bg-[#18191e] border-[#33353F] placeholder-[#9ca2a9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            />
          </div>
        </form>
      </div>
    </section>
  );
}

export default EmailSection;
