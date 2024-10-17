'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/button'
import ItemEntry from '@/components/ui/itemEntry'
import Footer from '@/components/ui/footer'
import ArrowLeftIcon from '@/public/images/icons/arrow-left.svg'
import ChevronRightIcon from '@/public/images/icons/chevron-right.svg'
import { HoverEffectWrapper } from '@/components/hoverEffectWrapper'
import { useHoverEffect } from '@/hooks/useHoverEffect'

// You can move this to a separate file and import it in both pages
const projectData = [
  { num: '005', title: 'Linkedin Brand Kit', date: '2024', href: '/linkedin-brand-kit' },
  { num: '004', title: 'SearchNEU Notifications', date: '2024', href: '/searchneu-notifications' },
  { num: '003', title: 'ClubsNEU for Students', date: '2023', href: '/clubsneu-student-view' },
  { num: '002', title: 'Udemy Personal Plan', date: '2023', href: '/udemy-personal-plan' },
  { num: '001', title: 'ReMo for Teachers', date: '2023', href: '/remo-teacher-app' },
]

export default function Archive() {
  const router = useRouter()
  const { hoveredItem, handleMouseEnter, handleMouseLeave } = useHoverEffect()

  return (
    <main className="page-container">
      <div className="flex flex-col gap-[1.625rem] items-start w-full mx-auto">
        <section className="flex items-center gap-[0.25rem] w-full">
          <Button onClick={() => router.back()} className="flex items-center gap-[0.25rem] pl-[0.5rem]">
            <ArrowLeftIcon className="w-3 h-3 text-secondary-color" />
            BACK
          </Button>
          <ChevronRightIcon className="w-3 h-3 text-tertiary-color" />
          <Button variant="selected">ALL WORKS</Button>
        </section>

        <div className="w-full">
          {projectData.map((project) => (
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
