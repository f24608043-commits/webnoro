import { useRef } from 'react';
import { Code2, Database, Cloud, Smartphone, Shield, Globe, GitBranch, Film } from 'lucide-react';
import { FallingText } from './FallingText';
import { Reveal } from './animations/Reveal';
import { TiltCard } from './animations/TiltCard';
import { Magnetic } from './animations/Magnetic';
import { gsap, useGSAP } from '@/lib/gsap';
import AnimatedSectionWrapper from './AnimatedSectionWrapper';

const skillCategories = [
  {
    icon: Code2,
    title: 'Frontend Development',
    highlightWords: ['Frontend'],
    skills: ['React', 'Vue.js', 'Angular', 'Next.js', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'SASS']
  },
  {
    icon: Database,
    title: 'Backend Development',
    highlightWords: ['Backend'],
    skills: ['Node.js', 'Python', 'Java', 'PHP', 'Ruby', 'Express', 'Django', 'Spring Boot', 'FastAPI']
  },
  {
    icon: Database,
    title: 'Databases',
    highlightWords: ['Databases'],
    skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Supabase', 'Firebase', 'DynamoDB', 'GraphQL']
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    highlightWords: ['Cloud', 'DevOps'],
    skills: ['AWS', 'Google Cloud', 'Azure', 'Docker', 'Kubernetes', 'CI/CD', 'GitHub Actions', 'Vercel']
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    highlightWords: ['Mobile'],
    skills: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Ionic', 'PWA', 'Expo', 'iOS', 'Android']
  },
  {
    icon: Shield,
    title: 'Security & Testing',
    highlightWords: ['Security', 'Testing'],
    skills: ['OAuth', 'JWT', 'SSL/TLS', 'Jest', 'Cypress', 'Selenium', 'Unit Testing', 'Pentesting']
  },
  {
    icon: Globe,
    title: 'Web Technologies',
    highlightWords: ['Web'],
    skills: ['REST API', 'GraphQL', 'WebSockets', 'Microservices', 'Serverless', 'SEO', 'WebRTC']
  },
  {
    icon: GitBranch,
    title: 'Tools & Platforms',
    highlightWords: ['Tools', 'Platforms'],
    skills: ['Git', 'VS Code', 'Postman', 'Jira', 'Slack', 'Figma', 'Adobe XD', 'Vite', 'npm']
  },
  {
    icon: Film,
    title: 'Video Editing & Creation',
    highlightWords: ['Video', 'Creation'],
    skills: ['Storyboarding', 'Motion Graphics', 'Color Grading', 'Sound Design', 'Premiere Pro', 'After Effects']
  },
];

export const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    if (headlineRef.current) {
      const text = headlineRef.current.innerText;
      headlineRef.current.innerHTML = text.split('').map(char =>
        `<span class="char-skills inline-block">${char === ' ' ? '&nbsp;' : char}</span>`
      ).join('');

      gsap.from(".char-skills", {
        y: 50,
        opacity: 0,
        stagger: 0.02,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: headlineRef.current,
          start: "top 85%",
        }
      });
    }
  }, { scope: sectionRef });

  return (
    <AnimatedSectionWrapper ref={sectionRef} id="skills" className="py-32 bg-background relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-24 max-w-4xl mx-auto">
          <Reveal direction="down">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-primary/10 rounded-full text-primary font-bold text-sm mb-8 border border-primary/20 backdrop-blur-md uppercase tracking-widest">
              Technological Arsenal
            </div>
          </Reveal>
          <h2 ref={headlineRef} className="text-[clamp(1.75rem,4vw,3.5rem)] font-display font-black mb-8 text-foreground tracking-tighter uppercase italic leading-none">
            tools
          </h2>
          <Reveal delay={0.3}>
            <p className="text-2xl text-muted-foreground font-medium font-serif italic max-w-3xl mx-auto leading-relaxed">
              Deploying enterprise-grade technologies and clinical workflows to engineer digital dominance.
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {skillCategories.map((category, index) => (
            <Reveal key={index} delay={index * 0.1} direction="up">
              <TiltCard className="h-full">
                <div className="group bg-card/40 backdrop-blur-xl rounded-[3rem] p-10 border border-border/50 hover:border-primary/40 transition-all duration-500 hover:shadow-2xl h-full relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-[3rem] group-hover:bg-primary/10 transition-colors" />

                  <div className="space-y-8">
                    <div className="flex items-center gap-6">
                      <Magnetic strength={0.2}>
                        <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-glow">
                          <category.icon className="text-black" size={28} />
                        </div>
                      </Magnetic>
                      <div className="flex-1">
                        <FallingText
                          text={category.title}
                          highlightWords={category.highlightWords}
                          trigger="hover"
                          gravity={0.5}
                          fontSize="1.75rem"
                          className="font-display font-black text-foreground italic tracking-tight leading-none uppercase"
                        />
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="inline-flex items-center justify-center px-5 py-2.5 bg-secondary/10 border border-border/50 rounded-full text-sm font-black tracking-tight uppercase italic hover:bg-primary hover:text-black hover:border-primary transition-all duration-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </AnimatedSectionWrapper>
  );
};

