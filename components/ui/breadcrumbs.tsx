import React from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import ArrowLeftIcon from '@/public/images/icons/arrow-left.svg';
import ChevronRightIcon from '@/public/images/icons/chevron-right.svg';

interface Crumb {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  crumbs: Crumb[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ crumbs }) => {
  const router = useRouter();

  return (
    <section className="flex items-center gap-[0.25rem] w-full">
      <Button 
        onClick={() => router.back()} 
        className="flex items-center gap-[0.25rem] pl-[0.5rem]"
      >
        <ArrowLeftIcon className="w-3 h-3" />
        BACK
      </Button>
      {crumbs.map((crumb, index) => (
        <React.Fragment key={index}>
          <ChevronRightIcon className="w-3 h-3 text-tertiary-color" />
          <Button 
            variant={index === crumbs.length - 1 ? "selected" : "default"}
            className={index === crumbs.length - 1 ? "shadow-inset-tertiary" : ""}
            onClick={() => crumb.href && router.push(crumb.href)}
          >
            {crumb.label}
          </Button>
        </React.Fragment>
      ))}
      <div className="flex-grow mx-[0.25rem] mt-[0.625rem]">
        <div className="h-[0.0625rem] bg-tertiary-color opacity-[0.82]"></div>
      </div>
    </section>
  );
};

export default Breadcrumbs;
