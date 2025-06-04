"use client";

import React, { Suspense } from "react";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import Footer from "@/components/ui/footer";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import SerifChar from "@/components/serifChar";
import mainImage from "@/public/images/clubsneu/vi_intro.png";
import participationImage from "@/public/images/clubsneu/participation.png";
import instagramImage from "@/public/images/clubsneu/vi_core_user.png";
import problemStatementImage from "@/public/images/clubsneu/vi_prb_state.png";
import anthologyImage from "@/public/images/clubsneu/anthology.png";
import bucketOneImage from "@/public/images/clubsneu/vi_bucket_1.png";
import bucketTwoImage from "@/public/images/clubsneu/vi_bucket_2.png";
import toolbarFinalImage from "@/public/images/clubsneu/toolbarFinal.png";
import cardImage from "@/public/images/clubsneu/clubCard.png";
import searchIterationImage from "@/public/images/clubsneu/searchIteration.png";
import searchFinalImage from "@/public/images/clubsneu/searchFinal.png";
import finalDatabase from "@/public/images/clubsneu/finalDatabase.png";
import finalClubPage from "@/public/images/clubsneu/finalClub.png";
import finalMobile from "@/public/images/clubsneu/finalMobile.png";
import { StaggerWrapper } from "@/components/staggerWrapper";
import { useStaggerAnimation } from "@/hooks/useStaggerAnimation";

