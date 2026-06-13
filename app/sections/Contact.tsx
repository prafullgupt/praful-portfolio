"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Linkedin, Github, Send, Loader2, CheckCircle, AlertCircle } from "lucide-react"
import { personalInfo } from "@/lib/data"
import { useState } from "react"
import emailjs from "@emailjs/browser"

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false)
  const [status, setStatus] = useState("idle")
  
  // Form data ke liye state
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    subject: "",
    message: ""
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault()

    setIsLoading(true)
    setStatus("idle")

    // 🔍 Debug: Console mein check karo
    console.log("Sending data:", formData)

    try {
      // sendForm ke jagah send method use karo
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          user_name: formData.user_name,
          user_email: formData.user_email,
          subject: formData.subject,
          message: formData.message,
        },
        {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
        }
      )

      console.log("Success:", result.text)
      setStatus("success")
      
      // Form reset
      setFormData({
        user_name: "",
        user_email: "",
        subject: "",
        message: ""
      })
      
      setTimeout(() => setStatus("idle"), 5000)
    } catch (error) {
      console.error("EmailJS Error:", error)
      setStatus("error")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="contact" className="py-16 sm:py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Get In <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Touch</span></h2>
          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto text-sm sm:text-base px-4">Have a project in mind? Let&apos;s work together to bring your ideas to life.</p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8 sm:gap-10 lg:gap-12">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="flex-1">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8">Contact Information</h3>
            <div className="space-y-4 sm:space-y-6">
              <motion.a href={`mailto:${personalInfo.email}`} whileHover={{ x: 3 }} className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-all">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div className="min-w-0">
                  <p className="text-gray-400 text-xs sm:text-sm">Email</p>
                  <p className="text-white font-medium text-sm sm:text-base truncate">{personalInfo.email}</p>
                </div>
              </motion.a>
              <motion.a href={`tel:${personalInfo.phone}`} whileHover={{ x: 3 }} className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-all">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-600 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <p className="text-gray-400 text-xs sm:text-sm">Phone</p>
                  <p className="text-white font-medium text-sm sm:text-base">{personalInfo.phone}</p>
                  <p className="text-white font-medium text-xs sm:text-sm">{personalInfo.phone2}</p>
                </div>
              </motion.a>
              <motion.div whileHover={{ x: 3 }} className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-white/10 rounded-xl">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-600 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div className="min-w-0">
                  <p className="text-gray-400 text-xs sm:text-sm">Location</p>
                  <p className="text-white font-medium text-sm sm:text-base leading-tight">{personalInfo.location}</p>
                </div>
              </motion.div>
            </div>
            <div className="mt-6 sm:mt-8">
              <p className="text-gray-400 mb-3 sm:mb-4 text-sm sm:text-base">Follow me on</p>
              <div className="flex gap-3 sm:gap-4">
                <motion.a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.1 }} className="p-2.5 sm:p-3 bg-blue-600 hover:bg-blue-700 rounded-lg sm:rounded-xl text-white transition-colors" aria-label="LinkedIn"><Linkedin size={20} className="sm:w-6 sm:h-6" /></motion.a>
                <motion.a href={personalInfo.github} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.1 }} className="p-2.5 sm:p-3 bg-gray-700 hover:bg-gray-800 rounded-lg sm:rounded-xl text-white transition-colors" aria-label="GitHub"><Github size={20} className="sm:w-6 sm:h-6" /></motion.a>
                <motion.a href={`mailto:${personalInfo.email}`} whileHover={{ scale: 1.1 }} className="p-2.5 sm:p-3 bg-red-600 hover:bg-red-700 rounded-lg sm:rounded-xl text-white transition-colors" aria-label="Email"><Mail size={20} className="sm:w-6 sm:h-6" /></motion.a>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="flex-1">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl sm:rounded-2xl p-5 sm:p-8 border border-white/20">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Send a Message</h3>
              
              {status === "success" && (
                <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mb-4 p-3 bg-green-500/20 border border-green-500/50 rounded-lg flex items-center gap-2 text-green-400">
                  <CheckCircle size={18} />
                  <span className="text-sm">Message sent successfully!</span>
                </motion.div>
              )}
              {status === "error" && (
                <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mb-4 p-3 bg-red-500/20 border border-red-500/50 rounded-lg flex items-center gap-2 text-red-400">
                  <AlertCircle size={18} />
                  <span className="text-sm">Failed to send message. Please try again.</span>
                </motion.div>
              )}

              <form className="space-y-3 sm:space-y-4" onSubmit={sendEmail}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label className="block text-gray-300 text-xs sm:text-sm mb-1.5 sm:mb-2">Name</label>
                    <input 
                      type="text" 
                      name="user_name"
                      value={formData.user_name}
                      onChange={handleChange}
                      placeholder="Your Name" 
                      required
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white/10 border border-white/20 rounded-lg sm:rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors text-sm" 
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 text-xs sm:text-sm mb-1.5 sm:mb-2">Email</label>
                    <input 
                      type="email" 
                      name="user_email"
                      value={formData.user_email}
                      onChange={handleChange}
                      placeholder="your@email.com" 
                      required
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white/10 border border-white/20 rounded-lg sm:rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors text-sm" 
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-300 text-xs sm:text-sm mb-1.5 sm:mb-2">Subject</label>
                  <input 
                    type="text" 
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry" 
                    required
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white/10 border border-white/20 rounded-lg sm:rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors text-sm" 
                  />
                </div>
                <div>
                  <label className="block text-gray-300 text-xs sm:text-sm mb-1.5 sm:mb-2">Message</label>
                  <textarea 
                    rows={4} 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..." 
                    required
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white/10 border border-white/20 rounded-lg sm:rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors resize-none text-sm" 
                  />
                </div>
                <motion.button 
                  whileHover={{ scale: 1.02 }} 
                  whileTap={{ scale: 0.98 }} 
                  type="submit" 
                  disabled={isLoading}
                  className="w-full py-2.5 sm:py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg sm:rounded-xl flex items-center justify-center gap-2 transition-all text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <>
                      <Loader2 size={16} className="sm:w-[18px] sm:h-[18px] animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16} className="sm:w-[18px] sm:h-[18px]" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}