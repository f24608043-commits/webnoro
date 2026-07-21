import { TeamMember } from '../data/projectsData';
import { cn } from '@/lib/utils';
import { TiltCard } from './animations/TiltCard';
import { Reveal } from './animations/Reveal';

interface TeamMemberProps {
  member: TeamMember;
  index: number;
}

export const TeamMemberCard = ({ member, index }: TeamMemberProps) => {
  return (
    <Reveal direction="up" delay={index * 0.1}>
      <TiltCard>
        <div className="group relative h-full">
          <div className="bg-card/40 backdrop-blur-xl rounded-[2rem] md:rounded-[3rem] p-4 md:p-8 border border-border/50 hover:border-primary/50 transition-all duration-500 shadow-2xl relative overflow-hidden h-full flex flex-col items-center text-center">
            {/* Background gradient */}
            <div className="absolute top-0 right-0 w-20 h-20 md:w-32 md:h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-all duration-700" />
            
            {/* Image - Square instead of circular */}
            <div className="relative w-32 h-32 md:w-48 md:h-48 mb-4 md:mb-6 rounded-2xl overflow-hidden border-3 md:border-4 border-border/30 group-hover:border-primary/50 transition-all duration-500 shadow-xl">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
            </div>
            
            {/* Name */}
            <h3 className="text-lg md:text-2xl font-display font-black mb-1 md:mb-2 text-foreground tracking-tight group-hover:text-primary transition-colors duration-300">
              {member.name}
            </h3>
            
            {/* Role */}
            <p className="text-xs md:text-lg font-semibold text-primary mb-2 md:mb-4 uppercase tracking-wide">
              {member.role}
            </p>
            
            {/* Bio */}
            {member.bio && (
              <p className="text-xs md:text-base text-muted-foreground leading-relaxed">
                {member.bio}
              </p>
            )}
            
            {/* Decorative line */}
            <div className="mt-4 md:mt-6 h-1 w-12 md:w-16 bg-primary/30 group-hover:w-full transition-all duration-700" />
          </div>
        </div>
      </TiltCard>
    </Reveal>
  );
};
