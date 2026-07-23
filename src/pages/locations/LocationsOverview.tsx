import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { MapPin, Globe, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const locations = [
  {
    region: 'Pakistan',
    cities: ['Lahore', 'Islamabad', 'Karachi'],
    description: 'Our home base with deep local market understanding'
  },
  {
    region: 'United Kingdom',
    cities: ['London', 'Manchester'],
    description: 'Serving the UK market with European expertise'
  },
  {
    region: 'United States',
    cities: ['New York', 'California', 'Texas'],
    description: 'Coast-to-coast coverage across major US markets'
  },
  {
    region: 'Canada',
    cities: ['Toronto', 'Vancouver'],
    description: 'Canadian market expertise and local presence'
  },
  {
    region: 'Germany',
    cities: ['Berlin', 'Munich'],
    description: 'European Union market access and German engineering standards'
  },
  {
    region: 'Netherlands',
    cities: ['Amsterdam', 'Rotterdam'],
    description: 'Dutch market expertise and European hub access'
  },
  {
    region: 'Australia',
    cities: ['Sydney', 'Melbourne'],
    description: 'Asia-Pacific market coverage and Australian expertise'
  }
];

const LocationsOverview = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Locations We Serve | Nexa Growth Solutions</title>
        <meta name="description" content="Nexa Growth Solutions provides digital services across Pakistan, the United Kingdom, the United States, Canada, Germany, the Netherlands, and Australia with local market expertise." />
        <meta name="keywords" content="global services, Pakistan, UK, USA, Canada, Germany, Netherlands, Australia, local digital services, international web development" />
        <link rel="canonical" href="https://nexagrowth.com/locations" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />

        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 sm:px-6">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-foreground">
                Global <span className="text-primary">Presence</span>, Local Expertise
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed">
                We serve clients across Pakistan, the UK, the USA, Canada, Germany, the Netherlands, and Australia with deep local market understanding and global best practices.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" onClick={() => navigate('/contact')} className="rounded-full px-8 py-6">
                  Find Your Location
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" onClick={() => navigate('/projects')} className="rounded-full px-8 py-6">
                  View Global Projects
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Locations Grid */}
        <section className="py-20 px-4 sm:px-6 bg-muted/30">
          <div className="container mx-auto max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {locations.map((location) => (
                <div
                  key={location.region}
                  onClick={() => navigate(`/locations/${location.region.toLowerCase().replace(/\s+/g, '-')}`)}
                  className="group bg-card border border-border rounded-2xl p-6 hover:border-primary/50 hover:shadow-lg transition-all duration-300 cursor-pointer text-center"
                >
                  <div className="flex flex-col items-center justify-center gap-4 mb-4">
                    <div className="p-3 bg-primary/10 rounded-xl text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Globe className="w-8 h-8" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground">{location.region}</h3>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">{location.description}</p>
                  <div className="space-y-2">
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Cities We Serve:</p>
                    <div className="flex flex-wrap gap-2">
                      {location.cities.map((city) => (
                        <span key={city} className="text-sm bg-muted px-2 py-1 rounded text-foreground">
                          {city}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center text-primary font-medium mt-4 group-hover:underline">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Global Presence Matters */}
        <section className="py-20 px-4 sm:px-6">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
                Why Our Global Presence Matters
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                We combine global expertise with local market understanding to deliver solutions that truly resonate with your target audience.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">7+</div>
                <div className="text-muted-foreground">Countries Served</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">15+</div>
                <div className="text-muted-foreground">Major Cities</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                <div className="text-muted-foreground">Global Support</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 bg-primary/10">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-foreground">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Whether you're in Pakistan, the UK, the USA, or anywhere else, we're ready to help you succeed.
            </p>
            <Button size="lg" onClick={() => navigate('/contact')} className="rounded-full px-10 py-6">
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

export default LocationsOverview;
