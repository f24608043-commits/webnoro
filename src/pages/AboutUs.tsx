import { useEffect, useRef } from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { WhoWeServe } from '@/components/WhoWeServe';
import { Stats } from '@/components/Stats';
import { LogoLoop } from '@/components/ui/LogoLoop';
import { Target, Zap, Award, BarChart3, Globe, Rocket, CheckCircle, TrendingUp, Users, Clock, Shield } from 'lucide-react';
import { Reveal } from '@/components/animations/Reveal';
import { TiltCard } from '@/components/animations/TiltCard';
import { Magnetic } from '@/components/animations/Magnetic';
import { gsap, useGSAP } from '@/lib/gsap';
import AnimatedSectionWrapper from '@/components/AnimatedSectionWrapper';
import { Breadcrumb } from '@/components/Breadcrumb';
import { ContactCTA } from '@/components/CTA';
import { InternationalSEO } from '@/components/InternationalSEO';
import { AboutTeam } from '@/components/AboutTeam';

const AboutUs = () => {
  const heroRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const subheadlineRef = useRef<HTMLDivElement>(null);

  const breadcrumbItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' }
  ];

  useEffect(() => { 
    window.scrollTo(0, 0); 
    // SEO: Update page title
    document.title = "About Us | Nexa Growth";
    // SEO: Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Meet the Nexa Growth team. We are a high-performance digital agency specializing in e-commerce acceleration, marketing, and technology solutions.");
    }
  }, []);

  useGSAP(() => {
    if (headlineRef.current) {
      const text = headlineRef.current.innerText;
      headlineRef.current.innerHTML = text.split('').map(char =>
        `<span class="char-about-hero inline-block">${char === ' ' ? '&nbsp;' : char}</span>`
      ).join('');

      gsap.from(".char-about-hero", {
        y: 100,
        opacity: 0,
        stagger: 0.02,
        duration: 1.2,
        ease: "power4.out",
        delay: 0.2
      });
    }
  }, { scope: heroRef });

  const reasons = [
    { text: 'Performance-driven strategies that deliver ROI', icon: BarChart3 },
    { text: 'Data-backed decisions, not guesswork', icon: Target },
    { text: 'Full-service execution from strategy to scale', icon: Rocket },
    { text: 'Dedicated growth teams for every client', icon: Zap },
    { text: 'Transparent reporting and communication', icon: Award },
    { text: 'Global marketplace expertise and scale', icon: Globe }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <InternationalSEO canonicalUrl="https://nexagrowth.com/about" />
      <Navigation />

      {/* Breadcrumb */}
      <div className="pt-20 container mx-auto px-4 sm:px-6">
        <Breadcrumb items={breadcrumbItems} />
      </div>

      {/* Hero Section */}
      <AnimatedSectionWrapper ref={heroRef} className="pt-8 sm:pt-12 md:pt-16 lg:pt-20 xl:pt-24 pb-16 sm:pb-20 md:pb-24 lg:pb-28 xl:pb-32 hero-antigravity">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[300px] sm:w-[500px] md:w-[600px] lg:w-[800px] h-[300px] sm:h-[500px] md:h-[600px] lg:h-[800px] bg-primary rounded-full blur-[100px] sm:blur-[130px] md:blur-[145px] lg:blur-[160px] animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-[250px] sm:w-[400px] md:w-[500px] lg:w-[600px] h-[250px] sm:h-[400px] md:h-[500px] lg:h-[600px] bg-accent rounded-full blur-[90px] sm:blur-[115px] md:blur-[130px] lg:blur-[140px] animate-pulse" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <Reveal direction="down">
              <div className="inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-3 bg-primary/10 rounded-full text-primary font-bold text-[10px] sm:text-xs md:text-sm mb-6 sm:mb-8 md:mb-10 lg:mb-12 border border-primary/20 backdrop-blur-md uppercase tracking-widest">
                The Nexa Origin
              </div>
            </Reveal>
            <h1 ref={headlineRef} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl lg:text-9xl font-display font-black mb-6 sm:mb-8 md:mb-10 lg:mb-12 tracking-tighter leading-[0.9] uppercase italic text-center">
              OUR TEAM
            </h1>
            <Reveal delay={0.6}>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl md:text-4xl text-muted-foreground mb-8 sm:mb-12 md:mb-14 lg:mb-16 max-w-5xl mx-auto leading-relaxed font-medium italic font-serif px-2">
                Nexa Growth is a high-performance digital engine specializing in e-commerce acceleration, tactical marketing, and technological enablement.
              </p>
            </Reveal>
          </div>
        </div>
      </AnimatedSectionWrapper>

      {/* Stats Quick Look */}
      <Stats />

      <AboutTeam />

      {/* Who We Are */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 bg-background/80 backdrop-blur-sm relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-24 xl:gap-32 items-center">
            <Reveal direction="left">
              <div className="relative">
                <div className="absolute -inset-4 sm:-inset-6 md:-inset-8 lg:-inset-10 bg-primary/5 rounded-full blur-[60px] sm:blur-[80px] md:blur-[90px] lg:blur-[100px]" />
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl md:text-8xl font-display font-black mb-6 sm:mb-8 md:mb-10 tracking-tight leading-none italic uppercase">
                  OUR TEAM
                </h2>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-muted-foreground font-medium leading-relaxed mb-4 sm:mb-6 md:mb-8 italic font-serif">
                  A collective of e-commerce specialists, elite marketers, and software engineers dedicated to the art of scaling.
                </p>
              </div>
            </Reveal>
            <Reveal direction="right" delay={0.2}>
              <div className="space-y-6 sm:space-y-8 md:space-y-10">
                <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-muted-foreground leading-relaxed font-medium">
                  We combine centuries of collective marketplace expertise with cutting-edge proprietary technology to deliver outcomes that aren't just incremental, but exponential.
                </p>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-muted-foreground leading-relaxed font-medium">
                  Our mission is to dismantle the barriers to entry for high-scale growth and provide every brand we partner with a weaponized strategy for dominance.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 bg-background/50 backdrop-blur-sm relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-16 max-w-7xl mx-auto">
            <Reveal direction="up" delay={0.1}>
              <TiltCard className="h-full">
                <div className="bg-card/40 backdrop-blur-xl rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[3rem] lg:rounded-[4rem] p-6 sm:p-8 md:p-12 lg:p-16 xl:p-20 border border-border/50 hover:border-primary/50 transition-all duration-500 shadow-2xl relative overflow-hidden group h-full">
                  <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 bg-primary/5 rounded-full blur-2xl sm:blur-3xl group-hover:bg-primary/20 transition-all duration-700" />
                  <Magnetic strength={0.2}>
                    <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-2xl sm:rounded-2xl md:rounded-3xl bg-primary flex items-center justify-center mb-6 sm:mb-8 md:mb-10 lg:mb-12 shadow-glow group-hover:scale-110 group-hover:rotate-12 transition-all">
                      <Target className="text-black w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:size={40}" />
                    </div>
                  </Magnetic>
                  <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-display font-black mb-4 sm:mb-6 md:mb-8 italic uppercase tracking-tight">Our Vision</h3>
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-muted-foreground mb-4 sm:mb-6 md:mb-8 leading-relaxed font-medium">
                    To be the global benchmark for growth partnerships, engineering the expansion of brands across every digital frontier.
                  </p>
                  <div className="h-0.5 sm:h-1 w-12 sm:w-16 md:w-20 bg-primary/30 group-hover:w-full transition-all duration-700" />
                </div>
              </TiltCard>
            </Reveal>
            <Reveal direction="up" delay={0.3}>
              <TiltCard className="h-full">
                <div className="bg-card/40 backdrop-blur-xl rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[3rem] lg:rounded-[4rem] p-6 sm:p-8 md:p-12 lg:p-16 xl:p-20 border border-border/50 hover:border-primary/50 transition-all duration-500 shadow-2xl relative overflow-hidden group h-full">
                  <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 bg-accent/5 rounded-full blur-2xl sm:blur-3xl group-hover:bg-accent/20 transition-all duration-700" />
                  <Magnetic strength={0.2}>
                    <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-2xl sm:rounded-2xl md:rounded-3xl bg-primary flex items-center justify-center mb-6 sm:mb-8 md:mb-10 lg:mb-12 shadow-glow group-hover:scale-110 group-hover:-rotate-12 transition-all">
                      <Zap className="text-black w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:size={40}" />
                    </div>
                  </Magnetic>
                  <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-display font-black mb-4 sm:mb-6 md:mb-8 italic uppercase tracking-tight">Our Mission</h3>
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-muted-foreground mb-4 sm:mb-6 md:mb-8 leading-relaxed font-medium">
                    To deliver surgical, data-driven strategies that amplify potential and convert ambition into market authority.
                  </p>
                  <div className="h-0.5 sm:h-1 w-12 sm:w-16 md:w-20 bg-primary/30 group-hover:w-full transition-all duration-700" />
                </div>
              </TiltCard>
            </Reveal>
          </div>
        </div>
      </section>

      <WhoWeServe />

      {/* Our Process */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 bg-background/50 backdrop-blur-sm relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16 md:mb-18 lg:mb-20">
            <Reveal direction="down">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl md:text-7xl font-display font-black mb-4 sm:mb-6 tracking-tight italic uppercase">
                Our <span className="text-primary not-italic">Process</span>
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-muted-foreground font-medium max-w-3xl mx-auto italic font-serif px-2">
                A proven methodology for sustainable growth
              </p>
            </Reveal>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 max-w-7xl mx-auto">
            {[
              { icon: Target, title: 'Discovery', desc: 'Deep dive into your business, market, and goals' },
              { icon: TrendingUp, title: 'Strategy', desc: 'Data-driven roadmap with clear KPIs and milestones' },
              { icon: Zap, title: 'Execution', desc: 'Rapid implementation with continuous optimization' },
              { icon: CheckCircle, title: 'Scale', desc: 'Systematic expansion and performance maximization' }
            ].map((step, index) => (
              <Reveal key={index} delay={index * 0.1} direction="up">
                <TiltCard>
                  <div className="bg-card/40 backdrop-blur-xl rounded-2xl p-6 sm:p-8 border border-border/50 hover:border-primary/50 transition-all duration-500 group h-full">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-primary group-hover:scale-110 transition-all">
                      <step.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-black" />
                    </div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3">{step.title}</h3>
                    <p className="text-sm sm:text-base text-muted-foreground">{step.desc}</p>
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Awards */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 bg-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[300px] sm:w-[500px] md:w-[600px] lg:w-[800px] h-[300px] sm:h-[500px] md:h-[600px] lg:h-[800px] bg-primary rounded-full blur-[100px] sm:blur-[130px] md:blur-[145px] lg:blur-[160px] animate-float" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-12 sm:mb-16 md:mb-18 lg:mb-20">
            <Reveal direction="down">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl md:text-7xl font-display font-black mb-4 sm:mb-6 tracking-tight italic uppercase">
                Recognitions & <span className="text-primary not-italic">Certifications</span>
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-muted-foreground font-medium max-w-3xl mx-auto italic font-serif px-2">
                Industry recognition for excellence in digital growth
              </p>
            </Reveal>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 md:gap-8 max-w-7xl mx-auto">
            {[
              { icon: Award, title: 'Google Partner', desc: 'Certified Google Ads Partner' },
              { icon: Shield, title: 'Meta Certified', desc: 'Facebook & Instagram Advertising' },
              { icon: TrendingUp, title: 'Amazon SPN', desc: 'Amazon Service Provider Network' },
              { icon: Users, title: 'HubSpot Partner', desc: 'Inbound Marketing Certified' },
              { icon: Clock, title: '24/7 Support', desc: 'Round-the-clock client support' },
              { icon: Globe, title: 'Global Reach', desc: 'Serving clients worldwide' }
            ].map((cert, index) => (
              <Reveal key={index} delay={index * 0.1} direction="up">
                <div className="bg-card/40 backdrop-blur-xl rounded-xl p-4 sm:p-6 border border-border/50 hover:border-primary/50 transition-all duration-500 text-center group">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-primary group-hover:scale-110 transition-all">
                    <cert.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary group-hover:text-black" />
                  </div>
                  <h3 className="text-sm sm:text-base font-bold mb-1 sm:mb-2">{cert.title}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">{cert.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* The Edge */}
      <AnimatedSectionWrapper className="py-24 sm:py-32 md:py-40 lg:py-44 xl:py-48 bg-zinc-950/80 backdrop-blur-md">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920&h=1080&fit=crop" alt="Background" loading="lazy" className="w-full h-full object-cover grayscale" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950 to-zinc-950" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 sm:mb-20 md:mb-24 lg:mb-28 xl:mb-32">
              <Reveal direction="down">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl md:text-8xl lg:text-[12rem] font-display font-black mb-6 sm:mb-8 md:mb-10 text-white tracking-tighter leading-none italic uppercase text-center">The Nexa <span className="text-primary not-italic">Edge</span></h2>
              </Reveal>
              <Reveal delay={0.25}>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl md:text-3xl text-white/60 max-w-4xl mx-auto font-medium italic font-serif leading-relaxed px-2">Everything we do is engineered for maximum displacement and structural growth.</p>
              </Reveal>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
              {reasons.map((reason, index) => (
                <Reveal key={index} delay={index * 0.1} direction="up">
                  <TiltCard>
                    <div className="bg-white/5 backdrop-blur-2xl rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[2.5rem] lg:rounded-[3rem] p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16 border border-white/10 hover:border-primary/50 transition-all duration-500 group h-full relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-primary/5 rounded-bl-[1.5rem] sm:rounded-bl-[2rem] md:rounded-bl-[2.5rem] lg:rounded-bl-[3rem] group-hover:bg-primary/10 transition-colors" />
                      <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-2xl sm:rounded-2xl md:rounded-3xl bg-primary/20 flex items-center justify-center mb-6 sm:mb-8 md:mb-10 lg:mb-12 group-hover:scale-110 transition-transform duration-500 group-hover:rotate-12 shadow-glow">
                        <reason.icon className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-primary" />
                      </div>
                      <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl md:text-3xl text-white font-black leading-tight tracking-tight italic uppercase">{reason.text}</p>
                    </div>
                  </TiltCard>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSectionWrapper>

      <ContactCTA />

      <Footer />
    </div>
  );
};

export default AboutUs;
