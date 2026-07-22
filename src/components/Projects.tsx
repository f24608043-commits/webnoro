import { useEffect, useState, useRef } from 'react';
import { X, Layout, Zap, Wrench, CheckCircle2, ArrowRight, Briefcase } from 'lucide-react';
import { Button } from './ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Project,
  ecommerceProjects,
  digitalMarketingProjects,
  webDevelopmentProjects
} from '../data/projectsData';
import { ProjectCard } from './ProjectCard';
import { Reveal } from './animations/Reveal';
import { Magnetic } from './animations/Magnetic';
import { gsap, useGSAP } from '@/lib/gsap';

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (window.location.hash) {
      setTimeout(() => {
        const id = window.location.hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 500);
    }
  }, []);

  useGSAP(() => {
    if (headlineRef.current) {
      const text = headlineRef.current.innerText;
      headlineRef.current.innerHTML = text.split('').map(char =>
        `<span class="char-proj inline-block">${char === ' ' ? '&nbsp;' : char}</span>`
      ).join('');

      gsap.from(".char-proj", {
        y: 50,
        opacity: 0,
        stagger: 0.03,
        duration: 1.2,
        ease: "expo.out",
      });
    }
  }, { scope: heroRef });

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isModalOpen]);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const ecommerceAccounts = ecommerceProjects.filter(p => p.category === 'Account Management');
  const ecommerceMarketing = ecommerceProjects.filter(p => p.category === 'Amazon Marketing');

  return (
    <section className="bg-transparent relative min-h-screen overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <div className="absolute top-0 -left-1/4 w-[1000px] h-[1000px] bg-primary/10 rounded-full blur-[160px] animate-float" />
        <div className="absolute bottom-0 -right-1/4 w-[800px] h-[800px] bg-accent/10 rounded-full blur-[140px] animate-pulse" />
      </div>

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative pt-48 pb-32 border-b border-border/50 bg-gradient-to-b from-background via-background to-muted/20"
      >
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            <Reveal direction="down">
              <div className="inline-flex items-center gap-3 px-6 py-2 bg-primary/10 rounded-full text-primary font-bold text-sm mb-12 border border-primary/20 backdrop-blur-md">
                PROJECT PORTFOLIO
              </div>
            </Reveal>
            <h1 ref={headlineRef} className="text-5xl md:text-7xl lg:text-8xl font-display font-black mb-10 text-foreground tracking-tighter leading-[0.9] italic max-w-5xl mx-auto">
              Our <span className="text-primary not-italic">Projects</span>
            </h1>
            <Reveal delay={0.4}>
              <p className="text-xl md:text-3xl lg:text-4xl text-muted-foreground leading-relaxed max-w-4xl mx-auto font-bold italic font-serif">
                Performance-Driven Results Across E-commerce, Digital Marketing & Technology
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Sticky Navigation */}
      <div className="sticky top-20 z-40 bg-background/80 backdrop-blur-2xl border-b border-border/50 py-6">
        <div className="container mx-auto px-6">
          <div className="flex justify-center gap-12">
            {['ecommerce-projects', 'digital-marketing-projects', 'web-development-projects'].map((id) => (
              <Magnetic key={id} strength={0.1}>
                <a href={`#${id}`} className="text-sm font-black uppercase tracking-widest hover:text-primary transition-colors cursor-pointer">
                  {id === 'ecommerce-projects' ? 'ecom' : id.split('-')[0]}
                </a>
              </Magnetic>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-32 space-y-48">
        {/* E-commerce Section */}
        <section id="ecommerce-projects" className="scroll-mt-48">
          <Reveal direction="left">
            <div className="mb-20">
              <h2 className="text-5xl md:text-7xl font-display font-black mb-6 tracking-tight italic">E-commerce <span className="text-primary not-italic">Projects</span></h2>
              <p className="text-2xl text-muted-foreground font-medium max-w-2xl italic font-serif">Marketplace Growth, Account Management & Performance Advertising</p>
            </div>
          </Reveal>

          <div className="space-y-32">
            <div>
              <Reveal direction="down">
                <h3 className="text-sm font-black uppercase tracking-[0.3em] text-primary mb-12 flex items-center gap-6">
                  <span className="w-16 h-px bg-primary/40" /> Accounts Managed
                </h3>
              </Reveal>
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 md:gap-8 lg:gap-12">
                {ecommerceAccounts.map((project, idx) => (
                  <Reveal key={project.id} delay={idx * 0.1} direction="up">
                    <ProjectCard project={project} onViewDetails={openModal} />
                  </Reveal>
                ))}
              </div>
            </div>

            <div>
              <Reveal direction="down">
                <h3 className="text-sm font-black uppercase tracking-[0.3em] text-primary mb-12 flex items-center gap-6">
                  <span className="w-16 h-px bg-primary/40" /> Marketing
                </h3>
              </Reveal>
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 md:gap-8 lg:gap-12">
                {ecommerceMarketing.map((project, idx) => (
                  <Reveal key={project.id} delay={idx * 0.1} direction="up">
                    <ProjectCard project={project} onViewDetails={openModal} />
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Marketing Section */}
        <section id="digital-marketing-projects" className="scroll-mt-48">
          <Reveal direction="left">
            <div className="mb-20">
              <h2 className="text-5xl md:text-7xl font-display font-black mb-6 tracking-tight italic">Marketing <span className="text-primary not-italic">Projects</span></h2>
              <p className="text-2xl text-muted-foreground font-medium max-w-2xl italic font-serif">Performance Campaigns, Social Media & Paid Advertising</p>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 md:gap-8 lg:gap-12">
            {digitalMarketingProjects.map((project, idx) => (
              <Reveal key={project.id} delay={idx * 0.1} direction="up">
                <ProjectCard project={project} onViewDetails={openModal} />
              </Reveal>
            ))}
          </div>
        </section>

        {/* Web Development Section */}
        <section id="web-development-projects" className="scroll-mt-48">
          <Reveal direction="left">
            <div className="mb-20">
              <h2 className="text-5xl md:text-7xl font-display font-black mb-6 tracking-tight italic">Web Development <span className="text-primary not-italic">Projects</span></h2>
              <p className="text-2xl text-muted-foreground font-medium max-w-2xl italic font-serif">Modern Web Systems Built for Performance & Scalability</p>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 md:gap-8 lg:gap-12">
            {webDevelopmentProjects.map((project, idx) => (
              <Reveal key={project.id} delay={idx * 0.1} direction="up">
                <ProjectCard project={project} onViewDetails={openModal} showLiveDemo />
              </Reveal>
            ))}
          </div>
        </section>

      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {isModalOpen && selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/95 backdrop-blur-3xl"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative w-full max-w-4xl bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-700 overflow-hidden max-h-[90vh] flex flex-col"
              onClick={e => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-30 p-2 rounded bg-gray-100 dark:bg-zinc-800 hover:bg-gray-200 dark:hover:bg-zinc-700 text-gray-800 dark:text-gray-200 transition-colors"
              >
                <X size={20} />
              </button>

              {/* Image Section */}
              <div className="w-full bg-gray-50 dark:bg-zinc-800 flex items-center justify-center p-4 md:p-5 h-[50vh] md:h-[60vh] overflow-hidden">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  loading="lazy"
                  className="max-w-full max-h-full w-auto h-auto object-contain"
                />
              </div>

              {/* Content Section */}
              <div className="flex-1 p-4 md:p-6 overflow-y-auto bg-white dark:bg-zinc-900">
                <div className="max-w-3xl mx-auto space-y-6">
                  {/* Project Title */}
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                      {selectedProject.title}
                    </h2>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {selectedProject.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-gray-300 text-xs font-medium uppercase tracking-wide">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Description */}
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 uppercase tracking-wide">
                      Overview
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">
                      {selectedProject.fullDescription}
                    </p>
                  </div>

                  {/* Tools */}
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 uppercase tracking-wide">
                      Technologies Used
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.toolsUsed.map(tool => (
                        <span key={tool} className="px-3 py-2 bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-gray-300 text-sm font-medium border border-gray-200 dark:border-zinc-700">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Live Link */}
                  {selectedProject.liveLink && (
                    <div className="pt-4 border-t border-gray-200 dark:border-zinc-700">
                      <Button
                        asChild
                        className="w-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
                      >
                        <a href={selectedProject.liveLink} target="_blank" rel="noopener noreferrer">
                          View Live Project
                        </a>
                      </Button>
                    </div>
                  )}

                  {/* Close Button */}
                  <div className="pt-4">
                    <Button
                      variant="outline"
                      className="w-full border-gray-300 dark:border-zinc-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-zinc-800 transition-colors"
                      onClick={closeModal}
                    >
                      Close
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
