import { ArrowRight, Sparkles, Play } from "lucide-react";
import { useTheme } from "next-themes";
import { LaserFlow } from "./laser-flow";

export function HeroLaserMarantrix() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home"
      className="relative min-h-screen flex flex-col overflow-hidden w-full"
      style={{ background: isDark ? '#000000' : '#ffffff' }}
    >
      {/* Laser Flow Background with Parallax */}
      <div className="absolute inset-0 z-0">
        <LaserFlow
          color={isDark ? "#2563eb" : "#3b82f6"}
          wispDensity={1.2}
          flowSpeed={0.35}
          verticalSizing={2.5}
          horizontalSizing={0.5}
          fogIntensity={0.6}
          wispSpeed={12.0}
          wispIntensity={6.0}
          enableParallax={true}
          parallaxSpeed={0.3}
          className="w-full h-full"
        />
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/60 via-transparent to-black/40 pointer-events-none" />
      <div className="absolute top-4 left-4 h-40 w-40 rounded-full bg-blue-600/30 blur-[120px] z-[1]" />
      <div className="absolute bottom-4 right-4 h-40 w-40 rounded-full bg-cyan-500/30 blur-[120px] z-[1]" />

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl w-full mx-auto">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-2 py-1 rounded-full bg-white/10 backdrop-blur-xl pr-3 border border-white/20 mb-8">
            <span className="px-2 py-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-xs font-bold rounded-full flex items-center gap-1">
              <Sparkles className="w-3 h-3" />
              New
            </span>
            <span 
              className="text-sm text-white/90 tracking-tight"
              style={{ 
                fontFamily: 'Postamp Grotesk, sans-serif',
                letterSpacing: '-0.01em'
              }}
            >
              Premium Digital Solutions 2026
            </span>
          </div>

          {/* Main Headline */}
          <h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-white leading-tight mb-6"
            style={{ 
              fontFamily: 'Postamp Grotesk, sans-serif',
              letterSpacing: '-0.045em',
              lineHeight: '1.05',
              fontWeight: 800
            }}
          >
            We Create Digital
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Experiences That Scale
            </span>
          </h1>

          {/* Subheadline */}
          <p 
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/80 mb-12 max-w-3xl leading-relaxed"
            style={{ 
              fontFamily: 'Postamp Grotesk, sans-serif',
              letterSpacing: '-0.02em',
              fontWeight: 400
            }}
          >
            Transform your business with cutting-edge UI/UX design, mobile apps, and web development. 
            We build digital products that users love and businesses need.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-8 py-4 text-base sm:text-lg font-semibold rounded-full transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
              style={{ 
                fontFamily: 'Postamp Grotesk, sans-serif',
                letterSpacing: '-0.01em',
                fontWeight: 600
              }}
            >
              Start Your Project
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => scrollToSection('work')}
              className="border border-white/30 bg-white/10 backdrop-blur-xl hover:bg-white/20 text-white px-8 py-4 text-base sm:text-lg font-semibold rounded-full transition-all duration-300 flex items-center justify-center gap-2"
              style={{ 
                fontFamily: 'Postamp Grotesk, sans-serif',
                letterSpacing: '-0.01em',
                fontWeight: 600
              }}
            >
              <Play className="w-5 h-5" />
              View Portfolio
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-3xl">
            {[
              { value: '50+', label: 'Projects' },
              { value: '100%', label: 'Satisfaction' },
              { value: '24/7', label: 'Support' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div 
                  className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1"
                  style={{ 
                    fontFamily: 'Postamp Grotesk, sans-serif',
                    fontWeight: 800
                  }}
                >
                  {stat.value}
                </div>
                <div 
                  className="text-xs sm:text-sm md:text-base text-white/70"
                  style={{ 
                    fontFamily: 'Postamp Grotesk, sans-serif',
                    letterSpacing: '-0.01em'
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroLaserMarantrix;
