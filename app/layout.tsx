import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Praful Gupta | Senior Mobile & Web Developer",
  description: "Senior Application Developer with 8+ years of experience in React Native, Android, Next.js, and AI integration. Expert in building scalable mobile and web applications.",
  keywords: ["Praful Gupta", "React Native Developer", "Android Developer", "Next.js Developer", "Mobile App Developer", "Team Leader"],
  authors: [{ name: "Praful Gupta" }],
  openGraph: {
    title: "Praful Gupta | Senior Mobile & Web Developer",
    description: "8+ years of experience building world-class mobile and web applications",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
