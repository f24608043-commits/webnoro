import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Brain, BarChart3, Users, Target, Award, TrendingUp, Clock, MessageSquare, ArrowRight } from 'lucide-react';
import ResearchCard from '../components/ResearchCard';
import ResearchModal from '../components/ResearchModal';
import FeaturedResearchLLMCard from './FeaturedResearchLLMCard';


// Static research data - NO API CALLS
const researchData = [
  {
    id: 1,
    title: "AI-Powered Adaptive Learning of Computer Skills for Individuals with Sensory and Physical Disabilities",
    category: "Research Paper / AI / Inclusive Education",
    keywords: [
      "adaptive learning",
      "AI",
      "machine learning",
      "assistive technology",
      "CS education",
      "disability",
      "inclusive education",
      "intelligent tutoring systems"
    ],
    description: "AI-powered adaptive learning systems improve computer science education accessibility for individuals with sensory and physical disabilities using machine learning, intelligent tutoring systems, multimodal interfaces, and assistive technologies.",
    image: "https://cdn.corenexis.com/files/c/4283573720.png",
    readingTime: 15,
    publicationDate: "2024-05-09",
    author: "Nexa Growth Research Team",
    organization: "Nexa Growth Solution"
  }
];

// Static blog data - NO API CALLS
const blogData = [
  {
    id: 1,
    title: "5 Skills You Need to Stay Relevant in 2026",
    category: "Career Development / Future Skills",
    excerpt: "The workplace is changing faster than ever. AI, remote work, and digital transformation are rewriting the rules of success. Here are 5 essential skills you should invest in right now.",
    image: "https://photos.google.com/photo/AF1QipP0NMuDHv1RORTOeunvVIfu6r39gsaiBF3BXDGN",
    content: `
The workplace is changing faster than ever. AI, remote work, and digital transformation are rewriting the rules of success.

But here's the truth: Degrees alone won't future-proof your career.
It's the right skills that will.

According to leading career trends, here are 5 skills you should invest in right now ⬇️

1️⃣ Adaptability – Technology changes, industries shift. The ones who thrive are those who adjust fast.
2️⃣ Emotional Intelligence (EQ) – The ability to lead with empathy and communicate effectively is becoming more valuable than ever.
3️⃣ AI & Tech Literacy – You don't need to be a programmer, but you need to understand how AI tools work in your field.
4️⃣ Critical Thinking – In a world full of data and noise, your ability to analyze and decide will set you apart.
5️⃣ Personal Branding – Opportunities now find you online. A strong LinkedIn presence is as important as your CV.

🌟 Remember: Hard skills get you hired. Soft skills keep you growing.

The future belongs to those who learn, unlearn, and relearn.
    `,
    author: "Nexa Growth Team",
    readingTime: 5,
    publicationDate: "2024-05-12",
    tags: ["career development", "future skills", "AI literacy", "emotional intelligence", "adaptability", "critical thinking", "personal branding"]
  },
  {
    id: 2,
    title: "5 Skills You Need to Stay Relevant in 2026",
    category: "Career Development / Future Skills",
    excerpt: "The workplace is changing faster than ever. AI, remote work, and digital transformation are rewriting the rules of success. Here are 5 essential skills you should invest in right now.",
    image: "https://photos.google.com/photo/AF1QipP0NMuDHv1RORTOeunvVIfu6r39gsaiBF3BXDGN",
    content: `
The workplace is changing faster than ever. AI, remote work, and digital transformation are rewriting the rules of success.

But here's the truth: Degrees alone won't future-proof your career.
It's the right skills that will.

According to leading career trends, here are 5 skills you should invest in right now ⬇️

1️⃣ Adaptability – Technology changes, industries shift. The ones who thrive are those who adjust fast.
2️⃣ Emotional Intelligence (EQ) – The ability to lead with empathy and communicate effectively is becoming more valuable than ever.
3️⃣ AI & Tech Literacy – You don't need to be a programmer, but you need to understand how AI tools work in your field.
4️⃣ Critical Thinking – In a world full of data and noise, your ability to analyze and decide will set you apart.
5️⃣ Personal Branding – Opportunities now find you online. A strong LinkedIn presence is as important as your CV.

🌟 Remember: Hard skills get you hired. Soft skills keep you growing.

The future belongs to those who learn, unlearn, and relearn.
    `,
    author: "Nexa Growth Team",
    readingTime: 5,
    publicationDate: "2024-05-12",
    tags: ["career development", "future skills", "AI literacy", "emotional intelligence", "adaptability", "critical thinking", "personal branding"]
  }
];

