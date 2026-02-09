import { motion } from 'framer-motion';
import { Search, Lightbulb, Palette, Code, Rocket, HeartHandshake } from 'lucide-react';

const ProcessApple = () => {
  const steps = [
    {
      icon: Search,
      title: 'Discover & Research',
      description: 'We dive deep into your business goals, target audience, and competitive landscape to create a solid foundation.',
      number: '01',
    },
    {
      icon: Lightbulb,
      title: 'Strategy & Planning',
      description: 'We develop a comprehensive roadmap with clear milestones, timelines, and deliverables for your project.',
      number: '02',
    },
    {
      icon: Palette,
      title: 'Design & Prototyping',
      description: 'Our designers create beautiful, user-centered interfaces with interactive prototypes for validation.',
      number: '03',
    },
    {
      icon: Code,
      title: 'Development',
      description: 'We build your product using modern technologies, best practices, and clean, scalable code.',
      number: '04',
    },
    {
      icon: Rocket,
      title: 'Testing & Launch',
      description: 'Rigorous testing ensures quality before launch. We handle deployment and monitor performance.',
      number: '05',
    },
    {
      icon: HeartHandshake,
      title: 'Support & Scale',
      description: 'Ongoing maintenance, updates, and optimization to help your product grow and evolve.',
      number: '06',
    },
  ];

  return (
    <section 
      id="process" 
      className="relative py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden bg-white"
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
            Our Process
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
            A proven methodology that delivers exceptional results
          </motion.p>
        </div>

        {/* Process steps - Apple Store card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3">
          {steps.map((step, index) => {
            const Icon = step.icon;
            
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.05,
                  ease: [0.28, 0, 0.63, 1]
                }}
                whileHover={{ scale: 1.02 }}
                className="group relative"
              >
                <div 
                  className="relative h-full rounded-[18px] p-6 border bg-[#f5f5f7] border-[#d2d2d7] hover:border-[#0071e3] transition-all duration-200"
                  style={{
                    boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                  }}
                >
                  {/* Icon and Number */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="inline-flex p-3 rounded-[12px] bg-[#0071e3]">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    
                    <span className="text-5xl font-semibold text-[#d2d2d7]" style={{ 
                      fontFamily: '-apple-system, BlinkMacSystemFont, SF Pro Display, sans-serif',
                      letterSpacing: '-0.009em' 
                    }}>
                      {step.number}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 
                    className="text-xl font-semibold mb-2 text-[#1d1d1f]"
                    style={{ 
                      fontFamily: '-apple-system, BlinkMacSystemFont, SF Pro Display, sans-serif',
                      letterSpacing: '-0.007em',
                      fontWeight: 600,
                      lineHeight: '1.1'
                    }}
                  >
                    {step.title}
                  </h3>

                  <p 
                    className="text-base leading-relaxed text-[#86868b]"
                    style={{ 
                      fontFamily: '-apple-system, BlinkMacSystemFont, SF Pro Text, sans-serif',
                      letterSpacing: '-0.003em',
                      fontWeight: 400,
                      lineHeight: '1.47059'
                    }}
                  >
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessApple;
