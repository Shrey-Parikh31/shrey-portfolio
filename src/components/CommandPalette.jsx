import { useEffect, useRef, useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { profile } from "../data/content";
import "./CommandPalette.css";

export default function CommandPalette({ open, onClose }) {
  const { setThemeId, themes } = useTheme();
  const [query, setQuery] = useState("");
  const [highlight, setHighlight] = useState(0);
  const dialogRef = useRef(null);
  const inputRef = useRef(null);
  const commands = [
    ...["projects", "experience", "research", "about", "skills", "case-study", "education", "contact", "play"].map((id) => ({
      id: `goto-${id}`, label: `Go to ${id === "play" ? "typing break" : id.replace("-", " ")}`,
      run: () => { const section = document.getElementById(id); section?.scrollIntoView(); section?.focus({ preventScroll: true }); },
    })),
    ...themes.map((theme) => ({ id: `theme-${theme.id}`, label: `Theme: ${theme.name}`, run: () => setThemeId(theme.id) })),
    { id: "email", label: "Email Shrey", run: () => { window.location.href = `mailto:${profile.email}`; } },
    { id: "linkedin", label: "Open LinkedIn", run: () => window.open(profile.linkedin, "_blank", "noopener,noreferrer") },
    { id: "github", label: "Open GitHub", run: () => window.open(profile.github, "_blank", "noopener,noreferrer") },
  ];
  const filtered = commands.filter((command) => command.label.toLowerCase().includes(query.trim().toLowerCase()));
  const activeCommandId = filtered[highlight]?.id;
  useEffect(() => {
    if (open) {
      setQuery(""); setHighlight(0); dialogRef.current.showModal(); inputRef.current.focus();
    } else dialogRef.current.close();
  }, [open]);
  useEffect(() => {
    if (open && activeCommandId) document.getElementById(activeCommandId)?.scrollIntoView({ block: "nearest", behavior: "instant" });
  }, [activeCommandId, open]);
  const execute = (command) => {
    if (!command) return;
    dialogRef.current.close(); onClose(); command.run();
  };
  return (
    <dialog ref={dialogRef} className="cmdk-box" aria-label="Command palette" onCancel={onClose}
      onClick={(event) => { if (event.target === event.currentTarget) onClose(); }}>
      <div className="cmdk-input-row">
        <label className="sr-only" htmlFor="command-search">Search commands</label>
        <input id="command-search" ref={inputRef} value={query}
          onChange={(event) => { setQuery(event.target.value); setHighlight(0); }}
          role="combobox" aria-expanded={open} aria-controls="command-options" aria-autocomplete="list"
          aria-activedescendant={filtered[highlight]?.id}
          onKeyDown={(event) => {
            if (event.key === "ArrowDown" || event.key === "ArrowUp") {
              event.preventDefault();
              if (filtered.length) setHighlight((value) => (value + (event.key === "ArrowDown" ? 1 : -1) + filtered.length) % filtered.length);
            } else if (event.key === "Enter") { event.preventDefault(); execute(filtered[highlight]); }
          }}
          placeholder="Find a page, theme, or shortcut..." spellCheck={false} autoComplete="off" />
        <button className="cmdk-close" onClick={onClose} aria-label="Close command palette">esc</button>
      </div>
      <ul id="command-options" className="cmdk-list" role="listbox" aria-label="Commands">
        {filtered.map((command, index) => (
          <li key={command.id} id={command.id} role="option" aria-selected={index === highlight}
            onMouseEnter={() => setHighlight(index)} onMouseDown={(event) => event.preventDefault()} onClick={() => execute(command)}>
            {command.label}
          </li>
        ))}
      </ul>
      {filtered.length === 0 && <p className="cmdk-empty" role="status">No matches. Try "projects", "theme", or "email".</p>}
      <p className="cmdk-help">Arrow keys to browse. Enter to select. Escape to close.</p>
    </dialog>
  );
}
