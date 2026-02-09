import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Globe, Smartphone, Palette, MessageCircle } from 'lucide-react';
import { useTheme } from 'next-themes';

const Services = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const services = [
    {
      title: "Website",
      description: "Custom design to improve your business.",
      icon: Globe,
    },
    {
      title: "Mobile App",
      description: "Mobile application for your business.",
      icon: Smartphone,
    },
    {
      title: "UI/UX Design",
      description: "Beautiful and modern UI/UX design for your Application.",
      icon: Palette,
    },
    {
      title: "Consulting",
      description: "On call support to design your application.",
      icon: MessageCircle,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section id="services" className={`relative py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden ${
      isDark ? 'bg-slate-900' : 'bg-gray-50'
    }`}>
      {/* Background gradient overlay to match hero */}
      <div className={`absolute inset-0 ${
        isDark 
          ? 'bg-gradient-to-b from-slate-900 via-slate-900/95 to-slate-900' 
          : 'bg-gradient-to-b from-gray-50 via-gray-50/95 to-gray-50'
      }`}></div>
      
      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        
        {/* Section Header - Matching Hero Typography */}
        <div className={`text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24 transition-all duration-1000 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className={`font-bold mb-4 sm:mb-6 md:mb-8 leading-tight px-1 sm:px-2 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}
          >
            <span className="block text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight">
              OUR
            </span>
            <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent mt-1 sm:mt-2 text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-wide">
              SERVICES
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className={`text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl max-w-4xl mx-auto leading-relaxed font-medium px-2 sm:px-4 tracking-wide ${
              isDark ? 'text-gray-200' : 'text-gray-700'
            }`}
          >
            Comprehensive digital solutions to transform your business
          </motion.p>
        </div>
        
        {/* Services Grid - Better alignment and centering */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-6 lg:gap-4 xl:gap-6 justify-items-center"
        >
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={itemVariants}
                transition={{ duration: 0.8, ease: "easeOut" }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -8,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                whileTap={{ scale: 0.98 }}
                className={`group relative backdrop-blur-sm border rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-6 lg:p-6 xl:p-8 transition-all duration-500 hover:shadow-2xl w-full max-w-sm ${
                  isDark 
                    ? 'bg-slate-800/50 border-slate-700/50 hover:border-blue-500/50 hover:shadow-blue-500/10'
                    : 'bg-white/80 border-gray-200 hover:border-blue-400 hover:shadow-blue-400/10'
                }`}
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                  isDark 
                    ? 'bg-gradient-to-br from-blue-600/5 via-transparent to-cyan-600/5'
                    : 'bg-gradient-to-br from-blue-400/5 via-transparent to-cyan-400/5'
                }`} />
                
                {/* Icon - Centered and properly sized */}
                <motion.div
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className="relative z-10 mb-6 sm:mb-8 md:mb-6 lg:mb-6 xl:mb-8 flex justify-center"
                >
                  <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-14 md:h-14 lg:w-12 lg:h-12 xl:w-16 xl:h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:from-blue-400 group-hover:to-cyan-400 transition-all duration-500 shadow-lg group-hover:shadow-blue-500/25">
                    <IconComponent className="w-7 h-7 sm:w-8 sm:h-8 md:w-7 md:h-7 lg:w-6 lg:h-6 xl:w-8 xl:h-8 text-white" />
                  </div>
                </motion.div>

                {/* Content - Centered text alignment */}
                <div className="relative z-10 text-center">
                  <motion.h3
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`text-xl sm:text-2xl md:text-xl lg:text-lg xl:text-xl font-bold mb-3 sm:mb-4 md:mb-3 lg:mb-3 xl:mb-4 tracking-tight transition-colors duration-300 ${
                      isDark 
                        ? 'text-white group-hover:text-blue-100'
                        : 'text-gray-900 group-hover:text-blue-600'
                    }`}
                  >
                    {service.title}
                  </motion.h3>
                  
                  <motion.p
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    className={`text-sm sm:text-base md:text-sm lg:text-sm xl:text-base leading-relaxed transition-colors duration-300 font-medium ${
                      isDark 
                        ? 'text-gray-300 group-hover:text-gray-200'
                        : 'text-gray-600 group-hover:text-gray-700'
                    }`}
                  >
                    {service.description}
                  </motion.p>
                </div>

                {/* Bottom accent line */}
                <motion.div
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.5 }}
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-b-2xl sm:rounded-b-3xl"
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
