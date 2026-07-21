import { useEffect } from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Contact } from '@/components/Contact';
import BotpressChat from '@/components/BotpressChat';

const ContactUs = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <div className="pt-20">
        <Contact />
        <BotpressChat />
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
