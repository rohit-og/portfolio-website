"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import FileSaver from "file-saver";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Hello, I&apos;m{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Rohit Sharma",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "Software Developer",
                1000,
                "UI/UX Designer",
                1000,

              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#adb7be] text-base sm:text-lg lg:text-xl mb-6">
          Passionate and dedicated BCA 3rd-year student with a strong foundation in software development and web
technologies. Always looking for an oppurtunity to use my skills in full-stack development to contribute
and participate in innovative projects
          </p>
          <div>
            <a
              className="block sm:inline-flex px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:cursor-pointer text-white"
              href="https://www.linkedin.com/in/rohitog/"
              target="blank"
            >
              Hire Me
            </a>
            <a
              className="block sm:inline-flex px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-white text-white mt-3"
              href="https://drive.google.com/file/d/1m3TCr03nUGMKQnSMUB4RTd1wXil9lMxv/view?usp=drive_link"
              target="blank"
            >
              <span className="block bg-[#121212] hover:bg:white rounded-full px-5 py-2">
                Download CV
              </span>
            </a>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#ffffff] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/snapchat.jpg"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full border-2 border-white"
              width={400}
              height={400}
            ></Image>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
