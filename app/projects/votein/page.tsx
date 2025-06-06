"use client";

import React, { Suspense } from "react";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import Footer from "@/components/ui/footer";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import SerifChar from "@/components/serifChar";
import mainImage from "@/public/images/votein/vi_intro.png";
import participationImage from "@/public/images/votein/participation.png";
import instagramImage from "@/public/images/votein/vi_core_user.png";
import problemStatementImage from "@/public/images/votein/vi_prb_state.png";
import anthologyImage from "@/public/images/votein/anthology.png";
import bucketOneImage from "@/public/images/votein/vi_bucket_1.png";
import bucketTwoImage from "@/public/images/votein/vi_bucket_2.png";
import bucketThreeImage from "@/public/images/votein/vi_bucket_3.png";
import bucketFourImage from "@/public/images/votein/vi_bucket_4.png";
import bucketFiveImage from "@/public/images/votein/vi_bucket_5.png";
import dataInfoOneImage from "@/public/images/votein/data-info-1.png";
import dataInfoTwoImage from "@/public/images/votein/data-info-2.png";
import dataInfoThreeImage from "@/public/images/votein/data-info-3.png";
import dataInfoFourImage from "@/public/images/votein/data-info-4.png";
import dataInfoFiveImage from "@/public/images/votein/data-info-5.png";
import dpOneImage from "@/public/images/votein/dp-1.png";
import dpTwoImage from "@/public/images/votein/dp-2.png";
import dpThreeImage from "@/public/images/votein/dp-3.png";
import dpFourImage from "@/public/images/votein/dp-4.png";
import toolbarFinalImage from "@/public/images/votein/toolbarFinal.png";
import cardImage from "@/public/images/votein/clubCard.png";
import searchIterationImage from "@/public/images/votein/searchIteration.png";
import searchFinalImage from "@/public/images/votein/searchFinal.png";
import progressBarImage from "@/public/images/votein/progress-bar.png";
import notiBarImage from "@/public/images/votein/noti-bar.png";
import idVerifyImage from "@/public/images/votein/id-verify.png";
import evmImage from "@/public/images/votein/evm-style.png";
import homeScreenImage from "@/public/images/votein/home-screen.png";
import veriImage from "@/public/images/votein/verification.png";
import leOneImage from "@/public/images/votein/le-1.png";
import leTwoImage from "@/public/images/votein/le-2.png";
import leThreeImage from "@/public/images/votein/le-3.png";
import leFourImage from "@/public/images/votein/le-4.png";
import finalClubPage from "@/public/images/votein/finalClub.png";
import finalMobile from "@/public/images/votein/finalMobile.png";
import { StaggerWrapper } from "@/components/staggerWrapper";
import { useStaggerAnimation } from "@/hooks/useStaggerAnimation";

