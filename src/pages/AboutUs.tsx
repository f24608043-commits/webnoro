import { useEffect, useRef } from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { WhoWeServe } from '@/components/WhoWeServe';
import { Stats } from '@/components/Stats';
import { LogoLoop } from '@/components/ui/LogoLoop';
import { Target, Zap, Award, BarChart3, Globe, Rocket } from 'lucide-react';
import { Reveal } from '@/components/animations/Reveal';
import { TiltCard } from '@/components/animations/TiltCard';
import { Magnetic } from '@/components/animations/Magnetic';
import { gsap, useGSAP } from '@/lib/gsap';
import AnimatedSectionWrapper from '@/components/AnimatedSectionWrapper';
import { TeamMemberCard } from '@/components/TeamMember';
import { teamMembers } from '@/data/projectsData';

const AboutUs = () => {
  const heroRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const subheadlineRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => { 
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
      <Navigation />

      {/* Hero Section */}
      <AnimatedSectionWrapper ref={heroRef} className="pt-64 pb-32 hero-antigravity">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[800px] h-[800px] bg-primary rounded-full blur-[160px] animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-accent rounded-full blur-[140px] animate-pulse" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <Reveal direction="down">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-primary/10 rounded-full text-primary font-bold text-sm mb-12 border border-primary/20 backdrop-blur-md uppercase tracking-widest">
                The Nexa Origin
              </div>
            </Reveal>
            <h1 ref={headlineRef} className="text-6xl md:text-8xl lg:text-9xl font-display font-black mb-12 tracking-tighter leading-[0.9] uppercase italic text-center">
              OUR TEAM
            </h1>
            <Reveal delay={0.6}>
              <p className="text-2xl md:text-4xl text-muted-foreground mb-16 max-w-5xl mx-auto leading-relaxed font-medium italic font-serif">
                Nexa Growth is a high-performance digital engine specializing in e-commerce acceleration, tactical marketing, and technological enablement.
              </p>
            </Reveal>
          </div>
        </div>
      </AnimatedSectionWrapper>

      {/* Stats Quick Look */}
      <Stats />

      {/* Who We Are */}
      <section className="py-32 bg-background/80 backdrop-blur-sm relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-32 items-center">
            <Reveal direction="left">
              <div className="relative">
                <div className="absolute -inset-10 bg-primary/5 rounded-full blur-[100px]" />
                <h2 className="text-6xl md:text-8xl font-display font-black mb-10 tracking-tight leading-none italic uppercase">
                  OUR TEAM
                </h2>
                <p className="text-3xl text-muted-foreground font-medium leading-relaxed mb-8 italic font-serif">
                  A collective of e-commerce specialists, elite marketers, and software engineers dedicated to the art of scaling.
                </p>
              </div>
            </Reveal>
            <Reveal direction="right" delay={0.2}>
              <div className="space-y-10">
                <p className="text-2xl text-muted-foreground leading-relaxed font-medium">
                  We combine centuries of collective marketplace expertise with cutting-edge proprietary technology to deliver outcomes that aren't just incremental, but exponential.
                </p>
                <p className="text-2xl text-muted-foreground leading-relaxed font-medium">
                  Our mission is to dismantle the barriers to entry for high-scale growth and provide every brand we partner with a weaponized strategy for dominance.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-32 bg-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[800px] h-[800px] bg-primary rounded-full blur-[160px] animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-accent rounded-full blur-[140px] animate-pulse" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <Reveal direction="down">
              <h2 className="text-5xl md:text-7xl font-display font-black mb-6 tracking-tight italic uppercase">
                Meet The <span className="text-primary not-italic">Leadership</span>
              </h2>
              <p className="text-2xl text-muted-foreground font-medium max-w-3xl mx-auto italic font-serif">
                The visionaries driving Nexa Growth's mission to transform digital landscapes.
              </p>
            </Reveal>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {teamMembers.map((member, index) => (
              <TeamMemberCard key={member.id} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-32 bg-background/50 backdrop-blur-sm relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 max-w-7xl mx-auto">
            <Reveal direction="up" delay={0.1}>
              <TiltCard className="h-full">
                <div className="bg-card/40 backdrop-blur-xl rounded-[4rem] p-20 border border-border/50 hover:border-primary/50 transition-all duration-500 shadow-2xl relative overflow-hidden group h-full">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/20 transition-all duration-700" />
                  <Magnetic strength={0.2}>
                    <div className="w-24 h-24 rounded-3xl bg-primary flex items-center justify-center mb-12 shadow-glow group-hover:scale-110 group-hover:rotate-12 transition-all">
                      <Target className="text-black" size={40} />
                    </div>
                  </Magnetic>
                  <h3 className="text-5xl font-display font-black mb-8 italic uppercase tracking-tight">Our Vision</h3>
                  <p className="text-2xl text-muted-foreground mb-8 leading-relaxed font-medium">
                    To be the global benchmark for growth partnerships, engineering the expansion of brands across every digital frontier.
                  </p>
                  <div className="h-1 w-20 bg-primary/30 group-hover:w-full transition-all duration-700" />
                </div>
              </TiltCard>
            </Reveal>
            <Reveal direction="up" delay={0.3}>
              <TiltCard className="h-full">
                <div className="bg-card/40 backdrop-blur-xl rounded-[4rem] p-20 border border-border/50 hover:border-primary/50 transition-all duration-500 shadow-2xl relative overflow-hidden group h-full">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-accent/5 rounded-full blur-3xl group-hover:bg-accent/20 transition-all duration-700" />
                  <Magnetic strength={0.2}>
                    <div className="w-24 h-24 rounded-3xl bg-primary flex items-center justify-center mb-12 shadow-glow group-hover:scale-110 group-hover:-rotate-12 transition-all">
                      <Zap className="text-black" size={40} />
                    </div>
                  </Magnetic>
                  <h3 className="text-5xl font-display font-black mb-8 italic uppercase tracking-tight">Our Mission</h3>
                  <p className="text-2xl text-muted-foreground mb-8 leading-relaxed font-medium">
                    To deliver surgical, data-driven strategies that amplify potential and convert ambition into market authority.
                  </p>
                  <div className="h-1 w-20 bg-primary/30 group-hover:w-full transition-all duration-700" />
                </div>
              </TiltCard>
            </Reveal>
          </div>
        </div>
      </section>

      <WhoWeServe />

      {/* The Edge */}
      <AnimatedSectionWrapper className="py-48 bg-zinc-950/80 backdrop-blur-md">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920&h=1080&fit=crop" alt="Background" className="w-full h-full object-cover grayscale" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950 to-zinc-950" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-32">
              <Reveal direction="down">
                <h2 className="text-7xl md:text-8xl lg:text-[12rem] font-display font-black mb-10 text-white tracking-tighter leading-none italic uppercase text-center">The Nexa <span className="text-primary not-italic">Edge</span></h2>
              </Reveal>
              <Reveal delay={0.25}>
                <p className="text-3xl text-white/60 max-w-4xl mx-auto font-medium italic font-serif leading-relaxed">Everything we do is engineered for maximum displacement and structural growth.</p>
              </Reveal>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
              {reasons.map((reason, index) => (
                <Reveal key={index} delay={index * 0.1} direction="up">
                  <TiltCard>
                    <div className="bg-white/5 backdrop-blur-2xl rounded-[3rem] p-16 border border-white/10 hover:border-primary/50 transition-all duration-500 group h-full relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-[3rem] group-hover:bg-primary/10 transition-colors" />
                      <div className="w-24 h-24 rounded-3xl bg-primary/20 flex items-center justify-center mb-12 group-hover:scale-110 transition-transform duration-500 group-hover:rotate-12 shadow-glow">
                        <reason.icon className="w-12 h-12 text-primary" />
                      </div>
                      <p className="text-3xl text-white font-black leading-tight tracking-tight italic uppercase">{reason.text}</p>
                    </div>
                  </TiltCard>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSectionWrapper>

      <Footer />
    </div>
  );
};

export default AboutUs;
