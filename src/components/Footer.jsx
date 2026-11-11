import { useTheme } from "../context/ThemeContext";
import "./Footer.css";

export default function Footer() {
  const { themeId, themes } = useTheme();
  const theme = themes.find((item) => item.id === themeId);
  return (
    <footer className="footer">
      <span>Shrey Parikh / Inspired by <a href="https://monkeytype.com" target="_blank" rel="noopener noreferrer">Monkeytype</a></span>
      <span>{theme?.name} <span aria-hidden="true">·</span> <a href="#hero">Back to top</a></span>
    </footer>
  );
}
