/* Portfolio images – E-commerce & Digital Marketing */
import lovelyBedsImg from '@/assets/projects/portfolio/lovely-beds.png';
import galaxyBedsImg from '@/assets/projects/portfolio/galaxy-beds.png';
import bedsPlanetImg from '@/assets/projects/portfolio/beds-planet.png';
import ppcImprovedEngagementImg from '@/assets/projects/portfolio/ppc-improved-engagement.png';
import ppcIncreasedSalesImg from '@/assets/projects/portfolio/ppc-increased-sales.png';
import ppcPerformanceTargetingImg from '@/assets/projects/portfolio/ppc-performance-targeting.png';
import socialMediaReelsImg from '@/assets/projects/portfolio/social-media-reels.png';
import graphicDesignPpcImg from '@/assets/projects/portfolio/graphic-design-ppc.png';
import socialMediaContentImg from '@/assets/projects/portfolio/social-media-content.png';
import googleAdsLuxuryBedsImg from '@/assets/projects/portfolio/google-ads-luxury-beds.png';
import googleAdsPpcImg from '@/assets/projects/portfolio/google-ads-ppc.png';
import leadGenerationImg from '@/assets/projects/portfolio/lead-generation.png';
import debenhamsLocalImg from '@/assets/projects/portfolio/debenhams-local.png';

// Placeholder images for graphic design projects
const typographyDesignImg = 'https://image2url.com/r2/default/images/1772226248381-6a6e7357-85bb-4749-9a23-c21c4f5ed6f4.png';
const productImageDesignImg = 'https://image2url.com/r2/default/images/1772226403839-2da6cf9b-5af9-43d9-83b6-35eb9f876502.png';
const thumbnailDesignImg = 'https://image2url.com/r2/default/images/1772226453504-f8b3ee89-7e84-466b-b4ee-937e1c54e303.png';
const cvResumeDesignImg = 'https://image2url.com/r2/default/images/1772226453504-f8b3ee89-7e84-466b-b4ee-937e1c54e303.png';
const businessCardDesignImg = 'https://image2url.com/r2/default/images/1772226508989-0f76f99d-6be6-4b63-a0cc-0f53355fa277.png';
const webBannerDesignImg = 'https://image2url.com/r2/default/images/1772226530933-7fe1d5bc-eee0-4646-9673-5df650c826eb.png';
const outdoorBannerDesignImg = 'https://image2url.com/r2/default/images/1772226601106-f260572f-2a01-4c50-96db-60ef8607215a.png';
const menuDesignImg = 'https://image2url.com/r2/default/images/1772226623057-b873f9c3-1229-47aa-9c23-08ca86d7aaeb.png';
const promotionalBannerDesignImg = 'https://image2url.com/r2/default/images/1772226643512-cd28be2f-e5ce-4754-953c-510d7aaaaf86.png';
const flyerDesignImg = 'https://image2url.com/r2/default/images/1772226663375-f10d532b-941b-4fc1-a120-3d953c375a55.png';
const trifoldBrochureDesignImg = 'https://image2url.com/r2/default/images/1772226683880-99946e3f-01fa-4e86-8660-934889e6f36d.png';
const wallpaperDesignImg = 'https://image2url.com/r2/default/images/1772226701681-59eaceb2-1f49-41e0-9864-35457724d55a.png';
const socialMediaPostAdDesignImg = 'https://image2url.com/r2/default/images/1772226715981-f34b28ef-7c02-4142-a524-d163adb05b7b.png';
const logoDesignImg = 'https://image2url.com/r2/default/images/1772226739033-e6b065ec-02d7-48da-a8b1-56bb080fe0f9.png';

export interface Project {
    id: number;
    title: string;
    category: string;
    tags: string[];
    image: string;
    images?: string[];
    shortDescription: string;
    fullDescription: string;
    toolsUsed: string[];
    results: string;
    liveLink?: string;
}

