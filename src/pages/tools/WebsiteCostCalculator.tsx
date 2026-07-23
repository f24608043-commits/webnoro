import { useState } from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Breadcrumb } from '@/components/Breadcrumb';
import { Calculator, CheckCircle2, Info } from 'lucide-react';

const WebsiteCostCalculator = () => {
  const [formData, setFormData] = useState({
    websiteType: 'business',
    pages: 5,
    designLevel: 'standard',
    features: [] as string[],
    ecommerce: false,
    cms: false,
    seo: false,
    maintenance: false
  });

  const [estimatedCost, setEstimatedCost] = useState(0);

  const websiteTypes = [
    { id: 'business', name: 'Business Website', basePrice: 1000 },
    { id: 'ecommerce', name: 'E-commerce Store', basePrice: 3000 },
    { id: 'portfolio', name: 'Portfolio/Creative', basePrice: 800 },
    { id: 'custom', name: 'Custom Application', basePrice: 5000 }
  ];

  const designLevels = [
    { id: 'basic', name: 'Basic', multiplier: 1 },
    { id: 'standard', name: 'Standard', multiplier: 1.5 },
    { id: 'premium', name: 'Premium', multiplier: 2.5 }
  ];

  const featureOptions = [
    { id: 'blog', name: 'Blog System', price: 500 },
    { id: 'contact', name: 'Advanced Contact Forms', price: 300 },
    { id: 'gallery', name: 'Image Gallery', price: 400 },
    { id: 'social', name: 'Social Media Integration', price: 200 },
    { id: 'analytics', name: 'Analytics Dashboard', price: 600 },
    { id: 'multilingual', name: 'Multi-language Support', price: 1000 }
  ];

  const additionalServices = [
    { id: 'ecommerce', name: 'E-commerce Functionality', price: 2000 },
    { id: 'cms', name: 'Content Management System', price: 800 },
    { id: 'seo', name: 'SEO Optimization Package', price: 1500 },
    { id: 'maintenance', name: 'Annual Maintenance Plan', price: 1200 }
  ];

  const calculateCost = () => {
    const baseWebsite = websiteTypes.find(w => w.id === formData.websiteType);
    const design = designLevels.find(d => d.id === formData.designLevel);
    
    let total = (baseWebsite?.basePrice || 1000) * (design?.multiplier || 1);
    total += (formData.pages - 1) * 200; // Additional pages
    
    formData.features.forEach(featureId => {
      const feature = featureOptions.find(f => f.id === featureId);
      if (feature) total += feature.price;
    });

    if (formData.ecommerce) total += 2000;
    if (formData.cms) total += 800;
    if (formData.seo) total += 1500;
    if (formData.maintenance) total += 1200;

    setEstimatedCost(total);
  };

  const handleFeatureToggle = (featureId: string) => {
    setFormData(prev => ({
      ...prev,
      features: prev.features.includes(featureId)
        ? prev.features.filter(f => f !== featureId)
        : [...prev.features, featureId]
    }));
  };

  useState(() => {
    calculateCost();
  });

  const breadcrumbItems = [
    { name: 'Home', path: '/' },
    { name: 'Tools', path: '/tools' },
    { name: 'Website Cost Calculator', path: '/tools/website-cost-calculator' }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <div className="pt-20 container mx-auto px-4 sm:px-6">
        <Breadcrumb items={breadcrumbItems} />
      </div>

      <div className="py-16 sm:py-20 md:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 flex items-center justify-center gap-3">
                <Calculator className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
                Website Cost Calculator
              </h1>
              <p className="text-muted-foreground text-lg">
                Get an instant estimate for your website project
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Calculator Form */}
              <div className="space-y-6">
                {/* Website Type */}
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="font-semibold mb-4">Website Type</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {websiteTypes.map(type => (
                      <button
                        key={type.id}
                        onClick={() => {
                          setFormData(prev => ({ ...prev, websiteType: type.id }));
                          calculateCost();
                        }}
                        className={`p-3 rounded-lg border-2 transition-all ${
                          formData.websiteType === type.id
                            ? 'border-primary bg-primary/10'
                            : 'border-border hover:border-primary/50'
                        }`}
                      >
                        <div className="font-medium text-sm">{type.name}</div>
                        <div className="text-xs text-muted-foreground mt-1">
                          From ${type.basePrice}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Number of Pages */}
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="font-semibold mb-4">Number of Pages</h3>
                  <input
                    type="range"
                    min="1"
                    max="50"
                    value={formData.pages}
                    onChange={(e) => {
                      setFormData(prev => ({ ...prev, pages: parseInt(e.target.value) }));
                      calculateCost();
                    }}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground mt-2">
                    <span>1 page</span>
                    <span className="font-semibold text-foreground">{formData.pages} pages</span>
                    <span>50 pages</span>
                  </div>
                </div>

                {/* Design Level */}
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="font-semibold mb-4">Design Level</h3>
                  <div className="space-y-3">
                    {designLevels.map(level => (
                      <button
                        key={level.id}
                        onClick={() => {
                          setFormData(prev => ({ ...prev, designLevel: level.id }));
                          calculateCost();
                        }}
                        className={`w-full p-4 rounded-lg border-2 transition-all text-left ${
                          formData.designLevel === level.id
                            ? 'border-primary bg-primary/10'
                            : 'border-border hover:border-primary/50'
                        }`}
                      >
                        <div className="font-medium">{level.name}</div>
                        <div className="text-sm text-muted-foreground mt-1">
                          {level.multiplier}x base price
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="font-semibold mb-4">Additional Features</h3>
                  <div className="space-y-3">
                    {featureOptions.map(feature => (
                      <label
                        key={feature.id}
                        className="flex items-center justify-between p-3 rounded-lg border border-border hover:border-primary/50 cursor-pointer transition-all"
                      >
                        <div className="flex items-center gap-3">
                          <input
                            type="checkbox"
                            checked={formData.features.includes(feature.id)}
                            onChange={() => {
                              handleFeatureToggle(feature.id);
                              calculateCost();
                            }}
                            className="w-5 h-5 rounded border-border"
                          />
                          <span className="font-medium">{feature.name}</span>
                        </div>
                        <span className="text-sm text-muted-foreground">+${feature.price}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Additional Services */}
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="font-semibold mb-4">Additional Services</h3>
                  <div className="space-y-3">
                    {additionalServices.map(service => (
                      <label
                        key={service.id}
                        className="flex items-center justify-between p-3 rounded-lg border border-border hover:border-primary/50 cursor-pointer transition-all"
                      >
                        <div className="flex items-center gap-3">
                          <input
                            type="checkbox"
                            checked={formData[service.id as keyof typeof formData] as boolean}
                            onChange={(e) => {
                              setFormData(prev => ({ ...prev, [service.id]: e.target.checked }));
                              calculateCost();
                            }}
                            className="w-5 h-5 rounded border-border"
                          />
                          <span className="font-medium">{service.name}</span>
                        </div>
                        <span className="text-sm text-muted-foreground">+${service.price}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              {/* Cost Estimate */}
              <div className="space-y-6">
                <div className="bg-primary text-black rounded-lg p-8 sticky top-24">
                  <h3 className="font-semibold mb-6 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5" />
                    Estimated Cost
                  </h3>
                  <div className="text-4xl sm:text-5xl font-bold mb-6">
                    ${estimatedCost.toLocaleString()}
                  </div>
                  <div className="space-y-2 text-sm mb-6">
                    <div className="flex justify-between">
                      <span>Base Website</span>
                      <span>${(websiteTypes.find(w => w.id === formData.websiteType)?.basePrice || 1000).toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Design Multiplier</span>
                      <span>x{designLevels.find(d => d.id === formData.designLevel)?.multiplier || 1}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Additional Pages</span>
                      <span>${((formData.pages - 1) * 200).toLocaleString()}</span>
                    </div>
                    {formData.features.length > 0 && (
                      <div className="flex justify-between">
                        <span>Features</span>
                        <span>${formData.features.reduce((sum, f) => {
                          const feature = featureOptions.find(opt => opt.id === f);
                          return sum + (feature?.price || 0);
                        }, 0).toLocaleString()}</span>
                      </div>
                    )}
                    {(formData.ecommerce || formData.cms || formData.seo || formData.maintenance) && (
                      <div className="flex justify-between">
                        <span>Additional Services</span>
                        <span>${[
                          formData.ecommerce ? 2000 : 0,
                          formData.cms ? 800 : 0,
                          formData.seo ? 1500 : 0,
                          formData.maintenance ? 1200 : 0
                        ].reduce((a, b) => a + b, 0).toLocaleString()}</span>
                      </div>
                    )}
                  </div>
                  <div className="flex items-start gap-2 text-xs bg-black/10 p-3 rounded-lg">
                    <Info className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <p>This is an estimate. Final pricing may vary based on specific requirements. Contact us for a detailed quote.</p>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="font-semibold mb-4">Get a Detailed Quote</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Ready to start your project? Get in touch with our team for a comprehensive proposal tailored to your needs.
                  </p>
                  <button
                    onClick={() => window.location.href = '/contact'}
                    className="w-full bg-primary text-black py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all"
                  >
                    Request Free Quote
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default WebsiteCostCalculator;
