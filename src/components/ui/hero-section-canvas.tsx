import { useEffect } from "react";
import { motion } from "framer-motion";
import { renderCanvas } from "@/components/ui/canvas";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Play, Sparkles, Plus } from "lucide-react";

export function HeroSectionCanvas() {
  useEffect(() => {
    renderCanvas();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Canvas Background */}
      <canvas
        className="pointer-events-none absolute inset-0 mx-auto bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900"
        id="canvas"
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 text-center mt-20 md:mt-20">
        
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="z-10 mb-6 mt-10 sm:justify-center md:mb-4 md:mt-20"
        >
          <Badge className="relative flex items-center whitespace-nowrap rounded-full border bg-white/10 backdrop-blur-md px-6 py-3 text-sm leading-6 text-white/90 border-white/20">
            <Sparkles className="h-5 w-5 p-1 mr-2" />
            Introducing Marantrix Digital Agency
            <motion.div
              className="ml-2 flex items-center font-semibold hover:text-blue-300 transition-colors cursor-pointer"
              onClick={() => scrollToSection('services')}
              whileHover={{ scale: 1.05 }}
            >
              Explore
              <ArrowRight className="h-4 w-4 ml-1" />
            </motion.div>
          </Badge>
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-10 mt-4 md:mt-6"
        >
          <div className="px-2">
            <div className="relative mx-auto h-full max-w-7xl border border-white/20 rounded-3xl p-6 backdrop-blur-sm bg-white/5 [mask-image:radial-gradient(800rem_96rem_at_center,white,transparent)] md:px-12 md:py-20">
              
              {/* Corner Plus Icons */}
              <Plus
                strokeWidth={4}
                className="absolute -left-5 -top-5 h-10 w-10 text-blue-400"
              />
              <Plus
                strokeWidth={4}
                className="absolute -bottom-5 -left-5 h-10 w-10 text-blue-400"
              />
              <Plus
                strokeWidth={4}
                className="absolute -right-5 -top-5 h-10 w-10 text-blue-400"
              />
              <Plus
                strokeWidth={4}
                className="absolute -bottom-5 -right-5 h-10 w-10 text-blue-400"
              />

              {/* Main Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex select-none flex-col px-3 py-2 text-center text-5xl font-semibold leading-none tracking-tight text-white md:flex-col md:text-8xl lg:flex-row lg:text-8xl"
              >
                Your complete platform for
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent ml-0 lg:ml-4">
                  Digital Design.
                </span>
              </motion.h1>

              {/* Status Indicator */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex items-center justify-center gap-2 mt-6"
              >
                <span className="relative flex h-3 w-3 items-center justify-center">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
                </span>
                <p className="text-sm text-green-400 font-medium">Available Now</p>
              </motion.div>
            </div>
          </div>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="mt-8"
          >
            <h2 className="text-2xl md:text-3xl text-white/90 mb-4">
              Welcome to our creative playground! We're{" "}
              <span className="text-blue-400 font-bold">Marantrix</span>
            </h2>
            <p className="md:text-lg mx-auto mb-16 mt-2 max-w-2xl px-6 text-base text-white/70 sm:px-6 md:max-w-4xl md:px-20 lg:text-xl">
              We craft enchanting digital experiences for brands, and create design solutions
              to empower businesses in the digital world.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Button 
              variant="default" 
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-semibold px-8 py-4 text-lg rounded-full shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 border-0"
            >
              Start Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-md px-8 py-4 text-lg rounded-full hover:border-white/50 transition-all duration-300 hover:scale-105"
            >
              <Play className="mr-2 h-5 w-5" />
              Book a call
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSectionCanvas;