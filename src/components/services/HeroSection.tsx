import { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { gsap } from '@/lib/gsap';

interface HeroSectionProps {
    badge: string;
    title: string;
    subtitle: string;
    ctaText: string;
    ctaLink: string;
}

export const HeroSection = ({ badge, title, subtitle, ctaText, ctaLink }: HeroSectionProps) => {
    const navigate = useNavigate();
    const heroRef = useRef<HTMLElement>(null);
    const badgeRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const subtitleRef = useRef<HTMLParagraphElement>(null);
    const ctaRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const elements = [badgeRef.current, titleRef.current, subtitleRef.current, ctaRef.current];

        gsap.from(elements, {
            y: 30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power3.out'
        });
    }, []);

    return (
        <section
            ref={heroRef}
            className="relative pt-48 pb-32 overflow-hidden"
        >
            {/* Background Layer */}
            <div className="absolute inset-0 opacity-[0.15] pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-[800px] h-[800px] bg-primary rounded-full blur-[160px] animate-float" />
                <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[140px] animate-pulse" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-5xl mx-auto text-center space-y-8">
                    <div ref={badgeRef} className="inline-flex items-center gap-3 px-6 py-3 bg-primary/10 rounded-full text-primary font-bold text-sm border border-primary/20 backdrop-blur-md uppercase tracking-widest">
                        {badge}
                    </div>

                    <h1 ref={titleRef} className="text-6xl md:text-8xl lg:text-9xl font-display font-black text-foreground tracking-tighter leading-[0.9] italic">
                        {title}
                    </h1>

                    <p ref={subtitleRef} className="text-xl md:text-2xl lg:text-3xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-medium">
                        {subtitle}
                    </p>

                    <div ref={ctaRef}>
                        <Button
                            size="lg"
                            className="rounded-full px-12 py-8 text-xl font-bold bg-primary text-black hover:bg-background transition-all shadow-2xl shadow-primary/30"
                            onClick={() => navigate(ctaLink)}
                        >
                            {ctaText}
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};
