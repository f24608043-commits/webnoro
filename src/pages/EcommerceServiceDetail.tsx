import { useParams, useNavigate } from 'react-router-dom';
import { ecommerceServices } from '@/data/ecommerceServices';
import { ServicePageTemplate } from '@/components/ServicePageTemplate';
import { useEffect } from 'react';

const EcommerceServiceDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const service = ecommerceServices.find(s => s.slug === slug);

  useEffect(() => {
    if (!service) navigate('/ecommerce');
  }, [service, navigate]);

  if (!service) return null;

  return (
    <ServicePageTemplate
      service={service}
      ctaText="Talk to an E-commerce Expert"
      backLink="/ecommerce"
      backLabel="Back to E-commerce Services"
    />
  );
};

export default EcommerceServiceDetail;
