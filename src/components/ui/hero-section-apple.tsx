import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles, Play } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useRef } from 'react';

const HeroSectionApple = () => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      ref={containerRef}
      className={`relative min-h-screen flex items-center justify-center overflow-hidden ${
        isDark ? 'bg-black' : 'bg-white'
      }`}
    >
      {/* Apple-style gradient background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          style={{ y, opacity }}
          className={`absolute inset-0 ${
            isDark 
              ? 'bg-gradient-to-b from-blue-950/20 via-slate-900/50 to-black'
              : 'bg-gradient-to-b from-blue-50/50 via-white to-gray-50'
          }`}
        />
        
        {/* Animated gradient orbs - Apple style */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: [0.16, 1, 0.3, 1],
          }}
          className={`absolute top-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl ${
            isDark ? 'bg-blue-600/20' : 'bg-blue-400/30'
          }`}
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: [0.16, 1, 0.3, 1],
            delay: 1,
          }}
          className={`absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl ${
            isDark ? 'bg-cyan-600/20' : 'bg-cyan-400/30'
          }`}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32">
        <div className="text-center">
          
          {/* Badge - Apple style */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 mb-8"
          >
            <div className={`flex items-center gap-2 px-4 py-2 rounded-full border ${
              isDark 
                ? 'bg-slate-800/50 border-slate-700/50 backdrop-blur-xl'
                : 'bg-white/50 border-gray-200/50 backdrop-blur-xl'
            }`}>
              <Sparkles className={`w-4 h-4 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
              <span className={`text-sm font-medium ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>
                Premium Digital Solutions
              </span>
            </div>
          </motion.div>

          {/* Main headline - Postamp Grotesk typography */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}
            style={{ 
              letterSpacing: '-0.045em',
              lineHeight: '1.05',
              fontWeight: 800
            }}
          >
            We Create Digital
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
              Experiences
            </span>
            <br />
            That Drive Results
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className={`text-xl md:text-2xl lg:text-3xl mb-12 max-w-4xl mx-auto font-normal ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}
            style={{ 
              letterSpacing: '-0.02em',
              lineHeight: '1.5',
              fontWeight: 400
            }}
          >
            UI/UX Design • Mobile Apps • Web Development • Digital Solutions
          </motion.p>

          {/* CTA Buttons - Apple style */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.button
              onClick={() => scrollToSection('contact')}
              className="group relative overflow-hidden bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-2xl"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                Start Your Project
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </motion.button>

            <motion.button
              onClick={() => scrollToSection('work')}
              className={`group relative overflow-hidden px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 border ${
                isDark 
                  ? 'border-slate-700 hover:border-slate-600 text-white hover:bg-slate-800/50'
                  : 'border-gray-300 hover:border-gray-400 text-gray-900 hover:bg-gray-50'
              }`}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                <Play className="w-5 h-5" />
                View Our Work
              </span>
            </motion.button>
          </motion.div>

          {/* Stats - Apple style */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mt-20 grid grid-cols-3 gap-8 max-w-3xl mx-auto"
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
                transition={{ duration: 0.6, delay: 0.9 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="text-center"
              >
                <div className={`text-3xl md:text-4xl font-bold mb-2 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
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

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className={`w-6 h-10 border-2 rounded-full flex items-start justify-center p-2 ${
            isDark ? 'border-gray-600' : 'border-gray-400'
          }`}
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className={`w-1.5 h-1.5 rounded-full ${
              isDark ? 'bg-gray-400' : 'bg-gray-600'
            }`}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSectionApple;
