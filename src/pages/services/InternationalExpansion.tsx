import { ServicePageTemplate } from '@/components/ServicePageTemplate';
import { ecommerceServices } from '@/data/ecommerceServices';

const InternationalExpansion = () => {
    const service = ecommerceServices.find(s => s.slug === 'international-expansion');
    if (!service) return null;
    return (
        <ServicePageTemplate
            service={service}
            ctaText="Talk to a Marketplace Expert"
            backLink="/ecommerce"
            backLabel="Back to E-commerce Services"
        />
    );
};

export default InternationalExpansion;
