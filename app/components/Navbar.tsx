"use client"

import { useState, useEffect, MouseEvent } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Phone, Mail, Sun, Moon } from "lucide-react"
import { personalInfo ,navLinks} from "@/lib/data"
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
  const { darkMode, toggleDarkMode } = useTheme()
   const { logCustomEvent } = useAnalytics();

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
            logCustomEvent(id, { section: id })
            if (id) window.history.replaceState(null, "", `#${id}`)
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
    if (isMobile) {
      setIsOpen(false)
      setTimeout(() => scrollToSection(href), 300)
    } else {
      scrollToSection(href)
    }
  }

  // Dynamic classes based on theme
  const navBg = (scrolled || isOpen)
    ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-md"
    : "bg-transparent backdrop-blur-none"

  const logoText = (scrolled || isOpen)
    ? "gradient-text"
    : "text-white"

  const navLinkClass = (scrolled || isOpen)
    ? "text-gray-700 hover:text-blue-600 hover:bg-blue-50 dark:text-gray-300 dark:hover:text-blue-400 dark:hover:bg-gray-800"
    : "text-white/90 hover:text-white hover:bg-white/10"

  const phoneClass = (scrolled || isOpen)
    ? "text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
    : "text-white/80 hover:text-white"

  const mobileBtnClass = (scrolled || isOpen)
    ? "text-gray-700 hover:bg-gray-100 active:bg-gray-200 dark:text-gray-300 dark:hover:bg-gray-800 dark:active:bg-gray-700"
    : "text-white hover:bg-white/10 active:bg-white/20"

  const mobileMenuBg = "bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700"

  const mobileLinkClass = "text-gray-700 hover:text-blue-600 hover:bg-blue-50 dark:text-gray-300 dark:hover:text-blue-400 dark:hover:bg-gray-800"

  const mobileContactClass = "text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          {/* Logo */}
          <motion.a
            href="#home"
            className={`flex items-center gap-2 text-lg sm:text-xl font-bold truncate ${logoText}`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            onClick={(e) => handleNavClick(e, "#home")}
          >
            <img src="/images/logo.png" alt="Logo" className="h-8 w-8 sm:h-9 sm:w-9 object-contain rounded-full" />
            <span>{personalInfo.name}</span>
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${navLinkClass}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.name}
              </motion.a>
            ))}
          </div>

          {/* Right Side: Phone + Theme Toggle */}
          <div className="hidden lg:flex items-center space-x-2">
            <a href={`tel:${personalInfo.phone}`} className={`flex items-center gap-1 transition-colors text-sm ${phoneClass}`}>
              <Phone size={14} />
              <span>{personalInfo.phone}</span>
            </a>
            <ThemeToggleButton darkMode={darkMode} toggleDarkMode={toggleDarkMode} scrolled={scrolled} isOpen={isOpen} />
          </div>

          {/* Mobile: Theme Toggle + Menu Button */}
          <div className="flex items-center gap-1 md:flex lg:hidden">
            <div className="md:hidden">
              <ThemeToggleButton darkMode={darkMode} toggleDarkMode={toggleDarkMode} scrolled={scrolled} isOpen={isOpen} />
            </div>
            <div className="hidden md:flex lg:hidden">
              <ThemeToggleButton darkMode={darkMode} toggleDarkMode={toggleDarkMode} scrolled={scrolled} isOpen={isOpen} />
            </div>
            <button className={`md:hidden p-2 rounded-md transition-colors ${mobileBtnClass}`} onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
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
            className={`md:hidden border-t shadow-lg overflow-hidden ${mobileMenuBg}`}
          >
            <div className="px-4 py-3 space-y-1 max-h-[70vh] overflow-y-auto">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className={`block px-3 py-3 text-base font-medium rounded-md transition-colors ${mobileLinkClass}`} onClick={(e) => handleNavClick(e, link.href, true)}>
                  {link.name}
                </a>
              ))}
              <div className={`pt-3 border-t space-y-2 mt-2 dark:border-gray-700`}>
                <a href={`tel:${personalInfo.phone}`} className={`flex items-center gap-2 px-3 py-2 text-sm transition-colors ${mobileContactClass}`}>
                  <Phone size={16} />{personalInfo.phone}
                </a>
                <a href={`mailto:${personalInfo.email}`} className={`flex items-center gap-2 px-3 py-2 text-sm transition-colors ${mobileContactClass}`}>
                  <Mail size={16} />{personalInfo.email}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

// Theme Toggle Button Component
function ThemeToggleButton({ darkMode, toggleDarkMode, scrolled, isOpen }: { darkMode: boolean; toggleDarkMode: () => void; scrolled: boolean; isOpen: boolean }) {
  const btnClass = (scrolled || isOpen)
    ? "text-gray-600 hover:text-yellow-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-yellow-400 dark:hover:bg-gray-800"
    : "text-white/80 hover:text-yellow-300 hover:bg-white/10"

  return (
    <button onClick={toggleDarkMode} className={`p-2 rounded-lg transition-all duration-300 ${btnClass}`} aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"} title={darkMode ? "Light Mode" : "Dark Mode"}>
      <AnimatePresence mode="wait">
        {!darkMode ? (
          <motion.div key="sun" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
            <Sun size={18} />
          </motion.div>
        ) : (
          <motion.div key="moon" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
            <Moon size={18} />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  )
}