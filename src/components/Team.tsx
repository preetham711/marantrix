import { motion } from 'framer-motion';

const Team = () => {
  const teamMembers = [
    {
      name: 'Sukumar',
      role: 'Co-Founder & CEO',
      image: '/images/colour 1.jpeg',
      bio: 'Visionary leader driving innovation and strategic growth.',
    },
    {
      name: 'Preetham',
      role: 'Co-Founder & CTO',
      image: '/images/colour 2.jpeg',
      bio: 'Technical architect building scalable digital solutions.',
    },
  ];

  return (
    <section
      id="team"
      className="py-12 sm:py-16 md:py-20 bg-[#f5f5f7]"
    >
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
            Meet the team
          </h2>
          <p 
            className="text-base sm:text-lg md:text-xl px-4 text-[#86868b]"
            style={{ 
              letterSpacing: '-0.003em',
              lineHeight: '1.47059',
              fontWeight: 400
            }}
          >
            The minds behind Marantrix
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.1,
                ease: [0.28, 0, 0.63, 1]
              }}
              whileHover={{ scale: 1.02 }}
              className="rounded-[18px] overflow-hidden bg-white border border-[#d2d2d7] transition-all duration-300"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className={`w-full h-full object-cover ${
                    index === 0 ? 'object-top' : 'object-center'
                  }`}
                  style={index === 0 ? { objectPosition: 'center 20%' } : {}}
                />
              </div>

              <div className="p-6">
                <h3
                  className="text-2xl mb-1 text-[#1d1d1f]"
                  style={{ 
                    letterSpacing: '-0.007em',
                    lineHeight: '1.1',
                    fontWeight: 600
                  }}
                >
                  {member.name}
                </h3>
                
                <p
                  className="text-base mb-3 text-[#86868b]"
                  style={{ 
                    letterSpacing: '-0.003em',
                    lineHeight: '1.47059',
                    fontWeight: 400
                  }}
                >
                  {member.role}
                </p>

                <p
                  className="text-sm text-[#86868b]"
                  style={{ 
                    letterSpacing: '-0.003em',
                    lineHeight: '1.47059',
                    fontWeight: 400
                  }}
                >
                  {member.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
