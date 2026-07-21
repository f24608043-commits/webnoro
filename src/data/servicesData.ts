import { ShoppingCart, Megaphone, Globe, Palette, Calculator } from 'lucide-react';
import { Service } from '@/types/services';

export const servicesData: Service[] = [
    {
        id: 'multi-marketplace',
        title: 'Multi-Marketplace',
        description: 'Full-service management for Amazon, eBay, Walmart, Wayfair, and global expansion.',
        strategicDescription: 'We architect end-to-end marketplace ecosystems that scale profitably across platforms. Our approach combines data-driven optimization with hands-on account management to maximize visibility, conversion, and long-term brand equity.',
        keyCapabilities: [
            'Multi-platform account setup and optimization',
            'Advanced PPC campaign management and bid strategies',
            'Product catalog optimization and SEO',
            'Inventory forecasting and supply chain coordination',
            'Brand protection and IP enforcement',
            'International marketplace expansion'
        ],
        basicSkills: [
            'Amazon Account Management',
            'Product Listing Optimization',
            'Inventory Management',
            'Order Fulfillment',
            'Customer Service',
            'Basic PPC Campaigns'
        ],
        advancedSkills: [
            'Multi-Marketplace Strategy',
            'Advanced PPC & Sponsored Ads',
            'Brand Registry & Protection',
            'International Expansion',
            'Analytics & Reporting',
            'Supply Chain Optimization'
        ],
        accentColor: '#00FFAA',
        icon: ShoppingCart,
        viewMoreLink: '/ecommerce'
    },
    {
        id: 'digital-marketing',
        title: 'Marketing',
        description: 'Data-driven SEO, social media, paid advertising, content creation, and high-conversion branding.',
        strategicDescription: 'Performance-first marketing systems engineered for measurable growth. We blend creative excellence with analytical rigor to build campaigns that drive qualified traffic, nurture leads, and convert at scale.',
        keyCapabilities: [
            'Comprehensive digital strategy and market positioning',
            'Multi-channel paid advertising (Google, Meta, LinkedIn)',
            'Conversion rate optimization and funnel design',
            'Content marketing and SEO authority building',
            'Marketing automation and lead nurturing',
            'Advanced analytics and attribution modeling'
        ],
        basicSkills: [
            'Brand Positioning',
            'Market Research',
            'Competitor Analysis',
            'Content Strategy',
            'Social Media Management',
            'Email Marketing'
        ],
        advancedSkills: [
            'Google Ads Management',
            'Facebook/Instagram Ads',
            'Conversion Rate Optimization',
            'A/B Testing',
            'Marketing Automation',
            'AI-Powered Insights'
        ],
        accentColor: '#00FFAA',
        icon: Megaphone,
        viewMoreLink: '/digital-marketing'
    },
    {
        id: 'web-development',
        title: 'Web Development',
        description: 'Custom web apps, UI/UX systems, enterprise hosting, and ongoing technical support.',
        strategicDescription: 'Modern web applications built for performance, scalability, and user experience. We leverage cutting-edge frameworks and cloud infrastructure to deliver digital products that drive business outcomes.',
        keyCapabilities: [
            'Custom web application development (React, Next.js)',
            'Responsive UI/UX design and prototyping',
            'RESTful API and backend architecture',
            'Cloud infrastructure and DevOps automation',
            'Performance optimization and SEO',
            'Security hardening and compliance'
        ],
        basicSkills: [
            'React/Next.js Development',
            'Responsive UI/UX',
            'API Development',
            'Database Design',
            'Authentication Systems',
            'Version Control (Git)'
        ],
        advancedSkills: [
            'Performance Optimization',
            'Cloud Hosting (AWS/Azure)',
            'DevOps & CI/CD',
            'Security Hardening',
            'Load Balancing',
            'Monitoring & Logging'
        ],
        accentColor: '#00FFAA',
        icon: Globe,
        viewMoreLink: '/web-development'
    },
    {
        id: 'graphic-designing',
        title: 'Content',
        description: 'High-impact branding, ad visuals, and conversion-driven visual design systems.',
        strategicDescription: 'Visual identity systems that command attention and drive action. Our design philosophy merges aesthetic excellence with conversion psychology to create assets that elevate brands and maximize ROI.',
        keyCapabilities: [
            'Brand identity development and style guides',
            'High-converting ad creative for digital campaigns',
            'UI/UX design for web and mobile applications',
            'Motion graphics and video editing',
            'Print and packaging design',
            'Design system creation and documentation'
        ],
        basicSkills: [
            'Logo & Identity',
            'Brand Guidelines',
            'Typography Systems',
            'Color Palettes',
            'Social Media Graphics',
            'Print Materials'
        ],
        advancedSkills: [
            'Interface Design',
            'Prototyping',
            'Design Systems',
            'Motion Graphics',
            '3D Rendering',
            'Video Editing'
        ],
        accentColor: '#00FFAA',
        icon: Palette,
        viewMoreLink: '/graphic-designing'
    },
    {
        id: 'accounting',
        title: 'Business Growth',
        description: 'Profit tracking, financial forecasting, and marketplace-focused intelligence systems.',
        strategicDescription: 'Financial clarity engineered for e-commerce and multi-platform businesses. We provide strategic accounting services that go beyond compliance to deliver actionable insights for profitable growth.',
        keyCapabilities: [
            'Multi-platform revenue reconciliation and reporting',
            'Cash flow forecasting and budget planning',
            'Tax preparation and regulatory compliance',
            'Profit margin analysis by SKU and channel',
            'Financial modeling for business decisions',
            'Audit support and financial controls'
        ],
        basicSkills: [
            'Bookkeeping',
            'Accounts Payable/Receivable',
            'Payroll Processing',
            'Expense Tracking',
            'Financial Reporting',
            'Tax Preparation'
        ],
        advancedSkills: [
            'Financial Forecasting',
            'Budget Planning',
            'Multi-Platform Reconciliation',
            'Cash Flow Management',
            'Regulatory Compliance',
            'Audit Support'
        ],
        accentColor: '#00FFAA',
        icon: Calculator,
        viewMoreLink: '/accounting'
    }
];
