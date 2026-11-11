import { useRef } from "react";
import { useTheme } from "../context/ThemeContext";
import "./Navbar.css";

export default function Navbar({ onOpenPalette }) {
  const { themeId, setThemeId, themes } = useTheme();
  const themePicker = useRef(null);
  const theme = themes.find((item) => item.id === themeId) || themes[0];
  return (
    <header className="navbar">
      <div className="navbar-inner">
        <a className="logo" href="#hero" aria-label="Shrey Parikh, back to top">shrey<span aria-hidden="true">_</span></a>
        <nav className="navlinks" aria-label="Main navigation">
          <a href="#projects">work</a><a href="#experience">experience</a><a href="#about">about</a><a href="#contact">contact</a>
        </nav>
        <div className="navbar-actions">
          <button className="cmdk-hint" onClick={onOpenPalette} aria-label="Open command palette" title="Command palette: Ctrl or Command + K">
            <svg viewBox="0 0 24 24" width="17" height="17" fill="none" aria-hidden="true"><path d="m5 6 5 6-5 6m8 0h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            <span>menu</span><kbd>K</kbd>
          </button>
          <details className="theme-picker" ref={themePicker}
            onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) event.currentTarget.open = false; }}
            onKeyDown={(event) => { if (event.key === "Escape") { themePicker.current.open = false; themePicker.current.querySelector("summary").focus(); } }}>
            <summary className="theme-toggle" aria-label={`Choose theme, current theme ${theme.name}`}>
              <span className="swatch" aria-hidden="true" /><span className="theme-name">{theme.name}</span><span className="theme-short">theme</span>
            </summary>
            <div className="theme-dropdown" role="group" aria-label="Color themes">
              {themes.map((item) => (
                <button key={item.id} aria-pressed={item.id === themeId}
                  onClick={() => { setThemeId(item.id); themePicker.current.open = false; themePicker.current.querySelector("summary").focus(); }}>
                  <span className="swatch" style={{ backgroundColor: item.colors.main }} aria-hidden="true" />
                  {item.name}<span className="theme-selection" aria-hidden="true">{item.id === themeId ? "selected" : ""}</span>
                </button>
              ))}
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
