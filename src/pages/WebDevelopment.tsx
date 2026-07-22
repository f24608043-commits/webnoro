import { useEffect, useRef } from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import {
  ArrowRight,
  Code,
  Palette,
  Activity,
  Server,
  LifeBuoy,
  Cpu,
  Rocket,
  Shield,
  Layers,
  Zap,
  Globe,
  Search,
  Smartphone,
  TrendingUp,
  FileText,
  ExternalLink,
  CheckCircle,
  Target,
  Cloud,
  Lock,
  Gauge,
  Database,
  Workflow
} from 'lucide-react';
import { Reveal } from '@/components/animations/Reveal';
import { TiltCard } from '@/components/animations/TiltCard';
import { Magnetic } from '@/components/animations/Magnetic';
import { gsap, useGSAP } from '@/lib/gsap';
import AnimatedSectionWrapper from '@/components/AnimatedSectionWrapper';

const WebDevelopment = () => {
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
          `<span class="char-web-hero inline-block">${char === ' ' ? '&nbsp;' : char}</span>`
        ).join('');
      });

      gsap.from(".char-web-hero", {
        y: 100,
        opacity: 0,
        stagger: 0.02,
        duration: 1.2,
        ease: "power4.out",
        delay: 0.2
      });
    }
  }, { scope: heroRef });

  // Trust tags for hero
  const trustTags = ['Custom Web Apps', 'SEO Optimized', 'High Performance', 'Scalable Architecture', 'Secure Systems'];

  // Intro section cards
  const introCards = [
    {
      title: 'Performance-First Engineering',
      description: 'Optimized for speed, Core Web Vitals, and seamless UX.',
      icon: Zap
    },
    {
      title: 'Scalable Architecture',
      description: 'Built to handle growth from startup to enterprise scale.',
      icon: Server
    },
    {
      title: 'Business-Focused Development',
      description: 'Every feature aligned with your revenue and growth goals.',
      icon: Target
    }
  ];

  // Six Development Systems
  const developmentSystems = [
    {
      title: 'Custom Web Applications',
      description: 'React, Next.js, and full-stack platforms built for scalability and performance.',
      icon: Code
    },
    {
      title: 'UI/UX Design Systems',
      description: 'Reusable components and conversion-focused design frameworks.',
      icon: Palette
    },
    {
      title: 'Performance Optimization',
      description: 'Core Web Vitals (LCP, FID, CLS) optimization for SEO and speed.',
      icon: Gauge
    },
    {
      title: 'Backend & API Systems',
      description: 'Robust server architecture, APIs, and database management.',
      icon: Database
    },
    {
      title: 'Cloud & DevOps Infrastructure',
      description: 'AWS, Vercel, Docker, CI/CD pipelines for scalable deployment.',
      icon: Cloud
    },
    {
      title: 'Security & Compliance Systems',
      description: 'SSL, authentication, data protection, and secure architecture.',
      icon: Lock
    }
  ];

  // Development Process - 5 step flow
  const developmentProcess = [
    {
      number: '1',
      title: 'Discovery',
      description: 'Understanding business needs and technical requirements.',
      icon: Search
    },
    {
      number: '2',
      title: 'Architecture',
      description: 'Planning scalable systems and infrastructure.',
      icon: Layers
    },
    {
      number: '3',
      title: 'Development',
      description: 'Building clean, modular, production-ready code.',
      icon: Code
    },
    {
      number: '4',
      title: 'Optimization',
      description: 'Performance tuning and SEO improvements.',
      icon: Zap
    },
    {
      number: '5',
      title: 'Deployment & Scaling',
      description: 'Launch, monitor, and continuously improve.',
      icon: Rocket
    }
  ];

  // Performance + SEO cards
  const performanceFeatures = [
    {
      title: 'Core Web Vitals Optimization',
      description: 'Improve LCP, FID, CLS for better Google rankings and user experience.',
      icon: Gauge
    },
    {
      title: 'Technical SEO',
      description: 'Structured data, fast loading, crawlable architecture for search engines.',
      icon: Search
    },
    {
      title: 'Mobile Optimization',
      description: 'Responsive and mobile-first design systems for all devices.',
      icon: Smartphone
    },
    {
      title: 'Conversion Optimization',
      description: 'UX/UI built to maximize engagement, leads, and sales.',
      icon: TrendingUp
    }
  ];

  // Development Insights & Resources
  const devResources = [
    { title: 'React & Next.js Development Guides', description: 'Best practices for modern web development', link: '/blog/react-nextjs-guides' },
    { title: 'Website Performance Optimization Tips', description: 'Speed up your web applications', link: '/blog/performance-optimization' },
    { title: 'SEO for Web Applications', description: 'Technical SEO strategies for developers', link: '/blog/technical-seo' },
    { title: 'Scaling Web Infrastructure', description: 'Cloud architecture and DevOps guides', link: '/blog/scaling-infrastructure' },
    { title: 'Case Studies in Web Development', description: 'Real project transformations', link: '/blog/web-dev-case-studies' }
  ];

  // Case Studies
  const caseStudies = [
    {
      title: 'High-Speed Web App',
      problem: 'Slow loading website hurting conversions',
      solution: 'Next.js optimization + CDN implementation',
      result: '70% faster load time'
    },
    {
      title: 'eCommerce Platform',
      problem: 'Low conversions and poor mobile experience',
      solution: 'UX redesign + performance tuning',
      result: '2x conversion rate increase'
    },
    {
      title: 'Startup MVP',
      problem: 'No scalable system for product launch',
      solution: 'Full-stack architecture build',
      result: 'Successful product launch & funding'
    }
  ];

  // Trust features
  const trustFeatures = [
    { title: 'Modern Stack', description: 'React, Next.js, TypeScript, Node.js', icon: Code },
    { title: 'Speed-First', description: 'Optimized for Core Web Vitals', icon: Zap },
    { title: 'Secure-by-Design', description: 'Enterprise-grade security', icon: Shield },
    { title: 'ROI-Driven', description: 'Aligned with business goals', icon: TrendingUp }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />

      {/* Hero Section */}
      <AnimatedSectionWrapper ref={heroRef} className="pt-24 sm:pt-32 md:pt-40 lg:pt-48 xl:pt-64 pb-16 sm:pb-20 md:pb-24 lg:pb-28 xl:pb-32 hero-antigravity">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[300px] sm:w-[400px] md:w-[500px] lg:w-[600px] xl:w-[800px] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[800px] bg-primary rounded-full blur-[100px] sm:blur-[120px] md:blur-[140px] lg:blur-[150px] xl:blur-[160px] animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-[250px] sm:w-[350px] md:w-[450px] lg:w-[500px] xl:w-[600px] h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px] xl:h-[600px] bg-accent rounded-full blur-[90px] sm:blur-[105px] md:blur-[120px] lg:blur-[130px] xl:blur-[140px] animate-pulse" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <Reveal direction="down">
              <div className="inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-3 bg-primary/10 rounded-full text-primary font-bold text-[10px] sm:text-xs md:text-sm mb-6 sm:mb-8 md:mb-10 lg:mb-12 border border-primary/20 backdrop-blur-md uppercase tracking-widest">
                Technical Excellence
              </div>
            </Reveal>
            <h1 ref={headlineRef} className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl 3xl:text-7xl font-display font-black mb-4 sm:mb-6 md:mb-8 text-foreground tracking-tighter leading-[0.9] uppercase italic max-w-5xl mx-auto text-center">
              <span className="block">HIGH PERFORMANCE</span>
              <span className="block">WEB SYSTEMS BUILT</span>
              <span className="block">TO SCALE</span>
            </h1>
            <Reveal delay={0.4}>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-muted-foreground max-w-4xl mx-auto mb-6 sm:mb-8 leading-relaxed font-medium px-2">
                We engineer fast, secure, and scalable web applications using modern technologies like React, Next.js, and cloud infrastructure to power your business growth.
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
                    Start Your Project
                  </Button>
                </Magnetic>
                <Magnetic strength={0.25}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-2 sm:py-3 md:py-4 lg:py-5 xl:py-6 lg:py-8 text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl font-black border-2 border-primary text-primary hover:bg-primary/10 uppercase tracking-widest italic"
                    onClick={() => navigate('/projects#web-development-projects')}
                  >
                    View Portfolio
                  </Button>
                </Magnetic>
              </div>
            </Reveal>
          </div>
        </div>
      </AnimatedSectionWrapper>

      {/* Intro Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-24 bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12 md:mb-16 max-w-4xl mx-auto">
            <Reveal direction="down">
              <div className="inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-3 bg-primary/10 rounded-full text-primary font-bold text-[10px] sm:text-xs md:text-sm mb-6 sm:mb-8 border border-primary/20 backdrop-blur-md uppercase tracking-widest">
                Web Development Solutions
              </div>
            </Reveal>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-display font-black mb-4 sm:mb-6 md:mb-8 text-foreground tracking-tighter leading-none uppercase italic">
              Complete Web Development Solutions for <span className="text-primary not-italic">Modern Businesses</span>
            </h2>
            <Reveal delay={0.25}>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-muted-foreground font-medium leading-relaxed px-2">
                We build high-performance digital platforms designed for speed, scalability, and conversion. From custom web applications to full-stack systems, our solutions are engineered to support long-term business growth and operational efficiency.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8 max-w-6xl mx-auto">
            {introCards.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.1} direction="up">
                <TiltCard className="h-full">
                  <div className="group h-full bg-card/40 backdrop-blur-xl p-3 sm:p-4 md:p-6 lg:p-8 xl:p-10 rounded-[1rem] sm:rounded-[1.5rem] md:rounded-2xl lg:rounded-3xl xl:rounded-[3rem] border border-border/50 hover:border-primary/40 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 cursor-pointer relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-32 xl:h-32 bg-primary/5 rounded-bl-[1rem] sm:rounded-bl-[1.5rem] md:rounded-bl-2xl lg:rounded-bl-3xl xl:rounded-bl-[5rem] group-hover:bg-primary/10 transition-all duration-700" />
                    <Magnetic strength={0.2}>
                      <div className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-20 xl:h-20 rounded-lg sm:rounded-xl md:rounded-2xl bg-primary flex items-center justify-center mb-2 sm:mb-3 md:mb-4 lg:mb-6 xl:mb-8 shadow-glow group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                        <item.icon className="text-black w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:size={32}" />
                      </div>
                    </Magnetic>
                    <h3 className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl md:text-2xl font-black mb-1 sm:mb-2 md:mb-3 lg:mb-4 text-foreground group-hover:text-primary transition-colors tracking-tight leading-tight italic uppercase">
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

      {/* Six Development Systems Section */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 bg-zinc-950/50 backdrop-blur-md relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent shadow-glow" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24 max-w-4xl mx-auto">
            <Reveal direction="down">
              <div className="inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-3 bg-primary/10 rounded-full text-primary font-bold text-[10px] sm:text-xs md:text-sm mb-6 sm:mb-8 md:mb-10 border border-primary/20 backdrop-blur-md uppercase tracking-widest">
                Development Systems
              </div>
            </Reveal>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-8xl font-display font-black mb-4 sm:mb-6 md:mb-8 lg:mb-10 text-white tracking-tighter leading-none uppercase italic">
              Six Web Systems That <br /><span className="text-primary not-italic">Power Digital Growth</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8 max-w-7xl mx-auto">
            {developmentSystems.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.1} direction="up">
                <TiltCard className="h-full">
                  <div className="group h-full bg-white/5 backdrop-blur-2xl p-3 sm:p-4 md:p-6 lg:p-8 xl:p-10 rounded-[1rem] sm:rounded-[1.5rem] md:rounded-2xl lg:rounded-3xl xl:rounded-[3rem] border border-white/10 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 cursor-pointer relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-32 xl:h-32 bg-primary/5 rounded-bl-[1rem] sm:rounded-bl-[1.5rem] md:rounded-bl-2xl lg:rounded-bl-3xl xl:rounded-bl-[5rem] group-hover:bg-primary/10 transition-all duration-700" />
                    <Magnetic strength={0.2}>
                      <div className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-20 xl:h-20 rounded-lg sm:rounded-xl md:rounded-2xl bg-primary/20 flex items-center justify-center mb-2 sm:mb-3 md:mb-4 lg:mb-6 xl:mb-8 shadow-glow group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 group-hover:bg-primary">
                        <item.icon className="text-primary group-hover:text-black transition-colors w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:size={32}" />
                      </div>
                    </Magnetic>
                    <h3 className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl md:text-2xl font-black mb-1 sm:mb-2 md:mb-3 lg:mb-4 text-white group-hover:text-primary transition-colors tracking-tight leading-tight italic uppercase">
                      {item.title}
                    </h3>
                    <p className="text-white/60 leading-relaxed text-[9px] sm:text-[10px] md:text-xs lg:text-sm xl:text-base md:text-lg font-medium">
                      {item.description}
                    </p>
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process Section */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 md:py-48 bg-zinc-950/80 backdrop-blur-md relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent shadow-glow" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24 xl:mb-32 max-w-4xl mx-auto">
            <Reveal direction="down">
              <div className="inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-3 bg-primary/10 rounded-full text-primary font-bold text-[10px] sm:text-xs md:text-sm mb-6 sm:mb-8 md:mb-10 border border-primary/20 backdrop-blur-md uppercase tracking-widest">
                Our Process
              </div>
            </Reveal>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl md:text-8xl lg:text-[10rem] font-display font-black mb-4 sm:mb-6 md:mb-8 lg:mb-10 text-white tracking-tighter leading-none uppercase italic text-center">The Engineering <span className="text-primary not-italic">Workflow</span></h2>
          </div>

          <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-2 sm:gap-3 md:gap-4 lg:gap-6 xl:gap-8">
            {developmentProcess.map((step, index) => (
              <Reveal key={index} delay={index * 0.1} direction="up">
                <div className="group bg-white/5 backdrop-blur-2xl p-2 sm:p-3 md:p-4 lg:p-6 xl:p-12 rounded-[0.75rem] sm:rounded-xl md:rounded-2xl lg:rounded-3xl xl:rounded-[3rem] border border-white/10 hover:border-primary/50 transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl h-full relative overflow-hidden">
                  <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl font-display font-black text-primary/5 absolute -top-2 sm:-top-3 md:-top-4 lg:-top-5 xl:-top-5 -right-2 sm:-right-3 md:-right-4 lg:-right-5 xl:-right-5 group-hover:text-primary/10 transition-all duration-700">
                    {step.number}
                  </div>
                  <div className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-20 xl:h-20 rounded-lg sm:rounded-xl md:rounded-2xl bg-primary/20 flex items-center justify-center mb-2 sm:mb-3 md:mb-4 lg:mb-6 xl:mb-12 group-hover:bg-primary transition-all duration-500 shadow-glow">
                    <step.icon className="text-primary group-hover:text-black transition-colors w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:size={32}" />
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

      {/* Performance + SEO Block Section */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24 max-w-4xl mx-auto">
            <Reveal direction="down">
              <div className="inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-3 bg-primary/10 rounded-full text-primary font-bold text-[10px] sm:text-xs md:text-sm mb-6 sm:mb-8 md:mb-10 border border-primary/20 backdrop-blur-md uppercase tracking-widest">
                Performance & SEO
              </div>
            </Reveal>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-display font-black mb-4 sm:mb-6 md:mb-8 lg:mb-10 text-foreground tracking-tighter leading-none uppercase italic">
              Built for <span className="text-primary not-italic">Speed, Ranking, and Conversion</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8 max-w-7xl mx-auto">
            {performanceFeatures.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.1} direction="up">
                <TiltCard className="h-full">
                  <div className="group h-full bg-card/40 backdrop-blur-xl p-3 sm:p-4 md:p-6 lg:p-8 xl:p-10 rounded-[1rem] sm:rounded-[1.5rem] md:rounded-2xl lg:rounded-3xl xl:rounded-[3rem] border border-border/50 hover:border-primary/40 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 cursor-pointer relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-32 xl:h-32 bg-primary/5 rounded-bl-[1rem] sm:rounded-bl-[1.5rem] md:rounded-bl-2xl lg:rounded-bl-3xl xl:rounded-bl-[5rem] group-hover:bg-primary/10 transition-all duration-700" />
                    <Magnetic strength={0.2}>
                      <div className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-20 xl:h-20 rounded-lg sm:rounded-xl md:rounded-2xl bg-primary flex items-center justify-center mb-2 sm:mb-3 md:mb-4 lg:mb-6 xl:mb-8 shadow-glow group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                        <item.icon className="text-black w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:size={32}" />
                      </div>
                    </Magnetic>
                    <h3 className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl md:text-2xl font-black mb-1 sm:mb-2 md:mb-3 lg:mb-4 text-foreground group-hover:text-primary transition-colors tracking-tight leading-tight italic uppercase">
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

      {/* Development Insights & Resources Section */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 bg-zinc-950/50 backdrop-blur-md relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent shadow-glow" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24 max-w-4xl mx-auto">
            <Reveal direction="down">
              <div className="inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-3 bg-primary/10 rounded-full text-primary font-bold text-[10px] sm:text-xs md:text-sm mb-6 sm:mb-8 border border-primary/20 backdrop-blur-md uppercase tracking-widest">
                Knowledge Base
              </div>
            </Reveal>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-display font-black mb-4 sm:mb-6 text-white tracking-tighter leading-none uppercase italic">
              Development <span className="text-primary not-italic">Insights</span> & Resources
            </h2>
            <Reveal delay={0.25}>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white/60 font-medium leading-relaxed px-2">
                Technical content designed to rank, educate, and build authority.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 md:gap-4 lg:gap-6 max-w-6xl mx-auto">
            {devResources.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.1} direction="up">
                <div
                  className="group bg-white/5 backdrop-blur-2xl p-2 sm:p-3 md:p-4 lg:p-6 xl:p-8 rounded-[1rem] sm:rounded-xl md:rounded-2xl lg:rounded-3xl xl:rounded-[2rem] border border-white/10 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 cursor-pointer relative overflow-hidden"
                  onClick={() => navigate(item.link)}
                >
                  <div className="absolute top-0 right-0 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 bg-primary/5 rounded-bl-[1rem] sm:rounded-bl-[1.5rem] md:rounded-bl-2xl lg:rounded-bl-3xl xl:rounded-bl-[4rem] group-hover:bg-primary/10 transition-all duration-700" />
                  <div className="flex items-start gap-2 sm:gap-3 md:gap-4">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-12 xl:h-12 rounded-lg sm:rounded-xl md:rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-all duration-500">
                      <ExternalLink className="text-primary group-hover:text-black transition-colors w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 xl:size={20}" />
                    </div>
                    <div>
                      <h3 className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-black mb-1 sm:mb-2 text-white group-hover:text-primary transition-colors tracking-tight leading-tight italic uppercase">
                        {item.title}
                      </h3>
                      <p className="text-white/50 leading-relaxed text-[9px] sm:text-[10px] md:text-xs lg:text-sm xl:text-base font-medium">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering in Action Case Studies Section */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24 max-w-4xl mx-auto">
            <Reveal direction="down">
              <div className="inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-3 bg-primary/10 rounded-full text-primary font-bold text-[10px] sm:text-xs md:text-sm mb-6 sm:mb-8 border border-primary/20 backdrop-blur-md uppercase tracking-widest">
                Case Studies
              </div>
            </Reveal>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-display font-black mb-4 sm:mb-6 text-foreground tracking-tighter leading-none uppercase italic">
              Engineering in <span className="text-primary not-italic">Action</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8 max-w-6xl mx-auto">
            {caseStudies.map((study, index) => (
              <Reveal key={study.title} delay={index * 0.1} direction="up">
                <TiltCard className="h-full">
                  <div className="group h-full bg-card/40 backdrop-blur-xl p-3 sm:p-4 md:p-6 lg:p-8 xl:p-10 rounded-[1rem] sm:rounded-[1.5rem] md:rounded-2xl lg:rounded-3xl xl:rounded-[3rem] border border-border/50 hover:border-primary/40 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-32 xl:h-32 bg-primary/5 rounded-bl-[1rem] sm:rounded-bl-[1.5rem] md:rounded-bl-2xl lg:rounded-bl-3xl xl:rounded-bl-[5rem] group-hover:bg-primary/10 transition-all duration-700" />
                    <h3 className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl md:text-2xl font-black mb-2 sm:mb-3 md:mb-4 lg:mb-6 text-foreground group-hover:text-primary transition-colors tracking-tight leading-tight italic uppercase">
                      {study.title}
                    </h3>
                    <div className="space-y-2 sm:space-y-3 md:space-y-4">
                      <div>
                        <span className="text-[9px] sm:text-[10px] md:text-xs lg:text-sm xl:text-xs font-bold text-primary uppercase tracking-wider">Problem</span>
                        <p className="text-muted-foreground text-[9px] sm:text-[10px] md:text-xs lg:text-sm xl:text-base font-medium">{study.problem}</p>
                      </div>
                      <div>
                        <span className="text-[9px] sm:text-[10px] md:text-xs lg:text-sm xl:text-xs font-bold text-primary uppercase tracking-wider">Solution</span>
                        <p className="text-muted-foreground text-[9px] sm:text-[10px] md:text-xs lg:text-sm xl:text-base font-medium">{study.solution}</p>
                      </div>
                      <div className="pt-2 sm:pt-3 md:pt-4 border-t border-border/30">
                        <span className="text-[9px] sm:text-[10px] md:text-xs lg:text-sm xl:text-xs font-bold text-primary uppercase tracking-wider">Result</span>
                        <p className="text-foreground text-xs sm:text-sm md:text-base lg:text-lg xl:text-lg font-black italic">{study.result}</p>
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Features Section */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 bg-zinc-950/50 backdrop-blur-md relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent shadow-glow" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24 max-w-4xl mx-auto">
            <Reveal direction="down">
              <div className="inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-3 bg-primary/10 rounded-full text-primary font-bold text-[10px] sm:text-xs md:text-sm mb-6 sm:mb-8 border border-primary/20 backdrop-blur-md uppercase tracking-widest">
                Why Choose Us
              </div>
            </Reveal>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-display font-black mb-4 sm:mb-6 text-white tracking-tighter leading-none uppercase italic">
              Engineering <span className="text-primary not-italic">Excellence</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8 max-w-7xl mx-auto">
            {trustFeatures.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.1} direction="up">
                <TiltCard className="h-full">
                  <div className="group h-full bg-white/5 backdrop-blur-2xl p-2 sm:p-3 md:p-4 lg:p-6 xl:p-10 rounded-[1rem] sm:rounded-[1.5rem] md:rounded-2xl lg:rounded-3xl xl:rounded-[3rem] border border-white/10 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 cursor-pointer relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-32 xl:h-32 bg-primary/5 rounded-bl-[1rem] sm:rounded-bl-[1.5rem] md:rounded-bl-2xl lg:rounded-bl-3xl xl:rounded-bl-[5rem] group-hover:bg-primary/10 transition-all duration-700" />
                    <Magnetic strength={0.2}>
                      <div className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-20 xl:h-20 rounded-lg sm:rounded-xl md:rounded-2xl bg-primary/20 flex items-center justify-center mb-2 sm:mb-3 md:mb-4 lg:mb-6 xl:mb-8 shadow-glow group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 group-hover:bg-primary">
                        <item.icon className="text-primary group-hover:text-black transition-colors w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:size={32}" />
                      </div>
                    </Magnetic>
                    <h3 className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl md:text-2xl font-black mb-1 sm:mb-2 md:mb-3 lg:mb-4 text-white group-hover:text-primary transition-colors tracking-tight leading-tight italic uppercase">
                      {item.title}
                    </h3>
                    <p className="text-white/60 leading-relaxed text-[9px] sm:text-[10px] md:text-xs lg:text-sm xl:text-base md:text-lg font-medium">
                      {item.description}
                    </p>
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <AnimatedSectionWrapper className="py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 md:py-48 bg-zinc-950/80 backdrop-blur-md">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent shadow-glow" />
        <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
          <Reveal direction="down">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl md:text-8xl font-display font-black mb-4 sm:mb-6 md:mb-8 text-white tracking-tighter leading-none uppercase italic text-center">
              Ready to Build a <br /><span className="text-primary not-italic">Scalable Web System?</span>
            </h2>
          </Reveal>
          <Reveal delay={0.25}>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl md:text-3xl text-white/70 mb-8 sm:mb-12 md:mb-14 lg:mb-16 max-w-4xl mx-auto leading-relaxed font-serif italic px-2">
              Let's develop a high-performance platform that drives growth and delivers results.
            </p>
          </Reveal>
          <Reveal delay={0.5}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 md:gap-6">
              <Magnetic strength={0.2}>
                <Button
                  size="lg"
                  className="rounded-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-16 py-2 sm:py-3 md:py-4 lg:py-5 xl:py-10 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-black bg-primary text-black hover:bg-primary transition-all duration-500 shadow-glow uppercase tracking-widest italic"
                  onClick={() => navigate('/contact')}
                >
                  Start Your Project
                </Button>
              </Magnetic>
              <Magnetic strength={0.2}>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-16 py-2 sm:py-3 md:py-4 lg:py-5 xl:py-10 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-black border-2 border-primary text-primary hover:bg-primary/10 uppercase tracking-widest italic"
                  onClick={() => navigate('/contact')}
                >
                  Get Free Consultation
                </Button>
              </Magnetic>
            </div>
          </Reveal>
        </div>
      </AnimatedSectionWrapper>

      <Footer />
    </div>
  );
};

export default WebDevelopment;
