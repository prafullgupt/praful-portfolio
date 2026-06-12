"use client"

import { useState, useEffect, MouseEvent } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Phone, Mail } from "lucide-react"
import { personalInfo } from "@/lib/data"

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
]

// Reusable scroll function
const scrollToSection = (href: string, callback?: () => void): void => {
  const element = document.querySelector(href);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
  if (callback) callback();
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, href: string, isMobile = false) => {
    e.preventDefault();
    if (isMobile) {
      setIsOpen(false);
      setTimeout(() => scrollToSection(href), 300);
    } else {
      scrollToSection(href);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-md shadow-md" : "bg-transparent backdrop-blur-none"
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">

          {/* Logo / Name */}
          <motion.a
            href="#home"
            className={`flex items-center gap-2 text-lg sm:text-xl font-bold truncate ${scrolled ? "gradient-text" : "text-white"
              }`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            onClick={(e) => handleNavClick(e, "#home")}
          >
            <img
              src="/images/logo.png"          
              alt="Logo"
              className="h-8 w-8 sm:h-9 sm:w-9 object-contain rounded-full"  
            />
            <span>{personalInfo.name}</span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${scrolled
                    ? "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                    : "text-white hover:text-white hover:bg-white/20"
                  }`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.name}
              </motion.a>
            ))}
          </div>

          {/* Phone Number - Desktop */}
          <div className="hidden lg:flex items-center space-x-4 text-sm">
            <a
              href={`tel:${personalInfo.phone}`}
              className={`flex items-center gap-1 transition-colors ${scrolled ? "text-gray-600 hover:text-blue-600" : "text-white hover:text-white/80"
                }`}
            >
              <Phone size={14} />
              <span>{personalInfo.phone}</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 rounded-md transition-colors ${scrolled
                ? "text-gray-700 hover:bg-gray-100 active:bg-gray-200"
                : "text-white hover:bg-white/20 active:bg-white/30"
              }`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-gray-200 shadow-lg overflow-hidden"
          >
            <div className="px-4 py-3 space-y-1 max-h-[70vh] overflow-y-auto">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
                  onClick={(e) => handleNavClick(e, link.href, true)}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-3 border-t border-gray-200 space-y-2 mt-2">
                <a href={`tel:${personalInfo.phone}`} className="flex items-center gap-2 px-3 py-2 text-sm text-gray-600 hover:text-blue-600">
                  <Phone size={16} />
                  {personalInfo.phone}
                </a>
                <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-2 px-3 py-2 text-sm text-gray-600 hover:text-blue-600">
                  <Mail size={16} />
                  {personalInfo.email}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}