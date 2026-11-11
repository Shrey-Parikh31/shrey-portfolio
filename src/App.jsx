import { useEffect, useState } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import CommandPalette from "./components/CommandPalette";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Research from "./components/Research";
import Projects from "./components/Projects";
import CaseStudy from "./components/CaseStudy";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import TypingBreak from "./components/TypingBreak";

function App() {
  const [paletteOpen, setPaletteOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      const isK = e.key === "k" || e.key === "K";
      if ((e.ctrlKey || e.metaKey) && isK) {
        e.preventDefault();
        setPaletteOpen((v) => !v);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <ThemeProvider>
      <a className="skip-link" href="#main">Skip to content</a>
      <Navbar onOpenPalette={() => setPaletteOpen(true)} />
      <CommandPalette open={paletteOpen} onClose={() => setPaletteOpen(false)} />
      <main id="main" tabIndex={-1}>
        <Hero />
        <Projects />
        <CaseStudy />
        <Experience />
        <Research />
        <About />
        <Skills />
        <Education />
        <Contact />
        <TypingBreak />
      </main>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
