"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Blog Website 2",
    description: "NextJS, React, MERN, API, Authentication",
    image: "/images/projects/blog.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Wilson-Gip/blog-website-2",
    previewUrl: "https://blog-website-2.vercel.app/",
  },
  {
    id: 2,
    title: "Captions Generator",
    description: "Puts customizable captions on 16:9 video files",
    image: "/images/projects/captions.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Wilson-Gip/captions-website",
    previewUrl: "https://captions-website.vercel.app/",
  },
  {
    id: 3,
    title: "Portfolio",
    description: "This website!",
    image: "/images/projects/portfolio.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Wilson-Gip/portfolio-website",
    previewUrl: "https://portfolio-website-swart-delta.vercel.app/",
  },
  {
    id: 4,
    title: "Anime Collection",
    description: "NextJS, Server Actions, Framer Motions ",
    image: "/images/projects/anime.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Wilson-Gip/AnimeCollection",
    previewUrl: "https://anime-collection-wine.vercel.app/",
  },
  {
    id: 5,
    title: "To-do List",
    description: "Simple To-do List to learn React components, hooks, states",
    image: "/images/projects/todo.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Wilson-Gip/to-do-list-app",
    previewUrl: "https://to-do-list-app-seven-sigma.vercel.app/",
  },
  {
    id: 6,
    title: "Sprout - 2D Platformer",
    description: "Producer and Project Lead of VGDC Unity Project",
    image: "/images/projects/sprout.png",
    tag: ["All", "Games"],
    gitUrl: "/",
    previewUrl: "https://rmf-andyplayz.itch.io/sprout",
  },
  {
    id: 7,
    title: "Kitchen Nightmares",
    description: "Simple Unity Overcooked Clone",
    image: "/images/projects/kitchen.png",
    tag: ["All", "Games"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 8,
    title: "Music Poster",
    description: "HCI Design Assignment",
    image: "/images/projects/poster.png",
    tag: ["All", "Design"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 9,
    title: "Twitch Schedule",
    description: "Designed twitch schedule with Canva",
    image: "/images/projects/schedule.png",
    tag: ["All", "Design"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 10,
    title: "Twitch BRB Screen",
    description: "Designed be right back screen with Canva",
    image: "/images/projects/brbscreen.png",
    tag: ["All", "Design"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 11,
    title: "Twitch Offline Screen",
    description: "Designed offline line screen with Canva",
    image: "/images/projects/offline.png",
    tag: ["All", "Design"],
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
          name="Web"
          onClick={handleTagChange}
          isSelected={tag == "Web"}
        />
        <ProjectTag
          name="Games"
          onClick={handleTagChange}
          isSelected={tag === "Games"}
        />
        <ProjectTag
          name="Design"
          onClick={handleTagChange}
          isSelected={tag == "Design"}
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