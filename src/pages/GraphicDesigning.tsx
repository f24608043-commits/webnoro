import { useEffect, useRef } from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import {
    ArrowRight,
    Palette,
    Layers,
    Monitor,
    Package,
    Brush,
    Play,
    CheckCircle
} from 'lucide-react';
import { Reveal } from '@/components/animations/Reveal';
import { TiltCard } from '@/components/animations/TiltCard';
import { Magnetic } from '@/components/animations/Magnetic';
import { gsap, useGSAP } from '@/lib/gsap';
import AnimatedSectionWrapper from '@/components/AnimatedSectionWrapper';

const GraphicDesigning = () => {
    const navigate = useNavigate();
    const heroRef = useRef<HTMLElement>(null);
    const headlineRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => { window.scrollTo(0, 0); }, []);

    useGSAP(() => {
        if (headlineRef.current) {
            const text = headlineRef.current.innerText;
            headlineRef.current.innerHTML = text.split('').map(char =>
                `<span class="char-design-hero inline-block">${char === ' ' ? '&nbsp;' : char}</span>`
            ).join('');

            gsap.from(".char-design-hero", {
                y: 100,
                opacity: 0,
                stagger: 0.02,
                duration: 1.2,
                ease: "power4.out",
                delay: 0.2
            });
        }
    }, { scope: heroRef });

    const services = [
        { title: 'Brand Identity', description: 'Strategic logo design, color dynamics, and systems that define your market authority.', icon: Palette },
        { title: 'E-commerce Assets', description: 'Amazon A+ Content, storefront visuals, and high-conversion listing architectures.', icon: Layers },
        { title: 'Ad Performance', description: 'Social media ads and multi-channel display creatives engineered for click-through density.', icon: Monitor },
        { title: 'Tactical Packaging', description: 'High-end product packaging and unboxing experiences designed for brand tiering.', icon: Package },
        { title: 'Digital Artistry', description: 'Custom iconography, bespoke illustrations, and high-fidelity interface assets.', icon: Brush },
        { title: 'Motion Dynamics', description: 'Short-form promotional visuals and high-impact cinematic ad sequences.', icon: Play },
    ];

    const processSteps = [
        { title: 'Discovery', description: 'Understanding your brand values, target audience, and market positioning.' },
        { title: 'Direction', description: 'Creating initial design concepts and mood boards for your visual direction.' },
        { title: 'Synthesis', description: 'Bringing the chosen concepts to life with high-fidelity design work.' },
        { title: 'Optimization', description: 'Refining visuals based on performance goals and conversion best practices.' },
        { title: 'Deployment', description: 'Providing final files and a roadmap for multi-platform implementation.' },
    ];

    const whyChooseUs = [
        'Strategy-first design thinking',
        'Conversion-focused architecture',
        'Marketplace-optimized visuals',
        'Data-backed design testing',
        'Unified brand ecosystems',
    ];

    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            <Navigation />

            {/* Hero Section */}
            <AnimatedSectionWrapper ref={heroRef} className="pt-64 pb-32 hero-antigravity">
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <div className="absolute top-1/4 left-1/4 w-[800px] h-[800px] bg-primary rounded-full blur-[160px] animate-float" />
                    <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-accent rounded-full blur-[140px] animate-pulse" />
                </div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-7xl mx-auto text-center">
                        <Reveal direction="down">
                            <div className="inline-flex items-center gap-3 px-6 py-3 bg-primary/10 rounded-full text-primary font-bold text-sm mb-12 border border-primary/20 backdrop-blur-md uppercase tracking-widest">
                                Creative Supremacy
                            </div>
                        </Reveal>
                        <h1 ref={headlineRef} className="text-6xl md:text-8xl lg:text-9xl font-display font-black mb-12 text-foreground tracking-tighter leading-[0.9] uppercase italic max-w-5xl mx-auto text-center">
                            VISUALIZE
                        </h1>
                        <Reveal delay={0.6}>
                            <p className="text-2xl md:text-4xl text-muted-foreground max-w-5xl mx-auto mb-16 leading-relaxed font-medium italic font-serif">
                                We craft high-impact visual identities, performance-driven creatives, and conversion-focused designs that elevate your brand across digital ecosystems.
                            </p>
                        </Reveal>
                        <Reveal delay={0.8}>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                                <Magnetic strength={0.3}>
                                    <Button
                                        size="lg"
                                        className="rounded-full px-16 py-10 text-2xl font-black bg-primary text-black hover:bg-primary shadow-glow uppercase tracking-widest italic"
                                        onClick={() => navigate('/projects#digital-marketing-projects')}
                                    >
                                        The Showcase
                                    </Button>
                                </Magnetic>
                                <Magnetic strength={0.2}>
                                    <Button
                                        size="lg"
                                        variant="outline"
                                        className="rounded-full px-16 py-10 text-2xl font-black border-2 border-primary text-primary hover:bg-primary/10 uppercase tracking-widest italic"
                                        onClick={() => navigate('/contact')}
                                    >
                                        Request Audit
                                    </Button>
                                </Magnetic>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </AnimatedSectionWrapper>

            {/* Services Section */}
            <section className="py-32 bg-background/80 backdrop-blur-sm relative overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-28 max-w-4xl mx-auto">
                        <Reveal direction="down">
                            <div className="inline-flex items-center gap-3 px-6 py-3 bg-primary/10 rounded-full text-primary font-bold text-sm mb-8 border border-primary/20 backdrop-blur-md uppercase tracking-widest text-center">
                                Design Infrastructure
                            </div>
                        </Reveal>
                        <h2 className="text-5xl md:text-8xl font-display font-black mb-10 text-foreground tracking-tighter leading-none uppercase italic">Creative <span className="text-primary not-italic">Weaponry</span></h2>
                        <Reveal delay={0.25}>
                            <p className="text-2xl text-muted-foreground font-medium italic font-serif max-w-3xl mx-auto">
                                Comprehensive visual solutions to scale your brand authority and market presence.
                            </p>
                        </Reveal>
                    </div>

                    <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {services.map((service, index) => (
                            <Reveal key={index} delay={index * 0.1} direction="up">
                                <TiltCard className="h-full">
                                    <div className="group h-full bg-card/40 backdrop-blur-xl p-12 rounded-[3.5rem] border border-border/50 hover:border-primary/40 transition-all duration-500 hover:shadow-2xl cursor-pointer relative overflow-hidden">
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[5rem] group-hover:bg-primary/10 transition-colors" />
                                        <Magnetic strength={0.2}>
                                            <div className="w-24 h-24 rounded-3xl bg-primary flex items-center justify-center mb-12 shadow-glow group-hover:scale-110 group-hover:rotate-[15deg] transition-all duration-500">
                                                <service.icon className="text-black" size={40} />
                                            </div>
                                        </Magnetic>
                                        <h3 className="text-3xl font-black text-foreground mb-6 group-hover:text-primary transition-colors tracking-tight leading-none italic font-serif uppercase">{service.title}</h3>
                                        <p className="text-muted-foreground text-xl leading-relaxed font-medium">{service.description}</p>
                                    </div>
                                </TiltCard>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-48 bg-zinc-950/80 backdrop-blur-md relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent shadow-glow" />

                <div className="container mx-auto px-6">
                    <div className="text-center mb-32 max-w-4xl mx-auto">
                        <Reveal direction="down">
                            <h2 className="text-7xl md:text-8xl lg:text-[12rem] font-display font-black mb-10 text-white tracking-tighter leading-none uppercase italic text-center">The Visual <span className="text-primary not-italic">Pulse</span></h2>
                        </Reveal>
                        <Reveal delay={0.25}>
                            <p className="text-3xl text-white/60 font-medium italic font-serif leading-relaxed">
                                A clinical workflow to deliver consistent visual excellence at speed.
                            </p>
                        </Reveal>
                    </div>

                    <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-5 gap-8">
                        {processSteps.map((step, index) => (
                            <Reveal key={index} delay={index * 0.1} direction="up">
                                <div className="group bg-white/5 backdrop-blur-2xl rounded-[3rem] p-12 border border-white/10 hover:border-primary/50 transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl h-full relative overflow-hidden">
                                    <div className="text-9xl font-display font-black text-primary/5 absolute -top-5 -right-5 group-hover:text-primary/10 transition-all duration-700">
                                        {index + 1}
                                    </div>
                                    <div className="w-20 h-20 rounded-2xl bg-primary/20 flex items-center justify-center mb-12 group-hover:bg-primary transition-all duration-500 shadow-glow">
                                        <span className="text-4xl font-black text-primary group-hover:text-black italic">{index + 1}</span>
                                    </div>
                                    <h3 className="text-2xl font-black text-white mb-6 tracking-tight leading-none italic uppercase">{step.title}</h3>
                                    <p className="text-white/60 text-xl leading-relaxed font-medium">{step.description}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Us Section */}
            <section className="py-32 bg-background/80 backdrop-blur-sm relative overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-32 items-center">
                        <Reveal direction="left">
                            <div className="relative">
                                <div className="absolute -inset-10 bg-primary/10 rounded-full blur-[100px]" />
                                <h2 className="text-6xl md:text-8xl font-display font-black mb-12 text-foreground tracking-tighter leading-[0.9] uppercase italic">Why Nexa <br /><span className="text-primary not-italic">Design?</span></h2>
                                <p className="text-3xl text-muted-foreground font-medium leading-relaxed italic mb-10 font-serif">We don't just push pixels; we engineer growth through high-fidelity visual assets.</p>
                            </div>
                        </Reveal>
                        <div className="space-y-8">
                            {whyChooseUs.map((item, index) => (
                                <Reveal key={index} delay={index * 0.1} direction="right">
                                    <div className="flex items-center gap-8 p-10 bg-card/40 backdrop-blur-xl rounded-[2.5rem] border border-border/50 hover:border-primary/50 transition-all duration-500 group cursor-default relative overflow-hidden">
                                        <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-[2.5rem] group-hover:bg-primary/10 transition-colors" />
                                        <div className="p-4 bg-primary/20 rounded-full text-primary group-hover:bg-primary group-hover:text-black transition-all duration-500 shadow-glow">
                                            <CheckCircle className="w-10 h-10 flex-shrink-0" />
                                        </div>
                                        <span className="text-3xl text-foreground font-black tracking-tight italic uppercase">{item}</span>
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <AnimatedSectionWrapper className="py-48 bg-zinc-950/80 backdrop-blur-md">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent shadow-glow" />
                <div className="container mx-auto px-6 text-center relative z-10">
                    <Reveal direction="down">
                        <h2 className="text-7xl md:text-8xl lg:text-[12rem] font-display font-black mb-12 text-white tracking-tighter leading-none uppercase italic text-center">
                            Ready To <br /><span className="text-primary not-italic">Ascend?</span>
                        </h2>
                    </Reveal>
                    <Reveal delay={0.25}>
                        <p className="text-2xl md:text-4xl text-white/70 mb-20 max-w-5xl mx-auto leading-relaxed font-serif italic">
                            Let's create designs that don't just look good, but drive business growth with clinical precision.
                        </p>
                    </Reveal>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-12">
                        <Reveal delay={0.4} direction="up">
                            <Magnetic strength={0.3}>
                                <Button
                                    size="lg"
                                    className="rounded-full px-20 py-12 text-4xl font-black bg-primary text-black hover:bg-primary transition-all duration-500 shadow-glow uppercase tracking-tighter italic"
                                    onClick={() => navigate('/contact')}
                                >
                                    Engage Design
                                </Button>
                            </Magnetic>
                        </Reveal>
                        <Reveal delay={0.5} direction="up">
                            <Magnetic strength={0.2}>
                                <Button
                                    size="lg"
                                    variant="link"
                                    className="text-white/80 hover:text-primary transition-all duration-500 text-3xl font-black italic flex items-center gap-6 uppercase tracking-widest"
                                    onClick={() => navigate('/projects#digital-marketing-projects')}
                                >
                                    The Archive <ArrowRight className="w-12 h-12" />
                                </Button>
                            </Magnetic>
                        </Reveal>
                    </div>
                </div>
            </AnimatedSectionWrapper>

            {/* View All Projects Button */}
            <section className="py-20 bg-background/80 backdrop-blur-sm">
                <div className="container mx-auto px-6">
                    <div className="text-center">
                        <Reveal direction="up">
                            <Magnetic strength={0.2}>
                                <Button
                                    size="lg"
                                    className="rounded-full px-16 py-8 text-2xl font-black border-2 border-primary text-primary hover:bg-primary hover:text-black transition-all duration-500 shadow-2xl shadow-primary/30 uppercase tracking-widest italic"
                                    onClick={() => navigate('/projects#graphic-design-projects')}
                                >
                                    View All Projects <ArrowRight className="ml-4 w-8 h-8" />
                                </Button>
                            </Magnetic>
                        </Reveal>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default GraphicDesigning;
