import { Helmet } from 'react-helmet-async';

interface OrganizationData {
  name: string;
  url: string;
  logo?: string;
  description?: string;
  foundingDate?: string;
  address?: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  contactPoint?: {
    telephone: string;
    contactType: string;
    email?: string;
  };
  sameAs?: string[];
}

interface WebSiteData {
  name: string;
  url: string;
  description?: string;
  potentialAction?: {
    target: string;
    queryInput: string;
  };
}

interface LocalBusinessData extends OrganizationData {
  openingHours?: string[];
  priceRange?: string;
}

interface ServiceData {
  name: string;
  description: string;
  provider: string;
  areaServed?: string;
  hasOfferCatalog?: {
    name: string;
    itemListElement?: Array<{
      name: string;
      description?: string;
      price?: string;
    }>;
  };
}

interface ArticleData {
  headline: string;
  description: string;
  image: string;
  author: string;
  datePublished: string;
  dateModified: string;
  url: string;
}

export const StructuredData = () => {
  const organizationData: OrganizationData = {
    name: "Nexa Growth Solutions",
    url: "https://nexagrowth.com",
    description: "Nexa Growth Solutions is a leading digital transformation agency specializing in web development, SEO, AI integration, and digital marketing services. We help businesses grow through innovative technology solutions and data-driven strategies.",
    foundingDate: "2020",
    address: {
      streetAddress: "123 Business District",
      addressLocality: "Lahore",
      addressRegion: "Punjab",
      postalCode: "54000",
      addressCountry: "Pakistan"
    },
    contactPoint: {
      telephone: "+92-300-1234567",
      contactType: "customer service",
      email: "info@nexagrowth.com"
    },
    sameAs: [
      "https://www.linkedin.com/company/nexagrowth",
      "https://twitter.com/nexagrowth",
      "https://www.facebook.com/nexagrowth",
      "https://www.instagram.com/nexagrowth"
    ]
  };

  const webSiteData: WebSiteData = {
    name: "Nexa Growth Solutions",
    url: "https://nexagrowth.com",
    description: "Digital transformation agency providing web development, SEO, AI integration, and digital marketing services",
    potentialAction: {
      target: "https://nexagrowth.com/search?q={search_term_string}",
      queryInput: "required name=search_term_string"
    }
  };

  const localBusinessData: LocalBusinessData = {
    ...organizationData,
    openingHours: [
      "Mo-Fr 09:00-18:00",
      "Sa 10:00-14:00"
    ],
    priceRange: "$$"
  };

  return (
    <Helmet>
      {/* Organization Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          ...organizationData
        })}
      </script>

      {/* LocalBusiness Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          ...localBusinessData
        })}
      </script>

      {/* WebSite Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          ...webSiteData
        })}
      </script>
    </Helmet>
  );
};

// Helper function for Service schema
export const ServiceStructuredData = ({ serviceData }: { serviceData: ServiceData }) => {
  return (
    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        ...serviceData
      })}
    </script>
  );
};

// Helper function for Article schema
export const ArticleStructuredData = ({ articleData }: { articleData: ArticleData }) => {
  return (
    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        ...articleData
      })}
    </script>
  );
};
