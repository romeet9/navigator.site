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
import bucketThreeImage from "@/public/images/clubsneu/vi_bucket_3.png";
import bucketFourImage from "@/public/images/clubsneu/vi_bucket_4.png";
import bucketFiveImage from "@/public/images/clubsneu/vi_bucket_5.png";
import dataInfoOneImage from "@/public/images/clubsneu/data-info-1.png";
import dataInfoTwoImage from "@/public/images/clubsneu/data-info-2.png";
import dataInfoThreeImage from "@/public/images/clubsneu/data-info-3.png";
import dataInfoFourImage from "@/public/images/clubsneu/data-info-4.png";
import dataInfoFiveImage from "@/public/images/clubsneu/data-info-5.png";
import dpOneImage from "@/public/images/clubsneu/dp-1.png";
import dpTwoImage from "@/public/images/clubsneu/dp-2.png";
import dpThreeImage from "@/public/images/clubsneu/dp-3.png";
import dpFourImage from "@/public/images/clubsneu/dp-4.png";
import toolbarFinalImage from "@/public/images/clubsneu/toolbarFinal.png";
import cardImage from "@/public/images/clubsneu/clubCard.png";
import searchIterationImage from "@/public/images/clubsneu/searchIteration.png";
import searchFinalImage from "@/public/images/clubsneu/searchFinal.png";
import progressBarImage from "@/public/images/clubsneu/progress-bar.png";
import notiBarImage from "@/public/images/clubsneu/noti-bar.png";
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

          <StaggerWrapper {...getTransition(4)}>
            <section className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <div className="flex flex-col gap-2">
                  <h4>MY DESIGN PROCESS</h4>
                  <h3>📌 Every solution starts with clarity.</h3>
                  <p className="b_serif">
                    I don’t rush into design. I pause. Break things down. Ask
                    the right questions. That’s how I connect real problems to
                    real user needs—and design with purpose.
                  </p>
                  <div className="flex flex-col gap-2">
                    <div className="w-full inner-shadow-tertiary rounded-[0.375rem]">
                      <Image
                        src={dpOneImage}
                        alt="ClubsNEU main interface"
                        width={1200}
                        height={675}
                        layout="responsive"
                      />
                    </div>
                    <div className="w-full inner-shadow-tertiary rounded-[0.375rem]">
                      <Image
                        src={dpTwoImage}
                        alt="ClubsNEU main interface"
                        width={1200}
                        height={675}
                        layout="responsive"
                      />
                    </div>
                    <div className="w-full inner-shadow-tertiary rounded-[0.375rem]">
                      <Image
                        src={dpThreeImage}
                        alt="ClubsNEU main interface"
                        width={1200}
                        height={675}
                        layout="responsive"
                      />
                    </div>
                    <div className="w-full inner-shadow-tertiary rounded-[0.375rem]">
                      <Image
                        src={dpFourImage}
                        alt="ClubsNEU main interface"
                        width={1200}
                        height={675}
                        layout="responsive"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </StaggerWrapper>

          <StaggerWrapper {...getTransition(3)}>
            <section className="flex flex-col gap-5">
              <div className="flex flex-col gap-1">
                <h4>STEP - 1</h4>
                <h3>Let simplify the Problem Statement 🤔 . . . </h3>
                <p className="b_serif">
                  We need to simplify the problem statement and create small
                  buckets and specify the core problems.
                </p>
                <div className="w-full inner-shadow-tertiary rounded-[0.375rem]">
                  <Image
                    src={problemStatementImage}
                    alt="ClubsNEU main interface"
                    width={1200}
                    height={675}
                    layout="responsive"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex flex-col gap-1">
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
              <div className="flex flex-col gap-2">
                <div className="flex flex-col gap-1">
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
                  <h3>Fraud Concerns</h3>
                  <p className="b_serif">
                    Users may worry about the possibility of their identity
                    being misused for duplicate voting or other fraudulent
                    activities, which can diminish trust in the system.
                  </p>
                </div>
                <div className="w-full inner-shadow-tertiary rounded-[0.375rem]">
                  <Image
                    src={bucketThreeImage}
                    alt="ClubsNEU main interface"
                    width={1200}
                    height={675}
                    layout="responsive"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex flex-col gap-1">
                  <h3>Navigation & Usability</h3>
                  <p className="b_serif">
                    If the app is not intuitive, users might find it challenging
                    to complete the voting process, leading to abandoned
                    sessions or errors.
                  </p>
                </div>
                <div className="w-full inner-shadow-tertiary rounded-[0.375rem]">
                  <Image
                    src={bucketFourImage}
                    alt="ClubsNEU main interface"
                    width={1200}
                    height={675}
                    layout="responsive"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex flex-col gap-1">
                  <h3>Fear of Mistakes</h3>
                  <p className="b_serif">
                    Some users may fear making an error during the voting
                    process (like casting the wrong vote), which could
                    discourage them from completing the process altogether.
                  </p>
                </div>
                <div className="w-full inner-shadow-tertiary rounded-[0.375rem]">
                  <Image
                    src={bucketFiveImage}
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
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-1">
                  <h4>MY DESIGN PROCESS</h4>
                  <h3>🎯 Design starts with better questions.</h3>
                  <p className="b_serif">
                    Before pixels, I dig into the problem. I break it down, find
                    the friction, and ask sharp questions that reveal how users
                    think and feel. These insights shape everything I design.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                  <h4>QUESTION - 1</h4>
                  <h3>🧩 Verifying your identity isn’t always smooth.</h3>
                  <p className="b_serif">
                    Users often face friction with online systems when uploading
                    documents or completing verification steps.
                  </p>
                  <div className="w-full inner-shadow-tertiary rounded-[0.375rem]">
                  <Image
                    src={dataInfoOneImage}
                    alt="ClubsNEU main interface"
                    width={1200}
                    height={675}
                    layout="responsive"
                  />
                </div>
                </div>
              <div className="flex flex-col gap-2">
                <div className="flex flex-col gap-1">
                  <h4>QUESTION - 2</h4>
                  <h3>🚨 Trust issues run deep.</h3>
                  <p className="b_serif">
                    From fraud to vote duplication—users worry about their data
                    and votes being tampered with.
                  </p>
                </div>
                <div className="w-full inner-shadow-tertiary rounded-[0.375rem]">
                  <Image
                    src={dataInfoTwoImage}
                    alt="ClubsNEU main interface"
                    width={1200}
                    height={675}
                    layout="responsive"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex flex-col gap-1">
                  <h4>QUESTION - 3</h4>
                  <h3>🔐 Is the system safe?</h3>
                  <p className="b_serif">
                    Trust in digital platforms often hinges on how seamless or
                    secure the verification feels.
                  </p>
                </div>
                <div className="w-full inner-shadow-tertiary rounded-[0.375rem]">
                  <Image
                    src={dataInfoThreeImage}
                    alt="ClubsNEU main interface"
                    width={1200}
                    height={675}
                    layout="responsive"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex flex-col gap-1">
                  <h4>QUESTION - 4</h4>
                  <h3>🧭 Lost in the process.</h3>
                  <p className="b_serif">
                    If a task is confusing, most users just give up. Simplicity
                    is survival.
                  </p>
                </div>
                <div className="w-full inner-shadow-tertiary rounded-[0.375rem]">
                  <Image
                    src={dataInfoFourImage}
                    alt="ClubsNEU main interface"
                    width={1200}
                    height={675}
                    layout="responsive"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex flex-col gap-1">
                  <h4>QUESTION - 5</h4>
                  <h3>📩 “Was my vote cast?”</h3>
                  <p className="b_serif">
                    Users want confirmation. A simple message can ease doubts
                    and build trust.
                  </p>
                </div>
                <div className="w-full inner-shadow-tertiary rounded-[0.375rem]">
                  <Image
                    src={dataInfoFiveImage}
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
                <h4>FINAL DESIGNS TO SOLVE VERIFICATION COMPLEXITIES</h4>
                <h3>Progress Bar</h3>
                <p className="b_serif">
                  This is especially useful during delays, as it
                  reassures users that their data is being processed.
                </p>
              </div>
              <div className="flex flex-col gap-[3rem]">
                <div className="flex flex-col gap-1">
                  <div className="w-full inner-shadow-tertiary rounded-[0.375rem]">
                    <Image
                      src={progressBarImage}
                      alt="ClubsNEU main interface"
                      width={1200}
                      height={675}
                      layout="responsive"
                    />
                  </div>
                  <h4 className="text-primary-color-light">
                    Verification progress bar for clarity
                  </h4>
                </div>
              </div>
            </section>
          </StaggerWrapper>

          <StaggerWrapper {...getTransition(5)}>
            <section className="flex flex-col gap-2">
              <div className="flex flex-col gap-1">
                <h3>Real - Time notifications</h3>
                <p className="b_serif">
                  I added notifications to provide real-time updates about the
                  user’s actions—whether their data was correctly entered,
                  whether the OTP was sent successfully, etc. This direct
                  communication with users helps build trust and transparency.
                </p>
              </div>
              <div className="flex flex-col gap-[3rem]">
                <div className="flex flex-col gap-1">
                  <div className="w-full inner-shadow-tertiary rounded-[0.375rem]">
                    <Image
                      src={notiBarImage}
                      alt="ClubsNEU main interface"
                      width={1200}
                      height={675}
                      layout="responsive"
                    />
                  </div>
                  <h4 className="text-primary-color-light">
                    Real-time notifications build user trust.
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
