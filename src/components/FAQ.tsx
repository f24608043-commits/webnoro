import { Helmet } from 'react-helmet-async';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
  title?: string;
  className?: string;
}

export const FAQ = ({ items, title = "Frequently Asked Questions", className = '' }: FAQProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Generate structured data for FAQs
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": items.map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>
      
      <div className={`space-y-4 ${className}`}>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 flex items-center gap-2">
          <HelpCircle className="h-5 w-5 sm:h-6 sm:w-6" />
          {title}
        </h2>
        <div className="space-y-3 sm:space-y-4">
          {items.map((faq, index) => (
            <div 
              key={index} 
              className="bg-card border border-border rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-4 sm:px-6 py-4 sm:py-5 text-left flex items-center justify-between hover:bg-muted/50 transition-colors"
                aria-expanded={openIndex === index}
              >
                <h3 className="font-semibold text-foreground text-sm sm:text-base md:text-lg pr-4">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 text-muted-foreground" />
                ) : (
                  <ChevronDown className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 text-muted-foreground" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-4 sm:px-6 pb-4 sm:pb-5 pt-0">
                  <p className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
