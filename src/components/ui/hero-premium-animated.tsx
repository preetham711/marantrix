import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { MoveRight, Sparkles, ArrowRight } from "lucide-react";
import { useTheme } from "next-themes";

interface Beam {
  x: number;
  y: number;
  width: number;
  length: number;
  angle: number;
  speed: number;
  opacity: number;
  pulse: number;
  pulseSpeed: number;
  layer: number;
}

function createBeam(width: number, height: number, layer: number): Beam {
  const angle = -35 + Math.random() * 10;
  const baseSpeed = 0.2 + layer * 0.2;
  const baseOpacity = 0.08 + layer * 0.05;
  const baseWidth = 10 + layer * 5;

  return {
    x: Math.random() * width,
    y: Math.random() * height,
    width: baseWidth,
    length: height * 2.5,
    angle,
    speed: baseSpeed + Math.random() * 0.2,
    opacity: baseOpacity + Math.random() * 0.1,
    pulse: Math.random() * Math.PI * 2,
    pulseSpeed: 0.01 + Math.random() * 0.015,
    layer,
  };
}

export const PremiumAnimatedHero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const noiseRef = useRef<HTMLCanvasElement>(null);
  const beamsRef = useRef<Beam[]>([]);
  const animationFrameRef = useRef<number>(0);
  const [titleNumber, setTitleNumber] = useState(0);
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';

  const LAYERS = 3;
  const BEAMS_PER_LAYER = 8;

  const brandTitles = [
    "Innovative",
    "Scalable",
    "Premium",
    "Intelligent",
    "Powerful",
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const noiseCanvas = noiseRef.current;
    if (!canvas || !noiseCanvas) return;

    const ctx = canvas.getContext("2d");
    const nCtx = noiseCanvas.getContext("2d");
    if (!ctx || !nCtx) return;

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);

      noiseCanvas.width = window.innerWidth * dpr;
      noiseCanvas.height = window.innerHeight * dpr;
      noiseCanvas.style.width = `${window.innerWidth}px`;
      noiseCanvas.style.height = `${window.innerHeight}px`;
      nCtx.setTransform(1, 0, 0, 1, 0, 0);
      nCtx.scale(dpr, dpr);

      beamsRef.current = [];
      for (let layer = 1; layer <= LAYERS; layer++) {
        for (let i = 0; i < BEAMS_PER_LAYER; i++) {
          beamsRef.current.push(
            createBeam(window.innerWidth, window.innerHeight, layer)
          );
        }
      }
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const generateNoise = () => {
      const imgData = nCtx.createImageData(
        noiseCanvas.width,
        noiseCanvas.height
      );
      for (let i = 0; i < imgData.data.length; i += 4) {
        const v = Math.random() * 255;
        imgData.data[i] = v;
        imgData.data[i + 1] = v;
        imgData.data[i + 2] = v;
        imgData.data[i + 3] = isDark ? 12 : 8;
      }
      nCtx.putImageData(imgData, 0, 0);
    };

    const drawBeam = (beam: Beam) => {
      ctx.save();
      ctx.translate(beam.x, beam.y);
      ctx.rotate((beam.angle * Math.PI) / 180);

      const pulsingOpacity = Math.min(
        1,
        beam.opacity * (0.8 + Math.sin(beam.pulse) * 0.4)
      );

      const gradient = ctx.createLinearGradient(0, 0, 0, beam.length);
      
      // Use brand colors (blue to cyan)
      if (isDark) {
        gradient.addColorStop(0, `rgba(37, 99, 235, 0)`);
        gradient.addColorStop(0.2, `rgba(37, 99, 235, ${pulsingOpacity * 0.5})`);
        gradient.addColorStop(0.5, `rgba(6, 182, 212, ${pulsingOpacity})`);
        gradient.addColorStop(0.8, `rgba(6, 182, 212, ${pulsingOpacity * 0.5})`);
        gradient.addColorStop(1, `rgba(37, 99, 235, 0)`);
      } else {
        gradient.addColorStop(0, `rgba(59, 130, 246, 0)`);
        gradient.addColorStop(0.2, `rgba(59, 130, 246, ${pulsingOpacity * 0.3})`);
        gradient.addColorStop(0.5, `rgba(6, 182, 212, ${pulsingOpacity * 0.5})`);
        gradient.addColorStop(0.8, `rgba(6, 182, 212, ${pulsingOpacity * 0.3})`);
        gradient.addColorStop(1, `rgba(59, 130, 246, 0)`);
      }

      ctx.fillStyle = gradient;
      ctx.filter = `blur(${2 + beam.layer * 2}px)`;
      ctx.fillRect(-beam.width / 2, 0, beam.width, beam.length);
      ctx.restore();
    };

    const animate = () => {
      if (!canvas || !ctx) return;

      // Background gradient based on theme
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      if (isDark) {
        gradient.addColorStop(0, "#000000");
        gradient.addColorStop(1, "#0a0a0a");
      } else {
        gradient.addColorStop(0, "#ffffff");
        gradient.addColorStop(1, "#f9fafb");
      }
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      beamsRef.current.forEach((beam) => {
        beam.y -= beam.speed * (beam.layer / LAYERS + 0.5);
        beam.pulse += beam.pulseSpeed;

        if (beam.y + beam.length < -50) {
          beam.y = window.innerHeight + 50;
          beam.x = Math.random() * window.innerWidth;
        }

        drawBeam(beam);
      });

      generateNoise();
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameRef.current);
    };
  }, [isDark]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleNumber((prev) => (prev + 1) % brandTitles.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="home" className="relative w-full h-screen overflow-hidden">
      <canvas
        ref={noiseRef}
        className="absolute inset-0 z-0 pointer-events-none"
      />
      <canvas ref={canvasRef} className="absolute inset-0 z-10" />

      <div className="relative z-20 flex h-screen w-full items-center justify-center px-6 text-center">
        <div className="container mx-auto flex flex-col items-center gap-8 md:gap-12 text-center">
          
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <Button 
              variant="secondary" 
              size="sm" 
              className={`gap-2 ${
                isDark 
                  ? 'bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700/50' 
                  : 'bg-white/50 hover:bg-white/80 border border-gray-200/50'
              }`}
            >
              <Sparkles className="w-4 h-4" />
              Premium Digital Solutions
              <MoveRight className="w-4 h-4" />
            </Button>
          </motion.div>

          {/* Main Headline with Animated Word */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className={`text-5xl md:text-7xl lg:text-8xl max-w-5xl tracking-tighter font-extrabold ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}
            style={{ 
              letterSpacing: '-0.045em',
              lineHeight: '1.05',
              fontWeight: 800
            }}
          >
            <span>We Create</span>
            <span className="relative flex w-full justify-center overflow-hidden py-2 md:pb-4 md:pt-2">
              &nbsp;
              {brandTitles.map((title, index) => (
                <motion.span
                  key={index}
                  className="absolute font-extrabold bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent"
                  initial={{ opacity: 0, y: "-100" }}
                  transition={{ type: "spring", stiffness: 50 }}
                  animate={
                    titleNumber === index
                      ? { y: 0, opacity: 1 }
                      : {
                          y: titleNumber > index ? -150 : 150,
                          opacity: 0,
                        }
                  }
                >
                  {title}
                </motion.span>
              ))}
            </span>
            <span>Digital Experiences</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className={`text-lg md:text-xl lg:text-2xl leading-relaxed tracking-tight max-w-3xl ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}
            style={{ 
              letterSpacing: '-0.02em',
              fontWeight: 400
            }}
          >
            UI/UX Design • Mobile Apps • Web Development • Digital Solutions
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-4 flex-wrap justify-center"
          >
            <Button 
              size="lg" 
              className="gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => scrollToSection('contact')}
            >
              Start Your Project
              <ArrowRight className="w-5 h-5" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className={`gap-2 ${
                isDark 
                  ? 'border-slate-700 hover:bg-slate-800/50' 
                  : 'border-gray-300 hover:bg-gray-50'
              }`}
              onClick={() => scrollToSection('work')}
            >
              View Our Work
              <MoveRight className="w-5 h-5" />
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 grid grid-cols-3 gap-8 max-w-3xl mx-auto"
          >
            {[
              { value: '50+', label: 'Projects Delivered' },
              { value: '100%', label: 'Client Satisfaction' },
              { value: '24/7', label: 'Support Available' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.9 + index * 0.1, 
                  ease: [0.16, 1, 0.3, 1] 
                }}
                className="text-center"
              >
                <div className={`text-3xl md:text-4xl font-bold mb-2 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`} style={{ fontWeight: 800 }}>
                  {stat.value}
                </div>
                <div className={`text-sm md:text-base ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
