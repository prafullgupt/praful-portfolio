"use client"

import { motion, useInView, AnimatePresence } from "framer-motion"
import { useTheme } from "@/app/context/ThemeContext"
import { Code2, Wrench, Layers, Languages, TrendingUp, Zap, Sparkles, ChevronDown, ChevronUp } from "lucide-react"
import { skillCategories } from "@/lib/data";
import { useRef, useEffect, useState } from "react"

// Animated counter for percentage
function AnimatedCounter({ target, delay = 0 }: { target: number; delay?: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return
    const timeout = setTimeout(() => {
      let start = 0
      const duration = 1200
      const step = target / (duration / 16)
      const timer = setInterval(() => {
        start += step
        if (start >= target) {
          setCount(target)
          clearInterval(timer)
        } else {
          setCount(Math.floor(start))
        }
      }, 16)
      return () => clearInterval(timer)
    }, delay * 1000)
    return () => clearTimeout(timeout)
  }, [isInView, target, delay])

  return <span ref={ref}>{count}%</span>
}

// Animated progress bar with glow effect
function ProgressBar({ level, color, delay = 0, isDark }: { level: number; color: string; delay?: number; isDark: boolean }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })

  return (
    <div className="flex items-center gap-3" ref={ref}>
      <div className="flex-1 h-3 sm:h-4 bg-gray-200 dark:bg-gray-700/50 rounded-full overflow-hidden relative">
        {/* Background grid pattern */}
        {/* <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `repeating-linear-gradient(90deg, transparent, transparent 8px, ${isDark ? '#fff' : '#000'} 8px, ${isDark ? '#fff' : '#000'} 9px)`
        }} /> */}

        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.5, delay: delay, ease: [0.22, 1, 0.36, 1] }}
          className={`h-full rounded-full ${color} relative overflow-hidden`}
          style={{
            boxShadow: isInView ? `0 0 20px ${color.replace('bg-', '').replace('500', '400')}, 0 0 40px ${color.replace('bg-', '').replace('500', '300')}40` : 'none'
          }}
        >
          {/* Shimmer effect */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)',
            }}
            animate={{ x: ['-200%', '200%'] }}
            transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 2, ease: 'easeInOut' }}
          />

          {/* Top highlight */}
          <div className="absolute top-0 left-0 right-0 h-[40%] bg-white/20 rounded-t-full" />
        </motion.div>
      </div>
      <motion.span
        initial={{ opacity: 0, scale: 0.5 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
        transition={{ duration: 0.5, delay: delay + 0.5 }}
        className="text-xs sm:text-sm font-bold text-gray-600 dark:text-gray-300 w-12 text-right tabular-nums"
      >
        <AnimatedCounter target={level} delay={delay} />
      </motion.span>
    </div>
  )
}

