import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";

// Which of the seven segments is lit for each digit.
// Order: top, topLeft, topRight, middle, bottomLeft, bottomRight, bottom
const DIGITS = {
  1: [0, 0, 1, 0, 0, 1, 0],
  2: [1, 0, 1, 1, 1, 0, 1],
  3: [1, 0, 1, 1, 0, 1, 1],
  4: [0, 1, 1, 1, 0, 1, 0],
  5: [1, 1, 0, 1, 0, 1, 1],
  6: [1, 1, 0, 1, 1, 1, 1],
};

// [x, y, horizontal?]
const SEGMENTS = [
  [0, 0.62, true],
  [-0.32, 0.31, false],
  [0.32, 0.31, false],
  [0, 0, true],
  [-0.32, -0.31, false],
  [0.32, -0.31, false],
  [0, -0.62, true],
];

/** A seven-segment display rolling a die, the output stage of the Logisim circuit. */
function SevenSegment({ colors }) {
  const refs = useRef([]);
  const digit = useRef(1);
  const nextRoll = useRef(0);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (t > nextRoll.current) {
      digit.current = 1 + Math.floor(Math.random() * 6);
      nextRoll.current = t + 1.6;
    }
    const lit = DIGITS[digit.current];
    refs.current.forEach((mesh, i) => {
      if (mesh) mesh.material.opacity = lit[i] ? 1 : 0.12;
    });
  });

  return (
    <group>
      {SEGMENTS.map(([x, y, horizontal], i) => (
        <mesh
          key={i}
          // Block body matters: React 19 treats a returned value from a ref
          // callback as a cleanup function, which breaks the ref.
          ref={(el) => {
            refs.current[i] = el;
          }}
          position={[x, y, 0.06]}
        >
          <planeGeometry args={horizontal ? [0.54, 0.1] : [0.1, 0.5]} />
          <meshBasicMaterial color={colors.main} transparent opacity={0.12} />
        </mesh>
      ))}
      {/* display housing */}
      <mesh position={[0, 0, -0.02]}>
        <planeGeometry args={[1.1, 1.6]} />
        <meshBasicMaterial color={colors.bgElevated} />
      </mesh>
    </group>
  );
}

/** Circuit traces that light up as signal propagates toward the display. */
function Traces({ colors, reduced }) {
  const group = useRef();

  // A fixed, hand-ish layout so it reads as a board rather than noise.
  const lines = useMemo(() => {
    const out = [];
    for (let i = 0; i < 14; i++) {
      const y = -2.6 + i * 0.4;
      const width = 1.6 + ((i * 7) % 5) * 0.9;
      const x = ((i % 2 === 0 ? -1 : 1) * width) / 2 - (i % 3) * 0.3;
      out.push({ x, y, width, phase: (i % 7) / 7 });
    }
    return out;
  }, []);

  useFrame((state) => {
    if (reduced || !group.current) return;
    const t = state.clock.elapsedTime;
    group.current.children.forEach((mesh, i) => {
      const phase = lines[i]?.phase ?? 0;
      // A pulse sweeps through the traces on a loop.
      const pulse = Math.sin((t * 0.9 - phase * Math.PI * 2) % (Math.PI * 2));
      mesh.material.opacity = 0.12 + Math.max(0, pulse) * 0.75;
    });
  });

  return (
    <group ref={group}>
      {lines.map((l, i) => (
        <mesh key={i} position={[l.x, l.y, -0.4]}>
          <planeGeometry args={[l.width, 0.035]} />
          <meshBasicMaterial color={colors.main} transparent opacity={0.15} />
        </mesh>
      ))}
    </group>
  );
}

/** Floor 00: logic gates. Traces carry a signal to a seven-segment dice readout. */
export default function GateFloor({ colors, reduced }) {
  return (
    <group>
      {/* board backing */}
      <mesh position={[0, 0, -0.6]}>
        <planeGeometry args={[9, 6.4]} />
        <meshBasicMaterial color={colors.bgElevated} transparent opacity={0.28} />
      </mesh>
      <Traces colors={colors} reduced={reduced} />
      <group position={[0, 0.1, 0]}>
        <SevenSegment colors={colors} />
      </group>
    </group>
  );
}