export const ecommerceProjects = [
    {
        id: 2,
        title: 'Amazon',
        category: 'Account Management',
        tags: ['Account Management'],
        image: galaxyBedsImg,
        shortDescription: 'End-to-end marketplace growth with structured scaling and brand optimization.',
        fullDescription: 'Managed end-to-end operations, implementing a scalable revenue growth strategy that leveraged marketplace trends and data-driven insights.',
        toolsUsed: ['Amazon Seller Central', 'ProfitGuru', 'SmartScout'],
        results: 'Exceeded £206,650 in sales with an average order value of £245.14.'
    },
    {
        id: 6,
        title: 'Divine Beds Sales Amazon 3',
        category: 'Account Management',
        tags: ['Account Management'],
        image: 'https://res.cloudinary.com/dhffgjyra/image/upload/q_auto/f_auto/v1781356398/Divine_beds_sales_amazon_3_hxmt2i.png',
        shortDescription: 'Amazon account management with sales optimization and revenue growth.',
        fullDescription: 'Comprehensive Amazon account management focusing on sales performance, inventory optimization, and revenue scaling strategies.',
        toolsUsed: ['Amazon Seller Central', 'Helium 10', 'Keepa'],
        results: 'Significant sales growth through optimized listing and account management.'
    },
    {
        id: 7,
        title: 'Lovely Bed Amazon',
        category: 'Account Management',
        tags: ['Account Management'],
        image: 'https://res.cloudinary.com/dhffgjyra/image/upload/q_auto/f_auto/v1781356393/lovely_bed_amazon_mzz3g1.png',
        shortDescription: 'Amazon marketplace management with brand optimization.',
        fullDescription: 'End-to-end Amazon account management with focus on brand presence, listing optimization, and sales performance.',
        toolsUsed: ['Amazon Seller Central', 'ProfitGuru', 'SmartScout'],
        results: 'Improved brand visibility and sales performance.'
    },
    {
        id: 8,
        title: 'Divine Beds Sales Amazon 1',
        category: 'Account Management',
        tags: ['Account Management'],
        image: 'https://res.cloudinary.com/dhffgjyra/image/upload/q_auto/f_auto/v1781356392/Divine_beds_sales_amazon_1_zb4fxm.png',
        shortDescription: 'Amazon sales management with performance tracking.',
        fullDescription: 'Strategic Amazon account management with emphasis on sales tracking, performance metrics, and revenue optimization.',
        toolsUsed: ['Amazon Seller Central', 'Helium 10', 'Sellerboard'],
        results: 'Consistent sales growth and improved account performance.'
    },
    {
        id: 9,
        title: 'Divine Beds Sales Amazon 2',
        category: 'Account Management',
        tags: ['Account Management'],
        image: 'https://res.cloudinary.com/dhffgjyra/image/upload/q_auto/f_auto/v1781356389/Divine_beds_sales_amazon_2_gyuten.png',
        shortDescription: 'Amazon account scaling with revenue optimization.',
        fullDescription: 'Advanced Amazon account management with focus on scaling operations, revenue optimization, and marketplace expansion.',
        toolsUsed: ['Amazon Seller Central', 'ProfitGuru', 'SmartScout'],
        results: 'Successful account scaling and revenue growth.'
    },
    {
        id: 10,
        title: 'Galaxy Bed Amazon',
        category: 'Account Management',
        tags: ['Account Management'],
        image: 'https://res.cloudinary.com/dhffgjyra/image/upload/q_auto/f_auto/v1781356388/Galaxy_bed_amazon_tgj4sb.png',
        shortDescription: 'Amazon marketplace growth with brand development.',
        fullDescription: 'Comprehensive Amazon account management including brand development, listing optimization, and sales strategy implementation.',
        toolsUsed: ['Amazon Seller Central', 'Helium 10', 'Keepa'],
        results: 'Enhanced brand presence and sales performance.'
    },
    {
        id: 4,
        title: 'PPC Campaign Results | Improved Engagement',
        category: 'Amazon Marketing',
        tags: ['Amazon PPC'],
        image: ppcImprovedEngagementImg,
        shortDescription: 'Strategic Sponsored Ads restructuring to improve engagement metrics.',
        fullDescription: 'Focused on improving middle-of-the-funnel engagement by restructuring Amazon Ads campaigns. Leveraged Sponsored Brands and Sponsored Display.',
        toolsUsed: ['Amazon Advertising Console', 'Perpetua', 'Pacvue'],
        results: 'Significant boost in branded search volume and click-through rates.'
    },
    {
        id: 5,
        title: 'PPC Campaign Results | Increased Sales',
        category: 'Amazon Marketing',
        tags: ['Amazon PPC'],
        image: ppcIncreasedSalesImg,
        shortDescription: 'High-ROAS scaling campaigns increasing overall marketplace revenue.',
        fullDescription: 'Directed high-performance Sponsored Products and Sponsored Brands Video campaigns to drive pure scale.',
        toolsUsed: ['Amazon PPC', 'AdBadger', 'Sellics'],
        results: 'Achieved a consistent ROAS improvement of 40% while doubling monthly sales volume.'
    },
    {
        id: 11,
        title: 'Amazon Sales Stats',
        category: 'Amazon Marketing',
        tags: ['Amazon PPC'],
        image: 'https://res.cloudinary.com/dhffgjyra/image/upload/q_auto/f_auto/v1781356395/Amazon_sales_stats_ofb8y6.png',
        shortDescription: 'Amazon sales performance tracking and analytics.',
        fullDescription: 'Comprehensive Amazon sales analytics and performance tracking with focus on data-driven optimization strategies.',
        toolsUsed: ['Amazon Advertising Console', 'Helium 10', 'Sellerboard'],
        results: 'Improved sales performance through data-driven insights.'
    },
    {
        id: 12,
        title: 'E-bay Regent Style E-com',
        category: 'Amazon Marketing',
        tags: ['E-commerce'],
        image: 'https://res.cloudinary.com/dhffgjyra/image/upload/q_auto/f_auto/v1781356383/E-bay_regent_style_e-com_rjif8r.png',
        shortDescription: 'E-commerce marketplace management and optimization.',
        fullDescription: 'Multi-platform e-commerce management with focus on eBay and Amazon marketplace optimization and sales growth.',
        toolsUsed: ['eBay Seller Hub', 'Amazon Seller Central', 'ProfitGuru'],
        results: 'Successful multi-platform marketplace management.'
    },
    {
        id: 13,
        title: 'Divine Bed Deal',
        category: 'Amazon Marketing',
        tags: ['Amazon PPC'],
        image: 'https://res.cloudinary.com/dhffgjyra/image/upload/q_auto/f_auto/v1781356381/Divine_bed_deal_vtagwq.png',
        shortDescription: 'Amazon promotional campaigns and deal optimization.',
        fullDescription: 'Strategic Amazon deal management and promotional campaign optimization for maximum sales impact.',
        toolsUsed: ['Amazon Advertising Console', 'Perpetua', 'Pacvue'],
        results: 'Successful promotional campaign execution.'
    },
    {
        id: 14,
        title: 'Divine Beds Sale Stats',
        category: 'Amazon Marketing',
        tags: ['Amazon PPC'],
        image: 'https://res.cloudinary.com/dhffgjyra/image/upload/q_auto/f_auto/v1781356381/divine_beds_sale_stats_hrevgo.png',
        shortDescription: 'Amazon sales analytics and performance metrics.',
        fullDescription: 'Detailed Amazon sales analytics with focus on performance metrics, conversion optimization, and revenue tracking.',
        toolsUsed: ['Amazon Advertising Console', 'Helium 10', 'Sellerboard'],
        results: 'Improved sales performance through analytics.'
    },
    {
        id: 15,
        title: 'Devan Beds Amazon',
        category: 'Amazon Marketing',
        tags: ['Amazon PPC'],
        image: 'https://res.cloudinary.com/dhffgjyra/image/upload/q_auto/f_auto/v1781356380/Devan_beds_amazon_axsmef.png',
        shortDescription: 'Amazon account management with sales optimization.',
        fullDescription: 'Comprehensive Amazon account management with focus on sales optimization, listing enhancement, and revenue growth.',
        toolsUsed: ['Amazon Seller Central', 'ProfitGuru', 'SmartScout'],
        results: 'Successful sales optimization and account growth.'
    }
];

