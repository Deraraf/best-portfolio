"use client";

import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { useState } from "react";
import { navLinks } from "@/app/data/navLinks";
import { motion } from "framer-motion";
import { navVariants } from "@/lib/framerVariants";
import Link from "next/link";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 dark:bg-gray-900/70 transition-colors duration-500 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <div className="text-xl font-bold text-indigo-600 dark:text-indigo-400">
          Derara.dev
        </div>

        <nav className="hidden md:flex space-x-6 text-sm font-medium">
          {navLinks.map(({ href, label }) => (
            <motion.a
              key={href}
              href={href}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              variants={navVariants}
              className="hover:text-indigo-600 transition-colors"
            >
              {label}
            </motion.a>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <div className="md:hidden">
            <Button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              variant="ghost"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden fixed top-17 left-0 w-full px-6 py-20 space-y-4 text-sm font-medium shadow-lg z-40 text-black dark:text-white bg-white/90 dark:bg-gray-900/90 backdrop-blur">
          <Link
            href="#skills"
            className="block hover:text-indigo-600 transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Skills
          </Link>
          <a
            href="#projects"
            className="block hover:text-indigo-600 transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Projects
          </a>
          <a
            href="#contact"
            className="block hover:text-indigo-600 transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
