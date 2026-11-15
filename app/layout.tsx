import type { Metadata } from "next"
// @ts-ignore
import "./globals.css"

import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

import { ThemeProvider } from "@/app/context/ThemeContext"
import AnalyticsProvider from "@/app/components/AnalyticsProvider"
import { MetaInfo, StructuredData } from "@/lib/MetaInfo"

import Script from "next/script"

export const metadata = MetaInfo as Metadata

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Google Search Console Verification */}
        <meta name="google-site-verification" content="google60d5871884da3454" />

        {/* Favicon */}
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/favicon.svg" />

        {/* Google AdSense - Configured via .env */}
        <Script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${
            process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_CLIENT_ID || "ca-pub-6386302858967654"
          }`}
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>

      <body className="font-sans antialiased">
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