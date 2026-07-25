import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import "./Navbar.css";

const LINKS = [
  { id: "about", label: "about" },
  { id: "skills", label: "skills" },
  { id: "experience", label: "experience" },
  { id: "research", label: "research" },
  { id: "projects", label: "projects" },
  { id: "contact", label: "contact" },
];

export default function Navbar({ onOpenPalette }) {
  const { themeId, setThemeId, themes } = useTheme();
  const [themeOpen, setThemeOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <button className="logo" onClick={() => scrollTo("hero")}>
          <span className="logo-bracket">&lt;</span>
          shrey
          <span className="logo-bracket">/&gt;</span>
        </button>

        <nav className="navlinks">
          {LINKS.map((link) => (
            <button key={link.id} onClick={() => scrollTo(link.id)}>
              {link.label}
            </button>
          ))}
        </nav>

        <div className="navbar-actions">
          <button
            className="cmdk-hint"
            onClick={onOpenPalette}
            title="Open command palette"
          >
            <span className="cmdk-hint-desktop">
              <kbd>ctrl</kbd>+<kbd>k</kbd>
            </span>
            <span className="cmdk-hint-mobile">menu</span>
          </button>

          <div className="theme-picker">
            <button
              className="theme-toggle"
              onClick={() => setThemeOpen((v) => !v)}
              onBlur={() => setTimeout(() => setThemeOpen(false), 120)}
            >
              ● theme
            </button>
            {themeOpen && (
              <ul className="theme-dropdown">
                {themes.map((t) => (
                  <li key={t.id}>
                    <button
                      className={t.id === themeId ? "active" : ""}
                      onMouseDown={() => setThemeId(t.id)}
                    >
                      <span
                        className="swatch"
                        style={{ background: t.colors.main }}
                      />
                      {t.name}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
