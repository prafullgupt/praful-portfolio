"use client"

import { motion } from "framer-motion"
import { skillCategories} from "@/lib/data"


export default function Skills() {
  return (
    <section id="skills" className="py-16 sm:py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-400 mx-auto rounded-full" />
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-sm sm:text-base px-4 transition-colors duration-300">A comprehensive toolkit built over 8+ years of hands-on development experience</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {skillCategories.map((category, index) => (
            <motion.div key={category.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }}>
              <motion.div whileHover={{ y: -3 }} className={`${category.bgColor} rounded-xl sm:rounded-2xl p-4 sm:p-6 border ${category.borderColor} hover:shadow-lg dark:hover:shadow-blue-500/5 transition-all duration-300`}>
                <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center flex-shrink-0`}>
                    <category.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-800 dark:text-gray-100 transition-colors duration-300">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span key={skill} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: skillIndex * 0.03 }} whileHover={{ scale: 1.05 }} className={`px-2.5 sm:px-4 py-1.5 sm:py-2 ${category.bgColor} ${category.textColor} rounded-full text-xs sm:text-sm font-medium border ${category.borderColor} cursor-default transition-colors duration-300`}>
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}