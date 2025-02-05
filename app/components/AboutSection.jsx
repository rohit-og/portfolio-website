"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

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
            C, C++, Python, JavaScript, TypeScript
          </li>
          <li>
            <span className="font-bold text-purple-400">
              Frontend Technologies:{" "}
            </span>
            HTML, CSS, JavaScript, React, Next.js
          </li>

          <li>
            <span className="font-bold text-purple-400">
              Backend Technologies:{" "}
            </span>
            Node.js, Express
          </li>

          <li>
            <span className="font-bold text-purple-400">Database: </span>MySQL,
            MongoDB
          </li>

          <li>
            <span className="font-bold text-purple-400">Version Control: </span>
            Git, GitHub
          </li>
          <li>
            <span className="font-bold text-purple-400">Designing Tools: </span>
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
        <div className="flex justify-between">
          <div>
            <h3 className="text-lg font-bold text-purple-400">
              Bachelors of Computer Application
            </h3>
            <p className="text-white">Inspiria Knowledge Campus</p>
          </div>
          <p className="text-white">2022-2025</p>
        </div>
        <ul className="list-disc pl-2 flex flex-col gap-2 ms-2 mt-4">
          <li>
            <span className=" text-pink-500">Coursework: </span>Data Structures
            and Algorithms, Database Management Systems, Operating Systems,
            Computer Networks, Web Development, Object-Oriented Programming,
            Software Engineering, Cloud Computing
          </li>
          <li>
            <span className=" text-pink-500">CGPA: </span>7.82/10
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>
          Professional Graphics Design & Video Editing{" "}
          <a
            href="https://www.udemy.com/certificate/UC-ef9b5abd-9eab-49c5-abd0-f0c76ff4d77b/"
            className="text-purple-400"
            target="blank"
          >
            view certificate
          </a>
        </li>
        <li>
          Applied Generative AI and Natural Language Processing{" "}
          <a
            href="https://www.udemy.com/certificate/UC-46b80584-cf1e-403d-9b77-af02bd5fbc05/"
            className="text-purple-400"
            target="blank"
          >
            view certificate
          </a>
        </li>
      </ul>
    ),
  },
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
    <section id="about" className="text-white">
      <div className="md: grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
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
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
