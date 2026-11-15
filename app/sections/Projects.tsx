"use client"

import { useState, useRef, useId } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useTheme } from "@/app/context/ThemeContext"
import {
  Smartphone,
  Globe,
  Bot,
  Sparkles,
  ExternalLink,
  Github,
  Play,
  ArrowUpRight,
  Search,
  CheckCircle2,
  ShieldCheck,
  Zap,
  Layers,
  Star,
  Info,
  X,
  Code2,
  SlidersHorizontal,
  Flame,
  Award
} from "lucide-react"

// ============================================
// PROJECT DATA DEFINITION
// ============================================
interface ProjectItem {
  id: string
  name: string
  category: "mobile" | "web" | "enterprise"
  badge: string
  company: string
  period?: string
  rating?: string
  status: string
  isLive: boolean
  isFlagship?: boolean
  description: string
  highlights: string[]
  technologies: string[]
  playStoreUrl?: string
  webUrl?: string
  githubUrl?: string
  accentColor: string
  glowColor: string
  gradient: string
}

const ALL_PROJECTS: ProjectItem[] = [
  {
    id: "calmate-ai",
    name: "Calmate AI",
    category: "mobile",
    badge: "Flagship AI App",
    company: "Harshit Infosolutions",
    period: "2023 - Present",
    rating: "4.8 ★",
    status: "Live on Google Play",
    isLive: true,
    isFlagship: true,
    description: "AI-driven nutrition & fitness intelligence app. Analyzes meal photos with computer vision to calculate real-time calorie counts, macro breakdowns, and generates predictive health insights.",
    highlights: [
      "Real-time food photo analysis with AI Vision",
      "Automated macro nutrient calculator & logging",
      "Personalized daily metabolic reports",
      "Smooth 60fps animations with React Native"
    ],
    technologies: ["React Native", "AI Vision", "Node.js", "Firebase", "Redux", "TypeScript"],
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.calmate.ai&hl=en_IN",
    accentColor: "#10b981",
    glowColor: "rgba(16, 185, 129, 0.4)",
    gradient: "from-emerald-500 via-teal-600 to-cyan-600"
  },
  {
    id: "ayuryog-wellness",
    name: "Ayuryog - Wellness Platform",
    category: "web",
    badge: "Flagship Web App",
    company: "Personal Project",
    period: "2024",
    rating: "Top SEO Rank",
    status: "Live Web Platform",
    isLive: true,
    isFlagship: true,
    description: "High-performance full-stack Ayurvedic wellness web platform built with Next.js 14 App Router, dynamic blog engine, reusable component architecture, and Cloudflare Edge caching.",
    highlights: [
      "Next.js 14 App Router with Server-Side Rendering (SSR)",
      "7+ dynamic routes with dynamic markdown/CMS blog routing",
      "SEO #1 targeted metadata & Schema.org integration",
      "Edge-cached assets delivering sub-second TTFB"
    ],
    technologies: ["Next.js 14", "TypeScript", "Tailwind CSS", "Cloudflare", "GoDaddy", "Git"],
    webUrl: "https://ayuryog.life/",
    githubUrl: "https://github.com/prafullgupt/ayuryog-nextjs",
    accentColor: "#8b5cf6",
    glowColor: "rgba(139, 92, 246, 0.4)",
    gradient: "from-purple-600 via-indigo-600 to-violet-500"
  },
  {
    id: "fastmate-ai",
    name: "FastMate AI",
    category: "mobile",
    badge: "AI Health Assistant",
    company: "Harshit Infosolutions",
    period: "2023 - Present",
    rating: "4.9 ★",
    status: "Live on Google Play",
    isLive: true,
    isFlagship: false,
    description: "AI-powered intermittent fasting assistant providing hyper-personalized fasting schedules, circadian rhythm insights, and adaptive health coaching tailored to metabolic stages.",
    highlights: [
      "Circadian rhythm adaptive fasting timer",
      "LLM-backed daily hydration & fasting coaching",
      "Biometric tracking and custom goal milestones",
      "Native push notifications for fasting intervals"
    ],
    technologies: ["React Native", "OpenAI / Claude API", "TypeScript", "Tailwind", "AsyncStorage"],
    playStoreUrl: "https://play.google.com/store/apps/details?id=app.fastmate.ai",
    accentColor: "#06b6d4",
    glowColor: "rgba(6, 182, 212, 0.4)",
    gradient: "from-cyan-500 via-blue-600 to-indigo-600"
  },
  {
    id: "ketobalanced",
    name: "KetoBalanced",
    category: "mobile",
    badge: "Diet & Fitness Tracker",
    company: "Harshit Infosolutions",
    period: "2023 - Present",
    rating: "4.7 ★",
    status: "Live on Google Play",
    isLive: true,
    isFlagship: false,
    description: "Specialized low-carb keto diet tracking app featuring customized meal plans, curated video workout sessions, and interactive recipe libraries with micro/macro accounting.",
    highlights: [
      "Custom keto meal planner algorithm",
      "High-definition video workout player integration",
      "Over 500+ verified low-carb recipes",
      "In-app subscriptions and member gating"
    ],
    technologies: ["React Native", "Android Studio", "Xcode", "ExoPlayer", "Firebase"],
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.ketoplan.lowcarb.tracker",
    accentColor: "#f59e0b",
    glowColor: "rgba(245, 158, 11, 0.4)",
    gradient: "from-amber-500 via-orange-600 to-rose-500"
  },
  {
    id: "fastbetter",
    name: "FastBetter",
    category: "mobile",
    badge: "Fasting & Habit Coach",
    company: "Harshit Infosolutions",
    period: "2023 - Present",
    rating: "4.8 ★",
    status: "Live on Google Play",
    isLive: true,
    isFlagship: false,
    description: "Comprehensive fasting tracker built to help users achieve sustainable weight loss through goal milestones, hydration tracking, and fasting stage visualizations.",
    highlights: [
      "Visual timeline of metabolic fasting stages",
      "Interactive hydration & streak logger",
      "Zero-lag local state persistence",
      "Multi-timezone automated notification alarms"
    ],
    technologies: ["React Native", "Redux Toolkit", "Local Notifications", "SVG Charts"],
    playStoreUrl: "https://play.google.com/store/apps/details?id=fastbetter.fastingtracker.weightloss",
    accentColor: "#3b82f6",
    glowColor: "rgba(59, 130, 246, 0.4)",
    gradient: "from-blue-600 via-indigo-600 to-cyan-500"
  },
  {
    id: "yogarise",
    name: "YogaRise",
    category: "mobile",
    badge: "Mindfulness & Yoga",
    company: "Harshit Infosolutions",
    period: "2023 - Present",
    rating: "4.7 ★",
    status: "Live on Google Play",
    isLive: true,
    isFlagship: false,
    description: "Holistic yoga & mindfulness app offering guided video routines, breathing exercises, and customized wellness habits tailored to daily energy levels.",
    highlights: [
      "HD guided yoga class video playback",
      "Custom interval breathing timer",
      "Offline routine caching for travel",
      "Clean MVVM architecture with background audio"
    ],
    technologies: ["React Native", "ExoPlayer", "Clean MVVM", "Reanimated 3"],
    playStoreUrl: "https://play.google.com/store/apps/details?id=yogarise.wellness.yoga",
    accentColor: "#ec4899",
    glowColor: "rgba(236, 72, 153, 0.4)",
    gradient: "from-pink-500 via-rose-600 to-purple-600"
  },
  {
    id: "next-door-hub",
    name: "Next Door Hub",
    category: "mobile",
    badge: "PG & Living Booking",
    company: "CRKB IT Solutions",
    period: "2021 - 2022",
    rating: "4.6 ★",
    status: "Live on Google Play",
    isLive: true,
    isFlagship: false,
    description: "Full-featured PG and hostel room discovery & booking app. Allows college students and young professionals to explore verified accommodations, chat with owners, and pay deposits online.",
    highlights: [
      "Geo-location based PG room discovery with Google Maps",
      "Direct chat & calling with verified property owners",
      "Integrated online booking & deposit payment gateway",
      "Real-time room availability matrix"
    ],
    technologies: ["Android Java/Kotlin", "Payment Gateway", "Google Maps SDK", "Firebase"],
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.nextdoor.app",
    accentColor: "#6366f1",
    glowColor: "rgba(99, 102, 241, 0.4)",
    gradient: "from-indigo-600 via-blue-600 to-purple-600"
  },
  {
    id: "humble-info-tech",
    name: "Humble Info Tech",
    category: "web",
    badge: "Corporate Showcase",
    company: "Personal Project",
    period: "2024",
    status: "Live Web Platform",
    isLive: true,
    isFlagship: false,
    description: "Modern corporate platform built using Next.js 14 App Router, dynamic services presentation, lead generation contact pipeline, and high-conversion landing page layouts.",
    highlights: [
      "Full Next.js 14 dynamic pages & components",
      "Interactive service showcase with smooth animations",
      "Integrated EmailJS inquiry dispatch system",
      "Ultra-responsive CSS grid system"
    ],
    technologies: ["Next.js 14", "React.js", "Tailwind CSS", "Framer Motion", "Cloudflare"],
    webUrl: "https://www.humbleinfotech.com/",
    accentColor: "#0284c7",
    glowColor: "rgba(2, 132, 199, 0.4)",
    gradient: "from-sky-500 via-blue-600 to-indigo-600"
  },
  {
    id: "lead-management-crm",
    name: "Lead Management CRM",
    category: "web",
    badge: "Enterprise CRM",
    company: "Personal Project",
    period: "2024",
    status: "Enterprise System",
    isLive: false,
    isFlagship: false,
    description: "Full-stack enterprise CRM platform with 15+ dynamic views, role-based access control (RBAC), multi-stage sales pipeline tracking, and RESTful microservices integration.",
    highlights: [
      "15+ dynamic views with role-based access control (RBAC)",
      "Real-time lead scoring & Kanban pipeline boards",
      "JWT-authenticated secure REST APIs",
      "Analytics dashboards with conversion reporting"
    ],
    technologies: ["Next.js 14", "Node.js", "PostgreSQL", "REST APIs", "Tailwind CSS"],
    accentColor: "#14b8a6",
    glowColor: "rgba(20, 184, 166, 0.4)",
    gradient: "from-teal-500 via-emerald-600 to-cyan-600"
  },
  {
    id: "rptech-service",
    name: "RPTECH Study & Exam App",
    category: "enterprise",
    badge: "EdTech Platform",
    company: "CRKB IT Solutions",
    period: "2021 - 2022",
    status: "Educational Platform",
    isLive: false,
    isFlagship: false,
    description: "Comprehensive educational app providing students with encrypted eBooks, timed practice tests, instant answer grading, and study progress analytics.",
    highlights: [
      "Encrypted eBook reader with offline download capability",
      "Timed online examination system with real-time timers",
      "Automated result computation and rank generation",
      "Payment integration for premium test series"
    ],
    technologies: ["Android Java", "PHP REST API", "MySQL", "In-App Payments"],
    accentColor: "#f97316",
    glowColor: "rgba(249, 115, 22, 0.4)",
    gradient: "from-orange-500 via-amber-600 to-red-500"
  },
  {
    id: "jmj-sports",
    name: "JMJ Sports Marketplace",
    category: "enterprise",
    badge: "E-Commerce App",
    company: "CRKB IT Solutions",
    period: "2021 - 2022",
    status: "E-Commerce System",
    isLive: false,
    isFlagship: false,
    description: "Online sports equipment marketplace app supporting doorstep delivery, real-time inventory management, cart workflows, and multiple payment methods.",
    highlights: [
      "Categorized sports catalog with instant search",
      "Dual payment gateway (Online UPI/Cards + COD)",
      "Order lifecycle tracking with push notifications",
      "Admin order dispatch dashboard"
    ],
    technologies: ["Android Native", "PHP API", "MySQL", "Razorpay / UPI"],
    accentColor: "#ef4444",
    glowColor: "rgba(239, 68, 68, 0.4)",
    gradient: "from-red-500 via-rose-600 to-amber-600"
  },
  {
    id: "mytutorsonline",
    name: "Mytutorsonline & Lotusamaze",
    category: "web",
    badge: "E-Learning Portals",
    company: "Lotusamaze IT Solutions",
    period: "2018 - 2021",
    status: "Live Web Portals",
    isLive: true,
    isFlagship: false,
    description: "Live interactive tutoring and corporate study portals enabling students to book online 1-on-1 video lessons, take mock exams, and access IT technical training courses.",
    highlights: [
      "Tutor booking and session scheduling calendar",
      "Interactive assessment tests with scorecards",
      "Course catalogs with student dashboards",
      "Secure payment checkout for study materials"
    ],
    technologies: ["PHP Laravel", "MySQL", "JavaScript", "HTML5", "CSS3"],
    webUrl: "https://www.mytutorsonline.com/",
    accentColor: "#8b5cf6",
    glowColor: "rgba(139, 92, 246, 0.4)",
    gradient: "from-purple-600 via-indigo-600 to-blue-600"
  }
]

