import React, { useMemo, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, BookOpen, ArrowRight, Calendar, Clock, ShieldCheck } from 'lucide-react';
import FeaturedResearchCard from '@/components/FeaturedResearchCard';

const IMAGE_LINK = 'https://res.cloudinary.com/da1lnrcuv/image/upload/v1779975262/ChatGPT_Image_May_28_2026_06_34_04_PM_o79yjy.png';

const research = {
  id: 1,
  title: 'Large Language Models for Automated Software Development Assistance',
  category: 'AI Research / Software Engineering',
  image: IMAGE_LINK,
  shortDescription:
    'Large Language Models (LLMs) can generate code, assist debugging, automate documentation, improve testing quality, and translate natural language into executable software—while introducing challenges around security, reliability, and data governance.',
  abstract:
    'Large Language Models (LLMs) have emerged as transformative technologies in the field of software engineering and automated development assistance. These advanced artificial intelligence systems utilize deep learning architectures and natural language processing to assist developers in coding, debugging, documentation generation, testing, and software maintenance. The integration of LLMs into modern development workflows significantly improves productivity, reduces repetitive tasks, and accelerates software delivery cycles. This research paper explores the applications, advantages, challenges, and future potential of Large Language Models in automated software development environments.',
  keywords: [
    'Large Language Models',
    'Automated Software Development',
    'AI Coding Assistant',
    'Software Engineering',
    'Natural Language Processing',
    'Code Generation',
    'Intelligent Debugging',
    'Automated Testing',
    'Technical Documentation',
    'Generative AI',
    'Software Maintenance',
  ],
  readingTime: 12,
  publicationDate: '2026-05-28',
  author: 'Nexa Growth Research Team',
  organization: 'Nexa Growth Solution',
};

function escapeHtml(str: string) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '<')
    .replace(/>/g, '>')
    .replace(/"/g, '"')
    .replace(/'/g, '&#039;');
}


const Content = () => {
  const sections = useMemo(
    () => [
      {
        h: 'Abstract',
        body: research.abstract,
      },
      {
        h: '1. Introduction',
        body:
          'The rapid evolution of Artificial Intelligence (AI) has significantly influenced the software development industry. Large Language Models (LLMs) can understand, generate, and analyze both natural language and programming syntax—enabling intelligent coding assistance across the software development lifecycle.',
      },
      {
        h: '2. Understanding Large Language Models',
        body:
          'Large Language Models are deep neural network architectures trained on massive datasets containing natural language text and programming code. They typically use transformer-based architectures to predict and generate meaningful outputs from prompts.',
      },
      {
        h: '3. Applications of LLMs in Software Development',
        body:
          'LLMs support automated code generation, intelligent debugging and error detection, documentation generation, and assistance with testing through unit/integration test generation and edge-case scenario planning. They can also translate natural language requests into executable code.',
      },
      {
        h: '4. Benefits of LLM-Based Software Development Assistance',
        body:
          'LLM-powered tools can increase productivity, accelerate development cycles, improve code quality, support accessibility for beginners, and enhance collaboration through clearer documentation and explanations.',
      },
      {
        h: '5. Challenges and Limitations',
        body:
          'Key challenges include security risks from vulnerable or unsafe generated code, hallucinations, dependence on training data quality, intellectual property concerns, and limited context awareness in large enterprise architectures.',
      },
      {
        h: '6. Future of AI-Assisted Software Engineering',
        body:
          'Future systems may involve autonomous AI agents, AI-driven DevOps automation, self-healing software, and intelligent architecture design—moving toward increasingly end-to-end development assistance.',
      },
      {
        h: '7. Conclusion',
        body:
          'Large Language Models represent a meaningful shift in automated software development assistance, improving code generation, debugging, testing support, and documentation. Continued progress—alongside stronger safety practices—will determine how effectively organizations adopt these systems.',
      },
    ],
    []
  );

  return (
    <>
      {/* Visible card content (uses headings for SEO) */}
      <div className="prose prose-invert max-w-none">
        <section aria-label="Abstract">
          <h2 className="text-2xl font-bold text-white">{sections[0].h}</h2>
          <p className="text-gray-300 leading-relaxed">{sections[0].body}</p>
        </section>

        {sections.slice(1).map((s) => (
          <section key={s.h} aria-label={s.h} className="mt-8">
            <h3 className="text-xl font-bold text-white">{s.h}</h3>
            <p className="text-gray-300 leading-relaxed">{s.body}</p>
          </section>
        ))}

        <section className="mt-8" aria-label="Keywords">
          <h3 className="text-xl font-bold text-white mb-4">Keywords</h3>
          <div className="flex flex-wrap gap-2">
            {research.keywords.map((kw) => (
              <span
                key={kw}
                className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs rounded-full"
              >
                {kw}
              </span>
            ))}
          </div>
        </section>

        <section className="mt-8" aria-label="Research Safety Note">
          <div className="flex items-start gap-3 rounded-2xl bg-emerald-500/5 border border-emerald-500/20 p-4">
            <ShieldCheck className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
            <p className="text-gray-300 text-sm leading-relaxed">
              Note: Generated code should be reviewed and tested in a secure development workflow.
            </p>
          </div>
        </section>
      </div>

      {/* JSON-LD for ResearchArticle */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'ResearchArticle',
          headline: research.title,
          description: research.shortDescription,
          image: [research.image],
          author: {
            '@type': 'Organization',
            name: research.author,
          },
          publisher: {
            '@type': 'Organization',
            name: research.organization,
          },
          datePublished: research.publicationDate,
          keywords: research.keywords.join(', '),
          about: [
            'Large Language Models',
            'Software Engineering',
            'Automated Code Generation',
            'AI Debugging',
            'Automated Testing',
            'Natural Language to Code',
          ],
        })}
      </script>
    </>
  );
};