export const digitalMarketingProjects = [
    {
        id: 7,
        title: 'Social Media Marketing',
        category: 'Social Media',
        tags: ['Social Media', 'Reels'],
        image: socialMediaReelsImg,
        shortDescription: 'Reels and content strategy driving brand awareness and engagement.',
        fullDescription: 'Crafted a vibrant social media presence focusing on high-quality Reels and interactive stories to build a loyal community.',
        toolsUsed: ['Instagram', 'CapCut', 'Canva', 'Meta Business Suite'],
        results: 'Over 500% increase in monthly reach and 200% growth in follower engagement.'
    },
    {
        id: 8,
        title: 'Graphic Design (Pay Per Click)',
        category: 'PPC Design',
        tags: ['Graphic Design', 'PPC'],
        image: graphicDesignPpcImg,
        shortDescription: 'High-converting creatives for digital ad campaigns.',
        fullDescription: 'Developed a comprehensive set of visual assets designed specifically for high-conversion PPC campaigns.',
        toolsUsed: ['Adobe Illustrator', 'Photoshop', 'Figma'],
        results: 'Ads using new creatives saw a 30% reduction in CPC and 50% increase in conversion rate.'
    },
    {
        id: 9,
        title: 'Social Media Marketing',
        category: 'Content Marketing',
        tags: ['Social Media', 'Content'],
        image: socialMediaContentImg,
        shortDescription: 'Campaign graphics and optimized engagement strategy.',
        fullDescription: 'Designed high-impact graphics for seasonal social media campaigns, focusing on brand storytelling.',
        toolsUsed: ['Canva', 'Adobe Suite', 'Buffer'],
        results: 'Campaign reach exceeded previous month by 3.5x.'
    },
    {
        id: 10,
        title: 'Google Ads PPC | Luxury Beds',
        category: 'Google Ads',
        tags: ['Google Ads', 'PPC'],
        image: googleAdsLuxuryBedsImg,
        shortDescription: 'High-ticket campaigns with remarketing & segmentation strategy.',
        fullDescription: 'Managed specialized Google Search and Shopping campaigns for luxury high-ticket items.',
        toolsUsed: ['Google Ads', 'Keyword Planner', 'Google Analytics 4'],
        results: 'Achieved a 6.2x ROI on high-ticket luxury items through precision targeting.'
    },
    {
        id: 12,
        title: 'Google Ads Lead Generation Campaign',
        category: 'Lead Gen',
        tags: ['Google Ads', 'Lead Gen'],
        image: leadGenerationImg,
        shortDescription: 'Local lead generation funnel producing qualified service leads.',
        fullDescription: 'Built a localized lead generation engine using Google Search and Local Service Ads.',
        toolsUsed: ['Google Ads', 'HubSpot', 'Zapier'],
        results: 'Consistent flow of 50+ qualified leads per week.'
    },
    {
        id: 13,
        title: 'Debenhams',
        category: 'Local Promotion',
        tags: ['Local Promotion', 'Geo Targeting'],
        image: debenhamsLocalImg,
        shortDescription: 'Geo-targeted in-store promotional campaigns with ad scheduling.',
        fullDescription: 'Managed localized promotional campaigns for Debenhams store events using geo-fencing.',
        toolsUsed: ['Meta Ads', 'Google Ads', 'Foursquare Ads'],
        results: 'Measured foot traffic increase of 25% during promo events.'
    },
    {
        id: 14,
        title: 'Shawarna Awareness Campaign',
        category: 'AS Campaign',
        tags: ['Campaign', 'Brand Awareness', 'Social Media'],
        image: 'https://res.cloudinary.com/dhffgjyra/image/upload/v1781373993/Screenshot_2026-06-13_180424_c4ahoi.png',
        shortDescription: 'Brand awareness campaign driving engagement and visibility.',
        fullDescription: 'Strategic brand awareness campaign focused on increasing brand visibility and engagement through targeted social media and digital advertising.',
        toolsUsed: ['Meta Ads', 'Instagram', 'Facebook', 'Analytics'],
        results: 'Significant increase in brand awareness and customer engagement.'
    },
    {
        id: 15,
        title: 'Bon-fire Campaign',
        category: 'AS Campaign',
        tags: ['Campaign', 'Seasonal', 'Promotional'],
        image: 'https://res.cloudinary.com/dhffgjyra/image/upload/v1781373990/Screenshot_2026-06-13_180406_lrsluf.png',
        shortDescription: 'Seasonal promotional campaign with high engagement.',
        fullDescription: 'Creative seasonal promotional campaign designed to drive sales and customer engagement during the bon-fire season with compelling visuals and targeted messaging.',
        toolsUsed: ['Meta Ads', 'Google Ads', 'Creative Design', 'Analytics'],
        results: 'Successful campaign with high engagement and conversion rates.'
    },
    {
        id: 16,
        title: 'Hiring Chef Campaign',
        category: 'AS Campaign',
        tags: ['Campaign', 'Recruitment', 'Social Media'],
        image: 'https://res.cloudinary.com/dhffgjyra/image/upload/v1781373989/Screenshot_2026-06-13_180417_xjjjx2.png',
        shortDescription: 'Recruitment campaign for hiring chefs.',
        fullDescription: 'Targeted recruitment campaign focused on attracting qualified chef candidates through social media advertising and job platforms.',
        toolsUsed: ['Meta Ads', 'LinkedIn', 'Creative Design', 'Analytics'],
        results: 'Successful recruitment with high-quality candidate applications.'
    },
    {
        id: 17,
        title: 'Hiring Chef New Engagement Campaign',
        category: 'AS Campaign',
        tags: ['Campaign', 'Recruitment', 'Engagement'],
        image: 'https://res.cloudinary.com/dhffgjyra/image/upload/v1781373973/Screenshot_2026-06-13_180400_zs5oc3.png',
        shortDescription: 'Enhanced recruitment campaign for chef positions.',
        fullDescription: 'Improved recruitment campaign with enhanced engagement strategies to attract top chef talent through targeted advertising.',
        toolsUsed: ['Meta Ads', 'Google Ads', 'Creative Design', 'Analytics'],
        results: 'Increased engagement and higher quality applications.'
    },
    {
        id: 18,
        title: 'Skill Barista Campaign',
        category: 'AS Campaign',
        tags: ['Campaign', 'Recruitment', 'Training'],
        image: 'https://res.cloudinary.com/dhffgjyra/image/upload/v1781373988/Screenshot_2026-06-13_180412_rznslw.png',
        shortDescription: 'Campaign for skilled barista recruitment.',
        fullDescription: 'Specialized recruitment campaign targeting skilled baristas for hospitality positions with engaging creative content.',
        toolsUsed: ['Meta Ads', 'Instagram', 'Creative Design', 'Analytics'],
        results: 'Successful recruitment of skilled barista candidates.'
    },
    {
        id: 19,
        title: 'Skill Barista New Engagement Campaign',
        category: 'AS Campaign',
        tags: ['Campaign', 'Recruitment', 'Engagement'],
        image: 'https://res.cloudinary.com/dhffgjyra/image/upload/v1781373953/Screenshot_2026-06-13_180326_celcsa.png',
        shortDescription: 'Enhanced barista recruitment campaign.',
        fullDescription: 'Optimized recruitment campaign with improved engagement strategies for attracting skilled barista candidates.',
        toolsUsed: ['Meta Ads', 'Google Ads', 'Creative Design', 'Analytics'],
        results: 'Higher engagement and better candidate quality.'
    },
    {
        id: 20,
        title: 'Takeaway Discount',
        category: 'AS Campaign',
        tags: ['Campaign', 'Promotional', 'Food'],
        image: 'https://res.cloudinary.com/dhffgjyra/image/upload/v1781373945/Screenshot_2026-06-13_180319_iaozpv.png',
        shortDescription: 'Promotional discount campaign for takeaway.',
        fullDescription: 'Attractive promotional campaign offering discounts on takeaway orders to drive customer acquisition and repeat business.',
        toolsUsed: ['Meta Ads', 'Google Ads', 'Creative Design', 'Analytics'],
        results: 'Increased order volume and customer acquisition.'
    },
    {
        id: 21,
        title: 'Havenly Special Deals',
        category: 'AS Campaign',
        tags: ['Campaign', 'Promotional', 'Special Offers'],
        image: 'https://res.cloudinary.com/dhffgjyra/image/upload/v1781373940/Screenshot_2026-06-13_180313_rhcu8v.png',
        shortDescription: 'Special deals promotional campaign.',
        fullDescription: 'Engaging promotional campaign featuring special deals and offers to drive sales and customer engagement.',
        toolsUsed: ['Meta Ads', 'Google Ads', 'Creative Design', 'Analytics'],
        results: 'Successful promotion with high customer response.'
    },
    {
        id: 22,
        title: 'Techpreneur New Campaign',
        category: 'AS Campaign',
        tags: ['Campaign', 'Tech', 'Entrepreneurship'],
        image: 'https://res.cloudinary.com/dhffgjyra/image/upload/v1781373934/Screenshot_2026-06-13_180307_t67wv5.png',
        shortDescription: 'Campaign targeting tech entrepreneurs.',
        fullDescription: 'Strategic campaign designed to engage tech entrepreneurs with compelling messaging and targeted advertising.',
        toolsUsed: ['Meta Ads', 'LinkedIn', 'Google Ads', 'Analytics'],
        results: 'Strong engagement from target audience.'
    },
    {
        id: 23,
        title: 'Furnuretify Campaign',
        category: 'AS Campaign',
        tags: ['Campaign', 'Furniture', 'E-commerce'],
        image: 'https://res.cloudinary.com/dhffgjyra/image/upload/v1781373932/Screenshot_2026-06-13_180246_mfq3q4.png',
        shortDescription: 'Furniture e-commerce promotional campaign.',
        fullDescription: 'Creative promotional campaign for furniture e-commerce brand driving awareness and sales through targeted advertising.',
        toolsUsed: ['Meta Ads', 'Google Ads', 'Creative Design', 'Analytics'],
        results: 'Increased brand awareness and sales conversion.'
    }
];

