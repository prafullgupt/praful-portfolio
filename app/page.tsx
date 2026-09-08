import Navbar from "./components/Navbar"
import Hero from "./sections/Hero"
import About from "./sections/About"
import Experience from "./sections/Experience"
import Skills from "./sections/Skills"
import Projects from "./sections/Projects"
import Education from "./sections/Education"
import Contact from "./sections/Contact"
import Footer from "./sections/Footer"
import { Whatsapp } from "./components/whatsapp_component"
import AIChatbot from "./components/AIChatbot"
import FlyingBird from "./components/FlyingBird"
import SmartBirds from "./components/SmartBirds"
import GoogleAd from "./components/GoogleAd"

export default function Home() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      <Footer />
      {/* <Whatsapp/> */}
      <AIChatbot />
      <FlyingBird />
       <GoogleAd
        slot="2435282524"
        format="auto"
        responsive={true}
        className="my-8 background-gray-100 dark:bg-gray-800 rounded-lg p-4"
      />
      {/* <SmartBirds /> */}
    </main>
  )
}