// ============================================
// REAL 3D TILT PROJECT CARD WITH SPECULAR LIGHT
// ============================================
function Project3DCard({
  project,
  index,
  onOpenDetails
}: {
  project: ProjectItem
  index: number
  onOpenDetails: (p: ProjectItem) => void
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

    // Real physics 3D angle calculation
    const rotX = -((y - centerY) / centerY) * 10
    const rotY = ((x - centerX) / centerX) * 10

    setRotateX(rotX)
    setRotateY(rotY)
    setGlare({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.25
    })
  }

  const handleMouseLeave = () => {
    setRotateX(0)
    setRotateY(0)
    setGlare((prev) => ({ ...prev, opacity: 0 }))
  }

  const Icon = project.category === "web" ? Globe : project.category === "mobile" ? Smartphone : Layers

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="h-full"
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={{ rotateX, rotateY }}
        transition={{ type: "spring", stiffness: 350, damping: 25 }}
        style={{ perspective: 1200, transformStyle: "preserve-3d" }}
        className="relative h-full rounded-3xl group"
      >
        {/* Dynamic 3D Specular Light Glare */}
        <div
          className="absolute inset-0 pointer-events-none rounded-3xl transition-opacity duration-300 z-30 overflow-hidden"
          style={{
            background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255,255,255,${glare.opacity}), transparent 60%)`
          }}
        />

        {/* Ambient Colored 3D Glow on Hover */}
        <div
          className="absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10 pointer-events-none"
          style={{ background: project.glowColor }}
        />

        {/* Card Main Body */}
        <div
          className="h-full bg-white/95 dark:bg-slate-800/90 backdrop-blur-xl rounded-3xl border border-slate-200/80 dark:border-slate-700/80 shadow-xl shadow-slate-200/50 dark:shadow-none flex flex-col justify-between overflow-hidden transition-all duration-300"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Top 3D Header Window Frame */}
          <div
            className={`relative p-5 sm:p-6 bg-gradient-to-br ${project.gradient} text-white overflow-hidden`}
            style={{ transform: "translateZ(20px)" }}
          >
            {/* Geometric Pattern Overlay */}
            <div className="absolute inset-0 opacity-15 pointer-events-none">
              <div
                className="w-full h-full"
                style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.4) 1px, transparent 0)`,
                  backgroundSize: '16px 16px'
                }}
              />
            </div>

            {/* Glowing Orbs */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-10 -left-10 w-28 h-28 bg-black/20 rounded-full blur-xl" />

            <div className="relative z-10">
              {/* Upper Bar: Badge + Live Status */}
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/25 backdrop-blur-md text-[11px] font-bold tracking-wide uppercase text-white border border-white/20">
                  <Sparkles size={11} className="text-amber-300" />
                  {project.badge}
                </span>

                {project.isLive ? (
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/30 backdrop-blur-md text-emerald-200 text-[10px] font-extrabold border border-emerald-400/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    LIVE
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/15 backdrop-blur-md text-white/80 text-[10px] font-bold border border-white/20">
                    Enterprise
                  </span>
                )}
              </div>

              {/* Title & App Icon */}
              <div className="flex items-start gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                  <Icon size={24} className="text-white" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-lg sm:text-xl font-extrabold text-white leading-tight truncate">
                      {project.name}
                    </h3>
                    {project.rating && (
                      <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-amber-400/25 text-amber-200 border border-amber-300/30 flex-shrink-0">
                        {project.rating}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-white/80 font-medium mt-1 truncate">
                    {project.company} {project.period && `• ${project.period}`}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Card Middle: Description & Highlights */}
          <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between" style={{ transform: "translateZ(15px)" }}>
            <div>
              <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3">
                {project.description}
              </p>

              {/* Key Bullet Highlights */}
              <div className="space-y-1.5 mb-5">
                {project.highlights.slice(0, 2).map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                    <CheckCircle2 size={13} className="text-emerald-500 flex-shrink-0" />
                    <span className="truncate">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Pills */}
            <div style={{ transform: "translateZ(25px)" }}>
              <div className="flex flex-wrap gap-1.5 mb-5">
                {project.technologies.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-[11px] font-semibold rounded-lg bg-slate-100 dark:bg-slate-700/60 text-slate-700 dark:text-slate-300 border border-slate-200/50 dark:border-slate-600/40"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 4 && (
                  <span className="px-2 py-1 text-[10px] font-bold rounded-lg bg-slate-100/70 dark:bg-slate-700/40 text-slate-400 dark:text-slate-400">
                    +{project.technologies.length - 4}
                  </span>
                )}
              </div>

              {/* Bottom Action Bar */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-700/70 flex items-center justify-between gap-2">
                <button
                  type="button"
                  onClick={() => onOpenDetails(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-1.5 px-2.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700/50"
                >
                  <Info size={14} />
                  <span>Specs & Details</span>
                </button>

                <div className="flex items-center gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors shadow-sm"
                      title="View GitHub Repository"
                    >
                      <Github size={15} />
                    </a>
                  )}

                  {project.playStoreUrl && (
                    <a
                      href={project.playStoreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white text-xs font-bold shadow-md shadow-emerald-500/20 transition-all hover:scale-105 active:scale-95"
                    >
                      <Play size={12} className="fill-white" />
                      <span>Play Store</span>
                    </a>
                  )}

                  {project.webUrl && (
                    <a
                      href={project.webUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-xs font-bold shadow-md shadow-blue-500/20 transition-all hover:scale-105 active:scale-95"
                    >
                      <span>Live Site</span>
                      <ArrowUpRight size={13} />
                    </a>
                  )}

                  {!project.playStoreUrl && !project.webUrl && (
                    <span className="text-[11px] font-semibold px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-400 dark:text-slate-400">
                      Private Enterprise
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

// ============================================
// MAIN FEATURED PROJECTS SECTION COMPONENT
// ============================================
export default function Projects() {
  const { darkMode } = useTheme()
  const [activeTab, setActiveTab] = useState<"all" | "mobile" | "web" | "enterprise">("all")
  const [searchQuery, setSearchQuery] = useState<string>("")
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null)

  // Filter projects by category and search query
  const filteredProjects = ALL_PROJECTS.filter((p) => {
    const matchesTab = activeTab === "all" || p.category === activeTab
    const q = searchQuery.toLowerCase().trim()
    const matchesSearch =
      q === "" ||
      p.name.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.company.toLowerCase().includes(q) ||
      p.badge.toLowerCase().includes(q) ||
      p.technologies.some((t) => t.toLowerCase().includes(q))

    return matchesTab && matchesSearch
  })

  const flagshipMobile = ALL_PROJECTS.find((p) => p.id === "calmate-ai")
  const flagshipWeb = ALL_PROJECTS.find((p) => p.id === "ayuryog-wellness")

  return (
    <section id="projects" className="py-20 sm:py-28 bg-slate-50 dark:bg-gray-900 transition-colors duration-500 relative overflow-hidden">
      {/* 3D Geometric Mesh Pattern */}
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
        <div className="absolute -top-32 left-1/4 w-[550px] h-[550px] bg-blue-500/10 dark:bg-blue-500/15 rounded-full blur-[140px]" />
        <div className="absolute top-1/2 -right-32 w-[600px] h-[600px] bg-purple-500/10 dark:bg-purple-500/15 rounded-full blur-[140px]" />
        <div className="absolute -bottom-32 left-1/3 w-[500px] h-[500px] bg-emerald-500/10 dark:bg-emerald-500/10 rounded-full blur-[140px]" />
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
            <span>Proven Production Track Record</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight">
            Featured <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">Engineering Projects</span>
          </h2>

          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-0.5 w-12 bg-gradient-to-r from-transparent to-blue-500/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-blue-500" />
            <div className="h-0.5 w-24 bg-gradient-to-r from-blue-500/60 via-purple-500/60 to-blue-500/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-purple-500" />
            <div className="h-0.5 w-12 bg-gradient-to-l from-transparent to-purple-500/60" />
          </div>

          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Production-grade mobile apps on Google Play, high-traffic SSR web platforms, and enterprise solutions architected over 8+ years of engineering leadership.
          </p>
        </motion.div>

        {/* ========================================================
            PART 1: 3D DUAL FLAGSHIP SPOTLIGHT (TOP HERO CARDS)
        ======================================================== */}
        <div className="mb-14 sm:mb-18">
          <div className="flex items-center gap-2 mb-6 px-1">
            <Flame className="w-5 h-5 text-amber-500" />
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
              Flagship Production Innovations
            </h3>
            <span className="ml-auto text-xs font-semibold px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
              High-Impact Releases
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {/* Flagship 1: Calmate AI */}
            {flagshipMobile && (
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-emerald-950/40 via-slate-900/90 to-slate-900 border border-emerald-500/30 shadow-2xl shadow-emerald-500/10 overflow-hidden text-white flex flex-col justify-between"
              >
                {/* 3D Ambient Glow Sphere */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10">
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-500/30">
                      <Bot size={13} />
                      AI Flagship Mobile App
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-400">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      Google Play Store
                    </span>
                  </div>

                  <h4 className="text-2xl sm:text-3xl font-extrabold mb-2 text-white">
                    {flagshipMobile.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                    {flagshipMobile.description}
                  </p>

                  <div className="grid grid-cols-2 gap-3 mb-6">
                    <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                      <p className="text-[11px] text-slate-400">AI Vision Engine</p>
                      <p className="text-sm sm:text-base font-bold text-emerald-400">Instant Food Scan</p>
                    </div>
                    <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                      <p className="text-[11px] text-slate-400">Play Store Rating</p>
                      <p className="text-sm sm:text-base font-bold text-amber-400">4.8 ★ Highly Rated</p>
                    </div>
                  </div>
                </div>

                <div className="relative z-10 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {flagshipMobile.technologies.slice(0, 4).map((tech) => (
                      <span key={tech} className="text-[11px] font-semibold px-2.5 py-1 rounded-lg bg-white/10 text-slate-200">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {flagshipMobile.playStoreUrl && (
                    <a
                      href={flagshipMobile.playStoreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white text-xs sm:text-sm font-bold shadow-lg shadow-emerald-500/25 transition-transform hover:scale-105 active:scale-95"
                    >
                      <Play size={14} className="fill-white" />
                      <span>Explore on Play Store</span>
                    </a>
                  )}
                </div>
              </motion.div>
            )}

            {/* Flagship 2: Ayuryog Wellness Platform */}
            {flagshipWeb && (
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-purple-950/40 via-slate-900/90 to-slate-900 border border-purple-500/30 shadow-2xl shadow-purple-500/10 overflow-hidden text-white flex flex-col justify-between"
              >
                {/* 3D Ambient Glow Sphere */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10">
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs font-bold border border-purple-500/30">
                      <Globe size={13} />
                      Next.js 14 Web Platform
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-purple-400">
                      <span className="w-2 h-2 rounded-full bg-purple-400 animate-ping" />
                      Live Production
                    </span>
                  </div>

                  <h4 className="text-2xl sm:text-3xl font-extrabold mb-2 text-white">
                    {flagshipWeb.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                    {flagshipWeb.description}
                  </p>

                  <div className="grid grid-cols-2 gap-3 mb-6">
                    <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                      <p className="text-[11px] text-slate-400">Architecture</p>
                      <p className="text-sm sm:text-base font-bold text-purple-300">Next.js 14 App Router</p>
                    </div>
                    <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                      <p className="text-[11px] text-slate-400">SEO & Speed</p>
                      <p className="text-sm sm:text-base font-bold text-emerald-400">Sub-Second TTFB</p>
                    </div>
                  </div>
                </div>

                <div className="relative z-10 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {flagshipWeb.technologies.slice(0, 4).map((tech) => (
                      <span key={tech} className="text-[11px] font-semibold px-2.5 py-1 rounded-lg bg-white/10 text-slate-200">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2">
                    {flagshipWeb.githubUrl && (
                      <a
                        href={flagshipWeb.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 transition-colors"
                        title="GitHub Repository"
                      >
                        <Github size={16} />
                      </a>
                    )}
                    {flagshipWeb.webUrl && (
                      <a
                        href={flagshipWeb.webUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white text-xs sm:text-sm font-bold shadow-lg shadow-purple-500/25 transition-transform hover:scale-105 active:scale-95"
                      >
                        <span>Visit Website</span>
                        <ArrowUpRight size={14} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>

        {/* ========================================================
            PART 2: INTERACTIVE CONTROLS (SEARCH & CATEGORY TABS)
        ======================================================== */}
        <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-2xl rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-700 shadow-xl shadow-slate-200/40 dark:shadow-none mb-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            
            {/* Category Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto w-full lg:w-auto pb-2 lg:pb-0 scrollbar-none">
              {[
                { key: "all", label: "All Projects", count: ALL_PROJECTS.length, icon: Layers },
                { key: "mobile", label: "AI & Mobile Apps", count: ALL_PROJECTS.filter((p) => p.category === "mobile").length, icon: Smartphone },
                { key: "web", label: "Web Platforms", count: ALL_PROJECTS.filter((p) => p.category === "web").length, icon: Globe },
                { key: "enterprise", label: "Enterprise Systems", count: ALL_PROJECTS.filter((p) => p.category === "enterprise").length, icon: ShieldCheck }
              ].map((tab) => {
                const Icon = tab.icon
                const isActive = activeTab === tab.key
                return (
                  <button
                    key={tab.key}
                    type="button"
                    onClick={() => setActiveTab(tab.key as any)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 flex-shrink-0 cursor-pointer ${
                      isActive
                        ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/25 scale-[1.02]"
                        : "bg-slate-100 dark:bg-slate-700/60 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
                    }`}
                  >
                    <Icon size={14} />
                    <span>{tab.label}</span>
                    <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                      isActive ? "bg-white/20 text-white" : "bg-slate-200 dark:bg-slate-600 text-slate-500 dark:text-slate-400"
                    }`}>
                      {tab.count}
                    </span>
                  </button>
                )
              })}
            </div>

            {/* Instant Real-Time Search Box */}
            <div className="relative w-full lg:w-72 flex-shrink-0">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search projects, stacks, tags..."
                className="w-full pl-9 pr-8 py-2 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm text-slate-800 dark:text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                >
                  <X size={14} />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* ========================================================
            PART 3: 3D PROJECT GRID
        ======================================================== */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-16 bg-white/50 dark:bg-slate-800/40 rounded-3xl border border-dashed border-slate-300 dark:border-slate-700">
            <p className="text-slate-500 dark:text-slate-400 text-sm">
              No projects found matching &ldquo;{searchQuery}&rdquo;.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery("")
                setActiveTab("all")
              }}
              className="mt-3 text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProjects.map((project, index) => (
              <Project3DCard
                key={project.id}
                project={project}
                index={index}
                onOpenDetails={(p) => setSelectedProject(p)}
              />
            ))}
          </div>
        )}

      </div>

      {/* ========================================================
          PART 4: INTERACTIVE 3D SPECIFICATION MODAL
      ======================================================== */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/60 backdrop-blur-md"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-2xl bg-white dark:bg-slate-800 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-700 overflow-hidden z-10"
            >
              {/* Header */}
              <div className={`p-6 sm:p-8 bg-gradient-to-br ${selectedProject.gradient} text-white relative`}>
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-5 right-5 p-2 rounded-full bg-black/20 hover:bg-black/40 text-white transition-colors"
                >
                  <X size={18} />
                </button>

                <div className="inline-block px-3 py-1 rounded-full bg-black/25 text-xs font-bold uppercase tracking-wider mb-2">
                  {selectedProject.badge}
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold">{selectedProject.name}</h3>
                <p className="text-xs sm:text-sm text-white/80 mt-1">
                  {selectedProject.company} {selectedProject.period && `• ${selectedProject.period}`}
                </p>
              </div>

              {/* Body */}
              <div className="p-6 sm:p-8 max-h-[70vh] overflow-y-auto">
                <h4 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-2">
                  System Architecture & Overview
                </h4>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6">
                  {selectedProject.description}
                </p>

                <h4 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-3">
                  Key Technical Deliverables
                </h4>
                <div className="space-y-2.5 mb-6">
                  {selectedProject.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                      <CheckCircle2 size={16} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                <h4 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-3">
                  Production Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2 mb-8">
                  {selectedProject.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 text-xs font-semibold rounded-xl bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-600"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Modal Footer Actions */}
                <div className="pt-4 border-t border-slate-100 dark:border-slate-700 flex flex-wrap items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(null)}
                    className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-bold hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
                  >
                    Close Specs
                  </button>

                  {selectedProject.playStoreUrl && (
                    <a
                      href={selectedProject.playStoreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white text-xs font-bold shadow-md shadow-emerald-500/25 hover:scale-105 active:scale-95 transition-transform"
                    >
                      <Play size={13} className="fill-white" />
                      <span>Open on Google Play</span>
                    </a>
                  )}

                  {selectedProject.webUrl && (
                    <a
                      href={selectedProject.webUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-bold shadow-md shadow-blue-500/25 hover:scale-105 active:scale-95 transition-transform"
                    >
                      <span>Visit Live Platform</span>
                      <ArrowUpRight size={14} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}
