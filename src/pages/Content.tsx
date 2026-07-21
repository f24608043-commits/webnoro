import { useEffect, useRef } from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import {
    FileText,
    PenTool,
    Palette,
    Video,
    Bot,
    Share2,
    CheckCircle,
    Search,
    Target,
    TrendingUp,
    Sparkles,
    Users,
    BarChart3,
    Zap,
    Compass,
    Layers,
    Cpu,
    Megaphone,
    Play,
    MousePointer,
    ArrowRight,
    Link2
} from 'lucide-react';
import { Reveal } from '@/components/animations/Reveal';
import { TiltCard } from '@/components/animations/TiltCard';
import { Magnetic } from '@/components/animations/Magnetic';
import AnimatedSectionWrapper from '@/components/AnimatedSectionWrapper';

const ContentGrowth = () => {
    const navigate = useNavigate();
    const heroRef = useRef<HTMLElement>(null);

    useEffect(() => { 
        window.scrollTo(0, 0); 
        // SEO: Update page title
        document.title = "Content Creation & Marketing Services | Nexa Growth";
        // SEO: Update meta description
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute("content", "Scale your brand with content creation, copywriting, video editing, graphic design, and AI-powered content systems. Drive traffic, engagement, and conversions with Nexa Growth Solutions.");
        }
        // SEO: Update meta keywords
        let metaKeywords = document.querySelector('meta[name="keywords"]');
        if (!metaKeywords) {
            metaKeywords = document.createElement('meta');
            metaKeywords.setAttribute('name', 'keywords');
            document.head.appendChild(metaKeywords);
        }
        metaKeywords.setAttribute("content", "content creation services, content marketing agency, copywriting services, video editing services, graphic design services, ai content creation, social media content, content strategy");
    }, []);

    // Services data - updated with detailed descriptions and bullets
    const services = [
        { 
            icon: Target,
            title: 'Content Strategy & Planning', 
            description: 'Before we create, we plan. Every brand gets a custom content roadmap built around your audience, goals, and competitive landscape.',
            bullets: [
                'In-depth audience & competitor research',
                'Monthly content calendars',
                'Platform-specific content strategies',
                'KPI tracking & performance benchmarks'
            ]
        },
        { 
            icon: PenTool,
            title: 'Content Writing & Copywriting', 
            description: 'Words that work. We craft copy that ranks on Google, resonates with your audience, and drives action across every touchpoint.',
            bullets: [
                'SEO-optimized blog articles',
                'Website & landing page copy',
                'Product descriptions & category pages',
                'Ad copy & email sequences'
            ]
        },
        { 
            icon: Palette,
            title: 'Graphic Design & Visual Content', 
            description: 'Visuals that stop the scroll. We design branded graphics that communicate your value instantly and look stunning on every platform.',
            bullets: [
                'Social media post & story templates',
                'Brand identity & visual systems',
                'Ad creatives & banner graphics',
                'Infographics & presentation decks'
            ]
        },
        { 
            icon: Play,
            title: 'Video Editing & Motion Content', 
            description: 'From raw footage to viral-ready content. We produce and edit videos that capture attention, tell your story, and convert viewers.',
            bullets: [
                'Short-form Reels, TikToks & YouTube Shorts',
                'Long-form YouTube video editing',
                'Motion graphics & animated intros',
                'Ad video creatives & product demos'
            ]
        },
        { 
            icon: Sparkles,
            title: 'AI-Powered Content Systems', 
            description: 'Scale your content output without scaling your team. We build AI-assisted workflows that produce quality content at speed and volume.',
            bullets: [
                'AI writing & content generation pipelines',
                'Automated content repurposing systems',
                'Prompt engineering for brand voice',
                'Content velocity & efficiency optimization'
            ]
        },
        { 
            icon: Megaphone,
            title: 'Social Media & Ad Content', 
            description: 'Platform-native content built to perform. From organic social to paid ad creatives, we produce content that drives clicks, reach, and ROI.',
            bullets: [
                'Multi-platform content packages',
                'Performance-tested ad creatives',
                'Carousel, story, and reel formats',
                'A/B tested visuals for paid campaigns'
            ]
        },
    ];

    // Hero stat pills data
    const heroStats = [
        { label: "50+ Brands Served" },
        { label: "10M+ Content Views" },
        { label: "3x Avg. Engagement Growth" },
        { label: "AI + Human Powered" },
        { label: "Multi-Platform Ready" }
    ];

    // What We Do - 3 column stats
    const whatWeDoStats = [
        { 
            icon: Compass, 
            title: "Strategy-First", 
            description: "Every piece of content has a purpose" 
        },
        { 
            icon: Layers, 
            title: "Multi-Platform", 
            description: "Built for web, social, and ads" 
        },
        { 
            icon: Cpu, 
            title: "AI-Accelerated", 
            description: "Scale content without scaling costs" 
        }
    ];

    const whyChooseUs = [
        'Strategy-first content approach',
        'Conversion-focused design',
        'Multi-platform expertise',
        'AI-powered scalability',
        'Data-driven performance tracking',
    ];

    // How Content Drives Growth - 3 cards
    const growthCards = [
        {
            number: "01",
            icon: TrendingUp,
            title: "Attracts Traffic",
            description: "SEO-optimized blogs, keyword-rich content, and video assets bring consistent organic traffic to your website — month after month, without paid ads."
        },
        {
            number: "02",
            icon: Users,
            title: "Builds Engagement",
            description: "High-quality visuals, short-form video, and platform-native content capture attention and build real audience relationships that compound over time."
        },
        {
            number: "03",
            icon: MousePointer,
            title: "Converts Customers",
            description: "Strategic copywriting, strong CTAs, and conversion-focused content design turn your audience into paying customers — consistently and predictably."
        }
    ];

    // Process steps - updated with detailed descriptions
    const processSteps = [
        { 
            number: "01",
            title: 'Research', 
            description: 'We audit your brand, analyze competitors, and identify your highest-value content opportunities.'
        },
        { 
            number: "02",
            title: 'Strategy', 
            description: 'We build a custom content roadmap — platforms, formats, topics, and publishing cadence aligned to your growth goals.'
        },
        { 
            number: "03",
            title: 'Creation', 
            description: 'Our team of writers, designers, and video editors produce content built to perform — on-brand and on-time.'
        },
        { 
            number: "04",
            title: 'Optimization', 
            description: 'We track performance, run experiments, and continuously improve content based on real data and platform feedback.'
        },
        { 
            number: "05",
            title: 'Scaling', 
            description: 'Once content systems are proven, we automate, expand, and scale — compounding your content growth over time.'
        },
    ];

    // Why Choose Us features
    const whyChooseUsFeatures = [
        { text: "Strategy-first content approach — no random posting" },
        { text: "Conversion-focused design & copy on every asset" },
        { text: "Multi-platform expertise — web, social, video & ads" },
        { text: "AI-powered scalability — grow output without growing cost" },
        { text: "Data-driven optimization — every decision backed by metrics" }
    ];

    // Stats bar data
    const statsBar = [
        { value: "50+", label: "Brands" },
        { value: "500+", label: "Assets Delivered" },
        { value: "10M+", label: "Views Generated" },
        { value: "3x", label: "ROI Average" }
    ];

    // Content Engineering - 6 glowing cards data
    const contentEngineeringCards = [
        {
            title: 'Content Strategy',
            description: 'SEO keyword research, funnel-based content planning, and precise audience targeting for maximum reach.',
            icon: 'Search'
        },
        {
            title: 'Copywriting Systems',
            description: 'High-conversion landing pages, sales copywriting, and brand messaging frameworks that drive action.',
            icon: 'FileText'
        },
        {
            title: 'SEO Content Writing',
            description: 'Blog articles, long-form authority content, and keyword optimization for top Google rankings.',
            icon: 'PenTool'
        },
        {
            title: 'Video Content Optimization',
            description: 'Short-form reels for TikTok & Instagram, YouTube growth content, and ad creatives for conversions.',
            icon: 'Video'
        },
        {
            title: 'Graphic Content Systems',
            description: 'Social media creatives, ad banners, and complete branding kits for consistent visual identity.',
            icon: 'Palette'
        },
        {
            title: 'Case Study Engineering',
            description: 'Storytelling frameworks, before/after transformations, and ROI-focused narratives that build trust.',
            icon: 'TrendingUp'
        }
    ];

    // Authority & Backlink Systems
    const authoritySystems = [
        {
            title: 'Blog Content Engine',
            description: 'High-ranking articles designed to attract organic backlinks and establish thought leadership.'
        },
        {
            title: 'Guest Posting Strategy',
            description: 'Publishing content on high-authority platforms to expand reach and build domain authority.'
        },
        {
            title: 'Resource Link Assets',
            description: 'Free tools, guides, and frameworks that people naturally reference and link to.'
        },
        {
            title: 'Case Study Distribution',
            description: 'Shareable success stories that build credibility and earn quality backlinks.'
        },
        {
            title: 'Industry Insights',
            description: 'Data-driven reports and trend analysis content that positions you as an industry expert.'
        }
    ];

    // Content → Traffic → Conversions flow
    const conversionFlow = [
        {
            step: '01',
            title: 'Attract',
            description: 'SEO blogs, videos, and social content bring targeted traffic to your business.'
        },
        {
            step: '02',
            title: 'Engage',
            description: 'High-quality visuals and storytelling retain users and build connection.'
        },
        {
            step: '03',
            title: 'Convert',
            description: 'Optimized copy + creatives turn visitors into paying customers.'
        },
        {
            step: '04',
            title: 'Scale',
            description: 'Data-driven iteration improves ROI and compounds growth over time.'
        }
    ];

    // Creative Execution Stack
    const creativeStack = [
        'Graphic Design', 'UI/UX Design', 'Video Editing', 'Motion Graphics',
        'Content Writing', 'Copywriting', 'Storyboarding', 'Ad Creatives',
        'Branding Systems', 'Social Media Content'
    ];

    // Content in Action - Case Studies
    const caseStudies = [
        {
            title: 'E-commerce Brand Growth',
            problem: 'Low engagement & poor conversions',
            solution: 'SEO blogs + ad creatives + product visuals',
            result: '3.8x increase in conversion rate'
        },
        {
            title: 'SaaS Startup Launch',
            problem: 'Zero brand awareness & no traffic',
            solution: 'Content strategy + video marketing + landing pages',
            result: '250% increase in qualified leads'
        },
        {
            title: 'Local Business Expansion',
            problem: 'Limited online presence',
            solution: 'Local SEO + social content + Google Ads',
            result: '5x increase in organic traffic'
        }
    ];

    // JSON-LD Schema Markup - Updated per requirements
    const schemaMarkup = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Organization",
                "name": "Nexa Growth Solutions",
                "url": "https://nexagrowthsolution.com",
                "description": "Content creation, copywriting, video editing, graphic design, and AI-powered content systems for business growth."
            },
            {
                "@type": "Service",
                "serviceType": "Content Creation",
                "provider": { "@type": "Organization", "name": "Nexa Growth Solutions" },
                "description": "Full-stack content creation including writing, design, video editing, and AI-powered content workflows."
            },
            {
                "@type": "Service",
                "serviceType": "Copywriting",
                "provider": { "@type": "Organization", "name": "Nexa Growth Solutions" },
                "description": "SEO blog writing, website copy, ad copy, and product descriptions that convert."
            },
            {
                "@type": "Service",
                "serviceType": "Video Editing",
                "provider": { "@type": "Organization", "name": "Nexa Growth Solutions" },
                "description": "Short-form video, Reels, TikTok, YouTube, and motion graphics production."
            },
            {
                "@type": "Service",
                "serviceType": "Graphic Design",
                "provider": { "@type": "Organization", "name": "Nexa Growth Solutions" },
                "description": "Social media creatives, branding visuals, and conversion-focused ad graphics."
            }
        ]
    };

    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            {/* JSON-LD Schema */}
            <script type="application/ld+json">
                {JSON.stringify(schemaMarkup)}
            </script>
            
            <Navigation />

            {/* Hero Section - SECTION 1 */}
            <section ref={heroRef} className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
                {/* Animated Background Gradient - CSS only */}
                <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
                {/* Moving Grid Background */}
                <div className="absolute inset-0 bg-grid-pattern animate-grid-move opacity-20" />
                <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] animate-pulse" />
                    <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/15 rounded-full blur-[80px] animate-pulse" style={{ animationDelay: '1s' }} />
                    <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-primary/10 rounded-full blur-[60px] animate-pulse" style={{ animationDelay: '2s' }} />
                </div>
                
                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        {/* Eyebrow */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-bold text-xs md:text-sm mb-6 md:mb-8 border border-primary/20 uppercase tracking-widest animate-fadeInUp">
                            Content Growth System
                        </div>
                        
                        {/* H1 */}
                        <h1 className="text-[clamp(2.2rem,5vw,4rem)] font-display font-extrabold mb-6 md:mb-8 text-foreground tracking-tight leading-tight uppercase animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
                            Content That Attracts, Engages, and Converts
                        </h1>
                        
                        {/* Subheading */}
                        <p className="text-[clamp(1rem,2vw,1.2rem)] text-muted-foreground/75 mb-8 max-w-[600px] mx-auto leading-relaxed animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
                            We create high-performance content systems combining strategy, writing, design, video, and AI — to help your brand grow faster across every platform.
                        </p>
                        
                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4 animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
                            <Magnetic strength={0.3}>
                                <Button
                                    size="lg"
                                    className="rounded-full px-6 md:px-8 py-5 md:py-6 text-sm md:text-base font-bold bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg uppercase tracking-wide w-full sm:w-auto"
                                    onClick={() => window.open('https://calendly.com/nexagrowthsolution/30min', '_blank')}
                                    aria-label="Book a free content strategy call"
                                >
                                    Book Free Content Strategy Call
                                </Button>
                            </Magnetic>
                            <Magnetic strength={0.2}>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="rounded-full px-6 md:px-8 py-5 md:py-6 text-sm md:text-base font-bold border-2 border-primary text-primary hover:bg-primary/10 uppercase tracking-wide w-full sm:w-auto"
                                    onClick={() => {
                                        const servicesSection = document.getElementById('services');
                                        servicesSection?.scrollIntoView({ behavior: 'smooth' });
                                    }}
                                    aria-label="Explore content services"
                                >
                                    Explore Content Services
                                </Button>
                            </Magnetic>
                        </div>
                        
                        {/* Microtext */}
                        <p className="text-xs md:text-sm text-muted-foreground/70 mb-10 md:mb-12 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
                            Free audit. No commitment.
                        </p>
                        
                        {/* Stat Pills */}
                        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 animate-fadeInUp" style={{ animationDelay: '0.5s' }}>
                            {heroStats.map((stat, index) => (
                                <div 
                                    key={index}
                                    className="px-3 py-1.5 md:px-4 md:py-2 bg-card/60 backdrop-blur-sm rounded-full border border-border/50 text-xs md:text-sm font-medium text-foreground/80 stat-pill"
                                    style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                                >
                                    {stat.label}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 2 — WHAT WE DO */}
            <section className="py-16 md:py-24 bg-background relative">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-[800px] mx-auto text-center">
                        {/* Section Label */}
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 rounded-full text-primary font-semibold text-xs mb-4 uppercase tracking-wider">
                            What We Do
                        </div>
                        
                        {/* H2 */}
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-6 text-foreground tracking-tight">
                            Complete Content Solutions for Business Growth
                        </h2>
                        
                        {/* Paragraph */}
                        <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-10 md:mb-12">
                            We help businesses scale through content that is not only visually compelling but strategically engineered to drive traffic, engagement, and conversions. From precision copywriting to cinematic video editing and AI-powered content systems — we build the complete content engine your brand needs to dominate every digital platform.
                        </p>
                    </div>
                    
                    {/* 3-Column Icon Stat Row */}
                    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                        {whatWeDoStats.map((stat, index) => (
                            <Reveal key={index} delay={index * 0.1} direction="up">
                                <div className="text-center p-6 rounded-2xl bg-card/40 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1">
                                    <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
                                        <stat.icon className="w-6 h-6 text-primary" />
                                    </div>
                                    <h3 className="text-lg font-bold text-foreground mb-2">{stat.title}</h3>
                                    <p className="text-sm text-muted-foreground">{stat.description}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 3 — SERVICES GRID */}
            <section id="services" className="py-16 md:py-24 bg-muted/30 relative">
                <div className="container mx-auto px-4 md:px-6">
                    {/* Section Header */}
                    <div className="text-center mb-12 md:mb-16">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 rounded-full text-primary font-semibold text-xs mb-4 uppercase tracking-wider">
                            Our Services
                        </div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-foreground tracking-tight">
                            Six Content Systems That Drive Real Growth
                        </h2>
                    </div>
                    
                    {/* Services Grid */}
                    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {services.map((service, index) => (
                            <Reveal key={index} delay={index * 0.08} direction="up">
                                <TiltCard className="h-full">
                                    <div className="group h-full bg-card rounded-2xl p-6 md:p-8 border border-border hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                                        {/* Icon */}
                                        <div className="w-12 h-12 mb-5 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                            <service.icon className="w-6 h-6 text-primary" />
                                        </div>
                                        
                                        {/* Title */}
                                        <h3 className="text-lg md:text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                                            {service.title}
                                        </h3>
                                        
                                        {/* Description */}
                                        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                                            {service.description}
                                        </p>
                                        
                                        {/* Bullet List */}
                                        <ul className="space-y-2">
                                            {service.bullets.map((bullet, idx) => (
                                                <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground/80">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                                                    {bullet}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </TiltCard>
                            </Reveal>
                        ))}
                    </div>
                    
                    {/* CTA Banner Strip */}
                    <Reveal delay={0.3} direction="up">
                        <div className="max-w-4xl mx-auto mt-12 md:mt-16 p-6 md:p-8 rounded-2xl bg-primary/5 border border-primary/20 text-center">
                            <h3 className="text-lg md:text-xl font-bold text-foreground mb-4">
                                Want to scale your content output?
                            </h3>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                                <Button
                                    size="lg"
                                    className="rounded-full px-6 py-5 text-sm font-bold bg-primary text-primary-foreground hover:bg-primary/90 uppercase tracking-wide w-full sm:w-auto"
                                    onClick={() => window.open('https://calendly.com/nexagrowthsolution/30min', '_blank')}
                                    aria-label="Scale my content"
                                >
                                    Scale My Content
                                </Button>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="rounded-full px-6 py-5 text-sm font-bold border-2 border-primary text-primary hover:bg-primary/10 uppercase tracking-wide w-full sm:w-auto"
                                    onClick={() => window.open('https://wa.me/923331000214', '_blank')}
                                    aria-label="Talk to a strategist"
                                >
                                    Talk to a Strategist
                                </Button>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* CTA After Services Grid */}
            <section className="py-12 md:py-20 bg-background/50 backdrop-blur-sm relative overflow-hidden">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <Reveal direction="down">
                            <h3 className="text-2xl md:text-4xl font-display font-black mb-6 md:mb-8 text-foreground tracking-tight uppercase italic">
                                Want to scale your content?
                            </h3>
                        </Reveal>
                        <Reveal delay={0.2}>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-8">
                                <Magnetic strength={0.3}>
                                    <Button
                                        size="lg"
                                        className="rounded-full px-6 md:px-12 py-4 md:py-8 text-base md:text-xl font-black bg-primary text-black hover:bg-primary shadow-glow uppercase tracking-widest italic w-full sm:w-auto"
                                        onClick={() => window.open('https://calendly.com/nexagrowthsolution/30min', '_blank')}
                                    >
                                        Scale My Content
                                    </Button>
                                </Magnetic>
                                <Magnetic strength={0.2}>
                                    <Button
                                        size="lg"
                                        variant="outline"
                                        className="rounded-full px-6 md:px-12 py-4 md:py-8 text-base md:text-xl font-black border-2 border-primary text-primary hover:bg-primary/10 uppercase tracking-widest italic w-full sm:w-auto"
                                        onClick={() => window.open('https://wa.me/923331000214', '_blank')}
                                    >
                                        Talk to a Strategist
                                    </Button>
                                </Magnetic>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* SECTION 4 — HOW CONTENT DRIVES GROWTH */}
            <section className="py-16 md:py-24 bg-background relative">
                <div className="container mx-auto px-4 md:px-6">
                    {/* Section Header */}
                    <div className="text-center mb-12 md:mb-16">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 rounded-full text-primary font-semibold text-xs mb-4 uppercase tracking-wider">
                            The Growth Engine
                        </div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-foreground tracking-tight">
                            How Content Drives Business Growth
                        </h2>
                    </div>
                    
                    {/* 3-Column Cards */}
                    <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                        {growthCards.map((card, index) => (
                            <Reveal key={index} delay={index * 0.15} direction="up">
                                <div className="h-full bg-card rounded-2xl p-6 md:p-8 border border-border hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg text-center">
                                    {/* Number/Icon */}
                                    <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-primary/10 flex items-center justify-center">
                                        <card.icon className="w-8 h-8 text-primary" />
                                    </div>
                                    
                                    {/* Number Badge */}
                                    <div className="inline-block px-3 py-1 bg-primary/10 rounded-full text-primary font-bold text-sm mb-3">
                                        {card.number}
                                    </div>
                                    
                                    {/* Title */}
                                    <h3 className="text-lg md:text-xl font-bold text-foreground mb-3">
                                        {card.title}
                                    </h3>
                                    
                                    {/* Description */}
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        {card.description}
                                    </p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 4.5 — CONTENT ENGINEERING (NEW) */}
            <section className="py-16 md:py-24 bg-background relative overflow-hidden">
                {/* Background glow */}
                <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
                </div>

                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-primary font-semibold text-xs uppercase tracking-wider mb-6">
                            <Sparkles className="w-4 h-4" />
                            Content Marketing Agency
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight mb-4">
                            Content <span className="text-primary">Engineering</span>
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            Data-driven content systems designed to scale traffic, engagement, and conversions.
                        </p>
                    </div>

                    {/* 6 Glowing Cards Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {contentEngineeringCards.map((card, index) => (
                            <Reveal key={index} delay={index * 0.1} direction="up">
                                <div className="group relative bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-500 h-full">
                                    {/* Glow effect */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    
                                    {/* Icon */}
                                    <div className="relative w-12 h-12 bg-primary/10 border border-primary/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-all">
                                        {card.icon === 'Search' && <Search className="w-6 h-6 text-primary" />}
                                        {card.icon === 'FileText' && <FileText className="w-6 h-6 text-primary" />}
                                        {card.icon === 'PenTool' && <PenTool className="w-6 h-6 text-primary" />}
                                        {card.icon === 'Video' && <Video className="w-6 h-6 text-primary" />}
                                        {card.icon === 'Palette' && <Palette className="w-6 h-6 text-primary" />}
                                        {card.icon === 'TrendingUp' && <TrendingUp className="w-6 h-6 text-primary" />}
                                    </div>

                                    <h3 className="relative text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                                        {card.title}
                                    </h3>
                                    <p className="relative text-muted-foreground text-sm leading-relaxed">
                                        {card.description}
                                    </p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 5 — OUR PROCESS */}
            <section className="py-16 md:py-24 bg-muted/30 relative">
                <div className="container mx-auto px-4 md:px-6">
                    {/* Section Header */}
                    <div className="text-center mb-12 md:mb-16">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 rounded-full text-primary font-semibold text-xs mb-4 uppercase tracking-wider">
                            How We Work
                        </div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-foreground tracking-tight">
                            Our Content Execution System
                        </h2>
                    </div>
                    
                    {/* Process Steps - Horizontal Timeline */}
                    <div className="max-w-6xl mx-auto">
                        {/* Desktop: Horizontal with connecting line */}
                        <div className="hidden lg:block relative">
                            {/* Connecting Line */}
                            <div className="absolute top-12 left-[10%] right-[10%] h-0.5 bg-border" />
                            
                            <div className="grid grid-cols-5 gap-4">
                                {processSteps.map((step, index) => (
                                    <Reveal key={index} delay={index * 0.1} direction="up">
                                        <div className="relative text-center">
                                            {/* Number Circle */}
                                            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg relative z-10 border-4 border-background">
                                                {step.number}
                                            </div>
                                            
                                            {/* Title */}
                                            <h3 className="text-base font-bold text-foreground mb-2">{step.title}</h3>
                                            
                                            {/* Description */}
                                            <p className="text-xs text-muted-foreground leading-relaxed px-2">{step.description}</p>
                                        </div>
                                    </Reveal>
                                ))}
                            </div>
                        </div>
                        
                        {/* Mobile/Tablet: Vertical Stacked */}
                        <div className="lg:hidden space-y-6">
                            {processSteps.map((step, index) => (
                                <Reveal key={index} delay={index * 0.1} direction="up">
                                    <div className="flex items-start gap-4">
                                        {/* Number Circle */}
                                        <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm flex-shrink-0">
                                            {step.number}
                                        </div>
                                        
                                        {/* Content */}
                                        <div className="flex-1">
                                            <h3 className="text-base font-bold text-foreground mb-1">{step.title}</h3>
                                            <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                                        </div>
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 6 — WHY CHOOSE US */}
            <section className="py-16 md:py-24 bg-background relative">
                <div className="container mx-auto px-4 md:px-6">
                    {/* Section Header */}
                    <div className="text-center mb-10 md:mb-12">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 rounded-full text-primary font-semibold text-xs mb-4 uppercase tracking-wider">
                            Why Nexa Growth
                        </div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-foreground tracking-tight">
                            Why Brands Choose Nexa Content Systems
                        </h2>
                    </div>
                    
                    {/* 2-Column Layout */}
                    <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
                        {/* Left Side - Paragraph */}
                        <Reveal direction="left">
                            <div>
                                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                                    Most content agencies produce content. We build <strong className="text-foreground">content systems</strong>. There is a difference. A system is strategic, scalable, and measurable. It grows with your business and compounds in value over time. That's what we deliver.
                                </p>
                            </div>
                        </Reveal>
                        
                        {/* Right Side - Feature List */}
                        <Reveal direction="right">
                            <div className="space-y-3">
                                {whyChooseUsFeatures.map((feature, index) => (
                                    <div key={index} className="flex items-start gap-3 p-3 rounded-xl bg-card/50 border border-border/50">
                                        <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <CheckCircle className="w-3 h-3 text-primary" />
                                        </div>
                                        <span className="text-sm md:text-base text-foreground">{feature.text}</span>
                                    </div>
                                ))}
                            </div>
                        </Reveal>
                    </div>
                    
                    {/* Stats Bar */}
                    <Reveal delay={0.3} direction="up">
                        <div className="max-w-4xl mx-auto mt-12 md:mt-16">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0 md:divide-x md:divide-border bg-card rounded-2xl p-6 md:p-8 border border-border">
                                {statsBar.map((stat, index) => (
                                    <div key={index} className="text-center px-4">
                                        <div className="text-2xl md:text-3xl font-bold text-primary mb-1">{stat.value}</div>
                                        <div className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* SECTION 6.5 — AUTHORITY & BACKLINK SYSTEMS (NEW) */}
            <section className="py-16 md:py-24 bg-muted/30 relative overflow-hidden border-y border-border/50">
                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-primary font-semibold text-xs uppercase tracking-wider mb-6">
                            <Link2 className="w-4 h-4" />
                            SEO Content Writing & Backlinks
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight mb-4">
                            Authority & <span className="text-primary">Backlink Systems</span>
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            We create content that earns trust, rankings, and high-quality backlinks.
                        </p>
                    </div>

                    {/* Horizontal Cards */}
                    <div className="space-y-4 max-w-5xl mx-auto">
                        {authoritySystems.map((system, index) => (
                            <Reveal key={index} delay={index * 0.1} direction="up">
                                <div className="group relative bg-card border border-border rounded-2xl p-6 md:p-8 hover:border-primary/40 transition-all duration-500 flex flex-col md:flex-row md:items-center gap-6">
                                    {/* Number indicator */}
                                    <div className="flex-shrink-0 w-14 h-14 bg-primary/10 border border-primary/20 rounded-xl flex items-center justify-center group-hover:border-primary/40 group-hover:bg-primary/20 transition-all">
                                        <span className="text-xl font-black text-primary">0{index + 1}</span>
                                    </div>
                                    
                                    {/* Content */}
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                                            {system.title}
                                        </h3>
                                        <p className="text-muted-foreground">
                                            {system.description}
                                        </p>
                                    </div>
                                    
                                    {/* Arrow */}
                                    <div className="flex-shrink-0 hidden md:block">
                                        <ArrowRight className="w-6 h-6 text-muted-foreground group-hover:text-primary group-hover:translate-x-2 transition-all" />
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 6.6 — CONTENT → TRAFFIC → CONVERSIONS FLOW (NEW) */}
            <section className="py-16 md:py-24 bg-background relative overflow-hidden">
                {/* Background grid */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
                        backgroundSize: '40px 40px'
                    }} />
                </div>

                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-primary font-semibold text-xs uppercase tracking-wider mb-6">
                            <Target className="w-4 h-4" />
                            Video Marketing Services
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight mb-4">
                            Content <span className="text-primary">→</span> Traffic <span className="text-primary">→</span> Conversions
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            How our content systems transform visitors into customers.
                        </p>
                    </div>

                    {/* 4-Step Flow */}
                    <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
                        {conversionFlow.map((step, index) => (
                            <Reveal key={index} delay={index * 0.1} direction="up">
                                <div className="relative">
                                    {/* Connector line */}
                                    {index < 3 && (
                                        <div className="hidden md:block absolute top-10 left-full w-full h-px bg-gradient-to-r from-primary/50 to-border z-0" />
                                    )}
                                    
                                    <div className="relative bg-card border border-border rounded-2xl p-6 hover:border-primary/40 transition-all duration-500 h-full group">
                                        {/* Step number */}
                                        <div className="w-16 h-16 bg-primary/10 border border-primary/20 rounded-xl flex items-center justify-center mb-4 group-hover:border-primary/40 group-hover:bg-primary/20 transition-all">
                                            <span className="text-2xl font-black text-primary">{step.step}</span>
                                        </div>
                                        
                                        <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                                            {step.title}
                                        </h3>
                                        <p className="text-muted-foreground text-sm leading-relaxed">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 6.7 — CREATIVE EXECUTION STACK (NEW) */}
            <section className="py-16 md:py-24 bg-muted/30 relative overflow-hidden">
                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-primary font-semibold text-xs uppercase tracking-wider mb-6">
                            <Layers className="w-4 h-4" />
                            Graphic Design for Businesses
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight mb-4">
                            Creative <span className="text-primary">Execution Stack</span>
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            Our full arsenal of creative capabilities for content-driven growth.
                        </p>
                    </div>

                    {/* Tech Stack Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-5xl mx-auto">
                        {creativeStack.map((item, index) => (
                            <Reveal key={index} delay={index * 0.05} direction="up">
                                <div className="group bg-card border border-border rounded-xl px-4 py-4 flex items-center justify-center text-center hover:border-primary/40 hover:bg-primary/5 transition-all duration-300">
                                    <span className="text-foreground group-hover:text-primary font-semibold text-sm transition-colors">
                                        {item}
                                    </span>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 6.8 — CONTENT IN ACTION / CASE STUDIES (NEW) */}
            <section className="py-16 md:py-24 bg-background relative overflow-hidden">
                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-primary font-semibold text-xs uppercase tracking-wider mb-6">
                            <BarChart3 className="w-4 h-4" />
                            eCommerce Content Strategy
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight mb-4">
                            Content in <span className="text-primary">Action</span>
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            Real results from our conversion-focused design and content systems.
                        </p>
                    </div>

                    {/* Case Study Cards */}
                    <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {caseStudies.map((study, index) => (
                            <Reveal key={index} delay={index * 0.1} direction="up">
                                <div className="group relative bg-card border border-border rounded-2xl p-6 hover:border-primary/40 transition-all duration-500 h-full">
                                    {/* Glow effect */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    
                                    <div className="relative">
                                        {/* Title */}
                                        <h3 className="text-lg font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                                            {study.title}
                                        </h3>
                                        
                                        {/* Problem */}
                                        <div className="mb-3">
                                            <span className="text-xs font-bold text-red-500 uppercase tracking-wider">Problem</span>
                                            <p className="text-muted-foreground text-sm mt-1">{study.problem}</p>
                                        </div>
                                        
                                        {/* Solution */}
                                        <div className="mb-3">
                                            <span className="text-xs font-bold text-primary uppercase tracking-wider">Solution</span>
                                            <p className="text-muted-foreground text-sm mt-1">{study.solution}</p>
                                        </div>
                                        
                                        {/* Result */}
                                        <div className="pt-3 border-t border-border">
                                            <span className="text-xs font-bold text-primary uppercase tracking-wider">Result</span>
                                            <p className="text-primary font-bold text-lg mt-1">{study.result}</p>
                                        </div>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 7 — FINAL CTA (UPDATED) */}
            <section className="py-16 md:py-24 bg-zinc-950 relative overflow-hidden">
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950" />
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px]" />
                </div>
                
                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="max-w-3xl mx-auto text-center">
                        {/* H2 */}
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 text-white tracking-tight">
                            Ready to <span className="text-primary">Grow</span> with Content?
                        </h2>
                        
                        {/* Subtext */}
                        <p className="text-base md:text-lg text-zinc-400 mb-8 max-w-xl mx-auto leading-relaxed">
                            Let's build a content system that drives consistent traffic, engagement, and revenue for your business — starting this week.
                        </p>
                        
                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-4">
                            <Magnetic strength={0.3}>
                                <Button
                                    size="lg"
                                    className="rounded-full px-6 md:px-8 py-5 md:py-6 text-sm md:text-base font-bold bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg uppercase tracking-wide w-full sm:w-auto"
                                    onClick={() => window.open('https://calendly.com/nexagrowthsolution/30min', '_blank')}
                                    aria-label="Book free strategy call"
                                >
                                    Book Free Strategy Call
                                </Button>
                            </Magnetic>
                            <Magnetic strength={0.2}>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="rounded-full px-6 md:px-8 py-5 md:py-6 text-sm md:text-base font-bold border-2 border-zinc-600 text-zinc-300 hover:bg-zinc-800 hover:border-zinc-500 uppercase tracking-wide w-full sm:w-auto"
                                    onClick={() => window.open('https://wa.me/923331000214', '_blank')}
                                    aria-label="Chat on WhatsApp"
                                >
                                    Chat on WhatsApp
                                </Button>
                            </Magnetic>
                        </div>
                        
                        {/* Microtext */}
                        <p className="text-xs text-zinc-500">
                            No contracts. Cancel anytime. Results-focused.
                        </p>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default ContentGrowth;
