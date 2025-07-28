"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { skillsVariants } from "@/lib/framerVariants";
import { Badge } from "@/components/ui/badge";
import skills from "@/app/data/skills";
import { useTheme } from "next-themes";

const Skills = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const sectionBg = !mounted
    ? "bg-white" // fallback to ensure consistent server & client HTML
    : resolvedTheme === "dark"
    ? ""
    : "bg-gradient-to-br from-blue-50 to-indigo-100 text-gray-800";

  return (
    <section id="skills" className={`py-16 px-4 md:px-12 ${sectionBg}`}>
      <motion.div
        className="max-w-4xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={skillsVariants.container}
      >
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-8 text-indigo-600 dark:text-indigo-400"
          variants={skillsVariants.item}
        >
          Skills
        </motion.h2>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-4 items-center"
          variants={skillsVariants.container}
        >
          {skills.map((skill, index) => (
            <motion.div key={index} variants={skillsVariants.item}>
              <Badge
                variant="secondary"
                className="text-md px-4 py-2 bg-indigo-100 dark:bg-gray-800 dark:text-white hover:bg-indigo-200 transition-all"
              >
                {skill}
              </Badge>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;
