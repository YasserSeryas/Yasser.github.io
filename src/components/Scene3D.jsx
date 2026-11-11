import { Canvas, useFrame } from '@react-three/fiber'
import { Float, OrbitControls, Stars } from '@react-three/drei'
import { useMemo, useRef } from 'react'
import * as THREE from 'three'

const services = [
  { label: 'API', position: [2.4, 0.8, -0.5], color: '#38bdf8' },
  { label: 'Auth', position: [-2.4, 0.9, -0.8], color: '#60a5fa' },
  { label: 'Payments', position: [1.8, -1.2, 0.6], color: '#22d3ee' },
  { label: 'Notifications', position: [-1.8, -1.3, 0.4], color: '#818cf8' },
  { label: 'Database', position: [0.4, 1.9, -1.6], color: '#34d399' },
  { label: 'Monitoring', position: [-0.5, -1.9, -1.4], color: '#f59e0b' }
]

function ServiceNode({ position, color, pulse }) {
  const ref = useRef()
  useFrame((state) => {
    const t = state.clock.elapsedTime
    const scale = 1 + Math.sin(t * pulse + position[0]) * 0.08
    ref.current.scale.setScalar(scale)
    ref.current.rotation.y = t * 0.4
  })
  return (
    <mesh ref={ref} position={position}>
      <icosahedronGeometry args={[0.32, 1]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.55} metalness={0.6} roughness={0.25} flatShading />
    </mesh>
  )
}

function Connection({ from, to, color }) {
  const geometry = useMemo(() => {
    const points = [new THREE.Vector3(...from), new THREE.Vector3(...to)]
    return new THREE.BufferGeometry().setFromPoints(points)
  }, [from, to])
  const ref = useRef()
  useFrame((state) => {
    const material = ref.current.material
    material.opacity = 0.25 + Math.sin(state.clock.elapsedTime * 2 + from[0]) * 0.15
  })
  return (
    <line ref={ref} geometry={geometry}>
      <lineBasicMaterial color={color} transparent opacity={0.3} />
    </line>
  )
}

function Core() {
  const ref = useRef()
  useFrame((state) => {
    const t = state.clock.elapsedTime
    ref.current.rotation.y = t * 0.35
    ref.current.rotation.x = Math.sin(t * 0.4) * 0.2
  })
  return (
    <mesh ref={ref}>
      <icosahedronGeometry args={[0.85, 2]} />
      <meshStandardMaterial color="#0ea5e9" emissive="#0ea5e9" emissiveIntensity={0.8} metalness={0.8} roughness={0.15} flatShading />
    </mesh>
  )
}

function Grid() {
  return (
    <gridHelper args={[18, 24, '#1e3a5f', '#152238']} position={[0, -2.4, 0]} />
  )
}

export default function Scene3D() {
  return (
    <div className="scene-3d" aria-hidden="true">
      <Canvas camera={{ position: [0, 1.2, 6.5], fov: 52 }} dpr={[1, 2]}>
        <color attach="background" args={['#0b1220']} />
        <fog attach="fog" args={['#0b1220', 9, 22]} />
        <ambientLight intensity={0.35} />
        <pointLight position={[4, 4, 4]} intensity={55} color="#38bdf8" />
        <pointLight position={[-4, -2, 3]} intensity={30} color="#2563eb" />
        <Stars radius={70} depth={40} count={1800} factor={3.5} fade speed={0.8} />
        <Float speed={1.1} rotationIntensity={0.5} floatIntensity={0.8}>
          <Core />
        </Float>
        {services.map((service) => (
          <ServiceNode key={service.label} position={service.position} color={service.color} pulse={1.2 + Math.random()} />
        ))}
        {services.map((service) => (
          <Connection key={`line-${service.label}`} from={[0, 0, 0]} to={service.position} color={service.color} />
        ))}
        <Grid />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.25} />
      </Canvas>
    </div>
  )
}
