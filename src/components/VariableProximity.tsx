import { useState, useRef, useCallback, MouseEvent } from 'react';
interface VariableProximityProps {
  text: string;
  className?: string;
  highlightClass?: string;
  radius?: number;
  maxWeight?: number;
  minWeight?: number;
}
export const VariableProximity = ({
  text,
  className = '',
  highlightClass = '',
  radius = 100,
  maxWeight = 900,
  minWeight = 400
}: VariableProximityProps) => {
  const containerRef = useRef<HTMLSpanElement>(null);
  const [charWeights, setCharWeights] = useState<number[]>(new Array(text.length).fill(minWeight));
  const handleMouseMove = useCallback((e: MouseEvent<HTMLSpanElement>) => {
    if (!containerRef.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    const mouseX = e.clientX - containerRect.left;
    const mouseY = e.clientY - containerRect.top;
    const chars = containerRef.current.querySelectorAll('.proximity-char');
    const newWeights: number[] = [];
    chars.forEach((char, index) => {
      const charRect = char.getBoundingClientRect();
      const charCenterX = charRect.left - containerRect.left + charRect.width / 2;
      const charCenterY = charRect.top - containerRect.top + charRect.height / 2;
      const distance = Math.sqrt(Math.pow(mouseX - charCenterX, 2) + Math.pow(mouseY - charCenterY, 2));

      // Calculate weight based on distance
      const weight = distance < radius ? maxWeight - distance / radius * (maxWeight - minWeight) : minWeight;
      newWeights[index] = Math.round(weight);
    });
    setCharWeights(newWeights);
  }, [radius, maxWeight, minWeight]);
  const handleMouseLeave = useCallback(() => {
    setCharWeights(new Array(text.length).fill(minWeight));
  }, [text.length, minWeight]);
  return <span ref={containerRef} className={`inline-block cursor-default ${className}`} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      {text.split('').map((char, index) => <span key={index} style={{
      fontWeight: charWeights[index],
      fontVariationSettings: `'wght' ${charWeights[index]}`
    }} className="">
          {char === ' ' ? '\u00A0' : char}
        </span>)}
    </span>;
};