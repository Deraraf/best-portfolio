"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { projectsVariants } from "@/lib/framerVariants";
import projects from "@/app/data/projects";
import ProjectCard from "./ProjectCard";
import { useTheme } from "next-themes";

const Projects = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const sectionBg = !mounted
    ? "bg-white"
    : resolvedTheme === "dark"
    ? "bg-gray-900 text-gray-200"
    : "bg-gradient-to-br from-blue-50 to-indigo-100 text-gray-800";

  return (
    <section id="projects" className={`py-16 px-4 md:px-12 ${sectionBg}`}>
      <motion.div
        className="max-w-5xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={projectsVariants.container}
      >
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-indigo-600 dark:text-indigo-400"
          variants={projectsVariants.item}
        >
          Projects
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
