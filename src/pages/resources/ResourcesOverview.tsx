import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Breadcrumb } from '@/components/Breadcrumb';
import { 
  BookOpen, 
  FileText, 
  CheckSquare, 
  LayoutTemplate, 
  Download,
  ArrowRight,
  Filter,
  Search,
  Star,
  Clock,
  Users
} from 'lucide-react';
import { motion } from 'framer-motion';

// Resource types
const resourceTypes = [
  {
    id: 'guides',
    name: 'Guides',
    description: 'Comprehensive guides covering best practices, strategies, and implementation steps',
    icon: BookOpen,
    count: 12,
    color: 'from-blue-500 to-cyan-600'
  },
  {
    id: 'playbooks',
    name: 'Playbooks',
    description: 'Step-by-step action plans for specific business scenarios and challenges',
    icon: FileText,
    count: 8,
    color: 'from-purple-500 to-pink-600'
  },
  {
    id: 'checklists',
    name: 'Checklists',
    description: 'Practical checklists to ensure nothing is missed in your processes',
    icon: CheckSquare,
    count: 15,
    color: 'from-green-500 to-emerald-600'
  },
  {
    id: 'templates',
    name: 'Templates',
    description: 'Ready-to-use templates for documents, presentations, and workflows',
    icon: LayoutTemplate,
    count: 20,
    color: 'from-orange-500 to-red-600'
  },
  {
    id: 'whitepapers',
    name: 'Whitepapers',
    description: 'In-depth research papers and industry analysis reports',
    icon: FileText,
    count: 6,
    color: 'from-indigo-500 to-purple-600'
  },
  {
    id: 'ebooks',
    name: 'E-Books',
    description: 'Comprehensive digital books on various topics and strategies',
    icon: BookOpen,
    count: 4,
    color: 'from-rose-500 to-orange-600'
  }
];

// Featured resources
const featuredResources = [
  {
    id: 1,
    title: "E-commerce Growth Playbook 2024",
    type: "Playbook",
    category: "E-commerce",
    description: "A comprehensive playbook for scaling your e-commerce business across multiple marketplaces.",
    downloadCount: 2340,
    rating: 4.8,
    readTime: "25 min",
    slug: "ecommerce-growth-playbook-2024"
  },
  {
    id: 2,
    title: "SEO Audit Checklist",
    type: "Checklist",
    category: "SEO",
    description: "Complete checklist for conducting thorough SEO audits on any website.",
    downloadCount: 1890,
    rating: 4.9,
    readTime: "15 min",
    slug: "seo-audit-checklist"
  },
  {
    id: 3,
    title: "Website Launch Template Pack",
    type: "Template",
    category: "Web Development",
    description: "Essential templates for planning, executing, and launching successful websites.",
    downloadCount: 1560,
    rating: 4.7,
    readTime: "20 min",
    slug: "website-launch-template-pack"
  }
];

