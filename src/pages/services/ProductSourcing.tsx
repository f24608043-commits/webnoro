import { ServicePageTemplate } from '@/components/ServicePageTemplate';
import { ecommerceServices } from '@/data/ecommerceServices';

const ProductSourcing = () => {
    const service = ecommerceServices.find(s => s.slug === 'product-sourcing');
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

export default ProductSourcing;
