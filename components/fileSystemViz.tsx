import React from 'react';
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
  const folderWidth = 36.5;      // 584px
  const folderHeight = 27;       // 432px
  const topPadding = 2.8125;     // 45px
  const projectCardHeight = 21.9375;   // 351px
  
  const currentProject = selectedProject || projects[0];

  return (
    <motion.div 
      className="relative mx-auto"
      whileHover="hover"
      initial="initial"
      style={{ 
        width: `${folderWidth}rem`,
        height: `${folderHeight}rem`
      }}
    >
      <div 
        key={currentProject.num}
        className="absolute w-full h-full"
      >
        {/* Folder Background */}
        <div className="absolute w-full h-full">
          <Image
            src="/images/folder.svg"
            alt="Folder background"
            width={584}
            height={432}
            className="w-full h-full"
            style={{ objectFit: 'contain' }}
            priority
          />
        </div>

        {/* Project Card */}
        <motion.div 
          className="absolute w-full px-4"
          variants={{
            initial: { y: 0 },
            hover: { y: '-6rem' }
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          style={{ 
            paddingTop: `${topPadding}rem`,
            height: `${projectCardHeight + topPadding}rem`
          }}
        >
          <ProjectCard
            title={currentProject.title}
            svgSrc={currentProject.svgSrc}
            link={currentProject.href}
            isSmaller={false}
          />
        </motion.div>

        {/* Updated Folder Front */}
        <motion.div 
          className="absolute bottom-[0] w-full z-10"
          style={{
            transformOrigin: 'bottom',
            perspective: '1000px',
            transformStyle: 'preserve-3d'
          }}
          variants={{
            initial: { 
              rotateX: 0,
              skewX: 0,
              translateY: 0,
              translateZ: 0
            },
            hover: { 
              rotateX: -38,
              skewX: -8,
              translateY: 0,
              translateZ: 0
            }
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        > 
          <Image
            src="/images/folderFront.svg"
            alt="Folder front"
            width={584}
            height={300}
            className="w-full h-auto"
            priority
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default FileSystemVisualizer;
