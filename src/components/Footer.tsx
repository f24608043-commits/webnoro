import { Linkedin, Instagram, Facebook, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navigationLinks = [
    { name: 'Amazon Growth Services', href: '/ecommerce' },
    { name: 'Marketing', href: '/digital-marketing' },
    { name: 'Business Growth', href: '/accounting' },
    { name: 'Content', href: '/graphic-designing' },
    { name: 'Amazon PPC Management', href: '/ecommerce#ppc' },
    { name: 'SEO & Performance Marketing', href: '/digital-marketing#seo' },
    { name: 'Projects', href: '/projects' },
    { name: 'About Us', href: '/about' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact Us', href: '/contact' },
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms of Service', href: '/terms-of-service' },
  ];

  const servicesData = [
    {
      id: 'digital-marketing',
      title: 'Marketing',
      description: 'Data-driven SEO, social media, paid advertising, content creation, and high-conversion branding.',
    },
    {
      id: 'accounting',
      title: 'Business Growth',
      description: 'Profit tracking, financial forecasting, and marketplace-focused intelligence systems.',
    },
    {
      id: 'graphic-designing',
      title: 'Content',
      description: 'High-impact branding, ad visuals, and conversion-driven visual design systems.',
    },
  ];

  const socialLinks = [
    { icon: Instagram, href: 'https://www.instagram.com/nexagrowthsolution/', label: 'Instagram' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/nexa-growth-solutions/', label: 'LinkedIn' },
    { icon: Facebook, href: 'https://www.facebook.com/profile.php?id=61587721904101', label: 'Facebook' },
  ];

  return (
    <footer className="bg-black/80 backdrop-blur-md text-white border-t border-green-500/20 py-8 sm:py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10">
          {/* Column 1: Brand Block */}
          <div className="text-center sm:text-left">
            <h2 className="text-xl sm:text-2xl font-semibold text-primary mb-3 sm:mb-4 tracking-tight">
              NEXA GROWTH
            </h2>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
              Scaling Brands Through Amazon, Digital Marketing & Technology
            </p>
          </div>

          {/* Column 2: Contact Information */}
          <div className="text-center sm:text-left">
            <h3 className="text-base sm:text-lg font-semibold text-white mb-4 sm:mb-6">Contact Information</h3>
            <div className="space-y-3 sm:space-y-4">
              <a
                href="tel:+923711633762"
                className="flex items-center justify-center sm:justify-start gap-2 sm:gap-3 text-gray-400 hover:text-green-400 transition-colors duration-300 text-xs sm:text-sm"
              >
                <Phone className="text-primary w-4 h-4 sm:w-[18px] sm:h-[18px]" />
                <span>+92 371 1633762</span>
              </a>
              <a
                href="mailto:nexagrowthsolution@gmail.com"
                className="flex items-center justify-center sm:justify-start gap-2 sm:gap-3 text-gray-400 hover:text-green-400 transition-colors duration-300 text-xs sm:text-sm"
              >
                <Mail className="text-primary w-4 h-4 sm:w-[18px] sm:h-[18px]" />
                <span>nexagrowthsolution@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Column 3: Navigation (SEO-Optimized) */}
          <div className="text-center sm:text-left">
            <h3 className="text-base sm:text-lg font-semibold text-white mb-4 sm:mb-6">Navigation</h3>
            <ul className="grid grid-cols-1 gap-2 sm:gap-3">
              {navigationLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-green-400 transition-colors duration-300 text-xs sm:text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Social Media */}
          <div className="text-center sm:text-left">
            <h3 className="text-base sm:text-lg font-semibold text-white mb-4 sm:mb-6">Connect With Us</h3>
            <div className="flex justify-center sm:justify-start gap-3 sm:gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="p-1.5 sm:p-2 rounded-lg bg-green-500/5 text-gray-400 hover:text-green-400 hover:scale-110 transition-all duration-300 border border-green-500/10 hover:border-green-500/30"
                >
                  <social.icon className="w-[18px] h-[18px] sm:w-[22px] sm:h-[22px]" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Copyright Strip */}
        <div className="border-t border-green-500/10 mt-8 sm:mt-12 md:mt-16 pt-6 sm:pt-8 text-center">
          <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">
            {currentYear} NexaGrowth.dev — All Rights Reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-gray-500 text-xs sm:text-sm mb-2">
            {legalLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="hover:text-green-400 transition-colors duration-300"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <p className="text-gray-500 text-xs sm:text-sm">
            A Product by <span className="text-green-400 font-medium">Nexa Growth</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
