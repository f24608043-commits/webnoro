import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Breadcrumb } from '@/components/Breadcrumb';
import { FileText, AlertTriangle, Scale, CheckCircle } from 'lucide-react';

const TermsOfService = () => {
  useEffect(() => {
    document.title = 'Terms of Service | Nexa Growth';
    window.scrollTo(0, 0);
  }, []);

  const breadcrumbItems = [
    { name: 'Home', path: '/' },
    { name: 'Terms of Service', path: '/terms-of-service' }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <meta name="description" content="Nexa Growth Terms of Service - Terms and conditions for using our website and services." />
      </Helmet>
      <Navigation />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <Breadcrumb items={breadcrumbItems} />
          
          <div className="mt-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms of Service</h1>
            <p className="text-muted-foreground text-lg mb-8">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                  <FileText className="w-6 h-6 text-primary" />
                  Introduction
                </h2>
                <p className="text-muted-foreground">
                  Welcome to Nexa Growth. By accessing or using our website and services, you agree to be bound by these Terms of Service. Please read them carefully before using our services.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                  <CheckCircle className="w-6 h-6 text-primary" />
                  Acceptance of Terms
                </h2>
                <p className="text-muted-foreground">
                  By accessing this website, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree with these terms, please do not use our website or services.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-6 h-6 text-primary" />
                  Services Description
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>Nexa Growth provides the following services:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>E-commerce growth and marketplace management services</li>
                    <li>Digital marketing and advertising services</li>
                    <li>Web development and design services</li>
                    <li>Content creation and marketing services</li>
                    <li>Business growth consulting</li>
                  </ul>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                  <Scale className="w-6 h-6 text-primary" />
                  User Responsibilities
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>As a user of our services, you agree to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Provide accurate and complete information</li>
                    <li>Maintain the confidentiality of your account credentials</li>
                    <li>Not use our services for illegal or unauthorized purposes</li>
                    <li>Not interfere with or disrupt our services</li>
                    <li>Comply with all applicable laws and regulations</li>
                  </ul>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Intellectual Property</h2>
                <p className="text-muted-foreground">
                  All content on this website, including text, graphics, logos, images, and software, is the property of Nexa Growth or its content suppliers and is protected by intellectual property laws. You may not use, reproduce, or distribute any content without our prior written consent.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
                <p className="text-muted-foreground">
                  To the fullest extent permitted by law, Nexa Growth shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of our services.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Governing Law</h2>
                <p className="text-muted-foreground">
                  These Terms of Service shall be governed by and construed in accordance with the laws of the jurisdiction in which Nexa Growth operates, without regard to its conflict of law provisions.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Changes to Terms</h2>
                <p className="text-muted-foreground">
                  We reserve the right to modify these Terms of Service at any time. We will notify users of any material changes by posting the new Terms on this page. Your continued use of our services after such modifications constitutes your acceptance of the new Terms.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
                <p className="text-muted-foreground">
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <div className="mt-4 space-y-2 text-muted-foreground">
                  <p><strong>Email:</strong> legal@nexagrowth.com</p>
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

export default TermsOfService;
