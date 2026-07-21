interface Skill {
    name: string;
}

interface SkillsListProps {
    title: string;
    skills: Skill[];
    variant?: 'basic' | 'advanced';
}

export const SkillsList = ({ title, skills, variant = 'basic' }: SkillsListProps) => {
    const textColor = variant === 'basic' ? 'text-neutral-300' : 'text-neutral-400';

    return (
        <div className={variant === 'advanced' ? 'mt-6' : ''}>
            <h4 className="text-lg font-semibold mb-3 text-white">{title}</h4>
            <ul className={`space-y-2 text-sm ${textColor}`}>
                {skills.map((skill, index) => (
                    <li key={index} className="flex items-start gap-2">
                        <span className="text-primary mt-1 flex-shrink-0">•</span>
                        <span>{skill.name}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};
