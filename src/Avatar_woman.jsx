/* eslint-disable react/no-unknown-property */
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import ModelWoman from "./Model1";


export default function Avatar_woman() {
  return (
    <Canvas
      camera={{ position: [2, 0, 12.25], fov: 15 }}
      style={{
        backgroundColor: "white",
        width: "22vw",
        height: "50vh",
        margin: "auto",
        marginTop:"2.5rem"
      }}
    >
      <ambientLight intensity={1.25} />
      <ambientLight intensity={0.1} />
      <directionalLight intensity={0.4} />
      <Suspense fallback={null}>
        <ModelWoman position={[0.025, -0.9, 1]} />
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
}
