import { useEffect, useMemo, useRef, useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { profile } from "../data/content";
import "./CommandPalette.css";

export default function CommandPalette({ open, onClose }) {
  const { setThemeId, themes } = useTheme();
  const [query, setQuery] = useState("");
  const [highlight, setHighlight] = useState(0);
  const inputRef = useRef(null);

  const commands = useMemo(() => {
    const nav = ["about", "skills", "experience", "research", "projects", "education", "contact"].map(
      (id) => ({
        id: `goto-${id}`,
        label: `go to ${id}`,
        run: () => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }),
      })
    );
    const themeCmds = themes.map((t) => ({
      id: `theme-${t.id}`,
      label: `theme: ${t.name}`,
      run: () => setThemeId(t.id),
    }));
    const utility = [
      {
        id: "copy-email",
        label: `copy email (${profile.email})`,
        run: () => navigator.clipboard.writeText(profile.email),
      },
      {
        id: "open-linkedin",
        label: "open LinkedIn profile",
        run: () => window.open(profile.linkedin, "_blank", "noopener"),
      },
      {
        id: "top",
        label: "back to top",
        run: () => document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" }),
      },
    ];
    return [...nav, ...themeCmds, ...utility];
  }, [themes, setThemeId]);

  const filtered = useMemo(() => {
    if (!query.trim()) return commands;
    const q = query.toLowerCase();
    return commands.filter((c) => c.label.toLowerCase().includes(q));
  }, [commands, query]);

  useEffect(() => {
    setHighlight(0);
  }, [query, open]);

  useEffect(() => {
    if (open) {
      setQuery("");
      setTimeout(() => inputRef.current?.focus(), 10);
    }
  }, [open]);

  const execute = (cmd) => {
    if (!cmd) return;
    cmd.run();
    onClose();
  };

  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      onClose();
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setHighlight((h) => Math.min(h + 1, filtered.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlight((h) => Math.max(h - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      execute(filtered[highlight]);
    }
  };

  if (!open) return null;

  return (
    <div className="cmdk-overlay" onMouseDown={onClose}>
      <div className="cmdk-box" onMouseDown={(e) => e.stopPropagation()}>
        <div className="cmdk-input-row">
          <span className="cmdk-caret">&gt;</span>
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="type a command..."
            spellCheck={false}
          />
        </div>
        <ul className="cmdk-list">
          {filtered.length === 0 && <li className="cmdk-empty">no matches</li>}
          {filtered.map((cmd, i) => (
            <li
              key={cmd.id}
              className={i === highlight ? "active" : ""}
              onMouseEnter={() => setHighlight(i)}
              onMouseDown={() => execute(cmd)}
            >
              {cmd.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
