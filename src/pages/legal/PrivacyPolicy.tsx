import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Breadcrumb } from '@/components/Breadcrumb';
import { Shield, Lock, Eye, Trash2 } from 'lucide-react';

const PrivacyPolicy = () => {
  useEffect(() => {
    document.title = 'Privacy Policy | Nexa Growth';
    window.scrollTo(0, 0);
  }, []);

  const breadcrumbItems = [
    { name: 'Home', path: '/' },
    { name: 'Privacy Policy', path: '/privacy-policy' }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <meta name="description" content="Nexa Growth Privacy Policy - Learn how we collect, use, and protect your personal information." />
      </Helmet>
      <Navigation />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <Breadcrumb items={breadcrumbItems} />
          
          <div className="mt-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
            <p className="text-muted-foreground text-lg mb-8">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                  <Shield className="w-6 h-6 text-primary" />
                  Introduction
                </h2>
                <p className="text-muted-foreground">
                  At Nexa Growth, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services. Please read this policy carefully.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                  <Eye className="w-6 h-6 text-primary" />
                  Information We Collect
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>We collect several types of information to provide and improve our services:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Personal Information:</strong> Name, email address, phone number, and company information when you contact us or request services.</li>
                    <li><strong>Usage Data:</strong> Information about how you use our website, including pages visited, time spent, and features used.</li>
                    <li><strong>Technical Data:</strong> IP address, browser type, device information, and operating system.</li>
                    <li><strong>Cookies:</strong> Small files stored on your device to enhance your browsing experience (see our Cookie Policy for details).</li>
                  </ul>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                  <Lock className="w-6 h-6 text-primary" />
                  How We Use Your Information
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>We use the collected information for various purposes:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>To provide, maintain, and improve our services</li>
                    <li>To communicate with you about our services and updates</li>
                    <li>To analyze usage patterns and improve website performance</li>
                    <li>To comply with legal obligations and protect our rights</li>
                    <li>To personalize your experience on our website</li>
                  </ul>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                  <Shield className="w-6 h-6 text-primary" />
                  Data Security
                </h2>
                <p className="text-muted-foreground">
                  We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                  <Trash2 className="w-6 h-6 text-primary" />
                  Your Rights
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>You have the right to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Access your personal information</li>
                    <li>Correct inaccurate information</li>
                    <li>Request deletion of your personal information</li>
                    <li>Opt-out of marketing communications</li>
                    <li>Object to processing of your personal information</li>
                  </ul>
                  <p>To exercise these rights, please contact us at privacy@nexagrowth.com</p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
                <p className="text-muted-foreground">
                  If you have any questions about this Privacy Policy, please contact us:
                </p>
                <div className="mt-4 space-y-2 text-muted-foreground">
                  <p><strong>Email:</strong> privacy@nexagrowth.com</p>
                  <p><strong>Website:</strong> https://nexagrowth.com</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
