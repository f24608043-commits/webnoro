import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Reveal } from '@/components/animations/Reveal';
import { ProjectCard } from '@/components/ProjectCard';
import {
  ecommerceProjects,
  digitalMarketingProjects,
  webDevelopmentProjects
} from '@/data/projectsData';

const ProjectDetail = () => {
  const { category } = useParams<{ category: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [category]);

  // Map URL-friendly category names to data arrays
  const categoryMap: Record<string, { title: string; description: string; projects: any[] }> = {
    'web-development-projects': {
      title: 'Web Development Projects',
      description: 'Modern Web Systems Built for Performance & Scalability',
      projects: webDevelopmentProjects
    },
    'ecommerce-projects': {
      title: 'E-commerce Projects',
      description: 'Marketplace Growth, Account Management & Performance Advertising',
      projects: ecommerceProjects
    },
    'digital-marketing-projects': {
      title: 'Digital Marketing Projects',
      description: 'Performance Campaigns, Social Media & Paid Advertising',
      projects: digitalMarketingProjects
    }
  };

  const categoryData = categoryMap[category || ''];

  if (!categoryData) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Project Category Not Found</h1>
          <p className="text-muted-foreground mb-8">The project category you're looking for doesn't exist.</p>
          <Button onClick={() => navigate('/projects')}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  const { title, description, projects } = categoryData;

  // SEO metadata
  const seoTitle = `${title} | Nexa Growth`;
  const seoDescription = description;
  const seoUrl = `https://nexagrowth.com/project/${category}`;

  return (
    <>
      <Helmet>
        <title>{seoTitle}</title>
        <meta name="description" content={seoDescription} />
        <link rel="canonical" href={seoUrl} />
        
        {/* Open Graph */}
        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={seoDescription} />
        <meta property="og:url" content={seoUrl} />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card */}
        <meta name="twitter:title" content={seoTitle} />
        <meta name="twitter:description" content={seoDescription} />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": title,
            "description": description,
            "url": seoUrl
          })}
        </script>
      </Helmet>

      <Navigation />
      
      <article className="pt-8 pb-16">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Back Button */}
          <Button 
            variant="ghost" 
            onClick={() => navigate('/projects')}
            className="mb-6"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to All Projects
          </Button>

          {/* Header */}
          <Reveal direction="down">
            <div className="mb-12">
              <h1 className="text-5xl md:text-7xl font-display font-black mb-6 tracking-tight italic">
                {title}
              </h1>
              <p className="text-2xl text-muted-foreground font-medium max-w-2xl italic font-serif">
                {description}
              </p>
            </div>
          </Reveal>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {projects.map((project, idx) => (
              <Reveal key={project.id} delay={idx * 0.1} direction="up">
                <ProjectCard 
                  project={project} 
                  onViewDetails={(project) => {
                    // For now, just open the modal - could be enhanced to individual project pages
                    window.open(project.liveLink, '_blank');
                  }}
                  showLiveDemo={category === 'web-development-projects'}
                />
              </Reveal>
            ))}
          </div>

          {/* CTA Section */}
          <Reveal direction="up" delay={0.4}>
            <div className="mt-20 text-center p-12 bg-primary/5 rounded-2xl border border-primary/20">
              <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Let's build something amazing together. Get in touch to discuss your project requirements.
              </p>
              <Button
                size="lg"
                onClick={() => navigate('/contact')}
                className="bg-primary text-black hover:bg-primary/90"
              >
                Start Your Project
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </Reveal>
        </div>
      </article>

      <Footer />
    </>
  );
};

export default ProjectDetail;
