"use client";

import React, { Suspense } from "react";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import Footer from "@/components/ui/footer";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import SerifChar from '@/components/serifChar';
import mainImage from '@/public/images/linkedin/main.png';

function LinkedInContent() {
  const searchParams = useSearchParams();
  const fromAllWorks = searchParams.get("from") === "all-works";

  const crumbs = fromAllWorks
    ? [
        { label: "ALL WORKS", href: "/archive" },
        { label: "LINKEDIN BRAND KIT" },
      ]
    : [{ label: "LINKEDIN BRAND KIT" }];

  return (
    <main className="page-container page-container-study">
      <div className="flex flex-col gap-4 items-start w-full mx-auto">
        <Breadcrumbs crumbs={crumbs} />

        <article className="w-full flex flex-col gap-[5rem]">
          <section className="flex flex-col gap-[1.5rem]">
            <div className="flex flex-col gap-[0.75rem]">
              <h2>
                Bringing brands to life with AI-enhanced marketing on LinkedIn
              </h2>
              <p className="b_serif">
                From May to August 2024, as a product design intern, I led a key initiative to design a feature that enabled marketers to create on-brand AI assets directly within LinkedIn<SerifChar>'</SerifChar>s Accelerate Campaign. You can read more about{" "}
                <a
                  href="https://business.linkedin.com/marketing-solutions/ads/linkedin-accelerate"
                  className="link-underline"
                  rel="noopener noreferrer"
                >
                  Accelerate
                </a>{" "}
                here.
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

          <section className="flex flex-col gap-5">
            <div className="flex flex-col gap-1">
              <h4>CONTEXT</h4>
              <h3>An unexpected switch up</h3>
              <p className="b_serif">
                Two weeks before our start date, an APM, a SWE intern, and I
                were reassigned to form an intern team to ship Brand Kit. At
                the time, it was just an idea with minimal progress across
                product, design, and engineering. It was up to the three of us to
                bring it to life—a challenge that was both exciting and
                daunting.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-col gap-1">
                <h3>Accelerate in a nutshell</h3>
                <p className="b_serif">
                  LinkedIn<SerifChar>'</SerifChar>s newest campaign format that leverages AI to drive faster results through smart targeting, streamlined campaign setup, and more.
                </p>
              </div>
              <div className="w-full inner-shadow-tertiary rounded-[0.375rem]">
                <video 
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full object-cover"
                >
                  <source src="/videos/accelerate.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </section>

          <div className="w-full h-[0.0625rem] bg-tertiary-color opacity-[0.6]"></div>

          <section className="flex flex-col gap-5">
            <div className="flex flex-col gap-1">
              <h4>PROBLEM</h4>
              <h3>Accelerate generates robotic, off-brand content</h3>
              <p className="b_serif">
                25% of users found the generated content off-brand, while 18% described it as generic or robotic, leading marketers to create branded assets outside the platform.
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <h4>GOAL</h4>
              <h3>Integrate company branding into Accelerate</h3>
              <p className="b_serif">
                Help marketers create higher-quality, on-brand content while keeping the magical feeling Accelerate currently has.
              </p>
            </div>
          </section>

          <div className="w-full h-[0.0625rem] bg-tertiary-color opacity-[0.6]"></div>

        </article>
        <div className="w-full h-[0.0625rem] bg-tertiary-color opacity-[0.6]"></div>
        <Footer />
      </div>
    </main>
  );
}

export default function LinkedIn() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LinkedInContent />
    </Suspense>
  );
}
