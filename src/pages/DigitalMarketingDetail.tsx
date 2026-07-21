import { useParams, useNavigate } from 'react-router-dom';
import { digitalMarketingServices } from '@/data/digitalMarketingServices';
import { ServicePageTemplate } from '@/components/ServicePageTemplate';
import { useEffect } from 'react';

const DigitalMarketingDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const service = digitalMarketingServices.find(s => s.slug === slug);

  useEffect(() => {
    if (!service) navigate('/digital-marketing');
  }, [service, navigate]);

  if (!service) return null;

  return (
    <ServicePageTemplate
      service={service}
      ctaText="Start Your Campaign"
      backLink="/digital-marketing"
      backLabel="Back to Digital Marketing"
    />
  );
};

export default DigitalMarketingDetail;
