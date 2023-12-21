"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Sprout - 2d Platformer",
    description: "Unity 2d plant game",
    image: "/images/projects/project1.png",
    tag: ["All", "Games"],
    gitUrl: "https://www.wikipedia.org/",
    previewUrl: "https://www.youtube.com/",
  },
  {
    id: 2,
    title: "Kitchen Cooker",
    description: "Unity Overcooked Clone",
    image: "/images/projects/project1.png",
    tag: ["All", "Games"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Castle Defender",
    description: "unity tower defense game",
    image: "/images/projects/project1.png",
    tag: ["All", "Games"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Endless Runner",
    description: "Unreal endless runner",
    image: "/images/projects/project1.png",
    tag: ["All", "Games"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Fitness App",
    description: "workout plans",
    image: "/images/projects/project1.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Open Ai Project",
    description: "use ai api",
    image: "/images/projects/project1.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 7,
    title: "Food Ordering App",
    description: "food website",
    image: "/images/projects/project1.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
];
const ProjectsSection = () => {
    const [tag, setTag] = useState("All");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="flex flex-row justify-center items-center gap-2 text-white my-6">
        <ProjectTag
          name="All"
          onClick={handleTagChange}
          isSelected={tag === "All"}
        />
        <ProjectTag
          name="Games"
          onClick={handleTagChange}
          isSelected={tag === "Games"}
        />
        <ProjectTag
          name="Web"
          onClick={handleTagChange}
          isSelected={tag == "Web"}
        />
        <ProjectTag
          name="Production"
          onClick={handleTagChange}
          isSelected={tag == "Production"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
      {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;