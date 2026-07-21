import { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { gsap, ScrollTrigger } from '@/lib/gsap';
import { Magnetic } from '@/components/animations/Magnetic';

interface CTASectionProps {
    title: string;
    subtitle: string;
    primaryCTA: { text: string; link: string };
    secondaryCTA?: { text: string; link: string };
}

export const CTASection = ({ title, subtitle, primaryCTA, secondaryCTA }: CTASectionProps) => {
    const navigate = useNavigate();
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        if (!sectionRef.current) return;

        const trigger = ScrollTrigger.create({
            trigger: sectionRef.current,
            start: 'top 85%',
            once: true,
            onEnter: () => {
                gsap.from(sectionRef.current, {
                    scale: 0.98,
                    opacity: 0,
                    duration: 0.6,
                    ease: 'power3.out'
                });
            }
        });

        return () => {
            trigger.kill();
        };
    }, []);

    return (
        <section ref={sectionRef} className="py-24 md:py-32 border-t border-border bg-gradient-to-br from-background via-zinc-950/30 to-background relative overflow-hidden">
            <div className="absolute inset-0 opacity-20 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-6 text-center max-w-4xl relative z-10">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black mb-6 text-foreground tracking-tighter uppercase italic">
                    {title}
                </h2>
                <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed font-serif italic">
                    {subtitle}
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <Magnetic strength={0.3}>
                        <Button
                            size="lg"
                            className="rounded-full px-12 py-8 text-xl font-black uppercase tracking-widest italic bg-primary text-black hover:bg-primary/90 transition-all shadow-2xl shadow-primary/30"
                            onClick={() => navigate(primaryCTA.link)}
                        >
                            {primaryCTA.text}
                        </Button>
                    </Magnetic>
                    {secondaryCTA && (
                        <Magnetic strength={0.2}>
                            <Button
                                size="lg"
                                variant="outline"
                                className="rounded-full px-12 py-8 text-xl font-bold border-2 border-primary/50 text-foreground hover:bg-primary/10 hover:border-primary transition-all"
                                onClick={() => navigate(secondaryCTA.link)}
                            >
                                {secondaryCTA.text}
                            </Button>
                        </Magnetic>
                    )}
                </div>
            </div>
        </section>
    );
};