export const webDevelopmentProjects = [
    {
        id: 107,
        title: 'Junavoo Italian Store',
        category: 'E-Commerce',
        tags: ['E-commerce', 'Multilingual', 'European Markets'],
        image: 'https://res.cloudinary.com/dhffgjyra/image/upload/q_auto/f_auto/v1781353622/1773570599088-70ac65fc-1bbc-4a6e-bd7e-b3b6d2bcf7db_-_Copy_mezlzw.png',
        images: [
            'https://res.cloudinary.com/dhffgjyra/image/upload/q_auto/f_auto/v1781353622/1773570599088-70ac65fc-1bbc-4a6e-bd7e-b3b6d2bcf7db_-_Copy_mezlzw.png',
            'https://res.cloudinary.com/dhffgjyra/image/upload/q_auto/f_auto/v1781353554/1773571037352-fadd38d3-33f9-48bc-bb87-3535df1d4704_-_Copy_e9sjuj.png'
        ],
        shortDescription: 'Premium Italian e-commerce platform built for European markets.',
        fullDescription: 'A premium Italian e-commerce store featuring curated product collections, multilingual support, clean product pages, and a seamless checkout experience designed for European consumers.',
        toolsUsed: ['React', 'Node.js', 'Stripe', 'i18n'],
        liveLink: 'https://junavoo.com'
    },
    {
        id: 108,
        title: 'AI E-Commerce Platform',
        category: 'E-Commerce',
        tags: ['AI', 'E-commerce', 'Machine Learning'],
        image: 'https://res.cloudinary.com/dhffgjyra/image/upload/q_auto/f_auto/v1781353578/1773565389309-6795d98a-5594-4f45-b635-35d5d718d023_1_wudkrs.png',
        images: [
            'https://res.cloudinary.com/dhffgjyra/image/upload/q_auto/f_auto/v1781353578/1773565389309-6795d98a-5594-4f45-b635-35d5d718d023_1_wudkrs.png',
            'https://res.cloudinary.com/dhffgjyra/image/upload/q_auto/f_auto/v1781353583/1773565038202-8c1fe20e-35f6-4376-ab42-b631ac0ed83f_-_Copy_svzkog.png'
        ],
        shortDescription: 'AI-powered storefront optimized for conversion.',
        fullDescription: 'An intelligent e-commerce website powered by AI-driven product recommendations, dynamic filtering, cart management, and a fully responsive storefront optimized for high conversion rates.',
        toolsUsed: ['React', 'Python', 'TensorFlow', 'MongoDB'],
        liveLink: 'https://ai-ecom.netlify.app/'
    },
    {
        id: 109,
        title: 'CyberShield Agency',
        category: 'Cybersecurity',
        tags: ['Cybersecurity', 'Security', 'Enterprise'],
        image: 'https://res.cloudinary.com/dhffgjyra/image/upload/q_auto/f_auto/v1781353550/1773559570442-455a8834-b1fc-4fa8-80d4-846b28a51d18_-_Copy_jcmlky.png',
        images: [
            'https://res.cloudinary.com/dhffgjyra/image/upload/q_auto/f_auto/v1781353550/1773559570442-455a8834-b1fc-4fa8-80d4-846b28a51d18_-_Copy_jcmlky.png',
            'https://res.cloudinary.com/dhffgjyra/image/upload/q_auto/f_auto/v1781353554/1773559753048-861e05f0-b7ea-4db0-80e1-de52928d8c7a_eedyzo.png'
        ],
        shortDescription: 'Enterprise cybersecurity agency website with case studies.',
        fullDescription: 'Professional cybersecurity agency website featuring service showcases, real-world client case studies, and an enterprise-grade threat response interface built for trust and authority.',
        toolsUsed: ['React', 'Next.js', 'Security APIs', 'WebSocket'],
        liveLink: 'https://ibb.co/j9xHNQcY'
    },
    {
        id: 110,
        title: 'Student Database System',
        category: 'AI / ML',
        tags: ['AI', 'ML', 'Facial Recognition', 'Database'],
        image: 'https://res.cloudinary.com/dhffgjyra/image/upload/q_auto/f_auto/v1779080876/1773605387011-0fa55acc-4345-4fa7-b182-b5249bd15493_-_Copy_xvwq9o.png',
        shortDescription: 'Student management with facial recognition attendance.',
        fullDescription: 'A smart student management system with integrated facial recognition for automated attendance tracking, secure database storage, and real-time identity verification across campus.',
        toolsUsed: ['Python', 'TensorFlow', 'OpenCV', 'PostgreSQL', 'React']
    },
    {
        id: 111,
        title: 'Bistro Restaurant Website',
        category: 'Restaurant',
        tags: ['Hospitality', 'Booking'],
        image: 'https://res.cloudinary.com/dhffgjyra/image/upload/q_auto/f_auto/v1779080880/1773604052872-9439ab04-06e4-4423-bf6a-7ffadb49f899_xdftbu.png',
        images: [
            'https://res.cloudinary.com/dhffgjyra/image/upload/q_auto/f_auto/v1779080880/1773604052872-9439ab04-06e4-4423-bf6a-7ffadb49f899_xdftbu.png',
            'https://res.cloudinary.com/dhffgjyra/image/upload/q_auto/f_auto/v1779080874/1773604181593-185043b4-350d-4183-8c2a-dc5739db23a7_-_Copy_ff1ozk.png'
        ],
        shortDescription: 'Elegant restaurant site with reservations and menu.',
        fullDescription: 'An elegant restaurant website for Bistro featuring online table reservations, an interactive menu, photo gallery, and a warm UI designed to reflect a premium dining experience.',
        toolsUsed: ['React', 'Node.js', 'MySQL', 'Calendar API']
    },
    {
        id: 112,
        title: 'EDI Orders REST API',
        category: 'Backend / API',
        tags: ['API', 'REST', 'NestJS', 'Supabase'],
        image: 'https://res.cloudinary.com/dhffgjyra/image/upload/q_auto/f_auto/v1781353562/1773603062155-958259b9-8ad3-4194-9189-e7029b262055_ohgetp.png',
        images: [
            'https://res.cloudinary.com/dhffgjyra/image/upload/q_auto/f_auto/v1781353562/1773603062155-958259b9-8ad3-4194-9189-e7029b262055_ohgetp.png',
            'https://res.cloudinary.com/dhffgjyra/image/upload/q_auto/f_auto/v1781353559/1773602943553-5b228ed6-742e-4f1c-b841-a867b770b023_-_Copy_ahau4f.png'
        ],
        shortDescription: 'Secure RESTful API with JWT auth and Swagger docs.',
        fullDescription: 'A secure RESTful EDI Orders API built with NestJS and Supabase, featuring JWT authentication, order creation endpoints, real-time status tracking, and full Swagger/OpenAPI documentation.',
        toolsUsed: ['NestJS', 'Supabase', 'JWT', 'Swagger', 'PostgreSQL']
    },
    {
        id: 114,
        title: 'Social Reading Platform',
        category: 'EdTech',
        tags: ['EdTech', 'Reading', 'Writing Platform'],
        image: 'https://res.cloudinary.com/dhffgjyra/image/upload/q_auto/f_auto/v1781353644/Screenshot_2026-05-17_125038_zlgxsc.png',
        shortDescription: 'Immersive book reading and writing platform.',
        fullDescription: 'An immersive reading and writing platform with a distraction-free reader UI, chapter navigation, personal library management, and a clean writing environment for authors and readers alike.',
        toolsUsed: ['React', 'Node.js', 'MongoDB', 'Rich Text Editor', 'PDF Generation'],
        liveLink: 'https://bookwriter-iota.vercel.app/'
    },
    {
        id: 115,
        title: 'Team Collaboration Tracking',
        category: 'Productivity',
        tags: ['Collaboration', 'Project Management', 'Team Tools'],
        image: 'https://res.cloudinary.com/dhffgjyra/image/upload/q_auto/f_auto/v1781353647/Screenshot_2026-05-17_125052_jjytvw.png',
        shortDescription: 'Real-time team collaboration and task tracking platform.',
        fullDescription: 'A comprehensive team collaboration platform featuring real-time task tracking, project management dashboards, team communication tools, progress analytics, and seamless integration with popular productivity apps.',
        toolsUsed: ['React', 'TypeScript', 'Node.js', 'Socket.io', 'PostgreSQL', 'Redis']
    },
    {
        id: 116,
        title: 'Dental Clinic Website',
        category: 'Healthcare',
        tags: ['Healthcare', 'Booking', 'Responsive'],
        image: 'https://res.cloudinary.com/dhffgjyra/image/upload/v1784660859/Screenshot_2026-07-22_000333_rblqwv.png',
        images: [
            'https://res.cloudinary.com/dhffgjyra/image/upload/v1784660859/Screenshot_2026-07-22_000333_rblqwv.png',
            'https://res.cloudinary.com/dhffgjyra/image/upload/v1784660860/Screenshot_2026-07-22_000354_yl9f51.png'
        ],
        shortDescription: 'Professional dental clinic website with appointment booking.',
        fullDescription: 'A modern dental clinic website featuring online appointment booking, service showcases, doctor profiles, patient testimonials, and a clean, professional design that builds trust with potential patients.',
        toolsUsed: ['React', 'Node.js', 'MongoDB', 'Calendar API'],
        liveLink: 'https://abdullahprojectfornazeer.vercel.app/'
    },
    {
        id: 117,
        title: 'Medicine Store Website with SEO',
        category: 'E-Commerce',
        tags: ['E-commerce', 'SEO', 'Pharmacy'],
        image: 'https://res.cloudinary.com/dhffgjyra/image/upload/v1784660858/Screenshot_2026-07-22_000235_fwkvo0.png',
        images: [
            'https://res.cloudinary.com/dhffgjyra/image/upload/v1784660858/Screenshot_2026-07-22_000235_fwkvo0.png',
            'https://res.cloudinary.com/dhffgjyra/image/upload/v1784660857/Screenshot_2026-07-22_000318_uqzmsd.png'
        ],
        shortDescription: 'SEO-optimized medicine store with product catalog.',
        fullDescription: 'A comprehensive medicine store website with SEO optimization, product catalog, search functionality, prescription upload, and secure checkout designed for pharmaceutical e-commerce with full compliance features.',
        toolsUsed: ['React', 'Next.js', 'SEO', 'Stripe', 'MongoDB'],
        liveLink: 'https://devapk.com'
    },
    {
        id: 118,
        title: 'Clothing (Super Daddio)',
        category: 'Shopify',
        tags: ['Shopify', 'E-commerce', 'Clothing'],
        image: 'https://res.cloudinary.com/da1lnrcuv/image/upload/v1784820105/Screenshot_2026-07-23_190724_pypkup.png',
        images: [
            'https://res.cloudinary.com/da1lnrcuv/image/upload/v1784820105/Screenshot_2026-07-23_190724_pypkup.png',
            'https://res.cloudinary.com/da1lnrcuv/image/upload/v1784820093/Screenshot_2026-07-23_190735_g51j7o.png'
        ],
        shortDescription: 'Modern Shopify clothing store with custom theme.',
        fullDescription: 'A stylish Shopify clothing store featuring custom theme development, product collections, seamless checkout experience, and mobile-responsive design optimized for fashion e-commerce.',
        toolsUsed: ['Shopify', 'Liquid', 'CSS', 'JavaScript'],
        liveLink: 'https://www.superdaddio.com/'
    },
    {
        id: 119,
        title: 'Clothing Brand (Solo Fashion)',
        category: 'Shopify',
        tags: ['Shopify', 'E-commerce', 'Fashion'],
        image: 'https://res.cloudinary.com/da1lnrcuv/image/upload/v1784820117/Screenshot_2026-07-23_190905_olcw0g.png',
        images: [
            'https://res.cloudinary.com/da1lnrcuv/image/upload/v1784820117/Screenshot_2026-07-23_190905_olcw0g.png',
            'https://res.cloudinary.com/da1lnrcuv/image/upload/v1784820102/Screenshot_2026-07-23_190918_bfnphs.png'
        ],
        shortDescription: 'Premium fashion brand Shopify store.',
        fullDescription: 'A premium fashion brand Shopify store with elegant design, product showcases, collection management, and optimized shopping experience for fashion-conscious customers.',
        toolsUsed: ['Shopify', 'Liquid', 'Tailwind CSS', 'JavaScript'],
        liveLink: 'https://solofashion.co.uk/'
    },
    {
        id: 120,
        title: 'Clothing Brand (The Hang)',
        category: 'Shopify',
        tags: ['Shopify', 'E-commerce', 'Streetwear'],
        image: 'https://res.cloudinary.com/da1lnrcuv/image/upload/v1784820090/Screenshot_2026-07-23_190932_flkcwt.png',
        images: [
            'https://res.cloudinary.com/da1lnrcuv/image/upload/v1784820090/Screenshot_2026-07-23_190932_flkcwt.png',
            'https://res.cloudinary.com/da1lnrcuv/image/upload/v1784820095/Screenshot_2026-07-23_190959_bvu2xw.png'
        ],
        shortDescription: 'Streetwear clothing brand Shopify store.',
        fullDescription: 'A trendy streetwear clothing brand Shopify store featuring bold design, product galleries, size guides, and a seamless checkout experience tailored for the fashion-forward demographic.',
        toolsUsed: ['Shopify', 'Liquid', 'CSS', 'JavaScript'],
        liveLink: 'https://shopthehang.com/'
    }
];

