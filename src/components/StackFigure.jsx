import { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useTheme } from "../context/ThemeContext";
import "./StackFigure.css";

const DAMP = 0.07;

function useReducedMotion() {
  return useMemo(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches,
    []
  );
}

/**
 * Pointer position normalised to -1..1 across the whole window.
 * r3f's own `state.pointer` only updates while the cursor is over the canvas,
 * which makes the figure freeze as soon as you move onto the text below it.
 */
function useWindowPointer() {
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

/** A terminal-headed figure that turns to follow the pointer. */
function Figure({ colors, pointer, reduced }) {
  const head = useRef();
  const body = useRef();
  const leftCaret = useRef();
  const rightCaret = useRef();

  useFrame((state) => {
    if (reduced || !head.current) return;
    const { x, y } = pointer.current;
    const t = state.clock.elapsedTime;

    // Head turns toward the pointer, damped so it lags a beat behind.
    const targetY = x * 0.6 + Math.sin(t * 0.5) * 0.03;
    const targetX = -y * 0.32 + Math.sin(t * 0.37) * 0.02;
    head.current.rotation.y += (targetY - head.current.rotation.y) * DAMP;
    head.current.rotation.x += (targetX - head.current.rotation.x) * DAMP;

    // Shoulders counter-rotate a little, so the turn reads through the body.
    if (body.current) {
      const bodyY = x * 0.16;
      body.current.rotation.y += (bodyY - body.current.rotation.y) * (DAMP * 0.6);
    }

    // Carets drift inside the screen, tracking further than the head turns.
    const caretX = x * 0.14;
    const caretY = y * 0.09;
    const blink = Math.sin(t * 2.2) > 0.97 ? 0.05 : 1;
    [leftCaret, rightCaret].forEach((ref, i) => {
      if (!ref.current) return;
      ref.current.position.x = (i === 0 ? -0.26 : 0.26) + caretX;
      ref.current.position.y = 0.04 + caretY;
      ref.current.scale.y = blink;
    });
  });

  return (
    <group position={[0, -0.25, 0]}>
      <group ref={body}>
        {/* shoulders */}
        <mesh position={[0, -1.32, 0]}>
          <boxGeometry args={[1.62, 0.52, 0.76]} />
          <meshStandardMaterial color={colors.sub} roughness={0.85} />
        </mesh>
        {/* collar */}
        <mesh position={[0, -1.02, 0.02]}>
          <boxGeometry args={[0.92, 0.16, 0.6]} />
          <meshStandardMaterial color={colors.bgElevated} roughness={0.7} />
        </mesh>
        {/* neck */}
        <mesh position={[0, -0.82, 0]}>
          <cylinderGeometry args={[0.15, 0.19, 0.34, 20]} />
          <meshStandardMaterial color={colors.sub} roughness={0.9} />
        </mesh>
      </group>

      <group ref={head}>
        {/* CRT shell */}
        <mesh>
          <boxGeometry args={[1.46, 1.2, 1.16]} />
          <meshStandardMaterial color={colors.bgElevated} roughness={0.55} />
        </mesh>

        {/* screen recess */}
        <mesh position={[0, 0.08, 0.585]}>
          <planeGeometry args={[1.14, 0.76]} />
          <meshBasicMaterial color={colors.bg} />
        </mesh>

        {/* caret eyes: the monkeytype cursor, staring back */}
        <mesh ref={leftCaret} position={[-0.26, 0.04, 0.59]}>
          <planeGeometry args={[0.1, 0.3]} />
          <meshBasicMaterial color={colors.main} />
        </mesh>
        <mesh ref={rightCaret} position={[0.26, 0.04, 0.59]}>
          <planeGeometry args={[0.1, 0.3]} />
          <meshBasicMaterial color={colors.main} />
        </mesh>

        {/* vent slots below the screen */}
        {[-0.3, 0, 0.3].map((x) => (
          <mesh key={x} position={[x, -0.44, 0.59]}>
            <planeGeometry args={[0.17, 0.035]} />
            <meshBasicMaterial color={colors.sub} />
          </mesh>
        ))}
      </group>
    </group>
  );
}

export default function StackFigure() {
  const { themeId, themes } = useTheme();
  const pointer = useWindowPointer();
  const reduced = useReducedMotion();
  const colors = useMemo(
    () => (themes.find((t) => t.id === themeId) ?? themes[0]).colors,
    [themeId, themes]
  );

  return (
    <div className="stack-figure" aria-hidden="true">
      <Canvas camera={{ position: [0, 0, 6.2], fov: 42 }} dpr={[1, 2]}>
        <ambientLight intensity={0.75} />
        <directionalLight position={[3, 4, 5]} intensity={1.1} />
        <directionalLight position={[-4, -1, 2]} intensity={0.35} />
        <Figure colors={colors} pointer={pointer} reduced={reduced} />
      </Canvas>
    </div>
  );
}
