import { useEffect, useRef } from 'react';

interface SquaresProps {
  speed?: number;
  squareSize?: number;
  direction?: 'diagonal' | 'left' | 'right' | 'up' | 'down';
  borderColor?: string;
  hoverFillColor?: string;
  className?: string;
  pointerEvents?: 'none' | 'auto' | 'all' | 'inherit' | 'initial' | 'unset';
}

const Squares = ({
  speed = 0.5,
  squareSize = 40,
  direction = 'diagonal',
  borderColor = 'hsl(var(--primary))',
  hoverFillColor = 'hsl(var(--primary) / 0.1)',
  className = '',
  pointerEvents = 'auto',
}: SquaresProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const requestRef = useRef<number>();
  const mousePos = useRef({ x: -1000, y: -1000 });
  const offset = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseLeave = () => {
      mousePos.current = { x: -1000, y: -1000 };
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    const animate = () => {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update offset based on direction
      switch (direction) {
        case 'diagonal':
          offset.current.x += speed;
          offset.current.y += speed;
          break;
        case 'left':
          offset.current.x -= speed;
          break;
        case 'right':
          offset.current.x += speed;
          break;
        case 'up':
          offset.current.y -= speed;
          break;
        case 'down':
          offset.current.y += speed;
          break;
      }

      // Wrap offset to prevent overflow
      offset.current.x = offset.current.x % squareSize;
      offset.current.y = offset.current.y % squareSize;

      const cols = Math.ceil(canvas.width / squareSize) + 2;
      const rows = Math.ceil(canvas.height / squareSize) + 2;

      for (let i = -1; i < cols; i++) {
        for (let j = -1; j < rows; j++) {
          const x = i * squareSize + offset.current.x;
          const y = j * squareSize + offset.current.y;

          // Check if mouse is hovering over this square
          const isHovered =
            mousePos.current.x >= x &&
            mousePos.current.x < x + squareSize &&
            mousePos.current.y >= y &&
            mousePos.current.y < y + squareSize;

          if (isHovered) {
            ctx.fillStyle = hoverFillColor;
            ctx.fillRect(x, y, squareSize, squareSize);
          }

          ctx.strokeStyle = borderColor;
          ctx.lineWidth = 0.5;
          ctx.strokeRect(x, y, squareSize, squareSize);
        }
      }

      requestRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [speed, squareSize, direction, borderColor, hoverFillColor]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{
        display: 'block',
        pointerEvents: pointerEvents as any
      }}
    />
  );
};

export default Squares;
