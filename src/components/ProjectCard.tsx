import { ExternalLink, Eye } from 'lucide-react';
import { Button } from './ui/button';
import { Project } from '../data/projectsData';
import { cn } from '@/lib/utils';
import { useState, useEffect } from 'react';

interface ProjectCardProps {
  project: Project;
  onViewDetails: (project: Project) => void;
  /** When true, show "Live Demo" instead of "View Details" (Web Dev cards) */
  showLiveDemo?: boolean;
}

export const ProjectCard = ({ project, onViewDetails, showLiveDemo = false }: ProjectCardProps) => {
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
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        'group relative flex h-full flex-col overflow-hidden rounded-2xl bg-card text-card-foreground cursor-pointer',
        'border border-border/50 shadow-md transition-all duration-300',
        'hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5'
      )}
    >
      {/* Image: Full width on mobile with proper padding and object-fit */}
      <div className="relative aspect-[4/3] sm:aspect-video overflow-hidden rounded-t-xl bg-muted">
        <img
          src={currentImage}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
          loading="lazy"
          decoding="async"
        />
        {/* Tag badge */}
        <div className="absolute left-2 top-2 sm:left-3 sm:top-3">
          <span className="rounded-md bg-background/90 px-1.5 py-0.5 sm:px-2 sm:py-1 text-[8px] sm:text-[10px] font-semibold uppercase tracking-wide text-foreground backdrop-blur-sm">
            {project.tags[0] ?? project.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-2 sm:p-3 md:p-5">
        <h3 className="mb-1 sm:mb-2 text-xs sm:text-base md:text-lg font-bold leading-tight text-foreground line-clamp-1 sm:line-clamp-2">
          {project.title}
        </h3>
        <p className="mb-2 sm:mb-4 line-clamp-2 flex-1 text-[10px] sm:text-xs md:text-sm text-muted-foreground">
          {project.shortDescription}
        </p>

        {/* Buttons: always visible on mobile; on desktop can add opacity-0 group-hover:opacity-100 for fade-in */}
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
          {showLiveDemo && hasLiveLink ? (
            <Button
              asChild
              size="sm"
              className="rounded-md sm:rounded-lg md:rounded-xl bg-primary text-primary-foreground shadow-sm transition-opacity duration-300 hover:bg-primary/90 text-[10px] sm:text-xs md:text-sm px-2 py-1.5 sm:px-3 sm:py-2 md:px-4 md:py-2 md:opacity-90 md:group-hover:opacity-100"
            >
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink className="mr-1 sm:mr-1.5 md:mr-2 h-2.5 w-2.5 sm:h-3 sm:w-3 md:h-4 md:w-4" />
                Live Demo
              </a>
            </Button>
          ) : (
            <Button
              size="sm"
              variant="outline"
              className="rounded-md sm:rounded-lg md:rounded-xl transition-opacity duration-300 text-[10px] sm:text-xs md:text-sm px-2 py-1.5 sm:px-3 sm:py-2 md:px-4 md:py-2 md:opacity-90 md:group-hover:opacity-100"
              onClick={(e) => {
                e.stopPropagation();
                onViewDetails(project);
              }}
            >
              <Eye className="mr-1 sm:mr-1.5 md:mr-2 h-2.5 w-2.5 sm:h-3 sm:w-3 md:h-4 md:w-4" />
              View Details
            </Button>
          )}
        </div>
      </div>
    </article>
  );
};
