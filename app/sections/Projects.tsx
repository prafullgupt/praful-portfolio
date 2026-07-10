"use client"

import { motion } from "framer-motion"
import { ExternalLink, Smartphone, Globe, BrainCircuit, Code2, ArrowUpRight } from "lucide-react"
import { experiences, otherProjects } from "@/lib/data"

const getProjectIcon = (name: string) => {
  if (name.toLowerCase().includes("website") || name.toLowerCase().includes("platform")) return Globe
  if (name.toLowerCase().includes("ai")) return BrainCircuit
  return Smartphone
}

const ProjectCard = ({ project, index }: { project: any; index: number }) => {
  const Icon = getProjectIcon(project.name)
  const isPersonal = project.company === "Personal Project"

  return (
    <motion.div
      key={project.name}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <motion.div
        whileHover={{ y: -8, scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="group bg-white dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl dark:hover:shadow-purple-500/20 transition-all duration-500 border border-gray-200/50 dark:border-gray-700/50 h-full flex flex-col relative"
      >
        {/* Subtle gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        {/* Header */}
        <div className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-purple-600 dark:from-blue-500 dark:via-blue-600 dark:to-purple-500 p-5 sm:p-6 overflow-hidden">
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

          <div className="relative flex items-start gap-3 sm:gap-4">
            {/* Icon with glow */}
            <div className="relative">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0 ring-1 ring-white/30 group-hover:ring-white/50 transition-all duration-300 group-hover:scale-110">
                <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              {/* Glow effect */}
              <div className="absolute inset-0 w-12 h-12 sm:w-14 sm:h-14 bg-white/20 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            <div className="flex flex-col min-w-0">
              <h3 className="text-lg sm:text-xl font-bold text-white leading-tight truncate group-hover:text-blue-50 transition-colors">
                {project.name}
              </h3>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-blue-100 text-xs sm:text-sm font-medium">
                  {project.company}
                </span>
                {isPersonal && (
                  <span className="px-1.5 py-0.5 bg-white/20 rounded text-[10px] text-white font-medium">
                    Personal
                  </span>
                )}
              </div>
              {project.period && (
                <p className="text-blue-200/80 text-[11px] sm:text-xs mt-1.5 font-medium flex items-center gap-1">
                  <Code2 size={12} className="opacity-70" />
                  {project.period}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="p-5 sm:p-6 flex-1 flex flex-col relative">
          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 flex-1 line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
            {project.description}
          </p>

          {/* Technologies */}
          {project.technologies && (
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech: string, i: number) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05 }}
                  className="px-2.5 py-1 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700/50 dark:to-gray-700 text-gray-600 dark:text-gray-300 text-[11px] sm:text-xs rounded-full border border-gray-200/60 dark:border-gray-600/60 font-medium hover:border-blue-300 dark:hover:border-blue-400 transition-colors cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
              {/* {project.technologies.length > 5 && (
                <span className="px-2.5 py-1 text-[11px] text-gray-400 dark:text-gray-500 font-medium">
                  +{project.technologies.length - 5}
                </span>
              )} */}
            </div>
          )}

          {/* Footer */}
          <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-700/50">
            {project.link ? (
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 3 }}
                className="flex items-center gap-1.5 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm font-semibold transition-colors group/link"
              >
                <span>Live Demo</span>
                <ArrowUpRight size={14} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
              </motion.a>
            ) : (
              <span className="text-gray-400 dark:text-gray-500 text-sm font-medium">
                Private Project
              </span>
            )}

            {/* Subtle indicator */}
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

const SectionHeader = ({ title, subtitle, highlight }: { title: string; subtitle?: string; highlight: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7 }}
    className="text-center mb-12 sm:mb-16"
  >
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
      {title} <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">{highlight}</span>
    </h2>
    <div className="w-20 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-4" />
    {subtitle && (
      <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-base sm:text-lg px-4 leading-relaxed">
        {subtitle}
      </p>
    )}
  </motion.div>
)

export default function Projects() {
  const companyProjects = experiences.flatMap((exp) =>
    exp.projects.map((project) => ({
      ...project,
      company: exp.company,
      period: exp.period,
      technologies: exp.technologies,
    }))
  )

  const personalProjects = otherProjects.map((project) => ({
    ...project,
    company: "Personal Project",
    period: "",
  }))

  return (
    <section id="projects" className="py-20 sm:py-28 bg-gray-50 dark:bg-gray-900 transition-colors duration-300 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* Featured Projects */}
        <SectionHeader
          title="Featured"
          highlight="Projects"
          subtitle="A showcase of applications I have built and led across various domains"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-24 sm:mb-32">
          {companyProjects.map((project, index) => (
            <ProjectCard key={project.name} project={project} index={index} />
          ))}
        </div>
        {/* Personal Projects Section */}
        <SectionHeader
          title="Personal"
          highlight="Projects"
        />

        <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
          {personalProjects.map((project, index) => (
            <div
              key={project.name}
              className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.333rem)] max-w-md"
            >
              <ProjectCard project={project} index={index} />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}