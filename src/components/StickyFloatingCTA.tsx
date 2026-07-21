import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';
import { cn } from '@/lib/utils';

export const StickyFloatingCTA = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={cn(
        'fixed bottom-6 left-6 z-50',
        'transition-all duration-500 ease-out',
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      )}
    >
      <Button
        onClick={() => navigate('/contact')}
        className={cn(
          'rounded-full px-6 py-6 font-bold shadow-2xl transition-all duration-300',
          'bg-gradient-to-r from-primary to-primary/80 text-black',
          'hover:scale-110 hover:shadow-primary/40'
        )}
      >
        <Calendar className="w-5 h-5 mr-2" />
        Book Free Call
      </Button>
    </div>
  );
};
