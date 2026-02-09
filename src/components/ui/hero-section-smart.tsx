import { useState, useEffect, Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'

// Import both versions
import HeroSection from './hero-section'
import HeroSectionFallback from './hero-section-fallback'

// Error fallback component
function ErrorFallback() {
  return <HeroSectionFallback />
}

// Loading component
function LoadingFallback() {
  return <HeroSectionFallback />
}

// Smart Hero Section that tries Three.js first, falls back to CSS
export default function HeroSectionSmart() {
  const [useThreeJS, setUseThreeJS] = useState(true)

  // Check if WebGL is supported
  useEffect(() => {
    try {
      const canvas = document.createElement('canvas')
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
      if (!gl) {
        console.warn('WebGL not supported, using CSS fallback')
        setUseThreeJS(false)
      }
    } catch (error) {
      console.warn('WebGL check failed, using CSS fallback', error)
      setUseThreeJS(false)
    }
  }, [])

  if (!useThreeJS) {
    return <HeroSectionFallback />
  }

  return (
    <ErrorBoundary 
      FallbackComponent={ErrorFallback}
      onError={(error) => {
        console.warn('Three.js Hero failed, falling back to CSS version:', error)
        setUseThreeJS(false)
      }}
    >
      <Suspense fallback={<LoadingFallback />}>
        <HeroSection />
      </Suspense>
    </ErrorBoundary>
  )
}