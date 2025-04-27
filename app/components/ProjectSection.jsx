"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTags from "./ProjectTags";
import { motion } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "A concept UI design for VALORANT Agents! 🎨✨",
    description:
      "As a passionate gamer and UI designer, I've combined my love for gaming with my design skills to create a fresh, intuitive interface for navigating through VALORANT's diverse roster of Agents. ",
    image: "/images/projects/viper.png",
    tag: ["All", "UI/UX"],
    gitUrl:
      "https://www.figma.com/design/DiZshlqnuGrfLebklI92sV/VALORANT-Concept-UI?node-id=0-1&t=i8pxyEV3LznD6QsC-1",
    previewUrl:
      "https://www.behance.net/gallery/204772527/VALORANT-Agent-Selection-Concept-UIUX",
  },
  {
    id: 2,
    title: "AI-Powered Art Gallery Web App 🌟",
    description:
      "It is a dynamic, full-stack web application designed to showcase and interact with AI-generated artwork. Utilizing a modern tech stack, this project integrates the latest frontend and backend technologies to deliver a seamless user experience.",
    image: "/images/projects/aiii.png",
    tag: ["All", "App"],
    gitUrl: "https://github.com/heyrohitog/ai-image-generator",
    previewUrl: "https://artist-hu-bhai.vercel.app/",
  },
  {
    id: 3,
    title:
      "A cutting-edge mobile app UI design for a futuristic fashion experience! 🌐✨",
    description:
      "👗 AI-Powered Styling: Get personalized outfit recommendations based on your preferences, body type, and current fashion trends.",
    image: "/images/projects/fashion.png",
    tag: ["All", "UI/UX"],
    gitUrl:
      "https://www.figma.com/design/z6BFsQ3DpPQejOQYQTOoCd/Fashion-App-UI?node-id=0-1&t=9O12bXosrG7MERAo-1",
    previewUrl:
      "https://www.behance.net/gallery/204772653/Futuristic-Fashion-Mobile-App-UIUX-Design",
  },
  {
    id: 4,
    title: "Wuthering Waves Resonator Details Page! 🎮✨",
    description:
      "This design is crafted to provide an immersive and user-friendly experience for players, featuring A user-centric layout that makes it easy to navigate and access character details.",
    image: "/images/projects/ww.png",
    tag: ["All", "UI/UX"],
    gitUrl:
      "https://www.figma.com/design/lCdsOmZfbaXBRDPPwlOPZJ/Wuthering-Waves-Concept-UI?node-id=0-1&t=YKdXTf2BZ3wgChOJ-1",
    previewUrl:
      "https://www.behance.net/gallery/204772309/Wuthering-Waves-Resonator-Screen-Concept-UIUX",
  },
  {
    id: 5,
    title: "A Futuristic Habit Tracker Website Dashboard! 🌟",
    description:
      "In this design, I've aimed to blend sleek aesthetics with intuitive functionality to help users build and maintain positive habits effortlessly.",
    image: "/images/projects/trakr.png",
    tag: ["All", "UI/UX"],
    gitUrl:
      "https://www.figma.com/design/Dd6DpDZhG9O9exj7jXc4OP/Tracker-App-UI?node-id=0-1&t=YrehhFWAsxEjye04-1",
    previewUrl:
      "https://www.behance.net/gallery/204772577/Habit-Tracker-Concept-UIUX-Design",
  },
  {
    id: 6,
    title: "AI Chat Web App Built with the MERN Stack 🌐✨",
    description:
      "This project showcases a seamless integration of AI-driven conversation capabilities within a modern web application framework.",
    image: "/images/projects/chatai.png",
    tag: ["All", "App"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

function ProjectSection() {
  const [tag, setTag] = useState("All");

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  return (
    <section id="projects" className="py-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, margin: "-50px" }}
      >
        <h2 className="text-center text-4xl font-bold text-black dark:text-white mt-4 mb-6">
          My Projects
        </h2>
      </motion.div>
      <motion.div
        className="text-black dark:text-white flex flex-row items-center justify-center gap-2 py-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true, margin: "-50px" }}
      >
        <ProjectTags
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTags
          onClick={handleTagChange}
          name="App"
          isSelected={tag === "App"}
        />
        <ProjectTags
          onClick={handleTagChange}
          name="UI/UX"
          isSelected={tag === "UI/UX"}
        />
      </motion.div>
      <motion.div
        className="grid md:grid-cols-3 gap-8 md:gap-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 0.5,
          delay: 0.4,
          staggerChildren: 0.1,
        }}
        viewport={{ once: true, margin: "-100px" }}
      >
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </motion.div>
    </section>
  );
}

export default ProjectSection;
