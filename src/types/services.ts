import { LucideIcon } from 'lucide-react';

export interface Service {
    id: string;
    title: string;
    description: string;
    strategicDescription: string;
    keyCapabilities: string[];
    basicSkills: string[];
    advancedSkills: string[];
    accentColor: string;
    icon: LucideIcon;
    viewMoreLink?: string;
}

export interface Skill {
    name: string;
}
