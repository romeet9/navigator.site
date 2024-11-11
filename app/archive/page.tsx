"use client";

import React from "react";
import { useRouter } from "next/navigation";
import ItemEntry from "@/components/ui/itemEntry";
import Footer from "@/components/ui/footer";
import { HoverEffectWrapper } from "@/components/hoverEffectWrapper";
import { useHoverEffect } from "@/hooks/useHoverEffect";
import { allProjects } from "@/lib/data/projectData";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import { useStaggerAnimation } from "@/hooks/useStaggerAnimation";
import { StaggerWrapper } from "@/components/staggerWrapper";

export default function Archive() {
  const router = useRouter();
  const { hoveredItem, handleMouseEnter, handleMouseLeave } = useHoverEffect();
  const { getTransition } = useStaggerAnimation({ baseDelay: 0.1 });

  return (
    <main className="page-container page-container-default">
      <div className="flex flex-col gap-[1.625rem] items-center w-full mx-auto">
        <Breadcrumbs crumbs={[{ label: "ALL WORKS" }]} />

        <StaggerWrapper {...getTransition(0)} className="w-full">
          {allProjects.map((project, index) => (
            <StaggerWrapper key={project.num} {...getTransition(index + 1)}>
              <HoverEffectWrapper
                id={project.num}
                hoveredItem={hoveredItem}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <ItemEntry
                  num={project.num}
                  title={project.title}
                  date={project.date}
                  href={`${project.href}?from=all-works`}
                />
              </HoverEffectWrapper>
            </StaggerWrapper>
          ))}
        </StaggerWrapper>

        <StaggerWrapper {...getTransition(allProjects.length + 1)}>
          <Footer />
        </StaggerWrapper>
      </div>
    </main>
  );
}
