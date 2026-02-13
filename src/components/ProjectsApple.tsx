import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight } from 'lucide-react';

const ProjectsApple = () => {
  const projects = [
    {
      title: "Eccentro",
      description: "Our in-house platform designed to help users discover local businesses, places, and services, while enabling businesses to promote their offerings and connect with customers.",
      category: "Our Product",
      gradient: "from-blue-600 to-indigo-600",
      image: "/images/projects/eccentro.jpg",
      isOwnProduct: true,
      link: "https://eccentroweb.com/",
      features: [
        "Business and place discovery",
        "Categories for shops, restaurants, services, and events",
        "Detailed listings with contact information",
        "User-friendly browsing and search",
        "Business profiles and promotions",
        "Location-based exploration",
        "Clean and simple user experience",
        "Scalable and future-ready architecture"
      ]
    },
    {
      title: "E-Commerce Platform",
      description: "A modern, scalable e-commerce solution with real-time inventory management and seamless checkout experience.",
      category: "Web & Mobile",
      gradient: "from-purple-600 to-pink-600",
      image: "/images/projects/ecommerce.jpg",
      isOwnProduct: false,
    },
    {
      title: "Healthcare App",
      description: "HIPAA-compliant telemedicine platform connecting patients with healthcare providers instantly.",
      category: "Mobile App",
      gradient: "from-blue-600 to-cyan-600",
      image: "/images/projects/healthcare.jpg",
      isOwnProduct: false,
    },
    {
      title: "Financial Dashboard",
      description: "Real-time analytics dashboard for financial institutions with advanced data visualization.",
      category: "Web App",
      gradient: "from-emerald-600 to-teal-600",
      image: "/images/projects/financial.jpg",
      isOwnProduct: false,
    },
    {
      title: "Social Media Platform",
      description: "Next-generation social networking platform with AI-powered content recommendations.",
      category: "Web & Mobile",
      gradient: "from-orange-600 to-red-600",
      image: "/images/projects/social.jpg",
      isOwnProduct: false,
    },
  ];

  return (
    <section 
      id="work" 
      className="relative py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden bg-[#f5f5f7]"
    >
      <div className="relative z-10 w-full max-w-[980px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section header - Apple Store style */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.28, 0, 0.63, 1] }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-[#1d1d1f] mb-3 sm:mb-4 px-4"
            style={{ 
              fontFamily: '-apple-system, BlinkMacSystemFont, SF Pro Display, sans-serif',
              letterSpacing: '-0.009em',
              lineHeight: '1.05',
              fontWeight: 600
            }}
          >
            Featured Projects
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.28, 0, 0.63, 1] }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#86868b] max-w-3xl mx-auto px-4"
            style={{ 
              fontFamily: '-apple-system, BlinkMacSystemFont, SF Pro Text, sans-serif',
              letterSpacing: '-0.003em',
              fontWeight: 400,
              lineHeight: '1.47059'
            }}
          >
            Real projects, real results. See how we help businesses build digital products that work.
          </motion.p>
        </div>

        {/* Projects grid - Apple Store card style */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.05,
                ease: [0.28, 0, 0.63, 1]
              }}
              whileHover={{ scale: project.isOwnProduct ? 1.01 : 1.02 }}
              className={`group relative ${project.isOwnProduct ? 'md:col-span-2' : ''}`}
            >
              <a
                href={project.link || '#'}
                target={project.link ? "_blank" : undefined}
                rel={project.link ? "noopener noreferrer" : undefined}
                className="block"
              >
                <div 
                  className={`relative h-full rounded-[18px] overflow-hidden border bg-white transition-all duration-200 ${
                    project.isOwnProduct 
                      ? 'border-[#0071e3] shadow-lg shadow-[#0071e3]/20' 
                      : 'border-[#d2d2d7] hover:border-[#0071e3]'
                  }`}
                  style={{
                    boxShadow: project.isOwnProduct 
                      ? '0 4px 16px rgba(0,113,227,0.15)' 
                      : '0 2px 8px rgba(0,0,0,0.04)',
                  }}
                >
                  {/* Own Product Badge - Top Right */}
                  {project.isOwnProduct && (
                    <div className="absolute top-4 right-4 z-10">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="px-3 py-1.5 rounded-full bg-[#0071e3] text-white text-xs font-semibold flex items-center gap-1.5"
                        style={{ 
                          fontFamily: '-apple-system, BlinkMacSystemFont, SF Pro Text, sans-serif',
                          letterSpacing: '-0.003em',
                        }}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                        Our Product
                      </motion.div>
                    </div>
                  )}

                  {/* Image container */}
                  <div className={`relative overflow-hidden ${project.isOwnProduct ? 'h-64 md:h-80' : 'h-48'}`}>
                    {/* Project Image */}
                    {project.image ? (
                      <>
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="absolute inset-0 w-full h-full object-cover"
                          onError={(e) => {
                            // Fallback to gradient if image fails to load
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                        {/* Gradient overlay for better text visibility */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-80`} />
                      </>
                    ) : (
                      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`} />
                    )}
                    {project.isOwnProduct && (
                      <div className="absolute inset-0 bg-[#0071e3]/10" />
                    )}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileHover={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.2 }}
                        className="bg-white/20 backdrop-blur-sm rounded-full p-4"
                      >
                        <ExternalLink className={`${project.isOwnProduct ? 'w-8 h-8' : 'w-6 h-6'} text-white`} />
                      </motion.div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`${project.isOwnProduct ? 'p-8 md:p-10' : 'p-6'}`}>
                    <div className={`${project.isOwnProduct ? 'md:flex md:items-start md:justify-between md:gap-8' : ''}`}>
                      <div className={`${project.isOwnProduct ? 'md:flex-1' : ''}`}>
                        {/* Category badge */}
                        <div className="mb-3">
                          <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-normal ${
                            project.isOwnProduct 
                              ? 'bg-[#0071e3] text-white' 
                              : 'bg-[#0071e3]/10 text-[#0071e3]'
                          }`}>
                            {project.category}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 
                          className={`${project.isOwnProduct ? 'text-2xl md:text-3xl' : 'text-xl'} font-semibold mb-2 ${
                            project.isOwnProduct ? 'text-[#0071e3]' : 'text-[#1d1d1f]'
                          }`}
                          style={{ 
                            fontFamily: '-apple-system, BlinkMacSystemFont, SF Pro Display, sans-serif',
                            letterSpacing: '-0.007em',
                            fontWeight: 600,
                            lineHeight: '1.1'
                          }}
                        >
                          {project.title}
                        </h3>

                        {/* Description */}
                        <p 
                          className={`${project.isOwnProduct ? 'text-lg' : 'text-base'} leading-relaxed mb-4 text-[#86868b]`}
                          style={{ 
                            fontFamily: '-apple-system, BlinkMacSystemFont, SF Pro Text, sans-serif',
                            letterSpacing: '-0.003em',
                            fontWeight: 400,
                            lineHeight: '1.47059'
                          }}
                        >
                          {project.description}
                        </p>

                        {/* Features list for own product */}
                        {project.isOwnProduct && project.features && (
                          <div className="mb-6 grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {project.features.slice(0, 6).map((feature, idx) => (
                              <div key={idx} className="flex items-start gap-2">
                                <span className="text-[#0071e3] mt-1">✓</span>
                                <span className="text-sm text-[#6e6e73]">{feature}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Visit website button for own product */}
                      {project.isOwnProduct && project.link && (
                        <div className="mt-4 md:mt-0">
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0071e3] text-white font-normal text-base hover:bg-[#0077ed] transition-colors duration-200"
                            style={{ 
                              fontFamily: '-apple-system, BlinkMacSystemFont, SF Pro Text, sans-serif',
                              letterSpacing: '-0.003em',
                              fontWeight: 400
                            }}
                          >
                            Visit Website
                            <ExternalLink className="w-4 h-4" />
                          </motion.div>
                        </div>
                      )}
                    </div>

                    {/* View project link for other projects */}
                    {!project.isOwnProduct && (
                      <motion.div
                        className="flex items-center gap-2 text-[#0071e3] font-normal text-base group-hover:gap-3 transition-all duration-200"
                        whileHover={{ x: 4 }}
                      >
                        <span>View Project</span>
                        <ArrowRight className="w-4 h-4" />
                      </motion.div>
                    )}
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>

        {/* View all projects button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.28, 0, 0.63, 1] }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-full font-normal text-base border border-[#d2d2d7] hover:border-[#0071e3] text-[#1d1d1f] transition-all duration-200"
            style={{ 
              fontFamily: '-apple-system, BlinkMacSystemFont, SF Pro Text, sans-serif',
              letterSpacing: '-0.003em',
              fontWeight: 400
            }}
          >
            View All Projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsApple;
