"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { aboutMeVariants } from "@/lib/framerVariants";
import descriptions from "@/app/data/aboutMeDescription";
import { useTheme } from "next-themes";

const transitionDuration = 4000;

const About = () => {
  const { resolvedTheme } = useTheme();
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [mounted, setMounted] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        setIndex((prev) => (prev + 1) % descriptions.length);
      }, transitionDuration);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused]);

  // Avoid hydration mismatch by delaying theme-dependent class
  const sectionBg = !mounted
    ? "bg-white" // fallback before client renders
    : resolvedTheme === "dark"
    ? "bg-gray-900"
    : "bg-gradient-to-br from-blue-50 to-indigo-100 text-gray-800";

  return (
    <section
      id="about"
      className={`py-16 px-4 md:px-12 text-gray-800 dark:bg-gray-900 ${sectionBg}`}
    >
      <motion.div
        className="max-w-4xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={aboutMeVariants.container}
      >
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-8 text-indigo-600 dark:text-indigo-400"
          variants={aboutMeVariants.item}
        >
          About Me
        </motion.h2>

        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <Card className="bg-indigo-50 dark:bg-gray-800/50 shadow-lg backdrop-blur border dark:border-gray-700">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold text-indigo-700 dark:text-indigo-300 mb-2">
                  {descriptions[index].title}
                </h3>
                <p className="text-lg text-gray-800 dark:text-gray-200 leading-relaxed">
                  {descriptions[index].content}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default About;
