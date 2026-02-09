import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const CTAApple = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-[#f5f5f7]">
      <div className="w-full max-w-[980px] mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.28, 0, 0.63, 1] }}
          className="text-center"
        >
          <h2 
            className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-3 sm:mb-4 px-4 text-[#1d1d1f]"
            style={{ 
              letterSpacing: '-0.009em',
              lineHeight: '1.05',
              fontWeight: 600
            }}
          >
            Ready to start your project?
          </h2>
          <p 
            className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 px-4 text-[#86868b]"
            style={{ 
              letterSpacing: '-0.003em',
              lineHeight: '1.47059',
              fontWeight: 400
            }}
          >
            Get a free consultation. We'll discuss your project and show you how we can help.
          </p>

          <motion.button
            onClick={() => scrollToSection('contact')}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 bg-[#0071e3] hover:bg-[#0077ed] text-white px-6 py-3 rounded-full font-medium text-lg transition-all duration-300"
            style={{ 
              letterSpacing: '-0.003em',
              fontWeight: 400
            }}
          >
            Get Started
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTAApple;
