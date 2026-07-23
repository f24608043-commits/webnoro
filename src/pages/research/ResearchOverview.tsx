import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { 
  Brain, 
  BookOpen, 
  Search, 
  TrendingUp,
  ArrowRight,
  FileText,
  Calendar,
  Clock
} from 'lucide-react';
import { motion } from 'framer-motion';

// Research categories
const researchCategories = [
  {
    id: 'ai-machine-learning',
    name: 'AI & Machine Learning',
    description: 'Research on artificial intelligence, deep learning, neural networks, and ML applications',
    icon: Brain,
    count: 15,
    color: 'from-blue-500 to-purple-600'
  },
  {
    id: 'software-engineering',
    name: 'Software Engineering',
    description: 'Studies on software quality, defect prediction, development methodologies, and best practices',
    icon: BookOpen,
    count: 12,
    color: 'from-green-500 to-teal-600'
  },
  {
    id: 'data-science',
    name: 'Data Science',
    description: 'Research on data analytics, visualization, statistical methods, and data mining',
    icon: TrendingUp,
    count: 8,
    color: 'from-orange-500 to-red-600'
  },
  {
    id: 'human-computer-interaction',
    name: 'Human-Computer Interaction',
    description: 'Studies on user experience, accessibility, interface design, and user behavior',
    icon: Search,
    count: 10,
    color: 'from-pink-500 to-rose-600'
  }
];

// Featured research papers
const featuredPapers = [
  {
    id: 1,
    title: "AI-Powered Adaptive Learning of Computer Skills for Individuals with Sensory and Physical Disabilities",
    category: "AI & Machine Learning",
    excerpt: "AI-powered adaptive learning systems improve computer science education accessibility for individuals with sensory and physical disabilities.",
    publishedDate: "2024-05-09",
    readTime: "15 min read",
    slug: "ai-adaptive-learning-disabilities"
  },
  {
    id: 2,
    title: "Automated Defect Prediction: Evaluating Machine Learning Models on Software Complexity Metrics",
    category: "Software Engineering",
    excerpt: "Software defect prediction is a critical discipline within software quality assurance, aiming to identify fault-prone modules before they reach production.",
    publishedDate: "2024-05-08",
    readTime: "12 min read",
    slug: "automated-defect-prediction"
  }
];

const ResearchOverview = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Research & Knowledge Center | Nexa Growth Solutions</title>
        <meta name="description" content="Explore our comprehensive research hub featuring AI, machine learning, software engineering, and data science studies. Access cutting-edge research papers and insights." />
        <meta name="keywords" content="research, AI, machine learning, software engineering, data science, knowledge center, academic papers" />
        <link rel="canonical" href="https://nexagrowth.com/research" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nexagrowth.com/research" />
        <meta property="og:title" content="Research & Knowledge Center | Nexa Growth Solutions" />
        <meta property="og:description" content="Explore our comprehensive research hub featuring AI, machine learning, software engineering, and data science studies." />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://nexagrowth.com/research" />
        <meta name="twitter:title" content="Research & Knowledge Center | Nexa Growth Solutions" />
        <meta name="twitter:description" content="Explore our comprehensive research hub featuring AI, machine learning, software engineering, and data science studies." />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Research & Knowledge Center",
            "description": "Explore our comprehensive research hub featuring AI, machine learning, software engineering, and data science studies.",
            "url": "https://nexagrowth.com/research",
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
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12 sm:mb-16 md:mb-20"
          >
            <div className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/10 text-primary text-xs sm:text-sm md:text-base font-medium mb-4 sm:mb-6">
              <BookOpen className="mr-1.5 sm:mr-2 h-3.5 w-3.5 sm:h-4 sm:w-4" />
              Knowledge Center
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 tracking-tight">
              Research & <span className="text-primary">Knowledge Hub</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto mb-6 sm:mb-8">
              Explore cutting-edge research papers, studies, and insights across AI, machine learning, software engineering, and data science. Our knowledge center provides in-depth analysis and practical applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Button size="lg" className="bg-primary text-black hover:bg-primary/90 text-sm sm:text-base md:text-lg">
                Browse All Research
                <ArrowRight className="ml-1.5 sm:ml-2 h-3.5 w-3.5 sm:h-4 sm:w-4" />
              </Button>
              <Button size="lg" variant="outline" className="text-sm sm:text-base md:text-lg">
                <FileText className="mr-1.5 sm:mr-2 h-3.5 w-3.5 sm:h-4 sm:w-4" />
                Latest Publications
              </Button>
            </div>
          </motion.div>

          {/* Research Categories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-12 sm:mb-16 md:mb-20"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8">Research Categories</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {researchCategories.map((category, idx) => {
                const Icon = category.icon;
                return (
                  <Link
                    key={category.id}
                    to={`/research/category/${category.id}`}
                    className="group"
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
                      className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all hover:shadow-lg"
                    >
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="font-semibold text-lg mb-2">{category.name}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{category.description}</p>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <FileText className="mr-1 h-3 w-3" />
                        {category.count} papers
                      </div>
                    </motion.div>
                  </Link>
                );
              })}
            </div>
          </motion.div>

          {/* Featured Research Papers */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-12 sm:mb-16 md:mb-20"
          >
            <div className="flex items-center justify-between mb-6 sm:mb-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Featured Research</h2>
              <Link to="/blog" className="text-primary hover:underline text-sm sm:text-base">
                View All Papers →
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {featuredPapers.map((paper, idx) => (
                <Link
                  key={paper.id}
                  to={`/blog/${paper.slug}`}
                  className="group"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + idx * 0.1 }}
                    className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all hover:shadow-lg"
                  >
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                      <Brain className="h-3 w-3" />
                      {paper.category}
                    </div>
                    <h3 className="font-semibold text-lg mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {paper.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                      {paper.excerpt}
                    </p>
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Stay Updated with Latest Research</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto text-sm sm:text-base md:text-lg">
              Subscribe to our research newsletter to receive the latest papers, insights, and industry trends directly in your inbox.
            </p>
            <Button size="lg" className="bg-primary text-black hover:bg-primary/90 text-sm sm:text-base md:text-lg">
              Subscribe to Newsletter
              <ArrowRight className="ml-1.5 sm:mr-2 h-3.5 w-3.5 sm:h-4 sm:w-4" />
            </Button>
          </motion.div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default ResearchOverview;
