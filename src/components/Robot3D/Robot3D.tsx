import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Stars } from '@react-three/drei'
import * as THREE from 'three'

interface MousePos { x: number; y: number }

function DataParticles() {
  const count = 120
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const radius = 2.6 + Math.random() * 3.2
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      pos[i * 3]     = radius * Math.sin(phi) * Math.cos(theta)
      pos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta) - 0.5
      pos[i * 3 + 2] = radius * Math.cos(phi)
    }
    return pos
  }, [])

  const ref = useRef<THREE.Points>(null)
  useFrame((state) => {
    if (!ref.current) return
    ref.current.rotation.y = state.clock.elapsedTime * 0.04
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.018) * 0.1
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="#00D4FF" transparent opacity={0.75} sizeAttenuation />
    </points>
  )
}

function HolographicRings() {
  const r1 = useRef<THREE.Mesh>(null)
  const r2 = useRef<THREE.Mesh>(null)
  const r3 = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    const t = state.clock.elapsedTime
    if (r1.current) { r1.current.rotation.x = t * 0.42; r1.current.rotation.z = t * 0.26 }
    if (r2.current) { r2.current.rotation.x = -t * 0.3; r2.current.rotation.y = t * 0.52 }
    if (r3.current) { r3.current.rotation.y = t * 0.2; r3.current.rotation.z = -t * 0.36 }
  })

  return (
    <>
      <mesh ref={r1}>
        <torusGeometry args={[2.3, 0.013, 8, 120]} />
        <meshStandardMaterial color="#00D4FF" emissive="#00D4FF" emissiveIntensity={1.8} transparent opacity={0.65} />
      </mesh>
      <mesh ref={r2}>
        <torusGeometry args={[1.9, 0.011, 8, 120]} />
        <meshStandardMaterial color="#7B2FBE" emissive="#7B2FBE" emissiveIntensity={1.5} transparent opacity={0.55} />
      </mesh>
      <mesh ref={r3}>
        <torusGeometry args={[2.7, 0.009, 8, 120]} />
        <meshStandardMaterial color="#FFD700" emissive="#FFD700" emissiveIntensity={1.2} transparent opacity={0.38} />
      </mesh>
    </>
  )
}

