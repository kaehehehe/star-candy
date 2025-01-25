import React from "react";
import { useGLTF } from "@react-three/drei";

export function SpiralStairs() {
  const { scene } = useGLTF("star-candy.glb");

  const candies = [];
  const candyCount = 100;
  const radius = 16;
  const heightIncrement = 6;
  const angleIncrement = (Math.PI * 2) / 20;

  for (let i = 0; i < candyCount; i++) {
    const angle = i * angleIncrement;
    const positionX = radius * Math.cos(angle);
    const positionZ = radius * Math.sin(angle);
    const positionY = (i - candyCount / 2) * heightIncrement;

    candies.push(
      <primitive
        key={`stairs-${i}`}
        position={[positionX, positionY, positionZ]}
        object={scene.clone()}
        scale={[4, 4, 4]}
        rotation={[0, angle, 0]}
      />
    );
  }

  return <>{candies}</>;
}
