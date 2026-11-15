"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Send,
  Loader2,
  CheckCircle,
  AlertCircle,
  Sparkles,
  MessageSquare,
  Copy,
  Check,
  ExternalLink,
  ShieldCheck,
  Clock,
  Compass,
  ArrowRight
} from "lucide-react"
import { personalInfo } from "@/lib/data"
import emailjs from "@emailjs/browser"
import { useTheme } from "@/app/context/ThemeContext"

// ============================================
// REAL 3D TILT CARD COMPONENT WITH SPECULAR GLARE
// ============================================
function Contact3DTiltCard({
  children,
  className = "",
  glowColor = "rgba(59, 130, 246, 0.25)"
}: {
  children: React.ReactNode
  className?: string
  glowColor?: string
}) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2

    // Real physics 3D angle calculation
    const rotX = -((y - centerY) / centerY) * 8
    const rotY = ((x - centerX) / centerX) * 8

    setRotateX(rotX)
    setRotateY(rotY)
    setGlare({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.2
    })
  }

  const handleMouseLeave = () => {
    setRotateX(0)
    setRotateY(0)
    setGlare((prev) => ({ ...prev, opacity: 0 }))
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ rotateX, rotateY }}
      transition={{ type: "spring", stiffness: 350, damping: 25 }}
      style={{ perspective: 1200, transformStyle: "preserve-3d" }}
      className={`relative ${className}`}
    >
      {/* Dynamic Specular Light Glare reflection */}
      <div
        className="absolute inset-0 pointer-events-none rounded-3xl transition-opacity duration-300 z-30 overflow-hidden"
        style={{
          background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255,255,255,${glare.opacity}), transparent 60%)`
        }}
      />
      {/* Ambient 3D Glow drop shadow */}
      <div
        className="absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10 pointer-events-none"
        style={{ background: glowColor }}
      />
      {children}
    </motion.div>
  )
}

// ============================================
// MAIN GET IN TOUCH SECTION COMPONENT
// ============================================
export default function Contact() {
  const { darkMode } = useTheme()
  const [isLoading, setIsLoading] = useState(false)
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")
  const [copiedEmail, setCopiedEmail] = useState(false)
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    subject: "Project Inquiry",
    message: ""
  })

  // Quick subject selector presets
  const subjectPresets = [
    "Project Inquiry",
    "Team Leadership",
    "Mobile App (React Native)",
    "Full-Stack Web (Next.js)",
    "AI Solution Architecture"
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email)
    setCopiedEmail(true)
    setTimeout(() => setCopiedEmail(false), 3000)
  }

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setStatus("idle")

    // Read environment variables configured in .env / .env.local
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

    // Fallback if environment variables are not configured or placeholder values are present
    if (!serviceId || !templateId || !publicKey || serviceId.includes("your_")) {
      console.warn("ℹ️ [EmailJS] Live keys pending in .env. Opening default mail client fallback.")
      const mailtoUrl = `mailto:prafullgoel7@gmail.com?subject=${encodeURIComponent(
        formData.subject || "Project Inquiry"
      )}&body=${encodeURIComponent(
        `Hi Praful,\n\nName: ${formData.user_name}\nEmail: ${formData.user_email}\n\nMessage:\n${formData.message}`
      )}`
      window.open(mailtoUrl, "_blank")
      setStatus("success")
      setFormData({ user_name: "", user_email: "", subject: "Project Inquiry", message: "" })
      setIsLoading(false)
      setTimeout(() => setStatus("idle"), 6000)
      return
    }

    try {
      const result = await emailjs.send(
        serviceId,
        templateId,
        {
          user_name: formData.user_name,
          user_email: formData.user_email,
          subject: formData.subject,
          message: formData.message
        },
        { publicKey }
      )
      console.log("Success:", result.text)
      setStatus("success")
      setFormData({ user_name: "", user_email: "", subject: "Project Inquiry", message: "" })
      setTimeout(() => setStatus("idle"), 6000)
    } catch (error) {
      console.error("EmailJS Error:", error)
      setStatus("error")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="contact" className="py-20 sm:py-28 bg-slate-900 dark:bg-gray-950 text-white transition-colors duration-500 relative overflow-hidden">
      {/* 3D Geometric Matrix Mesh */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #6366f1 1.2px, transparent 0)`,
            backgroundSize: '48px 48px'
          }}
        />
      </div>

      {/* Floating 3D Ambient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 right-1/4 w-[550px] h-[550px] bg-blue-600/15 rounded-full blur-[140px]" />
        <div className="absolute top-1/2 -left-32 w-[600px] h-[600px] bg-purple-600/15 rounded-full blur-[140px]" />
        <div className="absolute -bottom-32 right-1/3 w-[500px] h-[500px] bg-emerald-600/15 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 sm:mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-400 text-xs sm:text-sm font-bold mb-4 shadow-sm"
          >
            <Sparkles size={14} className="text-blue-400 animate-spin-slow" />
            <span>Let&apos;s Build Something Scalable</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Get In <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">Touch</span>
          </h2>

          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-0.5 w-12 bg-gradient-to-r from-transparent to-blue-500/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-blue-500" />
            <div className="h-0.5 w-24 bg-gradient-to-r from-blue-500/60 via-purple-500/60 to-blue-500/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-purple-500" />
            <div className="h-0.5 w-12 bg-gradient-to-l from-transparent to-purple-500/60" />
          </div>

          <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Have a mission-critical mobile application, high-scale web platform, or team leadership opportunity? Let&apos;s connect and make it a reality.
          </p>
        </motion.div>

        {/* ========================================================
            PART 1: 3D DUAL CONTROL DECK (DIRECT CHANNELS & FORM)
        ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          {/* Left Deck: 3D Direct Channels & Location Card (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <Contact3DTiltCard
              glowColor="rgba(59, 130, 246, 0.35)"
              className="group h-full rounded-3xl"
            >
              <div
                className="h-full bg-slate-800/80 backdrop-blur-2xl rounded-3xl p-6 sm:p-8 border border-slate-700/80 shadow-2xl flex flex-col justify-between"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div>
                  {/* Status Indicator Badge */}
                  <div className="flex items-center justify-between gap-3 mb-6" style={{ transform: "translateZ(25px)" }}>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-bold">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      <span>Open to New Opportunities</span>
                    </div>
                    <span className="text-[11px] font-semibold text-slate-400 flex items-center gap-1">
                      <Clock size={12} />
                      Fast Response
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2" style={{ transform: "translateZ(30px)" }}>
                    Direct Communication Channels
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 mb-6 leading-relaxed" style={{ transform: "translateZ(20px)" }}>
                    Reach out directly through email, phone, or instant messaging for technical consulting, leadership roles, or project architectural inquiries.
                  </p>

                  {/* Channel Cards */}
                  <div className="space-y-3.5 mb-8" style={{ transform: "translateZ(25px)" }}>
                    
                    {/* Email Card with Copy Button */}
                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-400/50 transition-all flex items-center justify-between gap-3 group/item">
                      <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-3.5 min-w-0 flex-1">
                        <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center flex-shrink-0 text-white shadow-md">
                          <Mail size={20} />
                        </div>
                        <div className="min-w-0">
                          <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Primary Email</p>
                          <p className="text-xs sm:text-sm font-semibold text-white truncate group-hover/item:text-blue-400 transition-colors">
                            {personalInfo.email}
                          </p>
                        </div>
                      </a>
                      <button
                        type="button"
                        onClick={handleCopyEmail}
                        className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-slate-300 transition-colors flex-shrink-0"
                        title="Copy Email Address"
                      >
                        {copiedEmail ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
                      </button>
                    </div>

                    {/* Phone Card */}
                    <a
                      href={`tel:${personalInfo.phone}`}
                      className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-400/50 transition-all flex items-center gap-3.5 group/item"
                    >
                      <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center flex-shrink-0 text-white shadow-md">
                        <Phone size={20} />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Direct Phone</p>
                        <p className="text-xs sm:text-sm font-semibold text-white truncate group-hover/item:text-emerald-400 transition-colors">
                          {personalInfo.phone}
                        </p>
                        <p className="text-[11px] text-slate-400">{personalInfo.phone2}</p>
                      </div>
                    </a>

                    {/* WhatsApp Quick Connect */}
                    <a
                      href={`https://wa.me/917417319939?text=${encodeURIComponent("Hi Praful, I saw your portfolio and would like to discuss a project!")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-green-400/50 transition-all flex items-center justify-between gap-3 group/item"
                    >
                      <div className="flex items-center gap-3.5 min-w-0">
                        <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center flex-shrink-0 text-white shadow-md">
                          <MessageSquare size={20} />
                        </div>
                        <div className="min-w-0">
                          <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">WhatsApp Instant</p>
                          <p className="text-xs sm:text-sm font-semibold text-white truncate group-hover/item:text-green-400 transition-colors">
                            Chat directly on WhatsApp
                          </p>
                        </div>
                      </div>
                      <ArrowRight size={16} className="text-slate-400 group-hover/item:translate-x-1 group-hover/item:text-green-400 transition-all" />
                    </a>

                    {/* Location Card */}
                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3.5">
                      <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center flex-shrink-0 text-white shadow-md">
                        <MapPin size={20} />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Based In</p>
                        <p className="text-xs sm:text-sm font-semibold text-white leading-snug">
                          {personalInfo.location}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 3D Social Portals Floating Bar */}
                <div className="pt-6 border-t border-slate-700/80" style={{ transform: "translateZ(30px)" }}>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                    Connect Across Developer Networks
                  </p>
                  <div className="flex items-center gap-3">
                    <a
                      href={personalInfo.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2.5 px-3 rounded-xl bg-blue-600/30 hover:bg-blue-600 border border-blue-500/40 text-white text-xs font-bold transition-all flex items-center justify-center gap-1.5 shadow-sm hover:scale-105 active:scale-95"
                    >
                      <Linkedin size={15} />
                      <span>LinkedIn</span>
                    </a>
                    <a
                      href={personalInfo.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2.5 px-3 rounded-xl bg-slate-700/50 hover:bg-slate-700 border border-slate-600 text-white text-xs font-bold transition-all flex items-center justify-center gap-1.5 shadow-sm hover:scale-105 active:scale-95"
                    >
                      <Github size={15} />
                      <span>GitHub</span>
                    </a>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="p-2.5 rounded-xl bg-red-600/30 hover:bg-red-600 border border-red-500/40 text-white transition-all flex items-center justify-center shadow-sm hover:scale-105 active:scale-95"
                      title="Send Mail"
                    >
                      <Mail size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </Contact3DTiltCard>
          </div>

          {/* Right Deck: 3D High-Tech Message Dispatch Terminal (7 Cols) */}
          <div className="lg:col-span-7">
            <Contact3DTiltCard
              glowColor="rgba(168, 85, 247, 0.35)"
              className="group h-full rounded-3xl"
            >
              <div
                className="h-full bg-slate-800/80 backdrop-blur-2xl rounded-3xl p-6 sm:p-8 md:p-10 border border-slate-700/80 shadow-2xl flex flex-col justify-between"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-6" style={{ transform: "translateZ(25px)" }}>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white">
                        Send a Message
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-400 mt-1">
                        Direct delivery to Praful&apos;s primary inbox via encrypted dispatch.
                      </p>
                    </div>
                    <div className="w-10 h-10 rounded-2xl bg-purple-500/20 text-purple-400 flex items-center justify-center flex-shrink-0">
                      <Send size={18} />
                    </div>
                  </div>

                  {/* Status Alerts */}
                  <AnimatePresence>
                    {status === "success" && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="mb-6 p-4 rounded-2xl bg-emerald-500/20 border border-emerald-500/50 text-emerald-300 flex items-center gap-3 text-xs sm:text-sm"
                      >
                        <CheckCircle size={18} className="text-emerald-400 flex-shrink-0" />
                        <div>
                          <p className="font-bold">Message Delivered Successfully!</p>
                          <p className="text-[11px] opacity-80 mt-0.5">Thank you for reaching out. Praful will get back to you shortly.</p>
                        </div>
                      </motion.div>
                    )}

                    {status === "error" && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="mb-6 p-4 rounded-2xl bg-rose-500/20 border border-rose-500/50 text-rose-300 flex items-center gap-3 text-xs sm:text-sm"
                      >
                        <AlertCircle size={18} className="text-rose-400 flex-shrink-0" />
                        <div>
                          <p className="font-bold">Transmission Failed</p>
                          <p className="text-[11px] opacity-80 mt-0.5">Please email directly at {personalInfo.email} or call {personalInfo.phone}.</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Quick Subject Selectors */}
                  <div className="mb-6" style={{ transform: "translateZ(20px)" }}>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                      Select Inquiry Type
                    </label>
                    <div className="flex flex-wrap gap-2.5">
                      {subjectPresets.map((preset) => (
                        <button
                          key={preset}
                          type="button"
                          onClick={() => setFormData((prev) => ({ ...prev, subject: preset }))}
                          className={`min-h-[36px] px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all inline-flex items-center justify-center cursor-pointer ${
                            formData.subject === preset
                              ? "bg-blue-600 text-white shadow-md shadow-blue-500/30 scale-105 border border-blue-400"
                              : "bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10"
                          }`}
                        >
                          {preset}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Main Contact Form */}
                  <form onSubmit={sendEmail} className="space-y-4" style={{ transform: "translateZ(25px)" }}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                          Your Name
                        </label>
                        <input
                          type="text"
                          name="user_name"
                          value={formData.user_name}
                          onChange={handleChange}
                          placeholder="e.g. Rahul Sharma"
                          required
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                          Your Email
                        </label>
                        <input
                          type="email"
                          name="user_email"
                          value={formData.user_email}
                          onChange={handleChange}
                          placeholder="e.g. rahul@company.com"
                          required
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                        Subject Line
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Subject of your message..."
                        required
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                        Project Details & Message
                      </label>
                      <textarea
                        rows={4}
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Share your project goals, scope, timeline, or team requirements..."
                        required
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all resize-none"
                      />
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      disabled={isLoading}
                      className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-xl shadow-blue-500/25 transition-all disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                    >
                      {isLoading ? (
                        <>
                          <Loader2 size={16} className="animate-spin" />
                          <span>Dispatching Encrypted Transmission...</span>
                        </>
                      ) : (
                        <>
                          <Send size={16} />
                          <span>Dispatch Message Now</span>
                        </>
                      )}
                    </motion.button>
                  </form>
                </div>
              </div>
            </Contact3DTiltCard>
          </div>

        </div>

      </div>
    </section>
  )
}
