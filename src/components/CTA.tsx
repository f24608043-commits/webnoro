import { ArrowRight, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CTAProps {
  title?: string;
  description?: string;
  primaryText?: string;
  primaryLink?: string;
  secondaryText?: string;
  secondaryLink?: string;
  variant?: 'default' | 'compact' | 'full-width';
  className?: string;
}

export const CTA = ({
  title = "Ready to Grow Your Business?",
  description = "Let's discuss how we can help you achieve your growth goals.",
  primaryText = "Get Started",
  primaryLink = "/contact",
  secondaryText = "Learn More",
  secondaryLink = "/services",
  variant = 'default',
  className = ''
}: CTAProps) => {
  const baseClasses = "bg-primary text-black";
  
  const variantClasses = {
    default: "py-16 sm:py-20 md:py-24",
    compact: "py-8 sm:py-10 md:py-12",
    'full-width': "py-20 sm:py-24 md:py-28"
  };

  return (
    <section className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            {title}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-black/80 mb-8 sm:mb-10 max-w-2xl mx-auto">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to={primaryLink}
              className="inline-flex items-center justify-center gap-2 bg-black text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-black/90 transition-all duration-300 hover:scale-105 w-full sm:w-auto"
            >
              {primaryText}
              <ArrowRight className="w-4 h-4" />
            </Link>
            {secondaryText && secondaryLink && (
              <Link
                to={secondaryLink}
                className="inline-flex items-center justify-center gap-2 bg-white text-black px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-white/90 transition-all duration-300 hover:scale-105 w-full sm:w-auto"
              >
                {secondaryText}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export const ContactCTA = ({ className = '' }: { className?: string }) => (
  <section className={`bg-muted/50 py-16 sm:py-20 md:py-24 ${className}`}>
    <div className="container mx-auto px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Let's Talk About Your Project
            </h2>
            <p className="text-muted-foreground mb-6">
              Ready to take your business to the next level? Get in touch with our team today.
            </p>
            <div className="space-y-4">
              <a
                href="tel:+923711633762"
                className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>+92 371 1633762</span>
              </a>
              <a
                href="mailto:nexagrowthsolution@gmail.com"
                className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>nexagrowthsolution@gmail.com</span>
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-primary text-black px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 hover:scale-105 w-full md:w-auto"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
);
