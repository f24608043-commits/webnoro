import { useParams, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { 
  Clock, 
  User, 
  Calendar, 
  ArrowLeft, 
  Share2, 
  Twitter, 
  Linkedin, 
  MessageCircle,
  Link as LinkIcon,
  ChevronRight,
  BookOpen,
  Brain,
  Tag
} from 'lucide-react';
import { motion } from 'framer-motion';

// Import data from Blog.tsx
const researchPapers = [
  {
    id: 1,
    title: "AI-Powered Adaptive Learning of Computer Skills for Individuals with Sensory and Physical Disabilities",
    slug: "ai-adaptive-learning-disabilities",
    category: "Research Paper / AI / Inclusive Education",
    excerpt: "AI-powered adaptive learning systems improve computer science education accessibility for individuals with sensory and physical disabilities using machine learning, intelligent tutoring systems, multimodal interfaces, and assistive technologies.",
    featured_image: "https://res.cloudinary.com/dhffgjyra/image/upload/v1784660819/ChatGPT_Image_Jul_21_2026_11_56_29_PM_nmr1d7.png",
    author: "Nexa Growth Research Team",
    status: "published",
    tags: ["adaptive learning", "AI", "machine learning", "assistive technology", "CS education", "disability", "inclusive education", "intelligent tutoring systems"],
    read_time: "15 min read",
    focus_keyword: "AI Adaptive Learning",
    canonical_url: "/blog/ai-adaptive-learning-disabilities",
    scheduled_at: null,
    created_at: "2024-05-09T10:00:00Z",
    updated_at: "2024-05-09T10:00:00Z",
    content: {
      sections: [
        {
          id: "introduction",
          title: "Introduction",
          level: 1,
          content: "",
          subsections: [
            {
              id: "background",
              title: "Background",
              level: 2,
              content: "Computer science has become a foundational skill across industries, yet students with disabilities face significant access barriers. The World Health Organization (2023) estimates 1.3 billion people live with some form of disability, and NCES (2022) data show that disabled students enrol in STEM programmes. Traditional CS subjects assume full keyboard access, unimpaired vision, and audio visual learning assumptions that exclude large segments of learners. Adaptive learning systems that use ML to personalise content, and modality offer a technological path to addressing this exclusion."
            },
            {
              id: "problem-statement",
              title: "Problem Statement",
              level: 2,
              content: "Despite growing research activity, the field suffers from fragmentation. Studies target individual disability categories in isolation, use inconsistent evaluation metrics, and rely on small samples — often under 60 participants. Combined sensory disabilities (e.g., deaf-blindness) are almost entirely neglected. Long-term outcome data are virtually absent, making it impossible to distinguish systems that produce durable learning gains from those that inflate short-term scores."
            },
            {
              id: "research-objectives",
              title: "Research Objectives",
              level: 2,
              content: [
                "Map AI/ML methods used in adaptive CS learning platforms for disabled learners using IEEE dataset.",
                "Evaluate performance and impact of different AI approaches across disability categories and CS topics.",
                "Identify research gaps and propose a framework to guide future inclusive education research."
              ]
            },
            {
              id: "importance",
              title: "Importance of Study",
              level: 2,
              content: "This research sits at the intersection of social equity, workforce development, and scientific synthesis. The UN SDG 4 calls for inclusive quality education for all, and McKinsey (2023) projects a shortfall of over four million technology workers by 2030. Disabled individuals represent an untapped talent pool blocked primarily by educational access barriers."
            }
          ]
        },
        {
          id: "conclusion",
          title: "Conclusion",
          level: 1,
          content: "This paper synthesised 50 IEEE studies and 30 key references to evaluate the current state of AI powered adaptive CS learning for individuals with sensory and physical disabilities. The evidence base is technically innovative but fragmented: visual impairment and hearing impairment receive the most attention, LLMs and deep learning dominate recent methods, and performance scores average near 88% yet nearly all results are short-term and small-scale. Five research gaps — combined sensory disability neglect, absent studies, limited curriculum scope, and missing collaborative learning support — represent clear priorities for future work. The proposed five-component framework provides a conceptual structure for studies that address these gaps systematically."
        }
      ],
      references: [
        {
          authors: "Abebe, Y., & Morrow, J.",
          year: "2022",
          title: "Real-time sign language tutor for CS technical vocabulary",
          journal: "IEEE Transactions on Human-Machine Systems",
          doi: "https://doi.org/10.1109/THMS.2022.3190022"
        },
        {
          authors: "Ahmed, F., & Kowalski, P.",
          year: "2021",
          title: "Emotion-aware adaptive learning for learners with chronic pain",
          journal: "IEEE Transactions on Affective Computing",
          doi: "https://doi.org/10.1109/TAFFC.2021.3085643"
        },
        {
          authors: "Anderson, J. R., Boyle, C. F., & Reiser, B. J.",
          year: "1985",
          title: "Intelligent tutoring systems",
          journal: "Science",
          volume: "228",
          issue: "4698",
          pages: "456–462"
        }
      ]
    }
  },
  {
    id: 2,
    title: "Automated Defect Prediction: Evaluating Machine Learning Models on Software Complexity Metrics",
    slug: "automated-defect-prediction",
    category: "Research Paper / Software Engineering / Machine Learning",
    excerpt: "Software defect prediction is a critical discipline within software quality assurance, aiming to identify fault-prone modules before they reach production using ML models and complexity metrics.",
    featured_image: "https://res.cloudinary.com/dhffgjyra/image/upload/v1784660817/ChatGPT_Image_Jul_21_2026_11_56_34_PM_xh9esf.png",
    author: "Nexa Growth Research Team",
    status: "published",
    tags: ["defect prediction", "machine learning", "software quality", "complexity metrics", "software engineering", "ML models", "code analysis", "quality assurance"],
    read_time: "12 min read",
    focus_keyword: "Automated Defect Prediction",
    canonical_url: "/blog/automated-defect-prediction",
    scheduled_at: null,
    created_at: "2024-05-08T14:00:00Z",
    updated_at: "2024-05-08T14:00:00Z",
    content: {
      abstract: "Software defect prediction is a critical discipline within software quality assurance, aiming to identify fault-prone modules before they reach production. This report evaluates the application of machine learning (ML) models—including Naive Bayes, Decision Trees, Random Forests, Support Vector Machines, and deep learning techniques—on standard software complexity metrics derived from object-oriented and procedural codebases.",
      sections: [
        {
          id: "introduction",
          title: "1. Introduction",
          level: 1,
          content: "Software defect prediction is a critical discipline within software quality assurance, aiming to identify fault-prone modules before they reach production. This report evaluates the application of machine learning (ML) models on standard software complexity metrics derived from object-oriented and procedural codebases."
        }
      ],
      references: []
    }
  }
];

const blogPosts = [
  {
    id: 1,
    title: "5 Skills You Need to Stay Relevant in 2026",
    slug: "5-skills-relevant-2026",
    category: "Career Development / Future Skills",
    excerpt: "The workplace is changing faster than ever. AI, remote work, and digital transformation are rewriting the rules of success. Here are 5 essential skills you should invest in right now.",
    featured_image: "https://res.cloudinary.com/dhffgjyra/image/upload/v1784660817/ChatGPT_Image_Jul_22_2026_12_04_51_AM_lpsopu.png",
    author: "Nexa Growth Team",
    status: "published",
    tags: ["career development", "future skills", "AI literacy", "emotional intelligence", "adaptability", "critical thinking", "personal branding"],
    read_time: "5 min read",
    focus_keyword: "Career Skills 2026",
    canonical_url: "/blog/5-skills-relevant-2026",
    scheduled_at: null,
    created_at: "2024-05-12T10:00:00Z",
    updated_at: "2024-05-12T10:00:00Z",
    content: `
# 5 Skills You Need to Stay Relevant in 2026

The workplace is changing faster than ever. AI, remote work, and digital transformation are rewriting the rules of success. Here are 5 essential skills you should invest in right now.

## 1. AI Literacy

Understanding how to work with AI tools is no longer optional. From ChatGPT to specialized AI assistants, you need to know how to leverage these tools effectively.

## 2. Emotional Intelligence

As AI handles more technical tasks, human skills become more valuable. Emotional intelligence, empathy, and communication are increasingly important.

## 3. Adaptability

The ability to learn new skills quickly and adapt to change is crucial. The half-life of learned skills is shrinking dramatically.

## 4. Critical Thinking

With information overload, the ability to analyze, evaluate, and make sound decisions is more important than ever.

## 5. Personal Branding

Building a strong personal brand helps you stand out in a crowded marketplace. Your online presence matters more than ever.
    `
  }
];

const BlogDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  // Find the content by slug
  const researchPaper = researchPapers.find(p => p.slug === slug);
  const blogPost = blogPosts.find(p => p.slug === slug);
  const content = researchPaper || blogPost;
  const isResearch = !!researchPaper;

  if (!content) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Content Not Found</h1>
          <p className="text-muted-foreground mb-8">The article you're looking for doesn't exist.</p>
          <Button onClick={() => navigate('/blog')}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const renderContent = () => {
    if (isResearch && researchPaper) {
      return (
        <div className="space-y-8">
          {researchPaper.content.abstract && (
            <div className="bg-muted/50 p-6 rounded-lg border-l-4 border-primary">
              <h3 className="font-semibold mb-2 flex items-center">
                <BookOpen className="mr-2 h-5 w-5" />
                Abstract
              </h3>
              <p className="text-muted-foreground">{researchPaper.content.abstract}</p>
            </div>
          )}
          
          {researchPaper.content.sections.map((section) => (
            <div key={section.id} className="space-y-4">
              {section.level === 1 && (
                <h2 className="text-3xl font-bold text-foreground">{section.title}</h2>
              )}
              {section.level === 2 && (
                <h3 className="text-2xl font-semibold text-foreground">{section.title}</h3>
              )}
              {section.level === 3 && (
                <h4 className="text-xl font-medium text-foreground">{section.title}</h4>
              )}
              
              {typeof section.content === 'string' && section.content && (
                <p className="text-muted-foreground leading-relaxed">{section.content}</p>
              )}
              
              {Array.isArray(section.content) && section.content.length > 0 && (
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  {section.content.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              )}
              
              {section.subsections && section.subsections.map((subsection) => (
                <div key={subsection.id} className="ml-6 space-y-3">
                  <h4 className="text-xl font-semibold text-foreground">{subsection.title}</h4>
                  {typeof subsection.content === 'string' && (
                    <p className="text-muted-foreground leading-relaxed">{subsection.content}</p>
                  )}
                  {Array.isArray(subsection.content) && (
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      {subsection.content.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          ))}
          
          {researchPaper.content.references && researchPaper.content.references.length > 0 && (
            <div className="border-t pt-8">
              <h3 className="text-2xl font-bold mb-4">References</h3>
              <div className="space-y-4">
                {researchPaper.content.references.map((ref, idx) => (
                  <div key={idx} className="text-sm text-muted-foreground">
                    <p className="font-medium text-foreground">{ref.authors} ({ref.year}). {ref.title}.</p>
                    <p><em>{ref.journal}</em>{ref.volume && `, ${ref.volume}`}{ref.issue && `(${ref.issue})`}{ref.pages && `, ${ref.pages}`}.</p>
                    {ref.doi && (
                      <a href={ref.doi} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                        {ref.doi}
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      );
    }
    
    // Blog post content (markdown-like)
    if (blogPost) {
      return (
        <div className="prose prose-lg max-w-none">
          {blogPost.content.split('\n').map((line, idx) => {
            if (line.startsWith('# ')) {
              return <h1 key={idx} className="text-4xl font-bold mb-4">{line.replace('# ', '')}</h1>;
            }
            if (line.startsWith('## ')) {
              return <h2 key={idx} className="text-3xl font-semibold mb-3">{line.replace('## ', '')}</h2>;
            }
            if (line.startsWith('### ')) {
              return <h3 key={idx} className="text-2xl font-medium mb-2">{line.replace('### ', '')}</h3>;
            }
            if (line.trim() === '') {
              return <br key={idx} />;
            }
            return <p key={idx} className="text-muted-foreground leading-relaxed mb-4">{line}</p>;
          })}
        </div>
      );
    }
    
    return null;
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{content.title} | Nexa Growth</title>
        <meta name="description" content={content.excerpt} />
        <meta name="keywords" content={content.tags.join(', ')} />
        <link rel="canonical" href={`https://nexagrowth.com${content.canonical_url}`} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://nexagrowth.com${content.canonical_url}`} />
        <meta property="og:title" content={content.title} />
        <meta property="og:description" content={content.excerpt} />
        <meta property="og:image" content={content.featured_image} />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={`https://nexagrowth.com${content.canonical_url}`} />
        <meta name="twitter:title" content={content.title} />
        <meta name="twitter:description" content={content.excerpt} />
        <meta name="twitter:image" content={content.featured_image} />
        
        {/* Structured Data for SEO */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": isResearch ? "ScholarlyArticle" : "BlogPosting",
            "headline": content.title,
            "description": content.excerpt,
            "image": content.featured_image,
            "author": {
              "@type": "Organization",
              "name": content.author
            },
            "datePublished": content.created_at,
            "dateModified": content.updated_at,
            "keywords": content.tags.join(', '),
            "url": `https://nexagrowth.com${content.canonical_url}`
          })}
        </script>
      </Helmet>

      <Navigation />
      
      <article className="pt-8 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Back Button */}
          <Button 
            variant="ghost" 
            onClick={() => navigate('/blog')}
            className="mb-6"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Button>

          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <Calendar className="h-4 w-4" />
              <time>{formatDate(content.created_at)}</time>
              <span className="mx-2">•</span>
              <Clock className="h-4 w-4" />
              <span>{content.read_time}</span>
              <span className="mx-2">•</span>
              <User className="h-4 w-4" />
              <span>{content.author}</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              {content.title}
            </h1>

            <div className="flex flex-wrap items-center gap-2 mb-6">
              {isResearch && (
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  <Brain className="mr-1 h-3 w-3" />
                  Research Paper
                </span>
              )}
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-muted text-muted-foreground text-sm">
                {content.category}
              </span>
            </div>

            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
              {content.excerpt}
            </p>

            {/* Featured Image */}
            <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-8">
              <img
                src={content.featured_image}
                alt={content.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {content.tags.map((tag) => (
                <span key={tag} className="inline-flex items-center px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm">
                  <Tag className="mr-1 h-3 w-3" />
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="prose prose-lg max-w-none"
          >
            {renderContent()}
          </motion.div>

          {/* Share Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="border-t mt-12 pt-8"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold mb-2">Share this article</h3>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(content.title)}&url=${encodeURIComponent(`https://nexagrowth.com${content.canonical_url}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Twitter className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://nexagrowth.com${content.canonical_url}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => {
                      navigator.clipboard.writeText(`https://nexagrowth.com${content.canonical_url}`);
                    }}
                  >
                    <LinkIcon className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Related Articles */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="border-t mt-12 pt-8"
          >
            <h3 className="text-2xl font-bold mb-6">Related Articles</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {isResearch ? (
                blogPosts.slice(0, 2).map((post) => (
                  <Link
                    key={post.id}
                    to={`/blog/${post.slug}`}
                    className="block p-4 rounded-lg border hover:bg-muted/50 transition-colors"
                  >
                    <h4 className="font-semibold mb-2">{post.title}</h4>
                    <p className="text-sm text-muted-foreground line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center mt-2 text-xs text-muted-foreground">
                      <ChevronRight className="h-3 w-3" />
                      Read more
                    </div>
                  </Link>
                ))
              ) : (
                researchPapers.slice(0, 2).map((paper) => (
                  <Link
                    key={paper.id}
                    to={`/blog/${paper.slug}`}
                    className="block p-4 rounded-lg border hover:bg-muted/50 transition-colors"
                  >
                    <h4 className="font-semibold mb-2">{paper.title}</h4>
                    <p className="text-sm text-muted-foreground line-clamp-2">{paper.excerpt}</p>
                    <div className="flex items-center mt-2 text-xs text-muted-foreground">
                      <ChevronRight className="h-3 w-3" />
                      Read more
                    </div>
                  </Link>
                ))
              )}
            </div>
          </motion.div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default BlogDetail;
