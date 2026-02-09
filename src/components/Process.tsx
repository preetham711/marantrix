import { motion } from 'framer-motion';
import { Search, Lightbulb, Palette, Code, Rocket, HeartHandshake } from 'lucide-react';
import { useTheme } from 'next-themes';

const Process = () => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';

  const steps = [
    {
      icon: Search,
      title: 'Discover & Research',
      description: 'We dive deep into your business goals, target audience, and competitive landscape to create a solid foundation.',
    },
    {
      icon: Lightbulb,
      title: 'Strategy & Planning',
      description: 'We develop a comprehensive roadmap with clear milestones, timelines, and deliverables for your project.',
    },
    {
      icon: Palette,
      title: 'Design & Prototyping',
      description: 'Our designers create beautiful, user-centered interfaces with interactive prototypes for validation.',
    },
    {
      icon: Code,
      title: 'Development',
      description: 'We build your product using modern technologies, best practices, and clean, scalable code.',
    },
    {
      icon: Rocket,
      title: 'Testing & Launch',
      description: 'Rigorous testing ensures quality before launch. We handle deployment and monitor performance.',
    },
    {
      icon: HeartHandshake,
      title: 'Support & Scale',
      description: 'Ongoing maintenance, updates, and optimization to help your product grow and evolve.',
    },
  ];

  return (
    <section id="process" className={`py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 ${
      isDark 
        ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900'
        : 'bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50'
    }`}>
      <div className="max-w-8xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20"
        >
          <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 lg:mb-8 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Our{' '}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Process
            </span>
          </h2>
          <p className={`text-base sm:text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto px-2 sm:px-4 leading-relaxed ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>
            A proven methodology that delivers exceptional results, every time.
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-600 via-cyan-500 to-blue-600 opacity-20" />

          <div className="space-y-8 sm:space-y-12 lg:space-y-16">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`flex flex-col lg:flex-row items-center gap-4 sm:gap-6 lg:gap-8 ${
                    isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  <div className={`flex-1 w-full ${isEven ? 'lg:text-right' : 'lg:text-left'}`}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className={`rounded-xl sm:rounded-2xl lg:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 shadow-lg hover:shadow-2xl transition-all ${
                        isDark ? 'bg-slate-800/80' : 'bg-white'
                      }`}
                    >
                      <div className={`flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4 md:mb-6 ${isEven ? 'lg:flex-row-reverse' : ''} ${isEven ? 'lg:justify-end' : 'lg:justify-start'} justify-center lg:justify-start`}>
                        <motion.div
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                          className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg sm:rounded-xl md:rounded-2xl flex items-center justify-center flex-shrink-0"
                        >
                          <Icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-white" />
                        </motion.div>
                        <h3 className={`text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold leading-tight ${
                          isDark ? 'text-white' : 'text-gray-800'
                        }`}>
                          {step.title}
                        </h3>
                      </div>
                      <p className={`leading-relaxed text-sm sm:text-base md:text-lg lg:text-xl text-center lg:text-left ${
                        isDark ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        {step.description}
                      </p>
                    </motion.div>
                  </div>

                  <div className="relative z-10 flex-shrink-0 order-first lg:order-none">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.3, type: 'spring' }}
                      className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base lg:text-xl shadow-lg"
                    >
                      {index + 1}
                    </motion.div>
                  </div>

                  <div className="flex-1 hidden lg:block" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
