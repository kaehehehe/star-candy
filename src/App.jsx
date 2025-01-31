import React from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { Candy } from "./components/Candy";
import "./styles.css";

export default function App() {
  return (
    <Canvas camera={{ position: [400, 500, 1200], fov: 60 }}>
      rotation={[0, Math.PI, 0]}
      <OrbitControls
        enableDamping
        dampingFactor={0.05}
        minDistance={100}
        maxDistance={500}
        maxPolarAngle={Math.PI / 2}
      />
      {Array.from({ length: 500 }).map((_, index) => {
        const position = [
          Math.random() * 1600 - 800,
          0,
          Math.random() * 1600 - 800,
        ];
        return <Candy key={index} position={position} />;
      })}
      <Environment preset="warehouse" />
    </Canvas>
  );
}
