import { useRef } from 'react';
import { Reveal } from './animations/Reveal';
import { TiltCard } from './animations/TiltCard';
import { Magnetic } from './animations/Magnetic';
import { gsap, useGSAP } from '@/lib/gsap';
import AnimatedSectionWrapper from './AnimatedSectionWrapper';

export const Stats = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);

  const stats = [
    // Stats removed as requested
  ];

  useGSAP(() => {
    if (headlineRef.current) {
      const text = headlineRef.current.innerText;
      headlineRef.current.innerHTML = text.split('').map(char =>
        `<span class="char-stats inline-block">${char === ' ' ? '&nbsp;' : char}</span>`
      ).join('');

      gsap.from(".char-stats", {
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
    <AnimatedSectionWrapper ref={sectionRef} id="stats" className="py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-24 max-w-4xl mx-auto">
          <Reveal direction="down">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-primary/10 rounded-full text-primary font-bold text-sm mb-8 border border-primary/20 backdrop-blur-md uppercase tracking-widest">
              Success Metrics
            </div>
          </Reveal>
          <h2 ref={headlineRef} className="text-[clamp(1.75rem,4vw,3.5rem)] font-display font-black mb-10 text-foreground tracking-tighter uppercase italic leading-none break-keep">
            Performance
          </h2>
          <Reveal delay={0.3}>
            <p className="text-2xl text-muted-foreground font-medium font-serif italic max-w-2xl mx-auto leading-relaxed">
              Quantifiable displacement across the entire digital ecosystem.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 max-w-7xl mx-auto">
          {stats.map((stat, index) => (
            <Reveal key={index} delay={index * 0.1} direction="up">
              <TiltCard>
                <div className="group text-center p-10 rounded-[3rem] bg-card/40 backdrop-blur-xl border border-border/50 hover:border-primary/40 transition-all duration-500 hover:shadow-2xl overflow-hidden relative">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-[3rem] group-hover:bg-primary/10 transition-colors" />

                  <Magnetic strength={0.2}>
                    <div className="text-6xl md:text-7xl lg:text-8xl font-display font-black mb-4 tracking-tighter group-hover:scale-110 transition-transform duration-500 italic">
                      {stat.value}<span className="text-primary not-italic">{stat.suffix}</span>
                    </div>
                  </Magnetic>

                  <div className="text-muted-foreground font-black uppercase text-sm tracking-widest italic font-serif">
                    {stat.label}
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </AnimatedSectionWrapper>
  );
};
