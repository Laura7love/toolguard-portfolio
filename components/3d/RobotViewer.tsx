// ============================================================
// FICHIER 3 : components/3d/RobotViewer.tsx
// Viewer interactif du modèle SolidWorks exporté en GLB
// ============================================================
'use client'
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { useGLTF, OrbitControls, Environment, ContactShadows, Html } from '@react-three/drei'

function RobotModel({ url }: { url: string }) {
  const { scene } = useGLTF(url)
  return <primitive object={scene} scale={1.5} position={[0, -1, 0]} />
}

function LoadingSpinner() {
  return (
    <Html center>
      <div style={{ color: '#3B8DE0', fontSize: '14px', fontFamily: 'sans-serif' }}>
        Chargement du modèle...
      </div>
    </Html>
  )
}

export default function RobotViewer({ modelUrl = '/models/robot.glb' }) {
  return (
    <div style={{ width: '100%', height: '500px', borderRadius: '12px', overflow: 'hidden' }}>
      <Canvas
        camera={{ position: [3, 2, 5], fov: 45 }}
        shadows
        gl={{ antialias: true }}
      >
        <Suspense fallback={<LoadingSpinner />}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
          <RobotModel url={modelUrl} />
          <ContactShadows position={[0, -1.5, 0]} opacity={0.4} scale={10} blur={2} />
          <Environment preset="studio" />
          <OrbitControls
            enablePan={false}
            minDistance={3}
            maxDistance={10}
            autoRotate
            autoRotateSpeed={0.8}
          />
        </Suspense>
      </Canvas>
    </div>
  )
}

