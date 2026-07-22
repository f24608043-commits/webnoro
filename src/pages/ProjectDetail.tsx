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
        <div className="container mx-auto px-4 sm:px-6 py-16 sm:py-20 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Project Category Not Found</h1>
          <p className="text-muted-foreground mb-6 sm:mb-8 text-sm sm:text-base md:text-lg">The project category you're looking for doesn't exist.</p>
          <Button onClick={() => navigate('/projects')} className="text-sm sm:text-base">
            <ArrowLeft className="mr-1.5 sm:mr-2 h-3.5 w-3.5 sm:h-4 sm:w-4" />
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
      
      <article className="pt-6 sm:pt-8 md:pt-12 pb-12 sm:pb-16 md:pb-20">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          {/* Back Button */}
          <Button 
            variant="ghost" 
            onClick={() => navigate('/projects')}
            className="mb-4 sm:mb-6 text-sm sm:text-base"
          >
            <ArrowLeft className="mr-1.5 sm:mr-2 h-3.5 w-3.5 sm:h-4 sm:w-4" />
            Back to All Projects
          </Button>

          {/* Header */}
          <Reveal direction="down">
            <div className="mb-8 sm:mb-10 md:mb-12">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-display font-black mb-3 sm:mb-4 md:mb-6 tracking-tight italic">
                {title}
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-muted-foreground font-medium max-w-2xl italic font-serif">
                {description}
              </p>
            </div>
          </Reveal>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
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
            <div className="mt-12 sm:mt-16 md:mt-20 text-center p-6 sm:p-8 md:p-10 lg:p-12 bg-primary/5 rounded-xl sm:rounded-xl md:rounded-2xl border border-primary/20">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 md:mb-4">Ready to Start Your Project?</h2>
              <p className="text-muted-foreground mb-4 sm:mb-6 max-w-2xl mx-auto text-sm sm:text-base md:text-lg">
                Let's build something amazing together. Get in touch to discuss your project requirements.
              </p>
              <Button
                size="lg"
                onClick={() => navigate('/contact')}
                className="bg-primary text-black hover:bg-primary/90 text-sm sm:text-base md:text-lg"
              >
                Start Your Project
                <ExternalLink className="ml-1.5 sm:ml-2 h-3.5 w-3.5 sm:h-4 sm:w-4" />
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
