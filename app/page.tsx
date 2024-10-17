'use client'

import React, { useState, useEffect } from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Footer from '@/components/ui/footer';
import Link from 'next/link';
import Image from 'next/image';
import AccordionLikeButton from '@/components/ui/accordionLikeButton';
import HeaderMain from '@/components/ui/header';
import ProjectCard from '@/components/ui/projectCard';
import { useRouter } from 'next/navigation';
import { getFeaturedProjects } from '@/lib/data/projectData';

export default function Home() {
  const [selectedButton, setSelectedButton] = useState<string>('home')
  const [selectedProject, setSelectedProject] = useState<string>('2024-005')
  const router = useRouter();

  useEffect(() => {
    setSelectedButton('home');
  }, []);

  const handleButtonClick = (buttonName: string) => {
    setSelectedButton(buttonName === selectedButton ? selectedButton : buttonName)
    if (buttonName === 'writing') {
      router.push('/writing');
    }
  }

  const handleProjectSelect = (projectId: string) => {
    setSelectedProject(projectId)
  }

  const projectData = getFeaturedProjects();
  const years = Object.keys(projectData).sort((a, b) => Number(b) - Number(a));

  return (
    <main className="page-container">
      <div className="flex flex-col gap-5 items-center w-full">
        {/* Introduction Section */}
        <section className="flex flex-col gap-2 w-full">
          <HeaderMain 
            headerText="Hey, I'm Robert."
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
              src="/images/grid.png"
              alt="Robert playing tennis"
              width={496}
              height={496}
              quality={100}
              className="w-full rounded-[0.25rem] object-cover"
            />
          </div>

          {/* Projects Section */}
          <section className="flex flex-row gap-[3rem] w-full">
            {/* Accordion */}
            <div className="w-[18rem] mx-auto md:block hidden">
              <Accordion 
                type="single"  
                defaultValue={years[0]}
                collapsible
              >
                {years.map((year) => (
                  <AccordionItem key={year} value={year}>
                    <AccordionTrigger>{year}</AccordionTrigger>
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

            {/* Project Card */}
            {selectedProject && (() => {
              const [year, num] = selectedProject.split('-');
              const project = projectData[year]?.find(p => p.num === num);
              if (project) {
                return (
                  <ProjectCard 
                    title={project.title}
                    imageSrc={project.imageSrc || ''}
                    link={project.href}
                  />
                );
              }
              return null;
            })()}
          </section>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </main>
  )
}
