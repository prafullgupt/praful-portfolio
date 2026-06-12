"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Briefcase, Calendar, MapPin, ChevronDown, ExternalLink, Code2 } from "lucide-react"
import { experiences } from "@/lib/data"

export default function Experience() {
  const [expandedId, setExpandedId] = useState<number | null>(1)

  return (
    <section id="experience" className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">Work <span className="gradient-text">Experience</span></h2>
          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-sm sm:text-base px-4">A journey through my professional career, showcasing growth from Android Developer to Team Leader</p>
        </motion.div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 -translate-x-px" />
          <div className="md:hidden absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500" />

          {experiences.map((exp, index) => (
            <motion.div key={exp.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="relative flex items-start mb-8 sm:mb-10">
              <div className="absolute left-4 md:left-1/2 w-3 h-3 sm:w-4 sm:h-4 bg-blue-600 rounded-full border-2 sm:border-4 border-white shadow-lg md:-translate-x-2 mt-5 sm:mt-6 z-10" />
              <div className="ml-10 sm:ml-12 md:ml-0 md:w-5/12 w-full">
                <motion.div whileHover={{ scale: 1.01 }} className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-md hover:shadow-xl transition-shadow border border-gray-100">
                  <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                      <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 leading-tight">{exp.role}</h3>
                      <p className="text-blue-600 font-semibold text-sm sm:text-base">{exp.company}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 sm:gap-3 mb-3 sm:mb-4 text-xs sm:text-sm text-gray-500">
                    <span className="flex items-center gap-1"><Calendar size={13} className="sm:w-4 sm:h-4" />{exp.period}</span>
                    <span className="flex items-center gap-1"><MapPin size={13} className="sm:w-4 sm:h-4" />{exp.location}</span>
                  </div>

                  <p className="text-gray-600 mb-3 sm:mb-4 text-xs sm:text-sm leading-relaxed">{exp.description}</p>

                  <button onClick={() => setExpandedId(expandedId === exp.id ? null : exp.id)} className="flex items-center gap-2 text-blue-600 font-medium text-xs sm:text-sm hover:text-blue-700 transition-colors">
                    <span>View Details</span>
                    <motion.div animate={{ rotate: expandedId === exp.id ? 180 : 0 }} transition={{ duration: 0.3 }}><ChevronDown size={14} className="sm:w-4 sm:h-4" /></motion.div>
                  </button>

                  <AnimatePresence>
                    {expandedId === exp.id && (
                      <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                        <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-100">
                          <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2 text-sm sm:text-base"><Code2 size={14} className="sm:w-4 sm:h-4 text-blue-500" />Responsibilities</h4>
                          <ul className="space-y-1.5 sm:space-y-2">
                            {exp.responsibilities.map((resp, i) => (
                              <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-gray-600"><span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-1.5 flex-shrink-0" />{resp}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="mt-3 sm:mt-4">
                          <h4 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">Technologies</h4>
                          <div className="flex flex-wrap gap-1.5 sm:gap-2">
                            {exp.technologies.map((tech) => (
                              <span key={tech} className="px-2 sm:px-3 py-0.5 sm:py-1 bg-blue-50 text-blue-700 text-[10px] sm:text-xs font-medium rounded-full border border-blue-100">{tech}</span>
                            ))}
                          </div>
                        </div>
                        {exp.projects.length > 0 && (
                          <div className="mt-3 sm:mt-4">
                            <h4 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">Projects</h4>
                            <div className="space-y-2 sm:space-y-3">
                              {exp.projects.map((project) => (
                                <div key={project.name} className="bg-gray-50 rounded-lg p-2.5 sm:p-3">
                                  <div className="flex items-center justify-between">
                                    <h5 className="font-medium text-gray-800 text-xs sm:text-sm">{project.name}</h5>
                                    {project.link && <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 flex-shrink-0"><ExternalLink size={12} className="sm:w-4 sm:h-4" /></a>}
                                  </div>
                                  <p className="text-[11px] sm:text-xs text-gray-500 mt-1 leading-relaxed">{project.description}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
