import { useEffect, useRef } from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import {
  ArrowRight,
  Search,
  Zap,
  Users,
  FileText,
  Layout,
  BarChart,
  Activity,
  TrendingUp,
  Target,
  ShieldCheck
} from 'lucide-react';
import { Reveal } from '@/components/animations/Reveal';
import { TiltCard } from '@/components/animations/TiltCard';
import { Magnetic } from '@/components/animations/Magnetic';
import { gsap, useGSAP } from '@/lib/gsap';
import AnimatedSectionWrapper from '@/components/AnimatedSectionWrapper';

const DigitalMarketing = () => {
  const navigate = useNavigate();
  const heroRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  useGSAP(() => {
    if (headlineRef.current) {
      const lines = headlineRef.current.querySelectorAll('span.block');
      lines.forEach((line) => {
        const text = (line as HTMLElement).innerText;
        (line as HTMLElement).innerHTML = text.split('').map(char =>
          `<span class="char-dm-hero inline-block">${char === ' ' ? '&nbsp;' : char}</span>`
        ).join('');
      });

      gsap.from(".char-dm-hero", {
        y: 100,
        opacity: 0,
        stagger: 0.02,
        duration: 1.2,
        ease: "power4.out",
        delay: 0.2
      });
    }
  }, { scope: heroRef });

  const capabilities = [
    { title: 'Search Engine Optimization (SEO)', description: 'Drive sustainable organic traffic through technical audits, keyword strategy, and authoritative link building.', icon: Search },
    { title: 'Paid Advertising', description: 'ROI-focused campaigns across search, social, and display with precision targeting and conversion optimization.', icon: Zap },
    { title: 'Social Media Strategy', description: 'Community building, content calendars, and platform-specific strategies that convert engagement into revenue.', icon: Users },
    { title: 'Content Marketing', description: 'Editorial strategy, landing page copy, and narratives that position your brand as the market authority.', icon: FileText },
    { title: 'Conversion Rate Optimization', description: 'Funnel analysis and UX improvements that turn traffic into high-value customers.', icon: Layout },
    { title: 'Analytics & Attribution', description: 'Full-funnel attribution, custom dashboards, and monthly reporting with actionable recommendations.', icon: BarChart },
  ];

  const approachSteps = [
    { number: '1', title: 'Intelligence Gathering', description: 'Deep-dive into your audience, competitors, and market opportunities.' },
    { number: '2', title: 'Strategic Architecture', description: 'Data-backed channel mix and campaign roadmaps aligned to your goals.' },
    { number: '3', title: 'Tactical Execution', description: 'Hands-on setup, creative production, and high-impact campaign launch.' },
    { number: '4', title: 'Geometric Scaling', description: 'Ongoing optimization, recursive testing, and scaling what performs best.' }
  ];

  const valueBlocks = [
    { title: 'Data-First Decisions', description: 'Every tactic is backed by analytics and measurable KPIs.', icon: Activity },
    { title: 'ROI-Focused Execution', description: 'We optimize for revenue outcomes, not vanity metrics.', icon: TrendingUp },
    { title: 'Cross-Platform Mastery', description: 'Unified strategies across search, social, and paid media.', icon: Target },
    { title: 'Radical Transparency', description: 'Clear dashboards, monthly reviews, and performance visibility.', icon: ShieldCheck }
  ];

  // Trust tags for hero
  const trustTags = ['SEO Optimization', 'Paid Ads', 'Social Media Growth', 'Lead Generation', 'Performance Marketing'];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />

      {/* Hero Section */}
      <AnimatedSectionWrapper ref={heroRef} className="pt-24 sm:pt-32 md:pt-40 lg:pt-48 xl:pt-64 pb-16 sm:pb-20 md:pb-24 lg:pb-28 xl:pb-32 hero-antigravity">
        <div className="absolute inset-0 bg-grid-pattern animate-grid-move opacity-20" />
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[300px] sm:w-[400px] md:w-[500px] lg:w-[600px] xl:w-[800px] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[800px] bg-primary rounded-full blur-[100px] sm:blur-[120px] md:blur-[140px] lg:blur-[150px] xl:blur-[160px] animate-float" />
          <div className="absolute bottom-1/4 left-1/4 w-[250px] sm:w-[350px] md:w-[450px] lg:w-[500px] xl:w-[600px] h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px] xl:h-[600px] bg-accent rounded-full blur-[90px] sm:blur-[105px] md:blur-[120px] lg:blur-[130px] xl:blur-[140px] animate-pulse" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <Reveal direction="down">
              <div className="inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-3 bg-primary/10 rounded-full text-primary font-bold text-[10px] sm:text-xs md:text-sm mb-6 sm:mb-8 md:mb-10 lg:mb-12 border border-primary/20 backdrop-blur-md uppercase tracking-widest">
                Growth Marketing
              </div>
            </Reveal>
            <h1 ref={headlineRef} className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-[clamp(2.2rem,5vw,4rem)] font-display font-extrabold mb-4 sm:mb-6 md:mb-8 text-foreground tracking-tight leading-tight max-w-5xl mx-auto text-center">
              <span className="block">Data-Driven</span>
              <span className="block">Marketing For</span>
              <span className="block">Results</span>
            </h1>
            <Reveal delay={0.4}>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-muted-foreground max-w-4xl mx-auto mb-6 sm:mb-8 leading-relaxed font-medium px-2">
                From SEO to paid ads, we build performance-driven marketing systems that increase traffic, engagement, and conversions.
              </p>
            </Reveal>
            <Reveal delay={0.6}>
              <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 sm:mb-8 md:mb-10 lg:mb-12">
                {trustTags.map((tag) => (
                  <span key={tag} className="px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 bg-primary/5 border border-primary/20 rounded-full text-primary text-[10px] sm:text-xs md:text-sm font-semibold">
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
                    className="rounded-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-2 sm:py-3 md:py-4 lg:py-5 xl:py-6 lg:py-8 text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl font-black shadow-glow bg-primary text-black uppercase tracking-widest italic"
                    onClick={() => navigate('/contact')}
                  >
                    Start Marketing
                  </Button>
                </Magnetic>
                <Magnetic strength={0.25}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-2 sm:py-3 md:py-4 lg:py-5 xl:py-6 lg:py-8 text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl font-black border-2 border-primary text-primary hover:bg-primary/10 uppercase tracking-widest italic"
                    onClick={() => navigate('/projects#digital-marketing-projects')}
                  >
                    View Strategies
                  </Button>
                </Magnetic>
              </div>
            </Reveal>
          </div>
        </div>
      </AnimatedSectionWrapper>

      {/* Capabilities Section */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24 max-w-4xl mx-auto">
            <Reveal direction="down">
              <div className="inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-3 bg-primary/10 rounded-full text-primary font-bold text-[10px] sm:text-xs md:text-sm mb-6 sm:mb-8 md:mb-10 border border-primary/20 backdrop-blur-md uppercase tracking-widest">
                Tactical Capability
              </div>
            </Reveal>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-8xl font-display font-black mb-4 sm:mb-6 md:mb-8 text-foreground tracking-tighter uppercase italic leading-none">
              The Marketing <span className="text-primary not-italic">Arsenal</span>
            </h2>
            <Reveal delay={0.2}>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-muted-foreground font-medium italic font-serif max-w-3xl mx-auto px-2">
                End-to-end performance marketing across every channel that matters in the modern digital era.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-10 max-w-7xl mx-auto">
            {capabilities.map((item, index) => (
              <Reveal key={index} delay={index * 0.1} direction="up">
                <TiltCard className="h-full">
                  <div className="group h-full bg-card/40 backdrop-blur-xl p-3 sm:p-4 md:p-6 lg:p-8 xl:p-12 rounded-[1rem] sm:rounded-[1.5rem] md:rounded-2rem lg:rounded-[2.5rem] xl:rounded-[3.5rem] border border-border/50 hover:border-primary/40 transition-all duration-500 hover:shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-32 xl:h-32 bg-primary/5 rounded-bl-[1rem] sm:rounded-bl-[1.5rem] md:rounded-bl-2rem lg:rounded-bl-[2.5rem] xl:rounded-bl-[5rem] group-hover:bg-primary/10 transition-colors" />
                    <Magnetic strength={0.2}>
                      <div className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 rounded-xl sm:rounded-2xl md:rounded-2xl lg:rounded-3xl xl:rounded-3xl bg-primary flex items-center justify-center mb-3 sm:mb-4 md:mb-6 lg:mb-8 xl:mb-10 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500 shadow-glow">
                        <item.icon className="text-black w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:size={40}" />
                      </div>
                    </Magnetic>
                    <h3 className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl md:text-2xl font-black mb-2 sm:mb-3 md:mb-4 lg:mb-6 text-foreground group-hover:text-primary transition-colors tracking-tight italic font-serif uppercase leading-none">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-[9px] sm:text-[10px] md:text-xs lg:text-sm xl:text-base md:text-lg font-medium">
                      {item.description}
                    </p>
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 md:py-48 bg-zinc-950/80 backdrop-blur-md relative overflow-hidden">
        {/* Background Animation Element */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent shadow-[0_0_30px_rgba(var(--primary-rgb),0.3)]" />

        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24 xl:mb-32 max-w-4xl mx-auto">
            <Reveal direction="down">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl md:text-8xl lg:text-[12rem] font-display font-black mb-4 sm:mb-6 md:mb-8 text-white tracking-tighter uppercase italic leading-none text-center">The Growth <span className="text-primary not-italic">Engine</span></h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl md:text-3xl text-white/60 font-medium italic font-serif leading-relaxed px-2">
                A scientific approach to systemic digital expansion.
              </p>
            </Reveal>
          </div>

          <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4 lg:gap-6 xl:gap-12">
            {approachSteps.map((step, index) => (
              <Reveal key={index} delay={index * 0.15} direction="up">
                <div className="group bg-white/5 backdrop-blur-2xl p-2 sm:p-3 md:p-4 lg:p-6 xl:p-12 rounded-[0.75rem] sm:rounded-xl md:rounded-2xl lg:rounded-3xl xl:rounded-[3.5rem] border border-white/10 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl relative h-full overflow-hidden">
                  <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[10rem] font-display font-black text-primary/5 absolute -top-2 sm:-top-3 md:-top-4 lg:-top-5 xl:-top-10 -right-2 sm:-right-3 md:-right-4 lg:-right-5 xl:-right-10 group-hover:text-primary/10 transition-all duration-700">
                    {step.number}
                  </div>
                  <div className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-20 xl:h-20 rounded-lg sm:rounded-xl md:rounded-2xl bg-primary/20 flex items-center justify-center mb-2 sm:mb-3 md:mb-4 lg:mb-6 xl:mb-12 group-hover:rotate-12 transition-transform shadow-glow">
                    <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-black text-primary italic leading-none">{step.number}</span>
                  </div>
                  <h3 className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl md:text-2xl font-black mb-1 sm:mb-2 md:mb-3 lg:mb-6 text-white tracking-tight leading-none italic uppercase">{step.title}</h3>
                  <p className="text-white/60 leading-relaxed text-[9px] sm:text-[10px] md:text-xs lg:text-sm xl:text-base md:text-lg font-medium">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Nexa Section */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 bg-background/80 backdrop-blur-sm relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24 xl:mb-32 max-w-4xl mx-auto">
            <Reveal direction="down">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-8xl font-display font-black mb-4 sm:mb-6 md:mb-8 text-foreground tracking-tighter uppercase italic leading-none">Partner For <span className="text-primary not-italic">Intensity</span></h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-muted-foreground font-medium italic font-serif px-2">
                Strategic alignment focused on total market authority.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-12 max-w-7xl mx-auto mb-12 sm:mb-16 md:mb-20 lg:mb-24 xl:mb-32">
            {valueBlocks.map((block, index) => (
              <Reveal key={index} delay={index * 0.1} direction="up">
                <TiltCard className="h-full">
                  <div className="flex flex-col items-center text-center p-2 sm:p-3 md:p-4 lg:p-6 xl:p-12 h-full bg-card/40 backdrop-blur-xl rounded-[1rem] sm:rounded-[1.5rem] md:rounded-2xl lg:rounded-3xl xl:rounded-[3.5rem] border border-border/50 hover:border-primary/40 transition-all duration-500 shadow-xl group relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 bg-primary/5 rounded-bl-[1rem] sm:rounded-bl-[1.5rem] md:rounded-bl-2xl lg:rounded-bl-3xl xl:rounded-bl-[3rem] group-hover:bg-primary/10 transition-colors" />
                    <div className="mb-2 sm:mb-3 md:mb-4 lg:mb-6 xl:mb-12 p-2 sm:p-3 md:p-4 lg:p-6 xl:p-8 rounded-full bg-primary/10 text-primary border border-primary/20 group-hover:scale-110 group-hover:bg-primary transition-all duration-500 group-hover:text-black shadow-glow">
                      <block.icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:size={56}" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl md:text-2xl font-black mb-1 sm:mb-2 md:mb-3 lg:mb-6 text-foreground tracking-tight italic uppercase leading-none font-serif">{block.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-[9px] sm:text-[10px] md:text-xs lg:text-sm xl:text-base md:text-lg font-medium">
                      {block.description}
                    </p>
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>

          <Reveal className="flex justify-center" direction="up">
            <Magnetic strength={0.3}>
              <Button
                size="lg"
                className="group rounded-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-16 py-2 sm:py-3 md:py-4 lg:py-5 xl:py-12 text-sm sm:text-base md:text-lg lg:text-xl xl:text-3xl font-black transition-all duration-500 shadow-glow bg-primary text-black italic uppercase tracking-widest"
                onClick={() => navigate('/projects#digital-marketing-projects')}
              >
                Witness The Growth
                <ArrowRight className="ml-2 sm:ml-3 md:ml-4 lg:ml-5 xl:ml-6 w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 xl:w-10 xl:h-10 group-hover:translate-x-2 sm:group-hover:translate-x-3 md:group-hover:translate-x-4 lg:group-hover:translate-x-5 transition-transform" />
              </Button>
            </Magnetic>
          </Reveal>
        </div>
      </section>

      {/* Final CTA */}
      <AnimatedSectionWrapper className="py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 md:py-48 bg-zinc-950/80 backdrop-blur-md">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent shadow-glow" />
        <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
          <Reveal direction="down">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl md:text-8xl lg:text-[12rem] font-display font-black mb-4 sm:mb-6 md:mb-8 lg:mb-10 xl:mb-12 text-white tracking-tighter leading-none uppercase italic text-center">
              Ready To <br /><span className="text-primary not-italic">Disrupt?</span>
            </h2>
          </Reveal>
          <Reveal delay={0.25}>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl md:text-4xl text-white/70 mb-8 sm:mb-12 md:mb-14 lg:mb-16 xl:mb-20 max-w-5xl mx-auto leading-relaxed font-serif italic px-2">
              Deploy our multidisciplinary growth engine to capture your market.
            </p>
          </Reveal>
          <Reveal delay={0.5}>
            <Magnetic strength={0.2}>
              <Button
                size="lg"
                className="rounded-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-20 py-2 sm:py-3 md:py-4 lg:py-5 xl:py-10 text-sm sm:text-base md:text-lg lg:text-xl xl:text-4xl font-black bg-primary text-black hover:bg-primary transition-all duration-500 shadow-glow italic uppercase tracking-tighter"
                onClick={() => navigate('/contact')}
              >
                Launch Campaign
              </Button>
            </Magnetic>
          </Reveal>
        </div>
      </AnimatedSectionWrapper>

      <Footer />
    </div>
  );
};

export default DigitalMarketing;
