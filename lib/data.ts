export const experienceStartYear = 2018;
import { User, Target, Award, Briefcase } from "lucide-react"
import { Code2, Wrench, Layers, Languages } from "lucide-react"

export const personalInfo = {
  name: "Praful Gupta",
  title: "Team Leader (Senior Application & Web Developer)",
  tagline: `Building Scalable Mobile & Web Solutions with ${new Date().getFullYear() - experienceStartYear}+ Years of Experience`,
  email: "prafullgoel7@gmail.com",
  phone: "+91-8057381969",
  phone2: "+91-7417319939",
  whatsappNumber: "+918057381969",
  location: "Mohalla Kishor Kan, Sardhana, Meerut (UP) - 250342",
  linkedin: "https://linkedin.com/in/prafull-gupto-958633169",
  github: "https://github.com/prafullgupt",
  about: `Dedicated and results-oriented Mobile Application Developer with over ${new Date().getFullYear() - experienceStartYear}+ years of experience in software engineering. Currently serving as a Team Leader and React Native Developer at Harshit Infosolutions Pvt. Ltd. Proven track record in the complete software development life cycle, with expertise in development, release, and maintenance. Additionally skilled in integrating AI (Artificial Intelligence) solutions into mobile applications to enhance user experience and performance. Possess excellent communication skills, self-motivation, and strong organizational abilities, along with leadership capabilities. A highly effective team player, consistently contributing to the achievement of project goals.`,
}

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export const stats = [
  { icon: Briefcase, label: "Years Experience", value: `${new Date().getFullYear() - 2018}+` },
  { icon: Target, label: "Projects Completed", value: "35+" },
  { icon: Award, label: "Certifications", value: "8+" },
  { icon: User, label: "Happy Clients", value: "15+" },
]

export const skills = {
  programming: [
    "Core Java",
    "React Native",
    "React JS",
    "Next.js",
    "JavaScript",
    "XML",
    "Android",
    "iOS",
    "Kotlin",
    "MVVM",
    "Firebase",
    "REST APIs",
    "Payment Gateway",
    "Push Notifications",
    "Crashlytics",
    "App Security",
  ],
  tools: [
    "Android Studio",
    "Xcode",
    "Visual Studio Code",
    "Notepad++",
    "Git",
    "Jenkins",
    "JIRA",
    "ChatGPT",
    "Cursor AI",
  ],
  otherTools: [
    "Play Console (Android)",
    "App Store Connect (Apple)",
    "Microsoft Office",
    "Putty",
    "FileZilla",
    "Postman",
    "Trello",
    "Cloudflare",
  ],
  languages: ["English", "Hindi"],
}

