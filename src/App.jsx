import React from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { Color } from "three";
import { SpiralStairs } from "./components/SpiralStairs";
import "./styles.css";

export default function App() {
  const boxCount = 100;
  const heightIncrement = 10;
  const centerOffset = (boxCount / 2) * heightIncrement;

  return (
    <>
      <Canvas camera={{ position: [centerOffset, 0, 40], fov: 75 }}>
        <color attach="background" args={[new Color("#000329")]} />
        <ambientLight intensity={1} />
        <Environment preset="sunset" />
        <SpiralStairs />
        <OrbitControls minDistance={10} maxDistance={50} />
      </Canvas>
    </>
  );
}
