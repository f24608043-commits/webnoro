import { Helmet } from 'react-helmet-async';

interface InternationalSEOProps {
  canonicalUrl: string;
  alternateLanguages?: {
    lang: string;
    url: string;
  }[];
}

export const InternationalSEO = ({
  canonicalUrl,
  alternateLanguages = []
}: InternationalSEOProps) => {
  const defaultLanguages = [
    { lang: 'en', url: canonicalUrl },
    { lang: 'en-US', url: canonicalUrl },
    { lang: 'en-GB', url: canonicalUrl },
    { lang: 'en-PK', url: canonicalUrl },
    { lang: 'x-default', url: canonicalUrl }
  ];

  const languages = alternateLanguages.length > 0 
    ? [...alternateLanguages, { lang: 'x-default', url: canonicalUrl }]
    : defaultLanguages;

  return (
    <Helmet>
      <link rel="canonical" href={canonicalUrl} />
      {languages.map(({ lang, url }) => (
        <link key={lang} rel="alternate" hrefLang={lang} href={url} />
      ))}
    </Helmet>
  );
};
