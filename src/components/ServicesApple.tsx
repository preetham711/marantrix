import { motion } from 'framer-motion';
import { Globe, Smartphone, Palette, Code, Headphones, Sparkles, LayoutDashboard, ShieldCheck } from 'lucide-react';
import ServiceCardApple from './ui/service-card-apple';

const ServicesApple = () => {
  const services = [
    {
      title: "UI/UX Design",
      description: "User-centered interfaces that combine aesthetics with functionality. We design digital experiences that engage users and drive conversions.",
      icon: Palette,
    },
    {
      title: "Web Development",
      description: "High-performance websites built with React, Next.js, and modern frameworks. Fast, responsive, and optimized for every device.",
      icon: Globe,
    },
    {
      title: "Mobile Apps",
      description: "Native iOS and Android applications that deliver seamless experiences. Built for performance, scalability, and user satisfaction.",
      icon: Smartphone,
    },
    {
      title: "SaaS Platforms",
      description: "Enterprise-grade software solutions that scale with your business. From MVP to full-featured platforms with robust architecture.",
      icon: LayoutDashboard,
    },
    {
      title: "Brand Identity",
      description: "Complete visual identity systems that make your brand memorable. From logos to design systems that ensure consistency.",
      icon: Sparkles,
    },
    {
      title: "Custom Development",
      description: "Tailored solutions built to your exact specifications. Clean code, modern tech stack, and engineering best practices.",
      icon: Code,
    },
    {
      title: "Maintenance & Support",
      description: "Ongoing technical support to keep your products running smoothly. Updates, monitoring, and rapid issue resolution.",
      icon: ShieldCheck,
    },
    {
      title: "Consulting & Strategy",
      description: "Expert guidance on technology decisions and digital transformation. We help you choose the right solutions for your goals.",
      icon: Headphones,
    },
  ];

  return (
    <section 
      id="services" 
      className="relative py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden bg-[#f5f5f7]"
    >
      <div className="relative z-10 w-full max-w-[980px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section header - Apple Store style */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.28, 0, 0.63, 1] }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-[#1d1d1f] mb-3 sm:mb-4 px-4"
            style={{ 
              fontFamily: '-apple-system, BlinkMacSystemFont, SF Pro Display, sans-serif',
              letterSpacing: '-0.009em',
              lineHeight: '1.05',
              fontWeight: 600
            }}
          >
            Our Services
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.28, 0, 0.63, 1] }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#86868b] max-w-3xl mx-auto px-4"
            style={{ 
              fontFamily: '-apple-system, BlinkMacSystemFont, SF Pro Text, sans-serif',
              letterSpacing: '-0.003em',
              fontWeight: 400,
              lineHeight: '1.47059'
            }}
          >
            Comprehensive digital solutions to transform your business
          </motion.p>
        </div>

        {/* Services grid - Apple Store card style */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
          {services.map((service, index) => (
            <ServiceCardApple
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// Import Sparkles for the icon

export default ServicesApple;
