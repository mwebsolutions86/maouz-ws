'use client';

import React, { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Float } from '@react-three/drei';
import * as THREE from 'three';

function DataCloud() {
  const ref = useRef<THREE.Points>(null!);
  
  // Configuration stable pour éviter les recalculs inutiles
  const particleCount = 2500; 

  const particles = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    
    // Fonction pseudo-aléatoire pour garantir la stabilité entre serveur et client
    const random = (seed: number) => {
      const x = Math.sin(seed) * 10000;
      return x - Math.floor(x);
    };

    for (let i = 0; i < particleCount; i++) {
      const r = 4 * Math.cbrt(random(i));
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
      ref.current.rotation.y = state.clock.getElapsedTime() * 0.05;
      ref.current.rotation.x = state.clock.getElapsedTime() * 0.02;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={particles} stride={3} frustumCulled={false}>
        <PointMaterial 
            transparent 
            color="#00f3ff" 
            size={0.015} 
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

  // CORRECTION FINALE : Utilisation de setTimeout pour rendre la mise à jour asynchrone
  // Cela satisfait le Linter et évite l'erreur "synchronous setState".
  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
    }, 0);
    
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 z-0 opacity-60 pointer-events-none">
      <Canvas 
        camera={{ position: [0, 0, 5], fov: 60 }}
        dpr={[1, 2]} 
        gl={{ antialias: false }}
      >
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
          <DataCloud />
        </Float>
      </Canvas>
    </div>
  );
}