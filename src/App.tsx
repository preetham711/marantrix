import HeroNeuralClean from '@/components/ui/hero-neural-clean';
import NavbarApple from './components/NavbarApple';
import ServicesApple from './components/ServicesApple';
import ProcessApple from './components/ProcessApple';
import ProjectsApple from './components/ProjectsApple';
import About from './components/About';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import CTAApple from './components/CTAApple';
import Contact from './components/Contact';
import FooterApple from './components/FooterApple';
import { ScrollProgress } from './components/ui/scroll-progress';

function App() {
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
  };

  return (
    <div className="min-h-screen bg-white">
      <NavbarApple />
      <ScrollProgress />
      
      {/* 1. HERO - Introduce what we do */}
      <HeroNeuralClean
        title="Building Digital Products"
        subtitle="That Drive Results"
        description="We design and develop modern websites, mobile apps, and digital platforms that help businesses grow. From concept to launch, we deliver quality solutions built for scale."
        badgeText="Digital Product Studio"
        badgeLabel="Trusted"
        ctaButtons={[
          { 
            text: "Get Free Consultation", 
            onClick: () => scrollToSection('contact'),
            primary: true 
          },
          { 
            text: "View Our Work", 
            onClick: () => scrollToSection('work')
          }
        ]}
      />
      
      {/* 2. SERVICES - Show what we offer */}
      <ServicesApple />
      
      {/* 3. PROCESS - Explain how we work */}
      <ProcessApple />
      
      {/* 4. PROJECTS - Show proof of work */}
      <ProjectsApple />
      
      {/* 5. ABOUT - Tell our story */}
      <About />
      
      {/* 6. TEAM - Show who we are */}
      <Team />
      
      {/* 7. TESTIMONIALS - Social proof */}
      <Testimonials />
      
      {/* 8. CTA - Convert visitors */}
      <CTAApple />
      
      {/* 9. CONTACT - Take action */}
      <Contact />
      
      {/* 10. FOOTER - Final info */}
      <FooterApple />
    </div>
  );
}

export default App;
