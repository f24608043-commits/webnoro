"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import { Calendar, Code, FileText, User, Clock, Target, Zap, Award, BarChart3, Globe, Rocket } from "lucide-react";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";
import { Reveal } from '@/components/animations/Reveal';

const timelineData = [
  {
    id: 1,
    title: "Foundation",
    date: "2020",
    content: "Nexa Growth was founded with a vision to revolutionize e-commerce acceleration and digital transformation.",
    category: "Foundation",
    icon: Target,
    relatedIds: [2],
    status: "completed" as const,
    energy: 100,
  },
  {
    id: 2,
    title: "First Client",
    date: "2020",
    content: "Secured our first major e-commerce client and delivered 300% growth in 6 months.",
    category: "Milestone",
    icon: Award,
    relatedIds: [1, 3],
    status: "completed" as const,
    energy: 95,
  },
  {
    id: 3,
    title: "Team Expansion",
    date: "2021",
    content: "Expanded our team with elite marketers, developers, and e-commerce specialists.",
    category: "Growth",
    icon: User,
    relatedIds: [2, 4],
    status: "completed" as const,
    energy: 90,
  },
  {
    id: 4,
    title: "Tech Platform",
    date: "2021",
    content: "Launched our proprietary analytics and automation platform for marketplace optimization.",
    category: "Technology",
    icon: Code,
    relatedIds: [3, 5],
    status: "completed" as const,
    energy: 85,
  },
  {
    id: 5,
    title: "Global Expansion",
    date: "2022",
    content: "Expanded operations to 15+ countries and established strategic partnerships worldwide.",
    category: "Expansion",
    icon: Globe,
    relatedIds: [4, 6],
    status: "completed" as const,
    energy: 80,
  },
  {
    id: 6,
    title: "AI Integration",
    date: "2022",
    content: "Integrated advanced AI and machine learning capabilities into our service offerings.",
    category: "Innovation",
    icon: Zap,
    relatedIds: [5, 7],
    status: "completed" as const,
    energy: 75,
  },
  {
    id: 7,
    title: "Market Leadership",
    date: "2023",
    content: "Achieved market leadership position in multi-marketplace management and digital acceleration.",
    category: "Achievement",
    icon: BarChart3,
    relatedIds: [6, 8],
    status: "completed" as const,
    energy: 70,
  },
  {
    id: 8,
    title: "Next Chapter",
    date: "2024",
    content: "Launching new initiatives in Web3, metaverse commerce, and next-gen digital experiences.",
    category: "Future",
    icon: Rocket,
    relatedIds: [7],
    status: "in-progress" as const,
    energy: 60,
  },
];

export function CompanyTimeline() {
  return (
    <section className="py-32 bg-background/80 backdrop-blur-sm relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[800px] h-[800px] bg-primary rounded-full blur-[160px] animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-accent rounded-full blur-[140px] animate-pulse" />
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <Reveal direction="down">
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-primary/10 rounded-full text-primary font-bold text-sm mb-12 border border-primary/20 backdrop-blur-md uppercase tracking-widest">
                Our Journey
              </div>
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-display font-black mb-10 text-foreground tracking-tighter leading-none italic uppercase">Company <span className="text-primary not-italic">Timeline</span></h2>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-medium italic font-serif">
                From humble beginnings to industry leadership, trace our path of innovation and growth.
              </p>
            </div>
          </Reveal>
          <div className="relative h-[400px] md:h-[500px]">
            <RadialOrbitalTimeline timelineData={timelineData} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default CompanyTimeline;
