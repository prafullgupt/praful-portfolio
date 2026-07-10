"use client"

import { motion } from "framer-motion"
import { GraduationCap, Calendar, Award, BookOpen } from "lucide-react"
import { education, certifications } from "@/lib/data"

export default function Education() {
  return (
    <section id="education" className="py-16 sm:py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
            Education & <span className="gradient-text">Certifications</span>
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-400 mx-auto rounded-full" />
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-12">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="flex-1">
            <div className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-cyan-500 dark:from-blue-400 dark:to-cyan-400 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-100 transition-colors duration-300">Education</h3>
            </div>
            <div className="space-y-4 sm:space-y-6">
              {education.map((edu, index) => (
                <motion.div key={edu.degree} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} whileHover={{ x: 3 }} className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-gray-800 dark:to-gray-800 rounded-xl p-4 sm:p-6 border border-blue-100 dark:border-gray-700 hover:shadow-md dark:hover:shadow-blue-500/10 transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                    <div className="flex-1">
                      <h4 className="text-base sm:text-lg font-bold text-gray-800 dark:text-gray-100 transition-colors duration-300">{edu.degree}</h4>
                      <p className="text-blue-600 dark:text-blue-400 font-medium text-sm sm:text-base">{edu.institution}</p>
                    </div>
                    <span className="flex items-center gap-1 text-xs sm:text-sm text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-900 px-3 py-1 rounded-full self-start sm:self-auto flex-shrink-0 border border-gray-200 dark:border-gray-700 transition-colors duration-300">
                      <Calendar size={13} className="sm:w-4 sm:h-4" />{edu.year}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="flex-1">
            <div className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-500 to-pink-500 dark:from-purple-400 dark:to-pink-400 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                <Award className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-100 transition-colors duration-300">Certifications</h3>
            </div>
            <div className="space-y-3 sm:space-y-4 max-h-[500px] overflow-y-auto pr-1 sm:pr-2 custom-scrollbar">
              {certifications.map((cert, index) => (
                <motion.div key={cert.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} whileHover={{ scale: 1.01 }} className="flex items-center gap-3 sm:gap-4 bg-gray-50 dark:bg-gray-800 rounded-xl p-3 sm:p-4 border border-gray-100 dark:border-gray-700 hover:border-purple-200 dark:hover:border-purple-500/50 transition-all duration-300">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-purple-500 to-pink-500 dark:from-purple-400 dark:to-pink-400 rounded-lg flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200 text-xs sm:text-sm leading-tight transition-colors duration-300">{cert.name}</h4>
                    <p className="text-gray-500 dark:text-gray-500 text-[10px] sm:text-xs">{cert.institution}</p>
                  </div>
                  <span className="text-[10px] sm:text-xs text-purple-600 dark:text-purple-300 font-medium bg-purple-50 dark:bg-purple-500/10 px-2 py-1 rounded-full flex-shrink-0 border border-purple-100 dark:border-purple-500/20 transition-colors duration-300">{cert.year}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}