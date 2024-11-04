import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  svgSrc: string;
  link: string;
  isSmaller?: boolean;
  year?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, svgSrc, link, isSmaller }) => (
  <Link href={link} className="block w-full mx-auto">
    <div className="w-full h-full">
      <Image
        src={svgSrc}
        alt={`${title} Mockup`}
        width={525}
        height={390}
        className="w-full h-full"
        style={{ 
          objectFit: 'contain',
          maxHeight: '100%'
        }}
        priority
      />
    </div>
  </Link>
);

export default ProjectCard;
