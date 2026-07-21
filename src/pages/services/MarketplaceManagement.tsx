import { ServicePageTemplate } from '@/components/ServicePageTemplate';
import { ecommerceServices } from '@/data/ecommerceServices';

const MarketplaceManagement = () => {
    const service = ecommerceServices.find(s => s.slug === 'marketplace-management');
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

export default MarketplaceManagement;
