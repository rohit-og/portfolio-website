import React from "react";
import GithubIcon from "../../public/images/github.png";
import LinkedinIcon from "../../public/images/linkedin.png";
import Link from "next/link";
import Image from "next/image";

function EmailSection() {
  return (
    <section id="contact" className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
            <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full h-80 w-80 z-1 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>

      <div className="z-4">
        <h5 className="text-xl font-bold text-white my-2">Let's Connect</h5>
        <p className="text-[#adb7be] mb-4 max-w-md">
          I'm currently looking for new oppoutunities, my inbox is always open,
          Whether you have a question or just want to say hi, I'll try my best
          to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/heyrohitog" target="_blank" >
            <Image src={GithubIcon} alt="GitHub Icon" className="w-10 text-white" />
          </Link>
          <Link href="https://www.linkedin.com/in/rohitog/" target="_blank" >
            <Image src={LinkedinIcon} alt="Linkedin Icon" className="w-10 text-white ms-2" />
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
              Message
            </label>
            <textarea
              name="message"
              id="message"
              required
              placeholder="Let's talk about..."
              className="bg-[#18191e] border-[#33353F] placeholder-[#9ca2a9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            />
          </div>
          <button type="submit" className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full">Send Message</button>
        </form>
      </div>

    </section>
  );
}

export default EmailSection;
