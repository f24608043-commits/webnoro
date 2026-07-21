import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import { gsap, useGSAP } from '@/lib/gsap';
import { Magnetic } from './animations/Magnetic';
import AnimatedSectionWrapper from './AnimatedSectionWrapper';
import { BackgroundCircles } from '@/components/ui/background-circles';

export const Hero = () => {
  const navigate = useNavigate();
  const containerRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    // 1. Entrance Animation
    if (headlineRef.current) {
      gsap.from(headlineRef.current, {
        y: 60,
        opacity: 0,
        duration: 1.4,
        ease: "power3.out"
      });
    }

    // Animate other hero content elements
    gsap.from(".hero-content-item", {
      y: 40,
      opacity: 0,
      duration: 1.2,
      stagger: 0.2,
      ease: "power3.out",
      delay: 0.2
    });

  }, { scope: containerRef });

  return (
    <section ref={containerRef} id="hero" className="relative min-h-screen w-full overflow-hidden bg-black flex items-center justify-center">

      {/* Background Animation */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <BackgroundCircles
          variant="primary"
          className="h-full w-full"
        />
      </div>

      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Hero Content */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center px-6 w-full max-w-6xl mx-auto">

        <h1
          ref={headlineRef}
          className="text-6xl sm:text-7xl md:text-9xl lg:text-[10rem] font-display font-black tracking-tighter text-white drop-shadow-[0_0_35px_rgba(16,185,129,0.3)] uppercase italic leading-[0.85] mb-8"
        >
          NEXA <span className="text-[#064e3b]">GROWTH</span>
        </h1>

        <p className="hero-content-item mt-6 max-w-3xl text-lg md:text-2xl text-gray-300 leading-relaxed font-medium italic font-serif">
          From Idea to Revenue: We Build & Scale Your Business
        </p>

        <div className="hero-content-item mt-12 flex flex-col sm:flex-row gap-6">
          <Magnetic strength={0.2}>
            <Button
              size="lg"
              className="text-xl px-10 py-8 rounded-full bg-[#064e3b] text-white font-black uppercase italic hover:scale-105 transition-transform duration-300 shadow-[0_0_20px_rgba(6,78,59,0.4)] hover:shadow-[0_0_30px_rgba(6,78,59,0.6)]"
              onClick={() => navigate('/contact')}
            >
              Book Free Strategy Call
            </Button>
          </Magnetic>

          <Magnetic strength={0.2}>
            <Button
              size="lg"
              variant="outline"
              className="text-xl px-10 py-8 rounded-full border-2 border-[#064e3b] text-[#064e3b] font-black uppercase italic hover:bg-[#064e3b]/10 transition-all duration-300 backdrop-blur-sm"
              onClick={() => navigate('/services')}
            >
              See How We Scale Businesses
            </Button>
          </Magnetic>
        </div>

        {/* Micro-text under CTA */}
        <p className="hero-content-item mt-4 text-sm text-gray-400 font-medium">
          Free. No commitment. 15-min call.
        </p>

      </div>

      {/* Scroll Indicator */}
      <div className="hero-content-item absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-20 opacity-60">
        <span className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-muted-foreground font-black italic">Initiate Exploration</span>
        <div className="w-[1px] h-24 bg-gradient-to-b from-emerald-500/50 to-transparent relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-emerald-500 animate-scroll-line" />
        </div>
      </div>

    </section>
  );
};