// Category card with View More functionality
function CategoryCard({ category, index, darkMode }: { category: typeof skillCategories[0]; index: number; darkMode: boolean }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const [expanded, setExpanded] = useState(false)
  const INITIAL_COUNT = 5
  const hasMore = category.skills.length > INITIAL_COUNT
  const visibleSkills = expanded ? category.skills : category.skills.slice(0, INITIAL_COUNT)
  const hiddenCount = category.skills.length - INITIAL_COUNT
  const avg = Math.round(category.skills.reduce((acc, s) => acc + s.level, 0) / category.skills.length)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, rotateX: 10 }}
      animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        layout
        whileHover={{ y: -8, scale: 1.02 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className={`${category.bgColor} rounded-3xl p-6 sm:p-8 border ${category.borderColor} 
          hover:shadow-2xl transition-shadow duration-500 relative overflow-hidden group`}
        style={{ perspective: '1000px' }}
      >
        {/* Floating particles on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute w-2 h-2 rounded-full ${category.progressColor} opacity-40`}
              animate={{
                y: [0, -30, 0],
                x: [0, (i % 2 === 0 ? 20 : -20), 0],
                opacity: [0, 0.6, 0],
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.3,
                ease: 'easeInOut',
              }}
              style={{
                left: `${15 + i * 15}%`,
                bottom: '20%',
              }}
            />
          ))}
        </div>

        {/* Gradient orb background */}
        <div className={`absolute -top-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-br ${category.color} opacity-5 blur-3xl group-hover:opacity-10 transition-opacity duration-500`} />

        {/* Category Header */}
        <div className="flex items-center gap-4 mb-6 sm:mb-8 relative z-10">
          <motion.div
            whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
            transition={{ duration: 0.5 }}
            className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${darkMode ? category.darkColor : category.color} 
              flex items-center justify-center flex-shrink-0 shadow-lg relative overflow-hidden`}
          >
            <div className="absolute inset-0 bg-white/10" />
            <category.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white relative z-10" />
          </motion.div>
          <div>
            <h3 className={`text-lg sm:text-xl font-bold ${darkMode ? "text-white" : "text-gray-800"}`}>
              {category.title}
            </h3>
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1">
              {category.description}
            </p>
          </div>
        </div>

        {/* Skills List with Progress Bars */}
        <div className="space-y-3 sm:space-y-4 relative z-10">
          <AnimatePresence mode="popLayout">
            {visibleSkills.map((skill, skillIndex) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, x: -30, height: 0 }}
                animate={{ opacity: 1, x: 0, height: "auto" }}
                exit={{ opacity: 0, x: -30, height: 0 }}
                transition={{ delay: skillIndex * 0.04, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="group/skill"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className={`text-xs sm:text-sm font-semibold ${darkMode ? "text-gray-200" : "text-gray-700"} 
                    group-hover/skill:${category.textColor} transition-colors duration-300 flex items-center gap-2`}>
                    {skill.level >= 95 && (
                      <motion.span
                        animate={{ rotate: [0, 15, -15, 0] }}
                        transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                      >
                        <Zap className="w-3 h-3 text-yellow-500" />
                      </motion.span>
                    )}
                    {skill.name}
                  </span>
                </div>
                <ProgressBar
                  level={skill.level}
                  color={darkMode ? category.darkColor.replace("from-", "bg-").split(" ")[0] : category.progressColor}
                  delay={skillIndex * 0.06}
                  isDark={darkMode}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* View More / View Less Button */}
        {hasMore && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-5 sm:mt-6 relative z-10"
          >
            <motion.button
              onClick={() => setExpanded(!expanded)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full py-3 px-4 rounded-xl border ${category.borderColor} 
                ${category.bgColor} ${category.textColor} font-semibold text-sm sm:text-base
                flex items-center justify-center gap-2 transition-all duration-300
                hover:shadow-md hover:border-opacity-50`}
            >
              <AnimatePresence mode="wait">
                {expanded ? (
                  <motion.span
                    key="less"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-2"
                  >
                    <ChevronUp className="w-4 h-4" />
                    View Less
                  </motion.span>
                ) : (
                  <motion.span
                    key="more"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-2"
                  >
                    <ChevronDown className="w-4 h-4" />
                    View More ({hiddenCount} more)
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </motion.div>
        )}

        {/* Category Summary with animated ring */}
        <div className={`mt-5 sm:mt-6 pt-5 border-t ${category.borderColor} flex items-center justify-between relative z-10`}>
          <div className="flex items-center gap-2">
            <Sparkles className={`w-4 h-4 ${category.textColor}`} />
            <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-medium">
              Average Proficiency
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="relative w-10 h-10">
              <svg className="w-10 h-10 -rotate-90" viewBox="0 0 36 36">
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke={darkMode ? "#374151" : "#e5e7eb"}
                  strokeWidth="3"
                />
                <motion.path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeDasharray={`${avg}, 100`}
                  className={category.textColor}
                  initial={{ strokeDasharray: "0, 100" }}
                  animate={isInView ? { strokeDasharray: `${avg}, 100` } : {}}
                  transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                />
              </svg>
              <span className={`absolute inset-0 flex items-center justify-center text-[10px] font-bold ${category.textColor}`}>
                {avg}%
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Skills() {
  const { darkMode } = useTheme()
  const headerRef = useRef<HTMLDivElement>(null)
  const headerInView = useInView(headerRef, { once: true })

  return (
    <section id="skills" className={`py-20 sm:py-28 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} relative overflow-hidden`}>
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-14 sm:mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={headerInView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-100 dark:bg-blue-500/10 
              text-blue-600 dark:text-blue-400 text-sm font-semibold mb-6 border border-blue-200 dark:border-blue-500/20"
          >
            <TrendingUp className="w-4 h-4" />
            <span>My Expertise</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-5 ${darkMode ? "text-white" : "text-gray-900"}`}
          >
            Technical{" "}
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Skills
            </span>
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={headerInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="w-20 sm:w-24 h-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full"
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={headerInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-5 text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-base sm:text-lg px-4"
          >
            A comprehensive toolkit built over years of hands-on mobile & web development experience
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {skillCategories.map((category, index) => (
            <CategoryCard key={category.title} category={category} index={index} darkMode={darkMode} />
          ))}
        </div>

        {/* Overall Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className={`mt-14 sm:mt-20 p-8 sm:p-10 rounded-3xl border ${darkMode ? "bg-gray-800/50 border-gray-700/50 backdrop-blur-sm" : "bg-white border-gray-200"} 
            text-center relative overflow-hidden`}
        >
          <div className={`absolute inset-0 bg-gradient-to-r ${darkMode ? 'from-blue-500/5 to-purple-500/5' : 'from-blue-50 to-purple-50'} opacity-50`} />

          <h3 className={`text-xl sm:text-2xl font-bold mb-6 ${darkMode ? "text-white" : "text-gray-900"} relative z-10`}>
            Overall Skill Distribution
          </h3>

          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 relative z-10">
            {skillCategories.map((cat, i) => {
              const avg = Math.round(cat.skills.reduce((acc, s) => acc + s.level, 0) / cat.skills.length)
              return (
                <motion.div
                  key={cat.title}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className={`px-5 py-3 rounded-2xl ${cat.bgColor} border ${cat.borderColor} cursor-default`}
                >
                  <div className="flex items-center gap-2">
                    <cat.icon className={`w-4 h-4 ${cat.textColor}`} />
                    <span className={`text-sm font-bold ${cat.textColor}`}>
                      {cat.title}: {avg}%
                    </span>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}