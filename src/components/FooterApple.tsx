import { motion } from 'framer-motion';
import { Twitter, Linkedin, Github, Instagram } from 'lucide-react';

const FooterApple = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const footerSections = [
    {
      title: 'Services',
      links: [
        { label: 'UI/UX Design', id: 'services' },
        { label: 'Mobile Development', id: 'services' },
        { label: 'Web Development', id: 'services' },
        { label: 'SaaS Solutions', id: 'services' },
        { label: 'Consulting', id: 'services' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About Marantrix', id: 'about' },
        { label: 'Our Process', id: 'process' },
        { label: 'Our Team', id: 'team' },
        { label: 'Portfolio', id: 'work' },
        { label: 'Testimonials', id: 'testimonials' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Blog', id: 'home' },
        { label: 'Case Studies', id: 'work' },
        { label: 'Documentation', id: 'home' },
        { label: 'Support', id: 'contact' },
        { label: 'FAQ', id: 'contact' },
      ],
    },
    {
      title: 'Contact',
      links: [
        { label: 'Get In Touch', id: 'contact' },
        { label: 'WhatsApp: +63 9266883303', id: 'contact', isExternal: true, href: 'https://wa.me/639266883303' },
        { label: 'Email Us', id: 'contact' },
        { label: 'Visit Our Office', id: 'contact' },
      ],
    },
  ];

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  return (
    <footer className="bg-[#f5f5f7]">
      <div className="w-full max-w-[980px] mx-auto px-4 sm:px-6">
        
        {/* Logo Section */}
        <div className="pt-8 sm:pt-10 pb-4 border-b border-[#d2d2d7]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.28, 0, 0.63, 1] }}
            className="flex justify-center"
          >
            <img 
              src="/images/marantrix logo.png" 
              alt="Marantrix Logo" 
              className="h-12 sm:h-16 w-auto object-contain"
            />
          </motion.div>
        </div>

        {/* Main Footer Content */}
        <div className="pt-8 sm:pt-10 md:pt-12 pb-4 sm:pb-5 border-b border-[#d2d2d7]">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
            {footerSections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: [0.28, 0, 0.63, 1]
                }}
              >
                <h3 
                  className="text-xs font-semibold mb-3 text-[#1d1d1f]"
                  style={{ 
                    letterSpacing: '0.01em',
                    fontWeight: 600
                  }}
                >
                  {section.title}
                </h3>
                <ul className="space-y-2.5">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      {link.isExternal && link.href ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-[#6e6e73] hover:text-[#0071e3] transition-colors duration-200 block"
                          style={{ 
                            letterSpacing: '-0.01em',
                            fontWeight: 400,
                            lineHeight: '1.33337'
                          }}
                        >
                          {link.label}
                        </a>
                      ) : (
                        <button
                          onClick={() => scrollToSection(link.id)}
                          className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors duration-200 block"
                          style={{ 
                            letterSpacing: '-0.01em',
                            fontWeight: 400,
                            lineHeight: '1.33337'
                          }}
                        >
                          {link.label}
                        </button>
                      )}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-5">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            
            {/* Left Side - Copyright and Links */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.28, 0, 0.63, 1] }}
                className="text-xs text-[#6e6e73]"
                style={{ 
                  letterSpacing: '-0.01em',
                  fontWeight: 400
                }}
              >
                Copyright © {new Date().getFullYear()} Marantrix. All rights reserved.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.28, 0, 0.63, 1] }}
                className="flex items-center gap-4 text-xs"
              >
                <a 
                  href="#" 
                  className="text-[#6e6e73] hover:text-[#1d1d1f] transition-colors duration-200"
                  style={{ 
                    letterSpacing: '-0.01em',
                    fontWeight: 400
                  }}
                >
                  Privacy Policy
                </a>
                <span className="text-[#d2d2d7]">|</span>
                <a 
                  href="#" 
                  className="text-[#6e6e73] hover:text-[#1d1d1f] transition-colors duration-200"
                  style={{ 
                    letterSpacing: '-0.01em',
                    fontWeight: 400
                  }}
                >
                  Terms of Use
                </a>
              </motion.div>
            </div>

            {/* Right Side - Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.28, 0, 0.63, 1] }}
              className="flex items-center gap-4"
            >
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-[#6e6e73] hover:text-[#1d1d1f] transition-colors duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Location & Contact Info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.28, 0, 0.63, 1] }}
            className="mt-3 space-y-1"
          >
            <p 
              className="text-xs text-[#1d1d1f] font-semibold"
              style={{ 
                letterSpacing: '-0.01em',
                fontWeight: 600
              }}
            >
              Visit Us
            </p>
            <p 
              className="text-xs text-[#6e6e73]"
              style={{ 
                letterSpacing: '-0.01em',
                fontWeight: 400
              }}
            >
              PTP Nagar, Thiruvananthapuram, Kerala, India
            </p>
            <p 
              className="text-xs text-[#6e6e73]"
              style={{ 
                letterSpacing: '-0.01em',
                fontWeight: 400
              }}
            >
              WhatsApp: <a href="https://wa.me/639266883303" target="_blank" rel="noopener noreferrer" className="text-[#0071e3] hover:underline">+63 9266883303</a>
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default FooterApple;
