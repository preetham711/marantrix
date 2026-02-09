import { useScrollProgress } from '@/hooks/useScrollAnimation';
import { motion } from 'framer-motion';

export function ScrollProgress() {
  const scrollProgress = useScrollProgress();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-50 h-1 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 origin-left"
      style={{
        scaleX: scrollProgress,
        transformOrigin: '0%',
      }}
      initial={{ scaleX: 0 }}
      animate={{ scaleX: scrollProgress }}
      transition={{ duration: 0.1, ease: 'linear' }}
    />
  );
}