function VoteinContent() {
  const searchParams = useSearchParams();
  const fromAllWorks = searchParams.get("from") === "all-works";

  const crumbs = fromAllWorks
    ? [{ label: "ALL WORKS", href: "/archive" }, { label: "votein DATABASE" }]
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
                  alt="votein main interface"
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
                  alt="votein main interface"
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
                        alt="votein main interface"
                        width={1200}
                        height={675}
                        layout="responsive"
                      />
                    </div>
                    <div className="w-full inner-shadow-tertiary rounded-[0.375rem]">
                      <Image
                        src={dpTwoImage}
                        alt="votein main interface"
                        width={1200}
                        height={675}
                        layout="responsive"
                      />
                    </div>
                    <div className="w-full inner-shadow-tertiary rounded-[0.375rem]">
                      <Image
                        src={dpThreeImage}
                        alt="votein main interface"
                        width={1200}
                        height={675}
                        layout="responsive"
                      />
                    </div>
                    <div className="w-full inner-shadow-tertiary rounded-[0.375rem]">
                      <Image
                        src={dpFourImage}
                        alt="votein main interface"
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
                    alt="votein main interface"
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
                    alt="votein main interface"
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
                    alt="votein main interface"
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
                    alt="votein main interface"
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
                    alt="votein main interface"
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
                    alt="votein main interface"
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
                    alt="votein main interface"
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
                    alt="votein main interface"
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
                    alt="votein main interface"
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
                    alt="votein main interface"
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
                    alt="votein main interface"
                    width={1200}
                    height={675}
                    layout="responsive"
                  />
                </div>
              </div>
            </section>
          </StaggerWrapper>

          {/* Design solution from here */}

          <StaggerWrapper {...getTransition(5)}>
            <section className="flex flex-col gap-2">
              <div className="flex flex-col gap-1">
                <h4>FINAL DESIGNS TO SOLVE VERIFICATION COMPLEXITIES</h4>
                <h3>Silence creates doubt.</h3>
                <p className="b_serif">
                  So I added a progress bar to show users exactly what’s
                  happening behind the scenes—because even a short wait feels
                  better when you know you’re not stuck.
                </p>
              </div>
              <div className="flex flex-col gap-[3rem]">
                <div className="flex flex-col gap-1">
                  <div className="w-full inner-shadow-tertiary rounded-[0.375rem]">
                    <Image
                      src={progressBarImage}
                      alt="votein main interface"
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
                <h3>Instant feedback. Clear updates.</h3>
                <p className="b_serif">
                  From OTPs sent to data errors flagged—I added real-time alerts
                  to keep users in the loop. Because when systems speak up,
                  users feel seen and secure.
                </p>
              </div>
              <div className="flex flex-col gap-[3rem]">
                <div className="flex flex-col gap-1">
                  <div className="w-full inner-shadow-tertiary rounded-[0.375rem]">
                    <Image
                      src={notiBarImage}
                      alt="votein main interface"
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

          <StaggerWrapper {...getTransition(5)}>
            <section className="flex flex-col gap-2">
              <div className="flex flex-col gap-1">
                <h3>Trust through transparency.</h3>
                <p className="b_serif">
                  Users can check their unique ID to confirm it was used—and see
                  exactly how. Who voted, for which party, and when. No
                  guesswork. No fraud. Just clarity.
                </p>
              </div>
              <div className="flex flex-col gap-[3rem]">
                <div className="flex flex-col gap-1">
                  <div className="w-full inner-shadow-tertiary rounded-[0.375rem]">
                    <Image
                      src={idVerifyImage}
                      alt="votein main interface"
                      width={1200}
                      height={675}
                      layout="responsive"
                    />
                  </div>
                  <h4 className="text-primary-color-light">
                    Helps voters confirm their vote was counted correctly,
                    reducing doubts and boosting confidence in the system.
                  </h4>
                </div>
              </div>
            </section>
          </StaggerWrapper>

          <StaggerWrapper {...getTransition(5)}>
            <section className="flex flex-col gap-2">
              <div className="flex flex-col gap-1">
                <h3>Familiarity builds confidence.</h3>
                <p className="b_serif">
                  Inspired by real voting machines, the design mirrors what
                  users already know—making it easier for everyone, especially
                  older or less tech-savvy users, to vote with ease.
                </p>
              </div>
              <div className="flex flex-col gap-[3rem]">
                <div className="flex flex-col gap-1">
                  <div className="w-full inner-shadow-tertiary rounded-[0.375rem]">
                    <Image
                      src={evmImage}
                      alt="votein main interface"
                      width={1200}
                      height={675}
                      layout="responsive"
                    />
                  </div>
                  <h4 className="text-primary-color-light">
                    Makes voting feel instantly familiar.
                  </h4>
                </div>
              </div>
            </section>
          </StaggerWrapper>

          <StaggerWrapper {...getTransition(5)}>
            <section className="flex flex-col gap-2">
              <div className="flex flex-col gap-1">
                <h3>Act fast, vote faster.</h3>
                <p className="b_serif">
                  A bold CTA on the homepage pushes urgency and lets users dive
                  straight into voting—no extra taps, no confusion.
                </p>
              </div>
              <div className="flex flex-col gap-[3rem]">
                <div className="flex flex-col gap-1">
                  <div className="w-full inner-shadow-tertiary rounded-[0.375rem]">
                    <Image
                      src={homeScreenImage}
                      alt="votein main interface"
                      width={1200}
                      height={675}
                      layout="responsive"
                    />
                  </div>
                  <h4 className="text-primary-color-light">
                    Reducing friction in navigation{" "}
                  </h4>
                </div>
              </div>
            </section>
          </StaggerWrapper>

          <StaggerWrapper {...getTransition(5)}>
            <section className="flex flex-col gap-2">
              <div className="flex flex-col gap-1">
                <h3>Tap. Scan. Verified.</h3>
                <p className="b_serif">
                  Biometric login (fingerprint & face) adds speed and security.
                  A progress bar and clear step-by-step cues reduce stress—so
                  users know exactly what’s working and what’s not.
                </p>
              </div>
              <div className="flex flex-col gap-[3rem]">
                <div className="flex flex-col gap-1">
                  <div className="w-full inner-shadow-tertiary rounded-[0.375rem]">
                    <Image
                      src={veriImage}
                      alt="votein main interface"
                      width={1200}
                      height={675}
                      layout="responsive"
                    />
                  </div>
                  <h4 className="text-primary-color-light">
                    No third-party, no tampering risks.{" "}
                  </h4>
                </div>
              </div>
            </section>
          </StaggerWrapper>

          <StaggerWrapper {...getTransition(4)}>
            <section className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <div className="flex flex-col gap-2">
                  <h4>MY LEARNINGS</h4>
                  <h3>📌 Every learning shapes better design decisions.</h3>
                  <p className="b_serif">
                    I don’t just simplify—I understand. From streamlining
                    verification to refining voting flows, I focus on clarity,
                    trust, and usability. I break down complexity, use familiar
                    patterns, and let user insights guide me—because great
                    design meets both functional and emotional needs.
                  </p>
                  <div className="flex flex-col gap-2">
                    <div className="w-full inner-shadow-tertiary rounded-[0.375rem]">
                      <Image
                        src={leOneImage}
                        alt="votein main interface"
                        width={1200}
                        height={675}
                        layout="responsive"
                      />
                    </div>
                    <div className="w-full inner-shadow-tertiary rounded-[0.375rem]">
                      <Image
                        src={leTwoImage}
                        alt="votein main interface"
                        width={1200}
                        height={675}
                        layout="responsive"
                      />
                    </div>
                    <div className="w-full inner-shadow-tertiary rounded-[0.375rem]">
                      <Image
                        src={leThreeImage}
                        alt="votein main interface"
                        width={1200}
                        height={675}
                        layout="responsive"
                      />
                    </div>
                    <div className="w-full inner-shadow-tertiary rounded-[0.375rem]">
                      <Image
                        src={leFourImage}
                        alt="votein main interface"
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

          
          <div className="w-full inner-shadow-tertiary rounded-[0.375rem]">
                    <Image
                      src={veriImage}
                      alt="votein main interface"
                      width={1200}
                      height={675}
                      layout="responsive"
                    />
                  </div>
          

           
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

export default function votein() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <VoteinContent />
    </Suspense>
  );
}
