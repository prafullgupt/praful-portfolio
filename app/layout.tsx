import type { Metadata } from "next"
import { Inter } from "next/font/google"
// @ts-ignore
import "./globals.css"

import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

import { ThemeProvider } from "@/app/context/ThemeContext"
import AnalyticsProvider from "@/app/components/AnalyticsProvider"
import { MetaInfo, StructuredData } from "@/lib/MetaInfo"

import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const metadata = MetaInfo as Metadata

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Google AdSense */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6386302858967654"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>

      <body className={inter.className}>
        <ThemeProvider>
          <StructuredData />

          <AnalyticsProvider>
            {children}
          </AnalyticsProvider>
        </ThemeProvider>

        {/* Vercel Analytics */}
        <Analytics mode="production" debug={false} />

        {/* Vercel Speed Insights */}
        <SpeedInsights debug={false} />
      </body>
    </html>
  )
}