import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Clock, Calendar, User, Share2, Bookmark, Brain } from 'lucide-react';

interface ResearchModalProps {
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
  isOpen: boolean;
  onClose: () => void;
}

const ResearchModal: React.FC<ResearchModalProps> = ({ research, isOpen, onClose }) => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setScrollProgress(scrollPercent);
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('scroll', handleScroll);
      handleScroll();
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isOpen]);

  const tableOfContents = [
    { id: 'introduction', title: 'Introduction', level: 1 },
    { id: 'background', title: 'Background', level: 2 },
    { id: 'problem-statement', title: 'Problem Statement', level: 2 },
    { id: 'research-objectives', title: 'Research Objectives', level: 2 },
    { id: 'importance', title: 'Importance of Study', level: 2 },
    { id: 'literature-review', title: 'Literature Review', level: 1 },
    { id: 'theoretical-foundations', title: 'Theoretical Foundations', level: 2 },
    { id: 'ai-methods', title: 'AI/ML Methods', level: 2 },
    { id: 'disability-findings', title: 'Disability-Specific Findings', level: 2 },
    { id: 'research-gaps', title: 'Research Gaps', level: 1 },
    { id: 'proposed-framework', title: 'Proposed Framework', level: 1 },
    { id: 'conclusion', title: 'Conclusion', level: 1 },
    { id: 'references', title: 'References', level: 1 }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl"
        onClick={onClose}
      >
        {/* Progress Bar */}
        <div className="fixed top-0 left-0 right-0 h-1 bg-gray-900 z-50">
          <div 
            className="h-full bg-gradient-to-r from-emerald-500 to-green-500 transition-all duration-300"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>

        {/* Close Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={onClose}
          className="fixed top-6 right-6 z-50 p-3 bg-black/60 backdrop-blur-sm rounded-full border border-emerald-500/20 hover:bg-emerald-500/10 hover:border-emerald-500/40 transition-all duration-300"
        >
          <X className="w-6 h-6 text-emerald-400" />
        </motion.button>

        {/* Share & Bookmark Buttons */}
        <div className="fixed top-6 right-20 z-50 flex gap-2">
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="p-3 bg-black/60 backdrop-blur-sm rounded-full border border-emerald-500/20 hover:bg-emerald-500/10 hover:border-emerald-500/40 transition-all duration-300"
          >
            <Share2 className="w-5 h-5 text-emerald-400" />
          </motion.button>
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="p-3 bg-black/60 backdrop-blur-sm rounded-full border border-emerald-500/20 hover:bg-emerald-500/10 hover:border-emerald-500/40 transition-all duration-300"
          >
            <Bookmark className="w-5 h-5 text-emerald-400" />
          </motion.button>
        </div>

        {/* Table of Contents */}
        <motion.nav
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ delay: 0.3 }}
          className="fixed left-6 top-24 z-40 w-64 max-h-[calc(100vh-120px)] overflow-y-auto bg-black/60 backdrop-blur-xl rounded-2xl p-6 border border-emerald-500/20"
          onClick={(e) => e.stopPropagation()}
        >
          <h3 className="text-lg font-bold text-emerald-400 mb-4 flex items-center gap-2">
            <Brain className="w-5 h-5" />
            Contents
          </h3>
          <ul className="space-y-2">
            {tableOfContents.map((item, index) => (
              <motion.li
                key={item.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.02 }}
              >
                <button
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-3 py-2 text-sm text-gray-400 hover:text-emerald-400 hover:bg-emerald-500/10 rounded-lg transition-all duration-300"
                  style={{ paddingLeft: `${item.level === 2 ? '1.5rem' : '0.75rem'}` }}
                >
                  {item.title}
                </button>
              </motion.li>
            ))}
          </ul>
        </motion.nav>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ delay: 0.2 }}
          className="relative max-w-4xl mx-auto px-6 py-20 overflow-y-auto max-h-[100vh]"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Hero Banner */}
          <div className="relative h-96 rounded-3xl overflow-hidden mb-12">
            <img 
              src={research.image} 
              alt={research.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/20 border border-emerald-500/40 rounded-full mb-4"
              >
                <Brain className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-400 text-sm font-semibold">{research.category}</span>
              </motion.div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {research.title}
              </h1>
              <div className="flex items-center gap-6 text-sm text-gray-300">
                <span className="flex items-center gap-2">
                  <User size={14} />
                  {research.author}
                </span>
                <span className="flex items-center gap-2">
                  <Calendar size={14} />
                  {new Date(research.publicationDate).toLocaleDateString()}
                </span>
                <span className="flex items-center gap-2">
                  <Clock size={14} />
                  {research.readingTime} min read
                </span>
              </div>
            </div>
          </div>

          {/* Research Content */}
          <article className="prose prose-invert prose-lg max-w-none">
            {/* Introduction */}
            <section id="introduction" className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">Introduction</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                AI-powered adaptive learning systems are transforming accessible computer science education through intelligent tutoring systems, machine learning, multimodal interfaces, and assistive technologies for individuals with sensory and physical disabilities.
              </p>
              <p className="text-gray-300 leading-relaxed">
                This comprehensive research explores the intersection of artificial intelligence and inclusive education, examining how adaptive technologies can create personalized learning experiences that accommodate diverse learning needs and abilities.
              </p>
            </section>

            {/* Background */}
            <section id="background" className="mb-12">
              <h3 className="text-2xl font-bold text-white mb-4">Background</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Computer science has become a foundational skill across industries, yet students with disabilities face significant access barriers. The World Health Organization (2023) estimates 1.3 billion people live with some form of disability.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Traditional CS subjects assume full keyboard access, unimpaired vision, and audio visual learning assumptions that exclude large segments of learners. Adaptive learning systems that use ML to personalize content and modality offer a technological path to addressing this exclusion.
              </p>
            </section>

            {/* Problem Statement */}
            <section id="problem-statement" className="mb-12">
              <h3 className="text-2xl font-bold text-white mb-4">Problem Statement</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Despite growing research activity, the field suffers from fragmentation. Studies target individual disability categories in isolation, use inconsistent evaluation metrics, and rely on small samples — often under 60 participants.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Combined sensory disabilities (e.g., deaf-blindness) are almost entirely neglected. Long-term outcome data are virtually absent, making it impossible to distinguish systems that produce durable learning gains from those that inflate short-term scores.
              </p>
            </section>

            {/* Research Objectives */}
            <section id="research-objectives" className="mb-12">
              <h3 className="text-2xl font-bold text-white mb-4">Research Objectives</h3>
              <ol className="list-decimal list-inside space-y-3 text-gray-300">
                <li>Map AI/ML methods used in adaptive CS learning platforms for disabled learners using IEEE dataset.</li>
                <li>Evaluate performance and impact of different AI approaches across disability categories and CS topics.</li>
                <li>Identify research gaps and propose a framework to guide future inclusive education research.</li>
              </ol>
            </section>

            {/* Importance */}
            <section id="importance" className="mb-12">
              <h3 className="text-2xl font-bold text-white mb-4">Importance of Study</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                This research sits at the intersection of social equity, workforce development, and scientific synthesis. The UN SDG 4 calls for inclusive quality education for all, and McKinsey (2023) projects a shortfall of over four million technology workers by 2030.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Disabled individuals represent an untapped talent pool blocked primarily by educational access barriers.
              </p>
            </section>

            {/* Literature Review */}
            <section id="literature-review" className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">Literature Review</h2>
              
              <h3 id="theoretical-foundations" className="text-2xl font-bold text-white mb-4">Theoretical Foundations</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Adaptive learning builds on Bloom's (1984) 'two-sigma' finding that one-on-one tutoring outperforms classroom instruction by two standard deviations. Intelligent tutoring systems (ITS) from the 1980s onward attempted to scale that personalization through rule-based models.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Corbett and Anderson's (1994) Bayesian Knowledge Tracing (BKT) introduced probabilistic skill estimation, enabling data-driven adaptation. Universal Design for Learning (UDL, Rose & Meyer, 2002) provided the philosophical grounding: multiple means of representation, action, and engagement.
              </p>

              <h3 id="ai-methods" className="text-2xl font-bold text-white mb-4 mt-8">AI/ML Methods in Accessible CS Education</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                <strong>Deep Learning.</strong> CNNs are widely applied to gesture and sign language recognition. Chen et al. (2021) achieved 94.2% accuracy in AI-driven sign language interpretation for CS lab sessions.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                <strong>Large Language Models (LLMs).</strong> GPT-4 and CodeBERT-based systems dominate the post-2022 literature. Yilmaz and Santos (2023) fine-tuned CodeBERT + GPT-4 for speech-to-code assistance for paralysed learners, achieving 93.5%.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                <strong>Reinforcement Learning (RL).</strong> RL maps naturally onto adaptive instruction: the system agent selects pedagogical actions to maximise learner progress. Kumar et al. (2022) applied deep RL for a mastery-based curriculum for blind programmers (91.4%).
              </p>

              <h3 id="disability-findings" className="text-2xl font-bold text-white mb-4 mt-8">Disability-Specific Findings</h3>
              <ul className="space-y-3 text-gray-300">
                <li><strong>Visual Impairment</strong> (28% of dataset, avg. impact 8.4). The most studied category. Performance scores range from 81% to 97.3%.</li>
                <li><strong>Motor Disability</strong> (20%, avg. impact 7.9). Voice-controlled and LLM-based systems outperform gaze-controlled interfaces by roughly 4–5 percentage points.</li>
                <li><strong>Hearing Impairment</strong> (14%, avg. impact 8.3). Captioning/transcription approaches achieve higher accuracy than sign language interpretation.</li>
                <li><strong>Cognitive Differences</strong> (14%, avg. impact 7.8). ASD, ADHD, dyslexia, and TBI each require distinct adaptive strategies.</li>
              </ul>
            </section>

            {/* Research Gaps */}
            <section id="research-gaps" className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">Research Gaps</h2>
              <ol className="list-decimal list-inside space-y-3 text-gray-300">
                <li><strong>Combined Sensory Disabilities:</strong> Only 2 of 50 studies target deaf-blind individuals (4%). Both use small samples (&lt;25) and prototype systems.</li>
                <li><strong>Absence of Longitudinal Studies:</strong> Nearly all studies measure outcomes over single sessions. Only Huang et al. (2023) attempts long-term modelling.</li>
                <li><strong>Small and Culturally Homogeneous Samples:</strong> Most studies involve 22–60 participants, nearly all from North America, Europe, or East Asia.</li>
                <li><strong>Limited Curriculum Coverage:</strong> Accessible learning research is concentrated in introductory Python programming. Advanced topics are largely absent.</li>
              </ol>
            </section>

            {/* Proposed Framework */}
            <section id="proposed-framework" className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">Proposed Research Framework</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Based on the synthesis and gap analysis, this paper proposes a five-component AI-powered adaptive CS learning framework:
              </p>
              <ol className="list-decimal list-inside space-y-4 text-gray-300">
                <li><strong>Dynamic Learner Modelling:</strong> Captures real-time signals (gaze, keystroke, voice, error patterns, EEG where available) to infer cognitive load, fatigue, and emotional state dynamically.</li>
                <li><strong>Adaptive Content Delivery:</strong> Selects and formats CS materials per learner profile. Modalities are configurable layers that can be combined for learners with multiple disabilities.</li>
                <li><strong>AI Pedagogical Decision Engine:</strong> Combines mastery-gated RL for sequencing, Bayesian knowledge tracing for skill-state uncertainty, and LLM generation for flexible explanation production.</li>
                <li><strong>Accessibility Interface Layer:</strong> Manages the physical interface between the digital environment and the learner's specific sensory/motor configuration.</li>
                <li><strong>Longitudinal Outcome Monitoring:</strong> Implements long-term learning trajectory tracking using RNN/LSTM. Flags divergence from expected development curves for early intervention.</li>
              </ol>
            </section>

            {/* Conclusion */}
            <section id="conclusion" className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">Conclusion</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                This paper synthesised 50 IEEE studies and 30 key references to evaluate the current state of AI-powered adaptive CS learning for individuals with sensory and physical disabilities.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                The evidence base is technically innovative but fragmented: visual impairment and hearing impairment receive the most attention, LLMs and deep learning dominate recent methods, and performance scores average near 88% yet nearly all results are short-term and small-scale.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Five research gaps represent clear priorities for future work. The proposed five-component framework provides a conceptual structure for studies that address these gaps systematically.
              </p>
            </section>

            {/* References */}
            <section id="references" className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">References</h2>
              <ul className="space-y-3 text-gray-300 text-sm">
                <li>Abebe, Y., & Morrow, J. (2022). Real-time sign language tutor for CS technical vocabulary. <em>IEEE Transactions on Human-Machine Systems</em>. <a href="https://doi.org/10.1109/THMS.2022.3190022" className="text-emerald-400 hover:text-emerald-300">https://doi.org/10.1109/THMS.2022.3190022</a></li>
                <li>Bloom, B. S. (1984). The 2 sigma problem: The search for methods of group instruction as effective as one-to-one tutoring. <em>Educational Researcher, 13</em>(6), 4–16.</li>
                <li>Chen, W., Okafor, E., & Singh, A. (2021). AI-driven sign language interpretation for CS lab sessions. <em>IEEE Transactions on Human-Machine Systems</em>. <a href="https://doi.org/10.1109/THMS.2021.3078432" className="text-emerald-400 hover:text-emerald-300">https://doi.org/10.1109/THMS.2021.3078432</a></li>
                <li>Corbett, A. T., & Anderson, J. R. (1994). Knowledge tracing: Modelling the acquisition of procedural knowledge. <em>User Modelling and User-Adapted Interaction, 4</em>(4), 253–278.</li>
                <li>Rose, D. H., & Meyer, A. (2002). Teaching every student in the digital age: Universal design for learning. ASCD.</li>
                <li>United Nations. (2023). Sustainable Development Goals Report 2023. UN DESA.</li>
                <li>World Health Organization. (2023). Disability and health. WHO.</li>
              </ul>
            </section>
          </article>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ResearchModal;
