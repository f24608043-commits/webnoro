"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { Circle } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { useNavigate } from 'react-router-dom';

function ElegantShape({
    className,
    delay = 0,
    width = 400,
    height = 100,
    rotate = 0,
    gradient = "from-white/[0.08]",
    mouseX,
    mouseY,
}: {
    className?: string;
    delay?: number;
    width?: number;
    height?: number;
    rotate?: number;
    gradient?: string;
    mouseX?: any;
    mouseY?: any;
}) {
    // Parallax effect based on mouse position
    const x = useTransform(mouseX || useMotionValue(0), (val: number) => val * (width / 200));
    const y = useTransform(mouseY || useMotionValue(0), (val: number) => val * (height / 200));

    return (
        <motion.div
            initial={{
                opacity: 0,
                y: -150,
                rotate: rotate - 15,
            }}
            animate={{
                opacity: 1,
                y: 0,
                rotate: rotate,
            }}
            transition={{
                duration: 2.4,
                delay,
                ease: [0.23, 0.86, 0.39, 0.96],
                opacity: { duration: 1.2 },
            }}
            className={cn("absolute", className)}
            style={{ x, y }}
        >
            <motion.div
                animate={{
                    y: [0, 15, 0],
                }}
                transition={{
                    duration: 12,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                }}
                style={{
                    width,
                    height,
                }}
                className="relative"
            >
                <div
                    className={cn(
                        "absolute inset-0 rounded-full",
                        "bg-gradient-to-r to-transparent",
                        "from-[rgba(var(--hero-shape-color),var(--hero-shape-opacity))]",
                        "backdrop-blur-[2px] border-2 border-[rgba(var(--hero-shape-color),0.1)] shadow-[0_8px_32px_0_rgba(var(--hero-shape-color),0.05)]",
                        "after:absolute after:inset-0 after:rounded-full after:bg-[radial-gradient(circle_at_50%_50%,rgba(var(--hero-shape-color),0.1),transparent_70%)]"
                    )}
                />
            </motion.div>
        </motion.div>
    );
}

export function HeroGeometric({
    badge = "We Help eCommerce Brands & Startups Scale Revenue Through Marketplace Management, Digital Marketing & AI Automation",
    title1 = "NEXA",
    title2 = "GROWTH",
}: {
    badge?: string;
    title1?: string;
    title2?: string;
}) {
    const navigate = useNavigate();
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const x = (e.clientX - window.innerWidth / 2) / 40;
            const y = (e.clientY - window.innerHeight / 2) / 40;

            mouseX.set(x);
            mouseY.set(y);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    const fadeUpVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                delay: 0.5 + i * 0.2,
                ease: [0.25, 0.4, 0.25, 1],
            },
        }),
    };

    return (
        <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[var(--hero-bg)] transition-colors duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-[rgba(var(--hero-shape-color),0.05)] via-transparent to-[rgba(var(--hero-shape-color),0.03)] blur-3xl opacity-30" />

            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Large Green Shape Top Left */}
                <ElegantShape
                    delay={0.3}
                    width={600}
                    height={140}
                    rotate={12}
                    className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
                    mouseX={mouseX}
                    mouseY={mouseY}
                />

                {/* Medium Teal Shape Bottom Right */}
                <ElegantShape
                    delay={0.5}
                    width={500}
                    height={120}
                    rotate={-15}
                    className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
                    mouseX={mouseX}
                    mouseY={mouseY}
                />

                {/* Small Green Shape Bottom Left */}
                <ElegantShape
                    delay={0.4}
                    width={300}
                    height={80}
                    rotate={-8}
                    className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
                    mouseX={mouseX}
                    mouseY={mouseY}
                />

                {/* Small Cyan Shape Top Right */}
                <ElegantShape
                    delay={0.6}
                    width={200}
                    height={60}
                    rotate={20}
                    className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
                    mouseX={mouseX}
                    mouseY={mouseY}
                />

                {/* Tiny Emerald Shape Top Left Center */}
                <ElegantShape
                    delay={0.7}
                    width={150}
                    height={40}
                    rotate={-25}
                    className="left-[20%] md:left-[25%] top-[5%] md:top-[10%]"
                    mouseX={mouseX}
                    mouseY={mouseY}
                />
            </div>

            <div className="relative z-10 container mx-auto px-4 md:px-6">
                <div className="max-w-5xl mx-auto text-center">
                    <motion.div
                        custom={0}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--hero-text-primary)]/[0.03] border border-[var(--hero-text-primary)]/[0.08] mb-8 md:mb-12"
                    >
                        <Circle className="h-2 w-2 fill-[var(--hero-text-accent)] text-[var(--hero-text-accent)]" />
                        <span className="text-sm text-[var(--hero-text-primary)]/60 tracking-wide font-medium">
                            {title1} {title2}
                        </span>
                    </motion.div>

                    <motion.div
                        custom={1}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <h1 className="text-6xl sm:text-7xl md:text-9xl font-bold mb-6 tracking-tighter">
                            <span className="text-[var(--hero-text-primary)] drop-shadow-2xl">
                                {title1}
                            </span>
                            <br />
                            <span className="text-[#064e3b] drop-shadow-[0_0_25px_rgba(6,78,59,0.2)]">
                                {title2}
                            </span>
                        </h1>
                    </motion.div>

                    <motion.div
                        custom={2}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <p className="text-lg md:text-2xl text-[var(--hero-text-primary)]/60 mb-12 leading-relaxed font-light tracking-wide max-w-3xl mx-auto">
                            {badge}
                        </p>
                    </motion.div>

                    <motion.div
                        custom={3}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                        className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                    >
                        <button
                            onClick={() => navigate('/contact')}
                            className="px-10 py-4 rounded-full bg-[#064e3b] text-white font-bold uppercase tracking-widest transition-all hover:scale-105 shadow-[0_0_20px_rgba(6,78,59,0.3)] hover:opacity-90"
                        >
                            Book Free Strategy Call
                        </button>

                        <button
                            onClick={() => navigate('/services')}
                            className="px-10 py-4 rounded-full border border-[#064e3b] text-[#064e3b] hover:bg-[#064e3b]/5 font-bold uppercase tracking-widest transition-all hover:scale-105 backdrop-blur-sm"
                        >
                            View Services
                        </button>
                    </motion.div>
                </div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-[var(--hero-bg)] via-transparent to-[var(--hero-bg)]/80 pointer-events-none" />
        </div>
    );
}
