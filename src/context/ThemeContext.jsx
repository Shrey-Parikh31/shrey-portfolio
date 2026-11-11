import { createContext, useContext, useLayoutEffect, useState } from "react";
import { themes, defaultThemeId } from "../data/themes";

const ThemeContext = createContext(null);

function applyTheme(theme) {
  const root = document.documentElement;
  Object.entries(theme.colors).forEach(([key, value]) => {
    root.style.setProperty(`--${key.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`)}`, value);
  });
  root.dataset.theme = theme.id;
}

export function ThemeProvider({ children }) {
  const [themeId, setThemeId] = useState(() => {
    try {
      const saved = localStorage.getItem("portfolio-theme");
      return themes.some((theme) => theme.id === saved) ? saved : defaultThemeId;
    } catch {
      return defaultThemeId;
    }
  });

  useLayoutEffect(() => {
    const theme = themes.find((t) => t.id === themeId) || themes[0];
    applyTheme(theme);
    try {
      localStorage.setItem("portfolio-theme", theme.id);
    } catch {
      // Theme switching still works when browser storage is unavailable.
    }
  }, [themeId]);

  return (
    <ThemeContext.Provider value={{ themeId, setThemeId, themes }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
