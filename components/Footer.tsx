"use client";

import React, { useEffect, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import ContactFormModal from "./ContactFormModal";
import { useTheme } from "next-themes";

function Footer() {
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
    <footer
      className={`mt-5 border-t pt-8 pb-4 text-center text-sm ${sectionBg}`}
    >
      <div className="flex justify-center gap-6 mb-4">
        <ContactFormModal />

        <a
          href="https://github.com/deraraf"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="hover:text-indigo-600 transition-colors"
        >
          <FaGithub className="w-5 h-5" />
        </a>

        <a
          href="https://www.linkedin.com/in/derara-geremu-230807242"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:text-indigo-600 transition-colors"
        >
          <FaLinkedin className="w-5 h-5" />
        </a>
      </div>

      <p>
        &copy; {new Date().getFullYear()} Derara Geremu. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
