"use client"

import { motion } from "framer-motion"

interface AnimatedNameProps {
  name: string
}

// Letter by letter wave animation
export function AnimatedNameWave({ name }: AnimatedNameProps) {
  const letters = name.split("")

  return (
    <span className="inline-flex">
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          className="inline-block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
          animate={{
            y: [0, -8, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop",
            delay: index * 0.08,
            ease: "easeInOut",
          }}
        >
          {letter === " " ? " " : letter}
        </motion.span>
      ))}
    </span>
  )
}

// Shimmer / gradient slide animation
export function AnimatedNameShimmer({ name }: AnimatedNameProps) {
  return (
    <motion.span
      className="relative inline-block"
      initial={{ backgroundPosition: "200% center" }}
      animate={{ backgroundPosition: "-200% center" }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "linear",
      }}
      style={{
        background: "linear-gradient(90deg, #60a5fa 0%, #c084fc 25%, #60a5fa 50%, #c084fc 75%, #60a5fa 100%)",
        backgroundSize: "200% auto",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
      }}
    >
      {name}
    </motion.span>
  )
}

// Glow pulse animation
export function AnimatedNameGlow({ name }: AnimatedNameProps) {
  return (
    <motion.span
      className="inline-block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
      animate={{
        textShadow: [
          "0 0 10px rgba(96, 165, 250, 0.3), 0 0 20px rgba(192, 132, 252, 0.2)",
          "0 0 20px rgba(96, 165, 250, 0.6), 0 0 40px rgba(192, 132, 252, 0.4)",
          "0 0 10px rgba(96, 165, 250, 0.3), 0 0 20px rgba(192, 132, 252, 0.2)",
        ],
        scale: [1, 1.02, 1],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      style={{
        filter: "drop-shadow(0 0 8px rgba(96, 165, 250, 0.3))",
      }}
    >
      {name}
    </motion.span>
  )
}

// Typewriter effect with cursor
export function AnimatedNameTypewriter({ name }: AnimatedNameProps) {
  const letters = name.split("")

  return (
    <span className="inline-flex items-center">
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          className="inline-block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.1,
            delay: index * 0.15,
            repeat: Infinity,
            repeatDelay: 3,
            repeatType: "reverse",
          }}
        >
          {letter === " " ? " " : letter}
        </motion.span>
      ))}
      <motion.span
        className="inline-block w-[3px] h-[1em] bg-gradient-to-b from-blue-400 to-purple-400 ml-1"
        animate={{ opacity: [1, 0, 1] }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          ease: "steps(1)",
        }}
      />
    </span>
  )
}

// Bounce wave animation
export function AnimatedNameBounce({ name }: AnimatedNameProps) {
  const letters = name.split("")

  return (
    <span className="inline-flex">
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          className="inline-block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
          animate={{
            y: [0, -12, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            delay: index * 0.06,
            ease: "easeInOut",
          }}
        >
          {letter === " " ? " " : letter}
        </motion.span>
      ))}
    </span>
  )
}

// Color shift animation
export function AnimatedNameColorShift({ name }: AnimatedNameProps) {
  return (
    <motion.span
      className="inline-block"
      animate={{
        background: [
          "linear-gradient(90deg, #60a5fa, #c084fc)",
          "linear-gradient(90deg, #c084fc, #f472b6)",
          "linear-gradient(90deg, #f472b6, #60a5fa)",
          "linear-gradient(90deg, #60a5fa, #c084fc)",
        ],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "linear",
      }}
      style={{
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
      }}
    >
      {name}
    </motion.span>
  )
}

// Main Hero component with animated name
interface HeroProps {
  personalInfo: {
    name: string
  }
}

export default function Hero({ personalInfo }: HeroProps) {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />

      {/* Animated background orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-[100px]"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          style={{ top: "10%", left: "20%" }}
        />
        <motion.div
          className="absolute w-[400px] h-[400px] rounded-full bg-purple-500/10 blur-[100px]"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          style={{ bottom: "10%", right: "20%" }}
        />
      </div>

      <div className="relative z-10 text-center px-4">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white/80 text-sm mb-6"
        >
          <motion.span
            className="w-2 h-2 rounded-full bg-green-400"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          Available for work
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4"
        >
          Hi, I&apos;m{" "}
          {/* Choose any animation below - default is Wave */}
          <AnimatedNameWave name={personalInfo.name} />
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-lg sm:text-xl md:text-2xl text-gray-400 mb-8"
        >
          Mobile & Web Developer
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-shadow"
          >
            View My Work
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-full border border-white/20 text-white font-semibold hover:bg-white/10 transition-colors"
          >
            Contact Me
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}