'use client';

import React, { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Float } from '@react-three/drei';
import * as THREE from 'three';

function DataCloud() {
  const ref = useRef<THREE.Points>(null!);
  const particleCount = 3000; // J'ai légèrement augmenté pour la densité

  const particles = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    const random = (seed: number) => Math.sin(seed) * 10000 - Math.floor(Math.sin(seed) * 10000);

    for (let i = 0; i < particleCount; i++) {
      const r = 5 * Math.cbrt(random(i)); // Rayon un peu plus large
      const theta = random(i + 1) * 2 * Math.PI;
      const phi = Math.acos(2 * random(i + 2) - 1);
      
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
    }
    return positions;
  }, []);

  useFrame((state) => {
    if (ref.current) {
      // Rotation continue et douce
      ref.current.rotation.y = state.clock.getElapsedTime() * 0.03;
      ref.current.rotation.x = state.clock.getElapsedTime() * 0.01;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={particles} stride={3} frustumCulled={false}>
        <PointMaterial 
            transparent 
            color="#00f3ff" 
            size={0.02} // Un peu plus visible
            sizeAttenuation={true} 
            depthWrite={false} 
            blending={THREE.AdditiveBlending} 
        />
      </Points>
    </group>
  );
}

export default function Background3D() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) return null;

  return (
    // CORRECTION MAJEURE ICI :
    // 1. fixed inset-0 : Couvre tout l'écran et reste fixe au scroll
    // 2. z-[-1] : Se place DERRIÈRE tout le contenu du site
    // 3. bg-[#050505] : C'est LUI qui gère la couleur de fond du site maintenant
    <div className="fixed inset-0 z-[-1] bg-[#050505] pointer-events-none">
      <Canvas 
        camera={{ position: [0, 0, 5], fov: 60 }}
        dpr={[1, 2]} 
        gl={{ antialias: false, alpha: true }} // Alpha true pour la transparence interne
      >
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
          <DataCloud />
        </Float>
      </Canvas>
    </div>
  );
}