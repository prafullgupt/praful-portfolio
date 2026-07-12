import { createElement } from "react";

const experienceStartYear = 2016;

export const MetaInfo = {
  // Basic SEO
  title: {
    default: "Praful Gupta | Senior Mobile & Web Developer",
    template: "%s | Praful Gupta",
  },
  description: "Senior Application Developer with 8+ years of experience in React Native, Android, Next.js, and AI integration. Building world-class mobile and web applications.",
  
  // Keywords — comprehensive and targeted
  keywords: [
    "Praful Gupta",
    "React Native Developer",
    "Android Developer",
    "Next.js Developer",
    "Mobile App Developer",
    "Full Stack Developer",
    "Team Leader",
    "Senior Application Developer",
    "Cross Platform Developer",
    "UI/UX Developer",
    "JavaScript Developer",
    "TypeScript Developer",
    "React Developer",
    "App Development India",
  ],
  
  // Authors & Creators
  authors: [{ name: "Praful Gupta", url: "https://github.com/prafullgupt" }],
  creator: "Praful Gupta",
  publisher: "Praful Gupta",
  
  // Robots — search engine crawling
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  
  // Canonical URL
  alternates: {
    canonical: "https://praful-gupta-portfolio.vercel.app/", // Apna actual domain daal do
  },
  
  // Open Graph — Facebook, LinkedIn, WhatsApp, etc.
  openGraph: {
    title: "Praful Gupta | Senior Mobile & Web Developer",
    description: `${new Date().getFullYear() - experienceStartYear}+ years of experience building world-class mobile and web applications with React Native, Next.js, and AI integration.`,
    url: "https://praful-gupta-portfolio.vercel.app/", // Apna domain
    siteName: "Praful Gupta Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://praful-gupta-portfolio.vercel.app/images/profile.png", // 1200x630 recommended
        width: 1200,
        height: 630,
        alt: "Praful Gupta - Senior Mobile & Web Developer",
        type: "image/png",
      },
      {
        url: "https://praful-gupta-portfolio.vercel.app/images/profile.png", // 1:1 for WhatsApp
        width: 800,
        height: 800,
        alt: "Praful Gupta - Senior Mobile & Web Developer",
        type: "image/png",
      },
    ],
  },
  
  // Twitter / X Cards
  twitter: {
    card: "summary_large_image",
    title: "Praful Gupta | Senior Mobile & Web Developer",
    description: `${new Date().getFullYear() - experienceStartYear}+ years of experience building world-class mobile and web applications.`,
    creator: "@yourTwitterHandle", // Apna Twitter handle daal do
    images: ["https://praful-gupta-portfolio.vercel.app/images/logo.png"],
  },
  
  // Icons — multiple sizes for all devices
  icons: {
    icon: [
      { url: "/images/profile.png", type: "image/png", sizes: "32x32" },
      { url: "/images/profile.png", type: "image/png", sizes: "192x192" },
    ],
    shortcut: ["/images/profile.png"],
    apple: [
      { url: "/images/profile.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/images/profile.png",
        color: "#5bbad5",
      },
    ],
  },
  
  // Manifest for PWA
  manifest: "/manifest.json",

  
  // Additional metadata
  category: "technology",
  classification: "Portfolio, Software Development, Mobile Development",
  referrer: "origin-when-cross-origin",
  applicationName: "Praful Gupta Portfolio",
  generator: "Next.js",
  
  // Apple specific
  appleWebApp: {
    capable: true,
    title: "Praful Gupta",
    statusBarStyle: "black-translucent",
  },
  
  // Format detection
  formatDetection: {
    telephone: true,
    date: true,
    address: true,
    email: true,
    url: true,
  },
  
  // App links (iOS/Android deep linking)
  itunes: {
    appId: "your-app-id", // Agar app hai to
  },
  appLinks: {
    ios: {
      url: "https://praful-gupta-portfolio.vercel.app/",
      app_store_id: "your-app-id",
    },
    android: {
      package: "com.yourapp.package",
      url: "https://praful-gupta-portfolio.vercel.app/",
    },
    web: {
      url: "https://praful-gupta-portfolio.vercel.app/",
      should_fallback: true,
    },
  },
  
  // Archives & Assets
  archives: ["https://praful-gupta-portfolio.vercel.app/blog"], // Agar blog hai to
  assets: ["https://praful-gupta-portfolio.vercel.app"],
  bookmarks: ["https://praful-gupta-portfolio.vercel.app"],
}

export function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Praful Gupta",
    url: "https://praful-gupta-portfolio.vercel.app/",
    image: "https://praful-gupta-portfolio.vercel.app/images/profile.png",
    sameAs: [
      "https://github.com/prafullgupt",
      "https://www.linkedin.com/in/prafull-gupta-958633169/",
      // "https://twitter.com/yourhandle",
    ],
    jobTitle: "Senior Application Developer",
    description: "Senior Application Developer with 8+ years of experience in React Native, Android, Next.js, and AI integration.",
    knowsAbout: [
      "React Native",
      "Android Development",
      "Next.js",
      "React",
      "TypeScript",
      "JavaScript",
      "Mobile App Development",
      "AI Integration",
      "Team Leadership",
    ],
    // alumniOf: {
    //   "@type": "EducationalOrganization",
    //   name: "Your University/College Name",
    // },
    // address: {
    //   "@type": "PostalAddress",
    //   addressLocality: "Your City",
    //   addressRegion: "Your State",
    //   addressCountry: "IN",
    // },
  }

  return createElement("script", {
    type: "application/ld+json",
    dangerouslySetInnerHTML: { __html: JSON.stringify(jsonLd) },
  })
}