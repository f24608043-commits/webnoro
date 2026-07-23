import { Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  name: string;
  path: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export const Breadcrumb = ({ items, className = '' }: BreadcrumbProps) => {
  const location = useLocation();
  const fullItems = [
    { name: 'Home', path: '/' },
    ...items
  ];

  // Generate structured data for breadcrumbs
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": fullItems.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `https://nexagrowth.com${item.path}`
    }))
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>
      
      <nav aria-label="Breadcrumb" className={`flex items-center text-sm text-muted-foreground ${className}`}>
        <ol className="flex items-center space-x-1 sm:space-x-2">
          {fullItems.map((item, index) => (
            <li key={item.path} className="flex items-center">
              {index > 0 && (
                <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4 mx-1 sm:mx-2 text-muted-foreground/50" />
              )}
              {index === 0 ? (
                <Link 
                  to={item.path} 
                  className="flex items-center hover:text-foreground transition-colors"
                >
                  <Home className="h-3 w-3 sm:h-4 sm:w-4" />
                </Link>
              ) : index === fullItems.length - 1 ? (
                <span className="font-medium text-foreground" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <Link 
                  to={item.path} 
                  className="hover:text-foreground transition-colors"
                >
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
};

// Helper function to generate breadcrumbs from path
export const generateBreadcrumbsFromPath = (pathname: string): BreadcrumbItem[] => {
  const segments = pathname.split('/').filter(Boolean);
  const breadcrumbs: BreadcrumbItem[] = [];
  
  let currentPath = '';
  segments.forEach((segment, index) => {
    currentPath += `/${segment}`;
    // Convert slug to readable title
    const title = segment
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    
    breadcrumbs.push({
      name: title,
      path: currentPath
    });
  });
  
  return breadcrumbs;
};
