import { createContext, useContext, useEffect, useState } from "react";
import { themes, defaultThemeId } from "../data/themes";

const ThemeContext = createContext(null);

function applyTheme(theme) {
  const root = document.documentElement;
  Object.entries(theme.colors).forEach(([key, value]) => {
    root.style.setProperty(`--${key}`, value);
  });
  root.dataset.theme = theme.id;
}

export function ThemeProvider({ children }) {
  const [themeId, setThemeId] = useState(() => {
    return localStorage.getItem("portfolio-theme") || defaultThemeId;
  });

  useEffect(() => {
    const theme = themes.find((t) => t.id === themeId) || themes[0];
    applyTheme(theme);
    localStorage.setItem("portfolio-theme", themeId);
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
