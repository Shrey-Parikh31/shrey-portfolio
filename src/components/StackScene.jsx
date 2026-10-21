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
      // Leaving copy blurs and drifts up; arriving copy sharpens from below.
      if (topCopy.current) {
        const out = ramp(clamped, 0.04, 0.3);
        topCopy.current.style.opacity = String(1 - out);
        topCopy.current.style.filter = `blur(${(out * 14).toFixed(2)}px)`;
        topCopy.current.style.transform = `translateY(${(out * -56).toFixed(1)}px)`;
      }
      if (bottomCopy.current) {
        const show = ramp(clamped, 0.46, 0.82);
        bottomCopy.current.style.opacity = String(show);
        bottomCopy.current.style.filter = `blur(${((1 - show) * 14).toFixed(2)}px)`;
        bottomCopy.current.style.transform = `translateY(${((1 - show) * 56).toFixed(1)}px)`;
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

        <div className="stack-copy stack-copy-left">
          {/* Inner wrapper carries the animation so the outer element keeps
              owning layout, which differs between desktop and mobile. */}
          <div className="stack-copy-inner" ref={topCopy}>
            <p className="floor-tag">08 / tools</p>
            <h1 className="floor-name">{profile.name}</h1>
            <p className="floor-role">
              {role}
              <span className="caret" aria-hidden="true">|</span>
            </p>
            <p className="floor-body">{profile.tagline}</p>
            <p className="floor-cue">↓ scroll to descend</p>
          </div>
        </div>

        <div className="stack-copy stack-copy-right">
          <div className="stack-copy-inner stack-copy-hidden" ref={bottomCopy}>
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
      </div>
    </section>
  );
}
