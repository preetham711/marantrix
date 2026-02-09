import React, { useState } from 'react';
import { ArrowRight, Menu, X, Sparkles, Play } from 'lucide-react';
import { useTheme } from 'next-themes';

interface NavLink {
  label: string;
  href: string;
  isActive?: boolean;
}

interface Partner {
  name: string;
  logoUrl: string;
  href: string;
}

interface ResponsiveHeroBannerProps {
  logoText?: string;
  backgroundImageUrl?: string;
  navLinks?: NavLink[];
  ctaButtonText?: string;
  ctaButtonHref?: string;
  badgeText?: string;
  badgeLabel?: string;
  title?: string;
  titleLine2?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
  partnersTitle?: string;
  partners?: Partner[];
}

const ResponsiveHeroBanner: React.FC<ResponsiveHeroBannerProps> = ({
  logoText = "Marantrix",
  backgroundImageUrl = "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80",
  navLinks = [
    { label: "Home", href: "#home", isActive: true },
    { label: "Services", href: "#services" },
    { label: "Work", href: "#work" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" }
  ],
  ctaButtonText = "Start Project",
  ctaButtonHref = "#contact",
  badgeLabel = "New",
  badgeText = "Premium Digital Solutions 2026",
  title = "We Create Digital",
  titleLine2 = "Experiences That Scale",
  description = "Transform your business with cutting-edge UI/UX design, mobile apps, and web development. We build digital products that users love and businesses need.",
  primaryButtonText = "Get Started",
  primaryButtonHref = "#contact",
  secondaryButtonText = "View Portfolio",
  secondaryButtonHref = "#work",
  partnersTitle = "Trusted by leading companies worldwide",
  partners = [
    { name: "Tech Corp", logoUrl: "https://via.placeholder.com/120x36/2563eb/ffffff?text=TechCorp", href: "#" },
    { name: "Innovation Labs", logoUrl: "https://via.placeholder.com/120x36/06b6d4/ffffff?text=InnoLabs", href: "#" },
    { name: "Digital Solutions", logoUrl: "https://via.placeholder.com/120x36/2563eb/ffffff?text=DigiSol", href: "#" },
    { name: "Future Systems", logoUrl: "https://via.placeholder.com/120x36/06b6d4/ffffff?text=FutureSys", href: "#" },
    { name: "Smart Tech", logoUrl: "https://via.placeholder.com/120x36/2563eb/ffffff?text=SmartTech", href: "#" }
  ]
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';

  const scrollToSection = (href: string) => {
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <section id="home" className="w-full isolate min-h-screen overflow-hidden relative">
      {/* Background Image */}
      <img
        src={backgroundImageUrl}
        alt=""
        className="w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0"
      />
      
      {/* Overlay */}
      <div className={`absolute inset-0 ${
        isDark 
          ? 'bg-gradient-to-b from-black/70 via-black/60 to-black/70'
          : 'bg-gradient-to-b from-black/50 via-black/40 to-black/50'
      }`} />
      
      <div className="pointer-events-none absolute inset-0 ring-1 ring-black/30" />

      {/* Header */}
      <header className="z-10 xl:top-4 relative">
        <div className="mx-6">
          <div className="flex items-center justify-between pt-4">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#home');
              }}
              className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
              style={{ 
                fontFamily: 'Postamp Grotesk, sans-serif',
                letterSpacing: '-0.02em',
                fontWeight: 800
              }}
            >
              {logoText}
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-2">
              <div className="flex items-center gap-1 rounded-full bg-white/5 px-1 py-1 ring-1 ring-white/10 backdrop-blur-xl">
                {navLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className={`px-3 py-2 text-sm font-medium hover:text-white transition-colors rounded-full ${
                      link.isActive ? 'text-white/90 bg-white/10' : 'text-white/80'
                    }`}
                    style={{ 
                      fontFamily: 'Postamp Grotesk, sans-serif',
                      letterSpacing: '-0.01em'
                    }}
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href={ctaButtonHref}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(ctaButtonHref);
                  }}
                  className="ml-1 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-3.5 py-2 text-sm font-medium text-white hover:from-blue-700 hover:to-cyan-600 transition-all duration-300"
                  style={{ 
                    fontFamily: 'Postamp Grotesk, sans-serif',
                    letterSpacing: '-0.01em',
                    fontWeight: 600
                  }}
                >
                  {ctaButtonText}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/15 backdrop-blur-xl hover:bg-white/20 transition-colors"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5 text-white/90" />
              ) : (
                <Menu className="h-5 w-5 text-white/90" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 rounded-2xl bg-white/10 backdrop-blur-xl ring-1 ring-white/15 p-4 animate-fade-in">
              <nav className="flex flex-col gap-2">
                {navLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className={`px-4 py-3 text-sm font-medium hover:text-white transition-colors rounded-xl ${
                      link.isActive ? 'text-white/90 bg-white/10' : 'text-white/80'
                    }`}
                    style={{ 
                      fontFamily: 'Postamp Grotesk, sans-serif',
                      letterSpacing: '-0.01em'
                    }}
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href={ctaButtonHref}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(ctaButtonHref);
                  }}
                  className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-3 text-sm font-medium text-white hover:from-blue-700 hover:to-cyan-600 transition-all duration-300"
                  style={{ 
                    fontFamily: 'Postamp Grotesk, sans-serif',
                    letterSpacing: '-0.01em',
                    fontWeight: 600
                  }}
                >
                  {ctaButtonText}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Content */}
      <div className="z-10 relative">
        <div className="sm:pt-28 md:pt-32 lg:pt-40 max-w-7xl mx-auto pt-28 px-6 pb-16">
          <div className="mx-auto max-w-4xl text-center">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-3 rounded-full bg-white/10 px-2.5 py-2 ring-1 ring-white/15 backdrop-blur-xl animate-fade-in">
              <span 
                className="inline-flex items-center text-xs font-medium text-white bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full py-0.5 px-2"
                style={{ 
                  fontFamily: 'Postamp Grotesk, sans-serif',
                  letterSpacing: '-0.01em',
                  fontWeight: 600
                }}
              >
                <Sparkles className="w-3 h-3 mr-1" />
                {badgeLabel}
              </span>
              <span 
                className="text-sm font-medium text-white/90"
                style={{ 
                  fontFamily: 'Postamp Grotesk, sans-serif',
                  letterSpacing: '-0.01em'
                }}
              >
                {badgeText}
              </span>
            </div>

            {/* Title */}
            <h1 
              className="sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight text-4xl text-white tracking-tight font-extrabold"
              style={{ 
                fontFamily: 'Postamp Grotesk, sans-serif',
                letterSpacing: '-0.045em',
                lineHeight: '1.05',
                fontWeight: 800
              }}
            >
              {title}
              <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                {titleLine2}
              </span>
            </h1>

            {/* Description */}
            <p 
              className="sm:text-lg md:text-xl text-base text-white/80 max-w-3xl mt-6 mx-auto"
              style={{ 
                fontFamily: 'Postamp Grotesk, sans-serif',
                letterSpacing: '-0.02em',
                fontWeight: 400,
                lineHeight: '1.5'
              }}
            >
              {description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row sm:gap-4 mt-10 gap-3 items-center justify-center">
              <a
                href={primaryButtonHref}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(primaryButtonHref);
                }}
                className="inline-flex items-center gap-2 hover:from-blue-700 hover:to-cyan-600 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full py-3 px-6 transition-all duration-300 shadow-lg hover:shadow-xl"
                style={{ 
                  fontFamily: 'Postamp Grotesk, sans-serif',
                  letterSpacing: '-0.01em',
                  fontWeight: 600
                }}
              >
                {primaryButtonText}
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={secondaryButtonHref}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(secondaryButtonHref);
                }}
                className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-xl ring-1 ring-white/15 px-6 py-3 text-sm font-medium text-white/90 hover:text-white hover:bg-white/20 transition-all duration-300"
                style={{ 
                  fontFamily: 'Postamp Grotesk, sans-serif',
                  letterSpacing: '-0.01em',
                  fontWeight: 500
                }}
              >
                <Play className="w-4 h-4" />
                {secondaryButtonText}
              </a>
            </div>
          </div>

          {/* Partners Section */}
          <div className="mx-auto mt-20 max-w-5xl">
            <p 
              className="text-sm text-white/70 text-center"
              style={{ 
                fontFamily: 'Postamp Grotesk, sans-serif',
                letterSpacing: '-0.01em'
              }}
            >
              {partnersTitle}
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 text-white/70 mt-6 items-center justify-items-center gap-6">
              {partners.map((partner, index) => (
                <a
                  key={index}
                  href={partner.href}
                  className="inline-flex items-center justify-center w-[120px] h-[36px] opacity-60 hover:opacity-100 transition-opacity"
                  title={partner.name}
                >
                  <img 
                    src={partner.logoUrl} 
                    alt={partner.name}
                    className="w-full h-full object-contain filter brightness-0 invert"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResponsiveHeroBanner;
