import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ThemeToggle } from './ThemeToggle';
import { motion, AnimatePresence } from 'framer-motion';

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

 
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (isMobileMenuOpen && !(e.target as HTMLElement).closest('nav')) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileMenuOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

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

  const handleKeyDown = (e: React.KeyboardEvent, href: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setIsMobileMenuOpen(false);
      navigate(href);
    }
  };

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
        ? 'bg-background/80 backdrop-blur-md shadow-lg border-b border-border'
        : 'bg-transparent'
        }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="/"
            onClick={(e) => handleClick(e, '/')}
            onKeyDown={(e) => handleKeyDown(e, '/')}
            className="group"
            aria-label="Nexa Growth Home"
          >
            <h1 className="text-2xl md:text-3xl font-black text-[#1a9e6e] hover:scale-105 transition-transform duration-300 font-display">
              NEXA GROWTH
            </h1>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6" role="menubar">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                onKeyDown={(e) => handleKeyDown(e, link.href)}
                role="menuitem"
                aria-current={isActive(link.href) ? 'page' : undefined}
                className={`text-sm font-medium transition-colors duration-300 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background rounded ${isActive(link.href)
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
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              className="text-foreground hover:text-primary transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background rounded p-1"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
                onClick={() => setIsMobileMenuOpen(false)}
              />
              
              {/* Slide-in Menu */}
              <motion.div
                id="mobile-menu"
                role="dialog"
                aria-modal="true"
                aria-label="Mobile navigation menu"
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                className="lg:hidden fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-background/98 backdrop-blur-lg border-l border-border z-50 shadow-2xl overflow-y-auto"
              >
                <div className="p-6">
                  {/* Close Button */}
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    aria-label="Close menu"
                    className="absolute top-4 right-4 p-2 rounded-lg hover:bg-muted transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
                  >
                    <X size={24} />
                  </button>

                  {/* Menu Items */}
                  <div className="flex flex-col space-y-2 mt-8" role="menu">
                    {navLinks.map((link, index) => (
                      <motion.a
                        key={link.name}
                        href={link.href}
                        onClick={(e) => handleClick(e, link.href)}
                        onKeyDown={(e) => handleKeyDown(e, link.href)}
                        role="menuitem"
                        aria-current={isActive(link.href) ? 'page' : undefined}
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.05 }}
                        className={`font-medium text-base py-3 px-4 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background ${
                          isActive(link.href)
                            ? 'bg-primary/10 text-primary'
                            : 'text-foreground/70 hover:bg-muted hover:text-foreground'
                        }`}
                      >
                        {link.name}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};
