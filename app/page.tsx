"use client";

import React, { useState, useEffect } from "react";
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
import { AnimatePresence } from "framer-motion";
import Grid from "@/components/ui/grid";
import { motion } from "framer-motion";

export default function Home() {
  const projectData = getFeaturedProjects();
  const years = Object.keys(projectData).sort((a, b) => Number(b) - Number(a));
  const initialYear = years[0]; // Should be '2024'

  const [selectedButton, setSelectedButton] = useState<string>("home");
  const [selectedYear, setSelectedYear] = useState<string>(initialYear);
  const [selectedProject, setSelectedProject] = useState<Project | null>(() => {
    // Always default to LinkedIn project
    return projectData["2024"]?.find((p) => p.num === "005") || null;
  });
  const router = useRouter();
  const [headerText, setHeaderText] = useState("Hey, I'm Robert.");

  const { hoveredItem, handleMouseEnter, handleMouseLeave } = useHoverEffect();

  useEffect(() => {
    setSelectedButton("home");
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined") {
        setHeaderText(
          window.innerWidth <= 470 ? "Robert." : "Hey, I'm Robert."
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

  const handleButtonClick = (buttonName: string) => {
    setSelectedButton(
      buttonName === selectedButton ? selectedButton : buttonName
    );
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
    console.log("handleYearSelect:", { year });
    setSelectedYear(year);
  };

  useEffect(() => {
    console.log("Page State Changed:", {
      selectedYear,
      selectedProject: selectedProject?.num,
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
              I am a product designer obsessed with finding the simplest
              solution that leaves room for taste. Previously, I was at{" "}
              <a
                href="https://business.linkedin.com/marketing-solutions/ads/linkedin-accelerate"
                className="link-underline"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <sup>
                <Image
                  src="/images/icons/link.svg"
                  width={5}
                  height={5}
                  alt=""
                  className="ml-[0.15rem] translate-y-[0rem]"
                />
              </sup>{" "}
              reimagining the future of generative AI ads. In my past life, I
              engineered insulin delivery pods at{" "}
              <a
                href="https://www.bd.com/en-us"
                className="link-underline"
                rel="noopener noreferrer"
              >
                Becton Dickinson & Co
              </a>
              <sup>
                <Image
                  src="/images/icons/link.svg"
                  width={5}
                  height={5}
                  alt=""
                  className="ml-[0.15rem] translate-y-[0rem]"
                />
              </sup>
              .
            </p>
            <p className="b_mono">
              Apart from work, you'll find me exploring analog{" "}
              <Link
                href="https://twitter.com/robertkkan"
                className="link-underline"
                rel="noopener noreferrer"
                aria-label="My photography on Twitter"
              >
                photography
              </Link>
              <sup>
                <Image
                  src="/images/icons/link.svg"
                  width={5}
                  height={5}
                  alt=""
                  className="ml-[0.15rem] translate-y-[0rem]"
                />
              </sup>
              , though I still reach for digital sometimes. I also enjoy
              ideating novel product ideas and scrolling{" "}
              <a
                href="https://twitter.com/robertkkan"
                className="link-underline"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
              <sup>
                <Image
                  src="/images/icons/link.svg"
                  width={5}
                  height={5}
                  alt=""
                  className="ml-[0.15rem] translate-y-[0rem]"
                />
              </sup>{" "}
              a bit too much.
            </p>
          </div>
        </section>

        {/* Main Content Section */}
        <div className="w-full flex flex-col gap-[5rem]">
          {/* Grid Section */}
          <div className="w-full flex justify-center mx-auto">
            <motion.div 
              onClick={() => router.push('/growth')}
              className="cursor-pointer"
              style={{
                width: '28.375rem',    // 7 cells (4rem each) + 6 gaps (1px each) = 28rem + 0.375rem
                height: '20.25rem',    // 5 cells (4rem each) + 4 gaps (1px each) = 20rem + 0.25rem
                overflow: 'hidden',
                position: 'relative',
                outline: 'none',
                border: 'none'
              }}
              layoutId="expandingGrid"
            >
              <div style={{
                position: 'absolute',
                top: '-10rem',
                left: '-6rem',
              }}>
                <Grid rows={8} cols={10} noBorder={true} />
              </div>
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
          </section>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </main>
  );
}
