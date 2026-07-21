import { Navigation } from '@/components/Navigation';
import { HeroGeometric } from '@/components/ui/shape-landing-hero';
import { Footer } from '@/components/Footer';
import { AIAgents } from '@/components/AIAgents';
import { WhoWeServe } from '@/components/WhoWeServe';
import { Skills } from '@/components/Skills';
import { TechStack } from '@/components/TechStack';
import { Contact } from '@/components/Contact';
import { Button } from '@/components/ui/button';
import { StickyFloatingCTA } from '@/components/StickyFloatingCTA';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { ShoppingCart, Megaphone, Globe, ArrowRight, Search, BarChart3, Rocket, Settings } from 'lucide-react';
import { Reveal } from '@/components/animations/Reveal';
import { TiltCard } from '@/components/animations/TiltCard';
import { Magnetic } from '@/components/animations/Magnetic';
import AnimatedSectionWrapper from '@/components/AnimatedSectionWrapper';

const Index = () => {
  const navigate = useNavigate();

  // SEO: Set page title and meta description
  useEffect(() => {
    document.title = "Nexa Growth | E-commerce & Digital Marketing Agency";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Scale your e-commerce business with Nexa Growth. Expert multi-marketplace management, digital marketing, and web development services.");
    }
  }, []);

  const whatWeDo = [
    { icon: ShoppingCart, title: 'eCommerce Growth Solutions (Amazon, eBay, Shopify Experts)', description: 'Full-service marketplace management including Amazon account management, eBay store optimization, Shopify development, product listing optimization, and global marketplace expansion.', link: '/ecommerce' },
    { icon: Megaphone, title: 'Digital Marketing & SEO', description: 'Performance marketing agency services: SEO, Google Ads, Facebook Ads, content marketing, social media, and paid advertising for maximum ROI.', link: '/digital-marketing' },
    { icon: Globe, title: 'Web Development & AI Automation', description: 'Custom web development, Shopify stores, UI/UX design, and AI automation for businesses. High-converting websites and scalable systems.', link: '/web-development' },
  ];

  const growthSteps = [
    { icon: Search, title: 'Audit', description: 'Deep-dive analysis of your current systems, market position, and growth opportunities.' },
    { icon: Settings, title: 'Build', description: 'Custom infrastructure, automation systems, and scalable frameworks tailored to your needs.' },
    { icon: Rocket, title: 'Scale', description: 'Strategic execution across marketplaces, marketing channels, and technology platforms.' },
    { icon: BarChart3, title: 'Optimize', description: 'Continuous data-driven refinement to maximize ROI and sustainable growth.' }
  ];

  const trustPoints = [
    { title: 'System-Driven Approach', description: 'We build scalable systems, not just one-off solutions.' },
    { title: 'Multi-Platform Expertise', description: 'From Amazon to TikTok, we dominate across all channels.' },
    { title: 'Conversion-Focused', description: 'Every design, every campaign, every line of code is optimized for results.' },
    { title: 'Transparent Reporting', description: 'Real-time dashboards and clear ROI metrics you can actually understand.' }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />
      {/* SEO H1 - Hidden visually but accessible to search engines */}
      <h1 className="sr-only">Nexa Growth - E-commerce & Digital Marketing Agency</h1>
      <HeroGeometric />

      {/* SEO Paragraph - Below Hero */}
      <section className="py-16 bg-background border-b border-border/20">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Nexa Growth is a full-service <strong className="text-foreground">eCommerce growth agency</strong> helping brands scale on platforms like Amazon, eBay, Walmart, and Shopify. We provide digital marketing and eCommerce growth services in Pakistan, UK, USA, and globally. Specializing in <strong className="text-foreground">SEO, Google Ads, paid ads, and AI-powered automation</strong> systems designed to increase conversions and maximize ROI.
          </p>
        </div>
      </section>

      {/* What We Do */}
      <AnimatedSectionWrapper className="py-32 bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-24 max-w-4xl mx-auto">
            <Reveal direction="down">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-primary/10 rounded-full text-primary font-bold text-sm mb-8 border border-primary/20 backdrop-blur-md uppercase tracking-widest">
                Our Core Services
              </div>
            </Reveal>
            <h2 className="text-[clamp(1.75rem,4vw,3.5rem)] font-display font-black mb-8 text-foreground tracking-tighter uppercase italic leading-none">
              Strategies
            </h2>
            <Reveal delay={0.3}>
              <p className="text-2xl text-muted-foreground font-medium font-serif italic max-w-2xl mx-auto leading-relaxed">
                We deploy multidisciplinary strategies to capture market authority and drive exponential growth.
              </p>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
            {whatWeDo.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.1} direction="up">
                <TiltCard className="h-full">
                  <div
                    onClick={() => navigate(item.link)}
                    className="group bg-card/40 backdrop-blur-xl rounded-[3rem] p-12 border border-border/50 hover:border-primary/40 transition-all duration-500 hover:shadow-2xl cursor-pointer h-full relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-[3rem] group-hover:bg-primary/10 transition-colors" />

                    <div className="relative mb-10">
                      <Magnetic strength={0.2}>
                        <div className="w-20 h-20 rounded-3xl bg-primary flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-glow">
                          <item.icon className="text-black" size={32} />
                        </div>
                      </Magnetic>
                    </div>

                    <h3 className="text-3xl font-black text-foreground mb-4 tracking-tight italic font-serif leading-none group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-lg leading-relaxed font-medium mb-8">
                      {item.description}
                    </p>

                    <Magnetic strength={0.1}>
                      <div className="flex items-center gap-3 text-primary font-black uppercase tracking-widest italic text-sm group-hover:gap-5 transition-all cursor-pointer" onClick={() => navigate(item.link)}>
                        Let's Scale This <ArrowRight className="w-5 h-5" />
                      </div>
                    </Magnetic>
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </AnimatedSectionWrapper>

      {/* Growth System Section */}
      <AnimatedSectionWrapper className="py-32 bg-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary rounded-full blur-[150px]" />
          <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-accent rounded-full blur-[150px]" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20 max-w-4xl mx-auto">
            <Reveal direction="down">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-primary/10 rounded-full text-primary font-bold text-sm mb-8 border border-primary/20 backdrop-blur-md uppercase tracking-widest">
                Our Process
              </div>
            </Reveal>
            <h2 className="text-[clamp(2rem,5vw,4rem)] font-display font-black mb-6 text-foreground tracking-tighter uppercase italic leading-none">
              Our Growth <span className="text-primary">System</span>
            </h2>
            <Reveal delay={0.2}>
              <p className="text-xl text-muted-foreground font-medium max-w-2xl mx-auto leading-relaxed">
                A proven 4-step framework to transform your business from idea to revenue.
              </p>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {growthSteps.map((step, index) => (
              <Reveal key={step.title} delay={index * 0.15} direction="up">
                <div className="group relative bg-card/50 backdrop-blur-sm rounded-3xl p-8 border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-xl h-full">
                  {/* Step Number */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-black font-black text-lg shadow-lg">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-black text-foreground mb-3 tracking-tight italic">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* CTA after Growth Steps */}
          <Reveal delay={0.6} className="text-center mt-16">
            <Magnetic strength={0.15}>
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-black font-black uppercase tracking-widest italic px-10 py-6 text-lg rounded-full shadow-glow transition-all"
                onClick={() => navigate('/contact')}
              >
                Start Your Growth System
              </Button>
            </Magnetic>
          </Reveal>
        </div>
      </AnimatedSectionWrapper>

      {/* Trust Section - Why Choose Us */}
      <AnimatedSectionWrapper className="py-32 bg-zinc-950/50 backdrop-blur-sm relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20 max-w-4xl mx-auto">
            <Reveal direction="down">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-primary/10 rounded-full text-primary font-bold text-sm mb-8 border border-primary/20 backdrop-blur-md uppercase tracking-widest">
                Why Choose Us
              </div>
            </Reveal>
            <h2 className="text-[clamp(2rem,5vw,4rem)] font-display font-black mb-6 text-foreground tracking-tighter uppercase italic leading-none">
              Built for <span className="text-primary">Results</span>
            </h2>
            <Reveal delay={0.2}>
              <p className="text-xl text-muted-foreground font-medium max-w-2xl mx-auto leading-relaxed">
                We're not just another agency. We're your growth partners.
              </p>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {trustPoints.map((point, index) => (
              <Reveal key={point.title} delay={index * 0.1} direction="up">
                <div className="group bg-card/40 backdrop-blur-sm rounded-2xl p-8 border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-lg">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-black text-foreground mb-2 tracking-tight italic">
                        {point.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {point.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </AnimatedSectionWrapper>

      {/* Insights & Growth Resources - SEO Backlink Content */}
      <AnimatedSectionWrapper className="py-24 bg-background relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <Reveal direction="down">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-primary/10 rounded-full text-primary font-bold text-sm mb-8 border border-primary/20 backdrop-blur-md uppercase tracking-widest">
                Insights & Growth Resources
              </div>
            </Reveal>
            <h2 className="text-[clamp(2rem,5vw,3rem)] font-display font-black mb-6 text-foreground tracking-tighter uppercase italic leading-none">
              Learn to <span className="text-primary">Scale</span>
            </h2>
            <Reveal delay={0.2}>
              <p className="text-xl text-muted-foreground font-medium max-w-2xl mx-auto leading-relaxed">
                Expert guides and strategies for eCommerce success
              </p>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Reveal delay={0.1} direction="up">
              <div 
                onClick={() => navigate('/blog/how-to-scale-ecommerce-amazon-shopify-2026')}
                className="group bg-card/40 backdrop-blur-sm rounded-2xl p-8 border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-lg cursor-pointer h-full"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <ShoppingCart className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-black text-foreground mb-3 tracking-tight italic group-hover:text-primary transition-colors">
                  How to Scale an eCommerce Brand on Amazon & Shopify in 2026
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  Complete guide to marketplace management, product optimization, and scaling your online store revenue.
                </p>
                <div className="flex items-center gap-2 text-primary font-bold text-sm mt-4 group-hover:gap-3 transition-all">
                  Read More <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2} direction="up">
              <div 
                onClick={() => navigate('/blog/digital-marketing-strategies-startups-pakistan')}
                className="group bg-card/40 backdrop-blur-sm rounded-2xl p-8 border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-lg cursor-pointer h-full"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <Megaphone className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-black text-foreground mb-3 tracking-tight italic group-hover:text-primary transition-colors">
                  Best Digital Marketing Strategies for Startups in Pakistan
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  Proven SEO, Google Ads, and social media tactics to grow your startup with limited budget.
                </p>
                <div className="flex items-center gap-2 text-primary font-bold text-sm mt-4 group-hover:gap-3 transition-all">
                  Read More <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.3} direction="up">
              <div 
                onClick={() => navigate('/blog/ai-automation-small-businesses-guide')}
                className="group bg-card/40 backdrop-blur-sm rounded-2xl p-8 border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-lg cursor-pointer h-full"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-black text-foreground mb-3 tracking-tight italic group-hover:text-primary transition-colors">
                  AI Automation for Small Businesses: Complete Guide
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  How to use AI tools to automate tasks, reduce costs, and scale operations efficiently.
                </p>
                <div className="flex items-center gap-2 text-primary font-bold text-sm mt-4 group-hover:gap-3 transition-all">
                  Read More <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.4} className="text-center mt-12">
            <button 
              onClick={() => navigate('/blog')}
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary/10 hover:bg-primary/20 rounded-full text-primary font-bold transition-all border border-primary/20"
            >
              View All Resources <ArrowRight className="w-5 h-5" />
            </button>
          </Reveal>
        </div>
      </AnimatedSectionWrapper>

      <WhoWeServe />
      <AIAgents />
      <Skills />
      <TechStack />

      {/* Final CTA Section */}
      <AnimatedSectionWrapper className="py-32 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,hsl(var(--primary)/0.2),transparent_70%)]" />
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,hsl(var(--accent)/0.15),transparent_70%)]" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <Reveal direction="down">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black mb-8 text-white tracking-tighter leading-tight uppercase italic">
              Ready to Grow <br /><span className="text-primary not-italic">Your Revenue?</span>
            </h2>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="text-2xl text-white/70 font-medium font-serif italic max-w-3xl mx-auto mb-16 leading-relaxed">
              Book a Free Strategy Call and get a custom growth plan for your business.
            </p>
          </Reveal>

          <Reveal delay={0.5}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Magnetic strength={0.2}>
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-black font-black uppercase tracking-widest italic px-12 py-8 text-xl rounded-full shadow-glow transition-all"
                  onClick={() => navigate('/contact')}
                >
                  Book Free Strategy Call
                </Button>
              </Magnetic>
              <Magnetic strength={0.2}>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-black font-black uppercase tracking-widest italic px-12 py-8 text-xl rounded-full transition-all backdrop-blur-md"
                  onClick={() => {
                    const message = encodeURIComponent("Hi, I want to scale my business. Can you guide me?");
                    window.open(`https://wa.me/923175533762?text=${message}`, '_blank');
                  }}
                >
                  Chat on WhatsApp
                </Button>
              </Magnetic>
            </div>
          </Reveal>
        </div>
      </AnimatedSectionWrapper>

      <StickyFloatingCTA />
      <Footer />
    </div>
  );
};

export default Index;