const ResourcesOverview = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Resource Center | Nexa Growth Solutions</title>
        <meta name="description" content="Access free guides, playbooks, checklists, templates, whitepapers, and e-books to grow your business. Expert resources on e-commerce, SEO, web development, and digital marketing." />
        <meta name="keywords" content="resources, guides, playbooks, checklists, templates, whitepapers, e-books, e-commerce, SEO, web development" />
        <link rel="canonical" href="https://nexagrowth.com/resources" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nexagrowth.com/resources" />
        <meta property="og:title" content="Resource Center | Nexa Growth Solutions" />
        <meta property="og:description" content="Access free guides, playbooks, checklists, templates, whitepapers, and e-books to grow your business." />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://nexagrowth.com/resources" />
        <meta name="twitter:title" content="Resource Center | Nexa Growth Solutions" />
        <meta name="twitter:description" content="Access free guides, playbooks, checklists, templates, whitepapers, and e-books to grow your business." />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Resource Center",
            "description": "Access free guides, playbooks, checklists, templates, whitepapers, and e-books to grow your business.",
            "url": "https://nexagrowth.com/resources",
            "publisher": {
              "@type": "Organization",
              "name": "Nexa Growth Solutions"
            }
          })}
        </script>
      </Helmet>

      <Navigation />
      
      <article className="pt-6 sm:pt-8 md:pt-12 pb-12 sm:pb-16 md:pb-20">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          {/* Breadcrumb */}
          <div className="mb-6 sm:mb-8">
            <Breadcrumb items={[{ name: 'Resources', path: '/resources' }]} />
          </div>

          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12 sm:mb-16 md:mb-20"
          >
            <div className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/10 text-primary text-xs sm:text-sm md:text-base font-medium mb-4 sm:mb-6">
              <BookOpen className="mr-1.5 sm:mr-2 h-3.5 w-3.5 sm:h-4 sm:w-4" />
              Free Resources
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 tracking-tight">
              Resource <span className="text-primary">Center</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto mb-6 sm:mb-8">
              Access our comprehensive library of guides, playbooks, checklists, templates, whitepapers, and e-books. Everything you need to accelerate your business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Button size="lg" className="bg-primary text-black hover:bg-primary/90 text-sm sm:text-base md:text-lg">
                Browse All Resources
                <ArrowRight className="ml-1.5 sm:ml-2 h-3.5 w-3.5 sm:h-4 sm:w-4" />
              </Button>
              <Button size="lg" variant="outline" className="text-sm sm:text-base md:text-lg">
                <Download className="mr-1.5 sm:mr-2 h-3.5 w-3.5 sm:h-4 sm:w-4" />
                Most Popular
              </Button>
            </div>
          </motion.div>

          {/* Search and Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-8 sm:mb-12"
          >
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search resources..."
                  className="w-full pl-10 sm:pl-12 pr-4 py-2 sm:py-3 rounded-lg border border-border bg-background text-foreground text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <Button variant="outline" size="lg" className="text-sm sm:text-base">
                <Filter className="mr-1.5 sm:mr-2 h-3.5 w-3.5 sm:h-4 sm:w-4" />
                Filters
              </Button>
            </div>
          </motion.div>

          {/* Resource Types */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-12 sm:mb-16 md:mb-20"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8">Resource Types</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {resourceTypes.map((type, idx) => {
                const Icon = type.icon;
                return (
                  <Link
                    key={type.id}
                    to={`/resources/${type.id}`}
                    className="group"
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
                      className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all hover:shadow-lg text-center"
                    >
                      <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${type.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                        <Icon className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                      </div>
                      <h3 className="font-semibold text-lg sm:text-xl mb-2">{type.name}</h3>
                      <p className="text-sm sm:text-base text-muted-foreground mb-4">{type.description}</p>
                      <div className="flex items-center justify-center text-xs sm:text-sm text-muted-foreground">
                        <FileText className="mr-1 h-3 w-3 sm:h-4 sm:w-4" />
                        {type.count} resources
                      </div>
                    </motion.div>
                  </Link>
                );
              })}
            </div>
          </motion.div>

          {/* Featured Resources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-12 sm:mb-16 md:mb-20"
          >
            <div className="flex items-center justify-between mb-6 sm:mb-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Featured Resources</h2>
              <Link to="/resources/all" className="text-primary hover:underline text-sm sm:text-base">
                View All →
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {featuredResources.map((resource, idx) => (
                <Link
                  key={resource.id}
                  to={`/resources/${resource.type.toLowerCase()}/${resource.slug}`}
                  className="group"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + idx * 0.1 }}
                    className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all hover:shadow-lg"
                  >
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                      <FileText className="h-3 w-3" />
                      {resource.type}
                    </div>
                    <h3 className="font-semibold text-lg sm:text-xl mb-3 group-hover:text-primary transition-colors">
                      {resource.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                      {resource.description}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                      <div className="flex items-center">
                        <Download className="mr-1 h-3 w-3" />
                        {resource.downloadCount.toLocaleString()}
                      </div>
                      <div className="flex items-center">
                        <Star className="mr-1 h-3 w-3 fill-yellow-400 text-yellow-400" />
                        {resource.rating}
                      </div>
                      <div className="flex items-center">
                        <Clock className="mr-1 h-3 w-3" />
                        {resource.readTime}
                      </div>
                    </div>
                    <div className="flex items-center text-primary font-medium group-hover:underline">
                      Download Free <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8 sm:p-12 text-center border border-primary/20"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Get Custom Resources</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto text-sm sm:text-base md:text-lg">
              Need tailored resources for your specific business needs? Contact us for custom guides, templates, and strategies.
            </p>
            <Button size="lg" className="bg-primary text-black hover:bg-primary/90 text-sm sm:text-base md:text-lg">
              Request Custom Resources
              <ArrowRight className="ml-1.5 sm:ml-2 h-3.5 w-3.5 sm:h-4 sm:w-4" />
            </Button>
          </motion.div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default ResourcesOverview;
