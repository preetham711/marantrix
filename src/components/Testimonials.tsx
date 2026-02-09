import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { useState, useEffect } from 'react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart Inc.',
      content: 'Marantrix delivered exactly what we needed. Professional team, clear communication, and a product that works perfectly.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'Founder, HealthHub',
      content: 'Great experience from start to finish. They understood our vision and built a mobile app our users love.',
      rating: 5,
    },
    {
      name: 'Emily Rodriguez',
      role: 'Product Manager, FinanceFlow',
      content: 'Quality work and reliable delivery. The team was responsive and delivered on time. Highly recommend.',
      rating: 5,
    },
    {
      name: 'David Thompson',
      role: 'CTO, ShopEasy',
      content: 'Professional development team that knows their craft. Our platform performs well and scales as we grow.',
      rating: 5,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
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
            What Our Clients Say
          </h2>
          <p 
            className="text-base sm:text-lg md:text-xl px-4 text-[#86868b]"
            style={{ 
              letterSpacing: '-0.003em',
              lineHeight: '1.47059',
              fontWeight: 400
            }}
          >
            Hear from clients who've worked with us
          </p>
        </motion.div>

        <div className="relative">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8, ease: [0.28, 0, 0.63, 1] }}
            className="rounded-[18px] p-10 bg-[#f5f5f7] border border-[#d2d2d7]"
          >
            <div className="flex gap-1 mb-6 justify-center">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[#0071e3] text-[#0071e3]" />
              ))}
            </div>

            <p 
              className="text-2xl mb-8 text-center text-[#1d1d1f]"
              style={{ 
                letterSpacing: '-0.007em',
                lineHeight: '1.1',
                fontWeight: 600
              }}
            >
              "{testimonials[currentIndex].content}"
            </p>

            <div className="text-center">
              <h4 
                className="text-lg mb-1 text-[#1d1d1f]"
                style={{ 
                  letterSpacing: '-0.007em',
                  lineHeight: '1.1',
                  fontWeight: 600
                }}
              >
                {testimonials[currentIndex].name}
              </h4>
              <p 
                className="text-base text-[#86868b]"
                style={{ 
                  letterSpacing: '-0.003em',
                  lineHeight: '1.47059',
                  fontWeight: 400
                }}
              >
                {testimonials[currentIndex].role}
              </p>
            </div>
          </motion.div>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-[#0071e3] w-8'
                    : 'bg-[#d2d2d7] hover:bg-[#b0b0b5] w-2'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
