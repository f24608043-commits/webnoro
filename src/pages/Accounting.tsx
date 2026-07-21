import { useEffect, useRef } from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import {
    ArrowRight,
    TrendingUp,
    PieChart,
    LineChart,
    ShoppingCart,
    Activity,
    Zap,
    CheckCircle,
    MessageCircle,
    Users,
    Target,
    Repeat,
    Filter,
    BarChart3,
    Brain,
    Globe,
    FileText,
    Rocket,
    Briefcase,
    Store,
    Cpu,
    ShoppingBag,
    Building2,
    Award
} from 'lucide-react';
import { Reveal } from '@/components/animations/Reveal';
import { TiltCard } from '@/components/animations/TiltCard';
import { Magnetic } from '@/components/animations/Magnetic';
import { gsap, useGSAP } from '@/lib/gsap';
import AnimatedSectionWrapper from '@/components/AnimatedSectionWrapper';

const BusinessGrowth = () => {
    const navigate = useNavigate();
    const heroRef = useRef<HTMLElement>(null);
    const headlineRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => { window.scrollTo(0, 0); }, []);

    useGSAP(() => {
        if (headlineRef.current) {
            const lines = headlineRef.current.querySelectorAll('span.block');
            lines.forEach((line) => {
                const text = (line as HTMLElement).innerText;
                (line as HTMLElement).innerHTML = text.split('').map(char =>
                    `<span class="char-acc-hero inline-block">${char === ' ' ? '&nbsp;' : char}</span>`
                ).join('');
            });

            gsap.from(".char-acc-hero", {
                y: 100,
                opacity: 0,
                stagger: 0.02,
                duration: 1.2,
                ease: "power4.out",
                delay: 0.2
            });
        }
    }, { scope: heroRef });

    // Intro section cards
    const introCards = [
        {
            title: 'Data-Driven Strategy',
            description: 'Growth decisions backed by real-time analytics and performance data.',
            icon: BarChart3
        },
        {
            title: 'Multi-Channel Scaling',
            description: 'Expand across Amazon, Shopify, ads, and digital platforms seamlessly.',
            icon: Globe
        },
        {
            title: 'AI-Powered Systems',
            description: 'Automation and predictive intelligence to accelerate business growth.',
            icon: Brain
        }
    ];

    // Six Growth Systems - matching Content page style
    const growthSystems = [
        {
            title: 'Revenue Intelligence System',
            description: 'Track performance across all channels and identify hidden growth opportunities with advanced analytics.',
            icon: TrendingUp
        },
        {
            title: 'Profit Optimization System',
            description: 'Analyze margins, reduce costs, and increase profitability with data-driven insights.',
            icon: PieChart
        },
        {
            title: 'Customer Acquisition System',
            description: 'SEO, paid ads, and funnels designed to drive consistent targeted traffic.',
            icon: Users
        },
        {
            title: 'Conversion Optimization System',
            description: 'Landing pages, UX, and CRO strategies to maximize conversion rates.',
            icon: Target
        },
        {
            title: 'Retention & LTV System',
            description: 'Email automation, CRM flows, and repeat customer strategies for lifetime value.',
            icon: Repeat
        },
        {
            title: 'Automation & Scaling System',
            description: 'AI workflows and operational automation to scale efficiently without overhead.',
            icon: Zap
        }
    ];

    // Growth Mechanism - 4 step flow
    const growthMechanism = [
        {
            title: 'Attract',
            description: 'Traffic via SEO, paid advertising, and marketplace presence.',
            icon: Globe
        },
        {
            title: 'Convert',
            description: 'Optimized funnels and landing pages that turn visitors into customers.',
            icon: Target
        },
        {
            title: 'Optimize',
            description: 'Improve margins, pricing, and performance across all channels.',
            icon: TrendingUp
        },
        {
            title: 'Scale',
            description: 'Expand channels and automate systems for sustainable growth.',
            icon: Rocket
        }
    ];

    // Revenue Equation breakdown
    const revenueEquation = [
        {
            label: 'Traffic',
            description: 'SEO, ads, marketplaces',
            icon: Globe
        },
        {
            label: 'Conversion',
            description: 'UX, copywriting, design',
            icon: Target
        },
        {
            label: 'AOV',
            description: 'Upsells, bundles, pricing strategy',
            icon: TrendingUp
        }
    ];

    // Growth Insights & Resources (backlink friendly)
    const growthResources = [
        {
            title: 'eCommerce Growth Strategies',
            description: 'Scaling Shopify, Amazon, and multi-channel brands for maximum revenue.',
            link: '/blog/ecommerce-growth-strategies'
        },
        {
            title: 'Digital Marketing Systems',
            description: 'Paid ads, SEO, and growth frameworks for sustainable acquisition.',
            link: '/blog/digital-marketing-systems'
        },
        {
            title: 'Revenue Optimization Guides',
            description: 'Pricing, margins, and profitability strategies for business growth.',
            link: '/blog/revenue-optimization'
        },
        {
            title: 'AI in Business Growth',
            description: 'Automation and intelligent systems that scale operations.',
            link: '/blog/ai-business-growth'
        },
        {
            title: 'Scaling Case Studies',
            description: 'Real growth transformations and results from our clients.',
            link: '/blog/case-studies'
        }
    ];

    // Enhanced stats with descriptions
    const enhancedStats = [
        { value: '150+', label: 'Businesses Scaled', description: 'Across eCommerce, SaaS, and digital brands' },
        { value: '$50M+', label: 'Revenue Generated', description: 'Through multi-channel growth systems' },
        { value: '40%', label: 'Avg. Profit Increase', description: 'Via pricing and cost optimization' },
        { value: '3x', label: 'Avg. Growth Rate', description: 'Within 90–120 days of implementation' }
    ];

    // Services data
    const services = [
        { title: 'Revenue Optimization', description: 'Strategic pricing and cost analysis to maximize profit margins.', icon: TrendingUp },
        { title: 'Multi-Channel Scaling', description: 'Expand across Amazon, Shopify, eBay, and Walmart simultaneously.', icon: ShoppingCart },
        { title: 'AI Automation Systems', description: 'Deploy intelligent agents for operations, support, and growth.', icon: Zap },
        { title: 'Performance Analytics', description: 'Real-time dashboards tracking KPIs, profit, and growth metrics.', icon: LineChart },
        { title: 'Conversion Optimization', description: 'UX design and CRO strategies to maximize conversion rates.', icon: Target },
        { title: 'Growth Consulting', description: 'Strategic advisory for sustainable business scaling.', icon: Briefcase }
    ];

    // Process steps
    const processSteps = [
        { title: 'Audit', description: 'Deep analysis of current business performance and opportunities.' },
        { title: 'Strategy', description: 'Custom growth roadmap aligned with business goals.' },
        { title: 'Implementation', description: 'Deploy systems, automations, and optimizations.' },
        { title: 'Monitor', description: 'Continuous tracking and performance adjustments.' },
        { title: 'Scale', description: 'Expand successful systems for exponential growth.' }
    ];

    // Industries data
    const industries = [
        { title: 'eCommerce', description: 'DTC brands and marketplace sellers', icon: ShoppingBag },
        { title: 'SaaS', description: 'Software and subscription businesses', icon: Cpu },
        { title: 'Agencies', description: 'Marketing and service providers', icon: Briefcase },
        { title: 'Retail', description: 'Physical and hybrid retail models', icon: Store },
        { title: 'B2B', description: 'Business-to-business services', icon: Building2 },
        { title: 'Startups', description: 'Early-stage high-growth companies', icon: Award }
    ];

    // Case studies
    const caseStudies = [
        {
            title: 'E-commerce Scaling',
            problem: 'Low traffic and poor conversion rates',
            solution: 'SEO + paid ads + CRO implementation',
            result: '2.5x revenue growth in 60 days'
        },
        {
            title: 'SaaS Growth',
            problem: 'High churn, low user acquisition',
            solution: 'Funnel optimization + retention systems',
            result: '40% MRR increase in 4 months'
        },
        {
            title: 'Agency Scaling',
            problem: 'Inconsistent lead generation',
            solution: 'Automated acquisition funnel',
            result: 'Consistent 50+ qualified leads/month'
        }
    ];

    // Trust tags for hero
    const trustTags = ['Revenue Optimization', 'KPI Tracking', 'AI Automation', 'Scaling Systems', 'Data Analytics'];

    const whyChooseUs = [
        'Data-driven growth decisions',
        'Multi-platform expertise (Amazon, eBay, Shopify)',
        'Scalable architecture from day one',
        'Automation-first approach',
        'Real-time performance tracking',
    ];

    // Advanced Growth Systems data
    const advancedGrowthSystems = [
        {
            title: 'Customer Acquisition Systems',
            description: 'Paid ads (Google, Meta, TikTok), SEO traffic generation, and funnel optimization for consistent lead flow.',
            icon: Users
        },
        {
            title: 'Conversion Rate Optimization',
            description: 'Landing page optimization, A/B testing frameworks, and user behavior tracking for maximum conversions.',
            icon: Target
        },
        {
            title: 'Retention & LTV Systems',
            description: 'Email marketing automation, CRM workflows, and customer lifecycle optimization for long-term value.',
            icon: Repeat
        },
        {
            title: 'Sales Funnel Engineering',
            description: 'Multi-step funnel design, lead generation systems, and automated follow-ups that convert.',
            icon: Filter
        },
        {
            title: 'Data & Analytics Infrastructure',
            description: 'Google Analytics tracking, KPI dashboards, and performance insights for data-driven decisions.',
            icon: BarChart3
        },
        {
            title: 'AI Business Automation',
            description: 'AI agents for operations, workflow automation, and predictive analytics systems.',
            icon: Brain
        }
    ];

    // The Growth Mechanism steps
    const growthMechanismSteps = [
        {
            title: 'Traffic Acquisition',
            description: 'SEO, ads, and content bring targeted users to your business through multiple channels.',
            icon: Globe
        },
        {
            title: 'Engagement',
            description: 'High-converting UX and messaging retain attention and build trust with visitors.',
            icon: Users
        },
        {
            title: 'Conversion',
            description: 'Optimized funnels turn visitors into customers with precision targeting.',
            icon: Target
        },
        {
            title: 'Monetization',
            description: 'Pricing, upsells, and offers maximize revenue per customer.',
            icon: TrendingUp
        },
        {
            title: 'Expansion',
            description: 'Scaling across platforms and markets for sustainable long-term growth.',
            icon: Rocket
        }
    ];

    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            <Navigation />

            {/* Hero Section */}
            <AnimatedSectionWrapper ref={heroRef} className="pt-64 pb-32 hero-antigravity">
                <div className="absolute inset-0 bg-grid-pattern animate-grid-move opacity-20" />
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <div className="absolute top-1/4 right-1/4 w-[800px] h-[800px] bg-primary rounded-full blur-[160px] animate-float" />
                    <div className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] bg-accent rounded-full blur-[140px] animate-pulse" />
                </div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-5xl mx-auto text-center">
                        <Reveal direction="down">
                            <div className="inline-flex items-center gap-3 px-6 py-3 bg-primary/10 rounded-full text-primary font-bold text-sm mb-12 border border-primary/20 backdrop-blur-md uppercase tracking-widest">
                                Growth Intelligence
                            </div>
                        </Reveal>
                        <h1 ref={headlineRef} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-black mb-8 text-foreground tracking-tighter leading-[0.9] max-w-5xl mx-auto text-center">
                            <span className="block">Business Systems</span>
                            <span className="block">Built to Scale</span>
                            <span className="block">Revenue</span>
                        </h1>
                        <Reveal delay={0.4}>
                            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-8 leading-relaxed font-medium">
                                We design and deploy data-driven growth systems that optimize revenue, increase profit, and scale your business efficiently.
                            </p>
                        </Reveal>
                        <Reveal delay={0.6}>
                            <div className="flex flex-wrap justify-center gap-3 mb-12">
                                {trustTags.map((tag) => (
                                    <span key={tag} className="px-4 py-2 bg-primary/5 border border-primary/20 rounded-full text-primary text-sm font-semibold">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </Reveal>
                        <Reveal delay={0.8}>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                                <Magnetic strength={0.25}>
                                    <Button
                                        size="lg"
                                        className="rounded-full px-12 py-8 text-xl font-black shadow-glow bg-primary text-black uppercase tracking-widest italic"
                                        onClick={() => navigate('/contact')}
                                    >
                                        Scale My Business
                                    </Button>
                                </Magnetic>
                                <Magnetic strength={0.25}>
                                    <Button
                                        size="lg"
                                        variant="outline"
                                        className="rounded-full px-12 py-8 text-xl font-black border-2 border-primary text-primary hover:bg-primary/10 uppercase tracking-widest italic"
                                        onClick={() => navigate('/projects#business-growth-projects')}
                                    >
                                        Get Growth Audit
                                    </Button>
                                </Magnetic>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </AnimatedSectionWrapper>

            {/* Services Section */}
            <section className="py-16 md:py-32 bg-background/80 backdrop-blur-sm relative overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16 md:mb-28 max-w-4xl mx-auto">
                        <Reveal direction="down">
                            <div className="inline-flex items-center gap-2 md:gap-3 px-4 md:px-6 py-2 md:py-3 bg-primary/10 rounded-full text-primary font-bold text-xs md:text-sm mb-6 md:mb-8 border border-primary/20 backdrop-blur-md uppercase tracking-widest">
                                Growth Intelligence Engine
                            </div>
                        </Reveal>
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-black mb-6 md:mb-10 text-foreground tracking-tighter leading-none uppercase italic">
                            Systems Designed to <span className="text-primary not-italic">Scale Revenue</span>
                        </h2>
                        <Reveal delay={0.25}>
                            <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground font-medium italic font-serif max-w-3xl mx-auto">
                                Optimize profit, and build long-term business dominance through data-driven growth architecture.
                            </p>
                        </Reveal>
                    </div>

                    <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
                        {services.map((service, index) => (
                            <Reveal key={index} delay={index * 0.1} direction="up">
                                <TiltCard className="h-full">
                                    <div className="group h-full bg-card/40 backdrop-blur-xl p-6 md:p-8 lg:p-12 rounded-[2rem] md:rounded-[3rem] lg:rounded-[3.5rem] border border-border/50 hover:border-primary/40 transition-all duration-500 hover:shadow-2xl cursor-pointer relative overflow-hidden">
                                        <div className="absolute top-0 right-0 w-20 md:w-24 lg:w-32 h-20 md:h-24 lg:h-32 bg-primary/5 rounded-bl-[2rem] md:rounded-bl-[3rem] lg:rounded-bl-[5rem] group-hover:bg-primary/10 transition-colors" />
                                        <Magnetic strength={0.2}>
                                            <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-2xl md:rounded-3xl bg-primary flex items-center justify-center mb-6 md:mb-8 lg:mb-12 shadow-glow group-hover:scale-110 group-hover:-rotate-[15deg] transition-all duration-500">
                                                <service.icon className="text-black" size={24} />
                                            </div>
                                        </Magnetic>
                                        <h3 className="text-xl md:text-2xl lg:text-3xl font-black text-foreground mb-4 md:mb-6 group-hover:text-primary transition-colors tracking-tight leading-none italic font-serif uppercase">{service.title}</h3>
                                        <p className="text-muted-foreground text-sm md:text-base lg:text-xl leading-relaxed font-medium">{service.description}</p>
                                    </div>
                                </TiltCard>
                            </Reveal>
                        ))}
                    </div>

                    {/* CTA Under Services Grid */}
                    <Reveal delay={0.6} direction="up">
                        <div className="mt-16 md:mt-24 text-center">
                            <p className="text-xl md:text-2xl lg:text-3xl text-foreground font-medium italic mb-8 max-w-3xl mx-auto">
                                Want to implement this system in your business?
                            </p>
                            <Magnetic strength={0.3}>
                                <Button
                                    size="lg"
                                    className="rounded-full px-12 md:px-20 py-6 md:py-10 text-xl md:text-2xl font-black bg-primary text-black hover:bg-primary shadow-glow uppercase tracking-widest italic"
                                    onClick={() => window.open('https://calendly.com/nexagrowthsolution/30min', '_blank')}
                                >
                                    Scale My Business
                                </Button>
                            </Magnetic>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* Advanced Growth Systems Section */}
            <section className="py-16 md:py-32 bg-zinc-950/30 backdrop-blur-sm relative overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16 md:mb-28 max-w-4xl mx-auto">
                        <Reveal direction="down">
                            <div className="inline-flex items-center gap-2 md:gap-3 px-4 md:px-6 py-2 md:py-3 bg-primary/10 rounded-full text-primary font-bold text-xs md:text-sm mb-6 md:mb-8 border border-primary/20 backdrop-blur-md uppercase tracking-widest">
                                Advanced Growth Architecture
                            </div>
                        </Reveal>
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-black mb-6 md:mb-10 text-foreground tracking-tighter leading-none uppercase italic">
                            Advanced <span className="text-primary not-italic">Growth Systems</span>
                        </h2>
                        <Reveal delay={0.25}>
                            <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground font-medium italic font-serif max-w-3xl mx-auto">
                                Integrated systems designed to scale revenue, optimize operations, and maximize profitability for sustainable business dominance.
                            </p>
                        </Reveal>
                    </div>

                    <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
                        {advancedGrowthSystems.map((system, index) => (
                            <Reveal key={index} delay={index * 0.1} direction="up">
                                <TiltCard className="h-full">
                                    <div className="group h-full bg-card/40 backdrop-blur-xl p-6 md:p-8 lg:p-12 rounded-[2rem] md:rounded-[3rem] lg:rounded-[3.5rem] border border-border/50 hover:border-primary/40 transition-all duration-500 hover:shadow-2xl cursor-pointer relative overflow-hidden">
                                        <div className="absolute top-0 right-0 w-20 md:w-24 lg:w-32 h-20 md:h-24 lg:h-32 bg-primary/5 rounded-bl-[2rem] md:rounded-bl-[3rem] lg:rounded-bl-[5rem] group-hover:bg-primary/10 transition-colors" />
                                        <Magnetic strength={0.2}>
                                            <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-2xl md:rounded-3xl bg-primary flex items-center justify-center mb-6 md:mb-8 lg:mb-12 shadow-glow group-hover:scale-110 group-hover:-rotate-[15deg] transition-all duration-500">
                                                <system.icon className="text-black" size={24} />
                                            </div>
                                        </Magnetic>
                                        <h3 className="text-xl md:text-2xl lg:text-3xl font-black text-foreground mb-4 md:mb-6 group-hover:text-primary transition-colors tracking-tight leading-none italic font-serif uppercase">{system.title}</h3>
                                        <p className="text-muted-foreground text-sm md:text-base lg:text-xl leading-relaxed font-medium">{system.description}</p>
                                    </div>
                                </TiltCard>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-24 md:py-48 bg-zinc-950/80 backdrop-blur-md relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent shadow-glow" />

                <div className="container mx-auto px-6">
                    <div className="text-center mb-20 md:mb-32 max-w-4xl mx-auto">
                        <Reveal direction="down">
                            <h2 className="text-4xl md:text-6xl lg:text-8xl font-display font-black mb-6 md:mb-10 text-white tracking-tighter leading-none uppercase italic text-center">
                                Growth Execution <span className="text-primary not-italic">Framework</span>
                            </h2>
                        </Reveal>
                        <Reveal delay={0.25}>
                            <p className="text-xl md:text-2xl lg:text-3xl text-white/60 font-medium italic font-serif leading-relaxed">
                                A proven methodology for sustainable business scaling.
                            </p>
                        </Reveal>
                    </div>

                    <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8">
                        {processSteps.map((step, index) => (
                            <Reveal key={index} delay={index * 0.1} direction="up">
                                <div className="group bg-white/5 backdrop-blur-2xl rounded-[2rem] md:rounded-[3rem] p-6 md:p-8 lg:p-12 border border-white/10 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 md:hover:-translate-y-4 hover:shadow-2xl h-full relative overflow-hidden">
                                    <div className="text-6xl md:text-8xl lg:text-9xl font-display font-black text-primary/5 absolute -top-3 md:-top-5 -right-3 md:-right-5 group-hover:text-primary/10 transition-all duration-700">
                                        {index + 1}
                                    </div>
                                    <div className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-xl md:rounded-2xl bg-primary/20 flex items-center justify-center mb-6 md:mb-8 lg:mb-12 group-hover:bg-primary transition-all duration-500 shadow-glow">
                                        <span className="text-2xl md:text-3xl lg:text-4xl font-black text-primary group-hover:text-black italic">{index + 1}</span>
                                    </div>
                                    <h3 className="text-lg md:text-xl lg:text-2xl font-black text-white mb-4 md:mb-6 tracking-tight leading-none italic uppercase">{step.title}</h3>
                                    <p className="text-white/60 text-sm md:text-base lg:text-xl leading-relaxed font-medium">{step.description}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* The Growth Mechanism Section */}
            <section className="py-16 md:py-32 bg-zinc-950/30 backdrop-blur-sm relative overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16 md:mb-28 max-w-4xl mx-auto">
                        <Reveal direction="down">
                            <div className="inline-flex items-center gap-2 md:gap-3 px-4 md:px-6 py-2 md:py-3 bg-primary/10 rounded-full text-primary font-bold text-xs md:text-sm mb-6 md:mb-8 border border-primary/20 backdrop-blur-md uppercase tracking-widest">
                                Digital Marketing Growth Systems
                            </div>
                        </Reveal>
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-black mb-6 md:mb-10 text-foreground tracking-tighter leading-none uppercase italic">
                            The Growth <span className="text-primary not-italic">Mechanism</span>
                        </h2>
                        <Reveal delay={0.25}>
                            <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground font-medium italic font-serif max-w-3xl mx-auto">
                                A proven 5-step framework for business growth agencies to scale revenue systematically.
                            </p>
                        </Reveal>
                    </div>

                    <div className="max-w-6xl mx-auto">
                        <div className="grid md:grid-cols-5 gap-4 md:gap-6 lg:gap-8">
                            {growthMechanismSteps.map((step, index) => (
                                <Reveal key={index} delay={index * 0.1} direction="up">
                                    <div className="group relative">
                                        {/* Connector line */}
                                        {index < growthMechanismSteps.length - 1 && (
                                            <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-px bg-gradient-to-r from-primary/50 to-primary/10" />
                                        )}
                                        <div className="bg-card/40 backdrop-blur-xl p-6 md:p-8 rounded-[2rem] md:rounded-[3rem] border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl h-full relative overflow-hidden">
                                            <div className="absolute top-0 right-0 w-16 md:w-20 h-16 md:h-20 bg-primary/5 rounded-bl-[2rem] md:rounded-bl-[3rem] group-hover:bg-primary/10 transition-colors" />
                                            <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-primary flex items-center justify-center mb-6 md:mb-8 shadow-glow">
                                                <step.icon className="text-black" size={24} />
                                            </div>
                                            <div className="text-4xl md:text-5xl font-display font-black text-primary/20 mb-2 italic">{index + 1}</div>
                                            <h3 className="text-lg md:text-xl font-black text-foreground mb-3 tracking-tight leading-none italic uppercase">{step.title}</h3>
                                            <p className="text-muted-foreground text-sm md:text-base leading-relaxed">{step.description}</p>
                                        </div>
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Us Section */}
            <section className="py-16 md:py-32 bg-background/80 backdrop-blur-sm relative overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 md:gap-20 lg:gap-32 items-center">
                        <Reveal direction="left">
                            <div className="relative">
                                <div className="absolute -inset-5 md:-inset-10 bg-primary/10 rounded-full blur-[60px] md:blur-[100px]" />
                                <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-black mb-8 md:mb-12 text-foreground tracking-tighter leading-[0.9] uppercase italic">
                                    Why Nexa <br /><span className="text-primary not-italic">Growth Systems?</span>
                                </h2>
                                <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground font-medium leading-relaxed italic mb-8 md:mb-10 font-serif">
                                    We don't just consult—we build and deploy the systems that drive consistent revenue growth.
                                </p>
                            </div>
                        </Reveal>
                        <div className="space-y-4 md:space-y-6 lg:space-y-8">
                            {whyChooseUs.map((item, index) => (
                                <Reveal key={index} delay={index * 0.1} direction="right">
                                    <div className="flex items-center gap-4 md:gap-6 lg:gap-8 p-4 md:p-6 lg:p-10 bg-card/40 backdrop-blur-xl rounded-[1.5rem] md:rounded-[2rem] lg:rounded-[2.5rem] border border-border/50 hover:border-primary/50 transition-all duration-500 group cursor-default relative overflow-hidden">
                                        <div className="absolute top-0 right-0 w-16 md:w-20 lg:w-24 h-16 md:h-20 lg:h-24 bg-primary/5 rounded-bl-[1.5rem] md:rounded-bl-[2rem] lg:rounded-bl-[2.5rem] group-hover:bg-primary/10 transition-colors" />
                                        <div className="p-2 md:p-3 lg:p-4 bg-primary/20 rounded-full text-primary group-hover:bg-primary group-hover:text-black transition-all duration-500 shadow-glow">
                                            <CheckCircle className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 flex-shrink-0" />
                                        </div>
                                        <span className="text-lg md:text-2xl lg:text-3xl text-foreground font-black tracking-tight italic uppercase">{item}</span>
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Growth Insights & Resources Section */}
            <section className="py-16 md:py-32 bg-zinc-950/50 backdrop-blur-sm relative overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16 md:mb-28 max-w-4xl mx-auto">
                        <Reveal direction="down">
                            <div className="inline-flex items-center gap-2 md:gap-3 px-4 md:px-6 py-2 md:py-3 bg-primary/10 rounded-full text-primary font-bold text-xs md:text-sm mb-6 md:mb-8 border border-primary/20 backdrop-blur-md uppercase tracking-widest">
                                SEO Content & Backlinks
                            </div>
                        </Reveal>
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-black mb-6 md:mb-10 text-foreground tracking-tighter leading-none uppercase italic">
                            Growth <span className="text-primary not-italic">Insights</span> & Resources
                        </h2>
                        <Reveal delay={0.25}>
                            <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground font-medium italic font-serif max-w-3xl mx-auto">
                                Strategic content designed to rank, educate, and attract high-value traffic to your business.
                            </p>
                        </Reveal>
                    </div>

                    <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {growthResources.map((resource, index) => (
                            <Reveal key={index} delay={index * 0.1} direction="up">
                                <div 
                                    onClick={() => navigate(resource.link)}
                                    className="group h-full bg-card/40 backdrop-blur-xl p-6 md:p-8 rounded-[2rem] md:rounded-[3rem] border border-border/50 hover:border-primary/40 transition-all duration-500 hover:shadow-2xl cursor-pointer relative overflow-hidden"
                                >
                                    <div className="absolute top-0 right-0 w-20 md:w-24 h-20 md:h-24 bg-primary/5 rounded-bl-[2rem] md:rounded-bl-[3rem] group-hover:bg-primary/10 transition-colors" />
                                    <div className="flex items-center justify-between mb-4">
                                        <FileText className="w-8 h-8 text-primary" />
                                        <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                                    </div>
                                    <h3 className="text-lg md:text-xl font-black text-foreground mb-3 group-hover:text-primary transition-colors tracking-tight leading-none italic uppercase">{resource.title}</h3>
                                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed">{resource.description}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Revenue Optimization Model Section */}
            <section className="py-16 md:py-32 bg-background/80 backdrop-blur-sm relative overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16 md:mb-28 max-w-4xl mx-auto">
                        <Reveal direction="down">
                            <div className="inline-flex items-center gap-2 md:gap-3 px-4 md:px-6 py-2 md:py-3 bg-primary/10 rounded-full text-primary font-bold text-xs md:text-sm mb-6 md:mb-8 border border-primary/20 backdrop-blur-md uppercase tracking-widest">
                                Revenue Optimization Strategies
                            </div>
                        </Reveal>
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-black mb-6 md:mb-10 text-foreground tracking-tighter leading-none uppercase italic">
                            Revenue <span className="text-primary not-italic">Optimization</span> Model
                        </h2>
                        <Reveal delay={0.25}>
                            <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground font-medium italic font-serif max-w-3xl mx-auto">
                                The fundamental equation driving sustainable business growth.
                            </p>
                        </Reveal>
                    </div>

                    <div className="max-w-5xl mx-auto">
                        <Reveal direction="up">
                            <div className="bg-card/40 backdrop-blur-xl p-8 md:p-12 lg:p-16 rounded-[2rem] md:rounded-[3rem] border border-border/50 mb-12">
                                <div className="text-center mb-8">
                                    <div className="text-3xl md:text-4xl lg:text-5xl font-display font-black text-foreground tracking-tight italic">
                                        Revenue = <span className="text-primary">Traffic</span> × <span className="text-primary">Conversion</span> × <span className="text-primary">AOV</span>
                                    </div>
                                </div>
                            </div>
                        </Reveal>

                        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
                            <Reveal delay={0.1} direction="up">
                                <div className="bg-zinc-950/50 backdrop-blur-xl p-6 md:p-8 rounded-[2rem] border border-border/50 hover:border-primary/50 transition-all duration-500">
                                    <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-6">
                                        <Globe className="w-6 h-6 text-primary" />
                                    </div>
                                    <h3 className="text-xl md:text-2xl font-black text-foreground mb-4 italic uppercase">Traffic</h3>
                                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-4">SEO, paid advertising, and marketplace presence bring qualified visitors to your business.</p>
                                    <ul className="space-y-2 text-sm text-muted-foreground">
                                        <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-primary" /> Organic search optimization</li>
                                        <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-primary" /> Paid ad campaigns</li>
                                        <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-primary" /> Multi-channel presence</li>
                                    </ul>
                                </div>
                            </Reveal>

                            <Reveal delay={0.2} direction="up">
                                <div className="bg-zinc-950/50 backdrop-blur-xl p-6 md:p-8 rounded-[2rem] border border-border/50 hover:border-primary/50 transition-all duration-500">
                                    <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-6">
                                        <Target className="w-6 h-6 text-primary" />
                                    </div>
                                    <h3 className="text-xl md:text-2xl font-black text-foreground mb-4 italic uppercase">Conversion</h3>
                                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-4">UX design, copywriting, and funnel optimization turn visitors into paying customers.</p>
                                    <ul className="space-y-2 text-sm text-muted-foreground">
                                        <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-primary" /> Landing page optimization</li>
                                        <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-primary" /> A/B testing frameworks</li>
                                        <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-primary" /> Persuasive copywriting</li>
                                    </ul>
                                </div>
                            </Reveal>

                            <Reveal delay={0.3} direction="up">
                                <div className="bg-zinc-950/50 backdrop-blur-xl p-6 md:p-8 rounded-[2rem] border border-border/50 hover:border-primary/50 transition-all duration-500">
                                    <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-6">
                                        <TrendingUp className="w-6 h-6 text-primary" />
                                    </div>
                                    <h3 className="text-xl md:text-2xl font-black text-foreground mb-4 italic uppercase">AOV</h3>
                                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-4">Upsells, bundles, and strategic pricing maximize revenue per customer transaction.</p>
                                    <ul className="space-y-2 text-sm text-muted-foreground">
                                        <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-primary" /> Strategic upselling</li>
                                        <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-primary" /> Product bundling</li>
                                        <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-primary" /> Dynamic pricing</li>
                                    </ul>
                                </div>
                            </Reveal>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section - Enhanced with Descriptions */}
            <section className="py-16 md:py-24 bg-zinc-950/50 backdrop-blur-md relative overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                        {enhancedStats.map((stat, index) => (
                            <Reveal key={index} delay={index * 0.1} direction="up">
                                <div className="text-center">
                                    <div className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-primary mb-2 italic">
                                        {stat.value}
                                    </div>
                                    <p className="text-white font-bold text-sm md:text-base uppercase tracking-wider mb-2">
                                        {stat.label}
                                    </p>
                                    <p className="text-white/50 text-xs md:text-sm font-medium">
                                        {stat.description}
                                    </p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industries We Scale Section */}
            <section className="py-16 md:py-32 bg-zinc-950/30 backdrop-blur-sm relative overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16 md:mb-28 max-w-4xl mx-auto">
                        <Reveal direction="down">
                            <div className="inline-flex items-center gap-2 md:gap-3 px-4 md:px-6 py-2 md:py-3 bg-primary/10 rounded-full text-primary font-bold text-xs md:text-sm mb-6 md:mb-8 border border-primary/20 backdrop-blur-md uppercase tracking-widest">
                                Industries We Serve
                            </div>
                        </Reveal>
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-black mb-6 md:mb-10 text-foreground tracking-tighter leading-none uppercase italic">
                            Who We <span className="text-primary not-italic">Scale</span>
                        </h2>
                        <Reveal delay={0.25}>
                            <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground font-medium italic font-serif max-w-3xl mx-auto">
                                Specialized eCommerce growth services and digital marketing systems tailored for every business model.
                            </p>
                        </Reveal>
                    </div>

                    <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {industries.map((industry, index) => (
                            <Reveal key={index} delay={index * 0.1} direction="up">
                                <TiltCard className="h-full">
                                    <div className="group h-full bg-card/40 backdrop-blur-xl p-6 md:p-8 rounded-[2rem] md:rounded-[3rem] border border-border/50 hover:border-primary/40 transition-all duration-500 hover:shadow-2xl cursor-pointer relative overflow-hidden">
                                        <div className="absolute top-0 right-0 w-16 md:w-20 h-16 md:h-20 bg-primary/5 rounded-bl-[2rem] md:rounded-bl-[3rem] group-hover:bg-primary/10 transition-colors" />
                                        <Magnetic strength={0.2}>
                                            <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-primary flex items-center justify-center mb-6 shadow-glow group-hover:scale-110 transition-all duration-500">
                                                <industry.icon className="text-black" size={24} />
                                            </div>
                                        </Magnetic>
                                        <h3 className="text-xl md:text-2xl font-black text-foreground mb-3 group-hover:text-primary transition-colors tracking-tight leading-none italic uppercase">{industry.title}</h3>
                                        <p className="text-muted-foreground text-sm md:text-base leading-relaxed">{industry.description}</p>
                                    </div>
                                </TiltCard>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Growth in Action - Case Studies Section */}
            <section className="py-16 md:py-32 bg-zinc-950/50 backdrop-blur-sm relative overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16 md:mb-28 max-w-4xl mx-auto">
                        <Reveal direction="down">
                            <div className="inline-flex items-center gap-2 md:gap-3 px-4 md:px-6 py-2 md:py-3 bg-primary/10 rounded-full text-primary font-bold text-xs md:text-sm mb-6 md:mb-8 border border-primary/20 backdrop-blur-md uppercase tracking-widest">
                                Real Results
                            </div>
                        </Reveal>
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-black mb-6 md:mb-10 text-foreground tracking-tighter leading-none uppercase italic">
                            Growth <span className="text-primary not-italic">In Action</span>
                        </h2>
                        <Reveal delay={0.25}>
                            <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground font-medium italic font-serif max-w-3xl mx-auto">
                                Real business transformations powered by our AI automation and conversion optimization systems.
                            </p>
                        </Reveal>
                    </div>

                    <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 md:gap-8">
                        {caseStudies.map((study, index) => (
                            <Reveal key={index} delay={index * 0.1} direction="up">
                                <div className="group h-full bg-card/40 backdrop-blur-xl p-6 md:p-8 rounded-[2rem] md:rounded-[3rem] border border-border/50 hover:border-primary/40 transition-all duration-500 hover:shadow-2xl relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-20 md:w-24 h-20 md:h-24 bg-primary/5 rounded-bl-[2rem] md:rounded-bl-[3rem] group-hover:bg-primary/10 transition-colors" />
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                                            <Building2 className="w-5 h-5 text-primary" />
                                        </div>
                                        <h3 className="text-lg md:text-xl font-black text-foreground italic uppercase">{study.title}</h3>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="flex gap-3">
                                            <span className="text-primary font-bold text-sm uppercase w-20">Problem:</span>
                                            <p className="text-muted-foreground text-sm">{study.problem}</p>
                                        </div>
                                        <div className="flex gap-3">
                                            <span className="text-primary font-bold text-sm uppercase w-20">Solution:</span>
                                            <p className="text-muted-foreground text-sm">{study.solution}</p>
                                        </div>
                                        <div className="flex gap-3 pt-3 border-t border-border/50">
                                            <span className="text-primary font-bold text-sm uppercase w-20">Result:</span>
                                            <p className="text-foreground font-bold text-sm">{study.result}</p>
                                        </div>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <AnimatedSectionWrapper className="py-24 md:py-48 bg-zinc-950/80 backdrop-blur-md">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent shadow-glow" />
                <div className="container mx-auto px-6 text-center relative z-10">
                    <Reveal direction="down">
                        <h2 className="text-4xl md:text-6xl lg:text-8xl font-display font-black mb-8 md:mb-12 text-white tracking-tighter leading-none uppercase italic text-center">
                            Ready to <span className="text-primary not-italic">Scale</span> Your Business?
                        </h2>
                    </Reveal>
                    <Reveal delay={0.25}>
                        <p className="text-xl md:text-3xl lg:text-4xl text-white/70 mb-12 md:mb-16 max-w-5xl mx-auto leading-relaxed font-serif italic">
                            Let's build a data-driven growth system tailored to your business.
                        </p>
                    </Reveal>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-12">
                        <Reveal delay={0.4} direction="up">
                            <Magnetic strength={0.3}>
                                <Button
                                    size="lg"
                                    className="rounded-full px-16 md:px-20 py-8 md:py-12 text-2xl md:text-3xl font-black bg-primary text-black hover:bg-primary transition-all duration-500 shadow-glow uppercase tracking-tighter italic"
                                    onClick={() => window.open('https://calendly.com/nexagrowthsolution/30min', '_blank')}
                                >
                                    Book Free Strategy Call
                                </Button>
                            </Magnetic>
                        </Reveal>
                        <Reveal delay={0.5} direction="up">
                            <Magnetic strength={0.2}>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="rounded-full px-12 md:px-16 py-8 md:py-12 text-xl md:text-2xl font-black border-2 border-primary text-primary hover:bg-primary/10 uppercase tracking-widest italic flex items-center gap-4"
                                    onClick={() => window.open('https://wa.me/923175533762?text=Hi%20Nexa%20Growth,%20I\'m%20interested%20in%20business%20growth%20solutions', '_blank')}
                                >
                                    <MessageCircle className="w-6 h-6" />
                                    Get Growth Audit
                                </Button>
                            </Magnetic>
                        </Reveal>
                    </div>
                </div>
            </AnimatedSectionWrapper>

            {/* FAQ Section for SEO */}
            <section className="py-16 md:py-24 bg-background/50 backdrop-blur-sm relative overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <Reveal direction="down">
                            <h2 className="text-3xl md:text-5xl font-display font-black mb-12 md:mb-16 text-foreground tracking-tighter leading-none uppercase italic text-center">
                                Frequently Asked <span className="text-primary not-italic">Questions</span>
                            </h2>
                        </Reveal>
                        <div className="space-y-6">
                            {[
                                {
                                    question: "What makes Nexa Growth Systems different from traditional business consultants?",
                                    answer: "We combine financial intelligence, marketing analytics, and operational automation into integrated growth systems. Unlike traditional consultants who offer advice, we build and deploy the actual systems that drive revenue."
                                },
                                {
                                    question: "How quickly can I expect to see results from your growth systems?",
                                    answer: "Most clients see measurable improvements within 30-60 days. Our audit phase identifies quick wins, while our automation systems build long-term compounding growth."
                                },
                                {
                                    question: "Do you work with startups or established businesses?",
                                    answer: "Both. For startups, we build scalable foundations. For established businesses, we optimize existing systems and unlock hidden revenue potential."
                                }
                            ].map((faq, index) => (
                                <Reveal key={index} delay={index * 0.1} direction="up">
                                    <div className="bg-card/40 backdrop-blur-xl p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] border border-border/50">
                                        <h3 className="text-lg md:text-xl font-bold text-foreground mb-3 italic">{faq.question}</h3>
                                        <p className="text-muted-foreground text-base md:text-lg leading-relaxed">{faq.answer}</p>
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default BusinessGrowth;
