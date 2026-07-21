import { useEffect, useRef } from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { StickyFloatingCTA } from '@/components/StickyFloatingCTA';
import { ServiceSection } from '@/components/services/ServiceSection';
import { CTASection } from '@/components/services/CTASection';
import { servicesData } from '@/data/servicesData';
import { useNavigate } from 'react-router-dom';
import { Reveal } from '@/components/animations/Reveal';
import { Magnetic } from '@/components/animations/Magnetic';
import AnimatedSectionWrapper from '@/components/AnimatedSectionWrapper';

const ServicesOverview = () => {
  const navigate = useNavigate();
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Our Services | Nexa Growth";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Explore our comprehensive e-commerce, digital marketing, and technology solutions designed to scale your business growth.");
    }
  }, []);

  // Trust tags for hero
  const trustTags = ['Full-Service Agency', 'Growth Systems', 'Multi-Channel', 'Scalable Solutions', 'ROI Focused'];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />

      {/* Hero Section */}
      <AnimatedSectionWrapper ref={heroRef} className="pt-64 pb-32 hero-antigravity">
        <div className="absolute inset-0 bg-grid-pattern animate-grid-move opacity-20" />
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[800px] h-[800px] bg-primary rounded-full blur-[160px] animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-accent rounded-full blur-[140px] animate-pulse" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <Reveal direction="down">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-primary/10 rounded-full text-primary font-bold text-sm mb-12 border border-primary/20 backdrop-blur-md uppercase tracking-widest">
                Digital Services
              </div>
            </Reveal>
            <h1 className="text-[clamp(2.2rem,5vw,4rem)] font-display font-extrabold mb-6 md:mb-8 text-foreground tracking-tight leading-tight uppercase">
              Complete Digital Solutions Built for Growth
            </h1>
            <Reveal delay={0.4}>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-8 leading-relaxed font-medium">
                We provide end-to-end digital services including marketing, development, content creation, and business growth systems.
              </p>
            </Reveal>
            <Reveal delay={0.6}>
              <div className="flex flex-wrap justify-center gap-3 mb-12">
                {trustTags.map((tag) => (
                  <span key={tag} className="px-4 py-2 bg-primary/5 border border-primary/20 rounded-full text-primary text-sm font-semibold">
                    {tag}
                  </span>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.8}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Magnetic strength={0.25}>
                  <Button
                    size="lg"
                    className="rounded-full px-12 py-8 text-xl font-black shadow-glow bg-primary text-black uppercase tracking-widest italic"
                    onClick={() => navigate('/services')}
                  >
                    Explore Services
                  </Button>
                </Magnetic>
                <Magnetic strength={0.25}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-full px-12 py-8 text-xl font-black border-2 border-primary text-primary hover:bg-primary/10 uppercase tracking-widest italic"
                    onClick={() => navigate('/contact')}
                  >
                    Book Strategy Call
                  </Button>
                </Magnetic>
              </div>
            </Reveal>
          </div>
        </div>
      </AnimatedSectionWrapper>

      {/* Services Sections */}
      <div id="services" className="bg-background">
        {servicesData.map((service, index) => (
          <ServiceSection
            key={service.id}
            title={service.title}
            description={service.description}
            strategicDescription={service.strategicDescription}
            keyCapabilities={service.keyCapabilities}
            basicSkills={service.basicSkills}
            advancedSkills={service.advancedSkills}
            icon={service.icon}
            reverse={index % 2 !== 0}
            viewMoreLink={service.viewMoreLink}
          />
        ))}
      </div>

      {/* CTA Section */}
      <CTASection
        title="Let's Build Your Growth Engine"
        subtitle="From strategy to execution — we handle everything."
        primaryCTA={{ text: 'Book Free Strategy Call', link: '/contact' }}
        secondaryCTA={{ text: 'Get Free Growth Plan', link: '/contact' }}
      />

      <StickyFloatingCTA />
      <Footer />
    </div>
  );
};

export default ServicesOverview;