export const graphicDesignProjects = [
    {
        id: 201,
        title: 'Typography & Quotations Design',
        category: 'Typography',
        tags: ['Typography', 'Branding', 'Print'],
        image: typographyDesignImg,
        shortDescription: 'Custom typography designs and inspirational quotations for brand identity.',
        fullDescription: 'Professional typography design with custom fonts, quotations, and brand messaging that resonates with target audiences.',
        toolsUsed: ['Adobe Illustrator', 'Photoshop', 'InDesign'],
        results: 'Increased brand recognition by 45% through consistent typography.'
    },
    {
        id: 202,
        title: 'Product Image Design',
        category: 'Product Design',
        tags: ['E-commerce', 'Product Photography', 'Retouching'],
        image: productImageDesignImg,
        shortDescription: 'E-commerce product photography with professional retouching.',
        fullDescription: 'High-quality product photography with advanced retouching techniques for online stores and marketplaces.',
        toolsUsed: ['Lightroom', 'Photoshop', 'Capture One'],
        results: 'Improved conversion rates by 28% with professional product imagery.'
    },
    {
        id: 203,
        title: 'Thumbnail Design',
        category: 'Thumbnails',
        tags: ['YouTube', 'Video', 'Social Media'],
        image: thumbnailDesignImg,
        shortDescription: 'Eye-catching thumbnails for YouTube and social media.',
        fullDescription: 'Custom thumbnail designs optimized for click-through rates and brand consistency across video platforms.',
        toolsUsed: ['Photoshop', 'Canva', 'Figma'],
        results: 'Achieved 35% higher CTR with optimized thumbnail designs.'
    },
    {
        id: 204,
        title: 'CV / Resume Design',
        category: 'Professional Documents',
        tags: ['CV', 'Resume', 'Career'],
        image: cvResumeDesignImg,
        shortDescription: 'Professional CV and resume design for career advancement.',
        fullDescription: 'Modern, professional resume designs that highlight skills and experience effectively.',
        toolsUsed: ['InDesign', 'Word', 'PDF Expert'],
        results: '85% interview success rate with professionally designed resumes.'
    },
    {
        id: 205,
        title: 'Business Card Design',
        category: 'Print Design',
        tags: ['Business Cards', 'Branding', 'Print'],
        image: businessCardDesignImg,
        shortDescription: 'Premium business card designs for professional networking.',
        fullDescription: 'Elegant business card designs that make lasting first impressions in professional settings.',
        toolsUsed: ['Illustrator', 'Photoshop', 'Print Studio'],
        results: 'Increased networking connections by 25% with memorable card designs.'
    },
    {
        id: 206,
        title: 'Web Banner Design',
        category: 'Web Graphics',
        tags: ['Web Banners', 'Digital Marketing', 'Display Ads'],
        image: webBannerDesignImg,
        shortDescription: 'High-converting web banners for digital campaigns.',
        fullDescription: 'Eye-catching web banner designs optimized for digital advertising and website promotion.',
        toolsUsed: ['Photoshop', 'Figma', 'Google Web Designer'],
        results: 'Achieved 42% higher click-through rates with optimized banner designs.'
    },
    {
        id: 207,
        title: 'Outdoor Banner Design',
        category: 'Outdoor Advertising',
        tags: ['Outdoor', 'Billboards', 'Print Advertising'],
        image: outdoorBannerDesignImg,
        shortDescription: 'Large-format outdoor banners for maximum visibility.',
        fullDescription: 'Professional outdoor banner designs for billboards, events, and large-scale advertising.',
        toolsUsed: ['Illustrator', 'Large Format Printer', 'Adobe Dimension'],
        results: 'Increased brand awareness by 60% in target geographic areas.'
    },
    {
        id: 208,
        title: 'Menu Design',
        category: 'Restaurant & Hospitality',
        tags: ['Menu Design', 'Hospitality', 'Print'],
        image: menuDesignImg,
        shortDescription: 'Professional menu design for restaurants and cafes.',
        fullDescription: 'Elegant menu designs that enhance dining experience and brand presentation.',
        toolsUsed: ['InDesign', 'Illustrator', 'Food Photography'],
        results: 'Improved customer satisfaction scores by 30% with redesigned menus.'
    },
    {
        id: 209,
        title: 'Promotional Banner Design',
        category: 'Marketing Materials',
        tags: ['Promotional', 'Sales', 'Events'],
        image: promotionalBannerDesignImg,
        shortDescription: 'Promotional banners for sales events and campaigns.',
        fullDescription: 'Dynamic promotional banner designs for seasonal sales, events, and marketing campaigns.',
        toolsUsed: ['Photoshop', 'Illustrator', 'After Effects'],
        results: 'Increased event attendance by 40% with attractive promotional materials.'
    },
    {
        id: 210,
        title: 'Flyer Design',
        category: 'Marketing Materials',
        tags: ['Flyers', 'Marketing', 'Print'],
        image: flyerDesignImg,
        shortDescription: 'Eye-catching flyers for local marketing campaigns.',
        fullDescription: 'Professional flyer designs for local businesses, events, and promotional campaigns.',
        toolsUsed: ['Illustrator', 'Photoshop', 'InDesign'],
        results: 'Generated 500+ local leads through targeted flyer campaigns.'
    },
    {
        id: 211,
        title: 'Trifold Brochure Design',
        category: 'Print Design',
        tags: ['Brochures', 'Marketing', 'Information Design'],
        image: trifoldBrochureDesignImg,
        shortDescription: 'Professional trifold brochures for detailed product information.',
        fullDescription: 'Comprehensive trifold brochure designs that effectively communicate product features and benefits.',
        toolsUsed: ['InDesign', 'Illustrator', 'Professional Print'],
        results: 'Improved customer understanding by 50% with detailed brochure layouts.'
    },
    {
        id: 212,
        title: 'Wallpaper Design',
        category: 'Digital Products',
        tags: ['Wallpaper', 'Mobile', 'Digital Design'],
        image: wallpaperDesignImg,
        shortDescription: 'Custom mobile wallpapers for brand engagement.',
        fullDescription: 'Creative mobile wallpaper designs that enhance brand presence on personal devices.',
        toolsUsed: ['Photoshop', 'Procreate', 'Mobile Optimization'],
        results: '50,000+ downloads across mobile wallpaper platforms.'
    },
    {
        id: 213,
        title: 'Social Media Post Ad Design',
        category: 'Social Media',
        tags: ['Social Media', 'Advertising', 'Digital Marketing'],
        image: socialMediaPostAdDesignImg,
        shortDescription: 'Engaging social media ad designs for brand promotion.',
        fullDescription: 'High-impact social media advertisement designs optimized for engagement and conversion.',
        toolsUsed: ['Canva', 'Photoshop', 'Social Media Manager'],
        results: 'Achieved 3x higher engagement rates with optimized ad designs.'
    },
    {
        id: 214,
        title: 'Logo Design',
        category: 'Branding',
        tags: ['Logo', 'Branding', 'Identity Design'],
        image: logoDesignImg,
        shortDescription: 'Professional logo design for brand identity.',
        fullDescription: 'Custom logo designs that establish strong brand identity and market presence.',
        toolsUsed: ['Illustrator', 'Figma', 'Brand Guidelines'],
        results: 'Helped 25+ businesses establish professional brand identity.'
    }
];

