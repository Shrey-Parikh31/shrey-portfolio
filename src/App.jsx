import { useEffect, useState } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import CommandPalette from "./components/CommandPalette";
import Hero from "./components/Hero";
import StatsBar from "./components/StatsBar";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Research from "./components/Research";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

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
      <Navbar onOpenPalette={() => setPaletteOpen(true)} />
      <CommandPalette open={paletteOpen} onClose={() => setPaletteOpen(false)} />
      <main>
        <Hero />
        <StatsBar />
        <About />
        <Skills />
        <Experience />
        <Research />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
