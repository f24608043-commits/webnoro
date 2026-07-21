import React, { useRef, useState, useEffect } from 'react';

interface TiltCardProps {
    children: React.ReactNode;
    className?: string;
    intensity?: number;
}

export const TiltCard: React.FC<TiltCardProps> = ({
    children,
    className = "",
    intensity = 15
}) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 1024);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (isMobile || !cardRef.current) return;

        const card = cardRef.current;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -intensity;
        const rotateY = ((x - centerX) / centerX) * intensity;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;

        // Dynamic shadow adjustment
        const shadowX = (x - centerX) / 10;
        const shadowY = (y - centerY) / 10;
        card.style.boxShadow = `${-shadowX}px ${-shadowY}px 30px rgba(0,0,0,0.3), 0 10px 20px rgba(0,0,0,0.2)`;
    };

    const handleMouseLeave = () => {
        if (!cardRef.current) return;
        cardRef.current.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
        cardRef.current.style.boxShadow = '';
    };

    return (
        <div
            ref={cardRef}
            className={`transition-all duration-300 ease-out will-change-transform ${className}`}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            {children}
        </div>
    );
};
