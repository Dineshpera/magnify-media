'use client';

import dynamic from 'next/dynamic';
import { Canvas, useFrame } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import type { Points } from 'three';
import * as THREE from 'three';

function NeuralField() {
  const points = useRef<Points>(null);
  const geometry = useMemo(() => {
    const buffer = new THREE.BufferGeometry();
    const vertices = new Float32Array(Array.from({ length: 240 }, () => (Math.random() - 0.5) * 4.2));
    buffer.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
    return buffer;
  }, []);

  useFrame((_, delta) => {
    if (!points.current) return;
    points.current.rotation.y += delta * 0.08;
    points.current.rotation.x += delta * 0.025;
  });

  return <points ref={points} geometry={geometry}><pointsMaterial color="#00ff88" size={0.035} transparent opacity={0.72} /></points>;
}

function Scene() {
  return <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 4.8], fov: 48 }}><NeuralField /></Canvas>;
}

export const NeuralNetwork = dynamic(() => Promise.resolve(Scene), { ssr: false });
