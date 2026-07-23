import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams, useNavigate } from 'react-router-dom';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Breadcrumb } from '@/components/Breadcrumb';
import { ArrowLeft, ArrowRight, CheckCircle, ExternalLink, BookOpen, Users, Code2, Database, Globe, Cpu, Zap, Layers } from 'lucide-react';

const technologyData: Record<string, {
  name: string;
  description: string;
  longDescription: string;
  benefits: string[];
  useCases: string[];
  relatedServices: string[];
  relatedProjects: string[];
  faqs: { question: string; answer: string }[];
  icon?: React.ReactNode;
  category?: string;
}> = {
  react: {
    name: 'React',
    description: 'Build modern, interactive user interfaces with component-based architecture',
    longDescription: 'React is a JavaScript library for building user interfaces, maintained by Meta and a community of individual developers and companies. It enables developers to create large web applications that can update and render efficiently in response to data changes, without reloading the page.',
    benefits: [
      'Component-based architecture for reusable code',
      'Virtual DOM for optimal performance',
      'Strong ecosystem with extensive libraries',
      'Excellent developer tools and debugging',
      'Server-side rendering capabilities with Next.js',
      'Large community and long-term support'
    ],
    useCases: [
      'Single Page Applications (SPAs)',
      'Progressive Web Apps (PWAs)',
      'Dashboard and admin panels',
      'E-commerce platforms',
      'Social media applications',
      'Real-time collaboration tools'
    ],
    relatedServices: ['/web-development', '/services/full-brand-launch'],
    relatedProjects: ['/projects/web-development'],
    faqs: [
      {
        question: 'Why choose React over other frameworks?',
        answer: 'React offers the best balance of performance, developer experience, and ecosystem support. Its component-based architecture makes code reusable and maintainable, while the virtual DOM ensures optimal rendering performance.'
      },
      {
        question: 'Is React suitable for large-scale applications?',
        answer: 'Absolutely. React is used by Facebook, Instagram, Netflix, and many other large-scale applications. Its architecture scales well, and tools like Redux and Context API help manage complex state.'
      },
      {
        question: 'How does React handle SEO?',
        answer: 'While React itself is client-side rendered, frameworks like Next.js provide server-side rendering and static generation, making React applications fully SEO-friendly.'
      }
    ],
    icon: <Code2 className="w-8 h-8" />,
    category: 'Frontend'
  },
  nextjs: {
    name: 'Next.js',
    description: 'Production-ready React framework with server-side rendering and static generation',
    longDescription: 'Next.js is a React framework that enables server-side rendering, static site generation, and other advanced features. It provides the best developer experience with features like file-based routing, API routes, and automatic optimization.',
    benefits: [
      'Server-side rendering for better SEO',
      'Static site generation for blazing-fast performance',
      'File-based routing for easy navigation',
      'API routes for backend functionality',
      'Automatic image optimization',
      'Built-in CSS and Sass support'
    ],
    useCases: [
      'SEO-optimized websites',
      'E-commerce platforms',
      'Marketing websites',
      'SaaS applications',
      'Content-heavy sites',
      'Performance-critical applications'
    ],
    relatedServices: ['/web-development', '/services/full-brand-launch'],
    relatedProjects: ['/projects/web-development'],
    faqs: [
      {
        question: 'What makes Next.js different from plain React?',
        answer: 'Next.js provides server-side rendering, static generation, file-based routing, API routes, and many other features out of the box that would require complex setup in plain React.'
      },
      {
        question: 'Should I use Next.js for my project?',
        answer: 'If you need SEO, performance, or want a production-ready setup with minimal configuration, Next.js is an excellent choice. It\'s particularly good for content sites and e-commerce.'
      },
      {
        question: 'Is Next.js suitable for dynamic applications?',
        answer: 'Yes, Next.js supports both static and dynamic rendering. You can choose the best rendering strategy for each page based on your needs.'
      }
    ]
  },
  nodejs: {
    name: 'Node.js',
    description: 'Scalable server-side JavaScript runtime for building fast network applications',
    longDescription: 'Node.js is a JavaScript runtime built on Chrome\'s V8 JavaScript engine. It enables developers to use JavaScript for server-side scripting, running scripts server-side to produce dynamic web page content before the page is sent to the user\'s web browser.',
    benefits: [
      'Unified JavaScript stack (frontend and backend)',
      'Non-blocking I/O for high performance',
      'NPM ecosystem with thousands of packages',
      'Real-time applications support',
      'Microservices architecture friendly',
      'Cross-platform compatibility'
    ],
    useCases: [
      'RESTful APIs',
      'Real-time applications (chat, collaboration)',
      'Streaming applications',
      'Microservices',
      'Serverless functions',
      'IoT applications'
    ],
    relatedServices: ['/web-development', '/services/data-analytics'],
    relatedProjects: ['/projects/web-development'],
    faqs: [
      {
        question: 'Why use Node.js for backend development?',
        answer: 'Node.js allows you to use JavaScript across your entire stack, reducing context switching. Its non-blocking I/O model makes it ideal for real-time applications and high-concurrency scenarios.'
      },
      {
        question: 'Is Node.js suitable for CPU-intensive tasks?',
        answer: 'While Node.js excels at I/O operations, CPU-intensive tasks can be handled using worker threads or by offloading to separate microservices. For most web applications, Node.js performs excellently.'
      },
      {
        question: 'How scalable is Node.js?',
        answer: 'Node.js is highly scalable due to its event-driven, non-blocking architecture. It can handle thousands of concurrent connections with minimal resource usage.'
      }
    ]
  },
  typescript: {
    name: 'TypeScript',
    description: 'Type-safe JavaScript that scales for enterprise applications',
    longDescription: 'TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale. It adds static type definitions, making code more predictable and easier to debug.',
    benefits: [
      'Type safety catches errors at compile time',
      'Better IDE support with IntelliSense',
      'Improved code readability and maintainability',
      'Easier refactoring with type checking',
      'Enhanced team collaboration',
      'Gradual adoption (can mix with JavaScript)'
    ],
    useCases: [
      'Large-scale enterprise applications',
      'Team-based development',
      'Long-term maintenance projects',
      'Complex business logic',
      'API development',
      'Library and framework development'
    ],
    relatedServices: ['/web-development'],
    relatedProjects: ['/projects/web-development'],
    faqs: [
      {
        question: 'Why should I use TypeScript over JavaScript?',
        answer: 'TypeScript catches errors before runtime, provides better IDE support, and makes refactoring safer. For large projects and teams, the productivity gains are significant.'
      },
      {
        question: 'Is TypeScript difficult to learn?',
        answer: 'If you know JavaScript, TypeScript is easy to learn. You can start with basic types and gradually adopt more advanced features. The learning curve is gentle.'
      },
      {
        question: 'Can I use TypeScript with existing JavaScript projects?',
        answer: 'Yes, TypeScript was designed for gradual adoption. You can rename .js files to .ts and add types incrementally. Many libraries also provide TypeScript definitions.'
      }
    ]
  },
  shopify: {
    name: 'Shopify',
    description: 'Leading e-commerce platform for building online stores',
    longDescription: 'Shopify is a complete commerce platform that lets you start, grow, and manage a business. It provides everything you need to sell online, including website building, payment processing, shipping, and marketing tools.',
    benefits: [
      'All-in-one e-commerce solution',
      'Secure payment processing',
      'Extensive app ecosystem',
      'Built-in SEO features',
      'Scalable infrastructure',
      '24/7 customer support'
    ],
    useCases: [
      'Online retail stores',
      'Dropshipping businesses',
      'Subscription-based products',
      'Digital product sales',
      'Multi-channel selling',
      'International e-commerce'
    ],
    relatedServices: ['/ecommerce', '/services/marketplace-management'],
    relatedProjects: ['/projects/ecommerce'],
    faqs: [
      {
        question: 'Why choose Shopify over custom e-commerce development?',
        answer: 'Shopify provides a proven, secure, and feature-rich platform out of the box. It handles payments, security, and infrastructure so you can focus on growing your business rather than maintaining code.'
      },
      {
        question: 'Can I customize a Shopify store?',
        answer: 'Absolutely. Shopify offers extensive customization through themes, apps, and custom development with Shopify CLI and Liquid templating. You can create unique, branded experiences.'
      },
      {
        question: 'Is Shopify suitable for large businesses?',
        answer: 'Yes, Shopify Plus is designed for high-volume merchants. It handles millions of orders and provides enterprise-grade features like dedicated support and custom integrations.'
      }
    ]
  },
  wordpress: {
    name: 'WordPress',
    description: 'Flexible content management system for websites of all sizes',
    longDescription: 'WordPress is a free and open-source content management system based on PHP and MySQL. It powers over 40% of all websites on the internet, making it the most popular CMS in the world.',
    benefits: [
      'Easy to use and learn',
      'Extensive plugin ecosystem',
      'Thousands of themes available',
      'SEO-friendly out of the box',
      'Large community support',
      'Regular updates and security patches'
    ],
    useCases: [
      'Blogs and content sites',
      'Business websites',
      'E-commerce with WooCommerce',
      'Portfolio sites',
      'Membership sites',
      'News and magazine sites'
    ],
    relatedServices: ['/web-development', '/services/listing-optimization'],
    relatedProjects: ['/projects/web-development'],
    faqs: [
      {
        question: 'Is WordPress suitable for professional websites?',
        answer: 'Absolutely. Many Fortune 500 companies and major publications use WordPress. With custom development and premium themes, WordPress can power sophisticated, professional websites.'
      },
      {
        question: 'How secure is WordPress?',
        answer: 'WordPress core is secure with regular updates. Security issues typically arise from poorly maintained plugins or themes. With proper maintenance and security best practices, WordPress is very secure.'
      },
      {
        question: 'Can WordPress handle high traffic?',
        answer: 'Yes, with proper hosting, caching, and optimization, WordPress can handle millions of visitors. Major sites like The New York Times and TechCrunch run on WordPress.'
      }
    ]
  },
  mongodb: {
    name: 'MongoDB',
    description: 'NoSQL database for modern applications with flexible schemas',
    longDescription: 'MongoDB is a document-oriented NoSQL database designed for flexibility and scalability. It stores data in flexible, JSON-like documents, making it ideal for applications with evolving data requirements.',
    benefits: [
      'Flexible schema design',
      'Horizontal scaling capabilities',
      'Rich query language',
      'Built-in replication and high availability',
      'Excellent for rapid development',
      'Support for complex data structures'
    ],
    useCases: [
      'Content management systems',
      'Real-time applications',
      'Catalog and inventory management',
      'Mobile applications',
      'Big data applications',
      'IoT data storage'
    ],
    relatedServices: ['/web-development', '/services/data-analytics'],
    relatedProjects: ['/projects/web-development'],
    faqs: [
      {
        question: 'When should I use MongoDB instead of SQL?',
        answer: 'Choose MongoDB when you need flexible schemas, rapid development, or are dealing with unstructured or semi-structured data. It\'s excellent for applications where data structures evolve frequently.'
      },
      {
        question: 'Is MongoDB suitable for transactional applications?',
        answer: 'Modern MongoDB supports multi-document ACID transactions, making it suitable for most transactional applications. However, for complex relational data with strict consistency requirements, SQL databases might still be preferable.'
      },
      {
        question: 'How does MongoDB scale?',
        answer: 'MongoDB scales horizontally through sharding, distributing data across multiple servers. This allows it to handle massive amounts of data and high traffic loads.'
      }
    ]
  },
  postgresql: {
    name: 'PostgreSQL',
    description: 'Powerful open-source relational database with advanced features',
    longDescription: 'PostgreSQL is a powerful, open-source object-relational database system with over 30 years of active development. It has earned a strong reputation for reliability, feature robustness, and performance.',
    benefits: [
      'ACID compliance for data integrity',
      'Advanced indexing and query optimization',
      'Support for complex data types',
      'Extensible architecture',
      'Strong community and commercial support',
      'Excellent for complex queries'
    ],
    useCases: [
      'Financial applications',
      'Enterprise applications',
      'Geographic information systems',
      'Data warehousing',
      'Complex transactional systems',
      'Analytics and reporting'
    ],
    relatedServices: ['/web-development', '/services/data-analytics'],
    relatedProjects: ['/projects/web-development'],
    faqs: [
      {
        question: 'Why choose PostgreSQL over MySQL?',
        answer: 'PostgreSQL offers more advanced features like complex queries, better concurrency control, and support for more data types. It\'s often preferred for complex applications requiring advanced database features.'
      },
      {
        question: 'Is PostgreSQL suitable for high-traffic applications?',
        answer: 'Absolutely. PostgreSQL is used by many high-traffic applications. With proper indexing, connection pooling, and replication, it can handle millions of queries per second.'
      },
      {
        question: 'Does PostgreSQL support JSON?',
        answer: 'Yes, PostgreSQL has excellent JSON support with JSONB data type, allowing you to store and query JSON data efficiently while maintaining relational database benefits.'
      }
    ]
  },
  supabase: {
    name: 'Supabase',
    description: 'Open-source Firebase alternative with PostgreSQL, auth, and real-time features',
    longDescription: 'Supabase is an open-source Firebase alternative that provides PostgreSQL database, authentication, instant APIs, real-time subscriptions, storage, and edge functions. It gives you the power of a backend without managing infrastructure.',
    benefits: [
      'PostgreSQL with full SQL capabilities',
      'Built-in authentication and authorization',
      'Real-time data subscriptions',
      'Automatic API generation',
      'Open source and self-hostable',
      'Generous free tier'
    ],
    useCases: [
      'SaaS applications',
      'Real-time collaboration tools',
      'Mobile applications',
      'Progressive web apps',
      'Rapid prototyping',
      'Startups and MVPs'
    ],
    relatedServices: ['/web-development'],
    relatedProjects: ['/projects/web-development'],
    faqs: [
      {
        question: 'How is Supabase different from Firebase?',
        answer: 'Supabase uses PostgreSQL instead of NoSQL, giving you full SQL capabilities and data portability. It\'s also open-source, meaning you can self-host and have full control over your data.'
      },
      {
        question: 'Is Supabase production-ready?',
        answer: 'Yes, Supabase is used by thousands of production applications. It offers managed hosting with automatic backups, high availability, and enterprise features for production workloads.'
      },
      {
        question: 'Can I migrate from Firebase to Supabase?',
        answer: 'Yes, Supabase provides migration guides and tools. The authentication APIs are similar, and you can export your data from Firebase and import it into PostgreSQL.'
      }
    ]
  },
  openai: {
    name: 'OpenAI',
    description: 'Leading AI platform for building intelligent applications',
    longDescription: 'OpenAI provides cutting-edge AI models including GPT-4, DALL-E, and Whisper. These models can be integrated into applications to enable natural language processing, image generation, speech recognition, and more.',
    benefits: [
      'State-of-the-art AI models',
      'Comprehensive API documentation',
      'Multiple model options for different use cases',
      'Regular model improvements',
      'Strong safety and alignment focus',
      'Extensive developer community'
    ],
    useCases: [
      'Chatbots and virtual assistants',
      'Content generation and summarization',
      'Code generation and review',
      'Image generation and editing',
      'Speech recognition and synthesis',
      'Data analysis and insights'
    ],
    relatedServices: ['/services/data-analytics'],
    relatedProjects: ['/projects/web-development'],
    faqs: [
      {
        question: 'What can I build with OpenAI APIs?',
        answer: 'You can build chatbots, content generators, code assistants, image generators, speech recognition systems, and much more. The possibilities are limited only by your imagination.'
      },
      {
        question: 'Is OpenAI suitable for enterprise applications?',
        answer: 'Yes, OpenAI offers enterprise-grade features including dedicated support, custom model fine-tuning, and compliance certifications. Many Fortune 500 companies use OpenAI APIs.'
      },
      {
        question: 'How do I get started with OpenAI?',
        answer: 'Sign up for an API key on the OpenAI platform, then use their official libraries or direct HTTP requests to integrate their models into your application.'
      }
    ]
  },
  'google-gemini': {
    name: 'Google Gemini',
    description: 'Google\'s multimodal AI for advanced reasoning and content generation',
    longDescription: 'Google Gemini is a family of multimodal AI models capable of understanding and generating text, images, audio, and code. It represents Google\'s most capable AI models for complex reasoning tasks.',
    benefits: [
      'Multimodal capabilities (text, image, audio, code)',
      'Advanced reasoning and problem-solving',
      'Integration with Google ecosystem',
      'Strong performance on benchmarks',
      'Context window for large documents',
      'Safety and alignment features'
    ],
    useCases: [
      'Multimodal content analysis',
      'Complex reasoning tasks',
      'Document understanding',
      'Code generation and review',
      'Creative content generation',
      'Research and analysis'
    ],
    relatedServices: ['/services/data-analytics'],
    relatedProjects: ['/projects/web-development'],
    faqs: [
      {
        question: 'What makes Gemini different from other AI models?',
        answer: 'Gemini is natively multimodal, meaning it was trained on text, images, audio, and code together. This gives it unique capabilities in understanding and generating across different media types.'
      },
      {
        question: 'Can I use Gemini in production applications?',
        answer: 'Yes, Gemini is available through Google Cloud Vertex AI with enterprise-grade features including SLAs, compliance certifications, and dedicated support.'
      },
      {
        question: 'How does Gemini compare to GPT-4?',
        answer: 'Both are excellent models with different strengths. Gemini excels at multimodal tasks and has strong performance on reasoning benchmarks. The best choice depends on your specific use case.'
      }
    ]
  }
};

const TechnologyDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const tech = slug ? technologyData[slug] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!tech) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold mb-4">Technology Not Found</h1>
          <Button onClick={() => navigate('/technologies')}>Back to Technologies</Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{tech.name} | Technologies | Nexa Growth Solutions</title>
        <meta name="description" content={tech.description} />
        <meta name="keywords" content={`${tech.name}, web development, Nexa Growth Solutions, ${tech.name} development`} />
        <link rel="canonical" href={`https://nexagrowth.com/technologies/${slug}`} />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />

        {/* Breadcrumb */}
        <div className="bg-muted/30 py-4 px-4 sm:px-6">
          <div className="container mx-auto max-w-7xl">
            <Breadcrumb 
              items={[
                { name: 'Technologies', path: '/technologies' },
                { name: tech.name, path: `/technologies/${slug}` }
              ]}
            />
          </div>
        </div>

        {/* Hero */}
        <section className="pt-12 pb-8 px-4 sm:px-6">
          <div className="container mx-auto max-w-7xl">
            <Button variant="ghost" onClick={() => navigate('/technologies')} className="mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Technologies
            </Button>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-foreground">
              {tech.name}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl">{tech.description}</p>
          </div>
        </section>

        {/* Overview */}
        <section className="py-12 px-4 sm:px-6">
          <div className="container mx-auto max-w-7xl">
            <div className="max-w-4xl">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-foreground">Overview</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">{tech.longDescription}</p>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-12 px-4 sm:px-6 bg-muted/30">
          <div className="container mx-auto max-w-7xl">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-foreground">Key Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {tech.benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-12 px-4 sm:px-6">
          <div className="container mx-auto max-w-7xl">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-foreground">Common Use Cases</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {tech.useCases.map((useCase, index) => (
                <div key={index} className="bg-card border border-border rounded-lg p-4">
                  <div className="flex items-center gap-2 text-foreground font-medium">
                    <ExternalLink className="w-4 h-4 text-primary" />
                    {useCase}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-12 px-4 sm:px-6 bg-muted/30">
          <div className="container mx-auto max-w-7xl">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-foreground">Frequently Asked Questions</h2>
            <div className="space-y-4 max-w-4xl">
              {tech.faqs.map((faq, index) => (
                <div key={index} className="bg-card border border-border rounded-lg p-6">
                  <h3 className="font-semibold text-foreground mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 px-4 sm:px-6">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-foreground">
              Ready to Build with {tech.name}?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's discuss how we can leverage {tech.name} to bring your project to life.
            </p>
            <Button size="lg" onClick={() => navigate('/contact')} className="rounded-full px-8 py-6">
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>

        {/* Related Technologies */}
        <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-muted/30">
          <div className="container mx-auto max-w-7xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12">Related Technologies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(technologyData)
                .filter(([key]) => key !== slug)
                .slice(0, 6)
                .map(([key, relatedTech]) => (
                  <div
                    key={key}
                    onClick={() => navigate(`/technologies/${key}`)}
                    className="group bg-card border border-border rounded-xl p-6 hover:border-primary/50 hover:shadow-lg transition-all cursor-pointer text-center"
                  >
                    <div className="flex flex-col items-center justify-center gap-4 mb-4">
                      <div className="p-3 bg-primary/10 rounded-xl text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        {relatedTech.icon || <Code2 className="w-8 h-8" />}
                      </div>
                      <div className="flex-1">
                        {relatedTech.category && (
                          <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">{relatedTech.category}</span>
                        )}
                        <h3 className="text-xl font-semibold text-foreground mt-1">{relatedTech.name}</h3>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm line-clamp-2">{relatedTech.description}</p>
                  </div>
                ))}
            </div>
          </div>
        </section>

        {/* Content Cluster - Related Industries */}
        <section className="py-16 sm:py-20 md:py-24 bg-muted/30">
          <div className="container mx-auto px-6 max-w-6xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-center">
              Industries Using {technologyData[slug]?.name || 'This Technology'}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {['Ecommerce', 'Healthcare', 'Finance', 'Education', 'Startups'].map((industry) => (
                <Link
                  key={industry}
                  to={`/industries/${industry.toLowerCase()}`}
                  className="bg-card border border-border rounded-lg p-4 hover:border-primary/50 transition-all hover:scale-105 text-center"
                >
                  <h3 className="font-semibold text-sm">{industry}</h3>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Content Cluster - Related Services */}
        <section className="py-16 sm:py-20 md:py-24 bg-background">
          <div className="container mx-auto px-6 max-w-6xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-center">
              Related Services
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: 'Web Development', href: '/web-development', desc: 'Custom web solutions' },
                { name: 'Digital Marketing', href: '/digital-marketing', desc: 'Growth-focused marketing' },
                { name: 'E-commerce Services', href: '/ecommerce', desc: 'Online store optimization' }
              ].map((service) => (
                <Link
                  key={service.name}
                  to={service.href}
                  className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all hover:scale-105"
                >
                  <h3 className="font-semibold text-lg mb-2">{service.name}</h3>
                  <p className="text-muted-foreground text-sm">{service.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default TechnologyDetail;
