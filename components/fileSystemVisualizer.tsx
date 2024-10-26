import React from 'react';
import Image from 'next/image';
import { Project } from '@/lib/data/projectData';
import ProjectCard from '@/components/ui/projectCard';

interface FileSystemVisualizerProps {
  selectedYear: string;
  projects: Project[];
  selectedProject: Project | null;
}

const FileSystemVisualizer: React.FC<FileSystemVisualizerProps> = ({ 
  selectedYear, 
  projects,
  selectedProject 
}) => {
  // Calculate the total height based on the number of projects
  const cardHeight = 25.9; // Height of a single card in rem
  const offsetPerCard = 0.625; // 0.625rem (10px)
  const totalHeight = cardHeight + (projects.length - 1) * offsetPerCard;

  // Sort projects to put the selected project last (it will be rendered on top)
  const sortedProjects = [...projects].sort((a, b) => {
    if (a.num === selectedProject?.num) return 1;
    if (b.num === selectedProject?.num) return -1;
    return 0;
  });

  return (
    <div className="relative w-[36.5rem] mx-auto clip-content" style={{ height: `${totalHeight}rem` }}>
      <div className="absolute w-full">
        <Image
          src="/images/folder.svg"
          alt="Folder background"
          width={584}
          height={423}
          className="object-contain"
          priority
        />
      </div>
      <div className="absolute w-full h-full">
        <div className="w-full h-6" /> {/* This creates the absolute top padding */}
        <div 
          className="relative" 
          style={{ height: `calc(${totalHeight}rem - 1.5rem)` }} // Subtract the 1.5rem (24px) top padding
        >
          {sortedProjects.map((project, index) => (
            <div
              key={project.num}
              className={`absolute w-full transition-all duration-300 subtle-shadow`}
              style={{
                top: `${index * offsetPerCard}rem`,
                zIndex: index + 1,
              }}
            >
              <ProjectCard
                title={project.title}
                svgSrc={project.svgSrc}
                link={project.href}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FileSystemVisualizer;
