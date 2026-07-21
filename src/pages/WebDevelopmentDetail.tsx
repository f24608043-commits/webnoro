import { useParams, useNavigate } from 'react-router-dom';
import { webDevelopmentServices } from '@/data/webDevelopmentServices';
import { ServicePageTemplate } from '@/components/ServicePageTemplate';
import { useEffect } from 'react';

const WebDevelopmentDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const service = webDevelopmentServices.find(s => s.slug === slug);

  useEffect(() => {
    if (!service) navigate('/web-development');
  }, [service, navigate]);

  if (!service) return null;

  return (
    <ServicePageTemplate
      service={service}
      ctaText="Start Your Project"
      backLink="/web-development"
      backLabel="Back to Web Development"
    />
  );
};

export default WebDevelopmentDetail;
