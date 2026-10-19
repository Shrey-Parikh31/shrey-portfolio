import { useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { TerminalFigure } from "./StackFigure";
import GateFloor from "./GateFloor";

// World-space drop from floor 08 down to floor 00.
const FALL = 17;
const CAMERA_Z = 6.2;
const FOV = 42;

/** Moves the camera down the column as the section scrolls. */
function CameraRig({ progress, reduced }) {
  useFrame((state) => {
    const target = -progress.current * FALL;
    const cam = state.camera;
    // Damped, so a flick of the scroll wheel still reads as falling, not cutting.
    cam.position.y += (target - cam.position.y) * (reduced ? 1 : 0.1);
    cam.position.z = CAMERA_Z;
    cam.lookAt(0, cam.position.y, 0);
  });
  return null;
}

/** Faint strata you fall past, so the drop reads as depth rather than a fade. */
function Strata({ colors }) {
  const layers = useMemo(
    () => Array.from({ length: 11 }, (_, i) => -1.4 - i * 1.4),
    []
  );
  return (
    <group>
      {layers.map((y, i) => (
        <mesh key={y} position={[0, y, -2.2]}>
          <planeGeometry args={[14, 0.02]} />
          <meshBasicMaterial
            color={colors.sub}
            transparent
            opacity={i % 3 === 0 ? 0.3 : 0.14}
          />
        </mesh>
      ))}
    </group>
  );
}

/**
 * Floor content, offset sideways so the 3D never collides with the copy.
 * Below the CSS breakpoint the copy moves under the canvas, so the art centres.
 */
function Floors({ colors, pointer, reduced }) {
  const size = useThree((s) => s.size);

  // Deliberately NOT useThree().viewport: that is measured from the camera's
  // distance to the origin, and the rig drives the camera down to -FALL, so the
  // offset would grow with scroll and shove the floors off-screen. The camera
  // always sits CAMERA_Z in front of the floor plane, so derive it from that.
  const visibleWidth = useMemo(() => {
    const vFov = (FOV * Math.PI) / 180;
    const height = 2 * CAMERA_Z * Math.tan(vFov / 2);
    return height * (size.width / size.height);
  }, [size.width, size.height]);

  // Matches the 760px breakpoint in StackScene.css.
  const narrow = size.width < 760;
  const offset = narrow ? 0 : visibleWidth * 0.21;
  const scale = narrow ? 0.72 : 1;

  // Scale is applied per floor, never to a parent: scaling a wrapper would
  // also scale the gap between floors and desync the camera travel.
  return (
    <>
      {/* floor 08, tools */}
      <group position={[offset, -0.25, 0]} scale={scale}>
        <TerminalFigure colors={colors} pointer={pointer} reduced={reduced} />
      </group>

      {/* floor 00, gates */}
      <group position={[-offset, -FALL, 0]} scale={scale}>
        <GateFloor colors={colors} reduced={reduced} />
      </group>
    </>
  );
}

export default function StackCanvas({ colors, pointer, reduced, progress }) {
  return (
    <Canvas
      className="stack-canvas"
      camera={{ position: [0, 0, CAMERA_Z], fov: FOV }}
      dpr={[1, 2]}
    >
      <ambientLight intensity={0.75} />
      <directionalLight position={[3, 4, 5]} intensity={1.1} />
      <directionalLight position={[-4, -1, 2]} intensity={0.35} />
      <CameraRig progress={progress} reduced={reduced} />
      <Strata colors={colors} />
      <Floors colors={colors} pointer={pointer} reduced={reduced} />
    </Canvas>
  );
}
