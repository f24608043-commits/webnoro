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
                Our Work
              </div>
            </Reveal>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-black mb-8 text-foreground tracking-tighter leading-[0.9] max-w-5xl mx-auto text-center">
              Real Projects. Real Results.
            </h1>
            <Reveal delay={0.4}>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-8 leading-relaxed font-medium">
                Explore our portfolio of high-performance websites, growth systems, and digital solutions built for modern businesses.
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
                    onClick={() => navigate('/projects')}
                  >
                    View Projects
                  </Button>
                </Magnetic>
                <Magnetic strength={0.25}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-full px-12 py-8 text-xl font-black border-2 border-primary text-primary hover:bg-primary/10 uppercase tracking-widest italic"
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
