import { useEffect, useRef, useState } from 'react';
const processSteps = [{
  number: '01',
  title: 'Discover',
  description: 'We dive deep into your goals, audience, and challenges to build a solid strategic foundation for the project.'
}, {
  number: '02',
  title: 'Design',
  description: 'Our creative team designs a stunning, user-friendly interface that brings your vision to life through wireframes and mockups.'
}, {
  number: '03',
  title: 'Develop',
  description: 'Our developers write clean, efficient code to build a fast, secure, and scalable website or application.'
}, {
  number: '04',
  title: 'Launch',
  description: 'After rigorous testing and quality assurance, we deploy your project to the world and monitor its performance.'
}];
export const Process = () => {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          processSteps.forEach((_, index) => {
            setTimeout(() => {
              setVisibleSteps(prev => [...new Set([...prev, index])]);
            }, index * 200);
          });
        }
      });
    }, {
      threshold: 0.2
    });
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);
  return <section id="process" ref={sectionRef} className="py-20 bg-gradient-to-b from-white to-secondary/20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            How We Build Magic
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">The process that ensures your project is delivered on time, on budget, and exceeds your expectations</p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Flowing Path SVG */}
          <svg className="absolute inset-0 w-full h-full -z-10" viewBox="0 0 800 1000" preserveAspectRatio="none">
            <path d="M 100 100 Q 400 150 600 250 T 200 450 Q 500 550 600 700 T 200 900" fill="none" stroke="hsl(var(--primary))" strokeWidth="3" strokeDasharray="10,10" opacity="0.3" className="animate-[dash_20s_linear_infinite]" />
          </svg>

          <div className="space-y-12">
            {processSteps.map((step, index) => <div key={step.number} className={`relative transition-all duration-700 ${visibleSteps.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${index % 2 === 0 ? 'ml-0 md:ml-0' : 'ml-0 md:ml-auto md:mr-0'}`} style={{
            maxWidth: '500px',
            transitionDelay: `${index * 100}ms`
          }}>
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-primary/10">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center flex-shrink-0 shadow-lg shadow-primary/30">
                      <span className="text-2xl font-bold text-white">{step.number}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-3 text-foreground">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};