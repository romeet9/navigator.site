'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import ItemEntry from '@/components/ui/itemEntry'
import Footer from '@/components/ui/footer'
import { HoverEffectWrapper } from '@/components/hoverEffectWrapper'
import { useHoverEffect } from '@/hooks/useHoverEffect'
import { allProjects } from '@/lib/data/projectData';
import Breadcrumbs from '@/components/ui/breadcrumbs';

export default function Archive() {
  const router = useRouter()
  const { hoveredItem, handleMouseEnter, handleMouseLeave } = useHoverEffect()

  return (
    <main className="page-container">
      <div className="flex flex-col gap-[1.625rem] items-start w-full mx-auto">
        <Breadcrumbs crumbs={[{ label: "ALL WORKS" }]} />
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
