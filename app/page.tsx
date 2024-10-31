'use client'

import React, { useState, useEffect } from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Footer from '@/components/ui/footer';
import Link from 'next/link';
import Image from 'next/image';
import AccordionLikeButton from '@/components/ui/accordionLikeButton';
import HeaderMain from '@/components/ui/header';
import { useRouter } from 'next/navigation';
import { getFeaturedProjects, Project } from '@/lib/data/projectData';
import FileSystemVisualizer from '@/components/fileSystemVisualizer';
import ItemEntry from '@/components/ui/itemEntry';
import { HoverEffectWrapper } from '@/components/hoverEffectWrapper';
import { useHoverEffect } from '@/hooks/useHoverEffect';
import { allProjects } from '@/lib/data/projectData';

export default function Home() {
  const projectData = getFeaturedProjects();
  const years = Object.keys(projectData).sort((a, b) => Number(b) - Number(a));
  const initialYear = years[0]; // Should be '2024'
  const initialProject = projectData[initialYear][0]; // Should be the LinkedIn Brand Kit project

  const [selectedButton, setSelectedButton] = useState<string>('home');
  const [selectedYear, setSelectedYear] = useState<string>(initialYear);
  const [selectedProject, setSelectedProject] = useState<Project | null>(initialProject);
  const router = useRouter();
  const [headerText, setHeaderText] = useState("Hey, I'm Robert.");

  const { hoveredItem, handleMouseEnter, handleMouseLeave } = useHoverEffect();

  useEffect(() => {
    setSelectedButton('home');
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== 'undefined') {
        setHeaderText(window.innerWidth <= 470 ? "Robert." : "Hey, I'm Robert.");
      }
    };

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleButtonClick = (buttonName: string) => {
    setSelectedButton(buttonName === selectedButton ? selectedButton : buttonName)
    if (buttonName === 'writing') {
      router.push('/writing');
    }
  }

  const handleProjectSelect = (projectId: string) => {
    const [year, num] = projectId.split('-');
    const project = projectData[year]?.find(p => p.num === num);
    console.log('handleProjectSelect:', { year, num, project });
    if (project) {
      setSelectedProject(project);
      setSelectedYear(year);
    }
  }

  const handleYearSelect = (year: string) => {
    console.log('handleYearSelect:', { year });
    setSelectedYear(year);
  }

  useEffect(() => {
    console.log('Page State Changed:', {
      selectedYear,
      selectedProject: selectedProject?.num
    });
  }, [selectedYear, selectedProject]);

  return (
    <main className="page-container page-container-default">
      <div className="flex flex-col gap-5 items-center w-full">
        {/* Introduction Section */}
        <section className="flex flex-col gap-2 w-full">
          <HeaderMain 
            headerText={headerText}
            selectedButton={selectedButton} 
            handleButtonClick={handleButtonClick}
          />
          <div className="flex flex-col gap-2 w-full"> 
            <p className="b_mono">
              I am a product designer obsessed with finding the simplest solution that leaves room for taste. 
              Previously, I was at <a href="https://business.linkedin.com/marketing-solutions/ads/linkedin-accelerate" className="link-underline" rel="noopener noreferrer">LinkedIn</a> reimagining 
              the future of generative AI ads. In my past life, I engineered insulin delivery pods at{' '} 
              <a href="https://www.bd.com/en-us" className="link-underline" rel="noopener noreferrer">Becton Dickinson & Co</a>. 
            </p>
            <p className="b_mono">
              Apart from work, you'll find me exploring analog{' '} 
              <Link href="https://twitter.com/robertkkan" className="link-underline" rel="noopener noreferrer" aria-label="My photography on Twitter">photography</Link>, 
              though I still reach for digital sometimes. I also enjoy ideating novel product ideas and scrolling{' '}
              <a href="https://twitter.com/robertkkan" className="link-underline" rel="noopener noreferrer">Twitter</a> a bit too much.
            </p>
          </div>
        </section>

        {/* Main Content Section */}
        <div className="w-full flex flex-col gap-[5rem]">
          {/* Image Section */}
          <div className="w-full max-w-[28rem] mx-auto">
            <Image
              src="/images/grid2.png"
              alt="Robert playing tennis"
              width={496}
              height={496}
              quality={100}
              className="w-full rounded-[0.25rem] object-cover"
            />
          </div>

          {/* Projects Section */}
          <section className="w-full">
            {/* Desktop view (>=780px) */}
            <div className="hidden md:flex flex-row gap-[3rem] w-full">
              <div className="w-[17.5rem] mx-auto">
                <Accordion 
                  type="single"  
                  defaultValue={initialYear}
                  collapsible
                >
                  {years.map((year) => (
                    <AccordionItem key={year} value={year}>
                      <AccordionTrigger onClick={() => handleYearSelect(year)}>{year}</AccordionTrigger>
                      {projectData[year].map((project) => (
                        <AccordionContent 
                          key={project.num} 
                          contentId={`${year}-${project.num}`} 
                          onClick={() => handleProjectSelect(`${year}-${project.num}`)}
                        >
                          {project.title}
                        </AccordionContent>
                      ))}
                    </AccordionItem>
                  ))}
                  <AccordionLikeButton href="/archive">
                    VIEW ALL
                  </AccordionLikeButton>
                </Accordion>
              </div>
              <FileSystemVisualizer
                selectedYear={selectedYear}
                projects={projectData[selectedYear] || []}
                selectedProject={selectedProject}
              />
            </div>

            {/* Mobile view (<780px) */}
            <div className="md:hidden w-full">
              {allProjects.map((project) => (
                <HoverEffectWrapper
                  key={project.num}
                  id={project.num}
                  hoveredItem={hoveredItem}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <ItemEntry
                    num={project.num}
                    title={project.title}
                    date={project.date}
                    href={project.href}
                  />
                </HoverEffectWrapper>
              ))}
            </div>
          </section>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </main>
  )
}