const FeaturedResearchLLMCard = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Helmet>
        <title>{research.title} | Nexa Growth Research</title>
        <meta
          name="description"
          content="Learn how Large Language Models (LLMs) automate software development assistance—code generation, intelligent debugging, documentation, testing, and natural language to code—along with key challenges like security, hallucinations, and context limits."
        />
        <meta property="og:title" content={`${research.title} | Nexa Growth`} />
        <meta
          property="og:description"
          content="Research summary on LLMs for automated software development assistance, including applications, benefits, challenges, and future directions."
        />
        <meta property="og:image" content={research.image} />
        <meta property="og:type" content="article" />
      </Helmet>

      <div className="min-h-screen bg-black text-white">
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black" />
          <div className="absolute top-10 left-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-green-500/10 rounded-full blur-3xl" />

          <div className="relative z-10 max-w-7xl mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full mb-6">
                <Brain className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-400 text-sm font-semibold">Featured Research</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-emerald-400 to-green-400 bg-clip-text text-transparent">
                Large Language Models for Automated Software Development Assistance
              </h1>

              <p className="text-gray-400 mt-6 text-lg leading-relaxed">
                A SEO-ready featured research card with structured headings, keyword coverage, and ResearchArticle schema.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-gray-400">
                <span className="inline-flex items-center gap-2">
                  <Clock className="w-4 h-4 text-emerald-400" />
                  {research.readingTime} min read
                </span>
                <span className="inline-flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-emerald-400" />
                  {new Date(research.publicationDate).toLocaleDateString()}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
              <FeaturedResearchCard
                title={research.title}
                image={research.image}
                category={research.category}
                abstract={research.abstract}
                keywords={research.keywords}
                readingTime={research.readingTime}
                publicationDate={research.publicationDate}
                author={research.author}
                organization={research.organization}
                onClick={() => setOpen(true)}
              />

              <div className="bg-white/5 border border-emerald-500/20 rounded-3xl p-7 md:p-8">
                <h2 className="text-2xl font-bold text-white mb-4">What this research covers</h2>
                <ul className="space-y-3 text-gray-300 text-sm leading-relaxed">
                  <li>• Applications: code generation, debugging, documentation, and testing assistance.</li>
                  <li>• Benefits: productivity gains and faster software delivery cycles.</li>
                  <li>• Challenges: security risks, hallucinations, data governance, and IP concerns.</li>
                  <li>• Future: autonomous agents, DevOps automation, and self-healing systems.</li>
                </ul>

                <div className="mt-8">
                  <button
                    onClick={() => setOpen(true)}
                    className="w-full bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50"
                    aria-label="Read full featured research"
                  >
                    <BookOpen className="w-5 h-5" />
                    Read Full Research
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <AnimatePresence>
          {open && (
            <motion.div
              className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            >
              <motion.div
                className="relative max-w-4xl mx-auto mt-16 mb-10 px-4"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="bg-zinc-950/90 border border-emerald-500/20 rounded-3xl overflow-hidden shadow-[0_0_0_1px_rgba(16,185,129,0.05),0_24px_60px_rgba(0,0,0,0.6)]">
                  <div className="relative h-52">
                    <img src={research.image} alt={research.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <h2 className="text-3xl font-bold text-white">{research.title}</h2>
                      <p className="text-emerald-300 mt-2 text-sm">{research.category}</p>
                    </div>
                  </div>

                  <div className="p-6 md:p-10">
                    <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-400 mb-6">
                      <span className="inline-flex items-center gap-2">
                        <Clock className="w-4 h-4 text-emerald-400" />
                        {research.readingTime} min read
                      </span>
                      <span className="inline-flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-emerald-400" />
                        {new Date(research.publicationDate).toLocaleDateString()}
                      </span>
                      <span className="text-gray-500">by {research.author}</span>
                    </div>

                    <Content />

                    <div className="mt-10 flex gap-3">
                      <button
                        onClick={() => setOpen(false)}
                        className="flex-1 bg-white/5 border border-white/10 hover:bg-white/10 text-white font-bold py-3 px-5 rounded-xl transition-colors"
                      >
                        Close
                      </button>
                      <button
                        onClick={() => setOpen(false)}
                        className="flex-1 bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white font-bold py-3 px-5 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50"
                      >
                        <span>Back to card</span>
                        <ArrowRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default FeaturedResearchLLMCard;

