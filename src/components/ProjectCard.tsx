import { Project } from '../data/projectsData';
import { cn } from '@/lib/utils';
import { useState, useEffect } from 'react';

interface ProjectCardProps {
  project: Project;
  onViewDetails: (project: Project) => void;
  /** When true, show "Live Demo" instead of "View Details" (Web Dev cards) */
  showLiveDemo?: boolean;
  /** When true, use the campaign artwork's portrait 9:16 aspect ratio */
  portrait?: boolean;
  /** When true, render card in smaller size */
  small?: boolean;
}

export const ProjectCard = ({ project, onViewDetails, showLiveDemo = false, portrait = false, small = false }: ProjectCardProps) => {
  const hasLiveLink = Boolean(project.liveLink);
  const hasMultipleImages = project.images && project.images.length > 1;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-rotate images every 2 seconds if not hovered
  useEffect(() => {
    if (!hasMultipleImages || isHovered) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % project.images!.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [hasMultipleImages, isHovered, project.images]);

  // Change image on hover
  useEffect(() => {
    if (!hasMultipleImages) return;

    if (isHovered) {
      setCurrentImageIndex((prev) => (prev + 1) % project.images!.length);
    }
  }, [isHovered, hasMultipleImages, project.images]);

  const currentImage = hasMultipleImages ? project.images![currentImageIndex] : project.image;

  return (
    <article
      onClick={() => onViewDetails(project)}
      className={cn(
        'group relative flex h-full flex-col overflow-hidden rounded-xl bg-card text-card-foreground cursor-pointer',
        'border border-border/50 shadow-md transition-all duration-300',
        'hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5',
        small ? 'rounded-lg' : ''
      )}
    >
      {/* Image: standard landscape or campaign portrait artwork */}
      <div className={cn(
        'relative overflow-hidden bg-muted',
        portrait ? 'aspect-[9/16]' : 'aspect-video'
      )}>
        <img
          src={currentImage}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* Title */}
      <div className={cn(small ? 'px-2 py-2 sm:px-2.5' : 'p-3')}>
        <h3 className={cn(
          'font-bold leading-tight text-foreground line-clamp-2',
          small ? 'text-[11px] sm:text-xs' : 'text-sm'
        )}>
          {project.title}
        </h3>
      </div>
    </article>
  );
};
