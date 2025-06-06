"use client";

import React, { useState, useEffect, Suspense } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Footer from "@/components/ui/footer";
import Link from "next/link";
import Image from "next/image";
import AccordionLikeButton from "@/components/ui/accordionLikeButton";
import HeaderMain from "@/components/ui/header";
import { useRouter } from "next/navigation";
import { getFeaturedProjects, Project } from "@/lib/data/projectData";
import FileSystemVisualizer from "@/components/fileSystemViz";
import ItemEntry from "@/components/ui/itemEntry";
import { HoverEffectWrapper } from "@/components/hoverEffectWrapper";
import { useHoverEffect } from "@/hooks/useHoverEffect";
import { allProjects } from "@/lib/data/projectData";
import { AnimatePresence, motion } from "framer-motion";
import Grid from "@/components/ui/grid";

function HomeContent() {
  const projectData = getFeaturedProjects();
  const years = Object.keys(projectData).sort((a, b) => Number(b) - Number(a));
  const initialYear = years[0];

  const [selectedButton, setSelectedButton] = useState<string>("home");
  const [selectedYear, setSelectedYear] = useState<string>(initialYear);
  const [selectedProject, setSelectedProject] = useState<Project | null>(() => {
    return projectData[initialYear]?.find((p) => p.num === "005") || null;
  });

  const router = useRouter();
  const [headerText, setHeaderText] = useState("Hey, I'm Romeet.");

  const { hoveredItem, handleMouseEnter, handleMouseLeave } = useHoverEffect();

  const [isLeaving, setIsLeaving] = useState(false);
  const [isGridLeaving, setIsGridLeaving] = useState(false);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setSelectedButton("home");
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined") {
        setHeaderText(
          window.innerWidth <= 470 ? "Romeet." : "Hey, I'm Romeet."
        );
      }
    };

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const handleButtonClick = (buttonName: string) => {
    setSelectedButton(buttonName);
    if (buttonName === "writing") {
      router.push("/writing");
    }
  };

  const handleProjectSelect = (projectId: string) => {
    const [year, num] = projectId.split("-");
    const project = projectData[year]?.find((p) => p.num === num);
    if (project) {
      setSelectedProject(project);
      setSelectedYear(year);
    }
  };

  const handleYearSelect = (year: string) => {
    setSelectedYear(year);
  };

  useEffect(() => {
    console.log("Page State Changed:", {
      selectedYear,
      selectedProject: selectedProject?.num,
    });
  }, [selectedYear, selectedProject]);

  const handleGridClick = () => {
    setIsLeaving(true);

    // Navigate after content fade completes
    setTimeout(() => {
      router.push("/growth");
    }, 200);
  };

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
            <p className="the-coffins font-italic">
              I am a UI/UX designer, bringing your ideas to life with a little
              style, a lot of sass, and zero dull moments!
            </p>
          </div>
        </section>

        <div className="w-full flex flex-col gap-[5rem]">
          {/* Grid Section */}
          <div className="w-full flex justify-center mx-auto px-12">
            <motion.div
              onClick={handleGridClick}
              className="cursor-pointer w-full"
              layoutId="expandingGrid"
              initial={{ opacity: 0 }}
              animate={{ opacity: isLoading ? 0 : 1 }}
              transition={{
                duration: 0.4,
                ease: [0.22, 1, 0.7, 1],
              }}
              style={{
                maxWidth: "29.4375rem",
                aspectRatio: "29.4375 / 21.3125",
                overflow: "hidden",
                position: "relative",
                outline: "none",
                border: "none",
              }}
            >
              <div className="absolute inset-[0] pointer-events-none z-10">
                {/* Top fade */}
                <div className="absolute top-[0rem] left-[0rem] right-[0rem] h-[2rem] bg-gradient-to-b from-background to-transparent" />
                {/* Bottom fade */}
                <div className="absolute bottom-[0rem] left-[0rem] right-[0rem] h-[2rem] bg-gradient-to-t from-background to-transparent" />
                {/* Left fade */}
                <div className="absolute top-[0rem] bottom-[0rem] left-[0rem] w-[2rem] bg-gradient-to-r from-background to-transparent" />
                {/* Right fade */}
                <div className="absolute top-[0rem] bottom-[0rem] right-[0rem] w-[2rem] bg-gradient-to-l from-background to-transparent" />
              </div>
              <motion.div
                layoutId="gridInner"
                className="w-full"
                style={
                  {
                    position: "absolute",
                    width: "142%",
                    aspectRatio: "40.6875 / 32.5625",
                    top: "-43%",
                    left: "-17%",
                    transformOrigin: "center center",
                    "--grid-color": "#E6E6E6",
                  } as any
                }
                initial={{ "--grid-color": "#E6E6E6" } as any}
                animate={{ "--grid-color": "#E6E6E6" } as any}
                transition={{
                  delay: 1.15,
                  duration: 0.6,
                  ease: [0.25, 0.85, 0.35, 0.95],
                }}
              >
                <Grid
                  rows={18}
                  cols={20}
                  noBorder={true}
                  playLoadingAnimation={!isLoading}
                />
              </motion.div>
            </motion.div>
          </div>

          {/* Projects Section */}
          <section className="w-full">
            {/* Desktop view (>=780px) */}
            <div className="hidden md:flex flex-row gap-[3rem] w-full">
              <div className="w-[17.5rem] mx-auto">
                <Accordion type="single" defaultValue={initialYear} collapsible>
                  {years.map((year) => (
                    <AccordionItem key={`year-${year}`} value={year}>
                      <AccordionTrigger onClick={() => handleYearSelect(year)}>
                        {year}
                      </AccordionTrigger>
                      <AnimatePresence initial={false} mode="wait">
                        {projectData[year].map((project) => (
                          <AccordionContent
                            key={`${year}-${project.num}`}
                            contentId={`${year}-${project.num}`}
                            onClick={() =>
                              handleProjectSelect(`${year}-${project.num}`)
                            }
                          >
                            {project.title}
                          </AccordionContent>
                        ))}
                      </AnimatePresence>
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
            {/* Mobile responsive code start */}
            <div className="md:flex flex-row gap-[3rem] w-full md:hidden">
              {/* <div className=" w-[100%] mx-auto">
                <Accordion type="single" defaultValue={initialYear} collapsible>
                  {years.map((year) => (
                    <AccordionItem key={`year-${year}`} value={year}>
                      <AccordionTrigger onClick={() => handleYearSelect(year)}>
                        {year}
                      </AccordionTrigger>
                      <AnimatePresence initial={false} mode="wait">
                        {projectData[year].map((project) => (
                          <AccordionContent
                            key={`${year}-${project.num}`}
                            contentId={`${year}-${project.num}`}
                            onClick={() =>
                              handleProjectSelect(`${year}-${project.num}`)
                            }
                          >
                            {project.title}
                          </AccordionContent>
                        ))}
                      </AnimatePresence>
                    </AccordionItem>
                  ))}
                  <AccordionLikeButton href="/archive">
                    VIEW ALL
                  </AccordionLikeButton>
                </Accordion>
              </div> */}
              {/* <FileSystemVisualizer
                selectedYear={selectedYear}
                projects={projectData[selectedYear] || []}
                selectedProject={selectedProject}
              /> */}
            </div>
            {/* Mobile responsive code end */}
          </section>
        </div>

        <Footer />
      </div>
    </main>
  );
}

export default function Home() {
  return (
    <Suspense fallback={null}>
      <HomeContent />
    </Suspense>
  );
}
