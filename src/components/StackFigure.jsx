import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const DAMP = 0.07;

/** A terminal-headed figure that turns to follow the pointer. */
export function TerminalFigure({ colors, pointer, reduced }) {
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
