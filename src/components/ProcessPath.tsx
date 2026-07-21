"use client";

import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Reveal } from './animations/Reveal';
import { TiltCard } from './animations/TiltCard';
import { Magnetic } from './animations/Magnetic';
import AnimatedSectionWrapper from './AnimatedSectionWrapper';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  position: 'left' | 'right';
  delay: number;
}

const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Discover',
    description: 'We analyze your needs, market position, and opportunities to create a strategic foundation for growth.',
    position: 'right',
    delay: 0.2
  },
  {
    number: '02',
    title: 'Design',
    description: 'Our team crafts tailored solutions with cutting-edge technology and user-centered approaches.',
    position: 'left',
    delay: 0.4
  },
  {
    number: '03',
    title: 'Develop',
    description: 'We bring your vision to life with agile development and rigorous quality assurance.',
    position: 'right',
    delay: 0.6
  },
  {
    number: '04',
    title: 'Launch',
    description: 'Strategic deployment with ongoing support to ensure sustainable success and measurable results.',
    position: 'left',
    delay: 0.8
  }
];

export const ProcessPath = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const [pathLength, setPathLength] = useState(0);
  const [visibleSteps, setVisibleSteps] = useState<Set<number>>(new Set());

  useEffect(() => {
    if (!pathRef.current || !sectionRef.current) return;

    const path = pathRef.current;
    const length = path.getTotalLength();
    setPathLength(length);

    // Set initial path state
    gsap.set(path, {
      strokeDasharray: length,
      strokeDashoffset: length
    });

    // Create scroll-triggered animation for path drawing
    const pathTl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 60%',
        end: 'bottom 20%',
        scrub: 1,
      }
    });

    pathTl.to(path, {
      strokeDashoffset: 0,
      duration: 1,
      ease: 'power2.inOut'
    });

    // Animate cards as path progresses
    processSteps.forEach((step, index) => {
      const progress = (index + 1) / processSteps.length;
      
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: `top+=${progress * 60}% 60%`,
        end: `top+=${progress * 60}% 60%`,
        onEnter: () => {
          setVisibleSteps(prev => new Set(prev).add(index));
        },
        once: true
      });
    });

    return () => {
      pathTl.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <AnimatedSectionWrapper 
      ref={sectionRef} 
      id="process-path" 
      className="py-32 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden"
    >
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 blur-3xl opacity-30" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-24 max-w-4xl mx-auto">
          <Reveal direction="down">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-primary/10 rounded-full text-primary font-bold text-sm mb-8 border border-primary/20 backdrop-blur-md uppercase tracking-widest">
              Our Process
            </div>
          </Reveal>
          <h2 className="text-[clamp(1.75rem,4vw,3.5rem)] font-display font-black mb-10 text-foreground tracking-tighter uppercase italic leading-none break-keep">
            Strategic
            <br />
            <span className="text-primary">Growth Path</span>
          </h2>
          <Reveal delay={0.3}>
            <p className="text-2xl text-muted-foreground font-medium font-serif italic max-w-2xl mx-auto leading-relaxed">
              A systematic approach to transforming your digital presence through strategic innovation.
            </p>
          </Reveal>
        </div>

        {/* Process Path Container */}
        <div className="relative max-w-6xl mx-auto" style={{ minHeight: '800px' }}>
          {/* SVG Path */}
          <div className="absolute inset-0 z-0">
            <svg
              viewBox="0 0 1200 800"
              className="w-full h-auto"
              style={{ minHeight: '800px' }}
            >
              <defs>
                <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="#06b6d4" stopOpacity="1" />
                  <stop offset="100%" stopColor="#0891b2" stopOpacity="0.8" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              
              {/* Z-Pattern Path */}
              <path
                ref={pathRef}
                d="M 100 100 Q 300 100 500 200 T 900 200 Q 1000 300 900 400 T 600 400 Q 400 400 300 500 T 100 600 Q 200 700 100 700"
                stroke="url(#pathGradient)"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
                filter="url(#glow)"
                className="drop-shadow-lg"
              />
              
              {/* Number Nodes */}
              {processSteps.map((step, index) => {
                const positions = [
                  { x: 100, y: 100 },  // Node 01
                  { x: 900, y: 200 },  // Node 02
                  { x: 600, y: 400 },  // Node 03
                  { x: 100, y: 600 }   // Node 04
                ];
                
                return (
                  <g key={step.number}>
                    <circle
                      cx={positions[index].x}
                      cy={positions[index].y}
                      r="8"
                      fill="white"
                      stroke="#14b8a6"
                      strokeWidth="2"
                      className="drop-shadow-md"
                    />
                    <text
                      x={positions[index].x}
                      y={positions[index].y}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      className="fill-primary font-black text-lg font-bold"
                      style={{ filter: 'drop-shadow(0 0 10px rgba(20, 184, 166, 0.5))' }}
                    >
                      {step.number}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Process Cards */}
          <div className="relative z-10 space-y-32">
            {processSteps.map((step, index) => (
              <div
                key={step.number}
                className={`flex items-center ${
                  step.position === 'right' ? 'justify-end' : 'justify-start'
                }`}
                style={{ minHeight: '150px' }}
              >
                <Reveal delay={step.delay} direction={step.position === 'right' ? 'left' : 'right'}>
                  <TiltCard>
                    <Magnetic strength={0.15}>
                      <div
                        className={`
                          group relative max-w-md p-8 rounded-3xl 
                          bg-card/80 backdrop-blur-xl border border-border/50 
                          hover:border-primary/40 transition-all duration-500 
                          hover:shadow-2xl overflow-hidden
                          ${visibleSteps.has(index) ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}
                        `}
                        style={{
                          transform: visibleSteps.has(index) ? 'translateX(0)' : 
                                     step.position === 'right' ? 'translateX(50px)' : 'translateX(-50px)',
                          transition: 'all 0.8s cubic-bezier(0.25, 0.4, 0.25, 1)'
                        }}
                      >
                        {/* Accent corner */}
                        <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-3xl group-hover:bg-primary/10 transition-colors" />
                        
                        {/* Step Number */}
                        <div className="flex items-center gap-4 mb-6">
                          <div 
                            data-number={index}
                            className={`
                              text-5xl font-black text-cyan-600
                              drop-shadow-lg
                            `}
                            style={{ 
                              filter: 'drop-shadow(0 0 15px rgba(6, 182, 212, 0.4))',
                              willChange: 'transform, filter'
                            }}
                          >
                            {step.number}
                          </div>
                        </div>

                        {/* Content */}
                        <div>
                          <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                            {step.title}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed">
                            {step.description}
                          </p>
                        </div>

                        {/* Hover effect overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl" />
                      </div>
                    </Magnetic>
                  </TiltCard>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </AnimatedSectionWrapper>
  );
};
