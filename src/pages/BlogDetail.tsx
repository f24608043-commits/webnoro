import { useParams, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Breadcrumb } from '@/components/Breadcrumb';
import { FAQ } from '@/components/FAQ';
import { InternationalSEO } from '@/components/InternationalSEO';
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
  Tag,
  List,
  HelpCircle,
  ArrowUp
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

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
  const [activeSection, setActiveSection] = useState('');
  const [showBackToTop, setShowBackToTop] = useState(false);
  
  // Find the content by slug
  const researchPaper = researchPapers.find(p => p.slug === slug);
  const blogPost = blogPosts.find(p => p.slug === slug);
  const content = researchPaper || blogPost;
  const isResearch = !!researchPaper;

  // Generate table of contents
  const generateTableOfContents = () => {
    const toc = [];
    if (isResearch && researchPaper) {
      researchPaper.content.sections.forEach(section => {
        toc.push({ id: section.id, title: section.title, level: section.level });
        if (section.subsections) {
          section.subsections.forEach(sub => {
            toc.push({ id: sub.id, title: sub.title, level: sub.level });
          });
        }
      });
    } else if (blogPost) {
      const lines = blogPost.content.split('\n');
      lines.forEach((line, idx) => {
        if (line.startsWith('# ')) {
          toc.push({ id: `h1-${idx}`, title: line.replace('# ', ''), level: 1 });
        } else if (line.startsWith('## ')) {
          toc.push({ id: `h2-${idx}`, title: line.replace('## ', ''), level: 2 });
        } else if (line.startsWith('### ')) {
          toc.push({ id: `h3-${idx}`, title: line.replace('### ', ''), level: 3 });
        }
      });
    }
    return toc;
  };

  const tableOfContents = generateTableOfContents();

  // FAQ data based on content
  const generateFAQs = () => {
    if (isResearch && researchPaper) {
      const firstSection = researchPaper.content.sections[0];
      const firstSubsectionContent = firstSection && 'subsections' in firstSection && firstSection.subsections?.[0]?.content;
      
      return [
        {
          question: "What is the main focus of this research?",
          answer: typeof firstSubsectionContent === 'string' ? firstSubsectionContent : "This research focuses on understanding and improving accessibility in computer science education."
        },
        {
          question: "What methodologies were used?",
          answer: "This study used systematic literature review and analysis of IEEE datasets to evaluate AI/ML approaches."
        },
        {
          question: "What are the key findings?",
          answer: researchPaper.content.sections.find(s => s.title === "Conclusion")?.content || "The research identifies key gaps and proposes frameworks for future inclusive education work."
        }
      ];
    } else if (blogPost) {
      return [
        {
          question: "Why are these skills important?",
          answer: "These skills are essential for staying competitive in a rapidly changing workplace driven by AI and digital transformation."
        },
        {
          question: "How can I develop these skills?",
          answer: "Start with online courses, practice regularly, and seek opportunities to apply these skills in real-world scenarios."
        },
        {
          question: "What's the timeline for skill development?",
          answer: "Skill development is ongoing. Focus on continuous learning and adapt to new technologies as they emerge."
        }
      ];
    }
    return [];
  };

  const faqs = generateFAQs();

  // Scroll to section
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  // Handle scroll for back to top button and active section
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
      
      // Update active section based on scroll position
      const sections = tableOfContents.map(toc => document.getElementById(toc.id));
      const scrollPosition = window.scrollY + 100;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(tableOfContents[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [tableOfContents]);

  if (!content) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 sm:px-6 py-16 sm:py-20 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Content Not Found</h1>
          <p className="text-muted-foreground mb-6 sm:mb-8 text-sm sm:text-base md:text-lg">The article you're looking for doesn't exist.</p>
          <Button onClick={() => navigate('/blog')} className="text-sm sm:text-base">
            <ArrowLeft className="mr-1.5 sm:mr-2 h-3.5 w-3.5 sm:h-4 sm:w-4" />
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
        <div className="space-y-6 sm:space-y-8">
          {researchPaper.content.abstract && (
            <div className="bg-muted/50 p-4 sm:p-6 rounded-lg border-l-4 border-primary">
              <h3 className="font-semibold mb-2 flex items-center text-sm sm:text-base md:text-lg">
                <BookOpen className="mr-1.5 sm:mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Abstract
              </h3>
              <p className="text-muted-foreground text-sm sm:text-base md:text-lg">{researchPaper.content.abstract}</p>
            </div>
          )}
          
          {researchPaper.content.sections.map((section) => (
            <div key={section.id} className="space-y-3 sm:space-y-4">
              {section.level === 1 && (
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">{section.title}</h2>
              )}
              {section.level === 2 && (
                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-foreground">{section.title}</h3>
              )}
              {section.level === 3 && (
                <h4 className="text-lg sm:text-xl md:text-2xl font-medium text-foreground">{section.title}</h4>
              )}
              
              {typeof section.content === 'string' && section.content && (
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base md:text-lg">{section.content}</p>
              )}
              
              {Array.isArray(section.content) && section.content.length > 0 && (
                <ul className="list-disc list-inside space-y-1.5 sm:space-y-2 text-muted-foreground text-sm sm:text-base md:text-lg">
                  {section.content.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              )}
              
              {section.subsections && section.subsections.map((subsection) => (
                <div key={subsection.id} className="ml-4 sm:ml-6 space-y-2 sm:space-y-3">
                  <h4 className="text-lg sm:text-xl md:text-2xl font-semibold text-foreground">{subsection.title}</h4>
                  {typeof subsection.content === 'string' && (
                    <p className="text-muted-foreground leading-relaxed text-sm sm:text-base md:text-lg">{subsection.content}</p>
                  )}
                  {Array.isArray(subsection.content) && (
                    <ul className="list-disc list-inside space-y-1.5 sm:space-y-2 text-muted-foreground text-sm sm:text-base md:text-lg">
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
            <div className="border-t pt-6 sm:pt-8">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">References</h3>
              <div className="space-y-3 sm:space-y-4">
                {researchPaper.content.references.map((ref, idx) => (
                  <div key={idx} className="text-xs sm:text-sm md:text-base text-muted-foreground">
                    <p className="font-medium text-foreground text-sm sm:text-base md:text-lg">{ref.authors} ({ref.year}). {ref.title}.</p>
                    <p className="text-xs sm:text-sm md:text-base"><em>{ref.journal}</em>{ref.volume && `, ${ref.volume}`}{ref.issue && `(${ref.issue})`}{ref.pages && `, ${ref.pages}`}.</p>
                    {ref.doi && (
                      <a href={ref.doi} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-xs sm:text-sm md:text-base">
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
        <div className="prose prose-sm sm:prose-base md:prose-lg max-w-none">
          {blogPost.content.split('\n').map((line, idx) => {
            if (line.startsWith('# ')) {
              return <h1 key={idx} className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">{line.replace('# ', '')}</h1>;
            }
            if (line.startsWith('## ')) {
              return <h2 key={idx} className="text-xl sm:text-2xl md:text-3xl font-semibold mb-2 sm:mb-3">{line.replace('## ', '')}</h2>;
            }
            if (line.startsWith('### ')) {
              return <h3 key={idx} className="text-lg sm:text-xl md:text-2xl font-medium mb-2">{line.replace('### ', '')}</h3>;
            }
            if (line.trim() === '') {
              return <br key={idx} />;
            }
            return <p key={idx} className="text-muted-foreground leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base md:text-lg">{line}</p>;
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

      <InternationalSEO canonicalUrl={`https://nexagrowth.com${content.canonical_url}`} />

      <Navigation />
      
      <article className="pt-6 sm:pt-8 md:pt-12 pb-12 sm:pb-16 md:pb-20">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Main Content */}
            <div className="flex-1 min-w-0">
              {/* Back Button */}
              <Button 
                variant="ghost" 
                onClick={() => navigate('/blog')}
                className="mb-4 sm:mb-6 text-sm sm:text-base"
              >
                <ArrowLeft className="mr-1.5 sm:mr-2 h-3.5 w-3.5 sm:h-4 sm:w-4" />
                Back to Blog
              </Button>

              {/* Hero Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-6 sm:mb-8"
              >
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">
                  <Calendar className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  <time>{formatDate(content.created_at)}</time>
                  <span className="mx-1 sm:mx-2">•</span>
                  <Clock className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  <span>{content.read_time}</span>
                  <span className="mx-1 sm:mx-2">•</span>
                  <User className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  <span>{content.author}</span>
                </div>

                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 leading-tight">
                  {content.title}
                </h1>

                <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                  {isResearch && (
                    <span className="inline-flex items-center px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-primary/10 text-primary text-[10px] sm:text-xs md:text-sm font-medium">
                      <Brain className="mr-1 h-2.5 w-2.5 sm:h-3 sm:w-3" />
                      Research Paper
                    </span>
                  )}
                  <span className="inline-flex items-center px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-muted text-muted-foreground text-[10px] sm:text-xs md:text-sm">
                    {content.category}
                  </span>
                </div>

                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
                  {content.excerpt}
                </p>

                {/* Featured Image */}
                <div className="relative w-full aspect-video rounded-lg sm:rounded-lg md:rounded-lg overflow-hidden mb-6 sm:mb-8">
                  <img
                    src={content.featured_image}
                    alt={content.title}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-6 sm:mb-8">
                  {content.tags.map((tag) => (
                    <span key={tag} className="inline-flex items-center px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-secondary text-secondary-foreground text-[9px] sm:text-xs md:text-sm">
                      <Tag className="mr-1 h-2.5 w-2.5 sm:h-3 sm:w-3" />
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
                className="prose prose-sm sm:prose-base md:prose-lg max-w-none"
              >
                {renderContent()}
              </motion.div>

              {/* FAQ Section */}
              {faqs.length > 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="border-t mt-8 sm:mt-12 pt-6 sm:pt-8"
                >
                  <FAQ items={faqs} />
                </motion.div>
              )}

              {/* Share Section */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="border-t mt-8 sm:mt-12 pt-6 sm:pt-8"
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <h3 className="font-semibold mb-2 sm:mb-3 text-sm sm:text-base md:text-lg">Share this article</h3>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" asChild>
                        <a
                          href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(content.title)}&url=${encodeURIComponent(`https://nexagrowth.com${content.canonical_url}`)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Twitter className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                        </a>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <a
                          href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://nexagrowth.com${content.canonical_url}`)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Linkedin className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                        </a>
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => {
                          navigator.clipboard.writeText(`https://nexagrowth.com${content.canonical_url}`);
                        }}
                      >
                        <LinkIcon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Related Articles */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="border-t mt-8 sm:mt-12 pt-6 sm:pt-8"
              >
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">Related Articles</h3>
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  {relatedArticles.map((article) => (
                    <Link
                      key={article.id}
                      to={article.canonical_url}
                      className="bg-card border border-border rounded-lg p-4 sm:p-6 hover:border-primary/50 transition-all hover:scale-105"
                    >
                      <h4 className="font-semibold text-sm sm:text-base md:text-lg mb-2">{article.title}</h4>
                      <p className="text-muted-foreground text-xs sm:text-sm line-clamp-2">{article.excerpt}</p>
                    </Link>
                  ))}
                </div>
              </motion.div>

              {/* Content Cluster - Related Technologies */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="border-t mt-8 sm:mt-12 pt-6 sm:pt-8"
              >
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">Related Technologies</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                  {['React', 'Next.js', 'Node.js', 'TypeScript', 'Shopify'].map((tech) => (
                    <Link
                      key={tech}
                      to={`/technologies/${tech.toLowerCase()}`}
                      className="bg-card border border-border rounded-lg p-4 hover:border-primary/50 transition-all hover:scale-105 text-center"
                    >
                      <h4 className="font-semibold text-sm">{tech}</h4>
                    </Link>
                  ))}
                </div>
              </motion.div>

              {/* Content Cluster - Related Industries */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="border-t mt-8 sm:mt-12 pt-6 sm:pt-8"
              >
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">Related Industries</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                  {['Ecommerce', 'Healthcare', 'Finance', 'Education', 'Startups'].map((industry) => (
                    <Link
                      key={industry}
                      to={`/industries/${industry.toLowerCase()}`}
                      className="bg-card border border-border rounded-lg p-4 hover:border-primary/50 transition-all hover:scale-105 text-center"
                    >
                      <h4 className="font-semibold text-sm">{industry}</h4>
                    </Link>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Table of Contents Sidebar */}
            {tableOfContents.length > 0 && (
              <motion.aside
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="hidden lg:block w-64 flex-shrink-0"
              >
                <div className="sticky top-24 bg-card border border-border rounded-lg p-4 sm:p-6">
                  <h3 className="font-semibold mb-4 flex items-center gap-2 text-sm sm:text-base">
                    <List className="h-4 w-4" />
                    Table of Contents
                  </h3>
                  <nav className="space-y-2">
                    {tableOfContents.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className={`block text-left text-sm w-full px-2 py-1 rounded transition-colors ${
                          activeSection === item.id
                            ? 'bg-primary/10 text-primary font-medium'
                            : 'text-muted-foreground hover:bg-muted/50'
                        } ${item.level === 2 ? 'ml-4' : ''} ${item.level === 3 ? 'ml-8' : ''}`}
                      >
                        {item.title}
                      </button>
                    ))}
                  </nav>
                </div>
              </motion.aside>
            )}
          </div>
        </div>

        {/* Back to Top Button */}
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-6 right-6 bg-primary text-primary-foreground p-3 rounded-full shadow-lg hover:bg-primary/90 transition-colors z-50"
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        )}
      </article>

      <Footer />
    </div>
  );
};

export default BlogDetail;
