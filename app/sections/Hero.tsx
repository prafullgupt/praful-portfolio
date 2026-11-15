"use client"

import React, { useRef, useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Download, 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  ChevronDown, 
  Sparkles, 
  Smartphone, 
  Zap, 
  ShieldCheck, 
  Award, 
  ArrowRight, 
  MessageCircle, 
  Cpu, 
  ExternalLink,
  Code2,
  CheckCircle2,
  Compass
} from "lucide-react"
import { experienceStartYear, personalInfo } from "@/lib/data"
import Image from "next/image"
import { useTheme } from "../context/ThemeContext"
import { AnimatedNameWave } from "../components/AnimatedName"

// Interactive 3D Physics Tilt Wrapper with Specular Glare
function Hero3DTiltCard({
  children,
  className = "",
  glowColor = "rgba(59, 130, 246, 0.3)"
}: {
  children: React.ReactNode
  className?: string
  glowColor?: string
}) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2

    // Smooth physics-based 3D tilt
    const rotX = -((y - centerY) / centerY) * 12
    const rotY = ((x - centerX) / centerX) * 12

    setRotateX(rotX)
    setRotateY(rotY)
    setGlare({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.28
    })
  }

  const handleMouseLeave = () => {
    setRotateX(0)
    setRotateY(0)
    setGlare(prev => ({ ...prev, opacity: 0 }))
  }

  return (
    <div
      style={{ perspective: 1200 }}
      className="w-full flex items-center justify-center"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={cardRef}
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          transformStyle: "preserve-3d",
          transition: "transform 0.25s cubic-bezier(0.2, 0.8, 0.2, 1)"
        }}
        className={`relative ${className}`}
      >
        {/* Specular Glare Highlight */}
        <div
          className="pointer-events-none absolute inset-0 rounded-3xl transition-opacity duration-300 z-50"
          style={{
            background: `radial-gradient(circle 320px at ${glare.x}% ${glare.y}%, rgba(255,255,255,${glare.opacity}), transparent 75%)`,
            mixBlendMode: "overlay"
          }}
        />
        {/* Dynamic Glow Aura */}
        <div 
          className="pointer-events-none absolute -inset-4 rounded-3xl blur-2xl transition-opacity duration-300 opacity-60 z-0"
          style={{
            background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, ${glowColor}, transparent 70%)`
          }}
        />
        <div className="relative z-10 w-full" style={{ transform: "translateZ(30px)" }}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default function Hero() {
  const { darkMode } = useTheme()
  const yearsExperience = new Date().getFullYear() - experienceStartYear

  // Mouse parallax state for background atmosphere
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  const handleGlobalMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const { clientX, clientY, currentTarget } = e
    const rect = currentTarget.getBoundingClientRect()
    const x = ((clientX - rect.left) / rect.width - 0.5) * 20
    const y = ((clientY - rect.top) / rect.height - 0.5) * 20
    setMousePos({ x, y })
  }

  return (
    <section
      id="home"
      onMouseMove={handleGlobalMouseMove}
      className={`min-h-screen flex flex-col justify-center relative overflow-hidden pt-24 pb-16 transition-colors duration-500 ${
        darkMode 
          ? "bg-[#080d1a] text-white" 
          : "bg-gradient-to-br from-slate-50 via-blue-50/40 to-indigo-50/50 text-slate-900"
      }`}
    >
      {/* =========================================================================
          BACKGROUND 3D ENVIRONMENT: Cyber Grid & Floating Radiant Energy Orbs
          ========================================================================= */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* 3D Perspective Floor Grid */}
        <div 
          className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[180%] h-[450px] opacity-[0.14] dark:opacity-[0.22]"
          style={{
            backgroundImage: darkMode
              ? `linear-gradient(to right, #38bdf8 1px, transparent 1px), linear-gradient(to bottom, #38bdf8 1px, transparent 1px)`
              : `linear-gradient(to right, #6366f1 1px, transparent 1px), linear-gradient(to bottom, #6366f1 1px, transparent 1px)`,
            backgroundSize: "48px 48px",
            transform: `perspective(600px) rotateX(65deg) translateY(${mousePos.y * 0.5}px)`,
            maskImage: "radial-gradient(ellipse 65% 55% at 50% 100%, black 20%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(ellipse 65% 55% at 50% 100%, black 20%, transparent 100%)"
          }}
        />

        {/* Ambient Floating Luminous Energy Spheres */}
        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, -40, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          style={{
            transform: `translate(${mousePos.x * 0.6}px, ${mousePos.y * 0.6}px)`
          }}
          className="absolute -top-32 -left-20 w-96 h-96 rounded-full bg-gradient-to-br from-cyan-500/20 via-blue-600/15 to-transparent blur-3xl"
        />

        <motion.div
          animate={{
            x: [0, -40, 0],
            y: [0, 30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          style={{
            transform: `translate(${mousePos.x * -0.6}px, ${mousePos.y * -0.6}px)`
          }}
          className="absolute top-1/3 -right-24 w-[420px] h-[420px] rounded-full bg-gradient-to-br from-purple-500/15 via-indigo-600/15 to-transparent blur-3xl"
        />

        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.15, 0.25, 0.15]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 left-1/3 w-80 h-80 rounded-full bg-gradient-to-tr from-emerald-500/15 via-teal-600/10 to-transparent blur-3xl"
        />
      </div>

      {/* =========================================================================
          MAIN CONTAINER: 2-Column Responsive Layout
          ========================================================================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* -------------------------------------------------------------------
              LEFT COLUMN (lg:col-span-7): Executive Brand, Narrative & 3D Launchpad
              ------------------------------------------------------------------- */}
          <div className="lg:col-span-7 flex flex-col text-center lg:text-left order-2 lg:order-1 items-center lg:items-start w-full">
            {/* Live Availability Radar Pill */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border mb-6 shadow-sm backdrop-blur-md transition-all duration-300 bg-white/70 dark:bg-slate-900/80 border-emerald-500/30 text-emerald-700 dark:text-emerald-400"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="text-xs sm:text-sm font-semibold tracking-wide uppercase">
                Available for Contract & Leadership
              </span>
              <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-emerald-500/50" />
              <span className="hidden sm:inline-block text-xs font-mono opacity-80">
                Fast Response
              </span>
            </motion.div>

            {/* Main Hero Headline */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4 leading-tight">
              <span className="block text-slate-800 dark:text-slate-100">
                Hi, I'm
              </span>
              <span className="inline-block mt-1">
                <AnimatedNameWave name={personalInfo.name} />
              </span>
              {/* Semantic indexing for Google & Screen Readers */}
              <span className="sr-only" lang="hi">
                प्रफुल गुप्ता (Praful Gupta) - सीनियर मोबाइल और वेब एप्लिकेशन डेवलपर | React Native, Android, Next.js स्पेशलिस्ट
              </span>
            </h1>

            {/* Subtitle & Role Badges */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-2.5 mb-6"
            >
              <span className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-cyan-400 dark:via-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
                Team Leader
              </span>
              <span className="text-slate-400 dark:text-slate-600 font-light text-xl">•</span>
              <span className="text-base sm:text-xl font-semibold text-slate-700 dark:text-slate-200">
                Senior Mobile & Web Architect
              </span>
            </motion.div>

            {/* Key Engineering Pillars Chips */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-6"
            >
              <span className="px-3 py-1 rounded-lg text-xs font-semibold bg-blue-500/10 text-blue-700 dark:text-blue-300 border border-blue-500/20 flex items-center gap-1.5 shadow-sm">
                <Smartphone className="w-3.5 h-3.5 text-blue-500" />
                React Native & Native
              </span>
              <span className="px-3 py-1 rounded-lg text-xs font-semibold bg-purple-500/10 text-purple-700 dark:text-purple-300 border border-purple-500/20 flex items-center gap-1.5 shadow-sm">
                <Zap className="w-3.5 h-3.5 text-purple-500" />
                Next.js 15 Web Platform
              </span>
              <span className="px-3 py-1 rounded-lg text-xs font-semibold bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20 flex items-center gap-1.5 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-emerald-500" />
                Multimodal AI Integration
              </span>
              <span className="px-3 py-1 rounded-lg text-xs font-semibold bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-500/20 flex items-center gap-1.5 shadow-sm">
                <Award className="w-3.5 h-3.5 text-amber-500" />
                World Record Honoree
              </span>
            </motion.div>

            {/* Elevator Value Statement - Static Render for Instant LCP & 100% Core Web Vitals */}
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg mb-8 leading-relaxed max-w-2xl text-center lg:text-left">
              Building scalable, high-velocity mobile products and enterprise web ecosystems with <span className="font-semibold text-slate-900 dark:text-white">8+ years of production excellence</span>. Proven track record leading multidisciplinary teams at <span className="text-blue-600 dark:text-blue-400 font-medium">Harshit Infosolutions</span>, architecting 60fps native apps with zero-rejection store approvals, and fusing cutting-edge AI vision engines into seamless user journeys.
            </p>

            {/* 3D Interactive Launchpad Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-3.5 w-full sm:w-auto justify-center lg:justify-start mb-8"
            >
              {/* Primary: View Flagship Work */}
              <a
                href="#projects"
                className="group relative inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-bold text-white text-sm sm:text-base shadow-xl shadow-blue-500/20 hover:shadow-blue-500/35 transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                <span className="relative z-10 flex items-center gap-2">
                  Explore Featured Work
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </a>

              {/* Secondary: Initiate Discussion */}
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-sm sm:text-base transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] border backdrop-blur-md bg-white/80 dark:bg-slate-900/80 border-slate-300/80 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-400 text-slate-800 dark:text-slate-200 shadow-sm hover:shadow-md"
              >
                <MessageCircle className="w-4 h-4 text-blue-500" />
                Schedule a Discussion
              </a>

              {/* Tertiary: Download Resume */}
              <a
                href="/resume/Praful_Gupta_Resume.pdf"
                download
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-xs sm:text-sm transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] border border-dashed border-slate-300 dark:border-slate-700 hover:border-cyan-500 dark:hover:border-cyan-400 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
              >
                <Download className="w-4 h-4 text-cyan-500" />
                Executive CV
              </a>
            </motion.div>

            {/* Direct Channel Connect HUD */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2 border-t border-slate-200/80 dark:border-slate-800/80 w-full"
            >
              <span className="text-xs uppercase tracking-wider font-mono text-slate-400 dark:text-slate-500">
                Direct Channels:
              </span>
              
              <a
                href={`tel:${personalInfo.phone}`}
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                title="Call Directly"
              >
                <Phone className="w-3.5 h-3.5 text-blue-500" />
                <span>{personalInfo.phone}</span>
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                title="Send Email"
              >
                <Mail className="w-3.5 h-3.5 text-blue-500" />
                <span className="hidden sm:inline">{personalInfo.email}</span>
                <span className="sm:hidden">Email</span>
              </a>

              <a
                href={`https://wa.me/917417319939?text=Hi%20Praful%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect!`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-emerald-600 dark:text-emerald-400 hover:underline"
                title="WhatsApp Direct"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-500" />
                <span>WhatsApp</span>
              </a>

              <div className="flex items-center gap-2 ml-auto lg:ml-2">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800/80 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 text-slate-600 dark:text-slate-300 transition-all duration-200 shadow-sm"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-900 hover:text-white dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 transition-all duration-200 shadow-sm"
                >
                  <Github className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* -------------------------------------------------------------------
              RIGHT COLUMN (lg:col-span-5): 3D Cyber-Orbit Reactor & Holographic Core
              ------------------------------------------------------------------- */}
          <div className="lg:col-span-5 flex justify-center items-center order-1 lg:order-2 w-full">
            <Hero3DTiltCard className="max-w-[460px] w-full p-4 sm:p-6" glowColor="rgba(6, 182, 212, 0.35)">
              <div className="relative w-full aspect-square flex items-center justify-center">

                {/* =============================================================
                    ORBITAL RING SYSTEM: Dual Counter-Rotating Hologram Rings
                    ============================================================= */}
                {/* Outer Gyro Orbit Ring */}
                <div className="absolute inset-0 rounded-full border border-dashed border-cyan-400/25 dark:border-cyan-400/35 animate-[spin_32s_linear_infinite] pointer-events-none" />
                
                {/* Inner High-Speed Counter Orbit */}
                <div className="absolute inset-6 rounded-full border border-dotted border-purple-500/30 dark:border-purple-400/30 animate-[spin_22s_linear_infinite_reverse] pointer-events-none" />

                {/* Cardinal HUD Orbit Ticks */}
                <div className="absolute inset-0 pointer-events-none flex items-center justify-between px-1">
                  <span className="w-2 h-2 rounded-full bg-cyan-400/60 shadow-[0_0_8px_#22d3ee]" />
                  <span className="w-2 h-2 rounded-full bg-purple-400/60 shadow-[0_0_8px_#c084fc]" />
                </div>
                <div className="absolute inset-0 pointer-events-none flex flex-col items-center justify-between py-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400/60 shadow-[0_0_8px_#34d399]" />
                  <span className="w-2 h-2 rounded-full bg-blue-400/60 shadow-[0_0_8px_#60a5fa]" />
                </div>

                {/* =============================================================
                    CENTRAL AVATAR CORE: 3D Holographic Portal
                    ============================================================= */}
                <div 
                  className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full p-2 transition-transform duration-300"
                  style={{ transform: "translateZ(50px)" }}
                >
                  {/* Rotating Conic Shimmer Edge */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-500 via-indigo-500 to-purple-500 animate-[spin_8s_linear_infinite] opacity-75 blur-sm" />
                  
                  {/* Glassmorphic Core Container with Semantic Figure for Google Image SEO */}
                  <figure className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/80 dark:border-slate-800 shadow-2xl bg-slate-900">
                    <picture>
                      <source
                        type="image/webp"
                        srcSet="/images/PrafulGupta-320.webp 320w, /images/PrafulGupta-640.webp 640w, /images/PrafulGupta.webp 800w"
                        sizes="(max-width: 640px) 256px, 288px"
                      />
                      <source
                        type="image/png"
                        srcSet="/images/PrafulGupta-320.png 320w, /images/PrafulGupta-640.png 640w, /images/PrafulGupta.png 800w"
                        sizes="(max-width: 640px) 256px, 288px"
                      />
                      <img
                        src="/images/PrafulGupta-320.webp"
                        width={288}
                        height={288}
                        alt="Praful Gupta (प्रफुल गुप्ता) - Senior Application & Web Developer, Team Leader | React Native, Next.js, Android, iOS Specialist"
                        title="Praful Gupta (प्रफुल गुप्ता) - Senior Mobile & Web Developer | Team Leader"
                        fetchPriority="high"
                        loading="eager"
                        decoding="async"
                        className="w-full h-full object-cover scale-105 transition-transform duration-500 hover:scale-110"
                      />
                    </picture>
                    <figcaption className="sr-only">
                      Praful Gupta (प्रफुल गुप्ता) - Senior Application & Web Developer, Team Leader
                    </figcaption>
                    {/* Glass Surface Reflection Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-white/10 pointer-events-none" />
                  </figure>
                </div>

                {/* =============================================================
                    3D FLOATING TECH SATELLITE CHIPS (Positioned with 3D Z-Depth)
                    ============================================================= */}
                
                {/* 1. React Native (Top-Left) */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
                  style={{ transform: "translateZ(75px)" }}
                  className="absolute -top-2 left-2 sm:top-2 sm:-left-2 z-20"
                >
                  <div className="px-3 py-1.5 rounded-xl text-xs sm:text-sm font-bold shadow-lg backdrop-blur-md border flex items-center gap-1.5 transition-transform hover:scale-110 bg-emerald-950/85 text-emerald-300 border-emerald-500/40 shadow-emerald-500/20">
                    <Smartphone className="w-3.5 h-3.5 text-emerald-400" />
                    <span>React Native</span>
                  </div>
                </motion.div>

                {/* 2. Multimodal AI Engine (Top-Center) */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                  style={{ transform: "translateZ(85px)" }}
                  className="absolute -top-6 sm:-top-8 left-1/2 -translate-x-1/2 z-30"
                >
                  <div className="px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-extrabold shadow-xl backdrop-blur-md border flex items-center gap-1.5 transition-transform hover:scale-110 bg-gradient-to-r from-orange-500/90 via-rose-500/90 to-purple-600/90 text-white border-orange-400/40 shadow-orange-500/25">
                    <Sparkles className="w-3.5 h-3.5 text-amber-200 animate-spin" style={{ animationDuration: "6s" }} />
                    <span>AI Vision & Prompt Lead</span>
                  </div>
                </motion.div>

                {/* 3. Next.js 15 Web Platform (Top-Right) */}
                <motion.div
                  animate={{ y: [0, -7, 0] }}
                  transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                  style={{ transform: "translateZ(80px)" }}
                  className="absolute -top-2 right-2 sm:top-2 sm:-right-2 z-20"
                >
                  <div className="px-3 py-1.5 rounded-xl text-xs sm:text-sm font-bold shadow-lg backdrop-blur-md border flex items-center gap-1.5 transition-transform hover:scale-110 bg-cyan-950/85 text-cyan-300 border-cyan-500/40 shadow-cyan-500/20">
                    <Zap className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Next.js 15 Web</span>
                  </div>
                </motion.div>

                {/* 4. Native iOS & Android (Bottom-Left) */}
                <motion.div
                  animate={{ y: [0, 6, 0] }}
                  transition={{ duration: 3.1, repeat: Infinity, ease: "easeInOut", delay: 0.9 }}
                  style={{ transform: "translateZ(70px)" }}
                  className="absolute -bottom-2 left-2 sm:bottom-2 sm:-left-2 z-20"
                >
                  <div className="px-3 py-1.5 rounded-xl text-xs sm:text-sm font-bold shadow-lg backdrop-blur-md border flex items-center gap-1.5 transition-transform hover:scale-110 bg-blue-950/85 text-blue-300 border-blue-500/40 shadow-blue-500/20">
                    <Code2 className="w-3.5 h-3.5 text-blue-400" />
                    <span>Android & iOS Swift</span>
                  </div>
                </motion.div>

                {/* 5. Production Zero-Crash (Bottom-Right) */}
                <motion.div
                  animate={{ y: [0, 7, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
                  style={{ transform: "translateZ(75px)" }}
                  className="absolute -bottom-2 right-2 sm:bottom-2 sm:-right-2 z-20"
                >
                  <div className="px-3 py-1.5 rounded-xl text-xs sm:text-sm font-bold shadow-lg backdrop-blur-md border flex items-center gap-1.5 transition-transform hover:scale-110 bg-purple-950/85 text-purple-300 border-purple-500/40 shadow-purple-500/20">
                    <ShieldCheck className="w-3.5 h-3.5 text-purple-400" />
                    <span>Crashlytics &lt; 0.01%</span>
                  </div>
                </motion.div>

                {/* =============================================================
                    BOTTOM 3D FLOATING HUD MATRIX: Performance & Experience
                    ============================================================= */}
                <motion.div
                  style={{ transform: "translateZ(95px)" }}
                  className="absolute -bottom-10 sm:-bottom-12 left-1/2 -translate-x-1/2 z-40 max-w-[94vw] sm:max-w-none"
                >
                  <div className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-2xl shadow-2xl backdrop-blur-xl border flex items-center gap-2 sm:gap-3 bg-slate-900/90 border-slate-700/80 text-white text-[11px] sm:text-xs">
                    <div className="flex items-center gap-1.5 whitespace-nowrap">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
                      <span className="font-mono font-semibold text-emerald-400">60 FPS Native</span>
                    </div>
                    <span className="text-slate-600">|</span>
                    <div className="font-mono font-bold text-slate-200 whitespace-nowrap">
                      {yearsExperience}+ Yrs Lead
                    </div>
                    <span className="text-slate-600">|</span>
                    <div className="font-mono font-bold text-cyan-400 whitespace-nowrap">
                      35+ Shipped
                    </div>
                  </div>
                </motion.div>

              </div>
            </Hero3DTiltCard>
          </div>

        </div>
      </div>

      {/* =========================================================================
          BOTTOM SCROLL INDICATOR
          ========================================================================= */}
      <motion.div 
        animate={{ y: [0, 8, 0] }} 
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} 
        className="relative z-10 mx-auto mt-8 flex flex-col items-center"
      >
        <a 
          href="#about" 
          aria-label="Scroll down to About section" 
          className="p-2 rounded-full text-slate-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200"
        >
          <ChevronDown className="w-6 h-6 sm:w-7 sm:h-7" />
        </a>
      </motion.div>
    </section>
  )
}
