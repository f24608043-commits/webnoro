import React, { useEffect, useRef } from 'react';
import { gsap } from '@/lib/gsap';

interface RevealProps {
    children: React.ReactNode;
    direction?: 'up' | 'down' | 'left' | 'right';
    delay?: number;
    duration?: number;
    className?: string;
    triggerOnce?: boolean;
}

export const Reveal: React.FC<RevealProps> = ({
    children,
    direction = 'up',
    delay = 0,
    duration = 0.8,
    className = "",
    triggerOnce = true,
}) => {
    const elementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const element = elementRef.current;
        if (!element) return;

        let x = 0;
        let y = 0;

        switch (direction) {
            case 'up': y = 50; break;
            case 'down': y = -50; break;
            case 'left': x = 50; break;
            case 'right': x = -50; break;
        }

        gsap.fromTo(
            element,
            {
                opacity: 0,
                x,
                y,
                visibility: 'hidden'
            },
            {
                opacity: 1,
                x: 0,
                y: 0,
                visibility: 'visible',
                duration,
                delay,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: element,
                    start: 'top 85%',
                    toggleActions: triggerOnce ? 'play none none none' : 'play none none reverse',
                },
            }
        );
    }, [direction, delay, duration, triggerOnce]);

    return (
        <div ref={elementRef} className={className} style={{ visibility: 'hidden' }}>
            {children}
        </div>
    );
};
