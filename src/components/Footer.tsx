import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin, Instagram, ArrowUp, Mail } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const links = {
    services: [
      { label: 'UI/UX Design', id: 'services' },
      { label: 'Mobile Development', id: 'services' },
      { label: 'Web Development', id: 'services' },
      { label: 'Branding', id: 'services' },
    ],
    company: [
      { label: 'About Us', id: 'about' },
      { label: 'Our Process', id: 'process' },
      { label: 'Our Work', id: 'work' },
      { label: 'Contact', id: 'contact' },
    ],
  };

  const socials = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40" />

      <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
        {/* Main Footer Content */}
        <div className="py-6 xs:py-8 sm:py-12 md:py-16 lg:py-20 border-b border-gray-700/50">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 xs:gap-6 sm:gap-8 lg:gap-12">
            
            {/* Brand Section */}
            <div className="sm:col-span-2 lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-3 xs:mb-4 sm:mb-6"
              >
                <h3 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2 xs:mb-3 sm:mb-4">
                  Marantrix
                </h3>
                <p className="text-gray-400 leading-relaxed text-xs xs:text-sm sm:text-base lg:text-lg mb-3 xs:mb-4 sm:mb-6">
                  Creating exceptional digital experiences that help businesses grow and succeed in the modern digital landscape.
                </p>
              </motion.div>

              {/* Social Links */}
              <div className="flex gap-1.5 xs:gap-2 sm:gap-3">
                {socials.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 bg-gray-800/80 hover:bg-gradient-to-br hover:from-blue-600 hover:to-cyan-500 rounded-md xs:rounded-lg sm:rounded-xl flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
                    >
                      <Icon className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5" />
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Services Links */}
            <div>
              <motion.h4
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-sm xs:text-base sm:text-lg lg:text-xl font-bold mb-2 xs:mb-3 sm:mb-4 lg:mb-6"
              >
                Services
              </motion.h4>
              <ul className="space-y-1.5 xs:space-y-2 sm:space-y-3">
                {links.services.map((link, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <motion.button
                      onClick={() => scrollToSection(link.id)}
                      whileHover={{ x: 5 }}
                      className="text-gray-400 hover:text-blue-400 transition-all duration-300 text-xs xs:text-sm sm:text-base block"
                    >
                      {link.label}
                    </motion.button>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <motion.h4
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-sm xs:text-base sm:text-lg lg:text-xl font-bold mb-2 xs:mb-3 sm:mb-4 lg:mb-6"
              >
                Company
              </motion.h4>
              <ul className="space-y-1.5 xs:space-y-2 sm:space-y-3">
                {links.company.map((link, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <motion.button
                      onClick={() => scrollToSection(link.id)}
                      whileHover={{ x: 5 }}
                      className="text-gray-400 hover:text-blue-400 transition-all duration-300 text-xs xs:text-sm sm:text-base block"
                    >
                      {link.label}
                    </motion.button>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Newsletter Section */}
            <div>
              <motion.h4
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-sm xs:text-base sm:text-lg lg:text-xl font-bold mb-2 xs:mb-3 sm:mb-4 lg:mb-6"
              >
                Stay Updated
              </motion.h4>
              <p className="text-gray-400 mb-2 xs:mb-3 sm:mb-4 text-xs xs:text-sm sm:text-base leading-relaxed">
                Get the latest updates on our projects and insights.
              </p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col gap-2"
              >
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full px-2.5 xs:px-3 sm:px-4 py-2 xs:py-2.5 rounded-md xs:rounded-lg sm:rounded-xl bg-gray-800/80 border border-gray-700/50 focus:border-blue-500 focus:outline-none text-xs xs:text-sm sm:text-base transition-all duration-300 backdrop-blur-sm"
                />
                <motion.button
                  whileHover={{ scale: 1.05, y: -1 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 px-3 xs:px-4 sm:px-6 py-2 xs:py-2.5 rounded-md xs:rounded-lg sm:rounded-xl font-medium text-xs xs:text-sm sm:text-base transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 flex items-center justify-center gap-1.5 xs:gap-2"
                >
                  <Mail className="w-3 h-3 xs:w-4 xs:h-4" />
                  Subscribe
                </motion.button>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-3 xs:py-4 sm:py-6 lg:py-8 flex flex-col sm:flex-row justify-between items-center gap-2 xs:gap-3 sm:gap-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-400 text-xs sm:text-sm text-center sm:text-left"
          >
            Copyright © {new Date().getFullYear()} Marantrix. All rights reserved.
          </motion.p>

          <motion.button
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.9 }}
            className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 rounded-full sm:rounded-xl flex items-center justify-center hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
