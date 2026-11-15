"use client"

import { useState, useRef, useEffect } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { useTheme } from "@/app/context/ThemeContext"
import { 
  Code2, 
  Wrench, 
  Layers, 
  Languages, 
  Sparkles, 
  Cpu, 
  Smartphone, 
  Globe, 
  Bot, 
  CheckCircle2, 
  Search,
  Zap,
  TrendingUp,
  ShieldCheck
} from "lucide-react"
import { skillCategories } from "@/lib/data"

// ============================================
// REAL 3D TILT CARD COMPONENT WITH SPECULAR GLARE
// ============================================
function Tilt3DCard({ 
  children, 
  className = "",
  glowColor = "rgba(59, 130, 246, 0.2)"
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

    // Real 3D physics angle calculation
    const rotX = -((y - centerY) / centerY) * 12
    const rotY = ((x - centerX) / centerX) * 12

    setRotateX(rotX)
    setRotateY(rotY)
    setGlare({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.2
    })
  }

  const handleMouseLeave = () => {
    setRotateX(0)
    setRotateY(0)
    setGlare((prev) => ({ ...prev, opacity: 0 }))
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ rotateX, rotateY }}
      transition={{ type: "spring", stiffness: 350, damping: 25 }}
      style={{ perspective: 1200, transformStyle: "preserve-3d" }}
      className={`relative ${className}`}
    >
      {/* Dynamic 3D Glare Light reflection */}
      <div
        className="absolute inset-0 pointer-events-none rounded-3xl transition-opacity duration-300 z-30 overflow-hidden"
        style={{
          background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255,255,255,${glare.opacity}), transparent 65%)`
        }}
      />
      {/* Dynamic 3D ambient drop shadow */}
      <div 
        className="absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10 pointer-events-none"
        style={{ background: glowColor }}
      />
      {children}
    </motion.div>
  )
}

// ============================================
// 3D HOLOGRAPHIC PROGRESS DIAL
// ============================================
function Dial3D({ level, color = "#3b82f6", size = 80 }: { level: number; color?: string; size?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })
  const strokeWidth = 7
  const radius = (size - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius
  const strokeDashoffset = circumference - (level / 100) * circumference

  return (
    <div ref={ref} className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      <svg className="w-full h-full -rotate-90" viewBox={`0 0 ${size} ${size}`}>
        {/* Track */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          className="text-slate-200 dark:text-slate-800"
          fill="none"
        />
        {/* Progress Arc */}
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={color}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={isInView ? { strokeDashoffset } : { strokeDashoffset: circumference }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          strokeLinecap="round"
          fill="none"
        />
      </svg>
      {/* 3D Center Floating Stat */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <span className="text-sm font-extrabold text-slate-900 dark:text-white leading-none">
          {level}%
        </span>
      </div>
    </div>
  )
}

// ============================================
// MAIN TECHNICAL SKILLS SECTION
// ============================================
export default function Skills() {
  const { darkMode } = useTheme()
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [searchQuery, setSearchQuery] = useState<string>("")

  // Filter skills based on category and search query
  const filteredCategories = skillCategories.map((cat) => {
    if (selectedCategory !== "all" && cat.title !== selectedCategory) {
      return null
    }
    const filteredSkills = cat.skills.filter((s) => 
      s.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    if (filteredSkills.length === 0) return null
    return { ...cat, skills: filteredSkills }
  }).filter(Boolean) as typeof skillCategories

  // Key Pillar Highlights
  const corePillars = [
    {
      title: "Mobile Architecture",
      badge: "Flagship Expertise",
      rating: 96,
      icon: Smartphone,
      gradient: "from-blue-600 via-indigo-600 to-cyan-500",
      glow: "rgba(59, 130, 246, 0.35)",
      skills: ["React Native", "Android (Java/Kotlin)", "iOS (Xcode)", "Clean MVVM"],
      desc: "Cross-platform enterprise native apps with high-fps rendering and background sync."
    },
    {
      title: "Modern Web & Cloud",
      badge: "High Scalability",
      rating: 93,
      icon: Globe,
      gradient: "from-purple-600 via-pink-600 to-rose-500",
      glow: "rgba(168, 85, 247, 0.35)",
      skills: ["Next.js 15", "React.js", "TypeScript", "REST APIs"],
      desc: "Full-stack SSR web applications optimized for Core Web Vitals and top SEO ranking."
    },
    {
      title: "AI-Powered Solutions",
      badge: "Modern Edge",
      rating: 95,
      icon: Bot,
      gradient: "from-emerald-500 via-teal-600 to-cyan-600",
      glow: "rgba(16, 185, 129, 0.35)",
      skills: ["Cursor AI", "Claude AI", "ChatGPT APIs", "AI Prompting"],
      desc: "Deep integration of AI models and tools to supercharge engineering velocity and app features."
    },
    {
      title: "Release & DevOps",
      badge: "Production Ready",
      rating: 94,
      icon: Cpu,
      gradient: "from-amber-500 via-orange-600 to-red-500",
      glow: "rgba(245, 158, 11, 0.35)",
      skills: ["Play Console", "App Store Connect", "CI/CD Git", "Crashlytics"],
      desc: "Complete end-to-end publishing, release management, and zero-crash production monitoring."
    }
  ]

  return (
    <section id="skills" className="py-20 sm:py-28 bg-slate-50 dark:bg-gray-900 transition-colors duration-500 relative overflow-hidden">
      {/* 3D Background Geometric Mesh */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #6366f1 1.2px, transparent 0)`,
            backgroundSize: '48px 48px'
          }}
        />
      </div>

      {/* Floating 3D Ambient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-[500px] h-[500px] bg-blue-500/10 dark:bg-blue-500/15 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 -right-24 w-[500px] h-[500px] bg-purple-500/10 dark:bg-purple-500/15 rounded-full blur-[120px]" />
        <div className="absolute -bottom-24 left-1/3 w-[600px] h-[600px] bg-emerald-500/10 dark:bg-emerald-500/10 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header with 3D Depth */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 sm:mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/70 border border-blue-200/80 dark:border-blue-800/60 text-blue-600 dark:text-blue-400 text-xs sm:text-sm font-bold mb-4 shadow-sm"
          >
            <Sparkles size={14} className="text-blue-500 animate-spin-slow" />
            <span>Multi-Disciplinary Stack</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight">
            Technical <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">Expertise & Skills</span>
          </h2>

          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-0.5 w-12 bg-gradient-to-r from-transparent to-blue-500/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-blue-500" />
            <div className="h-0.5 w-24 bg-gradient-to-r from-blue-500/60 via-purple-500/60 to-blue-500/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-purple-500" />
            <div className="h-0.5 w-12 bg-gradient-to-l from-transparent to-purple-500/60" />
          </div>

          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Handcrafted with 8+ years of production experience across native mobile systems, high-traffic web architectures, and modern AI engineering.
          </p>
        </motion.div>

        {/* ========================================================
            PART 1: 3D HOLOGRAPHIC CORE SUPERPOWER CARDS
        ======================================================== */}
        <div className="mb-16 sm:mb-20">
          <div className="flex items-center justify-between mb-6 px-1">
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-amber-500" />
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                Core Engineering Pillars
              </h3>
            </div>
            <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
              3D Interactive
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {corePillars.map((pillar, idx) => {
              const Icon = pillar.icon
              return (
                <Tilt3DCard 
                  key={pillar.title} 
                  glowColor={pillar.glow}
                  className="group rounded-3xl"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                    className="h-full bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl rounded-3xl p-6 sm:p-7 border border-slate-200/80 dark:border-slate-700/80 shadow-xl shadow-slate-200/40 dark:shadow-none flex flex-col justify-between transition-all duration-300"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <div>
                      {/* Top Row with 3D Icon and 3D Progress Dial */}
                      <div className="flex items-center justify-between mb-5" style={{ transform: "translateZ(30px)" }}>
                        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${pillar.gradient} flex items-center justify-center text-white shadow-lg shadow-blue-500/25`}>
                          <Icon size={26} />
                        </div>
                        <Dial3D level={pillar.rating} color="#3b82f6" size={68} />
                      </div>

                      {/* Title & Badge */}
                      <div style={{ transform: "translateZ(20px)" }}>
                        <span className="inline-block text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 mb-2">
                          {pillar.badge}
                        </span>
                        <h4 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {pillar.title}
                        </h4>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
                          {pillar.desc}
                        </p>
                      </div>
                    </div>

                    {/* Skill Pills inside Card */}
                    <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-700/60" style={{ transform: "translateZ(25px)" }}>
                      <div className="flex flex-wrap gap-1.5">
                        {pillar.skills.map((s) => (
                          <span 
                            key={s} 
                            className="text-[11px] font-semibold px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-700/60 text-slate-700 dark:text-slate-300"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </Tilt3DCard>
              )
            })}
          </div>
        </div>

        {/* ========================================================
            PART 2: INTERACTIVE CATEGORY MATRIX & 3D SKILL CHIPS
        ======================================================== */}
        <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-2xl rounded-3xl p-6 sm:p-8 md:p-10 border border-slate-200/80 dark:border-slate-700 shadow-2xl shadow-slate-200/50 dark:shadow-none">
          
          {/* Controls Bar: Search & Filter Tabs */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-100 dark:border-slate-700/80">
            {/* Filter Pills */}
            <div className="flex items-center gap-3 overflow-x-auto w-full lg:w-auto py-1 scrollbar-none">
              <button
                onClick={() => setSelectedCategory("all")}
                className={`min-h-[36px] px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap inline-flex items-center justify-center transition-all duration-300 ${
                  selectedCategory === "all"
                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-500/25 scale-105"
                    : "bg-slate-100 dark:bg-slate-700/60 text-slate-600 dark:text-slate-300 hover:bg-slate-200"
                }`}
              >
                All Skills
              </button>
              {skillCategories.map((c) => (
                <button
                  key={c.title}
                  onClick={() => setSelectedCategory(c.title)}
                  className={`min-h-[36px] px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap inline-flex items-center justify-center transition-all duration-300 ${
                    selectedCategory === c.title
                      ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-500/25 scale-105"
                      : "bg-slate-100 dark:bg-slate-700/60 text-slate-600 dark:text-slate-300 hover:bg-slate-200"
                  }`}
                >
                  {c.title}
                </button>
              ))}
            </div>

            {/* Quick Live Search Filter */}
            <div className="relative w-full sm:w-72 flex-shrink-0">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search skill (e.g. React, Kotlin)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm text-slate-800 dark:text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
              />
            </div>
          </div>

          {/* Categories Grid */}
          <div className="space-y-10">
            {filteredCategories.map((cat, catIdx) => {
              const Icon = cat.icon
              return (
                <div key={cat.title}>
                  {/* Category Section Title */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white shadow-md">
                      <Icon size={18} />
                    </div>
                    <div>
                      <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                        {cat.title}
                      </h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        {cat.description}
                      </p>
                    </div>
                  </div>

                  {/* Skills Grid with 3D Chips */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3.5 sm:gap-4">
                    {cat.skills.map((skill, sIdx) => {
                      const isHigh = skill.level >= 90
                      return (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, scale: 0.95 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: sIdx * 0.03 }}
                          whileHover={{ y: -4, scale: 1.02 }}
                          className="p-4 rounded-2xl bg-white dark:bg-slate-900/70 border border-slate-200/80 dark:border-slate-700/80 shadow-sm hover:shadow-lg hover:border-blue-400 dark:hover:border-blue-500 transition-all duration-300 group"
                        >
                          <div className="flex items-center justify-between gap-2 mb-2.5">
                            <span className="font-bold text-slate-900 dark:text-white text-xs sm:text-sm group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors truncate">
                              {skill.name}
                            </span>
                            <span className={`text-[11px] font-extrabold px-2 py-0.5 rounded-md ${
                              isHigh 
                                ? "bg-blue-50 dark:bg-blue-950/70 text-blue-600 dark:text-blue-400 border border-blue-200/50 dark:border-blue-800/50" 
                                : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                            }`}>
                              {skill.level}%
                            </span>
                          </div>

                          {/* 3D Energy Progress Bar with Shimmer */}
                          <div className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden relative">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1.2, delay: sIdx * 0.04, ease: "easeOut" }}
                              className="h-full rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 relative overflow-hidden"
                            >
                              {/* Shimmer animation */}
                              <motion.div
                                animate={{ x: ["-100%", "200%"] }}
                                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", repeatDelay: 1.5 }}
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                              />
                            </motion.div>
                          </div>

                          {/* Level Tag */}
                          <div className="mt-2.5 flex items-center justify-between text-[10px] text-slate-400 dark:text-slate-500">
                            <span>{skill.level >= 95 ? "Mastery" : skill.level >= 90 ? "Expert" : "Proficient"}</span>
                            <span className="flex items-center gap-1">
                              <CheckCircle2 size={11} className="text-emerald-500" /> Production
                            </span>
                          </div>
                        </motion.div>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* ========================================================
            PART 3: 3D TECH CLUSTER / MARQUEE OF EXCELLENCE
        ======================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 sm:mt-16 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 text-white shadow-2xl shadow-blue-600/20 relative overflow-hidden text-center"
        >
          <div className="absolute -right-10 -bottom-10 w-44 h-44 bg-white/10 rounded-full blur-2xl pointer-events-none" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-extrabold mb-2">
              Continuous Evolution in Modern Software
            </h3>
            <p className="text-xs sm:text-sm text-blue-100/90 leading-relaxed mb-6">
              Combining 8+ years of solid object-oriented engineering with cutting-edge AI-assisted workflows to build high-performance software at lightning speed.
            </p>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-2.5">
              {[
                "React Native", "Android Java/Kotlin", "Next.js 15", "TypeScript", 
                "RESTful Microservices", "Firebase", "App Store Connect", "Play Console",
                "Cursor AI", "Claude 3.7", "Prompt Engineering", "Full-Stack Web"
              ].map((pill) => (
                <span
                  key={pill}
                  className="px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md text-xs font-bold text-white border border-white/20 hover:bg-white/25 transition-colors cursor-default"
                >
                  {pill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
