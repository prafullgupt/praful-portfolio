"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github, Smartphone, Globe, BrainCircuit } from "lucide-react"
import { experiences, otherProjects } from "@/lib/data"

const allProjects = experiences.flatMap((exp) =>
  exp.projects.map((project) => ({ ...project, company: exp.company, period: exp.period , technologies: exp.technologies }))
).concat(otherProjects.map((project) => ({ ...project, company: "Personal Project", period: "" })))

const getProjectIcon = (name: string) => {
  if (name.toLowerCase().includes("website") || name.toLowerCase().includes("platform")) return Globe
  if (name.toLowerCase().includes("ai")) return BrainCircuit
  return Smartphone
}

export default function Projects() {
  return (
    <section id="projects" className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured <span className="gradient-text">Projects</span></h2>
          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-sm sm:text-base px-4">A showcase of applications I have built and led across various domains</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {allProjects.map((project, index) => {
            const Icon = getProjectIcon(project.name)
            return (
              <motion.div key={project.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.08 }}>
                <motion.div whileHover={{ y: -5 }} className="bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all border border-gray-100 h-full flex flex-col">
                  <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-4 sm:p-6">
                    <div className="w-10 h-10 sm:w-14 sm:h-14 bg-white/20 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4">
                      <Icon className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
                    </div>
                    <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white mb-0.5 sm:mb-1 leading-tight">{project.name}</h3>
                    <p className="text-blue-100 text-xs sm:text-sm">{project.company}</p>
                    {project.period && <p className="text-blue-200 text-[10px] sm:text-xs mt-0.5">{project.period}</p>}
                  </div>
                  <div className="p-4 sm:p-6 flex-1 flex flex-col">
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 flex-1">{project.description}</p>
                    {project.technologies && (
                      <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                        {project.technologies.slice(0, 5).map((tech) => (
                          <span key={tech} className="px-2 py-0.5 sm:px-2 sm:py-1 bg-gray-100 text-gray-600 text-[10px] sm:text-xs rounded-md">{tech}</span>
                        ))}
                      </div>
                    )}
                    <div className="flex gap-3">
                      {project.link && <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-blue-600 hover:text-blue-700 text-xs sm:text-sm font-medium"><ExternalLink size={12} className="sm:w-4 sm:h-4" />Live Demo</a>}
                      {/* {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-gray-600 hover:text-gray-800 text-xs sm:text-sm font-medium"><Github size={12} className="sm:w-4 sm:h-4" />Source Code</a>} */}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
