import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from './button'
import { Component as GradientBarsBackground } from './gradient-bars-background'
import { ArrowRight } from 'lucide-react'
import { useTheme } from 'next-themes'

// Clean Hero Section - Mobile-First Responsive Design with Theme Support
export default function HeroSectionGradient() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === 'dark'

  useEffect(() => {
    setIsLoaded(true)
    
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <GradientBarsBackground
      numBars={isMobile ? 5 : 11}
      gradientFrom="rgb(37, 99, 235)" // Blue-600 - matches brand
      gradientTo="transparent"
      animationDuration={isMobile ? 2.5 : 4}
      backgroundColor={isDark ? "rgb(15, 23, 42)" : "rgb(241, 245, 249)"} // Slate-900 : Slate-100
    >
      <div className="relative z-10 w-full min-h-screen flex items-center justify-center px-3 sm:px-4 md:px-6 lg:px-8 pt-16 sm:pt-20">
        <div className={`text-center w-full max-w-7xl mx-auto transition-all duration-1000 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>

          {/* Main Heading - Updated Content with Modern Typography */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className={`font-bold mb-4 sm:mb-6 md:mb-8 leading-tight px-1 sm:px-2 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}
          >
            <span className="block text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black tracking-tight">
              CRAFTING
            </span>
            <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent mt-1 sm:mt-2 text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-extrabold tracking-wide">
              SEAMLESS MOBILE APPS
            </span>
            <span className={`block text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl mt-1 sm:mt-2 font-bold tracking-normal ${
              isDark ? 'text-white/95' : 'text-gray-800'
            }`}>
              & STUNNING WEBSITES
            </span>
          </motion.h1>

          {/* Subtitle - Updated Content with Better Typography */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className={`text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-6 sm:mb-8 md:mb-12 lg:mb-16 max-w-4xl mx-auto leading-relaxed font-medium px-2 sm:px-4 tracking-wide ${
              isDark ? 'text-gray-200' : 'text-gray-700'
            }`}
          >
            Transforming ideas into digital solutions that drive success
          </motion.p>

          {/* CTA Button - Mobile Optimized */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex justify-center px-2 sm:px-4"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                size="lg" 
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-bold px-6 sm:px-8 md:px-12 lg:px-16 py-3 sm:py-4 md:py-6 lg:py-8 text-sm sm:text-base md:text-lg lg:text-xl rounded-full shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 border-0 w-full max-w-xs sm:w-auto sm:max-w-none tracking-wide"
              >
                Start Your Project
                <ArrowRight className="ml-2 sm:ml-3 h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 lg:h-7 lg:w-7" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </GradientBarsBackground>
  )
}