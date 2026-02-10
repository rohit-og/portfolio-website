"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { motion } from "framer-motion";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="skills flex">
  <ul className="list-disc pl-2 flex flex-col gap-1">
    <li>
      <span className="font-bold text-purple-400">
        Programming Languages:{" "}
      </span>
      C, C++, JavaScript, TypeScript, PHP
    </li>

    <li>
      <span className="font-bold text-purple-400">
        Frontend Technologies:{" "}
      </span>
      HTML, CSS, React, Next.js, Tailwind CSS
    </li>

    <li>
      <span className="font-bold text-purple-400">
        Backend Technologies:{" "}
      </span>
      Node.js, Express.js, Laravel
    </li>

    <li>
      <span className="font-bold text-purple-400">Database & Cache: </span>
      MySQL, PostgreSQL, MongoDB, Redis, Supabase
    </li>

    <li>
      <span className="font-bold text-purple-400">DevOps & Cloud: </span>
      Docker, Nginx, Linux (Ubuntu), DigitalOcean, AWS, Azure
    </li>

    <li>
      <span className="font-bold text-purple-400">Version Control: </span>
      Git, GitHub
    </li>

    <li>
      <span className="font-bold text-purple-400">Design & Media: </span>
      Figma, Adobe XD, Photoshop, Illustrator, After Effects
    </li>
  </ul>
</div>

    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <div>
        <div>
  <div className="flex justify-between">
    <div>
      <h3 className="text-lg font-bold text-purple-400">
        Masters of Computer Application
      </h3>
      <p className="text-black dark:text-white">
        Siliguri Institute of Technology
      </p>
    </div>
    <p className="text-black dark:text-white">2025-2027</p>
  </div>
  <ul className="list-disc pl-2 flex flex-col gap-2 ms-2 mt-4">
    <li>
      <span className=" text-pink-500">Coursework: </span>Advanced Data Structures,
      Machine Learning, Artificial Intelligence, Advanced Database Management,
      Distributed Systems, Information Security, Mobile Application Development,
      Big Data Analytics
    </li>
    <li>
      <span className=" text-pink-500">Ongoing </span>
    </li>
  </ul>
</div>
        <div>
  <div className="flex justify-between mt-6">
    <div>
      <h3 className="text-lg font-bold text-purple-400">
        Bachelors of Computer Application
      </h3>
      <p className="text-black dark:text-white">
        Inspiria Knowledge Campus
      </p>
    </div>
    <p className="text-black dark:text-white">2022-2025</p>
  </div>
  <ul className="list-disc pl-2 flex flex-col gap-2 ms-2 mt-4">
    <li>
      <span className=" text-pink-500">Coursework: </span>Data Structures
      and Algorithms, Database Management Systems, Operating Systems,
      Computer Networks, Web Development, Object-Oriented Programming,
      Software Engineering, Cloud Computing
    </li>
    <li>
      <span className=" text-pink-500">CGPA: </span>8.4 / 10
    </li>
  </ul>
</div>


      </div>
    ),
  },
  // {
  //   title: "Certifications",
  //   id: "certifications",
  //   content: (
  //     <ul className="list-disc pl-2">
  //       <li>
  //         Professional Graphics Design & Video Editing{" "}
  //         <a
  //           href="https://www.udemy.com/certificate/UC-ef9b5abd-9eab-49c5-abd0-f0c76ff4d77b/"
  //           className="text-purple-400"
  //           target="blank"
  //         >
  //           view certificate
  //         </a>
  //       </li>
  //       <li>
  //         Applied Generative AI and Natural Language Processing{" "}
  //         <a
  //           href="https://www.udemy.com/certificate/UC-46b80584-cf1e-403d-9b77-af02bd5fbc05/"
  //           className="text-purple-400"
  //           target="blank"
  //         >
  //           view certificate
  //         </a>
  //       </li>
  //     </ul>
  //   ),
  // },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section id="about" className="text-black dark:text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-start py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-50px" }}
          className="sticky top-8"
        >
          <Image
            src="/images/about-image.png"
            width={500}
            height={500}
            className="rounded-lg shadow-lg"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-50px" }}
          className="mt-4 md:mt-0 text-left flex flex-col h-full"
        >
          <h2 className="text-4xl font-bold text-black dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-gray-800 dark:text-gray-300 text-base lg:text-lg">
            With a passion for pixels and a flair for coding, I thrive on
            turning your digital dreams into stunning, functional applications.
            My mission is to bring your vision to life by combining creativity
            and technical expertise.
          </p>
          <div className="flex flex-row mt-8 justify-start">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            {/* <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton> */}
          </div>
          <motion.div
            className="mt-8"
            key={tab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {TAB_DATA.find((t) => t.id === tab).content}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;