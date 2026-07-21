import { useEffect, useRef, useState } from 'react';

interface FallingTextProps {
  text: string;
  highlightWords?: string[];
  trigger?: 'hover' | 'click' | 'auto';
  gravity?: number;
  fontSize?: string;
  className?: string;
}

interface Letter {
  char: string;
  x: number;
  y: number;
  vy: number;
  vx: number;
  rotation: number;
  vr: number;
  isHighlighted: boolean;
  originalX: number;
  originalY: number;
  isFalling: boolean;
}

export const FallingText = ({
  text,
  highlightWords = [],
  trigger = 'hover',
  gravity = 0.56,
  fontSize = '1.5rem',
  className = ''
}: FallingTextProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [letters, setLetters] = useState<Letter[]>([]);
  const [isFalling, setIsFalling] = useState(false);
  const animationRef = useRef<number>();

  useEffect(() => {
    if (!containerRef.current) return;

    const words = text.split(' ');
    let letterIndex = 0;
    const newLetters: Letter[] = [];

    words.forEach((word, wordIndex) => {
      const isHighlighted = highlightWords.some(hw => 
        word.toLowerCase().includes(hw.toLowerCase())
      );

      for (let i = 0; i < word.length; i++) {
        newLetters.push({
          char: word[i],
          x: 0,
          y: 0,
          vy: 0,
          vx: (Math.random() - 0.5) * 2,
          rotation: 0,
          vr: (Math.random() - 0.5) * 10,
          isHighlighted,
          originalX: 0,
          originalY: 0,
          isFalling: false
        });
        letterIndex++;
      }

      if (wordIndex < words.length - 1) {
        newLetters.push({
          char: ' ',
          x: 0,
          y: 0,
          vy: 0,
          vx: 0,
          rotation: 0,
          vr: 0,
          isHighlighted: false,
          originalX: 0,
          originalY: 0,
          isFalling: false
        });
      }
    });

    setLetters(newLetters);
  }, [text, highlightWords]);

  const startFalling = () => {
    if (isFalling) return;
    setIsFalling(true);

    setLetters(prev => prev.map((letter, index) => ({
      ...letter,
      isFalling: true,
      vy: Math.random() * 2,
      vx: (Math.random() - 0.5) * 3,
      vr: (Math.random() - 0.5) * 15
    })));
  };

  const resetLetters = () => {
    setIsFalling(false);
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
    setLetters(prev => prev.map(letter => ({
      ...letter,
      x: 0,
      y: 0,
      rotation: 0,
      vy: 0,
      vx: (Math.random() - 0.5) * 2,
      vr: (Math.random() - 0.5) * 10,
      isFalling: false
    })));
  };

  useEffect(() => {
    if (!isFalling) return;

    const animate = () => {
      setLetters(prev => {
        const updated = prev.map(letter => {
          if (!letter.isFalling || letter.char === ' ') return letter;

          const newVy = letter.vy + gravity;
          const newY = letter.y + newVy;
          const newX = letter.x + letter.vx;
          const newRotation = letter.rotation + letter.vr;

          return {
            ...letter,
            vy: newVy,
            y: newY,
            x: newX,
            rotation: newRotation
          };
        });

        const allFallen = updated.every(l => l.y > 100 || l.char === ' ');
        if (allFallen) {
          setTimeout(resetLetters, 300);
        }

        return updated;
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isFalling, gravity]);

  const handleInteraction = () => {
    if (trigger === 'hover' || trigger === 'click') {
      startFalling();
    }
  };

  return (
    <div
      ref={containerRef}
      className={`inline-flex flex-wrap cursor-pointer select-none ${className}`}
      style={{ fontSize }}
      onMouseEnter={trigger === 'hover' ? handleInteraction : undefined}
      onClick={trigger === 'click' ? handleInteraction : undefined}
      onMouseLeave={trigger === 'hover' ? resetLetters : undefined}
    >
      {letters.map((letter, index) => (
        <span
          key={index}
          className={`inline-block transition-opacity ${
            letter.isHighlighted ? 'text-cyan-400 font-bold' : ''
          }`}
          style={{
            transform: `translate(${letter.x}px, ${letter.y}px) rotate(${letter.rotation}deg)`,
            opacity: letter.y > 80 ? Math.max(0, 1 - (letter.y - 80) / 20) : 1,
            transition: letter.isFalling ? 'none' : 'all 0.3s ease-out',
            whiteSpace: letter.char === ' ' ? 'pre' : 'normal'
          }}
        >
          {letter.char}
        </span>
      ))}
    </div>
  );
};
