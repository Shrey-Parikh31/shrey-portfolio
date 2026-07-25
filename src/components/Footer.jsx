import { useTheme } from "../context/ThemeContext";
import "./Footer.css";

export default function Footer() {
  const { themeId, themes } = useTheme();
  const theme = themes.find((t) => t.id === themeId);

  return (
    <footer className="footer">
      <span>designed &amp; built by Shrey Parikh</span>
      <span className="footer-theme">theme: {theme?.name}</span>
    </footer>
  );
}
