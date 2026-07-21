import { useRef } from 'react';
import { VariableProximity } from './VariableProximity';
import founderAbdullah from '@/assets/founder-abdullah.jpeg';
import cofounderAbubakar from '@/assets/cofounder-abubakar.png';
import { Reveal } from './animations/Reveal';
import { TiltCard } from './animations/TiltCard';
import { Magnetic } from './animations/Magnetic';
import { gsap, useGSAP } from '@/lib/gsap';

interface Founder {
  name: string;
  role: string;
  bio: string;
  image: string;
}

const founders: Founder[] = [
  {
    name: 'Abdullah Fayyaz',
    role: 'Founder & CEO',
    bio: 'Visionary leader with a passion for scaling brands through e-commerce, digital marketing, and technology. Abdullah drives strategy and growth at Nexa Growth.',
    image: founderAbdullah,
  },
  {
    name: 'Muhammad Abubakar',
    role: 'Co-Founder & CTO',
    bio: 'Technical architect and full-stack expert who builds the technology infrastructure powering brand growth. Abubakar leads engineering excellence at Nexa Growth.',
    image: cofounderAbubakar,
  },
];

const FounderCard = ({ founder, index }: { founder: Founder; index: number }) => {
  return (
    <Reveal direction="up" delay={0.2 + index * 0.15}>
      <TiltCard className="h-full">
        <div className="relative rounded-[3rem] p-10 border border-border/50 bg-card/80 backdrop-blur-xl shadow-2xl transition-all duration-500 group overflow-hidden h-full flex flex-col items-center text-center">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

          <div className="relative mb-8">
            <div className="absolute inset-0 rounded-full bg-primary/20 blur-2xl group-hover:bg-primary/40 transition-all duration-700" />
            <img
              src={founder.image}
              alt={founder.name}
              className="relative w-40 h-40 rounded-full object-cover border-4 border-background shadow-2xl group-hover:scale-105 transition-transform duration-700"
            />
          </div>

          <Magnetic strength={0.2}>
            <h3 className="text-3xl font-black text-foreground mb-3 tracking-tight italic font-serif leading-none group-hover:text-primary transition-colors">
              {founder.name}
            </h3>
          </Magnetic>

          <div className="inline-flex items-center gap-2 px-6 py-2 bg-primary/10 rounded-full text-primary font-black text-sm mb-6 border border-primary/20 backdrop-blur-md uppercase tracking-wider italic">
            {founder.role}
          </div>

          <p className="text-muted-foreground text-lg leading-relaxed font-medium font-serif italic max-w-sm">
            "{founder.bio}"
          </p>
        </div>
      </TiltCard>
    </Reveal>
  );
};

export const Founders = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    if (headlineRef.current) {
      const text = headlineRef.current.innerText;
      headlineRef.current.innerHTML = text.split('').map(char =>
        `<span class="char-founders inline-block">${char === ' ' ? '&nbsp;' : char}</span>`
      ).join('');

      gsap.from(".char-founders", {
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
    <section ref={sectionRef} className="py-32 bg-transparent relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <Reveal direction="down">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-primary/10 rounded-full text-primary font-bold text-sm mb-8 border border-primary/20 backdrop-blur-md uppercase tracking-widest">
              Executive Leadership
            </div>
          </Reveal>
          <h2 ref={headlineRef} className="text-6xl md:text-8xl font-display font-black mb-8 text-foreground tracking-tighter uppercase italic leading-none">
            Meet Our <span className="text-primary not-italic">Architects</span>
          </h2>
          <Reveal delay={0.3}>
            <p className="text-2xl text-muted-foreground max-w-3xl mx-auto font-medium font-serif italic leading-relaxed">
              The visionary minds driving systemic growth and engineering excellence at Nexa Growth.
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {founders.map((founder, index) => (
            <FounderCard key={founder.name} founder={founder} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