function Robot({ mousePos }: { mousePos: MousePos }) {
  const robotRef  = useRef<THREE.Group>(null)
  const headRef   = useRef<THREE.Group>(null)
  const lArmRef   = useRef<THREE.Group>(null)
  const rArmRef   = useRef<THREE.Group>(null)

  useFrame((state) => {
    const t = state.clock.elapsedTime
    if (robotRef.current) {
      robotRef.current.position.y = Math.sin(t * 0.75) * 0.09
      robotRef.current.rotation.y = THREE.MathUtils.lerp(robotRef.current.rotation.y, mousePos.x * 0.28, 0.04)
    }
    if (headRef.current) {
      headRef.current.rotation.y = THREE.MathUtils.lerp(headRef.current.rotation.y, mousePos.x * 0.65, 0.06)
      headRef.current.rotation.x = THREE.MathUtils.lerp(headRef.current.rotation.x, -mousePos.y * 0.38, 0.06)
    }
    if (lArmRef.current) lArmRef.current.rotation.z = Math.sin(t * 0.75 + Math.PI) * 0.045 - 0.14
    if (rArmRef.current) rArmRef.current.rotation.z = Math.sin(t * 0.75) * 0.045 + 0.14
  })

  return (
    <group ref={robotRef} position={[0, -0.3, 0]}>

      {/* ── HEAD ── */}
      <group ref={headRef} position={[0, 2.15, 0]}>
        <mesh castShadow>
          <boxGeometry args={[0.84, 0.8, 0.74]} />
          <meshStandardMaterial color="#0D1B2A" metalness={0.95} roughness={0.05} />
        </mesh>
        {/* top plate */}
        <mesh position={[0, 0.44, 0]}>
          <boxGeometry args={[0.62, 0.04, 0.52]} />
          <meshStandardMaterial color="#162035" metalness={0.8} roughness={0.2} />
        </mesh>
        {/* bottom plate */}
        <mesh position={[0, -0.43, 0]}>
          <boxGeometry args={[0.72, 0.06, 0.62]} />
          <meshStandardMaterial color="#111b2e" metalness={0.8} roughness={0.2} />
        </mesh>
        {/* visor tint */}
        <mesh position={[0, 0.06, 0.385]}>
          <boxGeometry args={[0.68, 0.22, 0.01]} />
          <meshStandardMaterial color="#001a2e" transparent opacity={0.92} />
        </mesh>
        {/* left eye */}
        <mesh position={[-0.2, 0.06, 0.392]}>
          <circleGeometry args={[0.078, 20]} />
          <meshStandardMaterial color="#00FFFF" emissive="#00FFFF" emissiveIntensity={5} />
        </mesh>
        <mesh position={[-0.2, 0.06, 0.388]}>
          <ringGeometry args={[0.083, 0.105, 20]} />
          <meshStandardMaterial color="#00D4FF" emissive="#00D4FF" emissiveIntensity={2} transparent opacity={0.5} />
        </mesh>
        {/* right eye */}
        <mesh position={[0.2, 0.06, 0.392]}>
          <circleGeometry args={[0.078, 20]} />
          <meshStandardMaterial color="#00FFFF" emissive="#00FFFF" emissiveIntensity={5} />
        </mesh>
        <mesh position={[0.2, 0.06, 0.388]}>
          <ringGeometry args={[0.083, 0.105, 20]} />
          <meshStandardMaterial color="#00D4FF" emissive="#00D4FF" emissiveIntensity={2} transparent opacity={0.5} />
        </mesh>
        {/* left ear */}
        <mesh position={[-0.47, 0, 0]}>
          <boxGeometry args={[0.1, 0.44, 0.34]} />
          <meshStandardMaterial color="#0D1B2A" metalness={0.95} roughness={0.05} />
        </mesh>
        <mesh position={[-0.535, 0.06, 0]}>
          <boxGeometry args={[0.02, 0.16, 0.02]} />
          <meshStandardMaterial color="#00D4FF" emissive="#00D4FF" emissiveIntensity={3} />
        </mesh>
        {/* right ear */}
        <mesh position={[0.47, 0, 0]}>
          <boxGeometry args={[0.1, 0.44, 0.34]} />
          <meshStandardMaterial color="#0D1B2A" metalness={0.95} roughness={0.05} />
        </mesh>
        <mesh position={[0.535, 0.06, 0]}>
          <boxGeometry args={[0.02, 0.16, 0.02]} />
          <meshStandardMaterial color="#00D4FF" emissive="#00D4FF" emissiveIntensity={3} />
        </mesh>
        {/* antenna */}
        <mesh position={[0, 0.55, 0]}>
          <cylinderGeometry args={[0.018, 0.018, 0.42, 8]} />
          <meshStandardMaterial color="#4a6a9a" metalness={0.9} roughness={0.1} />
        </mesh>
        <mesh position={[0, 0.78, 0]}>
          <sphereGeometry args={[0.052, 8, 8]} />
          <meshStandardMaterial color="#FFD700" emissive="#FFD700" emissiveIntensity={3.5} />
        </mesh>
      </group>

      {/* ── NECK ── */}
      <mesh position={[0, 1.68, 0]}>
        <cylinderGeometry args={[0.145, 0.185, 0.3, 10]} />
        <meshStandardMaterial color="#0D1B2A" metalness={0.95} roughness={0.05} />
      </mesh>
      <mesh position={[0, 1.85, 0]}>
        <sphereGeometry args={[0.175, 10, 10]} />
        <meshStandardMaterial color="#0D1B2A" metalness={0.95} roughness={0.05} />
      </mesh>

      {/* ── TORSO ── */}
      <mesh position={[0, 0.88, 0]} castShadow>
        <boxGeometry args={[1.18, 1.28, 0.7]} />
        <meshStandardMaterial color="#0D1B2A" metalness={0.95} roughness={0.05} />
      </mesh>
      {/* chest panel */}
      <mesh position={[0, 0.98, 0.365]}>
        <boxGeometry args={[0.76, 0.72, 0.02]} />
        <meshStandardMaterial color="#0a1222" metalness={0.6} roughness={0.4} />
      </mesh>
      {/* arc reactor */}
      <mesh position={[0, 1.18, 0.38]}>
        <circleGeometry args={[0.092, 20]} />
        <meshStandardMaterial color="#00FFFF" emissive="#00FFFF" emissiveIntensity={7} />
      </mesh>
      <mesh position={[0, 1.18, 0.375]}>
        <ringGeometry args={[0.095, 0.135, 20]} />
        <meshStandardMaterial color="#00D4FF" emissive="#00D4FF" emissiveIntensity={3} transparent opacity={0.6} />
      </mesh>
      <mesh position={[0, 1.18, 0.37]}>
        <ringGeometry args={[0.138, 0.16, 20]} />
        <meshStandardMaterial color="#7B2FBE" emissive="#7B2FBE" emissiveIntensity={2} transparent opacity={0.4} />
      </mesh>
      {/* data lines */}
      <mesh position={[0, 1.01, 0.375]}>
        <boxGeometry args={[0.56, 0.026, 0.01]} />
        <meshStandardMaterial color="#00D4FF" emissive="#00D4FF" emissiveIntensity={2.5} />
      </mesh>
      <mesh position={[0, 0.88, 0.375]}>
        <boxGeometry args={[0.46, 0.026, 0.01]} />
        <meshStandardMaterial color="#00D4FF" emissive="#00D4FF" emissiveIntensity={2.5} />
      </mesh>
      <mesh position={[0, 0.75, 0.375]}>
        <boxGeometry args={[0.36, 0.026, 0.01]} />
        <meshStandardMaterial color="#FFD700" emissive="#FFD700" emissiveIntensity={2} />
      </mesh>
      {/* shoulder pads */}
      <mesh position={[-0.76, 1.44, 0]}>
        <boxGeometry args={[0.32, 0.24, 0.6]} />
        <meshStandardMaterial color="#0D1B2A" metalness={0.95} roughness={0.05} />
      </mesh>
      <mesh position={[-0.76, 1.44, 0.33]}>
        <boxGeometry args={[0.26, 0.05, 0.02]} />
        <meshStandardMaterial color="#00D4FF" emissive="#00D4FF" emissiveIntensity={2} />
      </mesh>
      <mesh position={[0.76, 1.44, 0]}>
        <boxGeometry args={[0.32, 0.24, 0.6]} />
        <meshStandardMaterial color="#0D1B2A" metalness={0.95} roughness={0.05} />
      </mesh>
      <mesh position={[0.76, 1.44, 0.33]}>
        <boxGeometry args={[0.26, 0.05, 0.02]} />
        <meshStandardMaterial color="#00D4FF" emissive="#00D4FF" emissiveIntensity={2} />
      </mesh>

      {/* ── LEFT ARM ── */}
      <group ref={lArmRef} position={[-0.88, 0.88, 0]}>
        <mesh><boxGeometry args={[0.3, 0.64, 0.3]} /><meshStandardMaterial color="#0D1B2A" metalness={0.95} roughness={0.05} /></mesh>
        <mesh position={[0, -0.38, 0]}><sphereGeometry args={[0.18, 10, 10]} /><meshStandardMaterial color="#0D1B2A" metalness={0.95} roughness={0.05} /></mesh>
        <mesh position={[0, -0.74, 0]}><boxGeometry args={[0.25, 0.58, 0.25]} /><meshStandardMaterial color="#0D1B2A" metalness={0.95} roughness={0.05} /></mesh>
        <mesh position={[0, -1.1, 0.04]}><boxGeometry args={[0.29, 0.22, 0.25]} /><meshStandardMaterial color="#0D1B2A" metalness={0.95} roughness={0.05} /></mesh>
        <mesh position={[0.13, -0.74, 0]}><boxGeometry args={[0.018, 0.42, 0.018]} /><meshStandardMaterial color="#00D4FF" emissive="#00D4FF" emissiveIntensity={2.5} /></mesh>
      </group>

      {/* ── RIGHT ARM ── */}
      <group ref={rArmRef} position={[0.88, 0.88, 0]}>
        <mesh><boxGeometry args={[0.3, 0.64, 0.3]} /><meshStandardMaterial color="#0D1B2A" metalness={0.95} roughness={0.05} /></mesh>
        <mesh position={[0, -0.38, 0]}><sphereGeometry args={[0.18, 10, 10]} /><meshStandardMaterial color="#0D1B2A" metalness={0.95} roughness={0.05} /></mesh>
        <mesh position={[0, -0.74, 0]}><boxGeometry args={[0.25, 0.58, 0.25]} /><meshStandardMaterial color="#0D1B2A" metalness={0.95} roughness={0.05} /></mesh>
        <mesh position={[0, -1.1, 0.04]}><boxGeometry args={[0.29, 0.22, 0.25]} /><meshStandardMaterial color="#0D1B2A" metalness={0.95} roughness={0.05} /></mesh>
        <mesh position={[-0.13, -0.74, 0]}><boxGeometry args={[0.018, 0.42, 0.018]} /><meshStandardMaterial color="#00D4FF" emissive="#00D4FF" emissiveIntensity={2.5} /></mesh>
      </group>

      {/* ── WAIST ── */}
      <mesh position={[0, 0.18, 0]}>
        <boxGeometry args={[0.98, 0.28, 0.6]} />
        <meshStandardMaterial color="#111b2e" metalness={0.85} roughness={0.15} />
      </mesh>
      <mesh position={[0, 0.18, 0.31]}>
        <boxGeometry args={[0.6, 0.08, 0.01]} />
        <meshStandardMaterial color="#7B2FBE" emissive="#7B2FBE" emissiveIntensity={2} />
      </mesh>

      {/* ── LEFT LEG ── */}
      <group position={[-0.3, -0.52, 0]}>
        <mesh><boxGeometry args={[0.37, 0.64, 0.37]} /><meshStandardMaterial color="#0D1B2A" metalness={0.95} roughness={0.05} /></mesh>
        <mesh position={[0, -0.39, 0]}><sphereGeometry args={[0.21, 10, 10]} /><meshStandardMaterial color="#0D1B2A" metalness={0.95} roughness={0.05} /></mesh>
        <mesh position={[0, -0.78, 0]}><boxGeometry args={[0.32, 0.6, 0.34]} /><meshStandardMaterial color="#0D1B2A" metalness={0.95} roughness={0.05} /></mesh>
        <mesh position={[0, -1.15, 0.1]}><boxGeometry args={[0.37, 0.2, 0.54]} /><meshStandardMaterial color="#0D1B2A" metalness={0.95} roughness={0.05} /></mesh>
        <mesh position={[0.145, -0.78, 0]}><boxGeometry args={[0.018, 0.44, 0.018]} /><meshStandardMaterial color="#00D4FF" emissive="#00D4FF" emissiveIntensity={2.5} /></mesh>
      </group>

      {/* ── RIGHT LEG ── */}
      <group position={[0.3, -0.52, 0]}>
        <mesh><boxGeometry args={[0.37, 0.64, 0.37]} /><meshStandardMaterial color="#0D1B2A" metalness={0.95} roughness={0.05} /></mesh>
        <mesh position={[0, -0.39, 0]}><sphereGeometry args={[0.21, 10, 10]} /><meshStandardMaterial color="#0D1B2A" metalness={0.95} roughness={0.05} /></mesh>
        <mesh position={[0, -0.78, 0]}><boxGeometry args={[0.32, 0.6, 0.34]} /><meshStandardMaterial color="#0D1B2A" metalness={0.95} roughness={0.05} /></mesh>
        <mesh position={[0, -1.15, 0.1]}><boxGeometry args={[0.37, 0.2, 0.54]} /><meshStandardMaterial color="#0D1B2A" metalness={0.95} roughness={0.05} /></mesh>
        <mesh position={[-0.145, -0.78, 0]}><boxGeometry args={[0.018, 0.44, 0.018]} /><meshStandardMaterial color="#00D4FF" emissive="#00D4FF" emissiveIntensity={2.5} /></mesh>
      </group>
    </group>
  )
}

function Scene({ mousePos }: { mousePos: MousePos }) {
  return (
    <>
      <ambientLight intensity={0.2} />
      <pointLight position={[5, 5, 5]} intensity={1.2} color="#ffffff" />
      <pointLight position={[-4, 3, 3]} intensity={1.0} color="#00D4FF" />
      <pointLight position={[0, -3, 4]} intensity={0.6} color="#7B2FBE" />
      <pointLight position={[3, 0, -2]} intensity={0.4} color="#FFD700" />
      <Stars radius={60} depth={50} count={3000} factor={3} saturation={0.3} fade speed={0.4} />
      <DataParticles />
      <HolographicRings />
      <Robot mousePos={mousePos} />
    </>
  )
}

export default function Robot3D({ mousePos }: { mousePos: MousePos }) {
  return (
    <Canvas
      camera={{ position: [0, 0.2, 5.8], fov: 50 }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 1.5]}
    >
      <Scene mousePos={mousePos} />
    </Canvas>
  )
}