export const experiences = [
  {
    id: 1,
    company: "Harshit Infosolutions Pvt. Ltd.",
    role: "Team Leader (Senior Application Developer)",
    period: "2023 - Present",
    location: "Noida, India",
    description: `Currently serving as the Team Leader for KetoBalanced, FastBetter, YogaRise, and Calmate fitness apps, leading a dynamic team in delivering personalized and innovative health and wellness solutions. Each app addresses different aspects of fitness and well-being.`,
    responsibilities: [
      "Leading mobile and web application development for all fitness products",
      "Resolving technical issues and ensuring timely delivery of high-quality products",
      "Collaborating with cross-functional teams to drive innovation and user engagement",
      "Integrating AI solutions to enhance user experience and app performance",
      "Managing team workflows, code reviews, and deployment processes",
    ],
    technologies: ["React Native", "Android Studio", "Node.js", "Xcode", "Trello", "Git", "ChatGPT", "Cursor", "Claude AI"],
    projects: [
      {
        name: "Calmate AI",
        description: "Leverages AI to analyze food intake and provide accurate calorie counts. Logs daily consumption and generates detailed reports, helping users stay informed and make smarter dietary choices.",
        link: "https://play.google.com/store/apps/details?id=com.calmate.ai&hl=en_IN",
      },
      {
        name: "KetoBalanced",
        description: "Provides customised diet plans based on user data, integrating accounting principles into diet planning to ensure effective results. Features engaging workout videos and a variety of delicious keto recipes.",
        link: "https://play.google.com/store/apps/details?id=com.ketoplan.lowcarb.tracker",
      },
      {
        name: "YogaRise",
        description: "Offers a holistic approach to wellness with guided yoga sessions, mindfulness exercises, and tailored routines.",
        link: "https://play.google.com/store/apps/details?id=yogarise.wellness.yoga",
      },
      {
        name: "FastBetter",
        description: "Empowers users with tools to track progress, set goals, and achieve sustainable fitness outcomes.",
        link: "https://play.google.com/store/apps/details?id=fastbetter.fastingtracker.weightloss",
      },
      {
        name: "FastMate AI",
        description: "An AI-powered fasting tracker that provides personalized insights and recommendations to optimize fasting routines. It helps users track their fasting periods, monitor progress, and receive tailored advice for better health outcomes.",
        link: "https://play.google.com/store/apps/details?id=app.fastmate.ai",
      },

    ],
    image: "/images/office_icon.png",
  },
  {
    id: 2,
    company: "NSSPL - Ondot Systems (Fiserv)",
    role: "Android Developer - SUST Team",
    period: "2022 - 2023",
    location: "NSSPL, Delhi",
    description: `Ondot is part of Fiserv now. Ondot Systems is a white-label solution that gives consumers control over payment cards. Ondot brings together an experienced management team from mobile, security, and payment card industries who share a vision of transforming how consumers interact with their financial services.`,
    responsibilities: [
      "Android Developer in the SUST team, resolving crashlytics issues",
      "Ensuring timely product delivery and maintaining code quality",
      "Working on payment card security and mobile banking features",
    ],
    technologies: ["Core Java", "Android Studio", "Kotlin", "Git", "Jenkins", "JIRA"],
    projects: [],
    image: "/images/office_icon.png",
  },
  {
    id: 3,
    company: "CRKB IT Solutions Pvt. Ltd.",
    role: "Android Developer / Lead Developer",
    period: "2021 - 2022",
    location: "Noida, India",
    description: "Worked on multiple Android applications as Lead Developer, handling client interactions, frontend and backend designing.",
    responsibilities: [
      "Lead Developer for multiple Android applications",
      "Client interaction and requirement gathering",
      "Frontend and backend designing",
      "Database architecture and API development",
    ],
    technologies: ["Core Java", "PHP API", "MySQL Database", "Android Studio", "Git", "Jenkins", "JIRA"],
    projects: [
      {
        name: "RPTECH Service",
        description: "A study app that provides online eBooks and online tests to students. Students can purchase any course, read it anytime, and give tests.",
        link: "",
      },
      {
        name: "Next Door Hub",
        description: "A PG room booking app that allows users to book rooms online. Users can directly contact the PG owner and pay online.",
        link: "https://play.google.com/store/apps/details?id=com.nextdoor.app",
      },
      {
        name: "JMJ Sports",
        description: "An online sports marketplace app where users can buy sports equipment sitting at home. Supports both online and cash payments with order tracking.",
        link: "",
      },
      {
        name: "Sainik Novidya & SSC & GLC",
        description: "A study app providing online eBooks, tests, and video lectures. Students can purchase courses and study anytime.",
        link: "",
      },
    ],
    image: "/images/office_icon.png",
  },
  {
    id: 4,
    company: "Lotusamaze IT Solutions",
    role: "Head of Development",
    period: "2018 - 2021",
    location: "Meerut, India",
    description: "Led the development team and worked on company portfolio and educational websites.",
    responsibilities: [
      "Lead Developer for company portfolio and educational websites",
      "Frontend and backend designing",
      "Managing development team and project timelines",
    ],
    technologies: ["PHP Laravel", "MySQL Database", "HTML", "CSS", "Photoshop"],
    projects: [
      {
        name: "Education Lotusamaze",
        description: "Company portfolio and study website. Students can learn IT-related courses online.",
        link: "https://Lotusamaze.com",
      },
      {
        name: "Mytutorsonline",
        description: "A study website where students can take online classes through video calls by paying online and can also give online tests.",
        link: "https://www.mytutorsonline.com/",
      },
    ],
    image: "/images/office_icon.png",
  },
]

export const otherProjects = [
  {
    id: 1,
    name: "Ayuryog - Ayurvedic Wellness Platform",
    description: "Built & deployed a full-stack Ayurvedic wellness platform using Next.js 14 App Router with 7+ dynamic pages, reusable components, and dynamic blog routing.",
    technologies: ["Next.js", "Trello", "Git", "GoDaddy", "Cloudflare", "ChatGPT", "Cursor", "Claude AI", "Kimi"],
    github: "https://github.com/prafullgupt/ayuryog-nextjs",
    link: "https://ayuryog.life/",
  },
]

export const education = [
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "CSJM University , Kanpur",
    year: "2019",
  },
  {
    degree: "Intermediate (12th)",
    institution: "Meerut",
    year: "2016",
  },
  {
    degree: "High School (10th)",
    institution: "Meerut",
    year: "2014",
  },
]

export const certifications = [
  { name: "Android, Kotlin & Java Development Certification", institution: "Ducat Institute, Noida", year: "2018" },
  { name: "Python Certification", institution: "Ducat Institute, Noida", year: "2018" },
  { name: "IoT Certification", institution: "Ducat Institute, Noida", year: "2018" },
  { name: "C & C++ Development Certification", institution: "Meerut", year: "2015" },
  { name: "Golden Book of World Records Certification", institution: "IIMT University, Meerut", year: "2018" },
  { name: "Rashtriya Sanskrit Sansthan Certification", institution: "IIMT University, Meerut", year: "2017" },
  { name: "Talent Search General Knowledge Certification", institution: "Meerut", year: "2011" },
  { name: "Scout Guide Certification", institution: "Meerut", year: "2010" },
]

export const achievements = [
  "Golden Book of World Records Certification - IIMT University, Meerut (2018)",
  "Led development teams across multiple companies delivering 10+ successful projects",
  "Integrated AI solutions (ChatGPT, Claude, Cursor) into mobile applications",
  "Managed end-to-end app deployment on Play Store and App Store",
]

