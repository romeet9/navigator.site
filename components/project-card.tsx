import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  imageSrc: string;
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, imageSrc, link }) => {
  return (
    <div className="w-full max-w-[37rem] mx-auto">
      <div className="relative w-full pb-[69.75%] bg-fill rounded-[0.375rem] overflow-hidden">
        <a 
          href={link}
          className="absolute inset-[0rem] cursor-pointer"
        >
          <div className="absolute inset-[0rem] z-10 shadow-inset-tertiary rounded-[0.375rem] pointer-events-none"></div>
          <div className="absolute inset-[3.0625rem_0_0_3.625rem]">
            <Image
              src={imageSrc}
              alt={`${title} Mockup`}
              fill
              quality={100}
              unoptimized={true}
              className="object-cover subtle-shadow"
            />
          </div>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;