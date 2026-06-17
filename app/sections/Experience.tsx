"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Briefcase, Calendar, MapPin, ChevronDown, ExternalLink, Code2, Sparkles, Building2, ArrowUpRight } from "lucide-react"
import { experiences } from "@/lib/data"
import Image from "next/image"

export default function Experience() {
  const [expandedId, setExpandedId] = useState<number | null>(1)
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section id="experience" className="py-20 sm:py-28 bg-slate-50 dark:bg-gray-900 transition-colors duration-500 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/3 to-purple-500/3 dark:from-blue-500/5 dark:to-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.7, ease: "easeOut" }} 
          className="text-center mb-16 sm:mb-20"
        >
          <motion.div 
            initial={{ scale: 0 }} 
            whileInView={{ scale: 1 }} 
            viewport={{ once: true }} 
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-800/50 text-blue-600 dark:text-blue-400 text-xs sm:text-sm font-medium mb-6"
          >
            <Sparkles size={14} />
            <span>Career Journey</span>
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-5 tracking-tight">
            Work <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 dark:from-blue-400 dark:via-purple-400 dark:to-blue-400 bg-clip-text text-transparent">Experience</span>
          </h2>
          
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-blue-500/50" />
            <div className="w-2 h-2 rounded-full bg-blue-500" />
            <div className="h-px w-24 bg-gradient-to-r from-blue-500/50 via-purple-500/50 to-blue-500/50" />
            <div className="w-2 h-2 rounded-full bg-purple-500" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-purple-500/50" />
          </div>
          
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            A journey through my professional career, showcasing growth from Application and Web Developer to Team Leader
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Line - Desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-px">
            <div className="h-full w-full bg-gradient-to-b from-transparent via-blue-500/30 to-transparent dark:via-blue-400/30" />
          </div>
          
          {/* Vertical Line - Mobile */}
          <div className="md:hidden absolute left-6 top-0 bottom-0 w-px">
            <div className="h-full w-full bg-gradient-to-b from-transparent via-blue-500/30 to-transparent dark:via-blue-400/30" />
          </div>

          {experiences.map((exp, index) => {
            const isLeft = index % 2 === 0
            const isExpanded = expandedId === exp.id
            const isHovered = hoveredId === exp.id

            return (
              <motion.div 
                key={exp.id} 
                initial={{ opacity: 0, y: 50 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true, margin: "-50px" }} 
                transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }} 
                className="relative flex items-start mb-12 md:mb-20"
                onMouseEnter={() => setHoveredId(exp.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Timeline Dot */}
                <motion.div 
                  animate={{ 
                    scale: isHovered ? 1.3 : 1,
                    boxShadow: isHovered 
                      ? "0 0 20px rgba(59, 130, 246, 0.5)" 
                      : "0 0 0px rgba(59, 130, 246, 0)"
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute left-6 md:left-1/2 w-4 h-4 bg-white dark:bg-slate-950 rounded-full border-[3px] border-blue-500 dark:border-blue-400 md:-translate-x-1/2 mt-7 z-20 shadow-sm"
                />

                {/* Mobile Layout */}
                <div className="md:hidden ml-14 w-full">
                  <ExperienceCard 
                    exp={exp} 
                    isExpanded={isExpanded} 
                    setExpandedId={setExpandedId} 
                    index={index}
                  />
                </div>

                {/* Desktop Layout */}
                <div className="hidden md:flex w-full items-start">
                  {isLeft ? (
                    <>
                      <div className="w-[45%] pr-12 flex justify-end">
                        <ExperienceCard 
                          exp={exp} 
                          isExpanded={isExpanded} 
                          setExpandedId={setExpandedId} 
                          index={index}
                          align="right"
                        />
                      </div>
                      <div className="w-[10%]" />
                      <div className="w-[45%] pl-12" />
                    </>
                  ) : (
                    <>
                      <div className="w-[45%] pr-12" />
                      <div className="w-[10%]" />
                      <div className="w-[45%] pl-12">
                        <ExperienceCard 
                          exp={exp} 
                          isExpanded={isExpanded} 
                          setExpandedId={setExpandedId} 
                          index={index}
                          align="left"
                        />
                      </div>
                    </>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// ============================================
// EXPERIENCE CARD COMPONENT
// ============================================
function ExperienceCard({ 
  exp, 
  isExpanded, 
  setExpandedId, 
  index,
  align = "left"
}: { 
  exp: typeof experiences[0]
  isExpanded: boolean
  setExpandedId: (id: number | null) => void 
  index: number
  align?: "left" | "right"
}) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div 
      whileHover={{ y: -4 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative w-full max-w-lg"
    >
      {/* Connector Line (Desktop only) */}
      <div className={`hidden md:block absolute top-7 ${align === "right" ? "-right-12 w-12" : "-left-12 w-12"} h-px bg-gradient-to-r ${align === "right" ? "from-blue-500/40 to-transparent" : "from-transparent to-blue-500/40"} dark:from-blue-400/40 dark:to-blue-400/40`} />

      {/* Date Badge - Floating */}
      <motion.div 
        initial={{ opacity: 0, x: align === "right" ? 20 : -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 + index * 0.1 }}
        className={`hidden md:flex absolute -top-3 ${align === "right" ? "-right-4" : "-left-4"} items-center gap-1.5 px-3 py-1 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm text-xs font-medium text-slate-600 dark:text-slate-400 z-10`}
      >
        <Calendar size={12} />
        <span>{exp.period}</span>
      </motion.div>

      {/* Main Card */}
      <div className="relative bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-5 sm:p-7 border border-slate-200/60 dark:border-slate-700/60 shadow-lg shadow-slate-200/50 dark:shadow-none hover:shadow-xl hover:shadow-blue-500/10 dark:hover:shadow-blue-500/5 transition-all duration-500 overflow-hidden group">
        
        {/* Top Gradient Bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Subtle Glow on Hover */}
        <motion.div 
          animate={{ opacity: isHovered ? 0.03 : 0 }}
          className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 pointer-events-none"
        />

        {/* Header */}
        <div className="flex items-start gap-4 mb-4">
          {/* Icon Container */}
          <motion.div 
            whileHover={{ rotate: [0, -10, 10, 0] }}
            transition={{ duration: 0.5 }}
            className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 dark:from-blue-600 dark:to-purple-700 flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-500/25 dark:shadow-blue-500/20"
          >
            <Briefcase className="w-6 h-6 text-white" />
            <div className="absolute inset-0 rounded-2xl bg-white/20" />
          </motion.div>

          <div className="flex-1 min-w-0 pt-1">
            <div className="flex items-start justify-between gap-2">
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {exp.role}
                </h3>
                <div className="flex items-center gap-2 mt-1">
                  <Building2 size={14} className="text-blue-500 dark:text-blue-400" />
                  <p className="text-blue-600 dark:text-blue-400 font-semibold text-sm sm:text-base">{exp.company}</p>
                </div>
              </div>
              <motion.div 
                animate={{ rotate: isExpanded ? 180 : 0 }}
                className="flex-shrink-0 mt-1"
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${isExpanded ? 'bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400' : 'bg-slate-100 dark:bg-slate-800 text-slate-400'}`}>
                  <ChevronDown size={16} />
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Meta Info */}
        <div className="flex flex-wrap items-center gap-3 mb-4 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
          <span className="md:hidden flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800">
            <Calendar size={13} />{exp.period}
          </span>
          <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800">
            <MapPin size={13} />{exp.location}
          </span>
        </div>

        {/* Description */}
        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-5">
          {exp.description}
        </p>

        {/* Expand Button */}
        <button 
          onClick={() => setExpandedId(isExpanded ? null : exp.id)} 
          className="group/btn flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
        >
          <span>{isExpanded ? 'Hide Details' : 'View Details'}</span>
          <motion.div 
            animate={{ x: isHovered && !isExpanded ? 4 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ArrowUpRight size={16} className={`transition-transform duration-300 ${isExpanded ? 'rotate-90' : ''}`} />
          </motion.div>
        </button>

        {/* Expanded Content */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div 
              initial={{ opacity: 0, height: 0, marginTop: 0 }} 
              animate={{ opacity: 1, height: "auto", marginTop: 20 }} 
              exit={{ opacity: 0, height: 0, marginTop: 0 }} 
              transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }} 
              className="overflow-hidden"
            >
              <div className="pt-5 border-t border-slate-200 dark:border-slate-700/80 space-y-5">
                
                {/* Responsibilities */}
                <div>
                  <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-3 flex items-center gap-2 text-sm sm:text-base">
                    <div className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                      <Code2 size={16} className="text-blue-600 dark:text-blue-400" />
                    </div>
                    Responsibilities
                  </h4>
                  <ul className="space-y-2.5 ml-1">
                    {exp.responsibilities.map((resp, i) => (
                      <motion.li 
                        key={i} 
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400 leading-relaxed"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mt-2 flex-shrink-0" />
                        <span>{resp}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-3 text-sm sm:text-base">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <motion.span 
                        key={tech} 
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.05 }}
                        className="px-3 py-1.5 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 text-blue-700 dark:text-blue-300 text-xs font-semibold rounded-xl border border-blue-200/60 dark:border-blue-800/40 hover:border-blue-300 dark:hover:border-blue-700 transition-colors cursor-default"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Projects */}
                {exp.projects.length > 0 && (
                  <div>
                    <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-3 text-sm sm:text-base">Projects</h4>
                    <div className="space-y-3">
                      {exp.projects.map((project, i) => (
                        <motion.div 
                          key={project.name} 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className="group/project bg-slate-50 dark:bg-slate-800/50 rounded-xl p-4 border border-slate-200/60 dark:border-slate-700/40 hover:border-blue-300 dark:hover:border-blue-800/60 transition-all duration-300"
                        >
                          <div className="flex items-center justify-between mb-1.5">
                            <h5 className="font-semibold text-slate-800 dark:text-slate-200 text-sm">{project.name}</h5>
                            {project.link && (
                              <motion.a 
                                whileHover={{ scale: 1.1, rotate: 15 }}
                                href={project.link} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="text-blue-500 dark:text-blue-400 hover:text-blue-600"
                              >
                                <ExternalLink size={14} />
                              </motion.a>
                            )}
                          </div>
                          <p className="text-xs text-slate-500 dark:text-slate-500 leading-relaxed">{project.description}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}