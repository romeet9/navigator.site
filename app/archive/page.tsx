'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import ItemEntry from '@/components/ui/itemEntry'
import Footer from '@/components/ui/footer'
import ArrowLeftIcon from '@/public/images/icons/arrow-left.svg'
import ChevronRightIcon from '@/public/images/icons/chevron-right.svg'
import { HoverEffectWrapper } from '@/components/hoverEffectWrapper'
import { useHoverEffect } from '@/hooks/useHoverEffect'
import { allProjects } from '@/lib/data/projectData';

export default function Archive() {
  const router = useRouter()
  const { hoveredItem, handleMouseEnter, handleMouseLeave } = useHoverEffect()

  return (
    <main className="page-container">
      <div className="flex flex-col gap-[1.625rem] items-start w-full mx-auto">
        <section className="flex items-center gap-[0.25rem] w-full">
          <Button 
            onClick={() => router.back()} 
            className="flex items-center gap-[0.25rem] pl-[0.5rem]"
          >
            <ArrowLeftIcon className="w-3 h-3" />
            BACK
          </Button>
          <ChevronRightIcon className="w-3 h-3 text-tertiary-color" />
          <Button variant="selected" className="shadow-inset-tertiary">ALL WORKS</Button>
          <div className="flex-grow mx-[0.25rem] mt-[0.625rem]">
            <div className="h-[0.0625rem] bg-tertiary-color opacity-[0.82]"></div>
          </div>
        </section>

        <div className="w-full">
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
        <Footer />
      </div>
    </main>
  )
}
