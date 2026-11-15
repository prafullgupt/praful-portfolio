"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  GraduationCap, 
  Calendar, 
  Award, 
  BookOpen, 
  Trophy, 
  Sparkles, 
  CheckCircle, 
  Medal, 
  Building2, 
  ChevronRight,
  ShieldCheck,
  Star
} from "lucide-react"
import { education, certifications, achievements } from "@/lib/data"

export default function Education() {
  const [activeTab, setActiveTab] = useState<"all" | "education" | "certifications" | "achievements">("all")

  return (
    <section id="education" className="py-20 sm:py-28 bg-white dark:bg-gray-900 transition-colors duration-500 relative overflow-hidden">
      {/* Background Lighting Elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #8b5cf6 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} 
        />
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-blue-500/10 dark:bg-blue-500/15 rounded-full blur-3xl" />
        <div className="absolute bottom-10 -right-20 w-96 h-96 bg-purple-500/10 dark:bg-purple-500/15 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
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
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-50 dark:bg-purple-950/60 border border-purple-200 dark:border-purple-800/60 text-purple-600 dark:text-purple-400 text-xs sm:text-sm font-semibold mb-4 shadow-sm"
          >
            <Trophy size={14} className="text-amber-500" />
            <span>Academic & Professional Credentials</span>
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight">
            Education & <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 dark:from-purple-400 dark:via-pink-400 dark:to-blue-400 bg-clip-text text-transparent">Certifications</span>
          </h2>
          
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-0.5 w-12 bg-gradient-to-r from-transparent to-purple-500/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-purple-500" />
            <div className="h-0.5 w-24 bg-gradient-to-r from-purple-500/60 via-pink-500/60 to-blue-500/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-blue-500" />
            <div className="h-0.5 w-12 bg-gradient-to-l from-transparent to-blue-500/60" />
          </div>
          
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Strong foundational computer science degree supported by specialized industry certifications and global recognitions.
          </p>

          {/* Filter Pills */}
          <div className="flex items-center justify-center gap-2 sm:gap-3 mt-8 flex-wrap">
            {[
              { id: "all", label: "All Highlights", icon: Sparkles },
              { id: "education", label: "Education", icon: GraduationCap },
              { id: "certifications", label: "Certifications", icon: Award },
              { id: "achievements", label: "Honors & Records", icon: Medal },
            ].map((tab) => {
              const Icon = tab.icon
              const isSelected = activeTab === tab.id
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as typeof activeTab)}
                  className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                    isSelected
                      ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-500/25 scale-105"
                      : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700"
                  }`}
                >
                  <Icon size={14} />
                  <span>{tab.label}</span>
                </button>
              )
            })}
          </div>
        </motion.div>

        {/* Golden Record Special Spotlight Banner */}
        {(activeTab === "all" || activeTab === "achievements") && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 p-6 sm:p-7 rounded-3xl bg-gradient-to-r from-amber-500/10 via-purple-500/10 to-blue-500/10 dark:from-amber-500/15 dark:via-purple-500/15 dark:to-blue-500/15 border border-amber-300/40 dark:border-amber-500/30 relative overflow-hidden shadow-lg backdrop-blur-xl"
          >
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-white shadow-lg shadow-amber-500/30 flex-shrink-0 animate-bounce">
                <Trophy size={28} />
              </div>
              <div className="flex-1 text-center sm:text-left">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-700 dark:text-amber-300 text-xs font-bold mb-2">
                  <Star size={12} className="fill-amber-500" />
                  <span>Prestigious Recognition</span>
                </div>
                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white">
                  Golden Book of World Records Certification
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                  Honored with the official Golden Book of World Records certification at IIMT University, Meerut (2018) for exceptional technical participation and technological milestone achievement.
                </p>
              </div>
              <div className="flex-shrink-0 self-center sm:self-auto">
                <span className="px-3.5 py-1.5 rounded-full bg-white dark:bg-slate-800 text-xs font-bold text-amber-600 dark:text-amber-400 border border-amber-200 dark:border-amber-800 shadow-sm">
                  Year 2018
                </span>
              </div>
            </div>
          </motion.div>
        )}

        {/* Main Grid: Education & Certifications */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Education Column */}
          {(activeTab === "all" || activeTab === "education") && (
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={activeTab === "education" ? "col-span-12" : "lg:col-span-5"}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white shadow-lg shadow-blue-500/25">
                  <GraduationCap size={22} />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                    Academic Education
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Formal university degrees</p>
                </div>
              </div>

              {/* Education Cards with Timeline Connector */}
              <div className="relative pl-6 space-y-6 before:absolute before:left-2.5 before:top-3 before:bottom-3 before:w-0.5 before:bg-gradient-to-b before:from-blue-500 before:via-cyan-400 before:to-purple-500">
                {education.map((edu, idx) => (
                  <motion.div
                    key={edu.degree}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ scale: 1.02, x: 4 }}
                    className="relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-md rounded-2xl p-5 sm:p-6 border border-slate-200/80 dark:border-slate-700/80 shadow-md hover:shadow-xl hover:border-blue-400 dark:hover:border-blue-500 transition-all duration-300 group"
                  >
                    {/* Timeline Node Dot */}
                    <div className="absolute -left-[23px] top-6 w-4 h-4 rounded-full bg-white dark:bg-slate-900 border-[3px] border-blue-500 shadow-sm group-hover:scale-125 transition-transform" />

                    <div className="flex items-start justify-between gap-3 mb-2">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-300 border border-blue-200/60 dark:border-blue-800/60">
                        <Calendar size={12} />
                        {edu.year}
                      </span>
                    </div>

                    <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {edu.degree}
                    </h4>

                    <div className="flex items-center gap-2 mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium">
                      <Building2 size={15} className="text-blue-500 dark:text-blue-400 flex-shrink-0" />
                      <span>{edu.institution}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Certifications Column */}
          {(activeTab === "all" || activeTab === "certifications") && (
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={activeTab === "certifications" ? "col-span-12" : "lg:col-span-7"}
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white shadow-lg shadow-purple-500/25">
                    <Award size={22} />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                      Certifications & Credentials
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {certifications.length} verified technical credentials
                    </p>
                  </div>
                </div>
              </div>

              {/* Certifications Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                {certifications.map((cert, idx) => (
                  <motion.div
                    key={cert.name}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    whileHover={{ y: -4, scale: 1.02 }}
                    className="p-4 sm:p-5 rounded-2xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border border-slate-200/80 dark:border-slate-700/80 shadow-sm hover:shadow-lg hover:border-purple-300 dark:hover:border-purple-600 transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2.5">
                        <div className="w-8 h-8 rounded-xl bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <BookOpen size={16} />
                        </div>
                        <span className="text-[11px] font-bold text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/30 px-2.5 py-0.5 rounded-full border border-purple-200/50 dark:border-purple-800/50">
                          {cert.year}
                        </span>
                      </div>

                      <h4 className="font-bold text-slate-900 dark:text-white text-xs sm:text-sm leading-snug group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                        {cert.name}
                      </h4>
                    </div>

                    <div className="mt-3 pt-2.5 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between">
                      <span className="text-[11px] text-slate-500 dark:text-slate-400 truncate font-medium">
                        {cert.institution}
                      </span>
                      <ShieldCheck size={14} className="text-emerald-500 flex-shrink-0" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Key Achievements Tab View (when selected exclusively) */}
          {activeTab === "achievements" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="col-span-12 grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              {achievements.map((ach, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-start gap-3.5 shadow-sm"
                >
                  <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-950/60 text-amber-600 flex items-center justify-center flex-shrink-0">
                    <Trophy size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base">
                      Career Milestone #{idx + 1}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                      {ach}
                    </p>
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
