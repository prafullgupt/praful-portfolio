"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Briefcase, Calendar, MapPin, ChevronDown, ExternalLink, Code2 } from "lucide-react"
import { experiences } from "@/lib/data"

export default function Experience() {
  const [expandedId, setExpandedId] = useState<number | null>(1)

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            A journey through my professional career, showcasing growth from Android Developer to Team Leader
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 md:-translate-x-px" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex items-start mb-8 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg md:-translate-x-2 mt-6 z-10" />

              {/* Content Card */}
              <div className={`ml-12 md:ml-0 md:w-5/12 ${
                index % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8"
              }`}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow border border-gray-100"
                >
                  {/* Header */}
                  <div className={`flex items-start gap-4 mb-4 ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}>
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Briefcase className="w-6 h-6 text-white" />
                    </div>
                    <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                      <h3 className="text-xl font-bold text-gray-900">{exp.role}</h3>
                      <p className="text-blue-600 font-semibold">{exp.company}</p>
                    </div>
                  </div>

                  {/* Meta Info */}
                  <div className={`flex flex-wrap gap-3 mb-4 text-sm text-gray-500 ${
                    index % 2 === 0 ? "md:justify-end" : ""
                  }`}>
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={14} />
                      {exp.location}
                    </span>
                  </div>

                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{exp.description}</p>

                  {/* Expandable Content */}
                  <button
                    onClick={() => setExpandedId(expandedId === exp.id ? null : exp.id)}
                    className="flex items-center gap-2 text-blue-600 font-medium text-sm hover:text-blue-700 transition-colors"
                  >
                    <span>View Details</span>
                    <motion.div
                      animate={{ rotate: expandedId === exp.id ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown size={16} />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {expandedId === exp.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        {/* Responsibilities */}
                        <div className="mt-4 pt-4 border-t border-gray-100">
                          <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                            <Code2 size={16} className="text-blue-500" />
                            Responsibilities
                          </h4>
                          <ul className="space-y-2">
                            {exp.responsibilities.map((resp, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-1.5 flex-shrink-0" />
                                {resp}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Technologies */}
                        <div className="mt-4">
                          <h4 className="font-semibold text-gray-800 mb-2">Technologies</h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full border border-blue-100"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Projects */}
                        {exp.projects.length > 0 && (
                          <div className="mt-4">
                            <h4 className="font-semibold text-gray-800 mb-2">Projects</h4>
                            <div className="space-y-3">
                              {exp.projects.map((project) => (
                                <div
                                  key={project.name}
                                  className="bg-gray-50 rounded-lg p-3"
                                >
                                  <div className="flex items-center justify-between">
                                    <h5 className="font-medium text-gray-800 text-sm">{project.name}</h5>
                                    {project.link && (
                                      <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-500 hover:text-blue-700"
                                      >
                                        <ExternalLink size={14} />
                                      </a>
                                    )}
                                  </div>
                                  <p className="text-xs text-gray-500 mt-1">{project.description}</p>
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
