# Praful Gupta - Portfolio Website

A modern, responsive portfolio website built with Next.js 15, React 19, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- **Smooth Animations** - Powered by Framer Motion
- **Dark/Light Theme** - Built with Tailwind CSS
- **SEO Optimized** - Meta tags and Open Graph support
- **Fast Performance** - Static export for optimal loading speed
- **Contact Form** - Ready-to-use contact section
- **Timeline Design** - Beautiful work experience timeline

## Tech Stack

- Next.js 15 (App Router)
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React Icons

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Navigate to project folder
cd praful-portfolio

# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

### Build for Production

```bash
npm run build
```

This will generate a static export in the `out` folder.

## Project Structure

```
praful-portfolio/
├── app/
│   ├── components/     # Reusable components
│   │   └── Navbar.tsx
│   ├── sections/       # Page sections
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Experience.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Education.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── lib/
│   ├── data.ts         # All resume data
│   └── utils.ts
├── public/
│   ├── images/
│   │   └── profile.png  # Your profile photo
│   └── resume/
│       └── Praful_Gupta_Resume.pdf
├── next.config.js
├── tailwind.config.ts
└── package.json
```

## Customization

All personal information is stored in `lib/data.ts`. Update this file to customize:
- Personal details
- Work experience
- Skills
- Projects
- Education
- Certifications

## Contact

- Email: prafullgoel7@gmail.com
- Phone: +91-8057381969
- LinkedIn: https://linkedin.com/in/prafull-gupto-958633169
- GitHub: https://github.com/prafullgupt

## License

This project is open source and available under the MIT License.
