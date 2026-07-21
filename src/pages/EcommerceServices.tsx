import { useEffect, useRef } from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import {
  ArrowRight,
  ShoppingCart,
  TrendingUp,
  BarChart3,
  Globe,
  Zap,
  Layout,
  Search,
  Activity,
  Users,
  ShieldCheck
} from 'lucide-react';
import { Reveal } from '@/components/animations/Reveal';
import { TiltCard } from '@/components/animations/TiltCard';
import { Magnetic } from '@/components/animations/Magnetic';
import { gsap, useGSAP } from '@/lib/gsap';
import AnimatedSectionWrapper from '@/components/AnimatedSectionWrapper';

const EcommerceServices = () => {
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
          `<span class="char-eco-hero inline-block">${char === ' ' ? '&nbsp;' : char}</span>`
        ).join('');
      });

      gsap.from(".char-eco-hero", {
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
  const trustTags = ['Amazon Growth', 'Shopify Development', 'Marketplace Scaling', 'Conversion Optimization', 'Global Expansion'];

  const amazonServices = [
    { title: 'Full Account Management', description: 'End-to-end management of Seller & Vendor Central accounts, from inventory planning to customer service.', icon: ShoppingCart },
    { title: 'Listing Optimization', description: 'Strategic keyword integration and high-conversion copywriting that drives both search rank and buyer confidence.', icon: Search },
    { title: 'PPC & Ads Strategy', description: 'Data-driven Amazon Ads management focused on reducing ACoS and scaling your market share profitably.', icon: Zap },
    { title: 'Brand Store Design', description: 'Enhancing your brand story with custom A+ content and interactive storefronts that build long-term brand equity.', icon: Layout },
    { title: 'Compliance & Protection', description: 'Navigating Amazon policies and protecting your IP through Brand Registry and active listing monitoring.', icon: ShieldCheck },
    { title: 'Global Expansion', description: 'Scaling your brand to Amazon UK, EU, USA, and beyond with localized strategies and compliance support.', icon: Globe },
  ];

  const frameworkSteps = [
    { number: '1', title: 'Audit & Analysis', description: 'Deep-dive account audit identifying listing gaps and untapped keyword opportunities.' },
    { number: '2', title: 'Brand Optimization', description: 'Rewriting listings and upgrading creative assets for maximum marketplace visibility.' },
    { number: '3', title: 'Traffic Scaling', description: 'Aggressive PPC management and external traffic strategies to drive BSR and category rank.' },
    { number: '4', title: 'Profit Metrics', description: 'Monthly performance reviews focused on net profitability, ROAS, and inventory health.' }
  ];

  const whyBrandsTrust = [
    { title: 'Algorithm Specialists', description: 'Our experts live and breathe marketplace algorithms, staying ahead of every policy change.', icon: Users },
    { title: 'Profit-First Strategy', description: 'We don\'t just chase sales; we optimize for your bottom-line profitability and sustainable growth.', icon: TrendingUp },
    { title: 'Automated Operations', description: 'Using advanced analytics and automation to handle scale without compromising on quality.', icon: Activity },
    { title: 'Absolute Transparency', description: 'Transparent communication with monthly dashboards that show exactly where your growth is coming from.', icon: BarChart3 }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />

      {/* Hero Section */}
      <AnimatedSectionWrapper ref={heroRef} className="pt-64 pb-32 hero-antigravity">
        <div className="absolute inset-0 bg-grid-pattern animate-grid-move opacity-20" />
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[800px] h-[800px] bg-primary rounded-full blur-[160px] animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-accent rounded-full blur-[140px] animate-pulse" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <Reveal direction="down">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-primary/10 rounded-full text-primary font-bold text-sm mb-12 border border-primary/20 backdrop-blur-md uppercase tracking-widest">
                E-Commerce Systems
              </div>
            </Reveal>
            <h1 ref={headlineRef} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-black mb-8 text-foreground tracking-tighter leading-[0.9] max-w-5xl mx-auto text-center">
              <span className="block">Scalable Systems</span>
              <span className="block">For Ecommerce</span>
            </h1>
            <Reveal delay={0.4}>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-8 leading-relaxed font-medium">
                We help brands grow on Amazon, Shopify, and global marketplaces with optimized listings, ads, and automation systems.
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
                    Scale Your Store
                  </Button>
                </Magnetic>
                <Magnetic strength={0.25}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-full px-12 py-8 text-xl font-black border-2 border-primary text-primary hover:bg-primary/10 uppercase tracking-widest italic"
                    onClick={() => navigate('/projects#ecommerce-projects')}
                  >
                    View Case Studies
                  </Button>
                </Magnetic>
              </div>
            </Reveal>
          </div>
        </div>
      </AnimatedSectionWrapper>

      {/* Services Grid Section */}
      <section className="py-32 bg-background/80 backdrop-blur-sm relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-28 max-w-4xl mx-auto">
            <Reveal direction="down">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-primary/10 rounded-full text-primary font-bold text-sm mb-8 border border-primary/20 backdrop-blur-md uppercase tracking-widest">
                E-commerce Capabilities
              </div>
            </Reveal>
            <h2 className="text-5xl md:text-8xl font-display font-black mb-10 text-foreground tracking-tighter leading-none uppercase italic">Scale With <span className="text-primary not-italic">Precision</span></h2>
            <Reveal delay={0.2}>
              <p className="text-2xl text-muted-foreground font-medium italic font-serif max-w-3xl mx-auto">
                Comprehensive marketplace solutions for ambitious brands aiming for total category authority.
              </p>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
            {amazonServices.map((item, index) => (
              <Reveal key={index} delay={index * 0.1} direction="up">
                <TiltCard className="h-full">
                  <div className="group h-full bg-card/40 backdrop-blur-xl p-12 rounded-[3.5rem] border border-border/50 hover:border-primary/40 transition-all duration-500 hover:shadow-2xl cursor-pointer relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[5rem] group-hover:bg-primary/10 transition-colors" />
                    <Magnetic strength={0.2}>
                      <div className="w-24 h-24 rounded-3xl bg-primary flex items-center justify-center mb-12 shadow-glow group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                        <item.icon className="text-black" size={40} />
                      </div>
                    </Magnetic>
                    <h3 className="text-3xl font-black mb-6 text-foreground group-hover:text-primary transition-colors tracking-tight leading-none italic font-serif uppercase">
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

      {/* Framework Section */}
      <section className="py-48 bg-zinc-950/80 backdrop-blur-md relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent shadow-glow" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-32 max-w-4xl mx-auto">
            <Reveal direction="down">
              <h2 className="text-7xl md:text-8xl lg:text-[12rem] font-display font-black mb-10 text-white tracking-tighter leading-none uppercase italic text-center">The Growth <span className="text-primary not-italic">Mechanism</span></h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-3xl text-white/60 font-medium italic font-serif leading-relaxed">
                A data-driven roadmap to sustainable marketplace authority.
              </p>
            </Reveal>
          </div>

          <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {frameworkSteps.map((step, index) => (
              <Reveal key={index} delay={index * 0.15} direction="up">
                <div className="group bg-white/5 backdrop-blur-2xl p-12 rounded-[3.5rem] border border-white/10 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl h-full relative overflow-hidden">
                  <div className="text-9xl font-display font-black text-primary/5 absolute -top-5 -right-5 group-hover:text-primary/10 transition-all duration-700">
                    {step.number}
                  </div>
                  <div className="w-20 h-20 rounded-2xl bg-primary/20 flex items-center justify-center mb-12 group-hover:bg-primary transition-all duration-500 shadow-glow">
                    <span className="text-4xl font-black text-primary group-hover:text-black italic">{step.number}</span>
                  </div>
                  <h3 className="text-3xl font-black mb-6 text-white tracking-tight italic leading-none uppercase">{step.title}</h3>
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
          <div className="text-center mb-32 max-w-4xl mx-auto">
            <Reveal direction="down">
              <h2 className="text-5xl md:text-8xl font-display font-black mb-10 text-foreground tracking-tighter leading-none uppercase italic">The Elite <span className="text-primary not-italic">Standard</span></h2>
            </Reveal>
            <Reveal delay={0.25}>
              <p className="text-2xl text-muted-foreground font-medium italic font-serif">
                More than a vendor—we are your marketplace growth partner.
              </p>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mb-32">
            {whyBrandsTrust.map((block, index) => (
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
                className="group rounded-full px-20 py-12 text-3xl font-black transition-all duration-500 shadow-glow bg-primary text-black italic uppercase tracking-widest"
                onClick={() => navigate('/projects#ecommerce-projects')}
              >
                Explore Results
                <ArrowRight className="ml-6 w-12 h-12 group-hover:translate-x-5 transition-transform duration-500" />
              </Button>
            </Magnetic>
          </Reveal>
        </div>
      </section>

      {/* Final CTA Section */}
      <AnimatedSectionWrapper className="py-48 bg-zinc-950/80 backdrop-blur-md">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent shadow-glow" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <Reveal direction="down">
            <h2 className="text-7xl md:text-8xl lg:text-[12rem] font-display font-black mb-12 text-white tracking-tighter leading-none uppercase italic text-center">
              Ready To <br /><span className="text-primary not-italic">Command?</span>
            </h2>
          </Reveal>
          <Reveal delay={0.25}>
            <p className="text-2xl md:text-4xl text-white/70 mb-20 max-w-5xl mx-auto leading-relaxed font-serif italic">
              Let's discuss how we can scale your brand to new heights with a custom framework.
            </p>
          </Reveal>
          <Reveal delay={0.4}>
            <Magnetic strength={0.2}>
              <Button
                size="lg"
                className="rounded-full px-20 py-12 text-4xl font-black bg-primary text-black hover:bg-primary transition-all duration-500 shadow-glow italic uppercase tracking-tighter"
                onClick={() => navigate('/contact')}
              >
                Initiate Audit
              </Button>
            </Magnetic>
          </Reveal>
        </div>
      </AnimatedSectionWrapper>

      <Footer />
    </div>
  );
};

export default EcommerceServices;
