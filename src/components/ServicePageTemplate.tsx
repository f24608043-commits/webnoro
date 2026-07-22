import { useEffect } from 'react';
import { Navigation } from './Navigation';
import { Footer } from './Footer';
import { Button } from './ui/button';
import { ArrowLeft, CheckCircle, Wrench, Target, FileText } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { ServiceData } from '@/data/ecommerceServices';

interface ServicePageTemplateProps {
  service: ServiceData;
  ctaText?: string;
  backLink: string;
  backLabel: string;
}

export const ServicePageTemplate = ({ service, ctaText = 'Talk to an Expert', backLink, backLabel }: ServicePageTemplateProps) => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-transparent">
      <Navigation />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={service.image} alt={service.title} loading="lazy" className="w-full h-full object-cover opacity-15 dark:opacity-10" />
          <div className="absolute inset-0 bg-background/50" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <button onClick={() => navigate(backLink)} className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            {backLabel}
          </button>
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 text-foreground">{service.title}</h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl">{service.subtitle}</p>
            <Button size="lg" className="rounded-full px-10 py-6 text-lg font-semibold" onClick={() => navigate('/contact')}>
              {ctaText}
            </Button>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-20 bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-foreground">What This Service Is</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">{service.description}</p>
          </div>
        </div>
      </section>

      {/* Problems */}
      <section className="py-20 bg-secondary/10 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <Target className="w-8 h-8 text-primary" />
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">Problems We Solve</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {service.problems.map((problem, i) => (
                <div key={i} className="bg-card rounded-2xl p-6 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-destructive font-bold text-sm">{i + 1}</span>
                    </div>
                    <p className="text-foreground font-medium">{problem}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <CheckCircle className="w-8 h-8 text-primary" />
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">Features & Capabilities</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {service.features.map((feature, i) => (
                <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-primary/5 border border-primary/10">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-20 bg-secondary/10 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <FileText className="w-8 h-8 text-primary" />
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">What You Get</h2>
            </div>
            <div className="space-y-4">
              {service.deliverables.map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-5 bg-card rounded-2xl border border-border/50">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold">{i + 1}</span>
                  </div>
                  <span className="text-foreground font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="py-20 bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <Wrench className="w-8 h-8 text-primary" />
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">Tools & Platforms</h2>
            </div>
            <div className="flex flex-wrap gap-3">
              {service.tools.map((tool, i) => (
                <span key={i} className="px-5 py-3 rounded-full bg-card border border-border/50 text-foreground font-medium hover:border-primary/50 hover:shadow-md transition-all duration-300">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary/80 backdrop-blur-md">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 text-primary-foreground">Ready to Get Started?</h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve your goals with {service.title}.
          </p>
          <Button size="lg" variant="outline" className="rounded-full px-10 py-6 text-lg font-semibold border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" onClick={() => navigate('/contact')}>
            {ctaText}
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};
