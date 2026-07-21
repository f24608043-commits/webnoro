import { useRef } from 'react';
import { Bot, Brain, Sparkles, MessageSquare, Zap, Shield } from 'lucide-react';
import { Reveal } from './animations/Reveal';
import { TiltCard } from './animations/TiltCard';
import { Magnetic } from './animations/Magnetic';
import { gsap, useGSAP } from '@/lib/gsap';
import AnimatedSectionWrapper from './AnimatedSectionWrapper';

const agentFeatures = [
  {
    icon: Bot,
    title: 'Custom AI Chatbots',
    description: 'Intelligent conversational agents tailored to your business needs and brand voice.'
  },
  {
    icon: Brain,
    title: 'Smart Automation',
    description: 'AI-powered workflows that learn and adapt to streamline your operations.'
  },
  {
    icon: MessageSquare,
    title: 'Natural Language Processing',
    description: 'Advanced NLP capabilities for understanding and responding to customer queries.'
  },
  {
    icon: Sparkles,
    title: 'Generative AI Solutions',
    description: 'Content generation, image creation, and creative AI tools for your projects.'
  },
  {
    icon: Zap,
    title: 'Real-time Intelligence',
    description: 'Instant insights and predictions powered by cutting-edge machine learning.'
  },
  {
    icon: Shield,
    title: 'Secure & Private',
    description: 'Enterprise-grade security with data privacy and compliance built-in.'
  }
];

export const AIAgents = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    if (headlineRef.current) {
      const text = headlineRef.current.innerText;
      headlineRef.current.innerHTML = text.split('').map(char =>
        `<span class="char-ai inline-block">${char === ' ' ? '&nbsp;' : char}</span>`
      ).join('');

      gsap.from(".char-ai", {
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
    <AnimatedSectionWrapper ref={sectionRef} id="ai-agents" className="py-32 bg-background relative overflow-hidden">
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary rounded-full blur-[140px] animate-float" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent rounded-full blur-[120px] animate-pulse" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-24 max-w-4xl mx-auto">
          <Reveal direction="down">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-primary/10 rounded-full text-primary font-bold text-sm mb-8 border border-primary/20 backdrop-blur-md uppercase tracking-widest">
              Neural Network Solutions
            </div>
          </Reveal>
          <h2 ref={headlineRef} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-black mb-8 text-foreground tracking-tighter uppercase italic leading-none">
            AI Agents
          </h2>
          <Reveal delay={0.3}>
            <p className="text-2xl text-muted-foreground font-medium font-serif italic max-w-3xl mx-auto leading-relaxed">
              Harness the power of artificial intelligence to transform your business operations with surgical precision.
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {agentFeatures.map((feature, index) => (
            <Reveal key={feature.title} delay={index * 0.1} direction="up">
              <TiltCard className="h-full">
                <div className="group bg-card/40 backdrop-blur-xl rounded-[3rem] p-10 border border-border/50 hover:border-primary/40 transition-all duration-500 hover:shadow-2xl h-full relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-[3rem] group-hover:bg-primary/10 transition-colors" />

                  <div className="relative mb-8">
                    <Magnetic strength={0.2}>
                      <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-glow">
                        <feature.icon className="text-black" size={28} />
                      </div>
                    </Magnetic>
                    <div className="absolute inset-0 w-16 h-16 rounded-2xl bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  <h3 className="text-2xl font-black text-foreground mb-4 tracking-tight italic font-serif leading-none group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed font-medium">
                    {feature.description}
                  </p>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </AnimatedSectionWrapper>
  );
};
