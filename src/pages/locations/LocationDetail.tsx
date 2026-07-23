import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams, useNavigate } from 'react-router-dom';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, MapPin, Phone, Mail, Clock, Globe } from 'lucide-react';

const locationData: Record<string, {
  name: string;
  region: string;
  description: string;
  overview: string;
  services: string[];
  marketInsights: string[];
  contactInfo: {
    phone?: string;
    email?: string;
    hours?: string;
  };
  faqs: { question: string; answer: string }[];
}> = {
  pakistan: {
    name: 'Pakistan',
    region: 'South Asia',
    description: 'Our home base with deep local market understanding across Lahore, Islamabad, and Karachi',
    overview: 'Pakistan is our home market, where we have established deep roots and comprehensive understanding of the local business landscape. From the tech hubs of Lahore and Islamabad to the commercial center of Karachi, we serve businesses across the country with tailored digital solutions that respect local culture while embracing global best practices.',
    services: ['Web Development', 'E-commerce Solutions', 'Digital Marketing', 'Mobile Apps', 'SEO Services', 'Branding'],
    marketInsights: [
      'Growing digital adoption with 100M+ internet users',
      'E-commerce market experiencing rapid growth',
      'Strong demand for mobile-first solutions',
      'Increasing focus on digital transformation across sectors'
    ],
    contactInfo: {
      phone: '+92 300 1234567',
      email: 'pakistan@nexagrowth.com',
      hours: 'Mon-Fri 9AM-6PM PKT'
    },
    faqs: [
      {
        question: 'What services do you offer in Pakistan?',
        answer: 'We offer our full range of services in Pakistan including web development, e-commerce solutions, digital marketing, mobile app development, SEO, and branding. Our local team understands the Pakistani market deeply.'
      },
      {
        question: 'Do you have offices in Pakistan?',
        answer: 'Yes, we have our headquarters in Lahore with team members in Islamabad and Karachi. This allows us to provide on-ground support and understand local market nuances.'
      },
      {
        question: 'What payment methods do you accept in Pakistan?',
        answer: 'We accept bank transfers, JazzCash, EasyPaisa, and international payments via Stripe/PayPal for clients who prefer those methods.'
      }
    ]
  },
  'united-kingdom': {
    name: 'United Kingdom',
    region: 'Europe',
    description: 'Serving the UK market with European expertise across London and Manchester',
    overview: 'The UK represents one of our key international markets. With a presence in London and Manchester, we serve British businesses with solutions that meet European standards while understanding the unique needs of the UK market. Our team combines global expertise with local market knowledge.',
    services: ['Web Development', 'E-commerce Solutions', 'Digital Marketing', 'SEO Services', 'Consulting'],
    marketInsights: [
      'Mature digital market with high expectations',
      'Strong focus on data privacy (GDPR compliance)',
      'Growing demand for sustainable digital solutions',
      'High adoption of e-commerce and digital services'
    ],
    contactInfo: {
      phone: '+44 20 1234 5678',
      email: 'uk@nexagrowth.com',
      hours: 'Mon-Fri 9AM-6PM GMT'
    },
    faqs: [
      {
        question: 'Are you GDPR compliant for UK clients?',
        answer: 'Yes, we are fully GDPR compliant. All our processes, data handling, and development practices adhere to GDPR requirements to ensure your data and your customers\' data are protected.'
      },
      {
        question: 'Do you work with UK startups?',
        answer: 'Absolutely. We have extensive experience working with UK startups, helping them build MVPs, scale their platforms, and navigate the competitive UK digital landscape.'
      },
      {
        question: 'Can you work with UK time zones?',
        answer: 'Yes, we have team members who can work UK hours and we\'re experienced in remote collaboration with UK clients across different time zones.'
      }
    ]
  },
  'united-states': {
    name: 'United States',
    region: 'North America',
    description: 'Coast-to-coast coverage across New York, California, and Texas',
    overview: 'The US market represents a significant portion of our international business. With clients and team presence across New York, California, and Texas, we understand the diverse needs of American businesses from coast to coast. We deliver solutions that meet US standards while bringing global perspectives.',
    services: ['Web Development', 'E-commerce Solutions', 'Digital Marketing', 'Mobile Apps', 'Enterprise Solutions'],
    marketInsights: [
      'Largest and most competitive digital market',
      'High expectations for user experience and performance',
      'Strong focus on accessibility (ADA compliance)',
      'Mature e-commerce with high average order values'
    ],
    contactInfo: {
      phone: '+1 212 345 6789',
      email: 'usa@nexagrowth.com',
      hours: 'Mon-Fri 9AM-6PM EST'
    },
    faqs: [
      {
        question: 'Are you familiar with US compliance requirements?',
        answer: 'Yes, we are well-versed in US compliance requirements including ADA accessibility standards, CCPA/CPRA privacy laws, and industry-specific regulations like HIPAA for healthcare.'
      },
      {
        question: 'Do you have experience with US enterprise clients?',
        answer: 'Yes, we have worked with US enterprises of various sizes. Our team understands enterprise requirements including security, scalability, and integration with existing systems.'
      },
      {
        question: 'Can you handle US-scale traffic and requirements?',
        answer: 'Absolutely. We build solutions designed to handle US-scale traffic with proper load balancing, CDN integration, and scalable architecture that can grow with your business.'
      }
    ]
  },
  canada: {
    name: 'Canada',
    region: 'North America',
    description: 'Canadian market expertise across Toronto and Vancouver',
    overview: 'Canada represents an important market for us with a growing digital economy. Serving Toronto and Vancouver, we understand the unique Canadian business landscape that balances American influence with European sensibilities. We deliver solutions that resonate with Canadian values and market expectations.',
    services: ['Web Development', 'E-commerce Solutions', 'Digital Marketing', 'SEO Services', 'Bilingual Solutions'],
    marketInsights: [
      'Growing digital economy with government support',
      'Bilingual requirements (English/French) in many sectors',
      'Strong focus on privacy and data protection',
      'High internet penetration and digital adoption'
    ],
    contactInfo: {
      phone: '+1 416 987 6543',
      email: 'canada@nexagrowth.com',
      hours: 'Mon-Fri 9AM-6PM EST'
    },
    faqs: [
      {
        question: 'Do you offer bilingual (English/French) solutions?',
        answer: 'Yes, we can build bilingual websites and applications that serve both English and French-speaking Canadian audiences, including proper language switching and content management.'
      },
      {
        question: 'Are you familiar with Canadian privacy laws?',
        answer: 'Yes, we are familiar with PIPEDA and other Canadian privacy regulations. Our solutions are designed to comply with Canadian data protection requirements.'
      },
      {
        question: 'Do you work with Canadian government clients?',
        answer: 'We have experience working with Canadian government organizations and understand the specific requirements including accessibility standards, security protocols, and procurement processes.'
      }
    ]
  },
  germany: {
    name: 'Germany',
    region: 'European Union',
    description: 'European Union market access and German engineering standards across Berlin and Munich',
    overview: 'Germany represents our gateway to the European Union market. With presence in Berlin and Munich, we serve German businesses with solutions that meet the high standards expected in the German market while providing access to the broader EU market. We understand German business culture and technical expectations.',
    services: ['Web Development', 'E-commerce Solutions', 'Enterprise Software', 'Engineering Solutions', 'Consulting'],
    marketInsights: [
      'Strong engineering culture with high quality standards',
      'GDPR compliance is mandatory and strictly enforced',
      'Growing digital transformation in traditional industries',
      'Focus on data security and privacy'
    ],
    contactInfo: {
      phone: '+49 30 1234567',
      email: 'germany@nexagrowth.com',
      hours: 'Mon-Fri 9AM-6PM CET'
    },
    faqs: [
      {
        question: 'Are you GDPR compliant for German clients?',
        answer: 'Yes, we are fully GDPR compliant. Our development practices, data handling, and server infrastructure all meet German and EU data protection requirements.'
      },
      {
        question: 'Do you understand German business culture?',
        answer: 'Yes, we have team members familiar with German business culture and communication styles. We understand the importance of precision, reliability, and thoroughness in German business relationships.'
      },
      {
        question: 'Can you handle German language requirements?',
        answer: 'Absolutely. We build fully localized German-language websites and applications, including proper German grammar, cultural adaptation, and SEO for German search engines.'
      }
    ]
  },
  netherlands: {
    name: 'Netherlands',
    region: 'European Union',
    description: 'Dutch market expertise and European hub access across Amsterdam and Rotterdam',
    overview: 'The Netherlands serves as our European hub, giving us access to the broader EU market. With presence in Amsterdam and Rotterdam, we serve Dutch businesses with solutions that meet their high standards for digital innovation while understanding the pragmatic Dutch business approach.',
    services: ['Web Development', 'E-commerce Solutions', 'Digital Marketing', 'Innovation Consulting', 'Startup Support'],
    marketInsights: [
      'High digital literacy and adoption rates',
      'Strong startup ecosystem and innovation culture',
      'English widely accepted in business',
      'Focus on sustainability and digital innovation'
    ],
    contactInfo: {
      phone: '+31 20 1234567',
      email: 'netherlands@nexagrowth.com',
      hours: 'Mon-Fri 9AM-6PM CET'
    },
    faqs: [
      {
        question: 'Do you work with Dutch startups?',
        answer: 'Yes, we have extensive experience with Dutch startups. We understand the Dutch startup ecosystem, funding landscape, and the importance of rapid MVP development and iteration.'
      },
      {
        question: 'Are you familiar with Dutch business practices?',
        answer: 'Yes, we understand the Dutch direct communication style, flat organizational structures, and focus on practical solutions. We adapt our working style to match Dutch business expectations.'
      },
      {
        question: 'Can you serve as a gateway to other EU markets?',
        answer: 'Absolutely. Our presence in the Netherlands gives us insight into the broader EU market. We can help Dutch businesses expand into other European countries with localized solutions.'
      }
    ]
  },
  australia: {
    name: 'Australia',
    region: 'Asia-Pacific',
    description: 'Asia-Pacific market coverage and Australian expertise across Sydney and Melbourne',
    overview: 'Australia represents our key market in the Asia-Pacific region. With presence in Sydney and Melbourne, we serve Australian businesses with solutions that understand the unique Australian market while providing access to broader Asia-Pacific opportunities. We appreciate the Australian emphasis on work-life balance and practical outcomes.',
    services: ['Web Development', 'E-commerce Solutions', 'Digital Marketing', 'Mobile Apps', 'Asia-Pacific Expansion'],
    marketInsights: [
      'High digital adoption and mobile usage',
      'Growing e-commerce market with cross-border shopping',
      'Focus on user experience and accessibility',
      'Gateway to Asia-Pacific market'
    ],
    contactInfo: {
      phone: '+61 2 9876 5432',
      email: 'australia@nexagrowth.com',
      hours: 'Mon-Fri 9AM-6PM AEST'
    },
    faqs: [
      {
        question: 'Do you understand Australian market nuances?',
        answer: 'Yes, we understand the Australian market including the importance of local references, Australian humor in marketing, and the preference for straightforward, no-nonsense communication.'
      },
      {
        question: 'Can you help Australian businesses expand to Asia?',
        answer: 'Yes, our understanding of both Australian and Asian markets positions us well to help Australian businesses expand into the Asia-Pacific region with culturally appropriate digital solutions.'
      },
      {
        question: 'Do you work with Australian time zones?',
        answer: 'Yes, we have team members who can work Australian hours and we\'re experienced in managing projects across the significant time difference between Australia and other regions.'
      }
    ]
  }
};

const LocationDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const location = slug ? locationData[slug] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!location) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold mb-4">Location Not Found</h1>
          <Button onClick={() => navigate('/locations')}>Back to Locations</Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{location.name} Services | Nexa Growth Solutions</title>
        <meta name="description" content={location.description} />
        <meta name="keywords" content={`${location.name} digital services, ${location.name} web development, ${location.name} e-commerce, Nexa Growth Solutions ${location.name}`} />
        <link rel="canonical" href={`https://nexagrowth.com/locations/${slug}`} />
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
                <button onClick={() => navigate('/locations')} className="hover:text-primary">Locations</button>
              </li>
              <li>/</li>
              <li className="text-foreground font-medium">{location.name}</li>
            </ol>
          </div>
        </nav>

        {/* Hero */}
        <section className="pt-12 pb-8 px-4 sm:px-6">
          <div className="container mx-auto max-w-7xl">
            <Button variant="ghost" onClick={() => navigate('/locations')} className="mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Locations
            </Button>
            <div className="flex items-center gap-3 mb-4">
              <Globe className="w-8 h-8 text-primary" />
              <span className="text-muted-foreground">{location.region}</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-foreground">
              {location.name}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl">{location.description}</p>
          </div>
        </section>

        {/* Overview */}
        <section className="py-12 px-4 sm:px-6">
          <div className="container mx-auto max-w-7xl">
            <div className="max-w-4xl">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-foreground">Market Overview</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">{location.overview}</p>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-12 px-4 sm:px-6 bg-muted/30">
          <div className="container mx-auto max-w-7xl">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-foreground">Services Available in {location.name}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {location.services.map((service, index) => (
                <div key={index} className="bg-card border border-border rounded-lg p-4 flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="text-foreground">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Market Insights */}
        <section className="py-12 px-4 sm:px-6">
          <div className="container mx-auto max-w-7xl">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-foreground">Market Insights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {location.marketInsights.map((insight, index) => (
                <div key={index} className="bg-card border border-border rounded-lg p-6">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Globe className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-muted-foreground">{insight}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-12 px-4 sm:px-6 bg-muted/30">
          <div className="container mx-auto max-w-7xl">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-foreground">Contact {location.name} Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {location.contactInfo.phone && (
                <div className="bg-card border border-border rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <Phone className="w-5 h-5 text-primary" />
                    <span className="font-medium text-foreground">Phone</span>
                  </div>
                  <p className="text-muted-foreground">{location.contactInfo.phone}</p>
                </div>
              )}
              {location.contactInfo.email && (
                <div className="bg-card border border-border rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <Mail className="w-5 h-5 text-primary" />
                    <span className="font-medium text-foreground">Email</span>
                  </div>
                  <p className="text-muted-foreground">{location.contactInfo.email}</p>
                </div>
              )}
              {location.contactInfo.hours && (
                <div className="bg-card border border-border rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <Clock className="w-5 h-5 text-primary" />
                    <span className="font-medium text-foreground">Hours</span>
                  </div>
                  <p className="text-muted-foreground">{location.contactInfo.hours}</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-12 px-4 sm:px-6">
          <div className="container mx-auto max-w-7xl">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-foreground">Frequently Asked Questions</h2>
            <div className="space-y-4 max-w-4xl">
              {location.faqs.map((faq, index) => (
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
              Ready to Start Your Project in {location.name}?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's discuss how we can help you succeed in the {location.name} market.
            </p>
            <Button size="lg" onClick={() => navigate('/contact')} className="rounded-full px-8 py-6">
              Schedule Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default LocationDetail;
