import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight } from 'lucide-react';

const ProjectsApple = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A modern, scalable e-commerce solution with real-time inventory management and seamless checkout experience.",
      category: "Web & Mobile",
      gradient: "from-purple-600 to-pink-600",
    },
    {
      title: "Healthcare App",
      description: "HIPAA-compliant telemedicine platform connecting patients with healthcare providers instantly.",
      category: "Mobile App",
      gradient: "from-blue-600 to-cyan-600",
    },
    {
      title: "Financial Dashboard",
      description: "Real-time analytics dashboard for financial institutions with advanced data visualization.",
      category: "Web App",
      gradient: "from-emerald-600 to-teal-600",
    },
    {
      title: "Social Media Platform",
      description: "Next-generation social networking platform with AI-powered content recommendations.",
      category: "Web & Mobile",
      gradient: "from-orange-600 to-red-600",
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
              whileHover={{ scale: 1.02 }}
              className="group relative"
            >
              <div 
                className="relative h-full rounded-[18px] overflow-hidden border bg-white border-[#d2d2d7] hover:border-[#0071e3] transition-all duration-200"
                style={{
                  boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                }}
              >
                {/* Image container */}
                <div className="relative h-48 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileHover={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.2 }}
                      className="bg-white/20 backdrop-blur-sm rounded-full p-4"
                    >
                      <ExternalLink className="w-6 h-6 text-white" />
                    </motion.div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Category badge */}
                  <div className="mb-3">
                    <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-normal bg-[#0071e3]/10 text-[#0071e3]">
                      {project.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 
                    className="text-xl font-semibold mb-2 text-[#1d1d1f]"
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
                    className="text-base leading-relaxed mb-4 text-[#86868b]"
                    style={{ 
                      fontFamily: '-apple-system, BlinkMacSystemFont, SF Pro Text, sans-serif',
                      letterSpacing: '-0.003em',
                      fontWeight: 400,
                      lineHeight: '1.47059'
                    }}
                  >
                    {project.description}
                  </p>

                  {/* View project link */}
                  <motion.div
                    className="flex items-center gap-2 text-[#0071e3] font-normal text-base group-hover:gap-3 transition-all duration-200"
                    whileHover={{ x: 4 }}
                  >
                    <span>View Project</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.div>
                </div>
              </div>
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
