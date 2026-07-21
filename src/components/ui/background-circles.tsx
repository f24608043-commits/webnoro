import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface BackgroundCirclesProps {
    title?: string;
    description?: string;
    variant?: "primary" | "secondary" | "tertiary";
    className?: string;
}

export function BackgroundCircles({
    title,
    description,
    variant = "primary",
    className,
}: BackgroundCirclesProps) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div
            className={cn(
                "relative flex h-full w-full items-center justify-center overflow-hidden bg-transparent",
                className
            )}
        >
            <div className="absolute inset-0 z-0 opacity-10">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-[#064e3b] opacity-20 blur-[100px]"></div>
            </div>
            <div className="z-10 flex flex-col items-center justify-center">
                <div
                    className="relative flex h-[300px] w-[300px] md:h-[420px] md:w-[420px] items-center justify-center rounded-full border border-white/5 bg-transparent shadow-[0_0_80px_rgba(0,0,0,0.2)]"
                >
                    <motion.div
                        animate={{
                            rotate: 360,
                        }}
                        transition={{
                            ease: "linear",
                            duration: 80,
                            repeat: Infinity,
                        }}
                        className="absolute inset-0 rounded-full border border-white/5 border-t-[#064e3b]/20"
                    />
                    <motion.div
                        animate={{
                            rotate: -360,
                        }}
                        transition={{
                            ease: "linear",
                            duration: 60,
                            repeat: Infinity,
                        }}
                        className="absolute inset-[20px] rounded-full border border-white/5 border-b-[#064e3b]/20"
                    />
                    <motion.div
                        animate={{
                            rotate: 360,
                        }}
                        transition={{
                            ease: "linear",
                            duration: 40,
                            repeat: Infinity,
                        }}
                        className="absolute inset-[40px] rounded-full border border-white/5 border-l-[#064e3b]/20"
                    />

                    <div className="absolute inset-[60px] rounded-full border border-white/10 bg-black/20 backdrop-blur-sm" />
                </div>
            </div>
        </div>
    );
}
