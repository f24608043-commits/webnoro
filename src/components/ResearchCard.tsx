import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Clock, Calendar, ChevronRight, Brain } from 'lucide-react';

interface ResearchCardProps {
  research: {
    id: number;
    title: string;
    category: string;
    keywords: string[];
    description: string;
    image: string;
    readingTime: number;
    publicationDate: string;
    author: string;
    organization: string;
  };
  onClick: (research: any) => void;
  index: number;
}

const ResearchCard: React.FC<ResearchCardProps> = ({ research, onClick, index }) => {
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
      <div className="relative bg-black/40 backdrop-blur-xl rounded-3xl overflow-hidden border border-emerald-500/20 hover:border-emerald-400 transition-all duration-500 shadow-[0_0_40px_rgba(0,255,150,0.15)] hover:shadow-[0_0_60px_rgba(0,255,150,0.25)]">
        
        {/* Animated Gradient Border */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-emerald-500/20 via-green-500/20 to-emerald-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
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
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500 to-green-500 text-white text-sm font-bold rounded-full shadow-lg shadow-emerald-500/30"
            >
              <Brain className="w-4 h-4" />
              {research.category}
            </motion.div>
          </div>
        </div>

        {/* Content Section */}
        <div className="relative p-8">
          {/* Title */}
          <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors duration-300">
            {research.title}
          </h3>

          {/* Description */}
          <p className="text-gray-300 text-sm mb-6 leading-relaxed">
            {research.description}
          </p>

          {/* Keywords */}
          <div className="flex flex-wrap gap-2 mb-6">
            {research.keywords.slice(0, 4).map((keyword, idx) => (
              <motion.span
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + idx * 0.05 }}
                className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs rounded-full hover:bg-emerald-500/20 transition-colors"
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
                <Clock size={14} className="text-emerald-400" />
                {research.readingTime} min read
              </span>
              <span className="flex items-center gap-2">
                <Calendar size={14} className="text-emerald-400" />
                {new Date(research.publicationDate).toLocaleDateString()}
              </span>
            </div>
          </div>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50"
          >
            <BookOpen size={18} />
            Read Research
            <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
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
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-green-500/10 to-emerald-500/10 rounded-3xl" />
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 via-green-500/20 to-emerald-500/20 rounded-3xl blur-xl" />
          </motion.div>
        )}
      </div>
    </motion.article>
  );
};

export default ResearchCard;
