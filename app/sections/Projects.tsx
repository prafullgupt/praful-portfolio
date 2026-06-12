"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github, Smartphone, Globe, BrainCircuit } from "lucide-react"
import { experiences, otherProjects } from "@/lib/data"

// Collect all projects from experiences
const allProjects = experiences.flatMap((exp) =>
  exp.projects.map((project) => ({
    ...project,
    company: exp.company,
    period: exp.period,
    technologies: exp.technologies, // Use project-specific technologies if available, otherwise use experience-level technologies  
  }))
).concat(otherProjects.map((project) => ({
  ...project,
  company: "Personal Project",
  period: "",
})))

const getProjectIcon = (name: string) => {
  if (name.toLowerCase().includes("website") || name.toLowerCase().includes("platform")) {
    return Globe
  }
  if (name.toLowerCase().includes("ai")) {
    return BrainCircuit
  }
  return Smartphone
}

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50">
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
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            A showcase of applications I have built and led across various domains
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allProjects.map((project, index) => {
            const Icon = getProjectIcon(project.name)
            return (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.div
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all border border-gray-100 h-full flex flex-col"
                >
                  {/* Project Header */}
                  <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-6">
                    <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1">{project.name}</h3>
                    <p className="text-blue-100 text-sm">{project.company}</p>
                    {project.period && (
                      <p className="text-blue-200 text-xs mt-1">{project.period}</p>
                    )}
                  </div>

                  {/* Project Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    {project.technologies && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.slice(0, 5).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Links */}
                    <div className="flex gap-3">
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-blue-600 hover:text-blue-700 text-sm font-medium"
                        >
                          <ExternalLink size={14} />
                          Live Demo
                        </a>
                      )}
                      {/* {project?.github && (
                        <a
                          href={project?.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-gray-600 hover:text-gray-800 text-sm font-medium"
                        >
                          <Github size={14} />
                          Source Code
                        </a>
                      )} */}
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
