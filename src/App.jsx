import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import SkillsGalaxy from "./components/SkillsGalaxy";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-space-950 text-slate-100">
      <Navbar />
      <main>
        <Hero />
        <About />
        <SkillsGalaxy />
        <Projects />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
