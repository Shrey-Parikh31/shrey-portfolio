import { useRef, useEffect, useMemo } from "react";

/**
 * These live apart from the 3D components on purpose: anything that imports
 * them must not drag three.js into the eager bundle.
 */

export function useReducedMotion() {
  return useMemo(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches,
    []
  );
}

/**
 * Pointer position normalised to -1..1 across the whole window.
 * react-three-fiber's own `state.pointer` only updates while the cursor is over
 * the canvas, which makes a figure freeze the moment you move onto the text.
 */
export function useWindowPointer() {
  const pointer = useRef({ x: 0, y: 0 });
  useEffect(() => {
    const onMove = (e) => {
      pointer.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.current.y = -((e.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);
  return pointer;
}