// Blog Card Component
const BlogCard = ({ blog, onClick }) => {
  const date = new Date(blog.publicationDate);
  const day = date.getDate();
  const month = date.toLocaleString('default', { month: 'short' }).toUpperCase();

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -8 }}
      onClick={onClick}
      className="bg-gray-900/50 backdrop-blur-sm rounded-[0.75rem] sm:rounded-xl md:rounded-[14px] border border-gray-800 shadow-[0_2px_20px_rgba(0,0,0,0.3)] overflow-hidden transition-all duration-300 hover:-translate-y-[6px] hover:shadow-[0_12px_40px_rgba(16,185,129,0.2)] cursor-pointer group"
    >
      {/* Image Container */}
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={blog.image} 
          alt={blog.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Date Badge */}
        <div className="absolute top-2 sm:top-3 right-2 sm:right-3 bg-gradient-to-r from-emerald-500 to-green-500 text-white w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex flex-col items-center justify-center font-bold shadow-lg">
          <span className="text-[10px] sm:text-xs md:text-sm leading-none">{day}</span>
          <span className="text-[8px] sm:text-[9px] md:text-[10px] leading-none opacity-80">{month}</span>
        </div>

        {/* Category Badge */}
        <div className="absolute top-2 sm:top-3 left-2 sm:left-3 bg-emerald-500/90 backdrop-blur-sm text-white px-2 sm:px-3 py-0.5 sm:py-1 text-[9px] sm:text-[10px] md:text-[11px] font-black uppercase tracking-widest rounded-full">
          <TrendingUp className="w-2 h-2 sm:w-3 sm:h-3 inline mr-0.5 sm:mr-1" />
          Blog
        </div>

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-3 sm:p-4 md:p-6">
        <div className="flex items-center gap-1.5 sm:gap-2 mb-2 sm:mb-3">
          <span className="text-emerald-400 text-[10px] sm:text-xs md:text-xs font-semibold uppercase tracking-wider">
            {blog.category}
          </span>
          <span className="text-gray-500">•</span>
          <span className="text-gray-400 text-[10px] sm:text-xs md:text-xs">
            {blog.readingTime} min read
          </span>
        </div>

        <h3 className="font-bold text-sm sm:text-base md:text-xl text-white mb-2 sm:mb-3 leading-tight group-hover:text-emerald-400 transition-colors">
          {blog.title}
        </h3>
        
        <p className="text-gray-400 text-[10px] sm:text-xs md:text-sm leading-relaxed mb-3 sm:mb-4 line-clamp-3">
          {blog.excerpt}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
          {blog.tags.slice(0, 3).map((tag, idx) => (
            <span
              key={idx}
              className="px-2 sm:px-3 py-0.5 sm:py-1 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[9px] sm:text-xs md:text-xs rounded-full hover:bg-emerald-500/20 transition-colors"
            >
              {tag}
            </span>
          ))}
          {blog.tags.length > 3 && (
            <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-gray-800/50 border border-gray-700 text-gray-400 text-[9px] sm:text-xs md:text-xs rounded-full">
              +{blog.tags.length - 3} more
            </span>
          )}
        </div>

        {/* Footer */}
        <div className="pt-2 sm:pt-3 md:pt-4 border-t border-gray-800 flex items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-4 text-[10px] sm:text-xs md:text-xs text-gray-400">
            <div className="flex items-center gap-1 sm:gap-1.5">
              <Clock className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-3.5 md:h-3.5" />
              {blog.readingTime} min
            </div>
            <div className="flex items-center gap-1 sm:gap-1.5">
              <MessageSquare className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-3.5 md:h-3.5" />
              0 comments
            </div>
          </div>
          <button className="flex items-center gap-1.5 sm:gap-2 text-emerald-400 hover:text-emerald-300 transition-colors text-[10px] sm:text-xs md:text-sm font-medium">
            Read More
            <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
          </button>
        </div>
      </div>
    </motion.article>
  );
};

