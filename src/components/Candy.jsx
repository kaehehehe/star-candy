import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";

export function Candy({ position }) {
  const meshRef = useRef();
  const { scene } = useGLTF("star-candy.glb");
  const model = scene.clone();

  useFrame(() => {
    if (!meshRef.current) return;

    meshRef.current.rotation.y += 0.01;
  }, []);

  return (
    <mesh ref={meshRef} position={position} rotation={[0, Math.PI / 4, 0]}>
      <primitive object={model} scale={5} />
    </mesh>
  );
}
