import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Clock, Calendar, User, ExternalLink, BookOpen, ChevronRight, Share2, Bookmark, ArrowRight, Brain, BarChart3, Users, Target, Award } from 'lucide-react';

// Research data
const researchPaper = {
  id: 1,
  title: "AI-Powered Adaptive Learning of Computer Skills for Individuals with Sensory and Physical Disabilities",
  category: "AI Research",
  keywords: [
    "adaptive learning",
    "AI", 
    "machine learning",
    "assistive technology",
    "CS education",
    "disability",
    "inclusive education",
    "intelligent tutoring systems",
    "accessible learning",
    "AI tutoring",
    "adaptive CS learning",
    "accessibility technology",
    "deep learning",
    "reinforcement learning",
    "LLMs in education",
    "STEM accessibility"
  ],
  shortDescription: "Exploring how AI-powered adaptive learning systems, machine learning, intelligent tutoring systems, and assistive technologies can transform computer science education for individuals with sensory and physical disabilities.",
  image: "https://cdn.corenexis.com/files/c/4283573720.png",
  readingTime: 15,
  publicationDate: "2024-05-09",
  author: "Nexa Growth Research Team",
  organization: "Nexa Growth Solution",
  stats: {
    impact: 10,
    accuracy: 88,
    studies: 50,
    disabilities: 5
  }
};

// Research Card Component
const ResearchCard = ({ research, onClick, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={() => onClick(research)}
      className="group relative cursor-pointer"
    >
      {/* Glassmorphism Card */}
      <div className="relative bg-black/40 backdrop-blur-lg rounded-3xl overflow-hidden border border-green-500/20 hover:border-green-400/40 transition-all duration-500 shadow-2xl hover:shadow-green-500/20 min-h-full">
        
        {/* Animated Gradient Border */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-green-500/20 via-emerald-500/20 to-green-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Image Section */}
        <div className="relative h-64 overflow-hidden">
          <img 
            src={research.image} 
            alt={research.title}
            loading="lazy"
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
          />
          
          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
          
          {/* Category Badge */}
          <div className="absolute top-6 left-6">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-sm font-bold rounded-full shadow-lg shadow-green-500/30"
            >
              {research.category}
            </motion.div>
          </div>

          {/* Stats Overlay */}
          <div className="absolute top-6 right-6 flex gap-2">
            {research.stats && (
              <>
                <div className="px-3 py-1 bg-black/60 backdrop-blur-sm rounded-full">
                  <span className="text-green-400 text-xs font-bold">{research.stats.impact}/10</span>
                </div>
                <div className="px-3 py-1 bg-black/60 backdrop-blur-sm rounded-full">
                  <span className="text-green-400 text-xs font-bold">{research.stats.accuracy}%</span>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Content Section */}
        <div className="relative p-8">
          {/* Title */}
          <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors duration-300 line-clamp-2">
            {research.title}
          </h3>

          {/* Description */}
          <p className="text-gray-300 text-sm mb-6 leading-relaxed line-clamp-3">
            {research.shortDescription}
          </p>

          {/* Keywords */}
          <div className="flex flex-wrap gap-2 mb-6">
            {research.keywords.slice(0, 4).map((keyword, idx) => (
              <motion.span
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + idx * 0.05 }}
                className="px-3 py-1 bg-green-500/10 border border-green-500/30 text-green-400 text-xs rounded-full hover:bg-green-500/20 transition-colors"
              >
                {keyword}
              </motion.span>
            ))}
            {research.keywords.length > 4 && (
              <span className="px-3 py-1 bg-gray-800/50 border border-gray-700/50 text-gray-400 text-xs rounded-full">
                +{research.keywords.length - 4} more
              </span>
            )}
          </div>

          {/* Meta Info */}
          <div className="flex items-center justify-between text-sm text-gray-400 mb-6">
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-2">
                <Clock size={14} className="text-green-400" />
                {research.readingTime} min read
              </span>
              <span className="flex items-center gap-2">
                <Calendar size={14} className="text-green-400" />
                {new Date(research.publicationDate).toLocaleDateString()}
              </span>
            </div>
          </div>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 shadow-lg shadow-green-500/30 hover:shadow-green-500/50"
          >
            <BookOpen size={18} />
            Read Research
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>

        {/* Hover Glow Effect */}
        {isHovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 pointer-events-none"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-emerald-500/10 to-green-500/10 rounded-3xl" />
            <div className="absolute -inset-1 bg-gradient-to-r from-green-500/20 via-emerald-500/20 to-green-500/20 rounded-3xl blur-xl" />
          </motion.div>
        )}
      </div>
    </motion.article>
  );
};

