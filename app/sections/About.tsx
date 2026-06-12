"use client"

import { motion } from "framer-motion"
import { User, Target, Award, Briefcase } from "lucide-react"
import { personalInfo, achievements } from "@/lib/data"

const stats = [
  { icon: Briefcase, label: "Years Experience", value: `${new Date().getFullYear() - 2018}+` },
  { icon: Target, label: "Projects Completed", value: "35+" },
  { icon: Award, label: "Certifications", value: "8+" },
  { icon: User, label: "Happy Clients", value: "15+" },
]

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">About <span className="gradient-text">Me</span></h2>
          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 items-start">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="flex-1">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">Passionate Developer & Team Leader</h3>
            <p className="text-gray-600 leading-relaxed mb-6 text-sm sm:text-base">{personalInfo.about}</p>
            <div className="space-y-3">
              <h4 className="text-base sm:text-lg font-semibold text-gray-800 mb-3">Key Achievements</h4>
              {achievements.map((achievement, index) => (
                <motion.div key={index} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                  <p className="text-gray-600 text-sm sm:text-base">{achievement}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6 w-full lg:w-auto">
            {stats.map((stat, index) => (
              <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} whileHover={{ scale: 1.03 }} className="bg-gradient-to-br from-blue-50 to-purple-50 p-4 sm:p-6 rounded-xl text-center border border-blue-100 hover:shadow-lg transition-shadow">
                <stat.icon className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600 mx-auto mb-2 sm:mb-3" />
                <div className="text-2xl sm:text-3xl font-bold gradient-text mb-1">{stat.value}</div>
                <div className="text-xs sm:text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
