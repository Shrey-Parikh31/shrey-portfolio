import { useRef, useEffect, useMemo, lazy, Suspense } from "react";
import { useTheme } from "../context/ThemeContext";
import { useTypewriter } from "../hooks/useTypewriter";
import { profile } from "../data/content";
import { useWindowPointer, useReducedMotion } from "../hooks/useInteraction";
import "./StackScene.css";

// three.js is ~800kB of the bundle. Splitting it out keeps the copy below as
// the first paint, and the scene arrives a moment later.
const StackCanvas = lazy(() => import("./StackCanvas"));

/** Smooth 0..1 ramp between two scroll positions. */
function ramp(p, start, end) {
  if (end === start) return p >= end ? 1 : 0;
  return Math.min(1, Math.max(0, (p - start) / (end - start)));
}

export default function StackScene() {
  const { themeId, themes } = useTheme();
  const pointer = useWindowPointer();
  const reduced = useReducedMotion();
  const colors = useMemo(
    () => (themes.find((t) => t.id === themeId) ?? themes[0]).colors,
    [themeId, themes]
  );

  const role = useTypewriter(profile.roles);
  const sectionRef = useRef(null);
  const topCopy = useRef(null);
  const bottomCopy = useRef(null);
  const progress = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const travel = el.offsetHeight - window.innerHeight;
      const p = travel > 0 ? -el.getBoundingClientRect().top / travel : 0;
      const clamped = Math.min(1, Math.max(0, p));
      progress.current = clamped;

      // Written straight to the DOM: this runs on every scroll frame, so it
      // must not go through React state.
      if (topCopy.current) {
        topCopy.current.style.opacity = String(1 - ramp(clamped, 0.06, 0.26));
      }
      if (bottomCopy.current) {
        bottomCopy.current.style.opacity = String(ramp(clamped, 0.66, 0.88));
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section className="stack-scene" ref={sectionRef} id="hero">
      <div className="stack-sticky">
        <Suspense fallback={null}>
          <StackCanvas
            colors={colors}
            pointer={pointer}
            reduced={reduced}
            progress={progress}
          />
        </Suspense>

        <div className="stack-copy stack-copy-left" ref={topCopy}>
          <p className="floor-tag">08 / tools</p>
          <h1 className="floor-name">{profile.name}</h1>
          <p className="floor-role">
            {role}
            <span className="caret" aria-hidden="true">|</span>
          </p>
          <p className="floor-body">{profile.tagline}</p>
          <p className="floor-cue">↓ scroll to descend</p>
        </div>

        <div className="stack-copy stack-copy-right" ref={bottomCopy}>
          <p className="floor-tag">00 / gates</p>
          <h2 className="floor-heading">Before the frameworks, there were gates.</h2>
          <p className="floor-body">
            An ALU, an accumulator and an instruction register, wired by hand in
            Logisim and simulated until an instruction actually moved between
            memory, registers and I/O. The die rolling to the left is the output
            stage of one of them.
          </p>
          <p className="floor-links">
            <a
              href="https://github.com/Shrey-Parikh31/digital-logic-register-reference-circuit"
              target="_blank"
              rel="noopener noreferrer"
            >
              register reference circuit
            </a>
            <a
              href="https://github.com/Shrey-Parikh31/digital-logic-2-player-dice"
              target="_blank"
              rel="noopener noreferrer"
            >
              2 player dice
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
