"use client";

import React, { Suspense } from "react";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import Footer from "@/components/ui/footer";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import SerifChar from "@/components/serifChar";
import mainImage from "@/public/images/remo/main.png";

function ReMoContent() {
  const searchParams = useSearchParams();
  const fromAllWorks = searchParams.get("from") === "all-works";

  const crumbs = fromAllWorks
    ? [{ label: "ALL WORKS", href: "/archive" }, { label: "REMO MOBILE" }]
    : [{ label: "REMO MOBILE" }];

  return (
    <main className="page-container page-container-study">
      <div className="flex flex-col gap-4 items-start w-full mx-auto">
        <Breadcrumbs crumbs={crumbs} />

        <article className="w-full flex flex-col gap-[5rem]">
          <section className="flex flex-col gap-[1.5rem]">
            <div className="flex flex-col gap-[0.75rem]">
              <h2>
                Speeding up teacher workflows to foster connection through
                reading
              </h2>
              <p className="b_serif">
                From January to April 2023, as a product designer, I worked with
                a team to launch a mobile app that connects teachers and
                students through reading. This was my first design experience,
                marking the beginning of my growth.
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

export default function ReMo() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ReMoContent />
    </Suspense>
  );
}
