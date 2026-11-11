import { Canvas, useFrame } from '@react-three/fiber'
import { Float, OrbitControls, Stars } from '@react-three/drei'
import { useRef } from 'react'

function Torus() {
  const ref = useRef()
  useFrame((state) => {
    ref.current.rotation.x = state.clock.elapsedTime * 0.2
    ref.current.rotation.y = state.clock.elapsedTime * 0.3
  })
  return (
    <mesh ref={ref} position={[-2.2, 0.4, -1]}>
      <torusKnotGeometry args={[0.7, 0.22, 160, 24]} />
      <meshStandardMaterial color="#38bdf8" metalness={0.9} roughness={0.15} />
    </mesh>
  )
}

function Icosahedron() {
  const ref = useRef()
  useFrame((state) => {
    ref.current.rotation.z = state.clock.elapsedTime * 0.25
    ref.current.position.y = Math.sin(state.clock.elapsedTime) * 0.25
  })
  return (
    <mesh ref={ref} position={[2.2, -0.3, -0.5]}>
      <icosahedronGeometry args={[0.85, 1]} />
      <meshStandardMaterial color="#60a5fa" metalness={0.85} roughness={0.2} flatShading />
    </mesh>
  )
}

function DistortedSphere() {
  const ref = useRef()
  useFrame((state) => {
    const t = state.clock.elapsedTime
    ref.current.scale.setScalar(1 + Math.sin(t * 1.5) * 0.08)
  })
  return (
    <mesh ref={ref} position={[0, 1.6, -2]}>
      <sphereGeometry args={[0.6, 48, 48]} />
      <meshStandardMaterial color="#0ea5e9" metalness={0.7} roughness={0.25} />
    </mesh>
  )
}

export default function Scene3D() {
  return (
    <div className="scene-3d" aria-hidden="true">
      <Canvas camera={{ position: [0, 0, 6], fov: 55 }} dpr={[1, 2]}>
        <color attach="background" args={['#0b1220']} />
        <fog attach="fog" args={['#0b1220', 8, 20]} />
        <ambientLight intensity={0.35} />
        <pointLight position={[4, 4, 4]} intensity={60} color="#38bdf8" />
        <pointLight position={[-4, -2, 3]} intensity={35} color="#2563eb" />
        <Stars radius={80} depth={45} count={2500} factor={4} fade speed={1} />
        <Float speed={1.4} rotationIntensity={0.8} floatIntensity={1.2}>
          <Torus />
        </Float>
        <Float speed={1.1} rotationIntensity={1} floatIntensity={1.4}>
          <Icosahedron />
        </Float>
        <Float speed={1.8} rotationIntensity={0.6} floatIntensity={1}>
          <DistortedSphere />
        </Float>
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.35} />
      </Canvas>
    </div>
  )
}
