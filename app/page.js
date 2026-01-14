import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import Skills from "./components/Skills";
import ProjectsSection from "./components/ProjectsSection";
import Experience from "./components/Experience";
import ContactCTA from "./components/ContactCTA";
export default function Home() {
  return (
    <main className="bg-black pb-0 mt-4 text-white">
      <Hero />
      <AboutSection />
      <Skills />
      <ProjectsSection />
      <Experience />
      <ContactCTA />
    </main>
  );
}
