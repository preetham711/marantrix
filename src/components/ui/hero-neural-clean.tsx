import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

interface HeroProps {
  title: string;
  subtitle?: string;
  description: string;
  badgeText?: string;
  badgeLabel?: string;
  ctaButtons?: Array<{ text: string; onClick: () => void; primary?: boolean }>;
}

export default function HeroNeuralClean({
  title,
  subtitle,
  description,
  badgeText = "Premium Digital Solutions",
  badgeLabel = "New",
  ctaButtons = []
}: HeroProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const setSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setSize();
    window.addEventListener('resize', setSize);

    // Minimal particle system with Apple blue
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
    }> = [];

    // Create particles
    for (let i = 0; i < 40; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        size: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.2 + 0.05,
      });
    }

    // Animation loop
    let animationId: number;
    const animate = () => {
      ctx.fillStyle = 'rgba(255, 255, 255, 0.03)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw particle with Apple blue
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 113, 227, ${particle.opacity})`;
        ctx.fill();

        // Draw connections
        particles.forEach((other) => {
          const dx = particle.x - other.x;
          const dy = particle.y - other.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = `rgba(0, 113, 227, ${0.08 * (1 - distance / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', setSize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden w-full bg-white">
      {/* Animated Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
        style={{ opacity: 0.3 }}
      />

      {/* Apple-style gradient overlays */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-white via-white/98 to-white pointer-events-none" />
      <div className="absolute top-20 left-20 h-96 w-96 rounded-full bg-[#0071e3]/5 blur-[100px] z-[1]" />
      <div className="absolute bottom-20 right-20 h-96 w-96 rounded-full bg-[#00a4e4]/5 blur-[100px] z-[1]" />

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl w-full mx-auto text-center">
          
          {/* Badge - Apple style */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#f5f5f7] border border-[#d2d2d7] mb-6"
          >
            <span className="px-2 py-0.5 bg-[#0071e3] text-white text-xs font-semibold rounded-full flex items-center gap-1">
              <Sparkles className="w-3 h-3" />
              {badgeLabel}
            </span>
            <span className="text-sm text-[#86868b] font-normal tracking-tight">
              {badgeText}
            </span>
          </motion.div>

          {/* Main Headline - Apple SF Pro Display */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-[#1d1d1f] leading-tight mb-5"
            style={{ 
              fontFamily: '-apple-system, BlinkMacSystemFont, SF Pro Display, sans-serif',
              letterSpacing: '-0.009em',
              lineHeight: '1.05',
              fontWeight: 600
            }}
          >
            {title}
            {subtitle && (
              <>
                <br />
                <span className="text-[#0071e3]">
                  {subtitle}
                </span>
              </>
            )}
          </motion.h1>

          {/* Subheadline - Apple SF Pro Text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg sm:text-xl md:text-2xl text-[#86868b] mb-10 max-w-3xl mx-auto leading-relaxed"
            style={{ 
              fontFamily: '-apple-system, BlinkMacSystemFont, SF Pro Text, sans-serif',
              letterSpacing: '-0.003em',
              fontWeight: 400,
              lineHeight: '1.47059'
            }}
          >
            {description}
          </motion.p>

          {/* CTA Buttons - Apple style */}
          {ctaButtons.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              {ctaButtons.map((button, index) => (
                <motion.button
                  key={index}
                  onClick={button.onClick}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`${
                    button.primary
                      ? 'bg-[#0071e3] hover:bg-[#0077ed] text-white'
                      : 'border border-[#0071e3] text-[#0071e3] hover:bg-[#0071e3]/5'
                  } px-6 py-3 text-base font-normal rounded-full transition-all duration-200 flex items-center justify-center gap-2 min-w-[160px]`}
                  style={{ 
                    fontFamily: '-apple-system, BlinkMacSystemFont, SF Pro Text, sans-serif',
                    letterSpacing: '-0.003em',
                    fontWeight: 400
                  }}
                >
                  {button.text}
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              ))}
            </motion.div>
          )}
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none z-[2]" />
    </section>
  );
}
