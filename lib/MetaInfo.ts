import { createElement } from "react";

const experienceStartYear = 2018;
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://praful-gupta-portfolio.vercel.app";
const adsenseClientId = process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_CLIENT_ID || "ca-pub-6386302858967654";

export const MetaInfo = {
  // Comprehensive SEO Optimized for "Praful Gupta" & "प्रफुल गुप्ता" #1 Google Ranking
  metadataBase: new URL(siteUrl),
  title: {
    default: "Praful Gupta (प्रफुल गुप्ता) | Senior Application & Web Developer | Team Leader",
    template: "%s | Praful Gupta (प्रफुल गुप्ता)",
  },
  description: "Official portfolio of Praful Gupta (प्रफुल गुप्ता) — Senior Application Developer, Team Leader & Mobile/Web Architect with 8+ years of expertise in React Native, Android, iOS, Next.js, and Multimodal AI Integration. Explore Praful Gupta's career, featured apps, open-source repositories, and direct contact details.",
  
  other: {
    "google-adsense-account": adsenseClientId,
  },

  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
  },

  // Keywords — targeted for Google English & Hindi search queries
  keywords: [
    // Primary English Search Queries
    "Praful Gupta",
    "Prafull Gupta",
    "Praful Gupta Developer",
    "Praful Gupta Portfolio",
    "Praful Gupta Website",
    "Praful Gupta Official",
    "Praful Gupta Senior Developer",
    "Praful Gupta Team Leader",
    "Praful Gupta React Native",
    "Praful Gupta Android Developer",
    "Praful Gupta iOS Developer",
    "Praful Gupta Next.js",
    "Praful Gupta Full Stack Developer",
    "Praful Gupta Meerut",
    "Praful Gupta Noida",
    "Praful Gupta Delhi NCR",
    "Praful Gupta Harshit Infosolutions",
    "prafulgupt",
    "prafullgoel7",
    "Praful Gupta AI Developer",
    "Praful Gupta Senior Application Developer",
    
    // Devanagari / Hindi Voice & Typed Queries
    "प्रफुल गुप्ता",
    "प्रफुल्ल गुप्ता",
    "प्रफुल गुप्ता डेवलपर",
    "प्रफुल गुप्ता पोर्टफोलियो",
    "प्रफुल गुप्ता वेबसाइट",
    "प्रफुल गुप्ता रिएक्ट नेटिव",
    "प्रफुल गुप्ता सीनियर डेवलपर",
    "प्रफुल गुप्ता टीम लीडर",
    "प्रफुल गुप्ता मेरठ",
    "प्रफुल गुप्ता नोएडा",
    "प्रफुल गुप्ता हर्षित इन्फोसोल्यूशंस",

    // Project & Skill associations
    "KetoBalanced Praful Gupta",
    "FastBetter Praful Gupta",
    "YogaRise Praful Gupta",
    "Calmate AI Praful Gupta",
    "React Native Developer India",
    "Senior Mobile App Developer India",
    "Senior Application Developer India",
  ],
  
  // Authors & Creators
  authors: [{ name: "Praful Gupta", url: "https://github.com/prafullgupt" }],
  creator: "Praful Gupta",
  publisher: "Praful Gupta",
  
  // Search Engine Crawling Directives
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
  
  // Open Graph — Facebook, LinkedIn, WhatsApp, Google Discover
  openGraph: {
    title: "Praful Gupta (प्रफुल गुप्ता) | Senior Application & Web Developer | Team Leader",
    description: "Official portfolio of Praful Gupta (प्रफुल गुप्ता): Senior Application Developer & Team Leader with 8+ years experience in React Native, Android, iOS, Next.js, and AI solutions.",
    url: `${siteUrl}/`,
    siteName: "Praful Gupta Official Portfolio",
    locale: "en_US",
    alternateLocale: ["hi_IN"],
    type: "profile",
    images: [
      {
        url: `${siteUrl}/images/profile.png`,
        width: 1200,
        height: 630,
        alt: "Praful Gupta (प्रफुल गुप्ता) - Senior Application & Web Developer, Team Leader",
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
    title: "Praful Gupta (प्रफुल गुप्ता) | Senior Application Developer",
    description: "Senior Application Developer & Team Leader with 8+ years experience building world-class mobile & web applications.",
    images: [
      {
        url: `${siteUrl}/images/profile.png`,
        alt: "Praful Gupta - Senior Mobile & Web Developer",
      },
    ],
  },
  
  // Icons — Circular SVG Favicon & High-Res App Icons for Mobile SERP
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/images/profile.png", type: "image/png", sizes: "192x192" },
      { url: "/images/profile.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: ["/favicon.svg"],
    apple: [
      { url: "/favicon.svg", sizes: "180x180", type: "image/svg+xml" },
      { url: "/images/profile.png", sizes: "180x180", type: "image/png" },
    ],
  },
  
  manifest: "/manifest.json",

  category: "technology",
  classification: "Portfolio, Software Development, Mobile Development, Full Stack",
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
};

export function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      // 1. Person Entity (Google Knowledge Graph)
      {
        "@type": "Person",
        "@id": `${siteUrl}/#person`,
        name: "Praful Gupta",
        alternateName: [
          "प्रफुल गुप्ता",
          "प्रफुल्ल गुप्ता",
          "Prafull Gupta",
          "prafulgupt",
          "Prafull Goel",
          "Praful Gupta Developer",
          "प्रफुल गुप्ता डेवलपर"
        ],
        givenName: "Praful",
        familyName: "Gupta",
        gender: "https://schema.org/Male",
        nationality: {
          "@type": "Country",
          name: "India"
        },
        url: `${siteUrl}/`,
        image: {
          "@type": "ImageObject",
          "url": `${siteUrl}/images/profile.png`,
          "name": "Praful Gupta",
          "caption": "Praful Gupta (प्रफुल गुप्ता) - Senior Application & Web Developer, Team Leader",
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
        homeLocation: {
          "@type": "Place",
          name: "Meerut, Uttar Pradesh, India"
        },
        alumniOf: {
          "@type": "EducationalOrganization",
          name: "Chaudhary Charan Singh University (CCSU), Meerut"
        },
        email: "mailto:prafullgoel7@gmail.com",
        telephone: process.env.NEXT_PUBLIC_OWNER_PHONE || "+91-7417319939",
        knowsLanguage: ["en", "hi"],
        sameAs: [
          "https://github.com/prafullgupt",
          "https://linkedin.com/in/prafull-gupto-958633169",
          "https://twitter.com/prafullgoel7",
          `${siteUrl}/`
        ],
        description: "Praful Gupta (प्रफुल गुप्ता) is a Senior Application Developer & Team Leader with 8+ years of software engineering experience specializing in React Native, Android, iOS, Next.js, and AI integration.",
        hasOccupation: {
          "@type": "Occupation",
          name: "Senior Application Developer & Team Leader",
          occupationalCategory: "15-1252.00 - Software Developers",
          skills: "React Native, Android Development, iOS Swift, Next.js, TypeScript, AI Solutions, Mobile App Architecture"
        },
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

      // 2. WebSite Entity
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: `${siteUrl}/`,
        name: "Praful Gupta (प्रफुल गुप्ता) | Official Portfolio",
        alternateName: [
          "Praful Gupta Portfolio",
          "प्रफुल गुप्ता पोर्टफोलियो",
          "Praful Gupta Official Website",
          "Praful Gupta Website"
        ],
        description: "Official portfolio website of Praful Gupta (प्रफुल गुप्ता), Senior Mobile & Web Developer.",
        publisher: {
          "@id": `${siteUrl}/#person`,
        },
        primaryImageOfPage: {
          "@type": "ImageObject",
          "url": `${siteUrl}/images/profile.png`,
          "name": "Praful Gupta"
        },
        inLanguage: ["en", "hi"],
      },

      // 3. ProfilePage Entity
      {
        "@type": "ProfilePage",
        "@id": `${siteUrl}/#profilepage`,
        url: `${siteUrl}/`,
        name: "Praful Gupta (प्रफुल गुप्ता) Profile",
        primaryImageOfPage: {
          "@type": "ImageObject",
          "url": `${siteUrl}/images/profile.png`,
          "name": "Praful Gupta"
        },
        mainEntity: {
          "@id": `${siteUrl}/#person`,
        },
        inLanguage: ["en", "hi"],
      },

      // 4. BreadcrumbList Entity (Enables Rich Breadcrumbs in Google Search)
      {
        "@type": "BreadcrumbList",
        "@id": `${siteUrl}/#breadcrumbs`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: `${siteUrl}/`
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "About Praful Gupta",
            item: `${siteUrl}/#about`
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Featured Projects",
            item: `${siteUrl}/#projects`
          },
          {
            "@type": "ListItem",
            position: 4,
            name: "Technical Skills",
            item: `${siteUrl}/#skills`
          },
          {
            "@type": "ListItem",
            position: 5,
            name: "Contact Praful Gupta",
            item: `${siteUrl}/#contact`
          }
        ]
      },

      // 5. FAQPage Entity (Captures Direct Answer Boxes on Google)
      {
        "@type": "FAQPage",
        "@id": `${siteUrl}/#faq`,
        mainEntity: [
          {
            "@type": "Question",
            name: "Who is Praful Gupta (प्रफुल गुप्ता)?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Praful Gupta (प्रफुल गुप्ता) is a Senior Application Developer & Team Leader at Harshit Infosolutions Pvt. Ltd. with 8+ years of production experience specializing in React Native, Android (Kotlin/Java), iOS (Swift), Next.js, and Multimodal AI solutions."
            }
          },
          {
            "@type": "Question",
            name: "What technologies and skills does Praful Gupta specialize in?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Praful Gupta specializes in cross-platform mobile development (React Native), native mobile engineering (Android Studio, iOS Xcode, Swift), modern web frameworks (Next.js 15, React.js, TypeScript), and advanced AI integrations (vision, voice, and multimodal intelligence)."
            }
          },
          {
            "@type": "Question",
            name: "How can I contact Praful Gupta for projects or engineering leadership roles?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "You can reach Praful Gupta directly via email at prafullgoel7@gmail.com, phone or WhatsApp at +91 7417319939, or through the contact portal on his official portfolio website: https://praful-gupta-portfolio.vercel.app/."
            }
          }
        ]
      }
    ],
  };

  return createElement("script", {
    type: "application/ld+json",
    dangerouslySetInnerHTML: { __html: JSON.stringify(jsonLd) },
  });
}
