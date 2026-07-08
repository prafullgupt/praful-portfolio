"use client"

import { motion } from "framer-motion"
import { Heart, ArrowUp } from "lucide-react"
import { personalInfo } from "@/lib/data"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-gray-900 py-6 sm:py-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <p className="text-gray-400 text-xs sm:text-sm text-center sm:text-left">
              &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
            </p>
          </motion.div>
          <motion.button onClick={scrollToTop} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="p-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white transition-colors" aria-label="Scroll to top">
            <ArrowUp size={18} className="sm:w-5 sm:h-5" />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}
