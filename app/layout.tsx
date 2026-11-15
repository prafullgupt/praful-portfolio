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
        {/* Preconnect & DNS Prefetch to Optimize Third-Party Script Latency */}
        <link rel="preconnect" href="https://pagead2.googlesyndication.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://googleads.g.doubleclick.net" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://pagead2.googlesyndication.com" />
        <link rel="dns-prefetch" href="https://googleads.g.doubleclick.net" />

        {/* Preload Critical Hero Image with High Priority for Instant LCP */}
        <link rel="preload" as="image" href="/images/PrafulGupta.webp" type="image/webp" fetchPriority="high" />

        {/* Google Search Console Verification */}
        <meta name="google-site-verification" content="google60d5871884da3454" />
        <meta name="google-site-verification" content="Pm8OWsSbTVBy-y-45hYhCUhRqAUshPTa4p8qyfykuOY" />

        {/* Favicon */}
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/favicon.svg" />

        {/* Google AdSense - Configured with non-personalized ads & lazyOnload for 100% Performance */}
        <Script
          id="adsense-consent"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `window.adsbygoogle = window.adsbygoogle || []; window.adsbygoogle.requestNonPersonalizedAds = 1;`,
          }}
        />
        <Script
          id="adsense-loader"
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${
            process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_CLIENT_ID || "ca-pub-6386302858967654"
          }`}
          crossOrigin="anonymous"
          strategy="lazyOnload"
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