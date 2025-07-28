import React from "react";
import { motion } from "framer-motion";
import { projectsVariants } from "@/lib/framerVariants";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

type Project = {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo: string;
};

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <motion.div variants={projectsVariants.item}>
      <Card className="bg-gray-50 dark:bg-gray-800 border-none shadow-md hover:shadow-xl transition-shadow duration-300">
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((tech, i) => (
              <span
                key={i}
                className="bg-indigo-100 dark:bg-gray-700 text-sm px-2 py-1 rounded"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex space-x-3">
            <Button variant="outline" asChild>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-4 h-4 mr-1" /> GitHub
              </a>
            </Button>
            <Button asChild>
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-1" /> Live Demo
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
