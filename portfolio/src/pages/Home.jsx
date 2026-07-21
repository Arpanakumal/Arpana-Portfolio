import { ThemeToggle } from "../components/ThemeToggle";
import {StarBackground} from "../components/StarBackground";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { AboutMe } from "../components/AboutMe";
import { SkillsSection } from "../components/SkillsSection";
import {ProjectSection} from "../components/ProjectSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";





export function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

      {/**theme toggle */}
<ThemeToggle/>


      {/**backgroung */}

<StarBackground/>
      {/**navbar */}
<Navbar/>

      {/**main content */}
<main>
  <HeroSection/>
  <AboutMe/>
  <SkillsSection/>
  <ProjectSection/>
  <ContactSection/>
</main>

      {/**footer */}
      <Footer/>




    </div>
  );
}