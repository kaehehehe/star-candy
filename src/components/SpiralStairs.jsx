import React from "react";
import { Candy } from "./Candy";

export function SpiralStairs() {
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
      <Candy
        key={`stairs-${i}`}
        position={[positionX, positionY, positionZ]} // 올바른 [x, y, z] 값
        angle={angle}
      />
    );
  }

  return <>{candies}</>;
}
