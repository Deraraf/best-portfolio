"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  loopFadeVariant,
  loopImageVariant,
  LoopButtonVariant,
} from "@/lib/framerVariants";
import image from "@/public/profile.jpg";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useTheme } from "next-themes";

const Hero = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const sectionBg = !mounted
    ? "bg-white"
    : resolvedTheme === "dark"
    ? ""
    : "bg-gradient-to-br from-blue-50 to-indigo-100 text-gray-800";

  return (
    <section
      className={`mx-auto py-24 px-4 md:px-8 flex flex-col-reverse md:flex-row items-center justify-around gap-12 ${sectionBg}`}
    >
      <div className="text-center md:text-left max-w-xl space-y-6">
        <motion.h1
          className="text-4xl md:text-6xl font-bold"
          variants={loopFadeVariant}
          animate="animate"
        >
          Hi, I&apos;m{" "}
          <span className="text-indigo-600 dark:text-indigo-400">Derara</span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-gray-800 dark:text-gray-300"
          variants={loopFadeVariant}
          animate="animate"
        >
          A passionate Full-Stack Developer crafting clean and modern web
          experiences with Next.js, TailwindCSS, and Framer Motion.
        </motion.p>

        <motion.div
          className="mt-8"
          variants={LoopButtonVariant}
          animate="animate"
        >
          <Button
            asChild
            size="lg"
            className="bg-indigo-600 dark:bg-indigo-500 hover:bg-indigo-700 dark:hover:bg-indigo-600"
          >
            <a href="#projects" className="text-white">
              View My Work
            </a>
          </Button>
        </motion.div>
      </div>

      <motion.div
        variants={loopImageVariant}
        animate="animate"
        className="rounded-full overflow-hidden shadow-lg"
      >
        <Image
          src={image}
          alt="Derara's profile"
          width={200}
          height={200}
          priority
          className="rounded-full w-auto h-auto"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
