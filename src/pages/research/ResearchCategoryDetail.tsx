import { useParams, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { 
  ArrowLeft,
  Brain,
  BookOpen,
  TrendingUp,
  Search,
  FileText,
  Calendar,
  Clock,
  Tag,
  Filter
} from 'lucide-react';
import { motion } from 'framer-motion';

// Research category data
const categoryData: Record<string, {
  name: string;
  description: string;
  icon: any;
  color: string;
  papers: Array<{
    id: number;
    title: string;
    excerpt: string;
    publishedDate: string;
    readTime: string;
    slug: string;
    tags: string[];
  }>;
}> = {
  'ai-machine-learning': {
    name: 'AI & Machine Learning',
    description: 'Research on artificial intelligence, deep learning, neural networks, and ML applications in various domains.',
    icon: Brain,
    color: 'from-blue-500 to-purple-600',
    papers: [
      {
        id: 1,
        title: "AI-Powered Adaptive Learning of Computer Skills for Individuals with Sensory and Physical Disabilities",
        excerpt: "AI-powered adaptive learning systems improve computer science education accessibility for individuals with sensory and physical disabilities using machine learning, intelligent tutoring systems, multimodal interfaces, and assistive technologies.",
        publishedDate: "2024-05-09",
        readTime: "15 min read",
        slug: "ai-adaptive-learning-disabilities",
        tags: ["adaptive learning", "AI", "machine learning", "assistive technology"]
      }
    ]
  },
  'software-engineering': {
    name: 'Software Engineering',
    description: 'Studies on software quality, defect prediction, development methodologies, and best practices in software development.',
    icon: BookOpen,
    color: 'from-green-500 to-teal-600',
    papers: [
      {
        id: 2,
        title: "Automated Defect Prediction: Evaluating Machine Learning Models on Software Complexity Metrics",
        excerpt: "Software defect prediction is a critical discipline within software quality assurance, aiming to identify fault-prone modules before they reach production using ML models and complexity metrics.",
        publishedDate: "2024-05-08",
        readTime: "12 min read",
        slug: "automated-defect-prediction",
        tags: ["defect prediction", "machine learning", "software quality", "complexity metrics"]
      }
    ]
  },
  'data-science': {
    name: 'Data Science',
    description: 'Research on data analytics, visualization, statistical methods, and data mining techniques.',
    icon: TrendingUp,
    color: 'from-orange-500 to-red-600',
    papers: []
  },
  'human-computer-interaction': {
    name: 'Human-Computer Interaction',
    description: 'Studies on user experience, accessibility, interface design, and user behavior analysis.',
    icon: Search,
    color: 'from-pink-500 to-rose-600',
    papers: []
  }
};

const ResearchCategoryDetail = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const navigate = useNavigate();
  
  const category = categoryData[categoryId || ''];

  if (!category) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 sm:px-6 py-16 sm:py-20 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Category Not Found</h1>
          <p className="text-muted-foreground mb-6 sm:mb-8 text-sm sm:text-base md:text-lg">The research category you're looking for doesn't exist.</p>
          <Button onClick={() => navigate('/research')} className="text-sm sm:text-base">
            <ArrowLeft className="mr-1.5 sm:mr-2 h-3.5 w-3.5 sm:h-4 sm:w-4" />
            Back to Research
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  const Icon = category.icon;
  const seoTitle = `${category.name} Research | Nexa Growth`;
  const seoDescription = category.description;

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{seoTitle}</title>
        <meta name="description" content={seoDescription} />
        <meta name="keywords" content={`${category.name}, research, academic papers, studies, Nexa Growth`} />
        <link rel="canonical" href={`https://nexagrowth.com/research/category/${categoryId}`} />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://nexagrowth.com/research/category/${categoryId}`} />
        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={seoDescription} />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={`https://nexagrowth.com/research/category/${categoryId}`} />
        <meta name="twitter:title" content={seoTitle} />
        <meta name="twitter:description" content={seoDescription} />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": category.name,
            "description": seoDescription,
            "url": `https://nexagrowth.com/research/category/${categoryId}`,
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
          {/* Back Button */}
          <Button 
            variant="ghost" 
            onClick={() => navigate('/research')}
            className="mb-4 sm:mb-6 text-sm sm:text-base"
          >
            <ArrowLeft className="mr-1.5 sm:mr-2 h-3.5 w-3.5 sm:h-4 sm:w-4" />
            Back to Research
          </Button>

          {/* Category Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 sm:mb-10 md:mb-12"
          >
            <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-6`}>
              <Icon className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">{category.name}</h1>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl">{category.description}</p>
          </motion.div>

          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-6 sm:mb-8 flex flex-wrap items-center gap-2"
          >
            <Button variant="outline" size="sm" className="text-sm">
              <Filter className="mr-1.5 h-3 w-3" />
              All Papers
            </Button>
            <Button variant="ghost" size="sm" className="text-sm text-muted-foreground">
              Recent
            </Button>
            <Button variant="ghost" size="sm" className="text-sm text-muted-foreground">
              Most Cited
            </Button>
          </motion.div>

          {/* Papers Grid */}
          {category.papers.length > 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid grid-cols-1 gap-6 sm:gap-8"
            >
              {category.papers.map((paper, idx) => (
                <Link
                  key={paper.id}
                  to={`/blog/${paper.slug}`}
                  className="group"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
                    className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all hover:shadow-lg"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                          <FileText className="h-3 w-3" />
                          Research Paper
                        </div>
                        <h3 className="font-semibold text-lg sm:text-xl mb-3 group-hover:text-primary transition-colors">
                          {paper.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                          {paper.excerpt}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {paper.tags.map((tag) => (
                            <span key={tag} className="inline-flex items-center px-2 py-1 rounded-full bg-secondary text-secondary-foreground text-xs">
                              <Tag className="mr-1 h-2.5 w-2.5" />
                              {tag}
                            </span>
                          ))}
                        </div>
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <div className="flex items-center">
                            <Calendar className="mr-1 h-3 w-3" />
                            {new Date(paper.publishedDate).toLocaleDateString()}
                          </div>
                          <div className="flex items-center">
                            <Clock className="mr-1 h-3 w-3" />
                            {paper.readTime}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center py-12 sm:py-16"
            >
              <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl sm:text-2xl font-semibold mb-2">No Papers Yet</h3>
              <p className="text-muted-foreground mb-6 text-sm sm:text-base">
                Research papers in this category are coming soon. Check back later for updates.
              </p>
              <Button onClick={() => navigate('/research')} variant="outline" className="text-sm sm:text-base">
                Browse Other Categories
              </Button>
            </motion.div>
          )}

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 sm:mt-16 bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8 sm:p-12 text-center border border-primary/20"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">Contribute to Our Research</h2>
            <p className="text-muted-foreground mb-4 sm:mb-6 max-w-2xl mx-auto text-sm sm:text-base md:text-lg">
              Are you a researcher or academic interested in collaborating? We welcome partnerships and contributions to our knowledge center.
            </p>
            <Button size="lg" className="bg-primary text-black hover:bg-primary/90 text-sm sm:text-base md:text-lg">
              Get in Touch
            </Button>
          </motion.div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default ResearchCategoryDetail;
