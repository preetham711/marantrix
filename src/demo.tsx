import HeroSection from '@/components/ui/hero-section'

export default function Demo() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      
      {/* Additional content to show scrolling works */}
      <div className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Welcome to the Demo
          </h2>
          <p className="text-lg text-gray-600">
            This demonstrates the Three.js Hero Section integration with shadcn/ui components.
            The animated background and floating particles create an engaging visual experience.
          </p>
        </div>
      </div>
    </div>
  )
}