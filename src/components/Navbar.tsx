import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import ThemeSwitch from '@/components/ui/theme-switch';
import { useTheme } from 'next-themes';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const menuItems = [
    { label: 'Home', id: 'home' },
    { label: 'Services', id: 'services' },
    { label: 'Work', id: 'work' },
    { label: 'About', id: 'about' },
    { label: 'Process', id: 'process' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? isDark
              ? 'bg-slate-900/80 backdrop-blur-apple shadow-2xl border-b border-slate-700/30'
              : 'bg-white/80 backdrop-blur-apple shadow-2xl border-b border-gray-200/30'
            : 'bg-transparent'
        }`}
        style={{
          backdropFilter: isScrolled ? 'saturate(180%) blur(20px)' : 'none',
          WebkitBackdropFilter: isScrolled ? 'saturate(180%) blur(20px)' : 'none',
        }}
      >
        <nav className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16 md:h-18 lg:h-20">
            
            {/* Logo - Mobile Optimized */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="flex items-center cursor-pointer group"
              onClick={() => scrollToSection('home')}
            >
              <motion.div
                className={`text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold transition-all duration-500 ${
                  isScrolled 
                    ? 'bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 bg-clip-text text-transparent' 
                    : isDark
                      ? 'text-white drop-shadow-lg'
                      : 'text-white drop-shadow-lg'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
              >
                Marantrix
              </motion.div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {menuItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index + 0.4, duration: 0.6 }}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-3 xl:px-4 py-2 xl:py-2.5 font-medium rounded-xl transition-all duration-300 text-sm xl:text-base group ${
                    isScrolled
                      ? isDark
                        ? 'text-gray-200 hover:text-cyan-400'
                        : 'text-gray-700 hover:text-blue-600'
                      : 'text-white/90 hover:text-white'
                  }`}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10">{item.label}</span>
                  
                  {/* Hover background */}
                  <motion.div
                    className={`absolute inset-0 rounded-xl ${
                      isScrolled
                        ? isDark
                          ? 'bg-slate-800'
                          : 'bg-blue-50'
                        : 'bg-white/10'
                    }`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                  
                  {/* Bottom indicator */}
                  <motion.div
                    className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 rounded-full ${
                      isScrolled
                        ? 'bg-gradient-to-r from-blue-600 to-cyan-500'
                        : 'bg-gradient-to-r from-white to-cyan-300'
                    }`}
                    initial={{ width: 0 }}
                    whileHover={{ width: '80%' }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              ))}
            </div>

            {/* Tablet Navigation */}
            <div className="hidden md:flex lg:hidden items-center space-x-1">
              {menuItems.slice(0, 4).map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index + 0.4, duration: 0.6 }}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-2 py-2 font-medium rounded-lg transition-all duration-300 text-sm ${
                    isScrolled
                      ? 'text-gray-700 hover:text-blue-600'
                      : 'text-white/90 hover:text-white'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>

            {/* CTA Button & Theme Switch - Desktop & Tablet */}
            <div className="hidden md:flex items-center gap-3 lg:gap-4">
              {/* Theme Switch */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7, duration: 0.6 }}
              >
                <ThemeSwitch />
              </motion.div>

              {/* CTA Button */}
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                onClick={() => scrollToSection('contact')}
                className="relative group overflow-hidden bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-3 md:px-4 lg:px-6 py-2 md:py-2.5 rounded-full font-semibold text-xs md:text-sm lg:text-base shadow-lg hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-500"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Animated background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600"
                  initial={{ x: '100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.4 }}
                />
                
                <span className="relative z-10 flex items-center gap-1 md:gap-2">
                  <span className="hidden sm:inline">Start Project</span>
                  <span className="sm:hidden">Start</span>
                  <ArrowRight className="w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden relative z-50 p-2 rounded-xl transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              style={{
                background: isMobileMenuOpen 
                  ? 'rgba(255, 255, 255, 0.1)' 
                  : isScrolled 
                    ? 'rgba(59, 130, 246, 0.1)' 
                    : 'rgba(255, 255, 255, 0.1)'
              }}
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={18} className={isScrolled ? 'text-gray-700' : 'text-white'} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={18} className={isScrolled ? 'text-gray-700' : 'text-white'} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/30 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Menu Panel - Mobile Optimized */}
            <motion.div
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className={`absolute right-0 top-0 h-full w-64 max-w-[80vw] backdrop-blur-2xl shadow-2xl border-l ${
                isDark
                  ? 'bg-slate-900/95 border-slate-700/50'
                  : 'bg-white/95 border-gray-200/50'
              }`}
            >
              <div className="pt-16 px-4 pb-4 h-full flex flex-col">
                
                {/* Theme Switch - Mobile */}
                <div className="mb-4 flex justify-center">
                  <ThemeSwitch />
                </div>

                {/* Menu Items */}
                <div className="flex-1 space-y-1">
                  {menuItems.map((item, index) => (
                    <motion.button
                      key={item.id}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 50 }}
                      transition={{ delay: index * 0.1, duration: 0.4 }}
                      onClick={() => scrollToSection(item.id)}
                      className={`group w-full text-left py-3 px-3 font-medium rounded-xl transition-all duration-300 flex items-center justify-between text-sm ${
                        isDark
                          ? 'text-gray-200 hover:text-cyan-400 hover:bg-slate-800'
                          : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                      }`}
                      whileHover={{ x: 8 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span>{item.label}</span>
                      <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </motion.button>
                  ))}
                </div>
                
                {/* CTA Button */}
                <motion.button
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 50 }}
                  transition={{ delay: 0.6, duration: 0.4 }}
                  onClick={() => scrollToSection('contact')}
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-4 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 text-sm"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Start Your Project
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
