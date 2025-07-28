"use client";

import { motion } from "framer-motion";
import ContactForm from "./ContactForm";
import { containerVariants } from "@/lib/framerVariants";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function Contact() {
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
    <motion.section
      id="contact"
      className={`mx-auto px-4 py-20 ${sectionBg}`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-indigo-600 dark:text-indigo-400">
        Contact Me
      </h2>
      <p className="text-center text-gray-600 dark:text-gray-300 mb-8">
        Let&apos;s connect! Whether you have a question or just want to say hi,
        my inbox is always open.
      </p>

      <ContactForm />
    </motion.section>
  );
}
