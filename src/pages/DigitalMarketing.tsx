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
      <AnimatedSectionWrapper ref={heroRef} className="pt-64 pb-32 hero-antigravity">
        <div className="absolute inset-0 bg-grid-pattern animate-grid-move opacity-20" />
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[800px] h-[800px] bg-primary rounded-full blur-[160px] animate-float" />
          <div className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] bg-accent rounded-full blur-[140px] animate-pulse" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <Reveal direction="down">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-primary/10 rounded-full text-primary font-bold text-sm mb-12 border border-primary/20 backdrop-blur-md uppercase tracking-widest">
                Growth Marketing
              </div>
            </Reveal>
            <h1 ref={headlineRef} className="text-[clamp(2.2rem,5vw,4rem)] font-display font-extrabold mb-6 md:mb-8 text-foreground tracking-tight leading-tight max-w-5xl mx-auto text-center">
              <span className="block">Data-Driven</span>
              <span className="block">Marketing For</span>
              <span className="block">Results</span>
            </h1>
            <Reveal delay={0.4}>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-8 leading-relaxed font-medium">
                From SEO to paid ads, we build performance-driven marketing systems that increase traffic, engagement, and conversions.
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
                    onClick={() => navigate('/contact')}
                  >
                    Start Marketing
                  </Button>
                </Magnetic>
                <Magnetic strength={0.25}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-full px-12 py-8 text-xl font-black border-2 border-primary text-primary hover:bg-primary/10 uppercase tracking-widest italic"
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
      <section className="py-32 bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="text-center mb-24 max-w-4xl mx-auto">
            <Reveal direction="down">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-primary/10 rounded-full text-primary font-bold text-sm mb-8 border border-primary/20 backdrop-blur-md uppercase tracking-widest">
                Tactical Capability
              </div>
            </Reveal>
            <h2 className="text-5xl md:text-8xl font-display font-black mb-8 text-foreground tracking-tighter uppercase italic leading-none">
              The Marketing <span className="text-primary not-italic">Arsenal</span>
            </h2>
            <Reveal delay={0.2}>
              <p className="text-2xl text-muted-foreground font-medium italic font-serif max-w-3xl mx-auto">
                End-to-end performance marketing across every channel that matters in the modern digital era.
              </p>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
            {capabilities.map((item, index) => (
              <Reveal key={index} delay={index * 0.1} direction="up">
                <TiltCard className="h-full">
                  <div className="group h-full bg-card/40 backdrop-blur-xl p-12 rounded-[3.5rem] border border-border/50 hover:border-primary/40 transition-all duration-500 hover:shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[5rem] group-hover:bg-primary/10 transition-colors" />
                    <Magnetic strength={0.2}>
                      <div className="w-24 h-24 rounded-3xl bg-primary flex items-center justify-center mb-10 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500 shadow-glow">
                        <item.icon className="text-black" size={40} />
                      </div>
                    </Magnetic>
                    <h3 className="text-3xl font-black mb-6 text-foreground group-hover:text-primary transition-colors tracking-tight italic font-serif uppercase leading-none">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-xl font-medium">
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
      <section className="py-48 bg-zinc-950/80 backdrop-blur-md relative overflow-hidden">
        {/* Background Animation Element */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent shadow-[0_0_30px_rgba(var(--primary-rgb),0.3)]" />

        <div className="container mx-auto px-6">
          <div className="text-center mb-32 max-w-4xl mx-auto">
            <Reveal direction="down">
              <h2 className="text-7xl md:text-8xl lg:text-[12rem] font-display font-black mb-8 text-white tracking-tighter uppercase italic leading-none text-center">The Growth <span className="text-primary not-italic">Engine</span></h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-3xl text-white/60 font-medium italic font-serif leading-relaxed">
                A scientific approach to systemic digital expansion.
              </p>
            </Reveal>
          </div>

          <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {approachSteps.map((step, index) => (
              <Reveal key={index} delay={index * 0.15} direction="up">
                <div className="group bg-white/5 backdrop-blur-2xl p-12 rounded-[3.5rem] border border-white/10 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl relative h-full overflow-hidden">
                  <div className="text-[10rem] font-display font-black text-primary/5 absolute -top-10 -right-10 group-hover:text-primary/10 transition-all duration-700">
                    {step.number}
                  </div>
                  <div className="w-20 h-20 rounded-2xl bg-primary/20 flex items-center justify-center mb-12 group-hover:rotate-12 transition-transform shadow-glow">
                    <span className="text-4xl font-black text-primary italic leading-none">{step.number}</span>
                  </div>
                  <h3 className="text-3xl font-black mb-6 text-white tracking-tight leading-none italic uppercase">{step.title}</h3>
                  <p className="text-white/60 leading-relaxed text-xl font-medium">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Nexa Section */}
      <section className="py-32 bg-background/80 backdrop-blur-sm relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-24 max-w-4xl mx-auto">
            <Reveal direction="down">
              <h2 className="text-5xl md:text-8xl font-display font-black mb-8 text-foreground tracking-tighter uppercase italic leading-none">Partner For <span className="text-primary not-italic">Intensity</span></h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-2xl text-muted-foreground font-medium italic font-serif">
                Strategic alignment focused on total market authority.
              </p>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-7xl mx-auto mb-32">
            {valueBlocks.map((block, index) => (
              <Reveal key={index} delay={index * 0.1} direction="up">
                <TiltCard className="h-full">
                  <div className="flex flex-col items-center text-center p-12 h-full bg-card/40 backdrop-blur-xl rounded-[3.5rem] border border-border/50 hover:border-primary/40 transition-all duration-500 shadow-xl group relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-[3rem] group-hover:bg-primary/10 transition-colors" />
                    <div className="mb-12 p-8 rounded-full bg-primary/10 text-primary border border-primary/20 group-hover:scale-110 group-hover:bg-primary transition-all duration-500 group-hover:text-black shadow-glow">
                      <block.icon size={56} strokeWidth={1.5} />
                    </div>
                    <h3 className="text-3xl font-black mb-6 text-foreground tracking-tight italic uppercase leading-none font-serif">{block.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-xl font-medium">
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
                className="group rounded-full px-16 py-12 text-3xl font-black transition-all duration-500 shadow-glow bg-primary text-black italic uppercase tracking-widest"
                onClick={() => navigate('/projects#digital-marketing-projects')}
              >
                Witness The Growth
                <ArrowRight className="ml-6 w-10 h-10 group-hover:translate-x-5 transition-transform" />
              </Button>
            </Magnetic>
          </Reveal>
        </div>
      </section>

      {/* Final CTA */}
      <AnimatedSectionWrapper className="py-48 bg-zinc-950/80 backdrop-blur-md">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent shadow-glow" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <Reveal direction="down">
            <h2 className="text-7xl md:text-8xl lg:text-[12rem] font-display font-black mb-12 text-white tracking-tighter leading-none uppercase italic text-center">
              Ready To <br /><span className="text-primary not-italic">Disrupt?</span>
            </h2>
          </Reveal>
          <Reveal delay={0.25}>
            <p className="text-2xl md:text-4xl text-white/70 mb-20 max-w-5xl mx-auto leading-relaxed font-serif italic">
              Deploy our multidisciplinary growth engine to capture your market.
            </p>
          </Reveal>
          <Reveal delay={0.5}>
            <Magnetic strength={0.2}>
              <Button
                size="lg"
                className="rounded-full px-20 py-10 text-4xl font-black bg-primary text-black hover:bg-primary transition-all duration-500 shadow-glow italic uppercase tracking-tighter"
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