// export const skillCategories = [
//   {
//     title: "Programming & Frameworks",
//     icon: Code2,
//     skills: skills.programming,
//     color: "from-blue-500 to-cyan-500 dark:from-blue-400 dark:to-cyan-400",
//     bgColor: "bg-blue-50 dark:bg-blue-500/10",
//     textColor: "text-blue-700 dark:text-blue-300",
//     borderColor: "border-blue-200 dark:border-blue-500/20",
//   },
//   {
//     title: "Development Tools",
//     icon: Wrench,
//     skills: skills.tools,
//     color: "from-purple-500 to-pink-500 dark:from-purple-400 dark:to-pink-400",
//     bgColor: "bg-purple-50 dark:bg-purple-500/10",
//     textColor: "text-purple-700 dark:text-purple-300",
//     borderColor: "border-purple-200 dark:border-purple-500/20",
//   },
//   {
//     title: "Other Tools & Platforms",
//     icon: Layers,
//     skills: skills.otherTools,
//     color: "from-orange-500 to-red-500 dark:from-orange-400 dark:to-red-400",
//     bgColor: "bg-blue-50 dark:bg-blue-500/10",
//     textColor: "text-orange-700 dark:text-orange-300",
//     borderColor: "border-orange-200 dark:border-orange-500/20",
//   },
//   {
//     title: "Languages",
//     icon: Languages,
//     skills: skills.languages,
//     color: "from-green-500 to-emerald-500 dark:from-green-400 dark:to-emerald-400",
//     bgColor: "bg-green-50 dark:bg-green-500/10",
//     textColor: "text-green-700 dark:text-green-300",
//     borderColor: "border-green-200 dark:border-green-500/20",
//   },
// ]

export const skillCategories = [
  {
    title: "Programming & Frameworks",
    icon: Code2,
    description: "Core technologies for mobile & web development",
    color: "from-blue-500 to-cyan-500",
    darkColor: "from-blue-400 to-cyan-400",
    bgColor: "bg-blue-50 dark:bg-blue-500/10",
    textColor: "text-blue-700 dark:text-blue-300",
    borderColor: "border-blue-200 dark:border-blue-500/20",
    progressColor: "bg-blue-500",
    skills: [
      { name: "Core Java", level: 95 },
      { name: "React Native", level: 92 },
      { name: "React JS", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "JavaScript", level: 93 },
      { name: "XML", level: 88 },
      { name: "Android", level: 96 },
      { name: "iOS", level: 85 },
      { name: "Kotlin", level: 90 },
      { name: "MVVM", level: 92 },
      { name: "Firebase", level: 88 },
      { name: "REST APIs", level: 95 },
      { name: "Payment Gateway", level: 82 },
      { name: "Push Notifications", level: 90 },
      { name: "Crashlytics", level: 87 },
      { name: "App Security", level: 85 },
    ]
  },
  {
    title: "Development Tools",
    icon: Wrench,
    description: "IDEs and workflow tools for efficient development",
    color: "from-purple-500 to-pink-500",
    darkColor: "from-purple-400 to-pink-400",
    bgColor: "bg-purple-50 dark:bg-purple-500/10",
    textColor: "text-purple-700 dark:text-purple-300",
    borderColor: "border-purple-200 dark:border-purple-500/20",
    progressColor: "bg-purple-500",
    skills: [
      { name: "Android Studio", level: 96 },
      { name: "Xcode", level: 85 },
      { name: "Visual Studio Code", level: 94 },
      { name: "Notepad++", level: 80 },
      { name: "Git", level: 92 },
      { name: "Jenkins", level: 78 },
      { name: "JIRA", level: 88 },
      { name: "ChatGPT", level: 95 },
      { name: "Cursor AI", level: 90 },
    ]
  },
  {
    title: "Other Tools & Platforms",
    icon: Layers,
    description: "Platforms for deployment, management & collaboration",
     color: "from-purple-500 to-pink-500",
    darkColor: "from-purple-400 to-pink-400",
    bgColor: "bg-purple-50 dark:bg-purple-500/10",
    textColor: "text-purple-700 dark:text-purple-300",
    borderColor: "border-purple-200 dark:border-purple-500/20",
    progressColor: "bg-purple-500",
    skills: [
      { name: "Play Console (Android)", level: 92 },
      { name: "App Store Connect (Apple)", level: 85 },
      { name: "Microsoft Office", level: 88 },
      { name: "Putty", level: 75 },
      { name: "FileZilla", level: 80 },
      { name: "Postman", level: 93 },
      { name: "Trello", level: 85 },
      { name: "Cloudflare", level: 78 },
    ]
  },
  {
    title: "Languages",
    icon: Languages,
    description: "Communication proficiency in different languages",
    color: "from-blue-500 to-cyan-500",
    darkColor: "from-blue-400 to-cyan-400",
    bgColor: "bg-blue-50 dark:bg-blue-500/10",
    textColor: "text-blue-700 dark:text-blue-300",
    borderColor: "border-blue-200 dark:border-blue-500/20",
    progressColor: "bg-blue-500",
    skills: [
      { name: "English", level: 90 },
      { name: "Hindi", level: 100 },
    ]
  },
]