import { useRef, useEffect } from 'react';
import { gsap } from '@/lib/gsap';

interface SkillGroupProps {
    title: string;
    skills: string[];
    variant?: 'basic' | 'advanced' | 'combined';
}

export const SkillGroup = ({ title, skills, variant = 'basic' }: SkillGroupProps) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const textColor = variant === 'basic' ? 'text-muted-foreground' : variant === 'advanced' ? 'text-muted-foreground/70' : 'text-muted-foreground';

    return (
        <div
            ref={cardRef}
            className="rounded-2xl border border-border bg-card/50 backdrop-blur-sm p-6 
                 hover:-translate-y-0.5 transition-transform duration-300 
                 border-l-2 border-l-primary/50"
        >
            <h4 className="text-lg font-semibold mb-4 text-foreground">{title}</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {skills.map((skill, index) => (
                    <div key={index} className="flex items-start gap-2">
                        <span className="text-primary mt-1 flex-shrink-0">•</span>
                        <span className={`text-sm ${textColor}`}>{skill}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};
