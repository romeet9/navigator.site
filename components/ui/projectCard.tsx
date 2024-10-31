import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  svgSrc: string;
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, svgSrc, link }) => (
  <Link href={link} className="block w-full max-w-[36.5rem] mx-auto inner-shadow-tertiary rounded-[0.375rem]">
    <Image
      src={svgSrc}
      alt={`${title} Mockup`}
      width={584}
      height={438}
      className="w-full h-auto cursor-pointer bg-transparent"
    />
  </Link>
);

export default ProjectCard;
