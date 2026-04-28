// ============================================================
// FICHIER 2 : components/3d/HeroScene.tsx
// Three.js hero : tiroir 3D animé qui s'ouvre
// ============================================================
'use client'
import { useRef, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Environment } from '@react-three/drei'
import * as THREE from 'three'

function DrawerBox() {
  const drawerRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (!drawerRef.current) return
    // Oscillation douce du tiroir
    const t = state.clock.getElapsedTime()
    drawerRef.current.position.z = Math.sin(t * 0.8) * 0.3
  })

  return (
    <group>
      {/* Boîtier principal */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[3, 2, 1.5]} />
        <meshStandardMaterial color="#0A1628" metalness={0.8} roughness={0.2} />
      </mesh>
      {/* Tiroir animé */}
      <mesh ref={drawerRef} position={[0, -0.3, 0]}>
        <boxGeometry args={[2.8, 0.6, 1.4]} />
        <meshStandardMaterial color="#1A2D45" metalness={0.6} roughness={0.3} />
      </mesh>
      {/* Poignée */}
      <mesh position={[0, -0.3, 0.75]}>
        <cylinderGeometry args={[0.05, 0.05, 1, 16]} />
        <meshStandardMaterial color="#3B8DE0" metalness={1} roughness={0.1} />
      </mesh>
      {/* Particules flottantes (outils) */}
      {[...Array(6)].map((_, i) => (
        <Float key={i} speed={1 + i * 0.3} rotationIntensity={0.5} floatIntensity={0.5}>
          <mesh position={[
            Math.cos(i * Math.PI / 3) * 2.5,
            Math.sin(i * 0.8) * 1.2,
            Math.sin(i * Math.PI / 3) * 1.5
          ]}>
            <boxGeometry args={[0.12, 0.12, 0.6]} />
            <meshStandardMaterial color="#3B8DE0" emissive="#1B5EA8" emissiveIntensity={0.4} />
          </mesh>
        </Float>
      ))}
    </group>
  )
}

function Particles() {
  const meshRef = useRef<THREE.InstancedMesh>(null)
  const dummy = new THREE.Object3D()

  useFrame(({ clock }) => {
    if (!meshRef.current) return
    const t = clock.getElapsedTime()
    for (let i = 0; i < 80; i++) {
      dummy.position.set(
        Math.sin(i * 0.5 + t * 0.3) * 4,
        Math.cos(i * 0.4 + t * 0.2) * 3,
        Math.sin(i * 0.3) * 2,
      )
      dummy.scale.setScalar(Math.sin(i + t) * 0.5 + 0.5)
      dummy.updateMatrix()
      meshRef.current.setMatrixAt(i, dummy.matrix)
    }
    meshRef.current.instanceMatrix.needsUpdate = true
  })

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, 80]}>
      <sphereGeometry args={[0.02]} />
      <meshBasicMaterial color="#3B8DE0" transparent opacity={0.4} />
    </instancedMesh>
  )
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 1, 6], fov: 50 }}
      style={{ height: '100%', width: '100%' }}
      gl={{ antialias: true, alpha: true }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={1} color="#3B8DE0" />
        <pointLight position={[-5, -5, -5]} intensity={0.5} color="#1B5EA8" />
        <Float speed={1.2} rotationIntensity={0.3} floatIntensity={0.5}>
          <DrawerBox />
        </Float>
        <Particles />
        <Environment preset="city" />
      </Suspense>
    </Canvas>
  )
}
