import { useRef, useEffect } from 'react';
import { LucideIcon, ArrowRight } from 'lucide-react';
import { gsap, ScrollTrigger } from '@/lib/gsap';
import { Button } from '@/components/ui/button';
import { SkillGroup } from './SkillGroup';
import { useNavigate } from 'react-router-dom';

interface ServiceSectionProps {
    title: string;
    description: string;
    strategicDescription: string;
    keyCapabilities: string[];
    basicSkills: string[];
    advancedSkills: string[];
    icon: LucideIcon;
    reverse?: boolean;
    viewMoreLink?: string;
}

export const ServiceSection = ({
    title,
    description,
    strategicDescription,
    keyCapabilities,
    basicSkills,
    advancedSkills,
    icon: Icon,
    reverse = false,
    viewMoreLink
}: ServiceSectionProps) => {
    const navigate = useNavigate();
    const sectionRef = useRef<HTMLElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const skillsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!sectionRef.current) return;

        const isMobile = window.innerWidth < 768;
        const stagger = isMobile ? 0.1 : 0.15;
        const duration = isMobile ? 0.6 : 0.8;

        const trigger = ScrollTrigger.create({
            trigger: sectionRef.current,
            start: 'top 85%',
            once: true,
            onEnter: () => {
                if (contentRef.current) {
                    gsap.from(contentRef.current.children, {
                        y: 40,
                        opacity: 0,
                        duration,
                        stagger,
                        ease: 'power3.out'
                    });
                }
                if (skillsRef.current) {
                    gsap.from(skillsRef.current.children, {
                        y: 40,
                        opacity: 0,
                        duration,
                        stagger,
                        ease: 'power3.out',
                        delay: 0.2
                    });
                }
            }
        });

        return () => {
            trigger.kill();
        };
    }, []);

    const TextContent = () => (
        <div ref={contentRef} className="space-y-6">
            <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Icon className="w-7 h-7 text-primary" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">{title}</h2>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">{description}</p>
            <p className="text-base text-muted-foreground/70 leading-relaxed italic border-l-2 border-primary/50 pl-4">
                {strategicDescription}
            </p>
            <div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">Key Capabilities</h3>
                <ul className="space-y-3">
                    {keyCapabilities.map((capability, index) => (
                        <li key={index} className="flex items-start gap-3">
                            <span className="text-primary mt-1.5 flex-shrink-0">✓</span>
                            <span className="text-foreground">{capability}</span>
                        </li>
                    ))}
                </ul>
            </div>
            {viewMoreLink && (
                <div className="pt-4">
                    <Button
                        variant="outline"
                        className="rounded-full px-6 py-3 font-semibold border-primary text-primary hover:bg-primary hover:text-foreground transition-all duration-300"
                        onClick={() => window.location.href = viewMoreLink}
                    >
                        View More
                    </Button>
                </div>
            )}
        </div>
    );

    const SkillsContent = () => (
        <div ref={skillsRef} className="space-y-6">
            <SkillGroup 
                title="Skills" 
                skills={[...basicSkills, ...advancedSkills]} 
                variant="combined" 
            />
        </div>
    );

    return (
        <section ref={sectionRef} className="py-16 md:py-24">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="max-w-7xl mx-auto">
                    {/* Mobile: Stack */}
                    <div className="flex flex-col gap-12 md:hidden">
                        <TextContent />
                        <SkillsContent />
                    </div>

                    {/* Desktop: Alternating Grid */}
                    <div className="hidden md:grid md:grid-cols-2 gap-16 items-start">
                        {reverse ? (
                            <>
                                <SkillsContent />
                                <TextContent />
                            </>
                        ) : (
                            <>
                                <TextContent />
                                <SkillsContent />
                            </>
                        )}
                    </div>

                    {/* CTA Block after each service */}
                    <div className="mt-16 pt-12 border-t border-border/50">
                        <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-border/50 text-center max-w-4xl mx-auto">
                            <h3 className="text-2xl md:text-3xl font-black text-foreground mb-4 tracking-tight italic">
                                Want us to implement this for your business?
                            </h3>
                            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                                Let's discuss how our {title.toLowerCase()} expertise can drive growth for your specific needs.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button
                                    className="rounded-full px-8 py-4 font-black uppercase tracking-widest bg-primary text-black hover:bg-primary/90 transition-all"
                                    onClick={() => navigate('/contact')}
                                >
                                    Book Free Strategy Call
                                </Button>
                                <Button
                                    variant="outline"
                                    className="rounded-full px-8 py-4 font-semibold border-primary text-primary hover:bg-primary hover:text-foreground transition-all"
                                    onClick={() => navigate('/contact')}
                                >
                                    Discuss This Service <ArrowRight className="w-4 h-4 ml-2" />
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
