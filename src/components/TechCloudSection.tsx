import { useRef, useState, useEffect } from 'react';
import { IconCloudDemo } from './IconCloudDemo';
import { FallingText } from './FallingText';

const techCategories = [
  { label: 'REST API', highlighted: ['REST'] },
  { label: 'GraphQL', highlighted: ['GraphQL'] },
  { label: 'WebSockets', highlighted: ['WebSockets'] },
  { label: 'Microservices', highlighted: ['Microservices'] },
  { label: 'Serverless', highlighted: ['Serverless'] },
  { label: 'SSO', highlighted: ['SSO'] },
  { label: 'Web Performance', highlighted: ['Performance'] },
  { label: 'Accessibility', highlighted: ['Accessibility'] },
  { label: 'WebRTC', highlighted: ['WebRTC'] },
  { label: 'Service Workers', highlighted: ['Service'] },
];

export const TechCloudSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, {
      threshold: 0.2
    });
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className={`mt-24 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
      {/* Section Header */}
      <div className="text-center mb-8">
        <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-3">
          <span className="text-primary">Web</span> Technologies
        </h3>

        {/* Falling Tech Labels */}
        <div className="flex flex-wrap justify-center gap-3 mt-6 max-w-3xl mx-auto">
          {techCategories.map((tech, index) => (
            <div
              key={tech.label}
              className={`px-4 py-2 rounded-full border border-border/50 bg-background/50 backdrop-blur-sm shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <FallingText
                text={tech.label}
                highlightWords={tech.highlighted}
                trigger="hover"
                gravity={0.4}
                fontSize="0.875rem"
                className="text-foreground font-medium"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Icon Cloud Container */}
      <div className="relative max-w-3xl mx-auto">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 rounded-3xl" />
        <div className="relative rounded-3xl border border-border/50 bg-background/50 backdrop-blur-sm p-6 md:p-8">
          <IconCloudDemo />
        </div>
      </div>
    </div>
  );
};