function ClubsNEUContent() {
  const searchParams = useSearchParams();
  const fromAllWorks = searchParams.get("from") === "all-works";

  const crumbs = fromAllWorks
    ? [{ label: "ALL WORKS", href: "/archive" }, { label: "CLUBSNEU DATABASE" }]
    : [{ label: "VOTE - IN" }];

  const { getTransition } = useStaggerAnimation({ baseDelay: 0.1 });

  return (
    <main className="page-container page-container-study">
      <div className="flex flex-col gap-4 items-start w-full mx-auto">
        <Breadcrumbs crumbs={crumbs} />

        <article className="w-full flex flex-col gap-[5rem]">
          <StaggerWrapper {...getTransition(0)}>
            <section className="flex flex-col gap-[1.5rem]">
              <div className="flex flex-col gap-[0.75rem]">
                <h2>
                  India adopts secure centralized online voting to replace
                  traditional polling.
                </h2>
                <p className="b_serif">
                  The Government of India is shifting from offline voting to a
                  centralized online voting system. This digital platform will
                  allow citizens to register, verify their identity, and vote
                  securely online, eliminating physical polling stations while
                  ensuring transparency, preventing fraud, and avoiding
                  duplicate or unauthorized voting.
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
          </StaggerWrapper>

          <StaggerWrapper {...getTransition(1)}>
            <section className="flex flex-col gap-10">
              <div className="flex flex-col gap-1">
                <h4>CONTEXT & RESEARCH</h4>
                <h3>Core Users: Who We’re Here to Help</h3>
                <p className="b_serif">
                  A typical Indian citizen of voting age (18+) with basic
                  digital literacy. This user has access to a mobile phone or
                  computer with internet connectivity but may not be tech-savvy.
                  They want to exercise their right to vote but may face
                  challenges with digital processes due to limited exposure.
                </p>
              </div>
              <div className="w-full inner-shadow-tertiary rounded-[0.375rem]">
                <Image
                  src={instagramImage}
                  alt="ClubsNEU main interface"
                  width={1200}
                  height={675}
                  layout="responsive"
                />
              </div>
            </section>
          </StaggerWrapper>

          <StaggerWrapper {...getTransition(3)}>
            <section className="flex flex-col gap-5">
              <div className="flex flex-col gap-1">
                <h4>PROBLEM</h4>
                <h3>Let simplify the Problem Statement 🤔 . . . </h3>
                <p className="b_serif">
                  We need to simplify the problem statement and create small
                  buckets and specify the core problems.
                </p>
              </div>
              <div className="w-full inner-shadow-tertiary rounded-[0.375rem]">
                  <Image
                    src={problemStatementImage}
                    alt="ClubsNEU main interface"
                    width={1200}
                    height={675}
                    layout="responsive"
                  />
                </div>
              <div className="flex flex-col gap-2">
                <div className="flex flex-col gap-1">
                  <h4>BKCT - 1</h4>
                  <h3>Verification Complexity</h3>
                  <p className="b_serif">
                    Users may struggle with identity verification steps,
                    especially if they involve multiple documents. They would
                    become impatient while standing in the long queue.
                  </p>
                </div>
                <div className="w-full inner-shadow-tertiary rounded-[0.375rem]">
                  <Image
                    src={bucketOneImage}
                    alt="ClubsNEU main interface"
                    width={1200}
                    height={675}
                    layout="responsive"
                  />
                </div>
              </div>
            </section>
          </StaggerWrapper>

          <StaggerWrapper {...getTransition(4)}>
            <section className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <div className="flex flex-col gap-1">
                  <h4>BKCT - 2</h4>
                  <h3>Trust in Digital Systems</h3>
                  <p className="b_serif">
                    Users may feel apprehensive about the security and
                    transparency of the online voting process, fearing data
                    breaches, fraud, or that their vote won’t be counted
                    accurately.
                  </p>
                </div>
                <div className="w-full inner-shadow-tertiary rounded-[0.375rem]">
                  <Image
                    src={bucketTwoImage}
                    alt="ClubsNEU main interface"
                    width={1200}
                    height={675}
                    layout="responsive"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex flex-col gap-1">
                  <h3>Club card exploration</h3>
                  <p className="b_serif">
                    These cards show basic club info to encourage further
                    exploration. They greatly influenced ClubsNEU
                    <SerifChar>'</SerifChar>s visual design and underwent many
                    iterations.
                  </p>
                </div>
                <div className="w-full inner-shadow-tertiary rounded-[0.375rem]">
                  <Image
                    src={cardImage}
                    alt="ClubsNEU main interface"
                    width={1200}
                    height={675}
                    layout="responsive"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex flex-col gap-1">
                  <h3>Maximizing search efficiency</h3>
                  <p className="b_serif">
                    When clicking into a club card, we chose between loading a
                    new page or using a full screen overlay. The overlay proved
                    more efficient and simpler for browsing clubs.
                  </p>
                </div>
                <div className="w-full inner-shadow-tertiary rounded-[0.375rem]">
                  <Image
                    src={searchIterationImage}
                    alt="ClubsNEU main interface"
                    width={1200}
                    height={675}
                    layout="responsive"
                  />
                </div>
                <div className="w-full inner-shadow-tertiary rounded-[0.375rem]">
                  <Image
                    src={searchFinalImage}
                    alt="ClubsNEU main interface"
                    width={1200}
                    height={675}
                    layout="responsive"
                  />
                </div>
              </div>
            </section>
          </StaggerWrapper>

          <StaggerWrapper {...getTransition(5)}>
            <section className="flex flex-col gap-2">
              <div className="flex flex-col gap-1">
                <h4>FINAL DESIGNS</h4>
                <h3>An MVP ready for distribution</h3>
                <p className="b_serif">
                  With the database, club page, and onboarding completed, it was
                  time to pitch the product to clubs and students to test its
                  market fit.
                </p>
              </div>
              <div className="flex flex-col gap-[3rem]">
                <div className="flex flex-col gap-1">
                  <div className="w-full inner-shadow-tertiary rounded-[0.375rem]">
                    <Image
                      src={finalDatabase}
                      alt="ClubsNEU main interface"
                      width={1200}
                      height={675}
                      layout="responsive"
                    />
                  </div>
                  <h4 className="text-primary-color-light">
                    Simply search, filter, and discover clubs that match your
                    interests.
                  </h4>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="w-full inner-shadow-tertiary rounded-[0.375rem]">
                    <Image
                      src={finalClubPage}
                      alt="ClubsNEU main interface"
                      width={1200}
                      height={675}
                      layout="responsive"
                    />
                  </div>
                  <h4 className="text-primary-color-light">
                    Your go-to for club info, pulled from socials, calendars,
                    and websites.
                  </h4>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="w-full inner-shadow-tertiary rounded-[0.375rem]">
                    <Image
                      src={finalMobile}
                      alt="ClubsNEU main interface"
                      width={1200}
                      height={675}
                      layout="responsive"
                    />
                  </div>
                  <h4 className="text-primary-color-light">
                    Responsive design ensures ClubsNEU adapts seamlessly across
                    all devices.
                  </h4>
                </div>
              </div>
            </section>
          </StaggerWrapper>

          <StaggerWrapper {...getTransition(6)}>
            <section className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <h4>REFLECTION & RESULTS</h4>
                <h3>Distribution can break a product </h3>
                <p className="b_serif">
                  Poor distribution led to the sunsetting of ClubsNEU in early
                  2024. This was my first experience launching a product, and it
                  taught me a valuable lesson.
                </p>
              </div>
              <div className="flex flex-col gap-1">
                <h3>Don’t be afraid to iterate</h3>
                <p className="b_serif">
                  Focusing on a specific design can lead to attachment, but it’s
                  important to set aside sunk cost and iterate when needed to
                  build something great.
                </p>
              </div>
              <div className="flex flex-col gap-1">
                <h3>Scope creep hinders MVP development</h3>
                <p className="b_serif">
                  There were tons of features brainstormed that kept on pushing
                  the release date. For an MVP, limiting the scope early will
                  save time in the long run.
                </p>
              </div>
            </section>
          </StaggerWrapper>
        </article>
        <StaggerWrapper {...getTransition(7)} className="w-full">
          <div className="w-full h-[0.0625rem] bg-tertiary-color opacity-[0.6]"></div>
        </StaggerWrapper>
        <StaggerWrapper {...getTransition(8)} className="w-full">
          <Footer />
        </StaggerWrapper>
      </div>
    </main>
  );
}

export default function ClubsNEU() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ClubsNEUContent />
    </Suspense>
  );
}
