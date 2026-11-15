import { createElement } from "react";

const experienceStartYear = 2018;
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://praful-gupta-portfolio.vercel.app";
const adsenseClientId = process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_CLIENT_ID || "ca-pub-6386302858967654";

export const MetaInfo = {
  // Basic SEO - Targeted for "Praful Gupta" to rank #1 on Google
  title: {
    default: "Praful Gupta | Senior Application & Web Developer | Team Leader",
    template: "%s | Praful Gupta",
  },
  description: "Official portfolio of Praful Gupta — Senior Application Developer, Team Leader & Full Stack Web Developer with 8+ years of expertise in React Native, Android, iOS, Next.js, and AI Integration. Explore Praful Gupta's career, projects, and contact info.",
  
  other: {
    "google-adsense-account": adsenseClientId,
  },
  // Keywords — targeted for Google search intent
  keywords: [
    "Praful Gupta",
    "Prafull Gupta",
    "Praful Gupta Developer",
    "Praful Gupta Portfolio",
    "Praful Gupta React Native",
    "Praful Gupta Android Developer",
    "Praful Gupta Team Leader",
    "Praful Gupta Meerut",
    "Praful Gupta Noida",
    "Praful Gupta Harshit Infosolutions",
    "prafulgupt",
    "prafullgoel7",
    "Praful Gupta Senior Application Developer",
    "React Native Developer India",
    "Senior Web Developer Praful Gupta",
    "Full Stack Developer Praful Gupta",
    "Mobile App Developer Praful Gupta",
    "AI App Developer Praful Gupta",
    "KetoBalanced Praful Gupta",
    "FastBetter Praful Gupta",
    "YogaRise Praful Gupta",
    "Calmate AI Praful Gupta",
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
    canonical: `${siteUrl}/`,
  },
  
  // Open Graph — Facebook, LinkedIn, WhatsApp, etc.
  openGraph: {
    title: "Praful Gupta | Senior Application & Web Developer | Team Leader",
    description: "Official portfolio of Praful Gupta: Senior Mobile & Web Application Developer & Team Leader with 8+ years experience in React Native, Next.js, and AI solutions.",
    url: `${siteUrl}/`,
    siteName: "Praful Gupta",
    locale: "en_US",
    type: "profile",
    images: [
      {
        url: `${siteUrl}/images/profile.png`,
        width: 1200,
        height: 630,
        alt: "Praful Gupta - Senior Application & Web Developer, Team Leader",
        type: "image/png",
      },
      {
        url: `${siteUrl}/images/profile.png`,
        width: 800,
        height: 800,
        alt: "Praful Gupta - Senior Mobile & Web Developer Profile Photo",
        type: "image/png",
      },
    ],
  },
  
  // Twitter / X Cards
  twitter: {
    card: "summary_large_image",
    title: "Praful Gupta | Senior Application Developer",
    description: "Senior Application Developer & Team Leader with 8+ years experience building world-class mobile & web applications.",
    images: [
      {
        url: `${siteUrl}/images/profile.png`,
        alt: "Praful Gupta - Senior Mobile & Web Developer",
      },
    ],
  },
  
  // Icons — Circular SVG Favicon
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/images/profile.png", type: "image/png", sizes: "192x192" },
    ],
    shortcut: ["/favicon.svg"],
    apple: [
      { url: "/favicon.svg", sizes: "180x180", type: "image/svg+xml" },
    ],
  },
  
  manifest: "/manifest.json",

  category: "technology",
  classification: "Portfolio, Software Development, Mobile Development",
  referrer: "origin-when-cross-origin",
  applicationName: "Praful Gupta Portfolio",
  generator: "Next.js",
  
  appleWebApp: {
    capable: true,
    title: "Praful Gupta",
    statusBarStyle: "black-translucent",
  },
  
  formatDetection: {
    telephone: true,
    date: true,
    address: true,
    email: true,
    url: true,
  },
}

export function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${siteUrl}/#person`,
        name: "Praful Gupta",
        alternateName: ["Prafull Gupta", "prafulgupt", "Prafull Goel"],
        url: `${siteUrl}/`,
        image: {
          "@type": "ImageObject",
          "url": `${siteUrl}/images/profile.png`,
          "name": "Praful Gupta",
          "caption": "Praful Gupta - Senior Application & Web Developer, Team Leader",
          "description": "Official portrait of Praful Gupta, Senior Mobile & Web Application Developer"
        },
        jobTitle: "Team Leader & Senior Application Developer",
        worksFor: {
          "@type": "Organization",
          name: "Harshit Infosolutions Pvt. Ltd.",
          url: "https://harshitinfosolutions.com/",
        },
        address: {
          "@type": "PostalAddress",
          addressLocality: "Meerut",
          addressRegion: "Uttar Pradesh",
          postalCode: "250342",
          addressCountry: "IN",
        },
        email: "mailto:prafullgoel7@gmail.com",
        telephone: process.env.NEXT_PUBLIC_OWNER_PHONE || "+91-7417319939",
        sameAs: [
          "https://github.com/prafullgupt",
          "https://linkedin.com/in/prafull-gupto-958633169",
        ],
        description: "Praful Gupta is a Senior Application Developer & Team Leader with 8+ years of software engineering experience specializing in React Native, Android, Next.js, and AI integration.",
        knowsAbout: [
          "React Native",
          "Android Development",
          "Next.js",
          "React.js",
          "Mobile Application Development",
          "Cross-Platform App Development",
          "AI Integration",
          "iOS Development",
          "Team Leadership",
          "Full Stack Web Development",
          "Kotlin",
          "Java",
          "TypeScript",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: `${siteUrl}/`,
        name: "Praful Gupta Portfolio",
        alternateName: "Praful Gupta Official Website",
        description: "Official portfolio website of Praful Gupta, Senior Mobile & Web Developer.",
        publisher: {
          "@id": `${siteUrl}/#person`,
        },
        primaryImageOfPage: {
          "@type": "ImageObject",
          "url": `${siteUrl}/images/profile.png`,
          "name": "Praful Gupta"
        },
        inLanguage: "en",
      },
      {
        "@type": "ProfilePage",
        "@id": `${siteUrl}/#profilepage`,
        url: `${siteUrl}/`,
        name: "Praful Gupta Profile",
        primaryImageOfPage: {
          "@type": "ImageObject",
          "url": `${siteUrl}/images/profile.png`,
          "name": "Praful Gupta"
        },
        mainEntity: {
          "@id": `${siteUrl}/#person`,
        },
      },
    ],
  };

  return createElement("script", {
    type: "application/ld+json",
    dangerouslySetInnerHTML: { __html: JSON.stringify(jsonLd) },
  });
}
