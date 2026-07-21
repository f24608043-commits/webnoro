import { useEffect, useState, forwardRef } from 'react';
import Squares from './Squares';

interface AnimatedSectionWrapperProps {
    children: React.ReactNode;
    className?: string;
    id?: string;
}

export const AnimatedSectionWrapper = forwardRef<HTMLElement, AnimatedSectionWrapperProps>(({
    children,
    className = "",
    id,
}, ref) => {
    const [theme, setTheme] = useState<'light' | 'dark'>(
        typeof document !== 'undefined' && document.documentElement.classList.contains('dark') ? 'dark' : 'light'
    );
    const [isInitialized, setIsInitialized] = useState(false);

    useEffect(() => {
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.attributeName === 'class') {
                    const isDark = document.documentElement.classList.contains('dark');
                    setTheme(isDark ? 'dark' : 'light');
                }
            });
        });

        observer.observe(document.documentElement, { attributes: true });

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        // Initialize background after a short delay to allow layout to settle
        const timer = setTimeout(() => {
            setIsInitialized(true);
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    const isDark = theme === "dark";

    return (
        <section ref={ref} id={id} className={`relative overflow-hidden ${className}`}>
            {/* Background Layer */}
            <div className={`absolute inset-0 z-0 pointer-events-none ${isInitialized ? 'opacity-70' : 'opacity-0'}`}>
                <Squares
                    direction="diagonal"
                    speed={0.4}
                    squareSize={48}
                    borderColor={isDark ? "#1f2937" : "#d1d5db"}
                    hoverFillColor={isDark ? "#0f172a" : "#f3f4f6"}
                    className="w-full h-full"
                />
            </div>

            {/* Content Layer */}
            <div className="relative z-10">
                {children}
            </div>
        </section>
    );
});

AnimatedSectionWrapper.displayName = 'AnimatedSectionWrapper';

export default AnimatedSectionWrapper;
