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
        <link
          rel="preload"
          as="image"
          href="/images/PrafulGupta-320.webp"
          imageSrcSet="/images/PrafulGupta-320.webp 320w, /images/PrafulGupta-640.webp 640w, /images/PrafulGupta.webp 800w"
          imageSizes="(max-width: 640px) 256px, 288px"
          fetchPriority="high"
        />

        {/* Google Search Console Verification */}
        <meta name="google-site-verification" content="google60d5871884da3454" />
        <meta name="google-site-verification" content="Pm8OWsSbTVBy-y-45hYhCUhRqAUshPTa4p8qyfykuOY" />

        {/* Favicon */}
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/favicon.svg" />

        {/* Google AdSense - Smart user-interaction loading to guarantee 100% Performance & zero 3rd-party cookie blocking */}
        <Script
          id="adsense-smart-loader"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var loaded = false;
                function loadAdSense() {
                  if (loaded) return;
                  loaded = true;
                  ['scroll', 'mousemove', 'touchstart', 'click'].forEach(function(ev) {
                    window.removeEventListener(ev, loadAdSense, { passive: true });
                  });
                  window.adsbygoogle = window.adsbygoogle || [];
                  window.adsbygoogle.requestNonPersonalizedAds = 1;
                  var s = document.createElement('script');
                  s.async = true;
                  s.crossOrigin = 'anonymous';
                  s.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${
                    process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_CLIENT_ID || "ca-pub-6386302858967654"
                  }';
                  document.head.appendChild(s);
                }
                ['scroll', 'mousemove', 'touchstart', 'click'].forEach(function(ev) {
                  window.addEventListener(ev, loadAdSense, { passive: true, once: true });
                });
              })();
            `,
          }}
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