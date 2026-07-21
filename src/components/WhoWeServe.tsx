import { useRef } from 'react';
import { Building2, ShoppingBag, Users, Rocket, Palette, Briefcase } from 'lucide-react';
import { Reveal } from './animations/Reveal';
import { TiltCard } from './animations/TiltCard';
import { Magnetic } from './animations/Magnetic';
import { gsap, useGSAP } from '@/lib/gsap';
import AnimatedSectionWrapper from './AnimatedSectionWrapper';

const clientTypes = [
  {
    icon: Building2,
    title: 'Nonprofits',
    description: 'Creative solutions for causes that matter. We help NGOs and charities amplify their impact.',
  },
  {
    icon: ShoppingBag,
    title: 'E-commerce',
    description: 'Empowering retailers and merchants to build seamless online stores.',
  },
  {
    icon: Users,
    title: 'Agencies',
    description: 'Partner with agencies seeking skilled white-label development expertise.',
  },
  {
    icon: Rocket,
    title: 'Startups',
    description: 'Helping innovative companies build MVPs and scale their digital presence.',
  },
  {
    icon: Palette,
    title: 'Creators',
    description: 'We build personal portfolios, blogs, and creative showcases.',
  },
  {
    icon: Briefcase,
    title: 'Small Businesses',
    description: 'Empowering local businesses to establish a professional online presence.',
  },
];

export const WhoWeServe = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    if (headlineRef.current) {
      const text = headlineRef.current.innerText;
      headlineRef.current.innerHTML = text.split('').map(char =>
        `<span class="char-serve inline-block">${char === ' ' ? '&nbsp;' : char}</span>`
      ).join('');

      gsap.from(".char-serve", {
        y: 50,
        opacity: 0,
        stagger: 0.02,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: headlineRef.current,
          start: "top 85%",
        }
      });
    }
  }, { scope: sectionRef });

  return (
    <AnimatedSectionWrapper ref={sectionRef} id="clients" className="py-32 bg-background relative overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-1/4 right-0 w-[600px] h-[600px] bg-accent rounded-full blur-[140px] animate-pulse" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-24 max-w-4xl mx-auto">
          <Reveal direction="down">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-primary/10 rounded-full text-primary font-bold text-sm mb-8 border border-primary/20 backdrop-blur-md uppercase tracking-widest">
              Our Strategic Focus
            </div>
          </Reveal>
          <h2 ref={headlineRef} className="text-[clamp(1.75rem,4vw,3.5rem)] font-display font-black mb-8 text-foreground tracking-tighter uppercase italic leading-none">
            who we serve
          </h2>
          <Reveal delay={0.3}>
            <p className="text-2xl text-muted-foreground font-medium font-serif italic max-w-2xl mx-auto leading-relaxed">
              We engineer specialized growth frameworks for entities across the digital spectrum.
            </p>
          </Reveal>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {clientTypes.map((client, index) => (
              <Reveal key={client.title} delay={index * 0.1} direction="up">
                <TiltCard className="h-full">
                  <div className="bg-card/40 backdrop-blur-xl rounded-[3rem] p-10 border border-border/50 hover:border-primary/40 transition-all duration-500 hover:shadow-2xl h-full group relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-[3rem] group-hover:bg-primary/10 transition-colors" />

                    <Magnetic strength={0.2}>
                      <div className="w-20 h-20 rounded-3xl bg-primary flex items-center justify-center mb-8 group-hover:scale-110 group-hover:-rotate-12 transition-all duration-500 shadow-glow">
                        <client.icon className="text-black" size={32} />
                      </div>
                    </Magnetic>

                    <h3 className="text-3xl font-black text-foreground mb-4 tracking-tight italic font-serif leading-none group-hover:text-primary transition-colors">
                      {client.title}
                    </h3>
                    <p className="text-muted-foreground text-lg leading-relaxed font-medium">
                      {client.description}
                    </p>
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>

          {/* Central Decoration Enhancement */}
          <div className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-20">
            <div className="w-48 h-48 rounded-full bg-primary/10 backdrop-blur-3xl border border-primary/20 flex items-center justify-center shadow-3xl">
              <div className="text-center font-display font-black text-lg leading-none uppercase italic text-primary">
                Systemic<br />Scaling
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSectionWrapper>
  );
};
