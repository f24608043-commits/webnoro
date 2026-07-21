import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ThemeToggle } from './ThemeToggle';

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'E-commerce', href: '/ecommerce' },
    { name: 'Marketing', href: '/digital-marketing' },
    { name: 'Web Development', href: '/web-development' },
    { name: 'Content', href: '/content' },
    { name: 'Business Growth', href: '/business-growth' },
    { name: 'Projects', href: '/projects' },
    { name: 'About Us', href: '/about' },
    { name: 'Case Studies', href: '/blog' },
    { name: 'Contact Us', href: '/contact' },
  ];

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    navigate(href);
  };

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
        ? 'bg-background/80 backdrop-blur-md shadow-lg border-b border-border'
        : 'bg-transparent'
        }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" onClick={(e) => handleClick(e, '/')} className="group">
            <h1 className="text-2xl md:text-3xl font-black text-[#1a9e6e] hover:scale-105 transition-transform duration-300 font-display">
              NEXA GROWTH
            </h1>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className={`text-sm font-medium transition-colors duration-300 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left ${isActive(link.href)
                  ? 'text-primary after:scale-x-100'
                  : 'text-foreground/70 hover:text-primary'
                  }`}
              >
                {link.name}
              </a>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-foreground hover:text-primary transition-colors duration-300"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-20 left-0 right-0 bg-background/98 backdrop-blur-lg border-t border-border animate-fade-in shadow-lg">
            <div className="flex flex-col space-y-4 p-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleClick(e, link.href)}
                  className={`font-medium text-lg transition-all duration-300 hover:translate-x-2 ${isActive(link.href) ? 'text-primary' : 'text-foreground/70 hover:text-primary'
                    }`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
