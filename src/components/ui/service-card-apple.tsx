import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface ServiceCardAppleProps {
  title: string;
  description: string;
  icon: LucideIcon;
  index: number;
}

const ServiceCardApple = ({ title, description, icon: Icon, index }: ServiceCardAppleProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.05,
        ease: [0.28, 0, 0.63, 1]
      }}
      whileHover={{ 
        scale: 1.02,
        transition: { duration: 0.2, ease: [0.4, 0, 0.2, 1] }
      }}
      className="group relative"
    >
      {/* Apple Store Card Style */}
      <div 
        className="relative h-full rounded-[18px] p-6 transition-all duration-200 border bg-white border-[#d2d2d7] hover:border-[#0071e3]"
        style={{
          boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
        }}
      >
        {/* Content */}
        <div className="relative z-10">
          {/* Icon - Apple style */}
          <div className="mb-4">
            <div className="inline-flex p-3 rounded-[12px] bg-[#0071e3]">
              <Icon className="w-6 h-6 text-white" />
            </div>
          </div>

          {/* Title - SF Pro Display */}
          <h3 
            className="text-xl font-semibold mb-2 text-[#1d1d1f]"
            style={{ 
              fontFamily: '-apple-system, BlinkMacSystemFont, SF Pro Display, sans-serif',
              letterSpacing: '-0.007em',
              fontWeight: 600,
              lineHeight: '1.1'
            }}
          >
            {title}
          </h3>

          {/* Description - SF Pro Text */}
          <p 
            className="text-base leading-relaxed text-[#86868b]"
            style={{ 
              fontFamily: '-apple-system, BlinkMacSystemFont, SF Pro Text, sans-serif',
              letterSpacing: '-0.003em',
              fontWeight: 400,
              lineHeight: '1.47059'
            }}
          >
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCardApple;
