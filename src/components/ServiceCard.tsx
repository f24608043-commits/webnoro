import { LucideIcon } from 'lucide-react';
import { SkillsList } from './SkillsList';

interface Skill {
    name: string;
}

interface ServiceCardProps {
    title: string;
    description: string;
    strategicDescription?: string;
    keyCapabilities?: string[];
    basicSkills: Skill[];
    advancedSkills: Skill[];
    icon: LucideIcon;
}

export const ServiceCard = ({
    title,
    description,
    strategicDescription,
    keyCapabilities,
    basicSkills,
    advancedSkills,
    icon: Icon
}: ServiceCardProps) => {
    return (
        <div className="rounded-2xl border border-neutral-800 bg-neutral-900/50 backdrop-blur-sm p-8 transition-all duration-300 hover:scale-[1.02] flex flex-col h-full">
            <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">{title}</h3>
            </div>
            <p className="text-sm md:text-base text-neutral-300 mb-6 leading-relaxed">{description}</p>

            {strategicDescription && (
                <div className="mb-6 pb-6 border-b border-neutral-800">
                    <p className="text-sm md:text-base text-neutral-400 leading-relaxed italic">
                        {strategicDescription}
                    </p>
                </div>
            )}

            {keyCapabilities && keyCapabilities.length > 0 && (
                <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-3 text-white">Key Capabilities</h4>
                    <ul className="space-y-2">
                        {keyCapabilities.map((capability, index) => (
                            <li key={index} className="flex items-start gap-2 text-sm text-neutral-300">
                                <span className="text-primary mt-1 flex-shrink-0">•</span>
                                <span>{capability}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            <div className="flex-1 space-y-4">
                <SkillsList title="Basic Skills" skills={basicSkills} />
                <SkillsList title="Advanced Skills" skills={advancedSkills} variant="advanced" />
            </div>
        </div>
    );
};
