import { useEffect, useState } from 'react'

interface PerformanceMetrics {
  fps: number
  memoryUsage: number
  isLowEndDevice: boolean
}

export function usePerformanceMonitor() {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fps: 60,
    memoryUsage: 0,
    isLowEndDevice: false
  })

  useEffect(() => {
    let frameCount = 0
    let lastTime = performance.now()
    let animationId: number

    const measureFPS = () => {
      frameCount++
      const currentTime = performance.now()
      
      if (currentTime - lastTime >= 1000) {
        const fps = Math.round((frameCount * 1000) / (currentTime - lastTime))
        
        // Detect low-end device based on FPS and memory
        const memory = (performance as any).memory?.usedJSHeapSize || 0
        const isLowEnd = fps < 30 || memory > 50 * 1024 * 1024 // 50MB threshold
        
        setMetrics({
          fps,
          memoryUsage: memory,
          isLowEndDevice: isLowEnd
        })
        
        frameCount = 0
        lastTime = currentTime
      }
      
      animationId = requestAnimationFrame(measureFPS)
    }

    // Start monitoring after a delay to avoid initial load impact
    const timeout = setTimeout(() => {
      animationId = requestAnimationFrame(measureFPS)
    }, 2000)

    return () => {
      clearTimeout(timeout)
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    }
  }, [])

  return metrics
}

// Performance-aware gradient bars component
export function PerformanceAwareGradientBars() {
  const { isLowEndDevice } = usePerformanceMonitor()
  
  return {
    numBars: isLowEndDevice ? 5 : 11,
    animationDuration: isLowEndDevice ? 2 : 4,
    reducedMotion: isLowEndDevice
  }
}