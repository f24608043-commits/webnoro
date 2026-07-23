import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams, useNavigate } from 'react-router-dom';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Breadcrumb } from '@/components/Breadcrumb';
import { ArrowLeft, ArrowRight, CheckCircle, ExternalLink, Users, TrendingUp, Shield, Zap } from 'lucide-react';

const industryData: Record<string, {
  name: string;
  description: string;
  overview: string;
  challenges: string[];
  solutions: string[];
  services: string[];
  caseStudies: string[];
  faqs: { question: string; answer: string }[];
}> = {
  healthcare: {
    name: 'Healthcare',
    description: 'Digital solutions for medical practices, hospitals, and healthcare providers',
    overview: 'The healthcare industry is undergoing rapid digital transformation. From telemedicine platforms to patient engagement systems, digital solutions are essential for modern healthcare delivery. We help healthcare providers navigate this transformation while ensuring HIPAA compliance, data security, and patient privacy.',
    challenges: [
      'Patient engagement and communication',
      'HIPAA compliance and data security',
      'Telemedicine integration',
      'Electronic health records (EHR) management',
      'Appointment scheduling and reminders',
      'Patient data interoperability'
    ],
    solutions: [
      'HIPAA-compliant patient portals',
      'Telemedicine video consultation platforms',
      'Appointment scheduling systems',
      'Patient engagement mobile apps',
      'Secure messaging platforms',
      'Healthcare analytics dashboards'
    ],
    services: ['/web-development', '/services/data-analytics'],
    caseStudies: ['/casestudies'],
    faqs: [
      {
        question: 'How do you ensure HIPAA compliance in healthcare applications?',
        answer: 'We implement end-to-end encryption, access controls, audit logs, and follow HIPAA security guidelines. All healthcare applications undergo rigorous security testing and compliance verification before deployment.'
      },
      {
        question: 'Can you integrate with existing EHR systems?',
        answer: 'Yes, we have experience integrating with major EHR systems including Epic, Cerner, and Allscripts. We use HL7 FHIR standards for interoperability and secure APIs for data exchange.'
      },
      {
        question: 'What types of healthcare applications do you build?',
        answer: 'We build patient portals, telemedicine platforms, appointment scheduling systems, patient engagement apps, healthcare analytics dashboards, and custom healthcare management solutions.'
      }
    ]
  },
  education: {
    name: 'Education',
    description: 'E-learning platforms and educational technology solutions',
    overview: 'The education sector is embracing digital learning at an unprecedented pace. From K-12 to higher education and corporate training, digital platforms are transforming how knowledge is delivered and consumed. We create engaging, accessible, and scalable educational technology solutions.',
    challenges: [
      'Student engagement in remote learning',
      'Content management and delivery',
      'Accessibility compliance (WCAG)',
      'Learning management system integration',
      'Assessment and progress tracking',
      'Collaboration tools for students and teachers'
    ],
    solutions: [
      'Learning management systems (LMS)',
      'Interactive e-learning platforms',
      'Student engagement tools',
      'Assessment and analytics platforms',
      'Mobile learning applications',
      'Virtual classroom solutions'
    ],
    services: ['/web-development', '/services/full-brand-launch'],
    caseStudies: ['/casestudies'],
    faqs: [
      {
        question: 'Do you build custom LMS platforms?',
        answer: 'Yes, we build custom learning management systems tailored to your specific educational needs. We can also integrate with existing LMS platforms like Moodle, Canvas, or Blackboard.'
      },
      {
        question: 'How do you ensure accessibility in educational platforms?',
        answer: 'We follow WCAG 2.2 AA guidelines for accessibility, ensuring platforms are usable by students with disabilities. This includes screen reader support, keyboard navigation, and alternative text for all media.'
      },
      {
        question: 'Can you create mobile learning apps?',
        answer: 'Absolutely. We build native and cross-platform mobile learning applications for iOS and Android, enabling learning on-the-go with offline capabilities.'
      }
    ]
  },
  'real-estate': {
    name: 'Real Estate',
    description: 'Property management and real estate marketing solutions',
    overview: 'The real estate industry relies heavily on digital presence for lead generation, property showcasing, and client communication. We create comprehensive digital solutions that help real estate professionals attract clients, manage properties, and close deals more efficiently.',
    challenges: [
      'Lead generation and conversion',
      'Virtual property tours',
      'Property listing management',
      'Client relationship management',
      'Market analysis and reporting',
      'Document management and e-signatures'
    ],
    solutions: [
      'Property listing websites',
      'Virtual tour platforms',
      'CRM for real estate agents',
      'Market analysis dashboards',
      'Document management systems',
      'Lead generation funnels'
    ],
    services: ['/web-development', '/digital-marketing'],
    caseStudies: ['/casestudies'],
    faqs: [
      {
        question: 'Can you integrate with MLS (Multiple Listing Service)?',
        answer: 'Yes, we can integrate with various MLS systems to automatically sync property listings, ensuring your website always has the most up-to-date property information.'
      },
      {
        question: 'What types of virtual tour solutions do you offer?',
        answer: 'We offer 360° virtual tours, video walkthroughs, interactive floor plans, and augmented reality property visualization. These can be embedded directly into your website.'
      },
      {
        question: 'Do you build CRM systems for real estate agents?',
        answer: 'Yes, we build custom CRM solutions or integrate with platforms like Salesforce, HubSpot, or real estate-specific CRMs to help you manage leads and client relationships effectively.'
      }
    ]
  },
  legal: {
    name: 'Legal',
    description: 'Law firm websites and legal practice management tools',
    overview: 'Law firms need professional, trustworthy digital presence to attract clients and manage cases efficiently. We create sophisticated websites and practice management tools that enhance client communication, streamline operations, and maintain the professional image expected in the legal industry.',
    challenges: [
      'Client acquisition and trust building',
      'Case management and organization',
      'Document automation and management',
      'Online consultation scheduling',
      'Secure client communication',
      'Compliance and ethical considerations'
    ],
    solutions: [
      'Professional law firm websites',
      'Case management systems',
      'Document automation platforms',
      'Client portal for secure communication',
      'Online consultation booking',
      'Legal research integration'
    ],
    services: ['/web-development', '/services/full-brand-launch'],
    caseStudies: ['/casestudies'],
    faqs: [
      {
        question: 'How do you ensure client confidentiality in legal applications?',
        answer: 'We implement bank-level encryption, secure authentication, access controls, and audit trails. All legal applications follow industry best practices for data security and client confidentiality.'
      },
      {
        question: 'Can you integrate with legal research platforms?',
        answer: 'Yes, we can integrate with platforms like Westlaw, LexisNexis, and other legal research tools to streamline your workflow and improve efficiency.'
      },
      {
        question: 'What features do you include in law firm websites?',
        answer: 'Our law firm websites include attorney profiles, practice area descriptions, case results, client testimonials, blog for legal insights, online consultation booking, and mobile-responsive design.'
      }
    ]
  },
  restaurants: {
    name: 'Restaurants',
    description: 'Food service digital solutions and online ordering systems',
    overview: 'The restaurant industry has embraced digital transformation with online ordering, delivery management, and customer loyalty programs. We create comprehensive digital solutions that help restaurants increase revenue, improve operations, and enhance customer experience.',
    challenges: [
      'Online ordering and delivery management',
      'Customer loyalty and retention',
      'Inventory and menu management',
      'Table reservation systems',
      'Payment processing integration',
      'Customer feedback and reviews'
    ],
    solutions: [
      'Online ordering platforms',
      'Delivery management systems',
      'Customer loyalty apps',
      'Reservation booking systems',
      'Menu management platforms',
      'Customer feedback systems'
    ],
    services: ['/ecommerce', '/services/full-brand-launch'],
    caseStudies: ['/casestudies'],
    faqs: [
      {
        question: 'Can you integrate with delivery platforms like UberEats or DoorDash?',
        answer: 'Yes, we can integrate your ordering system with major delivery platforms to synchronize orders, menus, and inventory across all channels from a single dashboard.'
      },
      {
        question: 'Do you build custom loyalty programs for restaurants?',
        answer: 'Absolutely. We build custom loyalty and rewards programs with features like points systems, tiered rewards, special offers, and personalized promotions to increase customer retention.'
      },
      {
        question: 'What payment options can you integrate?',
        answer: 'We integrate with all major payment processors including Stripe, Square, PayPal, and local payment methods. We also support cash-on-delivery and split payments.'
      }
    ]
  },
  construction: {
    name: 'Construction',
    description: 'Construction management and contractor digital solutions',
    overview: 'The construction industry benefits significantly from digital project management, client communication tools, and resource planning systems. We create solutions that help construction companies manage projects more efficiently, communicate with clients, and improve overall project outcomes.',
    challenges: [
      'Project management and coordination',
      'Client communication and updates',
      'Resource planning and scheduling',
      'Safety compliance tracking',
      'Document management and blueprints',
      'Budget and cost tracking'
    ],
    solutions: [
      'Project management dashboards',
      'Client communication portals',
      'Resource scheduling systems',
      'Safety compliance tracking',
      'Document management platforms',
      'Budget tracking tools'
    ],
    services: ['/web-development', '/services/data-analytics'],
    caseStudies: ['/casestudies'],
    faqs: [
      {
        question: 'Can your construction management tools handle multiple projects?',
        answer: 'Yes, our solutions are designed to manage multiple construction projects simultaneously with centralized dashboards, resource allocation across projects, and consolidated reporting.'
      },
      {
        question: 'How do you handle blueprint and document management?',
        answer: 'We implement secure document management with version control, access permissions, annotation tools, and mobile access for field teams to view blueprints and documents on-site.'
      },
      {
        question: 'Can clients track project progress?',
        answer: 'Yes, we create client portals where clients can view project timelines, progress photos, budget updates, and communicate with the project team in real-time.'
      }
    ]
  },
  startups: {
    name: 'Startups',
    description: 'MVP development and scalable solutions for emerging businesses',
    overview: 'Startups need rapid, cost-effective development to bring their ideas to market quickly. We specialize in MVP development, helping startups validate concepts, attract investors, and scale their products. Our agile approach ensures fast iteration and continuous improvement.',
    challenges: [
      'Rapid prototyping and MVP development',
      'Scalability for future growth',
      'Budget constraints and cost optimization',
      'Time-to-market pressure',
      'Technical team building',
      'Investor presentation and demo needs'
    ],
    solutions: [
      'MVP development services',
      'Scalable architecture design',
      'Cost-effective development strategies',
      'Rapid prototyping tools',
      'Technical consulting and advisory',
      'Investor demo platforms'
    ],
    services: ['/web-development', '/services/full-brand-launch'],
    caseStudies: ['/casestudies'],
    faqs: [
      {
        question: 'How quickly can you build an MVP?',
        answer: 'Depending on complexity, we can build functional MVPs in 4-12 weeks. We use agile development with regular sprints to deliver working features quickly and iterate based on feedback.'
      },
      {
        question: 'Do you work with equity-based compensation?',
        answer: 'We primarily work with project-based pricing but are open to discussing hybrid models for promising startups. Contact us to discuss your specific situation.'
      },
      {
        question: 'How do you ensure scalability for future growth?',
        answer: 'We design architectures with scalability in mind from day one, using cloud infrastructure, microservices where appropriate, and database designs that can handle growth without major rewrites.'
      }
    ]
  },
  ecommerce: {
    name: 'E-commerce',
    description: 'Online retail solutions and digital commerce platforms',
    overview: 'E-commerce has become essential for businesses of all sizes. From small boutiques to enterprise retailers, we create comprehensive online shopping experiences that drive conversions, manage inventory, and provide excellent customer experiences across all devices.',
    challenges: [
      'Conversion rate optimization',
      'Inventory and order management',
      'Payment processing and security',
      'Multi-channel selling',
      'Customer retention and loyalty',
      'Shipping and logistics integration'
    ],
    solutions: [
      'Custom e-commerce platforms',
      'Shopify development and customization',
      'Payment gateway integration',
      'Inventory management systems',
      'Customer loyalty programs',
      'Multi-channel integration'
    ],
    services: ['/ecommerce', '/services/marketplace-management'],
    caseStudies: ['/casestudies'],
    faqs: [
      {
        question: 'Should I use Shopify or custom e-commerce development?',
        answer: 'It depends on your needs. Shopify is excellent for quick launches and standard e-commerce needs. Custom development is better for unique requirements, complex business logic, or when you need complete control over the platform.'
      },
      {
        question: 'Can you integrate with marketplaces like Amazon and eBay?',
        answer: 'Yes, we can integrate your e-commerce platform with major marketplaces to synchronize inventory, orders, and product listings across all sales channels.'
      },
      {
        question: 'How do you optimize e-commerce sites for conversions?',
        answer: 'We implement conversion optimization strategies including streamlined checkout processes, trust signals, product recommendations, abandoned cart recovery, and mobile-optimized experiences.'
      }
    ]
  },
  nonprofits: {
    name: 'Nonprofits',
    description: 'Digital solutions for charitable organizations and NGOs',
    overview: 'Nonprofits need effective digital solutions to raise awareness, accept donations, manage volunteers, and demonstrate impact. We create purpose-built solutions that help nonprofits maximize their reach, engage supporters, and achieve their mission more effectively.',
    challenges: [
      'Donation management and processing',
      'Volunteer coordination and management',
      'Impact reporting and transparency',
      'Community engagement and communication',
      'Grant management and reporting',
      'Event management and fundraising'
    ],
    solutions: [
      'Donation management platforms',
      'Volunteer coordination systems',
      'Impact tracking dashboards',
      'Community engagement tools',
      'Grant management systems',
      'Event fundraising platforms'
    ],
    services: ['/web-development', '/services/full-brand-launch'],
    caseStudies: ['/casestudies'],
    faqs: [
      {
        question: 'Can you integrate with donation platforms like PayPal or Stripe?',
        answer: 'Yes, we integrate with all major donation processors including PayPal, Stripe, Donorbox, and other nonprofit-specific platforms to ensure seamless donation processing.'
      },
      {
        question: 'How do you help nonprofits demonstrate impact?',
        answer: 'We create impact tracking dashboards that visualize key metrics, generate reports for donors and stakeholders, and tell your story through data and testimonials.'
      },
      {
        question: 'Do you offer discounted rates for nonprofits?',
        answer: 'Yes, we offer special pricing for registered nonprofit organizations. Contact us to discuss your needs and learn about our nonprofit discount program.'
      }
    ]
  },
  finance: {
    name: 'Finance',
    description: 'Fintech solutions and financial services digital platforms',
    overview: 'The financial services industry requires secure, compliant, and user-friendly digital solutions. From banking apps to investment platforms, we create fintech solutions that meet regulatory requirements while providing excellent user experiences.',
    challenges: [
      'Security and compliance requirements',
      'Building user trust',
      'Regulatory compliance (KYC, AML)',
      'Data privacy and protection',
      'Integration with financial systems',
      'Real-time transaction processing'
    ],
    solutions: [
      'Fintech application development',
      'Banking and payment platforms',
      'Investment and trading platforms',
      'KYC/AML compliance systems',
      'Financial analytics dashboards',
      'Secure authentication systems'
    ],
    services: ['/web-development', '/services/data-analytics'],
    caseStudies: ['/casestudies'],
    faqs: [
      {
        question: 'How do you ensure security in fintech applications?',
        answer: 'We implement bank-level security including end-to-end encryption, multi-factor authentication, secure key management, regular security audits, and compliance with financial security standards.'
      },
      {
        question: 'Can you integrate with banking APIs and payment systems?',
        answer: 'Yes, we have experience integrating with banking APIs (Plaid, Stripe, Square), payment processors, and financial data providers to create seamless financial experiences.'
      },
      {
        question: 'Do you handle KYC/AML compliance requirements?',
        answer: 'Yes, we implement KYC/AML compliance features including identity verification, document scanning, risk assessment, and transaction monitoring to meet regulatory requirements.'
      }
    ]
  }
};

const IndustryDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const industry = slug ? industryData[slug] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!industry) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold mb-4">Industry Not Found</h1>
          <Button onClick={() => navigate('/industries')}>Back to Industries</Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{industry.name} Industry Solutions | Nexa Growth Solutions</title>
        <meta name="description" content={industry.description} />
        <meta name="keywords" content={`${industry.name} solutions, ${industry.name} technology, ${industry.name} digital transformation, Nexa Growth Solutions`} />
        <link rel="canonical" href={`https://nexagrowth.com/industries/${slug}`} />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />

        {/* Breadcrumb */}
        <nav className="bg-muted/30 py-4 px-4 sm:px-6">
          <div className="container mx-auto max-w-7xl">
            <ol className="flex items-center gap-2 text-sm text-muted-foreground">
              <li>
                <button onClick={() => navigate('/')} className="hover:text-primary">Home</button>
              </li>
              <li>/</li>
              <li>
                <button onClick={() => navigate('/industries')} className="hover:text-primary">Industries</button>
              </li>
              <li>/</li>
              <li className="text-foreground font-medium">{industry.name}</li>
            </ol>
          </div>
        </nav>

        {/* Hero */}
        <section className="pt-12 pb-8 px-4 sm:px-6">
          <div className="container mx-auto max-w-7xl">
            <Button variant="ghost" onClick={() => navigate('/industries')} className="mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Industries
            </Button>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-foreground">
              {industry.name} Solutions
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl">{industry.description}</p>
          </div>
        </section>

        {/* Overview */}
        <section className="py-12 px-4 sm:px-6">
          <div className="container mx-auto max-w-7xl">
            <div className="max-w-4xl">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-foreground">Industry Overview</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">{industry.overview}</p>
            </div>
          </div>
        </section>

        {/* Challenges */}
        <section className="py-12 px-4 sm:px-6 bg-muted/30">
          <div className="container mx-auto max-w-7xl">
            <div className="flex items-center gap-3 mb-8">
              <TrendingUp className="w-8 h-8 text-primary" />
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Industry Challenges</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {industry.challenges.map((challenge, index) => (
                <div key={index} className="bg-card border border-border rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Zap className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-foreground">{challenge}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions */}
        <section className="py-12 px-4 sm:px-6">
          <div className="container mx-auto max-w-7xl">
            <div className="flex items-center gap-3 mb-8">
              <CheckCircle className="w-8 h-8 text-primary" />
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Our Solutions</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {industry.solutions.map((solution, index) => (
                <div key={index} className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors">
                  <div className="flex items-center gap-2 text-foreground font-medium mb-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    {solution}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-12 px-4 sm:px-6 bg-muted/30">
          <div className="container mx-auto max-w-7xl">
            <div className="flex items-center gap-3 mb-8">
              <Users className="w-8 h-8 text-primary" />
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Related Services</h2>
            </div>
            <div className="flex flex-wrap gap-4">
              {industry.services.map((service, index) => (
                <Button
                  key={index}
                  variant="outline"
                  onClick={() => navigate(service)}
                  className="rounded-full"
                >
                  {service.replace('/', '').replace('-', ' ')}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-12 px-4 sm:px-6">
          <div className="container mx-auto max-w-7xl">
            <div className="flex items-center gap-3 mb-8">
              <Shield className="w-8 h-8 text-primary" />
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Frequently Asked Questions</h2>
            </div>
            <div className="space-y-4 max-w-4xl">
              {industry.faqs.map((faq, index) => (
                <div key={index} className="bg-card border border-border rounded-lg p-6">
                  <h3 className="font-semibold text-foreground mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 px-4 sm:px-6 bg-primary/10">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-foreground">
              Ready to Transform Your {industry.name} Operations?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's discuss how our industry expertise can drive your digital transformation.
            </p>
            <Button size="lg" onClick={() => navigate('/contact')} className="rounded-full px-8 py-6">
              Schedule Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>

        {/* Content Cluster - Related Technologies */}
        <section className="py-16 sm:py-20 md:py-24 bg-muted/30">
          <div className="container mx-auto px-6 max-w-6xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-center">
              Technologies We Use for {industry.name}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {['React', 'Next.js', 'Node.js', 'TypeScript', 'Shopify'].map((tech) => (
                <Link
                  key={tech}
                  to={`/technologies/${tech.toLowerCase()}`}
                  className="bg-card border border-border rounded-lg p-4 hover:border-primary/50 transition-all hover:scale-105 text-center"
                >
                  <h3 className="font-semibold text-sm">{tech}</h3>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Content Cluster - Related Resources */}
        <section className="py-16 sm:py-20 md:py-24 bg-background">
          <div className="container mx-auto px-6 max-w-6xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-center">
              Resources for {industry.name}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: 'Industry Guide', href: '/resources', desc: 'Comprehensive guide' },
                { name: 'Case Studies', href: '/projects', desc: 'Success stories' },
                { name: 'Blog Articles', href: '/blog', desc: 'Latest insights' }
              ].map((resource) => (
                <Link
                  key={resource.name}
                  to={resource.href}
                  className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all hover:scale-105"
                >
                  <h3 className="font-semibold text-lg mb-2">{resource.name}</h3>
                  <p className="text-muted-foreground text-sm">{resource.desc}</p>
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

export default IndustryDetail;
