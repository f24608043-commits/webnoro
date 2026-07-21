export interface ServiceData {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  problems: string[];
  features: string[];
  deliverables: string[];
  tools: string[];
  image: string;
}

export const ecommerceServices: ServiceData[] = [
  {
    slug: 'marketplace-management',
    title: 'Marketplace Management',
    subtitle: 'Full-service account management across eBay, Walmart, Debenhams, B&Q, and Wayfair.',
    description: 'Our Marketplace Management service provides complete oversight of your e-commerce accounts. We handle everything from account health monitoring and compliance to strategic scaling and day-to-day operations, ensuring your brand maintains a professional presence across all major platforms.',
    problems: [
      'Struggling to manage multiple marketplace accounts simultaneously',
      'Declining account health or performance metrics',
      'Overwhelmed by marketplace compliance and policy updates',
      'Inconsistent brand representation across different platforms'
    ],
    features: [
      'Daily account health monitoring and resolution',
      'Platform compliance and policy management',
      'Negative feedback and review management',
      'Multi-marketplace performance tracking',
      'Seller Central / Marketplace Hub handling',
      'Strategic growth planning per marketplace'
    ],
    deliverables: [
      'Weekly performance and health reports',
      'Marketplace compliance audit',
      'Account optimization roadmap',
      'Incident management and resolution logs'
    ],
    tools: ['Marketplace Seller Central', 'eBay Seller Hub', 'Walmart Seller Center', 'Mirakl', 'Helium 10'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop',
  },
  {
    slug: 'listing-optimization',
    title: 'Marketplace SEO',
    subtitle: 'SEO-driven listings built to rank and convert across all marketplaces.',
    description: 'We create high-converting product listings optimized for each marketplace\'s specific search algorithm. From in-depth keyword research to compelling A+ Content and strategic variation setups, we ensure your products dominate search results and turn browsers into buyers.',
    problems: [
      'Low organic search visibility on eBay and multi-marketplaces',
      'High traffic but low conversion rates on product pages',
      'Outdated or non-optimized product content',
      'Incorrect category placement or missing backend keywords'
    ],
    features: [
      'Data-driven keyword research and mapping',
      'SEO-optimized titles, bullets, and descriptions',
      'A+ Content / Enhanced Brand Content design',
      'Strategic listing variations and parentage setup',
      'Image stack optimization and infographics',
      'Backend search term optimization'
    ],
    deliverables: [
      'Optimized listing copy document',
      'Keyword research and ranking report',
      'A+ Content design layout',
      'Listing audit and improvement plan'
    ],
    tools: ['Helium 10', 'Jungle Scout', 'DataDive', 'MerchantWords', 'Brand Analytics'],
    image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=1200&h=600&fit=crop',
  },
  {
    slug: 'ppc-advertising',
    title: 'Marketplace PPC Management',
    subtitle: 'Data-driven advertising frameworks focused on profitability and scale.',
    description: 'Our PPC management service uses advanced advertising frameworks to drive profitable growth. We focus on surgical bid optimization, negative keyword management, and strategic scaling to improve your ACoS and ROAS across multi-marketplace advertising platforms.',
    problems: [
      'Wasted ad spend on non-converting keywords',
      'High ACoS cutting into profit margins',
      'Difficulty scaling campaigns while maintaining profitability',
      'Lack of clear campaign structure and data transparency'
    ],
    features: [
      'Sponsored Products, Brands, and Display management',
      'eBay Promoted Listings optimization',
      'Automated bidding and day-parting strategies',
      'Advanced negative keyword harvesting',
      'Competitor targeting and defense strategies',
      'A/B testing of ad copy and creative'
    ],
    deliverables: [
      'Bi-weekly ad performance reports',
      'Campaign architecture and structure map',
      'Budget optimization recommendations',
      'Search term analysis report'
    ],
    tools: ['Marketplace Advertising Console', 'Pacvue', 'Perpetua', 'Helium 10 Adtomic', 'Scale Insights'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop',
  },
  {
    slug: 'store-growth-strategy',
    title: 'Store Growth Strategy',
    subtitle: 'Strategic roadmaps designed to outperform competitors and capture market share.',
    description: 'We develop custom growth strategies tailored to your brand\'s goals. Through deep competitor analysis, market research, and structured product launch planning, we build a roadmap for long-term dominance in your niche.',
    problems: [
      'Stagnant sales despite having quality products',
      'Losing market share to competitors',
      'Unsure how to launch new products successfully',
      'Lack of a clear long-term growth roadmap'
    ],
    features: [
      'Comprehensive competitor and market gap analysis',
      'Data-backed product launch strategy',
      'Pricing strategy and promotional planning',
      'Market share and niche trend analysis',
      'Brand positioning and USP development',
      'Customer persona and behavior mapping'
    ],
    deliverables: [
      '12-month growth roadmap',
      'Competitor intelligence report',
      'Product launch checklist and plan',
      'Market share analysis dashboard'
    ],
    tools: ['Helium 10', 'Brand Analytics', 'Keepa', 'Jungle Scout', 'SimilarWeb'],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=600&fit=crop',
  },
  {
    slug: 'operations-management',
    title: 'Logistics & Operations Management',
    subtitle: 'Operational excellence to maintain account health and supply chain efficiency.',
    description: 'Our operations management service ensures your business runs smoothly behind the scenes. We focus on inventory control, FBA/FBM management, order processing, and returns handling to maximize efficiency and protect your account health.',
    problems: [
      'Frequent stockouts or overstocking issues',
      'Complex FBA shipment planning and logistics',
      'Overwhelmed by order processing and returns',
      'Operational inefficiencies causing account health risks'
    ],
    features: [
      'Inventory forecasting and restock planning',
      'FBA shipment creation and management',
      'Returns processing and quality control',
      'Order fulfillment monitoring and troubleshooting',
      'Supplier communication and logistics support',
      'Warehouse and 3PL coordination'
    ],
    deliverables: [
      'Monthly inventory status report',
      'Restock forecast and planning guide',
      'Returns analysis and trend report',
      'Operational SOPs for scaling'
    ],
    tools: ['RestockPro', 'InventoryLab', 'Marketplace Seller Central', 'Excel/Google Sheets', 'ShipStation'],
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&h=600&fit=crop',
  },
  {
    slug: 'full-brand-launch',
    title: 'Full Brand Launch',
    subtitle: 'From product research to market dominance — we build your brand from scratch.',
    description: 'Our Full Brand Launch service is a comprehensive end-to-end solution for new brands. We handle everything from initial product research and sourcing to launch strategy, ranking campaigns, and external traffic integration.',
    problems: [
      'Unsure which products to launch in a competitive market',
      'Difficulty finding reliable suppliers and negotiating costs',
      'Lack of a cohesive brand identity and launch strategy',
      'Initial struggle to gain reviews and initial sales velocity'
    ],
    features: [
      'Deep-dive product research and validation',
      'Supplier sourcing and negotiation support',
      'Brand identity and storefront design',
      'Launch-phase PPC and ranking campaigns',
      'External traffic and influencer outreach',
      'Product packaging and branding consultation'
    ],
    deliverables: [
      'Product validation report',
      'Source selection and pricing analysis',
      'Complete launch campaign plan',
      'Brand style guide for marketplaces'
    ],
    tools: ['Helium 10 Black Box', 'Alibaba', 'Jungle Scout', 'Brand Registry', 'CreatorIQ'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop',
  },
  {
    slug: 'international-expansion',
    title: 'International Expansion',
    subtitle: 'Scale your brand globally across UK, USA, UAE, and EU marketplaces.',
    description: 'We help you navigate the complexities of international expansion. From VAT guidance and marketplace setup in the UK, US, UAE, and EU to global account management, we make global growth seamless for your brand.',
    problems: [
      'Complexity of international tax and VAT compliance',
      'Language barriers and localized content requirements',
      'Difficulty managing logistics across multiple countries',
      'Unsure about marketplace-specific regulations and policies'
    ],
    features: [
      'Global marketplace setup and verification',
      'VAT and tax compliance guidance (UK/EU)',
      'Localized listing translation and optimization',
      'International logistics and freight consultation',
      'Multi-currency performance tracking',
      'Global brand protection strategy'
    ],
    deliverables: [
      'International expansion roadmap',
      'VAT/Tax compliance checklist',
      'Localized product catalog',
      'Global logistics plan'
    ],
    tools: ['Global Selling Hub', 'International Tax Services', 'Payoneer', 'Flexport', 'ShipStation'],
    image: 'https://images.unsplash.com/photo-1521295121812-af4f0c31e16f?w=1200&h=600&fit=crop',
  },
  {
    slug: 'product-sourcing',
    title: 'Product Sourcing & Supply Chain',
    subtitle: 'Building a robust supply chain with reliable suppliers and optimized costs.',
    description: 'Our sourcing and supply chain service focuses on finding the best manufacturing partners for your products. We handle supplier research, cost negotiation, and shipment planning to ensure you have a healthy, profitable supply chain.',
    problems: [
      'Struggling to find reliable manufacturers',
      'High product costs eating into profit margins',
      'Consistent quality control issues with current suppliers',
      'Logistics bottlenecks and shipping delays'
    ],
    features: [
      'Verified supplier research and vetting',
      'Product cost negotiation and terms setup',
      'Quality control and inspection coordination',
      'Shipment planning (FBA/FBM/WFS)',
      'Tariff and duty analysis',
      'Sample consolidation and testing'
    ],
    deliverables: [
      'Supplier evaluation matrix',
      'Cost breakdown and margin analysis',
      'Quality control SOPs',
      'Inbound shipping plan'
    ],
    tools: ['Alibaba', 'Global Sources', 'ImportGenius', 'Flexport', 'Freightos'],
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=1200&h=600&fit=crop',
  },
  {
    slug: 'data-analytics',
    title: 'Data & Analytics Services',
    subtitle: 'Transforming data into actionable insights for smarter business decisions.',
    description: 'We turn complex marketplace data into clear, actionable insights. Our analytics service provides custom dashboards, P&L tracking, and demand forecasting to give you full visibility into your business performance.',
    problems: [
      'Difficulty tracking true profitability across marketplaces',
      'Scattered data making it hard to see the big picture',
      'Inaccurate demand forecasting causing stock issues',
      'Lack of clear data-driven decision-making'
    ],
    features: [
      'Custom Sales & Performance Dashboards',
      'Net Profit & Loss (P&L) tracking',
      'Inventory forecasting and demand planning',
      'Marketing attribution and ROI analysis',
      'Competitor data and market share tracking',
      'Customer lifetime value (CLV) analysis'
    ],
    deliverables: [
      'Monthly business intelligence report',
      'Custom performance dashboard (Looker/Sheets)',
      'P&L statement per marketplace',
      'Inventory health analysis'
    ],
    tools: ['SellerBoard', 'Tableau', 'Looker Studio', 'Excel/Google Sheets', 'Marketplace Brand Analytics'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop',
  },
  {
    slug: 'wholesale-arbitrage',
    title: 'Wholesale & Arbitrage Setup',
    subtitle: 'Proven systems for successful wholesale and supplier approval.',
    description: 'We help brands and sellers build profitable wholesale and arbitrage businesses. From wholesale account setup and supplier approval strategies to product sourcing and approval, we provide the systems you need to succeed.',
    problems: [
      'Struggling to get approved for wholesale accounts',
      'Unsure how to find profitable wholesale products',
      'Complexity of managing multiple brand relationships',
      'Inconsistent sourcing pipeline for arbitrage'
    ],
    features: [
      'Wholesale account application and setup',
      'Brand and supplier approval strategies',
      'Product sourcing and margin analysis',
      'Relationship management with distributors',
      'Automated sourcing systems for arbitrage',
      'Wholesale inventory management'
    ],
    deliverables: [
      'Wholesale sourcing guide',
      'Supplier approval templates',
      'Profitable product lead list',
      'Wholesale management SOPs'
    ],
    tools: ['InventoryLab', 'Keepa', 'Tactical Arbitrage', 'SourceMogul', 'SellerAmp'],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=600&fit=crop',
  },
  {
    slug: 'extra-premium',
    title: 'Extra Premium Services',
    subtitle: 'High-authority services including Brand Registry and E-commerce Consultancy.',
    description: 'Our Extra Premium tier provides high-level strategic support and brand protection. We handle Brand Registry, custom store design, trademark guidance, and high-level e-commerce consultancy for market leaders.',
    problems: [
      'Lack of brand protection and IP control',
      'Generic store design that doesn\'t build trust',
      'Need for expert strategic guidance for complex growth',
      'Missing advanced conversion and PPC strategies'
    ],
    features: [
      'Brand Registry setup and enforcement',
      'Custom Brand Store design and branding',
      'High-level e-commerce consultancy',
      'Trademark guidance and IP protection',
      'Advanced PPC and automation strategies',
      'Conversion Rate Optimization (CRO) audits'
    ],
    deliverables: [
      'Brand protection roadmap',
      'Premium store design assets',
      'Strategic consultancy report',
      'CRO implementation plan'
    ],
    tools: ['Marketplace Brand Registry', 'Adobe Creative Suite', 'Figma', 'USPTO', 'Hotjar'],
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&h=600&fit=crop',
  },
  // End of services data
  {
    slug: 'seo',
    title: 'Marketplace SEO (Legacy)',
    subtitle: 'Rank higher, sell more — dominate marketplace search results.',
    description: 'Legacy marketplace SEO services focused specifically on search algorithms.',
    problems: ['Low visibility on marketplace search'],
    features: ['Keyword research'],
    deliverables: ['Optimized titles'],
    tools: ['Helium 10'],
    image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=1200&h=600&fit=crop',
  }
];
