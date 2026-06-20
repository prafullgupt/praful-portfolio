import type { Metadata } from "next"
import { Inter } from "next/font/google"
// @ts-ignore
import "./globals.css"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { experienceStartYear } from "@/lib/data"
import { ThemeProvider } from "@/app/context/ThemeContext"
import AnalyticsProvider from "@/app/components/AnalyticsProvider" // <-- Add this

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Praful Gupta | Senior Mobile & Web Developer",
  description: "Senior Application Developer with 8+ years of experience in React Native, Android, Next.js, and AI integration.",
  keywords: ["Praful Gupta", "React Native Developer", "Android Developer", "Next.js Developer", "Mobile App Developer", "Team Leader"],
  authors: [{ name: "Praful Gupta" }],
  openGraph: {
    title: "Praful Gupta | Senior Mobile & Web Developer",
    description: `${new Date().getFullYear() - experienceStartYear} years of experience building world-class mobile and web applications`,
    type: "website",
  },
  icons: {
    icon: [
      { url: '/images/logo.png', type: 'image/png' },
    ]
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <ThemeProvider>
          <AnalyticsProvider> {/* <-- Wrap children */}
            {children}
          </AnalyticsProvider>
        </ThemeProvider>
        <Analytics mode="production" debug={false} />
        <SpeedInsights debug={false} />
      </body>
    </html>
  )
}