import React from 'react';
import { motion } from 'framer-motion';
import { Brain, ArrowRight } from 'lucide-react';

export type FeaturedResearchCardProps = {
  title: string;
  image: string;
  category: string;
  abstract: string;
  keywords: string[];
  readingTime?: number;
  publicationDate?: string;
  author?: string;
  organization?: string;
  onClick?: () => void;
};

const FeaturedResearchCard: React.FC<FeaturedResearchCardProps> = ({
  title,
  image,
  category,
  abstract,
  keywords,
  readingTime,
  publicationDate,
  author,
  organization,
  onClick,
}) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      whileHover={{ y: -6 }}
      className="group relative cursor-pointer"
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={(e) => {
        if (!onClick) return;
        if (e.key === 'Enter' || e.key === ' ') onClick();
      }}
      aria-label={onClick ? `Read research: ${title}` : undefined}
    >
      <div className="relative bg-black/40 backdrop-blur-xl rounded-3xl overflow-hidden border border-emerald-500/20 shadow-[0_0_40px_rgba(0,255,150,0.12)] group-hover:shadow-[0_0_60px_rgba(0,255,150,0.22)] transition-shadow duration-500">
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-emerald-500/15 via-green-500/15 to-emerald-500/15 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative h-64 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-70 group-hover:opacity-45 transition-opacity duration-500" />

          <div className="absolute top-6 left-6">
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500 to-green-500 text-white text-sm font-bold rounded-full shadow-lg shadow-emerald-500/30"
            >
              <Brain className="w-4 h-4" />
              <span>{category}</span>
            </motion.div>
          </div>
        </div>

        <div className="relative p-8">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight group-hover:text-emerald-400 transition-colors duration-300">
            {title}
          </h3>

          <p className="text-gray-300 text-sm md:text-base mb-6 leading-relaxed">
            {abstract}
          </p>

          {keywords?.length ? (
            <div className="flex flex-wrap gap-2 mb-6">
              {keywords.slice(0, 6).map((kw) => (
                <span
                  key={kw}
                  className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs rounded-full hover:bg-emerald-500/20 transition-colors"
                >
                  {kw}
                </span>
              ))}
              {keywords.length > 6 && (
                <span className="px-3 py-1 bg-gray-800/50 border border-gray-700/50 text-gray-400 text-xs rounded-full">
                  +{keywords.length - 6} more
                </span>
              )}
            </div>
          ) : null}

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-400 mb-6">
            {typeof readingTime === 'number' ? <span>{readingTime} min read</span> : null}
            {publicationDate ? (
              <span>{new Date(publicationDate).toLocaleDateString()}</span>
            ) : null}
            {author ? <span className="text-gray-500">By {author}</span> : null}
            {organization ? <span className="text-gray-500">{organization}</span> : null}
          </div>

          {onClick ? (
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <div className="w-full bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50">
                <span>Read Featured Research</span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ) : null}
        </div>
      </div>
    </motion.article>
  );
};

export default FeaturedResearchCard;

