import { ArrowUpRight, Crown } from 'lucide-react';
import { Reveal } from './animations/Reveal';
import { TiltCard } from './animations/TiltCard';
import { TeamMember, teamMembers } from '../data/projectsData';

const ceo = teamMembers.find((member) => member.role === 'Founder & CEO');
const leadershipTeam = teamMembers.filter((member) => member.role !== 'Founder & CEO');

const LeadershipCard = ({ member, index }: { member: TeamMember; index: number }) => (
  <Reveal direction="up" delay={index * 0.08}>
    <TiltCard className="h-full">
      <article className="group h-full overflow-hidden rounded-xl border border-border/60 bg-card/60 shadow-lg backdrop-blur-xl transition-colors duration-500 hover:border-primary/50 sm:rounded-2xl">
        <div className="relative aspect-[4/5] overflow-hidden bg-muted">
          <img
            src={member.image}
            alt={`${member.name}, ${member.role} at Nexa Growth`}
            className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-2.5 right-2.5 flex h-7 w-7 items-center justify-center rounded-full border border-white/20 bg-black/35 text-white backdrop-blur-md transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 sm:bottom-3 sm:right-3 sm:h-8 sm:w-8">
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </div>
        </div>

        <div className="p-3 sm:p-4 lg:p-5">
          <h3 className="font-display text-sm font-black leading-tight tracking-tight text-foreground sm:text-lg">
            {member.name}
          </h3>
          <p className="mt-1.5 text-[9px] font-black uppercase leading-relaxed tracking-[0.1em] text-primary sm:mt-2 sm:text-[11px] sm:tracking-[0.12em]">
            {member.role}
          </p>
          {member.bio && (
            <p className="mt-3 hidden text-xs leading-relaxed text-muted-foreground sm:block lg:text-sm">
              {member.bio}
            </p>
          )}
        </div>
      </article>
    </TiltCard>
  </Reveal>
);

export const AboutTeam = () => {
  if (!ceo) return null;

  return (
    <section className="relative overflow-hidden border-y border-border/40 bg-background py-16 sm:py-20 md:py-24 lg:py-32">
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/10 blur-[110px] md:h-[500px] md:w-[500px]" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        <Reveal direction="down">
          <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14 md:mb-16">
            <p className="mb-4 text-xs font-black uppercase tracking-[0.3em] text-primary sm:text-sm">
              The People Behind the Growth
            </p>
            <h2 className="font-display text-3xl font-black uppercase italic tracking-tight sm:text-4xl md:text-5xl lg:text-7xl">
              Meet Our <span className="text-primary not-italic">Team</span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base md:text-lg">
              Strategists, marketers, and engineers working together to turn ambitious ideas into measurable growth.
            </p>
          </div>
        </Reveal>

        <Reveal direction="up" delay={0.1}>
          <article className="mx-auto mb-12 grid max-w-6xl overflow-hidden rounded-[1.75rem] border border-primary/25 bg-card/70 shadow-2xl backdrop-blur-xl md:grid-cols-[0.9fr_1.1fr] lg:mb-16 lg:rounded-[2.5rem]">
            <div className="relative min-h-[360px] overflow-hidden bg-muted sm:min-h-[460px] md:min-h-[520px]">
              <img
                src={ceo.image}
                alt={`${ceo.name}, ${ceo.role} of Nexa Growth`}
                className="absolute inset-0 h-full w-full object-cover object-top"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-black/10" />
            </div>

            <div className="relative flex flex-col justify-center p-6 sm:p-9 md:p-10 lg:p-14 xl:p-16">
              <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />
              <div className="relative">
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-primary sm:text-xs">
                  <Crown className="h-4 w-4" aria-hidden="true" /> Executive Leadership
                </div>
                <h3 className="font-display text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
                  {ceo.name}
                </h3>
                <p className="mt-3 text-sm font-black uppercase tracking-[0.22em] text-primary sm:text-base">
                  {ceo.role}
                </p>
                <div className="my-6 h-px w-20 bg-primary/40 sm:my-8" />
                <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg lg:text-xl">
                  {ceo.bio}
                </p>
                <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                  Guiding Nexa Growth with a clear focus on client impact, sustainable scale, and a culture of disciplined execution.
                </p>
              </div>
            </div>
          </article>
        </Reveal>

        <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3 lg:gap-7">
          {leadershipTeam.map((member, index) => (
            <div
              key={member.id}
              className="h-full last:col-span-2 last:w-[calc(50%-0.375rem)] last:justify-self-center sm:last:w-[calc(50%-0.625rem)] lg:last:col-span-1 lg:last:w-auto"
            >
              <LeadershipCard member={member} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
