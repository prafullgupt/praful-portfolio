"use client"

import { motion } from "framer-motion"
import { personalInfo, achievements , stats } from "@/lib/data"

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-400 mx-auto rounded-full" />
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 items-start">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="flex-1">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4 sm:mb-6 transition-colors duration-300">Passionate Developer & Team Leader</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6 text-sm sm:text-base transition-colors duration-300">{personalInfo.about}</p>
            <div className="space-y-3">
              <h4 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3 transition-colors duration-300">Key Achievements</h4>
              {achievements.map((achievement, index) => (
                <motion.div key={index} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                  <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base transition-colors duration-300">{achievement}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6 w-full lg:w-auto">
            {stats.map((stat, index) => (
              <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} whileHover={{ scale: 1.03 }} className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-800 p-4 sm:p-6 rounded-xl text-center border border-blue-100 dark:border-gray-700 hover:shadow-lg dark:hover:shadow-blue-500/10 transition-all duration-300">
                <stat.icon className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600 dark:text-blue-400 mx-auto mb-2 sm:mb-3" />
                <div className="text-2xl sm:text-3xl font-bold gradient-text mb-1">{stat.value}</div>
                <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}