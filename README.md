# Shrey Parikh — Portfolio

Personal portfolio site built with React + Vite. Inspired by [monkeytype](https://github.com/monkeytypegame/monkeytype)'s minimalist, keyboard-first UI.

## Features

- Monospace, terminal-inspired design (JetBrains Mono)
- 6 switchable color themes (amber dark, dracula, nord, gruvbox, neon, paper light), persisted per visitor
- Command palette (`Ctrl+K` or `Cmd+K`) for jumping to sections, switching themes, and opening contact links
- Featured project explorer with evaluation evidence, source links, and documented limitations
- Expandable case study, experience, research details, and additional projects
- Optional typing practice and a copy-email button
- Responsive layouts, visible keyboard focus, reduced-motion support, and readable colors across all six themes

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Checks

```bash
npm test
npm run lint
```

The tests check theme contrast and typing-score calculations. The linter currently reports one existing Fast Refresh warning because `ThemeContext.jsx` exports both the provider and its hook.

## Updating content

Edit `src/data/content.js` for profile information, experience, projects, education, and the case study. Theme colors live in `src/data/themes.js`. The main page composition is in `src/App.jsx`.

The earlier 3D stack prototype remains in the source for reference, but is not loaded by the active portfolio page.
