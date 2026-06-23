"use client"

import { useState, useEffect, MouseEvent } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Phone, Mail, Sun, Moon, Github, Linkedin, FileText } from "lucide-react"
import { personalInfo, navLinks } from "@/lib/data"
import { useTheme } from "@/app/context/ThemeContext"
import { useAnalytics } from '../hooks/useAnalytics';

const scrollToSection = (href: string, callback?: () => void): void => {
  const element = document.querySelector(href)
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" })
    window.history.replaceState(null, "", href)
  }
  if (callback) callback()
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const { darkMode, toggleDarkMode } = useTheme()
  const { logCustomEvent } = useAnalytics();

  // Helper: true only when light mode + scrolled
  const isLightScrolled = !darkMode && scrolled

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]")
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id")
            if (id) {
              setActiveSection(id)
              logCustomEvent(id, { section: id })
              window.history.replaceState(null, "", `#${id}`)
            }
          }
        })
      },
      { threshold: 0.2 }
    )
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, href: string, isMobile = false) => {
    e.preventDefault()
    const sectionId = href.replace("#", "")
    setActiveSection(sectionId)
    if (isMobile) {
      setIsOpen(false)
      setTimeout(() => scrollToSection(href), 300)
    } else {
      scrollToSection(href)
    }
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
      ? (darkMode)
        ? "bg-gray-900/80 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/20"
        : "bg-white backdrop-blur-xl border-b border-gray-200/50 shadow-lg shadow-gray-200/50"
      : !isOpen ? "bg-transparent" : 'bg-gray-900/95 backdrop-blur-xl border-b border-gray-200/50 shadow-lg shadow-gray-200/50'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-18">

          {/* Left: Logo + Social Icons */}
          <div className="flex items-center gap-4 sm:gap-6">
            {/* Logo */}
            <motion.a
              href="#home"
              className="flex items-center gap-2 text-xl sm:text-2xl font-bold"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              onClick={(e) => handleNavClick(e, "#home")}
            >
              <span className={`bg-gradient-to-r ${isLightScrolled
                ? "from-blue-600 via-purple-600 to-pink-600"
                : "from-blue-400 via-purple-400 to-pink-400"} bg-clip-text text-transparent transition-all duration-500`}>
                {personalInfo.name}
              </span>
            </motion.a>

            {/* Social Icons */}
            <div className="hidden md:flex items-center gap-1">
              <SocialIcon href="https://github.com/prafullgupt/" icon={<Github size={18} />} label="GitHub" isLightScrolled={isLightScrolled} />
              <SocialIcon href="https://www.linkedin.com/in/prafull-gupta-958633169/" icon={<Linkedin size={18} />} label="LinkedIn" isLightScrolled={isLightScrolled} />
              {/* <SocialIcon href="#" icon={<FileText size={18} />} label="Resume" isLightScrolled={isLightScrolled} /> */}
            </div>
          </div>

          {/* Right: Pill Navigation Menu */}
          <div className="hidden lg:flex items-center gap-3">
            <motion.div
              className={`flex items-center backdrop-blur-md border rounded-full px-2 py-1.5 transition-all duration-500 ${isLightScrolled
                ? "bg-gray-100/80 border-gray-200/50"
                : "bg-white/5 border-white/10"
                }`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {navLinks.map((link, index) => {
                const sectionId = link.href.replace("#", "")
                const isActive = activeSection === sectionId
                return (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${isActive
                      ? isLightScrolled ? "text-gray-900" : "text-white"
                      : isLightScrolled ? "text-gray-500 hover:text-gray-900" : "text-gray-400 hover:text-white"
                      }`}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeNavPill"
                        className={`absolute inset-0 rounded-full border transition-all duration-500 ${isLightScrolled
                          ? "bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-blue-400/30"
                          : "bg-gradient-to-r from-blue-500/30 to-purple-500/30 border-blue-400/30"
                          }`}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{link.name}</span>
                  </motion.a>
                )
              })}
            </motion.div>

            {/* Theme Toggle */}
            <ThemeToggleButton darkMode={darkMode} toggleDarkMode={toggleDarkMode} isLightScrolled={isLightScrolled} />
          </div>

          {/* Mobile: Theme Toggle + Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggleButton darkMode={darkMode} toggleDarkMode={toggleDarkMode} isLightScrolled={isLightScrolled} />
            <button
              className={`p-2 rounded-lg transition-colors ${isLightScrolled
                ? "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                : "text-gray-300 hover:text-white hover:bg-white/10"
                }`}
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
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
            className={`lg:hidden backdrop-blur-xl border-t shadow-lg overflow-hidden ${isLightScrolled
              ? "bg-white/95 border-gray-200/50"
              : "bg-gray-900/95 border-white/10"
              }`}
          >
            <div className="px-4 py-4 space-y-1 max-h-[70vh] overflow-y-auto">
              {navLinks.map((link) => {
                const sectionId = link.href.replace("#", "")
                const isActive = activeSection === sectionId
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`block px-4 py-3 text-base font-medium rounded-xl transition-all ${isActive
                      ? isLightScrolled ? "text-gray-900 bg-gray-100" : "text-white bg-white/10"
                      : isLightScrolled ? "text-gray-600 hover:text-gray-900 hover:bg-gray-50" : "text-gray-400 hover:text-white hover:bg-white/5"
                      }`}
                    onClick={(e) => handleNavClick(e, link.href, true)}
                  >
                    {link.name}
                  </a>
                )
              })}

              {/* Mobile Social & Contact */}
              <div className={`pt-4 mt-4 border-t space-y-3 ${isLightScrolled ? "border-gray-200/50" : "border-white/10"}`}>
                <div className="flex items-center gap-3 px-4">
                  <a href={`tel:${personalInfo.phone}`} className={`flex items-center gap-2 transition-colors text-sm ${isLightScrolled ? "text-gray-500 hover:text-gray-900" : "text-gray-400 hover:text-white"}`}>
                    <Phone size={16} /> {personalInfo.phone}
                  </a>
                </div>
                <div className="flex items-center gap-3 px-4">
                  <a href={`mailto:${personalInfo.email}`} className={`flex items-center gap-2 transition-colors text-sm ${isLightScrolled ? "text-gray-500 hover:text-gray-900" : "text-gray-400 hover:text-white"}`}>
                    <Mail size={16} /> {personalInfo.email}
                  </a>
                </div>
                <div className="flex items-center gap-2 px-4 pt-2">
                  <SocialIcon href="https://github.com" icon={<Github size={18} />} label="GitHub" isLightScrolled={isLightScrolled} />
                  <SocialIcon href="https://linkedin.com" icon={<Linkedin size={18} />} label="LinkedIn" isLightScrolled={isLightScrolled} />
                  <SocialIcon href="#" icon={<FileText size={18} />} label="Resume" isLightScrolled={isLightScrolled} />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

// Social Icon Component
function SocialIcon({ href, icon, label, isLightScrolled }: { href: string; icon: React.ReactNode; label: string; isLightScrolled: boolean }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`p-2 rounded-lg transition-all duration-300 ${isLightScrolled
        ? "text-gray-500 hover:text-gray-900 hover:bg-gray-100"
        : "text-gray-400 hover:text-white hover:bg-white/10"
        }`}
      whileHover={{ scale: 1.1, y: -2 }}
      whileTap={{ scale: 0.95 }}
      aria-label={label}
      title={label}
    >
      {icon}
    </motion.a>
  )
}

// Theme Toggle Button Component
function ThemeToggleButton({ darkMode, toggleDarkMode, isLightScrolled }: { darkMode: boolean; toggleDarkMode: () => void; isLightScrolled: boolean }) {
  return (
    <motion.button
      onClick={toggleDarkMode}
      className={`p-2.5 rounded-full transition-all duration-300 ${isLightScrolled
        ? "text-gray-500 hover:text-gray-900 hover:bg-gray-100"
        : "text-gray-400 hover:text-white hover:bg-white/10"
        }`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
      title={darkMode ? "Light Mode" : "Dark Mode"}
    >
      <AnimatePresence mode="wait">
        {!darkMode ? (
          <motion.div
            key="sun"
            initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.3 }}
          >
            <Sun size={18} />
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            initial={{ rotate: 90, opacity: 0, scale: 0.5 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Moon size={18} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  )
}