const CaseStudies = () => {
  const [selectedResearch, setSelectedResearch] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleResearchClick = (research) => {
    setSelectedResearch(research);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedResearch(null), 300);
  };

  return (
    <>
      {/* SEO Metadata */}
      <Helmet>
        <title>AI-Powered Adaptive Learning for Disabled Learners | Nexa Growth</title>
        <meta name="description" content="Explore AI-powered adaptive learning, machine learning, and assistive technology research improving computer science education accessibility for individuals with disabilities." />
        <meta property="og:title" content="AI-Powered Adaptive Learning for Disabled Learners | Nexa Growth" />
        <meta property="og:description" content="Explore AI-powered adaptive learning, machine learning, and assistive technology research improving computer science education accessibility for individuals with disabilities." />
        <meta property="og:image" content={researchData[0].image} />
        <meta property="og:url" content="https://nexagrowthsolution.com/casestudies" />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Nexa Growth" />
        
        {/* Schema.org JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ResearchArticle",
            "headline": researchData[0].title,
            "description": researchData[0].description,
            "image": researchData[0].image,
            "author": {
              "@type": "Organization",
              "name": researchData[0].author
            },
            "publisher": {
              "@type": "Organization",
              "name": researchData[0].organization
            },
            "datePublished": researchData[0].publicationDate,
            "keywords": researchData[0].keywords.join(", "),
            "about": [
              "adaptive learning",
              "AI",
              "machine learning",
              "assistive technology",
              "CS education",
              "disability",
              "inclusive education",
              "intelligent tutoring systems"
            ]
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
            <div className="absolute top-10 sm:top-20 left-10 sm:left-20 w-48 sm:w-64 md:w-80 lg:w-96 h-48 sm:h-64 md:h-80 lg:h-96 bg-emerald-500/10 rounded-full blur-2xl sm:blur-3xl" />
            <div className="absolute bottom-10 sm:bottom-20 right-10 sm:right-20 w-48 sm:w-64 md:w-80 lg:w-96 h-48 sm:h-64 md:h-80 lg:h-96 bg-green-500/10 rounded-full blur-2xl sm:blur-3xl" />
            <div className="absolute inset-0 bg-grid-white/5 bg-grid-16" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-24 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Category Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-1.5 sm:py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full mb-6 sm:mb-8"
              >
                <Brain className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-400" />
                <span className="text-emerald-400 text-xs sm:text-sm font-semibold">AI Research</span>
              </motion.div>

              {/* Main Title */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white via-emerald-400 to-green-400 bg-clip-text text-transparent">
                Research
                <span className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl mt-1 sm:mt-2 font-light text-gray-300">
                  Case Studies
                </span>
              </h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed px-2"
              >
                Exploring the intersection of artificial intelligence and inclusive education through cutting-edge research on adaptive learning systems.
              </motion.p>

              {/* Keywords */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 md:mb-16"
              >
                {researchData[0].keywords.map((keyword, idx) => (
                  <motion.span
                    key={idx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + idx * 0.05 }}
                    className="px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 bg-white/5 border border-white/10 rounded-full text-[10px] sm:text-xs md:text-sm text-gray-300 hover:bg-emerald-500/10 hover:border-emerald-500/30 hover:text-emerald-400 transition-all duration-300"
                  >
                    {keyword}
                  </motion.span>
                ))}
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto"
              >
                <div className="text-center">
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-emerald-400 mb-1 sm:mb-2">50+</div>
                  <div className="text-[10px] sm:text-xs md:text-sm text-gray-400">Studies</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-emerald-400 mb-1 sm:mb-2">88%</div>
                  <div className="text-[10px] sm:text-xs md:text-sm text-gray-400">Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-emerald-400 mb-1 sm:mb-2">10/10</div>
                  <div className="text-[10px] sm:text-xs md:text-sm text-gray-400">Impact</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-emerald-400 mb-1 sm:mb-2">5</div>
                  <div className="text-[10px] sm:text-xs md:text-sm text-gray-400">Disabilities</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Featured LLM Research Card */}
        <section className="relative py-12 sm:py-16 md:py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <FeaturedResearchLLMCard />
          </div>
        </section>

        {/* Research Cards Section */}
        <section className="relative py-12 sm:py-16 md:py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-8 sm:mb-12 md:mb-16"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4">Featured Research</h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base md:text-lg px-2">
                Dive into our comprehensive study on AI-powered adaptive learning systems for inclusive education.
              </p>
            </motion.div>

            {/* Research Cards Grid - STATIC RENDERING */}
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {researchData.map((research, index) => (
                <ResearchCard 
                  key={research.id}
                  research={research} 
                  onClick={handleResearchClick} 
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Featured Blog Section */}
        <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-transparent via-gray-900/50 to-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-8 sm:mb-12 md:mb-16"
            >
              <div className="inline-flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-emerald-400" />
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">Featured Blog</h2>
              </div>
              <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base md:text-lg px-2">
                Stay ahead with insights on career development, future skills, and workplace transformation in the AI era.
              </p>
            </motion.div>

            {/* Blog Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {blogData.map((blog, index) => (
                <BlogCard 
                  key={blog.id}
                  blog={blog} 
                  onClick={() => {
                    // Handle blog click - could open modal or navigate
                    console.log('Blog clicked:', blog.title);
                  }}
                />
              ))}
            </div>

            {/* View All Blogs Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center mt-8 sm:mt-12"
            >
              <button className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 bg-gradient-to-r from-emerald-500 to-green-500 text-white font-semibold rounded-full hover:from-emerald-600 hover:to-green-600 transition-all duration-300 shadow-lg hover:shadow-emerald-500/25 text-sm sm:text-base md:text-lg">
                View All Blog Posts
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
              </button>
            </motion.div>
          </div>
        </section>

        {/* New Featured Blog Section */}
        <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-black via-gray-900 to-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-8 sm:mb-12 md:mb-16"
            >
              <div className="inline-flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-emerald-400" />
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">Featured Blog:</h2>
              </div>
              <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base md:text-lg px-2">
                Stay ahead with insights on career development, future skills, and workplace transformation in the AI era.
              </p>
            </motion.div>

            {/* Blog Card */}
            <div className="max-w-4xl mx-auto">
              <motion.article
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                whileHover={{ y: -8 }}
                className="bg-gray-900/50 backdrop-blur-sm rounded-[0.75rem] sm:rounded-xl md:rounded-[14px] border border-gray-800 shadow-[0_2px_20px_rgba(0,0,0,0.3)] overflow-hidden transition-all duration-300 hover:-translate-y-[6px] hover:shadow-[0_12px_40px_rgba(16,185,129,0.2)] cursor-pointer group"
              >
                {/* Image Container */}
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src="https://photos.google.com/photo/AF1QipP0NMuDHv1RORTOeunvVIfu6r39gsaiBF3BXDGN" 
                    alt="5 Skills You Need to Stay Relevant in 2026"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                   
                  {/* Date Badge */}
                  <div className="absolute top-2 sm:top-3 right-2 sm:right-3 bg-gradient-to-r from-emerald-500 to-green-500 text-white w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex flex-col items-center justify-center font-bold shadow-lg">
                    <span className="text-[10px] sm:text-xs md:text-sm leading-none">12</span>
                    <span className="text-[8px] sm:text-[9px] md:text-[10px] leading-none opacity-80">MAY</span>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-2 sm:top-3 left-2 sm:left-3 bg-emerald-500/90 backdrop-blur-sm text-white px-2 sm:px-3 py-0.5 sm:py-1 text-[9px] sm:text-[10px] md:text-[11px] font-black uppercase tracking-widest rounded-full">
                    <TrendingUp className="w-2 h-2 sm:w-3 sm:h-3 inline mr-0.5 sm:mr-1" />
                    Blog
                  </div>

                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="p-3 sm:p-4 md:p-6">
                  <div className="flex items-center gap-1.5 sm:gap-2 mb-2 sm:mb-3">
                    <span className="text-emerald-400 text-[10px] sm:text-xs md:text-xs font-semibold uppercase tracking-wider">
                      Career Development / Future Skills
                    </span>
                    <span className="text-gray-500">•</span>
                    <span className="text-gray-400 text-[10px] sm:text-xs md:text-xs">
                      5 min read
                    </span>
                  </div>

                  <h3 className="font-bold text-sm sm:text-base md:text-xl text-white mb-2 sm:mb-3 leading-tight group-hover:text-emerald-400 transition-colors">
                    5 Skills You Need to Stay Relevant in 2026
                  </h3>
                   
                  <div className="text-gray-300 text-[10px] sm:text-xs md:text-sm leading-relaxed mb-3 sm:mb-4 space-y-2 sm:space-y-3">
                    <p>The workplace is changing faster than ever. AI, remote work, and digital transformation are rewriting the rules of success.</p>
                    <p>But here's the truth: Degrees alone won't future-proof your career. It's the right skills that will.</p>
                    <p>According to leading career trends, here are 5 skills you should invest in right now ⬇️</p>
                    <div className="space-y-1 sm:space-y-2 ml-2 sm:ml-4">
                      <p><strong>1️⃣ Adaptability</strong> – Technology changes, industries shift. The ones who thrive are those who adjust fast.</p>
                      <p><strong>2️⃣ Emotional Intelligence (EQ)</strong> – The ability to lead with empathy and communicate effectively is becoming more valuable than ever.</p>
                      <p><strong>3️⃣ AI & Tech Literacy</strong> – You don't need to be a programmer, but you need to understand how AI tools work in your field.</p>
                      <p><strong>4️⃣ Critical Thinking</strong> – In a world full of data and noise, your ability to analyze and decide will set you apart.</p>
                      <p><strong>5️⃣ Personal Branding</strong> – Opportunities now find you online. A strong LinkedIn presence is as important as your CV.</p>
                    </div>
                    <p className="text-yellow-400 font-semibold">🌟 Remember: Hard skills get you hired. Soft skills keep you growing.</p>
                    <p className="text-emerald-400 font-medium">The future belongs to those who learn, unlearn, and relearn.</p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                    <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[9px] sm:text-xs md:text-xs rounded-full hover:bg-emerald-500/20 transition-colors">
                      career development
                    </span>
                    <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[9px] sm:text-xs md:text-xs rounded-full hover:bg-emerald-500/20 transition-colors">
                      future skills
                    </span>
                    <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[9px] sm:text-xs md:text-xs rounded-full hover:bg-emerald-500/20 transition-colors">
                      AI literacy
                    </span>
                    <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[9px] sm:text-xs md:text-xs rounded-full hover:bg-emerald-500/20 transition-colors">
                      emotional intelligence
                    </span>
                    <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[9px] sm:text-xs md:text-xs rounded-full hover:bg-emerald-500/20 transition-colors">
                      adaptability
                    </span>
                    <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[9px] sm:text-xs md:text-xs rounded-full hover:bg-emerald-500/20 transition-colors">
                      critical thinking
                    </span>
                    <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[9px] sm:text-xs md:text-xs rounded-full hover:bg-emerald-500/20 transition-colors">
                      personal branding
                    </span>
                  </div>

                  {/* Footer */}
                  <div className="pt-2 sm:pt-3 md:pt-4 border-t border-gray-800 flex items-center justify-between">
                    <div className="flex items-center gap-2 sm:gap-4 text-[10px] sm:text-xs md:text-xs text-gray-400">
                      <div className="flex items-center gap-1 sm:gap-1.5">
                        <Clock className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-3.5 md:h-3.5" />
                        5 min
                      </div>
                      <div className="flex items-center gap-1 sm:gap-1.5">
                        <MessageSquare className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-3.5 md:h-3.5" />
                        0 comments
                      </div>
                    </div>
                    <button className="flex items-center gap-1.5 sm:gap-2 text-emerald-400 hover:text-emerald-300 transition-colors text-[10px] sm:text-xs md:text-sm font-medium">
                      Read More
                      <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                    </button>
                  </div>
                </div>
              </motion.article>
            </div>
          </div>
        </section>
      </div>

      {/* Research Modal */}
      {selectedResearch && (
        <ResearchModal
          research={selectedResearch}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
};

export default CaseStudies;
