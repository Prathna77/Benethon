/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import ModelMan from "./Model2";

export default function Avatar_man() {
  return (
    <Canvas
    camera={{ position: [2, 0, 12.25], fov: 15 }}
      style={{
        backgroundColor: "black",
        width: "35vw",
        height: "75vh",
        margin: "auto",
        marginTop:"2.5rem",
        marginBottom:"2.5rem"
      }}
    >
      <ambientLight intensity={1.25} />
      <ambientLight intensity={0.1} />
      <directionalLight intensity={0.4} />
      <Suspense fallback={null}>
        <ModelMan position={[0.025, -0.9, 1]} />
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
}
