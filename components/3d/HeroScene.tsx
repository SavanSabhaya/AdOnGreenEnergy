"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Sphere, Float, Stars, Line } from "@react-three/drei";
import * as THREE from "three";

// The abstract energy core
function EnergyCore() {
  const meshRef = useRef<THREE.Mesh>(null);
  const pointsRef = useRef<THREE.Points>(null);
  
  const { mouse, viewport } = useThree();

  // Generate random particles around the sphere
  const particles = useMemo(() => {
    const count = 1000;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(Math.random() * 2 - 1);
      const r = 2.5 + Math.random() * 1.5; // Radius slightly larger than the core
      
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
    }
    return positions;
  }, []);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.1;
      meshRef.current.rotation.y += delta * 0.15;
      
      // Parallax effect based on mouse
      const targetX = (mouse.x * viewport.width) / 10;
      const targetY = (mouse.y * viewport.height) / 10;
      
      meshRef.current.position.x += (targetX - meshRef.current.position.x) * 0.05;
      meshRef.current.position.y += (targetY - meshRef.current.position.y) * 0.05;
    }
    
    if (pointsRef.current) {
      pointsRef.current.rotation.y -= delta * 0.05;
      pointsRef.current.rotation.x -= delta * 0.02;
      
      // Parallax for particles
      const targetX = (mouse.x * viewport.width) / 5;
      const targetY = (mouse.y * viewport.height) / 5;
      
      pointsRef.current.position.x += (targetX - pointsRef.current.position.x) * 0.03;
      pointsRef.current.position.y += (targetY - pointsRef.current.position.y) * 0.03;
    }
  });

  return (
    <group>
      {/* Central Glowing Core */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        <Sphere ref={meshRef} args={[2, 64, 64]} scale={1}>
          <meshStandardMaterial 
            color="#052e16" // deep forest green
            emissive="#22c55e" // bright green glow
            emissiveIntensity={0.4}
            wireframe={true}
            transparent={true}
            opacity={0.3}
          />
        </Sphere>
        
        {/* Inner solid core */}
        <Sphere args={[1.8, 32, 32]}>
          <meshStandardMaterial 
            color="#0f172a" 
            emissive="#16a34a"
            emissiveIntensity={0.8}
            roughness={0.2}
            metalness={0.8}
          />
        </Sphere>
      </Float>

      {/* Orbiting Particles */}
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particles.length / 3}
            args={[particles, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.03}
          color="#fbbf24" // amber
          transparent
          opacity={0.6}
          sizeAttenuation={true}
        />
      </points>
    </group>
  );
}

export default function HeroScene() {
  return (
    <div className="absolute inset-0 z-0 bg-[#050B0A]">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        {/* Ambient & Directional Lighting */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} color="#22c55e" />
        <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#fbbf24" />
        
        <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
        
        <EnergyCore />
        
        {/* Allows user to drag/rotate slightly, but restricted so they don't get lost */}
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 1.5}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
}
