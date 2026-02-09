import { useEffect, useState } from 'react'
import { Button } from './button'
import { Badge } from './badge'
import { Component as GradientBarsBackground } from './gradient-bars-background'
import { ArrowRight, Play, Sparkles } from 'lucide-react'

// Different gradient variants
const gradientVariants = {
  blue: {
    gradientFrom: "rgb(59, 130, 246)",
    backgroundColor: "rgb(15, 23, 42)",
  },
  purple: {
    gradientFrom: "rgb(147, 51, 234)",
    backgroundColor: "rgb(24, 24, 27)",
  },
  orange: {
    gradientFrom: "rgb(249, 115, 22)",
    backgroundColor: "rgb(20, 14, 8)",
  },
  pink: {
    gradientFrom: "rgb(236, 72, 153)",
    backgroundColor: "rgb(24, 18, 22)",
  },
  green: {
    gradientFrom: "rgb(34, 197, 94)",
    backgroundColor: "rgb(14, 23, 18)",
  },
  cyan: {
    gradientFrom: "rgb(6, 182, 212)",
    backgroundColor: "rgb(8, 20, 22)",
  }
}

interface HeroSectionGradientVariantsProps {
  variant?: keyof typeof gradientVariants
  numBars?: number
  animationDuration?: number
}

export default function HeroSectionGradientVariants({ 
  variant = 'blue',
  numBars = 9,
  animationDuration = 3
}: HeroSectionGradientVariantsProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const selectedVariant = gradientVariants[variant]

  return (
    <GradientBarsBackground
      numBars={numBars}
      gradientFrom={selectedVariant.gradientFrom}
      gradientTo="transparent"
      animationDuration={animationDuration}
      backgroundColor={selectedVariant.backgroundColor}
    >
      <div className={`text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto transition-all duration-1000 ${
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
    </GradientBarsBackground>
  )
}

export { gradientVariants }