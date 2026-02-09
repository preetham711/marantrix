import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { useTheme } from 'next-themes';

const Projects = () => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';

  const projects = [
    {
      title: 'FinTech Dashboard',
      category: 'Web App',
      tags: ['UI/UX', 'Web Development', 'Dashboard'],
      description: 'Modern financial management platform with real-time analytics and data visualization.',
      gradient: 'from-blue-600 to-cyan-500',
    },
    {
      title: 'E-Commerce Mobile App',
      category: 'Mobile App',
      tags: ['Mobile App', 'UI/UX', 'E-Commerce'],
      description: 'Seamless shopping experience with intuitive navigation and secure payment integration.',
      gradient: 'from-violet-600 to-blue-500',
    },
    {
      title: 'SaaS Platform',
      category: 'Web App',
      tags: ['Web Development', 'SaaS', 'UI/UX'],
      description: 'Scalable business management tool with advanced automation and team collaboration features.',
      gradient: 'from-cyan-500 to-teal-500',
    },
    {
      title: 'Healthcare Portal',
      category: 'Web App',
      tags: ['Web Development', 'UI/UX', 'Healthcare'],
      description: 'Patient management system with appointment scheduling and telemedicine capabilities.',
      gradient: 'from-emerald-500 to-green-600',
    },
    {
      title: 'Travel Booking App',
      category: 'Mobile App',
      tags: ['Mobile App', 'UI/UX', 'Travel'],
      description: 'Complete travel solution with flight bookings, hotel reservations, and trip planning.',
      gradient: 'from-orange-500 to-red-500',
    },
    {
      title: 'Social Media Platform',
      category: 'Web & Mobile',
      tags: ['Web Development', 'Mobile App', 'Social'],
      description: 'Engaging social network with real-time messaging, content sharing, and community features.',
      gradient: 'from-pink-500 to-rose-600',
    },
  ];

  return (
    <section id="work" className={`py-8 xs:py-10 sm:py-12 md:py-16 lg:py-20 xl:py-24 ${
      isDark ? 'bg-slate-800' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6 xs:mb-8 sm:mb-10 md:mb-12 lg:mb-16 xl:mb-20"
        >
          <h2 className={`text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 xs:mb-3 sm:mb-4 md:mb-6 lg:mb-8 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Featured{' '}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className={`text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto px-2 sm:px-4 leading-relaxed ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Explore our portfolio of successful projects that have helped businesses transform their digital presence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 xs:gap-4 sm:gap-6 md:gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`group relative rounded-lg xs:rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer h-full flex flex-col ${
                isDark ? 'bg-slate-700' : 'bg-white'
              }`}
            >
              <div className={`h-32 xs:h-36 sm:h-40 md:h-48 lg:h-56 xl:h-64 bg-gradient-to-br ${project.gradient} relative overflow-hidden flex-shrink-0`}>
                <motion.div
                  className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1 }}
                      className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center"
                    >
                      <ExternalLink className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-gray-800" />
                    </motion.div>
                  </div>
                </motion.div>

                <div className="absolute top-2 left-2 xs:top-3 xs:left-3 sm:top-4 sm:left-4">
                  <span className="bg-white/90 backdrop-blur-sm px-2 py-1 xs:px-2.5 xs:py-1 sm:px-3 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium text-gray-800">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-3 xs:p-4 sm:p-6 md:p-8 lg:p-10 flex-grow flex flex-col">
                <h3 className={`text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-1 xs:mb-2 sm:mb-3 md:mb-4 group-hover:text-blue-600 transition-colors leading-tight ${
                  isDark ? 'text-white' : 'text-gray-800'
                }`}>
                  {project.title}
                </h3>
                <p className={`mb-2 xs:mb-3 sm:mb-4 md:mb-6 leading-relaxed text-xs xs:text-sm sm:text-base md:text-lg flex-grow ${
                  isDark ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1 xs:gap-1.5 sm:gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className={`px-1.5 xs:px-2 sm:px-3 py-0.5 xs:py-1 rounded-full text-xs sm:text-sm font-medium ${
                        isDark 
                          ? 'bg-slate-600 text-gray-200'
                          : 'bg-gray-100 text-gray-700'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
