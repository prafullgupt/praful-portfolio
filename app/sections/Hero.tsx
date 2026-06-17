"use client"

import { motion } from "framer-motion"
import { Download, Github, Linkedin, Mail, Phone, MapPin, ChevronDown } from "lucide-react"
import { experienceStartYear, personalInfo } from "@/lib/data"
import Image from "next/image"
import { useTheme } from "../context/ThemeContext"

export default function Hero() {
  const { darkMode } = useTheme();
  
  return (
    <section id="home" className={`min-h-screen flex items-center justify-center relative overflow-hidden pt-16 transition-colors duration-300 ${darkMode ? "bg-gradient-to-br dark:bg-gray-900" : "bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900"}`}>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 relative z-10">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left order-2 lg:order-1"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 bg-blue-500/20 border border-blue-400/30 rounded-full text-blue-300 text-sm font-medium mb-4 sm:mb-6"
            >
              👋 Welcome to my Portfolio
            </motion.div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4">
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {personalInfo.name}
              </span>
            </h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg sm:text-xl md:text-2xl text-blue-300 font-semibold mb-4 sm:mb-6"
            >
              {personalInfo.title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-gray-300 text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0"
            >
              {personalInfo.tagline}. Passionate about creating innovative mobile and web applications
              with cutting-edge technologies including React Native, Next.js, and AI integration.
            </motion.p>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mb-6 sm:mb-8 justify-center lg:justify-start"
            >
              <a href={`tel:${personalInfo.phone}`} className="flex items-center justify-center lg:justify-start gap-2 text-gray-300 hover:text-white transition-colors text-sm sm:text-base">
                <Phone size={16} className="text-blue-400 flex-shrink-0" />
                <span>{personalInfo.phone}</span>
              </a>
              <a href={`mailto:${personalInfo.email}`} className="flex items-center justify-center lg:justify-start gap-2 text-gray-300 hover:text-white transition-colors text-sm sm:text-base">
                <Mail size={16} className="text-blue-400 flex-shrink-0" />
                <span className="truncate">{personalInfo.email}</span>
              </a>
              <div className="hidden sm:flex items-center gap-2 text-gray-300 text-sm sm:text-base">
                <MapPin size={16} className="text-blue-400 flex-shrink-0" />
                <span>Meerut, UP, India</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
            >
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all hover:scale-105 text-sm sm:text-base"
              >
                <Mail size={18} />
                Hire Me
              </a>
              <a
                href="/resume/Praful_Gupta_Resume.pdf"
                download
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg border border-white/20 transition-all hover:scale-105 text-sm sm:text-base"
              >
                <Download size={18} />
                Download Resume
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex gap-3 sm:gap-4 mt-6 sm:mt-8 justify-center lg:justify-start"
            >
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="p-2.5 sm:p-3 bg-white/10 hover:bg-blue-600 rounded-full text-white transition-all hover:scale-110" aria-label="LinkedIn">
                <Linkedin size={18} className="sm:w-5 sm:h-5" />
              </a>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="p-2.5 sm:p-3 bg-white/10 hover:bg-gray-700 rounded-full text-white transition-all hover:scale-110" aria-label="GitHub">
                <Github size={18} className="sm:w-5 sm:h-5" />
              </a>
              <a href={`mailto:${personalInfo.email}`} className="p-2.5 sm:p-3 bg-white/10 hover:bg-red-500 rounded-full text-white transition-all hover:scale-110" aria-label="Email">
                <Mail size={18} className="sm:w-5 sm:h-5" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center order-1 lg:order-2"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 blur-2xl opacity-30 animate-pulse" />
              <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
                <Image src="/images/profile.png" alt={personalInfo.name} fill className="object-cover" priority sizes="(max-width: 640px) 224px, (max-width: 768px) 288px, (max-width: 1024px) 320px, 384px" />
              </div>
              <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 3, repeat: Infinity }} className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 bg-blue-600 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold shadow-lg">
                {new Date().getFullYear() - experienceStartYear}+ Years
              </motion.div>
              <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 3, repeat: Infinity, delay: 1 }} className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 bg-purple-600 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold shadow-lg">
                Team Leader
              </motion.div>

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                className="absolute -top-2 -left-2 sm:-top-4 sm:-left-4 bg-green-600 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold shadow-lg"
              >
                React Native
              </motion.div>
              <motion.div
                animate={{ x: [0, 8, 0] }}
                transition={{ duration: 2.8, repeat: Infinity, delay: 1.2 }}
                className="absolute top-1/2 -right-2 sm:-right-6 -translate-y-1/2 bg-sky-500 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold shadow-lg"
              >
                IOS
              </motion.div>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2.6, repeat: Infinity, delay: 1.5 }}
                className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 bg-gray-800 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold shadow-lg"
              >
                React JS
              </motion.div>

              {/* Left Side: React Native */}
              <motion.div
                animate={{ x: [0, -8, 0] }}
                transition={{ duration: 2.7, repeat: Infinity, delay: 0.8 }}
                className="absolute top-1/2 -left-2 sm:-left-6 -translate-y-1/2 bg-cyan-600 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold shadow-lg"
              >
                Android
              </motion.div>

              {/* Bottom Center: NodeJS */}
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 2.4, repeat: Infinity, delay: 2 }}
                className="absolute -bottom-6 sm:-bottom-8 left-1/2 -translate-x-1/2 bg-emerald-700 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold shadow-lg"
              >
                NodeJS
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }} className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2">
        <a href="#about" className="text-white/50 hover:text-white transition-colors">
          <ChevronDown size={28} className="sm:w-8 sm:h-8" />
        </a>
      </motion.div>
    </section>
  )
}
