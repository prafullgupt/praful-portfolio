"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { useTheme } from "@/app/context/ThemeContext"
import {
  Briefcase,
  Target,
  Award,
  User,
  Sparkles,
  CheckCircle2,
  Code2,
  Cpu,
  Zap,
  TrendingUp,
  Terminal,
  ShieldCheck,
  Layers,
  ArrowRight,
  Medal,
  Flame,
  Globe2
} from "lucide-react"
import { personalInfo, achievements, stats } from "@/lib/data"

// ============================================
// REAL 3D TILT CARD COMPONENT WITH SPECULAR GLARE
// ============================================
function About3DTiltCard({
  children,
  className = "",
  glowColor = "rgba(59, 130, 246, 0.25)"
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

    // Physics-based 3D tilt calculation
    const rotX = -((y - centerY) / centerY) * 10
    const rotY = ((x - centerX) / centerX) * 10

    setRotateX(rotX)
    setRotateY(rotY)
    setGlare({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.22
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
      {/* Specular Glare light reflection */}
      <div
        className="absolute inset-0 pointer-events-none rounded-3xl transition-opacity duration-300 z-30 overflow-hidden"
        style={{
          background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255,255,255,${glare.opacity}), transparent 65%)`
        }}
      />
      {/* Ambient 3D Glow drop shadow */}
      <div
        className="absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10 pointer-events-none"
        style={{ background: glowColor }}
      />
      {children}
    </motion.div>
  )
}

// ============================================
// MAIN ABOUT ME SECTION COMPONENT
// ============================================
export default function About() {
  const { darkMode } = useTheme()
  const [activeTab, setActiveTab] = useState<"story" | "milestones" | "values">("story")

  const corePrinciples = [
    {
      title: "Native 60fps Velocity",
      desc: "Delivering fluid, lag-free mobile experiences with React Native, Android Kotlin, and optimized memory lifecycles.",
      icon: Zap,
      color: "from-amber-500 to-orange-500"
    },
    {
      title: "Crashlytics < 0.01%",
      desc: "Architecting zero-crash production apps with comprehensive error boundaries, MVVM patterns, and automated monitoring.",
      icon: ShieldCheck,
      color: "from-emerald-500 to-teal-500"
    },
    {
      title: "AI-Augmented Workflows",
      desc: "Supercharging engineering output through modern AI tools (Cursor AI, Claude 3.7, ChatGPT) and integrated LLM app features.",
      icon: Cpu,
      color: "from-blue-600 to-indigo-600"
    },
    {
      title: "High-Traffic Web Scale",
      desc: "Engineering full-stack SSR architectures with Next.js 15, sub-second TTFB, and top Google SEO ranking architectures.",
      icon: Globe2,
      color: "from-purple-600 to-pink-600"
    }
  ]

  const metrics = [
    {
      icon: Briefcase,
      value: `${new Date().getFullYear() - 2018}+`,
      unit: "Years",
      label: "Engineering Leadership",
      detail: "Leading mobile & web product teams",
      gradient: "from-blue-600 to-cyan-500"
    },
    {
      icon: Target,
      value: "35+",
      unit: "Apps & Systems",
      label: "Production Deployments",
      detail: "Google Play Store & Live Web Platforms",
      gradient: "from-purple-600 to-indigo-500"
    },
    {
      icon: Medal,
      value: "World Record",
      unit: "Honoree",
      label: "Golden Book of World Records",
      detail: "IIMT University Recognition (2018)",
      gradient: "from-amber-500 to-orange-500"
    },
    {
      icon: User,
      value: "100%",
      unit: "Success Rate",
      label: "Store Approval Track Record",
      detail: "Zero-rejection release management",
      gradient: "from-emerald-500 to-teal-500"
    }
  ]

  return (
    <section id="about" className="py-20 sm:py-28 bg-white dark:bg-gray-900 transition-colors duration-500 relative overflow-hidden">
      {/* 3D Geometric Mesh */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #6366f1 1.2px, transparent 0)`,
            backgroundSize: '48px 48px'
          }}
        />
      </div>

      {/* Floating 3D Ambient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-[500px] h-[500px] bg-blue-500/10 dark:bg-blue-500/15 rounded-full blur-[140px]" />
        <div className="absolute top-1/2 -left-24 w-[500px] h-[500px] bg-purple-500/10 dark:bg-purple-500/15 rounded-full blur-[140px]" />
        <div className="absolute -bottom-24 right-1/4 w-[600px] h-[600px] bg-emerald-500/10 dark:bg-emerald-500/10 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
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
            <span>Architect & Engineering Leader</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight">
            About <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">Praful Gupta</span>
          </h2>

          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-0.5 w-12 bg-gradient-to-r from-transparent to-blue-500/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-blue-500" />
            <div className="h-0.5 w-24 bg-gradient-to-r from-blue-500/60 via-purple-500/60 to-blue-500/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-purple-500" />
            <div className="h-0.5 w-12 bg-gradient-to-l from-transparent to-purple-500/60" />
          </div>

          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Leading engineering teams and architecting mission-critical mobile and web software with native precision, robust architectures, and AI integration.
          </p>
        </motion.div>

        {/* ========================================================
            PART 1: 3D HERO SPOTLIGHT & INTERACTIVE DEVELOPER CONSOLE
        ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16 sm:mb-20">
          
          {/* Left Column: Interactive 3D Bio & Perspective Console (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <About3DTiltCard
              glowColor="rgba(99, 102, 241, 0.3)"
              className="group h-full rounded-3xl"
            >
              <div
                className="h-full bg-slate-50/90 dark:bg-slate-800/90 backdrop-blur-xl rounded-3xl p-6 sm:p-8 md:p-10 border border-slate-200/80 dark:border-slate-700/80 shadow-xl shadow-slate-200/50 dark:shadow-none flex flex-col justify-between"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div>
                  {/* Top Badge, Avatar & Live Indicator */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6" style={{ transform: "translateZ(25px)" }}>
                    <div className="flex items-center gap-3">
                      <figure className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-2xl overflow-hidden border-2 border-blue-500/40 flex-shrink-0 shadow-md">
                        <picture>
                          <source type="image/webp" srcSet="/images/PrafulGupta-96.webp" />
                          <img
                            src="/images/PrafulGupta-96.png"
                            width={56}
                            height={56}
                            alt="Praful Gupta (प्रफुल गुप्ता) - Team Leader & Senior Application Developer"
                            title="Praful Gupta (प्रफुल गुप्ता)"
                            loading="lazy"
                            decoding="async"
                            className="w-full h-full object-cover"
                          />
                        </picture>
                        <figcaption className="sr-only">Praful Gupta (प्रफुल गुप्ता)</figcaption>
                      </figure>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                          <span className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200">
                            Team Leader @ Harshit Infosolutions
                          </span>
                        </div>
                        <span className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 font-mono">
                          Praful Gupta Portfolio (प्रफुल गुप्ता)
                        </span>
                      </div>
                    </div>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300 w-max">
                      8+ Years In Production
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white leading-snug mb-4" style={{ transform: "translateZ(30px)" }}>
                    Transforming Visionary Ideas into <span className="text-blue-600 dark:text-blue-400">High-Performance Applications</span>
                  </h3>

                  <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-6" style={{ transform: "translateZ(20px)" }}>
                    {personalInfo.about}
                  </p>
                </div>

                {/* 3D Code Perspective Card (Live Specs) */}
                <div
                  className="rounded-2xl bg-slate-900 text-slate-200 p-4 sm:p-5 border border-slate-700/80 shadow-lg font-mono text-xs overflow-hidden relative"
                  style={{ transform: "translateZ(35px)" }}
                >
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                      <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                      <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                      <span className="text-[11px] text-slate-400 font-sans ml-2">praful.engineer.config.ts</span>
                    </div>
                    <Terminal size={14} className="text-slate-400" />
                  </div>

                  <div className="space-y-1.5 text-[11px] sm:text-xs">
                    <p><span className="text-purple-400">const</span> <span className="text-blue-400">engineer</span> = &#123;</p>
                    <p className="pl-4"><span className="text-slate-400">role:</span> <span className="text-emerald-400">&quot;Senior Application & Web Developer&quot;</span>,</p>
                    <p className="pl-4"><span className="text-slate-400">coreStack:</span> [<span className="text-amber-300">&quot;React Native&quot;</span>, <span className="text-amber-300">&quot;Next.js 15&quot;</span>, <span className="text-amber-300">&quot;Android Kotlin&quot;</span>, <span className="text-amber-300">&quot;AI Vision&quot;</span>],</p>
                    <p className="pl-4"><span className="text-slate-400">leadProducts:</span> [<span className="text-teal-300">&quot;Calmate AI&quot;</span>, <span className="text-teal-300">&quot;FastMate AI&quot;</span>, <span className="text-teal-300">&quot;Ayuryog&quot;</span>],</p>
                    <p className="pl-4"><span className="text-slate-400">status:</span> <span className="text-emerald-400">&quot;Building Scalable Next-Gen Software&quot;</span></p>
                    <p>&#125;;</p>
                  </div>
                </div>
              </div>
            </About3DTiltCard>
          </div>

          {/* Right Column: 4 Dynamic 3D Stat Cubes (5 Cols) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {metrics.map((stat, idx) => {
              const Icon = stat.icon
              return (
                <About3DTiltCard
                  key={stat.label}
                  glowColor="rgba(59, 130, 246, 0.3)"
                  className="group rounded-3xl"
                >
                  <div
                    className="h-full bg-slate-50/90 dark:bg-slate-800/90 backdrop-blur-xl rounded-3xl p-6 border border-slate-200/80 dark:border-slate-700/80 shadow-lg shadow-slate-200/40 dark:shadow-none flex flex-col justify-between transition-all duration-300"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <div>
                      <div
                        className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center text-white mb-4 shadow-md group-hover:scale-110 transition-transform`}
                        style={{ transform: "translateZ(25px)" }}
                      >
                        <Icon size={24} />
                      </div>

                      <div style={{ transform: "translateZ(30px)" }}>
                        <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                          {stat.value}
                        </div>
                        <div className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mt-1">
                          {stat.unit}
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-200/60 dark:border-slate-700/60" style={{ transform: "translateZ(20px)" }}>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200">
                        {stat.label}
                      </h4>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                        {stat.detail}
                      </p>
                    </div>
                  </div>
                </About3DTiltCard>
              )
            })}
          </div>

        </div>

        {/* ========================================================
            PART 2: INTERACTIVE TABS (CAREER PILLARS & ACHIEVEMENTS)
        ======================================================== */}
        <div className="bg-slate-50/80 dark:bg-slate-800/80 backdrop-blur-2xl rounded-3xl p-6 sm:p-8 md:p-10 border border-slate-200/80 dark:border-slate-700 shadow-xl shadow-slate-200/40 dark:shadow-none">
          
          {/* Tab Selector Bar */}
          <div className="flex items-center justify-center sm:justify-start gap-2 overflow-x-auto pb-4 mb-8 border-b border-slate-200 dark:border-slate-700/80 scrollbar-none">
            {[
              { id: "story", label: "Executive Journey & Impact", icon: Briefcase },
              { id: "values", label: "Core Engineering Values", icon: Zap },
              { id: "milestones", label: "Key Achievements & World Record", icon: Award }
            ].map((tab) => {
              const Icon = tab.icon
              const isActive = activeTab === tab.id
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 flex-shrink-0 cursor-pointer ${
                    isActive
                      ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/25 scale-[1.02]"
                      : "bg-white dark:bg-slate-700/60 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
                  }`}
                >
                  <Icon size={15} />
                  <span>{tab.label}</span>
                </button>
              )
            })}
          </div>

          {/* Tab 1: Executive Journey & Impact */}
          {activeTab === "story" && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              <div className="p-6 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-700/80">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-4">
                  <Flame size={20} />
                </div>
                <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2">Team Leadership & Delivery</h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Leading cross-functional developer squads in sprint cycles, architecting multi-app ecosystems, performing code reviews, and enforcing clean MVVM standards.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-700/80">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-4">
                  <Cpu size={20} />
                </div>
                <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2">Cutting-Edge AI Integration</h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Pioneering AI-driven capabilities including food photo calorie scanning, conversational health intelligence, and fast prototyping with LLM APIs.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-700/80">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-4">
                  <ShieldCheck size={20} />
                </div>
                <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2">Production Store Mastery</h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  End-to-end publishing, signing, Google Play Store Console compliance, Apple App Store Connect guidelines, and zero-downtime over-the-air updates.
                </p>
              </div>
            </motion.div>
          )}

          {/* Tab 2: Core Engineering Values */}
          {activeTab === "values" && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {corePrinciples.map((val) => {
                const Icon = val.icon
                return (
                  <div
                    key={val.title}
                    className="p-6 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-700/80 hover:border-blue-400 transition-colors"
                  >
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${val.color} text-white flex items-center justify-center mb-4 shadow-md`}>
                      <Icon size={20} />
                    </div>
                    <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white mb-2">
                      {val.title}
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                      {val.desc}
                    </p>
                  </div>
                )
              })}
            </motion.div>
          )}

          {/* Tab 3: Key Achievements & World Record */}
          {activeTab === "milestones" && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="space-y-4"
            >
              {achievements.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-700/80"
                >
                  <div className="w-8 h-8 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 size={18} />
                  </div>
                  <div>
                    <p className="text-sm sm:text-base font-semibold text-slate-800 dark:text-slate-200">
                      {item}
                    </p>
                    <span className="text-[11px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider mt-1 inline-block">
                      Verified Milestone
                    </span>
                  </div>
                </div>
              ))}
            </motion.div>
          )}

        </div>

      </div>
    </section>
  )
}
