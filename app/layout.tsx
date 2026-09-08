import type { Metadata } from "next"
import { Inter } from "next/font/google"
// @ts-ignore
import "./globals.css"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { experienceStartYear } from "@/lib/data"
import { ThemeProvider } from "@/app/context/ThemeContext"
import AnalyticsProvider from "@/app/components/AnalyticsProvider" // <-- Add this
import { MetaInfo, StructuredData } from "@/lib/MetaInfo"
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] })

export const metadata = MetaInfo as Metadata

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <ThemeProvider>
          <StructuredData />
          <AnalyticsProvider> {/* <-- Wrap children */}
            {children}
          </AnalyticsProvider>
        </ThemeProvider>
        <Analytics mode="production" debug={false} />
        <SpeedInsights debug={false} />
        <Script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`}
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />

      </body>
    </html>
  )
}