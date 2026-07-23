import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Building2, GraduationCap, Home, Scale, Utensils, HardHat, Rocket, ShoppingCart, Heart, DollarSign, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const industries = [
  {
    name: 'Healthcare',
    description: 'Digital solutions for medical practices, hospitals, and healthcare providers',
    icon: <Heart className="w-8 h-8" />,
    slug: 'healthcare',
    challenges: ['Patient engagement', 'HIPAA compliance', 'Telemedicine integration', 'Data security']
  },
  {
    name: 'Education',
    description: 'E-learning platforms and educational technology solutions',
    icon: <GraduationCap className="w-8 h-8" />,
    slug: 'education',
    challenges: ['Student engagement', 'Remote learning', 'Content management', 'Accessibility']
  },
  {
    name: 'Real Estate',
    description: 'Property management and real estate marketing solutions',
    icon: <Home className="w-8 h-8" />,
    slug: 'real-estate',
    challenges: ['Lead generation', 'Virtual tours', 'Property management', 'Market analysis']
  },
  {
    name: 'Legal',
    description: 'Law firm websites and legal practice management tools',
    icon: <Scale className="w-8 h-8" />,
    slug: 'legal',
    challenges: ['Client acquisition', 'Case management', 'Document automation', 'Online consultations']
  },
  {
    name: 'Restaurants',
    description: 'Food service digital solutions and online ordering systems',
    icon: <Utensils className="w-8 h-8" />,
    slug: 'restaurants',
    challenges: ['Online ordering', 'Delivery management', 'Customer loyalty', 'Inventory tracking']
  },
  {
    name: 'Construction',
    description: 'Construction management and contractor digital solutions',
    icon: <HardHat className="w-8 h-8" />,
    slug: 'construction',
    challenges: ['Project management', 'Client communication', 'Resource planning', 'Safety compliance']
  },
  {
    name: 'Startups',
    description: 'MVP development and scalable solutions for emerging businesses',
    icon: <Rocket className="w-8 h-8" />,
    slug: 'startups',
    challenges: ['Rapid prototyping', 'Scalability', 'Budget constraints', 'Time-to-market']
  },
  {
    name: 'E-commerce',
    description: 'Online retail solutions and digital commerce platforms',
    icon: <ShoppingCart className="w-8 h-8" />,
    slug: 'ecommerce',
    challenges: ['Conversion optimization', 'Inventory management', 'Payment processing', 'Customer retention']
  },
  {
    name: 'Nonprofits',
    description: 'Digital solutions for charitable organizations and NGOs',
    icon: <Heart className="w-8 h-8" />,
    slug: 'nonprofits',
    challenges: ['Donation management', 'Volunteer coordination', 'Impact reporting', 'Community engagement']
  },
  {
    name: 'Finance',
    description: 'Fintech solutions and financial services digital platforms',
    icon: <DollarSign className="w-8 h-8" />,
    slug: 'finance',
    challenges: ['Security compliance', 'User trust', 'Regulatory requirements', 'Data privacy']
  }
];

const IndustriesOverview = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Industries We Serve | Nexa Growth Solutions</title>
        <meta name="description" content="Nexa Growth Solutions provides digital transformation services across healthcare, education, real estate, legal, restaurants, construction, startups, e-commerce, nonprofits, and finance sectors." />
        <meta name="keywords" content="industry solutions, healthcare IT, education technology, real estate tech, legal tech, restaurant technology, construction software, startup development, e-commerce solutions, nonprofit technology, fintech" />
        <link rel="canonical" href="https://nexagrowth.com/industries" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />

        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 sm:px-6">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-foreground">
                Industries We <span className="text-primary">Transform</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed">
                We deliver tailored digital solutions that address the unique challenges and opportunities across diverse industries.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" onClick={() => navigate('/contact')} className="rounded-full px-8 py-6">
                  Discuss Your Industry
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" onClick={() => navigate('/projects')} className="rounded-full px-8 py-6">
                  View Industry Projects
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Industries Grid */}
        <section className="py-20 px-4 sm:px-6 bg-muted/30">
          <div className="container mx-auto max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {industries.map((industry) => (
                <div
                  key={industry.slug}
                  onClick={() => navigate(`/industries/${industry.slug}`)}
                  className="group bg-card border border-border rounded-2xl p-6 hover:border-primary/50 hover:shadow-lg transition-all duration-300 cursor-pointer"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-primary/10 rounded-xl text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      {industry.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground">{industry.name}</h3>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">{industry.description}</p>
                  <div className="space-y-2">
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Key Challenges We Solve:</p>
                    <ul className="space-y-1">
                      {industry.challenges.slice(0, 3).map((challenge, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {challenge}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex items-center text-primary font-medium mt-4 group-hover:underline">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Industry Expertise Matters */}
        <section className="py-20 px-4 sm:px-6">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
                Why Industry-Specific Solutions Matter
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Every industry has unique challenges, regulations, and opportunities. We bring deep domain expertise to deliver solutions that truly work.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">10+</div>
                <div className="text-muted-foreground">Industries Served</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">100%</div>
                <div className="text-muted-foreground">Custom Solutions</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                <div className="text-muted-foreground">Industry Support</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 bg-primary/10">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-foreground">
              Ready to Transform Your Industry?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's discuss how our industry expertise can drive your digital transformation.
            </p>
            <Button size="lg" onClick={() => navigate('/contact')} className="rounded-full px-10 py-6">
              Schedule Industry Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default IndustriesOverview;