export interface TeamMember {
    id: number;
    name: string;
    role: string;
    image: string;
    bio?: string;
}

export const teamMembers = [
    {
        id: 1,
        name: 'Abdullah Saghir',
        role: 'CEO',
        image: 'https://res.cloudinary.com/dhffgjyra/image/upload/q_auto/f_auto/v1781358085/Abdullah_Saghir_nexa_growth_solution_CEO_x3ungq.png',
        bio: 'Leading Nexa Growth with vision and strategic expertise in digital transformation.'
    },
    {
        id: 2,
        name: 'Chaughry Bilal',
        role: 'Marketing Lead',
        image: 'https://res.cloudinary.com/dhffgjyra/image/upload/q_auto/f_auto/v1781358086/Chaughry_Bilal_nexa_growh_solution_makreting_lead_hrnan8.png',
        bio: 'Driving marketing strategies that deliver measurable results and brand growth.'
    },
    {
        id: 3,
        name: 'Muhammad Abubakar',
        role: 'Project Manager',
        image: 'https://res.cloudinary.com/dhffgjyra/image/upload/q_auto/f_auto/v1781358086/Muhammad_Abubakar_nexa_growth_solution_project_manager_md5qhe.png',
        bio: 'Ensuring seamless project execution and client satisfaction through meticulous planning.'
    },
    {
        id: 4,
        name: 'Abdullah Jawad',
        role: 'Marketing Associate & Lead Gen',
        image: 'https://res.cloudinary.com/dhffgjyra/image/upload/q_auto/f_auto/v1781358087/Abdullah_Jawad_nexa_growth_solution_maketing_associated_and_lead_gen_p6urrv.png',
        bio: 'Specializing in lead generation and marketing campaign optimization.'
    },
    {
        id: 5,
        name: 'Abdullah Fayyaz',
        role: 'Web Development Lead',
        image: 'https://res.cloudinary.com/dhffgjyra/image/upload/q_auto/f_auto/v1781373907/Screenshot_2026-06-13_230308_yngqgc.png',
        bio: 'Leading web development initiatives with expertise in modern technologies and scalable solutions.'
    }
];