// Main Case Studies Page
const CaseStudiesClean = () => {
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
      <Helmet>
        <title>AI-Powered Adaptive Learning for Disabled Learners | Nexa Growth Research</title>
        <meta name="description" content="Explore how AI-powered adaptive learning, machine learning, assistive technology, and intelligent tutoring systems improve computer science education accessibility for individuals with sensory and physical disabilities." />
        <meta property="og:title" content="AI-Powered Adaptive Learning for Disabled Learners | Nexa Growth Research" />
        <meta property="og:description" content="Explore how AI-powered adaptive learning, machine learning, assistive technology, and intelligent tutoring systems improve computer science education accessibility for individuals with sensory and physical disabilities." />
        <meta property="og:image" content={researchPaper.image} />
        <meta property="og:url" content="https://nexagrowthsolution.com/casestudies" />
        <meta property="og:type" content="article" />
      </Helmet>

      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
            <div className="absolute top-20 left-20 w-96 h-96 bg-green-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
            <div className="absolute inset-0 bg-grid-white/5 bg-grid-16" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 py-24 text-center">
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
                className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full mb-8"
              >
                <Brain className="w-4 h-4 text-green-400" />
                <span className="text-green-400 text-sm font-semibold">AI Research</span>
              </motion.div>

              {/* Main Title */}
              <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-green-400 to-emerald-400 bg-clip-text text-transparent">
                Research
                <span className="block text-4xl md:text-5xl mt-2 font-light text-gray-300">
                  Case Studies
                </span>
              </h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed"
              >
                Exploring the intersection of artificial intelligence and inclusive education through cutting-edge research on adaptive learning systems.
              </motion.p>

              {/* Keywords */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap justify-center gap-3 mb-16"
              >
                {researchPaper.keywords.slice(0, 6).map((keyword, idx) => (
                  <motion.span
                    key={idx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + idx * 0.05 }}
                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300 hover:bg-green-500/10 hover:border-green-500/30 hover:text-green-400 transition-all duration-300"
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
                className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
              >
                {researchPaper.stats && (
                  <>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-400 mb-2">{researchPaper.stats.studies}+</div>
                      <div className="text-sm text-gray-400">Studies</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-400 mb-2">{researchPaper.stats.accuracy}%</div>
                      <div className="text-sm text-gray-400">Accuracy</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-400 mb-2">{researchPaper.stats.impact}/10</div>
                      <div className="text-sm text-gray-400">Impact</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-400 mb-2">{researchPaper.stats.disabilities}</div>
                      <div className="text-sm text-gray-400">Disabilities</div>
                    </div>
                  </>
                )}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Research Cards Section */}
        <section className="relative py-24">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4">Featured Research</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Dive into our comprehensive study on AI-powered adaptive learning systems for inclusive education.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="min-h-[600px]">
                <ResearchCard 
                  research={researchPaper} 
                  onClick={handleResearchClick} 
                  index={0}
                />
              </div>
              
              {/* Additional Info Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-xl rounded-3xl p-8 border border-green-500/20"
              >
                <h3 className="text-2xl font-bold mb-6 text-green-400">Research Impact</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Target className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Targeted Solutions</h4>
                      <p className="text-gray-400 text-sm">AI-driven adaptive systems for 5 major disability categories</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <BarChart3 className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Proven Results</h4>
                      <p className="text-gray-400 text-sm">88% average accuracy across 50+ research studies</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Users className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Inclusive Impact</h4>
                      <p className="text-gray-400 text-sm">Serving 1.3B+ people with disabilities worldwide</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Award className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Research Excellence</h4>
                      <p className="text-gray-400 text-sm">Published in leading IEEE journals and conferences</p>
                    </div>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleResearchClick(researchPaper)}
                  className="w-full mt-8 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-3"
                >
                  <BookOpen size={18} />
                  Read Full Research
                  <ArrowRight size={18} />
                </motion.button>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CaseStudiesClean;
