import { useEffect, useRef } from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { Reveal } from '@/components/animations/Reveal';
import { Magnetic } from '@/components/animations/Magnetic';
import AnimatedSectionWrapper from '@/components/AnimatedSectionWrapper';
import { Projects } from '@/components/Projects';

const ProjectsPage = () => {
  const navigate = useNavigate();
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Our Projects | Nexa Growth";
  }, []);

  // Trust tags for hero
  const trustTags = ['Case Studies', 'Web Projects', 'Growth Systems', 'Client Results', 'Portfolio'];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />

      {/* Hero Section */}
      <AnimatedSectionWrapper ref={heroRef} className="pt-32 sm:pt-40 md:pt-48 lg:pt-64 pb-16 sm:pb-20 md:pb-24 lg:pb-32 hero-antigravity">
        <div className="absolute inset-0 bg-grid-pattern animate-grid-move opacity-20" />
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[400px] sm:w-[600px] md:w-[800px] h-[400px] sm:h-[600px] md:h-[800px] bg-primary rounded-full blur-[100px] sm:blur-[130px] md:blur-[160px] animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-[300px] sm:w-[450px] md:w-[600px] h-[300px] sm:h-[450px] md:h-[600px] bg-accent rounded-full blur-[90px] sm:blur-[115px] md:blur-[140px] animate-pulse" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <Reveal direction="down">
              <div className="inline-flex items-center gap-2 sm:gap-3 px-3 py-1.5 sm:px-6 sm:py-3 bg-primary/10 rounded-full text-primary font-bold text-xs sm:text-sm mb-6 sm:mb-8 md:mb-12 border border-primary/20 backdrop-blur-md uppercase tracking-widest">
                Our Work
              </div>
            </Reveal>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-display font-black mb-4 sm:mb-6 md:mb-8 text-foreground tracking-tighter leading-[0.9] max-w-5xl mx-auto text-center">
              Real Projects. Real Results.
            </h1>
            <Reveal delay={0.4}>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-muted-foreground max-w-4xl mx-auto mb-6 sm:mb-8 leading-relaxed font-medium px-2">
                Explore our portfolio of high-performance websites, growth systems, and digital solutions built for modern businesses.
              </p>
            </Reveal>
            <Reveal delay={0.6}>
              <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 sm:mb-8 md:mb-12">
                {trustTags.map((tag) => (
                  <span key={tag} className="px-2 py-1 sm:px-4 sm:py-2 bg-primary/5 border border-primary/20 rounded-full text-primary text-xs sm:text-sm font-semibold">
                    {tag}
                  </span>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.8}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 md:gap-6">
                <Magnetic strength={0.25}>
                  <Button
                    size="lg"
                    className="rounded-full px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-6 lg:px-12 lg:py-8 text-sm sm:text-base md:text-lg lg:text-xl font-black shadow-glow bg-primary text-black uppercase tracking-widest italic"
                    onClick={() => navigate('/projects')}
                  >
                    View Projects
                  </Button>
                </Magnetic>
                <Magnetic strength={0.25}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-full px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-6 lg:px-12 lg:py-8 text-sm sm:text-base md:text-lg lg:text-xl font-black border-2 border-primary text-primary hover:bg-primary/10 uppercase tracking-widest italic"
                    onClick={() => navigate('/contact')}
                  >
                    Start Your Project
                  </Button>
                </Magnetic>
              </div>
            </Reveal>
          </div>
        </div>
      </AnimatedSectionWrapper>

      <Projects />
      <Footer />
    </div>
  );
};

export default ProjectsPage;
