import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { AboutSection } from "@/sections/About";
import { ContactSection } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";
import { AchievementsSection } from "@/sections/Achievement";
import { Hackathon } from "@/sections/Hackathon";

export default function Home() {
  return (
    <div>
      <Header />
      <section id="home">
        <HeroSection />
      </section>
      <AchievementsSection />
      <section id="projects">
        <ProjectsSection />
      </section>
      <section id="hackathons">
        <Hackathon />
      </section>
      <section id="about">
        <AboutSection />
      </section>
      <section id="contact">
        <ContactSection />
      </section>
      <section id="footer">
        <Footer />
      </section>
    </div>
  );
}
