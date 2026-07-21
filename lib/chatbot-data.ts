// ============================================
// Chatbot Types & Knowledge Base
// For Praful Gupta Portfolio
// ============================================
import {personalInfo} from '@/lib/data'

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  contactUrl: string;
}

export interface KnowledgeEntry {
  keywords: string[];
  response: string;
}

export interface ChatMessage {
  id: number;
  type: "user" | "bot";
  text: string;
  time: string;
}

// ---- CONFIG: Update with your actual contact details ----
export const CONTACT_INFO: ContactInfo = {
  email: "prafulgupta@example.com",      // <-- Yahan apna email daalein
  phone: "+91-XXXXXXXXXX",               // <-- Yahan apna phone number daalein
  location: "Noida, India",
  contactUrl: "/#contact",
};

// ---- Portfolio Knowledge Base ----
export const PORTFOLIO_KNOWLEDGE: Record<string, KnowledgeEntry> = {
  intro: {
    keywords: ["hello", "hi", "hey", "namaste", "who are you", "name", "introduce", "about you"],
    response: `👋 Hi! I'm **Praful Gupta** — a **Team Leader (Senior Application & Web Developer)** with **8+ years** of experience building scalable mobile and web solutions. I specialize in React Native, Next.js, React JS, and AI integration. Currently leading the development team at **Harshit Infosolutions Pvt. Ltd.** in Noida, India. How can I help you today?`,
  },
  experience: {
    keywords: ["experience", "years", "career", "journey", "work history", "professional"],
    response: `I have **8+ years** of professional experience in software development. Here's my journey:

• **2023 – Present**: Team Leader (Senior Application Developer) at **Harshit Infosolutions Pvt. Ltd.**, Noida
• **2022 – 2023**: Android Developer at **NSSPL - Ondot Systems (Fiserv)**, Delhi
• **2021 – 2022**: Android Developer / Lead Developer at **CRKB IT Solutions Pvt. Ltd.**, Noida
• **2018 – 2021**: Head of Development at **Lotusamaze IT Solutions**, Meerut`,
  },
  currentJob: {
    keywords: ["current job", "current work", "present", "now working", "harshit", "company", "where do you work"],
    response: `Currently, I'm serving as a **Team Leader (Senior Application Developer)** at **Harshit Infosolutions Pvt. Ltd.** in Noida, India.

I lead the development of multiple fitness and wellness apps including:
• **Calmate AI** – AI-powered calorie tracker
• **KetoBalanced** – Keto diet planning app
• **YogaRise** – Yoga & mindfulness app
• **FastBetter** – Fitness goal tracker
• **FastMate AI** – AI-powered fasting tracker`,
  },
  skills: {
    keywords: ["skills", "tech stack", "technologies", "know", "expertise", "programming", "framework", "language", "tools"],
    response: `My technical toolkit includes:

**Programming & Frameworks:**
• React Native, React JS, Next.js, JavaScript, Core Java, Node.js

**Development Tools:**
• Android Studio, Xcode, Visual Studio Code, Git

**Platforms & Deployment:**
• Play Console (Android), App Store Connect (Apple)

**AI Integration:**
• ChatGPT, Claude, Cursor AI

**Languages:**
• English, Hindi`,
  },
  projects: {
    keywords: ["projects", "apps", "applications", "portfolio", "built", "developed", "calmate", "ketobalanced", "yogarise", "fastbetter", "fastmate"],
    response: `I've built and led **35+ projects** across various domains. Here are some highlights:

**At Harshit Infosolutions (Current):**
• **Calmate AI** – AI analyzes food intake & calorie counts
• **KetoBalanced** – Custom keto diet plans with workout videos
• **YogaRise** – Guided yoga sessions & mindfulness exercises
• **FastBetter** – Progress tracking & sustainable fitness goals
• **FastMate AI** – AI-powered fasting tracker with personalized insights

**At CRKB IT Solutions:**
• **RPTECH Service** – Study app with eBooks & online tests
• **Next Door Hub** – PG room booking app with online payments
• **JMJ Sports** – Online sports equipment marketplace
• **Sainik Novidya** – Study app with video lectures

**At Lotusamaze IT Solutions:**
• **Education Lotusamaze** – Company portfolio & IT courses website
• **Mytutorsonline** – Online tutoring with video calls

**Personal Project:**
• **Ayuryog** – Ayurvedic wellness platform built with Next.js 14
• **Humble info tech** - Empowering Digital Solutions`,
  },
  education: {
    keywords: ["education", "degree", "study", "college", "university", "school", "bca", "qualification"],
    response: `My educational background:

• **Bachelor of Computer Applications (BCA)** – CSJM University, Kanpur (2019)
• **Intermediate (12th)** – Meerut (2016)
• **High School (10th)** – Meerut (2014)`,
  },
  certifications: {
    keywords: ["certification", "certificate", "course", "trained", "ducet", "iimt"],
    response: `I hold **8+ certifications** including:

• Android, Kotlin & Java Development – Ducat Institute, Noida (2018)
• Python – Ducat Institute, Noida (2018)
• IoT – Ducat Institute, Noida (2018)
• C & C++ Development – Meerut (2015)
• **Golden Book of World Records** – IIMT University, Meerut (2018)
• Rashtriya Sanskrit Sansthan – IIMT University, Meerut (2017)
• Talent Search General Knowledge – Meerut (2011)
• Scout Guide – Meerut (2010)`,
  },
  achievements: {
    keywords: ["achievement", "award", "record", "accomplishment", "milestone", "success"],
    response: `🏆 **Key Achievements:**

• **Golden Book of World Records Certification** – IIMT University, Meerut (2018)
• Led development teams across multiple companies delivering **10+ successful projects**
• Integrated **AI solutions** (ChatGPT, Claude, Cursor) into mobile applications
• Managed **end-to-end app deployment** on Play Store and App Store
• **8+ Years** Experience | **35+ Projects** Completed | **15+ Happy Clients** | **8+ Certifications**`,
  },
  contact: {
    keywords: ["contact", "email", "phone", "reach", "hire", "message", "talk", "connect", "get in touch"],
    response: `📬 **Let's Connect!**

You can reach me directly:

• **Email:** ${personalInfo.email}
• **Phone:** ${personalInfo.phone}
• **Location:** ${personalInfo.location}

[CONTACT_BUTTON]`,
  },
  location: {
    keywords: ["location", "city", "where", "live", "address", "noida", "meerut", "india"],
    response: `I'm based in **Noida, India** and originally from **Meerut, Uttar Pradesh**. Currently working at Harshit Infosolutions Pvt. Ltd. in Noida.`,
  },
  hire: {
    keywords: ["hire", "job", "freelance", "project", "collaborate", "work together", "opportunity", "available"],
    response: `I'm always open to exciting opportunities and collaborations!

With **8+ years** of experience in mobile and web development, I can help you build:
• Cross-platform mobile apps (React Native)
• Modern web applications (Next.js, React JS)
• AI-integrated solutions
• End-to-end product development

📧 **Email:** ${personalInfo.email}
📱 **Phone:** ${personalInfo.phone}

[CONTACT_BUTTON]`,
  },
  ai: {
    keywords: ["ai", "artificial intelligence", "chatgpt", "claude", "cursor", "machine learning", "openai"],
    response: `I have hands-on experience integrating **AI solutions** into mobile applications to enhance user experience and performance.

**AI Tools I work with:**
• ChatGPT API integration
• Claude AI
• Cursor AI

**AI Projects I've built:**
• **Calmate AI** – AI-powered food & calorie analysis
• **FastMate AI** – AI-powered fasting insights & recommendations

I can help you integrate AI capabilities into your mobile or web applications!`,
  },
  reactNative: {
    keywords: ["react native", "mobile app", "android", "ios", "cross platform", "app development"],
    response: `React Native is my core expertise! I have **8+ years** of experience building cross-platform mobile applications for both **Android** and **iOS**.

**Mobile Apps I've built:**
• Calmate AI, KetoBalanced, YogaRise, FastBetter, FastMate AI
• RPTECH Service, Next Door Hub, JMJ Sports, Sainik Novidya

**Tools:** Android Studio, Xcode, Play Console, App Store Connect

I can build your mobile app from scratch to Play Store/App Store deployment!`,
  },
  web: {
    keywords: ["web", "website", "next.js", "nextjs", "react js", "frontend", "backend", "full stack"],
    response: `I build modern, scalable web applications using cutting-edge technologies.

**Web Technologies:**
• Next.js 14 (App Router)
• React JS
• Node.js
• JavaScript

**Web Projects:**
• **Ayuryog** – Ayurvedic wellness platform (Next.js 14, 7+ dynamic pages)
• **Education Lotusamaze** – Company portfolio & e-learning site
• **Mytutorsonline** – Online tutoring platform with video calls
• **Humble info tech** - Empowering Digital Solutions`,
  },
};

// ---- Quick Suggestion Chips ----
export const QUICK_SUGGESTIONS: string[] = [
  "Who are you?",
  "Your experience?",
  "Your skills?",
  "Your projects?",
  "Hire you?",
  "Contact info?",
];

// ============================================
// Helper: Find best response based on keywords
// ============================================
export function findBestResponse(userMessage: string): string {
  const msg = userMessage.toLowerCase();
  let bestMatch: string = '';
  let maxScore = 0;

  for (const [, data] of Object.entries(PORTFOLIO_KNOWLEDGE)) {
    let score = 0;
    for (const keyword of data.keywords) {
      if (msg.includes(keyword.toLowerCase())) {
        score += 1;
        if (keyword.length > 5) score += 0.5;
      }
    }
    if (score > maxScore) {
      maxScore = score;
      bestMatch = data.response;
    }
  }

  if (maxScore < 1) {
    return `That's an interesting question! However, I can best help you with information about **Praful Gupta's** portfolio, skills, experience, and projects.

For other queries, feel free to reach out directly:

📧 **Email:** ${personalInfo.email}
📱 **Phone:** ${personalInfo.phone}
📍 **Location:** ${CONTACT_INFO.location}

[CONTACT_BUTTON]`;
  }

  return bestMatch;
}