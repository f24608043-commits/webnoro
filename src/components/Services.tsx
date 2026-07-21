import { useState } from 'react';
import { Monitor, Code, Smartphone, Brain, Gamepad2, Cloud, Shield, Search, Share2, Target, PenTool, Paintbrush, Video, Wand2, Mic, Package } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Reveal } from './animations/Reveal';
import { TiltCard } from './animations/TiltCard';
const softwareServices = [{
  icon: Monitor,
  title: 'Web Development',
  description: 'Custom websites, e-commerce stores, and CMS solutions built with modern technologies.',
  services: ['Custom Websites', 'E-commerce Stores', 'CMS Development', 'Landing Pages', 'UI/UX Prototyping'],
  tools: 'React, Next.js, Vue.js, Node.js, WordPress, Shopify, Figma'
}, {
  icon: Smartphone,
  title: 'Mobile App Development',
  description: 'Native and cross-platform mobile applications for Android and iOS.',
  services: ['Android Apps', 'iOS Apps', 'Cross-Platform Apps', 'Enterprise Software', 'CRM/ERP Systems'],
  tools: 'Flutter, React Native, Swift, Kotlin, Firebase, Supabase'
}, {
  icon: Brain,
  title: 'AI / ML Development',
  description: 'Intelligent solutions powered by artificial intelligence and machine learning.',
  services: ['AI Chatbots', 'Recommendation Systems', 'Predictive Analytics', 'Image Recognition', 'NLP Projects'],
  tools: 'Python, TensorFlow, PyTorch, OpenAI APIs, HuggingFace'
}, {
  icon: Gamepad2,
  title: 'Game Development',
  description: '2D/3D games and immersive AR/VR experiences for multiple platforms.',
  services: ['2D/3D Games', 'Mobile Games', 'AR/VR Experiences', 'Game Design'],
  tools: 'Unity, Unreal Engine, Blender, C#, C++'
}, {
  icon: Cloud,
  title: 'Cloud & DevOps',
  description: 'Scalable cloud infrastructure and automated deployment pipelines.',
  services: ['Server Deployment', 'CI/CD Pipelines', 'Cloud Architecture', 'Monitoring & Optimization'],
  tools: 'AWS, Azure, Docker, Kubernetes, Jenkins, Terraform'
}, {
  icon: Shield,
  title: 'Cybersecurity',
  description: 'Comprehensive security solutions to protect your digital assets.',
  services: ['Penetration Testing', 'Website Security', 'Network Security', 'Vulnerability Assessments'],
  tools: 'Kali Linux, Metasploit, Burp Suite, Nmap, Wireshark'
}];
const marketingServices = [{
  icon: Search,
  title: 'SEO Services',
  description: 'Boost your visibility with comprehensive search engine optimization.',
  services: ['On-page SEO', 'Off-page SEO', 'Technical SEO', 'Keyword Research', 'Local SEO', 'Link Building'],
  tools: 'Ahrefs, SEMrush, Google Analytics, Moz, Screaming Frog'
}, {
  icon: Share2,
  title: 'Social Media Marketing',
  description: 'Engage your audience across all major social platforms.',
  services: ['Facebook/Instagram Marketing', 'TikTok Marketing', 'LinkedIn Marketing', 'YouTube Promotions', 'Content Planning'],
  tools: 'Meta Business Suite, Buffer, Hootsuite, Canva, Later'
}, {
  icon: Target,
  title: 'Paid Ads & PPC',
  description: 'Performance-driven advertising campaigns that deliver results.',
  services: ['Google Ads', 'Meta Ads (FB/IG)', 'YouTube Ads', 'TikTok Ads', 'Retargeting Campaigns'],
  tools: 'Google Ads Manager, Meta Ads Manager, Google Tag Manager'
}, {
  icon: PenTool,
  title: 'Content Creation',
  description: 'Compelling content that converts and engages your audience.',
  services: ['Website Content', 'Blog Writing', 'Captions & Posts', 'Product Descriptions', 'Ad Copywriting'],
  tools: 'ChatGPT, Notion, Grammarly, SurferSEO, Jasper'
}, {
  icon: Paintbrush,
  title: 'Branding & Design',
  description: 'Create a memorable brand identity that stands out.',
  services: ['Logo Design', 'Brand Identity', 'UI/UX Design', 'Business Cards', 'Social Media Posts', 'Packaging Design'],
  tools: 'Adobe Photoshop, Illustrator, Figma, Canva, Adobe XD'
}];
const videoServices = [{
  icon: Video,
  title: 'Professional Video Editing',
  description: 'High-quality video editing for all formats and platforms.',
  services: ['Long Form Videos', 'Short Form (Reels/TikTok)', 'Corporate Videos', 'Product Videos', 'Cinematic Videos'],
  tools: 'Premiere Pro, Final Cut Pro, DaVinci Resolve, After Effects'
}, {
  icon: Wand2,
  title: 'Motion Graphics & Animation',
  description: '2D/3D animations that bring your ideas to life.',
  services: ['Logo Animation', 'Motion Posters', 'Explainer Videos', '2D/3D Product Animations'],
  tools: 'After Effects, Blender, Cinema4D, Adobe Animate, Maya'
}, {
  icon: Brain,
  title: 'AI Video Creation',
  description: 'Cutting-edge AI-powered video generation and animation.',
  services: ['AI Avatar Videos', 'AI Voiceover Videos', 'Script-to-Video', 'AI Character Animation', 'AI Lip Syncing'],
  tools: 'Runway ML, Synthesia, Pika Labs, HeyGen, Kaiber, DeepMotion'
}, {
  icon: Target,
  title: 'Video Advertising',
  description: 'High-converting video ads for social media and digital platforms.',
  services: ['YouTube Ads', 'Facebook/Instagram Ads', 'TikTok Viral Videos', 'Promo Edits', 'Brand Awareness Videos'],
  tools: 'Premiere Pro, DaVinci Resolve, Canva Pro, CapCut'
}, {
  icon: Mic,
  title: 'Sound Design & Voiceovers',
  description: 'Professional audio production and AI voice generation.',
  services: ['AI Voice Generation', 'Studio Recording', 'Sound Effects', 'Background Music Production'],
  tools: 'Adobe Audition, FL Studio, ElevenLabs, Murf AI, Audacity'
}, {
  icon: Package,
  title: 'Complete Digital Package',
  description: 'All-in-one digital transformation solution for your business.',
  services: ['Website + Mobile App', 'Branding + Marketing', 'Video Production', 'AI Automation', 'E-commerce Setup'],
  tools: 'Full suite of professional tools and technologies'
}];
export const Services = () => {
  const [activeTab, setActiveTab] = useState('software');

  const renderServiceCards = (serviceList: typeof softwareServices) => {
    return (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {serviceList.map((service, index) => (
          <Reveal key={service.title} delay={index * 0.1} direction="up">
            <TiltCard className="h-full">
              <div className="group relative bg-card rounded-[2.5rem] p-10 border border-border/50 hover:border-primary/30 transition-all duration-500 h-full cursor-pointer overflow-hidden shadow-xl hover:shadow-2xl">
                {/* Soft glow on hover */}
                <div className="absolute inset-0 rounded-[2.5rem] bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Icon */}
                <div className="relative inline-block mb-8">
                  <div className="w-20 h-20 rounded-3xl bg-primary/10 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                    <service.icon className="text-primary" size={40} strokeWidth={1.5} />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-primary rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-display font-black text-foreground mb-4 group-hover:text-primary transition-colors duration-300 tracking-tight">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  {service.description}
                </p>

                {/* Services List */}
                <div className="space-y-4 mb-8">
                  <p className="text-[10px] uppercase tracking-[0.2em] font-black text-primary/60">Capabilities</p>
                  <ul className="space-y-3">
                    {service.services.slice(0, 4).map((item, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-center gap-4 group/item">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover/item:bg-primary transition-colors" />
                        <span className="group-hover/item:text-foreground transition-colors font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tools Badge */}
                <div className="pt-8 border-t border-border/30 mt-auto">
                  <p className="text-[10px] uppercase tracking-[0.2em] font-black text-muted-foreground/40 mb-3 font-sans">Tech Platform</p>
                  <p className="text-xs text-muted-foreground/70 line-clamp-2 italic font-serif">
                    {service.tools}
                  </p>
                </div>
              </div>
            </TiltCard>
          </Reveal>
        ))}
      </div>
    );
  };

  return (
    <section id="services" className="py-32 bg-transparent relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 opacity-[0.08] pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-primary rounded-full blur-[150px] animate-float" />
        <div className="absolute bottom-1/4 -right-20 w-[600px] h-[600px] bg-accent rounded-full blur-[150px] animate-float" style={{ animationDelay: '-3.5s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-24 max-w-4xl mx-auto">
          <Reveal direction="down">
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-display font-black mb-10 text-foreground tracking-tighter leading-none">
              Services that <span className="text-primary reveal-line inline-block">bring ideas to life</span>
            </h2>
          </Reveal>
          <Reveal delay={0.25}>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto font-medium">
              Comprehensive growth solutions tailored for the 2026 e-commerce landscape.
            </p>
          </Reveal>
        </div>

        {/* Interactive Tabs System */}
        <Reveal delay={0.4}>
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full max-w-3xl mx-auto grid-cols-3 mb-20 h-auto p-2 bg-secondary/20 backdrop-blur-3xl rounded-[2.5rem] border border-white/5 shadow-2xl">
              <TabsTrigger value="software" className="text-sm md:text-lg py-5 rounded-[2rem] data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-2xl transition-all duration-500 font-black tracking-tight flex items-center justify-center gap-3">
                <Code className="w-6 h-6" />
                <span>Software</span>
              </TabsTrigger>
              <TabsTrigger value="marketing" className="text-sm md:text-lg py-5 rounded-[2rem] data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-2xl transition-all duration-500 font-black tracking-tight flex items-center justify-center gap-3">
                <Target className="w-6 h-6" />
                <span>Marketing</span>
              </TabsTrigger>
              <TabsTrigger value="video" className="text-sm md:text-lg py-5 rounded-[2rem] data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-2xl transition-all duration-500 font-black tracking-tight flex items-center justify-center gap-3">
                <Video className="w-6 h-6" />
                <span>Video</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="software" className="mt-8">
              {renderServiceCards(softwareServices)}
            </TabsContent>

            <TabsContent value="marketing" className="mt-8">
              {renderServiceCards(marketingServices)}
            </TabsContent>

            <TabsContent value="video" className="mt-8">
              {renderServiceCards(videoServices)}
            </TabsContent>
          </Tabs>
        </Reveal>

        {/* Bottom Call to Action */}
        <Reveal direction="up" delay={0.2} className="text-center mt-32">
          <div className="bg-card/50 backdrop-blur-xl border border-border/50 rounded-[3rem] p-12 max-w-4xl mx-auto shadow-2xl">
            <p className="text-2xl text-foreground font-bold mb-10 leading-relaxed italic font-serif">
              "Every great transformation begins with a single conversation. Have a unique project in mind?"
            </p>
            <a href="#contact" className="group relative inline-flex items-center gap-4 px-12 py-6 bg-primary text-primary-foreground rounded-full font-black text-xl hover:scale-105 transition-all duration-500 shadow-2xl hover:shadow-primary/40 overflow-hidden">
              <span className="relative z-10">Start Your Journey</span>
              <div className="absolute inset-x-0 bottom-0 h-0 bg-white/20 group-hover:h-full transition-all duration-500" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
