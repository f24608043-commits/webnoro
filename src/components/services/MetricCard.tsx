import { useRef, useEffect } from 'react';
import { gsap, ScrollTrigger } from '@/lib/gsap';

interface MetricCardProps {
    label: string;
    value: string;
    suffix?: string;
    duration?: number;
}

export const MetricCard = ({ label, value, suffix = '', duration = 1 }: MetricCardProps) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const valueRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        if (!cardRef.current || !valueRef.current) return;

        const trigger = ScrollTrigger.create({
            trigger: cardRef.current,
            start: 'top 85%',
            once: true,
            onEnter: () => {
                // Animate card appearance
                gsap.from(cardRef.current, {
                    scale: 0.95,
                    opacity: 0,
                    duration: 0.5,
                    ease: 'power3.out'
                });

                // Animate number count-up
                const numericValue = parseFloat(value.replace(/[^0-9.]/g, ''));
                if (!isNaN(numericValue) && valueRef.current) {
                    gsap.to(valueRef.current, {
                        innerText: numericValue,
                        duration,
                        snap: { innerText: numericValue % 1 === 0 ? 1 : 0.1 },
                        ease: 'power2.out',
                        onUpdate: function () {
                            if (valueRef.current) {
                                const currentValue = parseFloat(valueRef.current.innerText);
                                valueRef.current.innerText = currentValue % 1 === 0
                                    ? Math.round(currentValue).toString()
                                    : currentValue.toFixed(1);
                            }
                        }
                    });
                }
            }
        });

        return () => {
            trigger.kill();
        };
    }, [value, duration]);

    return (
        <div
            ref={cardRef}
            className="rounded-2xl border border-neutral-800 bg-neutral-900/50 backdrop-blur-sm p-8 text-center
                 hover:-translate-y-1 transition-transform duration-300"
        >
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                <span ref={valueRef}>0</span>
                {suffix}
            </div>
            <div className="text-sm md:text-base text-neutral-400 uppercase tracking-wider">
                {label}
            </div>
        </div>
    );
};
