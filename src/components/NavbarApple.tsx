import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NavbarApple = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      // Track active section
      const sections = ['services', 'process', 'work', 'about', 'team', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 44;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { label: 'Services', id: 'services' },
    { label: 'Process', id: 'process' },
    { label: 'Work', id: 'work' },
    { label: 'About', id: 'about' },
    { label: 'Team', id: 'team' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[rgba(251,251,253,0.8)] shadow-sm'
            : 'bg-[rgba(251,251,253,0.8)]'
        }`}
        style={{
          backdropFilter: 'saturate(180%) blur(20px)',
          WebkitBackdropFilter: 'saturate(180%) blur(20px)',
          borderBottom: isScrolled ? '1px solid rgba(0,0,0,0.05)' : '1px solid transparent',
        }}
      >
        <nav className="max-w-[980px] mx-auto px-[22px] h-[44px] flex items-center justify-between">
          
          {/* Logo */}
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center hover:opacity-80 transition-opacity duration-200 -ml-2"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <img 
              src="/images/marantrix logo.png" 
              alt="Marantrix" 
              className="h-7 w-auto object-contain"
            />
          </motion.button>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-[32px]">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative text-[#1d1d1f] transition-opacity duration-200 ${
                  activeSection === item.id ? 'opacity-100' : 'opacity-80 hover:opacity-100'
                }`}
                style={{
                  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", sans-serif',
                  fontSize: '12px',
                  fontWeight: 400,
                  letterSpacing: '-0.01em',
                  lineHeight: '1',
                }}
                whileHover={{ y: -1 }}
                whileTap={{ y: 0 }}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute -bottom-[21px] left-0 right-0 h-[2px] bg-[#0071e3]"
                    initial={false}
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30
                    }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden w-[44px] h-[44px] flex items-center justify-center -mr-2"
            aria-label="Menu"
            whileTap={{ scale: 0.95 }}
          >
            <motion.svg 
              width="17" 
              height="17" 
              viewBox="0 0 17 17" 
              fill="none"
              animate={isMobileMenuOpen ? "open" : "closed"}
            >
              <motion.path 
                d="M1 3.5h15"
                stroke="#1d1d1f" 
                strokeWidth="1.5" 
                strokeLinecap="round"
                variants={{
                  closed: { d: "M1 3.5h15", opacity: 1 },
                  open: { d: "M2 2L15 15", opacity: 1 }
                }}
                transition={{ duration: 0.2 }}
              />
              <motion.path 
                d="M1 8.5h15"
                stroke="#1d1d1f" 
                strokeWidth="1.5" 
                strokeLinecap="round"
                variants={{
                  closed: { opacity: 1 },
                  open: { opacity: 0 }
                }}
                transition={{ duration: 0.2 }}
              />
              <motion.path 
                d="M1 13.5h15"
                stroke="#1d1d1f" 
                strokeWidth="1.5" 
                strokeLinecap="round"
                variants={{
                  closed: { d: "M1 13.5h15", opacity: 1 },
                  open: { d: "M2 15L15 2", opacity: 1 }
                }}
                transition={{ duration: 0.2 }}
              />
            </motion.svg>
          </motion.button>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/20 z-40 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
              style={{ backdropFilter: 'blur(10px)' }}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ 
                type: "spring",
                stiffness: 300,
                damping: 30
              }}
              className="fixed top-[44px] left-0 right-0 z-40 md:hidden bg-[rgba(251,251,253,0.95)] shadow-lg"
              style={{
                backdropFilter: 'saturate(180%) blur(20px)',
                WebkitBackdropFilter: 'saturate(180%) blur(20px)',
              }}
            >
              <nav className="max-w-[980px] mx-auto px-[22px] py-4">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full text-left py-3 px-4 rounded-lg transition-colors ${
                      activeSection === item.id 
                        ? 'bg-[#0071e3]/10 text-[#0071e3]' 
                        : 'text-[#1d1d1f] hover:bg-[#f5f5f7]'
                    }`}
                    style={{
                      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", sans-serif',
                      fontSize: '17px',
                      fontWeight: activeSection === item.id ? 600 : 400,
                      letterSpacing: '-0.003em',
                    }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavbarApple;
