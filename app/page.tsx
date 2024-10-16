'use client'

import React, { useState } from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/accordion"
import Footer from '@/components/ui/footer';
import Link from 'next/link';
import Image from 'next/image';
import AccordionLikeButton from '@/components/accordionLikeButton';
import HeaderMain from '@/components/ui/header-main';
import ProjectCard from '@/components/projectCard';

// Consider moving this to a separate file if it grows larger
const projectData = {
  '2024-1': { title: 'Linkedin Brand Kit', imageSrc: '/images/linkedin.png', link: '/linkedin-brand-kit' },
  '2024-2': { title: 'SearchNEU Notifications', imageSrc: '/images/searchneu.png', link: '/searchneu-notifications' },
  '2023-1': { title: 'ClubsNEU Student View', imageSrc: '/images/clubsneu.png', link: '/clubsneu-student-view' },
  '2023-2': { title: 'ReMo Teacher App', imageSrc: '/images/remo.png', link: '/remo-teacher-app' },
  '2023-3': { title: 'Udemy Personal Plan', imageSrc: '/images/udemy.png', link: '/udemy-personal-plan' },
};

export default function Home() {
  const [selectedButton, setSelectedButton] = useState<string>('home')
  const [selectedProject, setSelectedProject] = useState<string>('2024-1')

  const handleButtonClick = (buttonName: string) => {
    setSelectedButton(buttonName === selectedButton ? selectedButton : buttonName)
  }

  const handleProjectSelect = (projectId: string) => {
    setSelectedProject(projectId)
  }

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
              Previously, I was at <a href="https://business.linkedin.com/marketing-solutions/ads/linkedin-accelerate" className="link-underline-body" rel="noopener noreferrer">LinkedIn</a> reimagining 
              the future of generative AI ads. In my past life, I engineered insulin delivery pods at{' '} 
              <a href="https://www.bd.com/en-us" className="link-underline-body" rel="noopener noreferrer">Becton Dickinson & Co</a>. 
            </p>
            <p className="b_mono">
              Apart from work, you'll find me exploring analog{' '} 
              <Link href="https://twitter.com/robertkkan" className="link-underline-body" rel="noopener noreferrer" aria-label="My photography on Twitter">photography</Link>, 
              though I still reach for digital sometimes. I also enjoy ideating novel product ideas and scrolling{' '}
              <a href="https://twitter.com/robertkkan" className="link-underline-body" rel="noopener noreferrer">Twitter</a> a bit too much.
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
                defaultValue="item-2"
                collapsible
              >
                <AccordionItem value="item-1">
                  <AccordionTrigger>2025</AccordionTrigger>
                  <AccordionContent contentId="2025-1">
                    Coming Soon.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>2024</AccordionTrigger>
                  <AccordionContent contentId="2024-1" onClick={() => handleProjectSelect('2024-1')}>
                    Linkedin Brand Kit
                  </AccordionContent>
                  <AccordionContent contentId="2024-2" onClick={() => handleProjectSelect('2024-2')}>
                    SearchNEU Notifications
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>2023</AccordionTrigger>
                  <AccordionContent contentId="2023-1" onClick={() => handleProjectSelect('2023-1')}>
                    ClubsNEU Student View
                  </AccordionContent>
                  <AccordionContent contentId="2023-2" onClick={() => handleProjectSelect('2023-2')}>
                    ReMo Teacher App
                  </AccordionContent>
                  <AccordionContent contentId="2023-3" onClick={() => handleProjectSelect('2023-3')}>
                    Udemy Personal Plan
                  </AccordionContent>
                </AccordionItem>
                <AccordionLikeButton href="/archive">
                  VIEW ALL
                </AccordionLikeButton>
              </Accordion>
            </div>

            {/* Project Card */}
            {selectedProject && projectData[selectedProject as keyof typeof projectData] && (
              <ProjectCard 
                title={projectData[selectedProject as keyof typeof projectData].title}
                imageSrc={projectData[selectedProject as keyof typeof projectData].imageSrc}
                link={projectData[selectedProject as keyof typeof projectData].link}
              />
            )}
          </section>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </main>
  )
}
