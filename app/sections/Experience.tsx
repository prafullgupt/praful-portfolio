"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  ExternalLink, 
  Code2, 
  Sparkles, 
  Building2, 
  CheckCircle2, 
  Layers,
  ArrowRight,
  TrendingUp,
  Laptop
} from "lucide-react"
import { experiences } from "@/lib/data"

export default function Experience() {
  const [activeId, setActiveId] = useState<number>(experiences[0]?.id || 1)
  const activeExp = experiences.find((e) => e.id === activeId) || experiences[0]

  return (
    <section id="experience" className="py-20 sm:py-28 bg-slate-50 dark:bg-gray-900 transition-colors duration-500 relative overflow-hidden">
      {/* Background Decorative Mesh & Glows */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #3b82f6 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} 
        />
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/15 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/10 dark:bg-purple-500/15 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.6, ease: "easeOut" }} 
          className="text-center mb-12 sm:mb-16"
        >
          <motion.div 
            initial={{ scale: 0 }} 
            whileInView={{ scale: 1 }} 
            viewport={{ once: true }} 
            transition={{ delay: 0.1, type: "spring", stiffness: 220 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800/60 text-blue-600 dark:text-blue-400 text-xs sm:text-sm font-semibold mb-4 shadow-sm"
          >
            <Sparkles size={14} className="animate-pulse" />
            <span>Professional Career Journey</span>
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight">
            Work <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">Experience</span>
          </h2>
          
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-0.5 w-12 bg-gradient-to-r from-transparent to-blue-500/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-blue-500" />
            <div className="h-0.5 w-24 bg-gradient-to-r from-blue-500/60 via-purple-500/60 to-blue-500/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-purple-500" />
            <div className="h-0.5 w-12 bg-gradient-to-l from-transparent to-purple-500/60" />
          </div>
          
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Demonstrated track record of technical leadership, architecting scalable mobile applications, and mentoring high-performing engineering teams.
          </p>
        </motion.div>

        {/* Experience Showcase Layout - No Empty Space on Desktop! */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          {/* Left Column (Navigation List of Companies / Roles) */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            <div className="flex items-center justify-between px-1 mb-1">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 flex items-center gap-1.5">
                <TrendingUp size={14} /> Career Timeline
              </span>
              <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-2.5 py-0.5 rounded-full border border-blue-200/50 dark:border-blue-800/50">
                {experiences.length} Positions
              </span>
            </div>

            {/* Role / Company Selectors */}
            <div className="flex flex-row lg:flex-col gap-3 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
              {experiences.map((exp, idx) => {
                const isActive = exp.id === activeId
                return (
                  <motion.button
                    key={exp.id}
                    onClick={() => setActiveId(exp.id)}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    className={`text-left p-4 sm:p-5 rounded-2xl transition-all duration-300 relative border flex-shrink-0 w-[280px] sm:w-[320px] lg:w-full ${
                      isActive
                        ? "bg-white dark:bg-slate-800/90 border-blue-500 dark:border-blue-500 shadow-xl shadow-blue-500/10 dark:shadow-blue-500/5"
                        : "bg-white/60 dark:bg-slate-900/60 hover:bg-white dark:hover:bg-slate-800/60 border-slate-200/80 dark:border-slate-800 shadow-sm"
                    }`}
                  >
                    {/* Active Indicator Accent Bar */}
                    {isActive && (
                      <motion.div
                        layoutId="activeExperienceIndicator"
                        className="absolute left-0 top-3 bottom-3 w-1.5 bg-gradient-to-b from-blue-500 to-purple-600 rounded-r-full"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}

                    <div className="flex items-start gap-3.5">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${
                        isActive
                          ? "bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-md shadow-blue-500/30"
                          : "bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400"
                      }`}>
                        <Briefcase size={18} />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-1 mb-1">
                          <span className={`text-xs font-semibold px-2 py-0.5 rounded-md ${
                            isActive
                              ? "bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300"
                              : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                          }`}>
                            {exp.period}
                          </span>
                        </div>
                        <h3 className={`text-sm sm:text-base font-bold truncate ${
                          isActive 
                            ? "text-slate-900 dark:text-white" 
                            : "text-slate-700 dark:text-slate-300"
                        }`}>
                          {exp.role}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 truncate mt-0.5">
                          {exp.company}
                        </p>
                      </div>
                    </div>
                  </motion.button>
                )
              })}
            </div>

            {/* Quick Experience Stats Box */}
            <div className="hidden lg:block mt-2 p-5 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-700 text-white shadow-xl shadow-blue-600/20 relative overflow-hidden">
              <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-white/10 rounded-full blur-xl pointer-events-none" />
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center">
                  <Laptop size={18} />
                </div>
                <div>
                  <h4 className="font-bold text-sm">Tech Leadership</h4>
                  <p className="text-xs text-blue-100">8+ Years Experience</p>
                </div>
              </div>
              <p className="text-xs text-blue-100/90 leading-relaxed mt-2">
                Delivered 35+ mobile & web products across AI, Fitness, eCommerce, and Utility domains.
              </p>
            </div>
          </div>

          {/* Right Column (Detailed Showcase Card) */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeExp.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="bg-white/85 dark:bg-slate-800/85 backdrop-blur-xl rounded-3xl p-6 sm:p-8 md:p-10 border border-slate-200/80 dark:border-slate-700 shadow-xl shadow-slate-200/50 dark:shadow-none relative overflow-hidden"
              >
                {/* Decorative Top Accent Glow */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600" />

                {/* Role & Company Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100 dark:border-slate-700/80">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                      {activeExp.role}
                    </h3>
                    <div className="flex flex-wrap items-center gap-3 mt-2">
                      <span className="inline-flex items-center gap-1.5 text-base font-bold text-blue-600 dark:text-blue-400">
                        <Building2 size={18} />
                        {activeExp.company}
                      </span>
                      <span className="text-slate-300 dark:text-slate-600">•</span>
                      <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                        <MapPin size={15} className="text-slate-400" />
                        {activeExp.location}
                      </span>
                    </div>
                  </div>

                  {/* Period Badge */}
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-50 dark:bg-blue-950/80 border border-blue-200/60 dark:border-blue-800/60 text-blue-700 dark:text-blue-300 text-xs sm:text-sm font-bold shadow-sm self-start sm:self-center">
                    <Calendar size={15} />
                    <span>{activeExp.period}</span>
                  </div>
                </div>

                {/* Overview Description */}
                <div className="my-6 p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800">
                  <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
                    {activeExp.description}
                  </p>
                </div>

                {/* Key Responsibilities */}
                {activeExp.responsibilities && activeExp.responsibilities.length > 0 && (
                  <div className="mb-8">
                    <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                        <Code2 size={18} />
                      </div>
                      Key Responsibilities & Impact
                    </h4>
                    <div className="grid grid-cols-1 gap-3">
                      {activeExp.responsibilities.map((resp, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.05 }}
                          className="flex items-start gap-3 p-3.5 rounded-xl bg-white/60 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/60 hover:border-blue-200 dark:hover:border-blue-900/50 transition-colors"
                        >
                          <CheckCircle2 size={18} className="text-blue-500 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                          <span className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                            {resp}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Tech Stack Pills */}
                {activeExp.technologies && activeExp.technologies.length > 0 && (
                  <div className="mb-8">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3 flex items-center gap-1.5">
                      <Layers size={14} /> Technologies & Tools
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {activeExp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold bg-slate-100 dark:bg-slate-700/60 text-slate-800 dark:text-slate-200 border border-slate-200/80 dark:border-slate-600/60 hover:bg-blue-50 dark:hover:bg-blue-950/40 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-200 dark:hover:border-blue-800 transition-all cursor-default"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Featured Products / Projects in this role */}
                {activeExp.projects && activeExp.projects.length > 0 && (
                  <div className="pt-6 border-t border-slate-100 dark:border-slate-700/80">
                    <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                      <Sparkles size={18} className="text-purple-500" />
                      Key Projects Delivered
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {activeExp.projects.map((proj) => (
                        <div
                          key={proj.name}
                          className="p-4 rounded-2xl bg-slate-50/80 dark:bg-slate-900/50 border border-slate-200/70 dark:border-slate-700/60 hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-md transition-all group flex flex-col justify-between"
                        >
                          <div>
                            <div className="flex items-center justify-between mb-1.5">
                              <h5 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                {proj.name}
                              </h5>
                              {proj.link && (
                                <a
                                  href={proj.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="p-1 rounded-lg text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors"
                                  aria-label={`View ${proj.name}`}
                                >
                                  <ExternalLink size={16} />
                                </a>
                              )}
                            </div>
                            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3">
                              {proj.description}
                            </p>
                          </div>
                          {proj.link && (
                            <a
                              href={proj.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline mt-3"
                            >
                              <span>Explore Project</span>
                              <ArrowRight size={13} />
                            </a>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
