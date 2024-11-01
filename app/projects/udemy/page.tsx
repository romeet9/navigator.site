"use client";

import React, { Suspense } from "react";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import Footer from "@/components/ui/footer";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import SerifChar from "@/components/serifChar";
import mainImage from "@/public/images/udemy/main.png";

function UdemyContent() {
  const searchParams = useSearchParams();
  const fromAllWorks = searchParams.get("from") === "all-works";

  const crumbs = fromAllWorks
    ? [{ label: "ALL WORKS", href: "/archive" }, { label: "UDEMY PERSONAL PLAN" }]
    : [{ label: "UDEMY PERSONAL PLAN" }];

  return (
    <main className="page-container page-container-study">
      <div className="flex flex-col gap-4 items-start w-full mx-auto">
        <Breadcrumbs crumbs={crumbs} />

        <article className="w-full flex flex-col gap-[5rem]">
          <section className="flex flex-col gap-[1.5rem]">
            <div className="flex flex-col gap-[0.75rem]">
              <h2>
                Streamline online learning with automation for a frictionless
                journey
              </h2>
              <p className="b_serif">
                From June to August 2023, I designed a feature that reduces
                decision fatigue by automating daily coursework, simulating a
                traditional classroom experience at home. This project was done
                as a design challenge and not for Udemy.
              </p>
            </div>
            <div className="w-full inner-shadow-tertiary rounded-[0.375rem]">
              <Image
                src={mainImage}
                alt="ClubsNEU main interface"
                width={1200}
                height={675}
                layout="responsive"
              />
            </div>
          </section>
        </article>
        <div className="w-full h-[0.0625rem] bg-tertiary-color opacity-[0.6]"></div>
        <Footer />
      </div>
    </main>
  );
}

export default function Udemy() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <UdemyContent />
    </Suspense>
  );
}
