/**
 * Environment Variables Configuration & Validation
 * Praful Gupta Portfolio
 *
 * All client-side environment variables in Next.js must be prefixed with `NEXT_PUBLIC_`.
 * Values are defined in `.env` (or `.env.local` for local secrets).
 * Refer to `.env.example` for instructions on setting up each provider.
 */

export const env = {
  // 1. EmailJS (Contact Inquiry System)
  emailjs: {
    serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
    templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
    publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "",
    isConfigured: Boolean(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID &&
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID &&
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY &&
      !process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID.includes("your_")
    ),
  },

  // 2. Firebase Analytics & Real-Time Monitoring
  firebase: {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "",
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "",
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "",
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "",
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "",
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "",
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID || "",
    isConfigured: Boolean(
      process.env.NEXT_PUBLIC_FIREBASE_API_KEY &&
      !process.env.NEXT_PUBLIC_FIREBASE_API_KEY.includes("Dummy")
    ),
  },

  // 3. Google AdSense & Web Monetization
  adsense: {
    clientId: process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_CLIENT_ID || "ca-pub-6386302858967654",
    analyticsId: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID || "ca-pub-6386302858967654",
  },

  // 4. Portfolio Site Meta & SEO
  site: {
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://praful-gupta-portfolio.vercel.app",
    ownerName: process.env.NEXT_PUBLIC_OWNER_NAME || "Praful Gupta",
    ownerRole: process.env.NEXT_PUBLIC_OWNER_ROLE || "Senior Application & Web Developer | Team Leader",
    ownerEmail: process.env.NEXT_PUBLIC_OWNER_EMAIL || "prafullgoel7@gmail.com",
    ownerPhone: process.env.NEXT_PUBLIC_OWNER_PHONE || "+91 7417319939",
    ownerLocation: process.env.NEXT_PUBLIC_OWNER_LOCATION || "Noida / Delhi NCR, India",
  },
} as const;

export default env;
