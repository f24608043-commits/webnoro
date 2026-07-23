import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Code2, Database, Globe, Cpu, Zap, Layers, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const technologies = [
  {
    name: 'React',
    description: 'Build modern, interactive user interfaces with component-based architecture',
    icon: <Code2 className="w-8 h-8" />,
    slug: 'react',
    category: 'Frontend'
  },
  {
    name: 'Next.js',
    description: 'Production-ready React framework with server-side rendering and static generation',
    icon: <Layers className="w-8 h-8" />,
    slug: 'nextjs',
    category: 'Frontend'
  },
  {
    name: 'Node.js',
    description: 'Scalable server-side JavaScript runtime for building fast network applications',
    icon: <Zap className="w-8 h-8" />,
    slug: 'nodejs',
    category: 'Backend'
  },
  {
    name: 'TypeScript',
    description: 'Type-safe JavaScript that scales for enterprise applications',
    icon: <Code2 className="w-8 h-8" />,
    slug: 'typescript',
    category: 'Languages'
  },
  {
    name: 'Shopify',
    description: 'Leading e-commerce platform for building online stores',
    icon: <Globe className="w-8 h-8" />,
    slug: 'shopify',
    category: 'E-commerce'
  },
  {
    name: 'WordPress',
    description: 'Flexible content management system for websites of all sizes',
    icon: <Globe className="w-8 h-8" />,
    slug: 'wordpress',
    category: 'CMS'
  },
  {
    name: 'MongoDB',
    description: 'NoSQL database for modern applications with flexible schemas',
    icon: <Database className="w-8 h-8" />,
    slug: 'mongodb',
    category: 'Database'
  },
  {
    name: 'PostgreSQL',
    description: 'Powerful open-source relational database with advanced features',
    icon: <Database className="w-8 h-8" />,
    slug: 'postgresql',
    category: 'Database'
  },
  {
    name: 'Supabase',
    description: 'Open-source Firebase alternative with PostgreSQL, auth, and real-time features',
    icon: <Database className="w-8 h-8" />,
    slug: 'supabase',
    category: 'Backend'
  },
  {
    name: 'OpenAI',
    description: 'Leading AI platform for building intelligent applications',
    icon: <Cpu className="w-8 h-8" />,
    slug: 'openai',
    category: 'AI'
  },
  {
    name: 'Google Gemini',
    description: 'Google\'s multimodal AI for advanced reasoning and content generation',
    icon: <Cpu className="w-8 h-8" />,
    slug: 'google-gemini',
    category: 'AI'
  }
];

const TechnologiesOverview = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Technologies We Use | Nexa Growth Solutions</title>
        <meta name="description" content="Discover the cutting-edge technologies Nexa Growth Solutions uses to build exceptional digital experiences. From React and Next.js to AI and cloud platforms." />
        <meta name="keywords" content="React, Next.js, Node.js, TypeScript, Shopify, WordPress, MongoDB, PostgreSQL, Supabase, OpenAI, Google Gemini, web development technologies" />
        <link rel="canonical" href="https://nexagrowth.com/technologies" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />

        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 sm:px-6">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-foreground">
                Technologies We <span className="text-primary">Master</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed">
                We leverage cutting-edge technologies to build scalable, performant, and innovative digital solutions that drive business growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" onClick={() => navigate('/contact')} className="rounded-full px-8 py-6">
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" onClick={() => navigate('/projects')} className="rounded-full px-8 py-6">
                  View Our Work
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Technologies Grid */}
        <section className="py-20 px-4 sm:px-6 bg-muted/30">
          <div className="container mx-auto max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {technologies.map((tech) => (
                <div
                  key={tech.slug}
                  onClick={() => navigate(`/technologies/${tech.slug}`)}
                  className="group bg-card border border-border rounded-2xl p-6 hover:border-primary/50 hover:shadow-lg transition-all duration-300 cursor-pointer text-center"
                >
                  <div className="flex flex-col items-center justify-center gap-4 mb-4">
                    <div className="p-3 bg-primary/10 rounded-xl text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      {tech.icon}
                    </div>
                    <div className="flex-1">
                      <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">{tech.category}</span>
                      <h3 className="text-xl font-semibold text-foreground mt-1">{tech.name}</h3>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">{tech.description}</p>
                  <div className="flex items-center text-primary font-medium group-hover:underline">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Our Tech Stack Matters */}
        <section className="py-20 px-4 sm:px-6">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
                Why Our Technology Choices Matter
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                We carefully select technologies that offer long-term stability, performance, and scalability for your business.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">10+</div>
                <div className="text-muted-foreground">Years of Combined Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <div className="text-muted-foreground">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">99%</div>
                <div className="text-muted-foreground">Client Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 bg-primary/10">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-foreground">
              Ready to Build with Modern Technologies?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's discuss how we can leverage the right tech stack to bring your vision to life.
            </p>
            <Button size="lg" onClick={() => navigate('/contact')} className="rounded-full px-10 py-6">
              Schedule a Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default TechnologiesOverview;
