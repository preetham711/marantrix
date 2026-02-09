import { useRef, useMemo, useEffect, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { Button } from './button'
import { Badge } from './badge'
import { ArrowRight, Play, Sparkles } from 'lucide-react'

// Simple animated background component
function AnimatedBackground() {
  const meshRef = useRef<THREE.Mesh>(null!)

  useFrame((state) => {
    if (meshRef.current && meshRef.current.material) {
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.1
      const material = meshRef.current.material as THREE.MeshBasicMaterial
      material.opacity = 0.3 + Math.sin(state.clock.elapsedTime) * 0.1
    }
  })

  return (
    <mesh ref={meshRef} scale={[4, 4, 1]}>
      <planeGeometry args={[1, 1]} />
      <meshBasicMaterial 
        color="#1e40af" 
        transparent 
        opacity={0.3}
      />
    </mesh>
  )
}

// Simple floating particles
function FloatingParticles() {
  const particlesRef = useRef<THREE.Points>(null!)
  
  const positions = useMemo(() => {
    const count = 50
    const positions = new Float32Array(count * 3)
    
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 4
      positions[i * 3 + 1] = (Math.random() - 0.5) * 4
      positions[i * 3 + 2] = (Math.random() - 0.5) * 2
    }
    
    return positions
  }, [])

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.05
    }
  })

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial size={0.02} color="#ffffff" transparent opacity={0.8} />
    </points>
  )
}

// Scene component
function Scene() {
  return (
    <>
      <AnimatedBackground />
      <FloatingParticles />
    </>
  )
}

// Fallback component for when Canvas fails
function FallbackBackground() {
  return (
    <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      <div className="absolute inset-0 opacity-20">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
    </div>
  )
}

// Main Hero Section component
export default function HeroSection() {
  const [canvasError, setCanvasError] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const handleCanvasError = () => {
    console.warn('Canvas failed to load, using fallback background')
    setCanvasError(true)
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        {canvasError ? (
          <FallbackBackground />
        ) : (
          <div onError={handleCanvasError}>
            <Canvas
              camera={{ position: [0, 0, 1], fov: 75 }}
              style={{ 
                background: 'linear-gradient(135deg, #0a0a1a 0%, #1a1a2e 30%, #16213e 70%, #0f3460 100%)',
                width: '100%',
                height: '100%'
              }}
              onError={handleCanvasError}
              fallback={<FallbackBackground />}
            >
              <Scene />
            </Canvas>
          </div>
        )}
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30 z-5"></div>

      {/* Content */}
      <div className={`relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto transition-all duration-1000 ${
        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        
        {/* Badge */}
        <div className="mb-8 flex justify-center">
          <Badge variant="secondary" className="bg-white/10 text-white border-white/20 backdrop-blur-md hover:bg-white/15 transition-all duration-300 px-4 py-2">
            <Sparkles className="w-4 h-4 mr-2" />
            New Features Available
          </Badge>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
          Build Amazing
          <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mt-2">
            Digital Experiences
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl sm:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
          Create stunning web applications with modern technologies. 
          Fast, scalable, and beautiful solutions for your business needs.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-10 py-4 text-lg rounded-full shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 border-0"
          >
            Get Started
            <ArrowRight className="ml-3 h-5 w-5" />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-md px-10 py-4 text-lg rounded-full hover:border-white/50 transition-all duration-300 hover:scale-105"
          >
            <Play className="mr-3 h-5 w-5" />
            Watch Demo
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:border-white/20">
            <div className="text-4xl font-bold text-white mb-3 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">10K+</div>
            <div className="text-gray-300 text-lg">Happy Clients</div>
          </div>
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:border-white/20">
            <div className="text-4xl font-bold text-white mb-3 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">99.9%</div>
            <div className="text-gray-300 text-lg">Uptime</div>
          </div>
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:border-white/20">
            <div className="text-4xl font-bold text-white mb-3 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">24/7</div>
            <div className="text-gray-300 text-lg">Support</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-8 h-12 border-2 border-white/40 rounded-full flex justify-center hover:border-white/60 transition-colors duration-300">
          <div className="w-1.5 h-4 bg-white/70 rounded-full mt-2 animate-bounce"></div>
        </div>
        <p className="text-white/60 text-sm mt-2 font-light">Scroll to explore</p>
      </div>
    </section>
  )
}