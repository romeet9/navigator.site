import React, { useEffect } from 'react';
import Image from 'next/image';
import { Project } from '@/lib/data/projectData';
import ProjectCard from '@/components/ui/projectCard';
import { motion } from 'framer-motion';

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
  useEffect(() => {
    console.log('FileSystemVisualizer State:', {
      selectedYear,
      selectedProject,
      projectYear: selectedProject?.num.split('-')[0],
      shouldShowFolder: selectedYear && (!selectedProject || selectedProject.num.split('-')[0] !== selectedYear)
    });
  }, [selectedYear, selectedProject]);

  const cardHeight = 24.375333;  // Height of a single card in rem
  const offsetPerCard = 0.75;    // Offset between cards in rem
  const folderPadding = 1.6875;  // Top padding of the folder
  
  // Remove folderPadding from this calculation since it's handled by the div
  const totalHeight = cardHeight + (projects.length - 1) * offsetPerCard;

  // Updated sorting logic to handle both selected project and year
  const sortedProjects = [...projects].sort((a, b) => {
    if (selectedProject) {
      if (a.num === selectedProject.num) return 1;
      if (b.num === selectedProject.num) return -1;
    }
    // If no project is selected, sort by most recent number
    return b.num.localeCompare(a.num);
  });

  return (
    <div className="relative w-[36.5rem] mx-auto overflow-visible" style={{ height: `${totalHeight + folderPadding}rem` }}>
      <div className="absolute w-full">
        <Image
          src="/images/folderOld.svg"
          alt="Folder background"
          width={584}
          height={423}
          className="object-contain bg-transparent"
          priority
        />
      </div>
      <div className="absolute w-full h-full">
        <div className="w-full h-[1.6875rem]" /> {/* Folder padding */}
        <div 
          className="relative" 
          style={{ height: `${totalHeight}rem` }} 
        >
          {sortedProjects.map((project, index) => (
            <div
              key={project.num}
              className={`absolute w-full transition-all duration-500`}
              style={{
                top: `${index * offsetPerCard}rem`,
                zIndex: index + 1,
              }}
            >
              <ProjectCard
                title={project.title}
                svgSrc={project.svgSrc}
                link={project.href}
                isSmaller={Boolean(selectedYear && (!selectedProject || selectedProject.date !== selectedYear))}
              />
            </div>
          ))}
        </div>
      </div>
      
      {selectedYear && (
        <motion.div 
          className="absolute bottom-[0rem] left-[0rem] w-full z-10 subtle-shadow"
          initial={{ rotateX: 0, scaleX: 1 }}
          animate={{
            rotateX: selectedProject?.date === (selectedYear) ? 40 : 0,
            // Scale slightly wider when rotated forward to simulate perspective
            scaleX: selectedProject?.date === (selectedYear) ? 1 : 1,
            skewX: selectedProject?.date === (selectedYear) ? 0 : 0,
          }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
            mass: 1,
          }}
          style={{
            transformOrigin: "bottom",
            transformStyle: "preserve-3d"
          }}
        > 
          <Image
            src="/images/folderFrontOld.svg"
            alt="Folder front"
            width={584}
            height={300}
            className="w-full object-contain bg-transparent"
            priority
          />
        </motion.div>
      )}
    </div>
  );
};

export default FileSystemVisualizer;
