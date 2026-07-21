import { useRef } from 'react';
import { Linkedin, Instagram, Facebook, Github } from 'lucide-react';
import { Reveal } from './animations/Reveal';
import { Magnetic } from './animations/Magnetic';
import { gsap, useGSAP } from '@/lib/gsap';
import AnimatedSectionWrapper from './AnimatedSectionWrapper';
import { LogoLoop } from '@/components/ui/LogoLoop';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiNodedotjs, SiPython, SiAmazon, SiDocker, SiPostgresql } from 'react-icons/si';

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiPython />, title: "Python", href: "https://python.org" },
  { node: <SiAmazon />, title: "AWS", href: "https://aws.amazon.com" },
  { node: <SiDocker />, title: "Docker", href: "https://docker.com" },
  { node: <SiPostgresql />, title: "PostgreSQL", href: "https://postgresql.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
];

const socialLinks = [
  { icon: Linkedin, url: 'https://www.linkedin.com/in/nexa-growth-solutions/', name: 'LinkedIn' },
  { icon: Instagram, url: 'https://www.instagram.com/nexagrowthsolution/', name: 'Instagram' },
  { icon: Facebook, url: 'https://www.facebook.com/profile.php?id=61587721904101', name: 'Facebook' }
];

export const TechStack = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    if (headlineRef.current) {
      const text = headlineRef.current.innerText;
      headlineRef.current.innerHTML = text.split('').map(char =>
        `<span class="char-tech inline-block">${char === ' ' ? '&nbsp;' : char}</span>`
      ).join('');

      gsap.from(".char-tech", {
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
    <AnimatedSectionWrapper ref={sectionRef} className="py-32 bg-background relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary rounded-full blur-[160px]" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent rounded-full blur-[140px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-24 max-w-4xl mx-auto">
          <Reveal direction="down">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-primary/10 rounded-full text-primary font-bold text-sm mb-8 border border-primary/20 backdrop-blur-md uppercase tracking-widest">
              Digital Infrastructure
            </div>
          </Reveal>
          <h2 ref={headlineRef} className="text-3xl sm:text-4xl lg:text-5xl font-display font-black mb-8 text-foreground tracking-tighter uppercase italic leading-none">
            Modern <span className="text-primary not-italic">Tech Stack</span>
          </h2>
          <Reveal delay={0.3}>
            <p className="text-2xl text-muted-foreground font-medium font-serif italic max-w-2xl mx-auto leading-relaxed">
              Utilizing high-performance technologies to build scalable, enterprise-grade digital architectures.
            </p>
          </Reveal>
        </div>

        {/* Logo Loop */}
        <div className="relative mb-32 py-10">
          <LogoLoop
            logos={techLogos}
            speed={100}
            direction="left"
            logoHeight={60}
            gap={60}
            hoverSpeed={0}
            fadeOut
            fadeOutColor="hsl(var(--background))"
            scaleOnHover
            ariaLabel="Technology partners"
          />
        </div>

        {/* Social Connection */}
        <div className="max-w-4xl mx-auto text-center">
          <Reveal direction="up">
            <h3 className="text-4xl font-display font-black mb-16 italic uppercase tracking-tight">Connect with our <span className="text-primary not-italic">Ecosystem</span></h3>
          </Reveal>

          <div className="flex flex-wrap justify-center items-center gap-12">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <Reveal key={social.name} delay={index * 0.1} direction="up">
                  <Magnetic strength={0.3}>
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative flex items-center justify-center w-24 h-24"
                    >
                      <div className="absolute inset-0 rounded-full bg-primary/10 border-2 border-primary/20 group-hover:border-primary group-hover:bg-primary/20 transition-all duration-500 shadow-xl group-hover:shadow-glow" />
                      <Icon className="relative w-10 h-10 text-foreground group-hover:text-primary transition-all duration-500 group-hover:scale-110" />

                      <div className="absolute -bottom-10 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:-bottom-12">
                        <span className="text-xs font-black uppercase tracking-widest text-primary italic">{social.name}</span>
                      </div>
                    </a>
                  </Magnetic>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </AnimatedSectionWrapper>
  );
};