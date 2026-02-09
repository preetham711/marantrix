import { motion } from 'framer-motion';
import { Lightbulb, Target, Heart } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Lightbulb,
      title: 'User-Focused Design',
      description: 'Every decision is driven by user needs and real-world behavior',
    },
    {
      icon: Target,
      title: 'Modern Technology',
      description: 'Built with the latest frameworks and industry best practices',
    },
    {
      icon: Heart,
      title: 'Long-Term Partnership',
      description: 'We support your growth with ongoing maintenance and updates',
    },
  ];

  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="w-full max-w-[980px] mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.28, 0, 0.63, 1] }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 
            className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-3 sm:mb-4 px-4 text-[#1d1d1f]"
            style={{ 
              letterSpacing: '-0.009em',
              lineHeight: '1.05',
              fontWeight: 600
            }}
          >
            About Marantrix
          </h2>
          <p 
            className="text-base sm:text-lg md:text-xl px-4 text-[#86868b]"
            style={{ 
              letterSpacing: '-0.003em',
              lineHeight: '1.47059',
              fontWeight: 400
            }}
          >
            A digital product studio building modern solutions
          </p>
        </motion.div>

        <div className="grid gap-2 sm:gap-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.28, 0, 0.63, 1] }}
            className="rounded-[18px] p-10 bg-[#f5f5f7] border border-[#d2d2d7]"
          >
            <p 
              className="text-2xl mb-6 text-[#1d1d1f]"
              style={{ 
                letterSpacing: '-0.007em',
                lineHeight: '1.1',
                fontWeight: 600
              }}
            >
              Marantrix is a digital product studio focused on creating modern websites, mobile apps, and SaaS platforms. We combine design expertise with technical excellence to build solutions that work.
            </p>
            <p 
              className="text-lg text-[#86868b]"
              style={{ 
                letterSpacing: '-0.003em',
                lineHeight: '1.47059',
                fontWeight: 400
              }}
            >
              We work with startups and growing businesses to turn ideas into digital products. Our approach is simple: understand your goals, design with purpose, build with quality, and deliver on time.
            </p>
          </motion.div>

          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.1, ease: [0.28, 0, 0.63, 1] }}
                whileHover={{ scale: 1.02 }}
                className="rounded-[18px] p-8 bg-[#f5f5f7] border border-[#d2d2d7] hover:border-[#0071e3] transition-all duration-300"
              >
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-full bg-[#0071e3] flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 
                      className="text-xl mb-2 text-[#1d1d1f]"
                      style={{ 
                        letterSpacing: '-0.007em',
                        lineHeight: '1.1',
                        fontWeight: 600
                      }}
                    >
                      {value.title}
                    </h3>
                    <p 
                      className="text-base text-[#86868b]"
                      style={{ 
                        letterSpacing: '-0.003em',
                        lineHeight: '1.47059',
                        fontWeight: 400
                      }}
                    >
                      {value.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
