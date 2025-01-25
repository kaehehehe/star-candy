import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function Candy({ position, angle }) {
  const { scene } = useGLTF("star-candy.glb");
  const candyRef = useRef();

  useFrame(() => {
    if (candyRef.current) {
      candyRef.current.rotation.y += 0.01;
    }
  });

  return (
    <primitive
      ref={candyRef}
      position={position}
      object={scene.clone()}
      scale={[4, 4, 4]}
      rotation={[0, angle, 0]}
    />
  );
}
