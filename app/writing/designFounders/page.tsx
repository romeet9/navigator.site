'use client'

import React from 'react';
import Breadcrumbs from '@/components/ui/breadcrumbs';
import Footer from '@/components/ui/footer';
import SerifChar from "@/components/serifChar";
import { StaggerWrapper } from '@/components/staggerWrapper'; 
import { useStaggerAnimation } from '@/hooks/useStaggerAnimation';

export default function Rejection() {
  const { getTransition } = useStaggerAnimation({ baseDelay: 0.1 });

  return (
    <main className="page-container page-container-narrow">
      <div className="flex flex-col gap-4 items-start w-full mx-auto">
        <Breadcrumbs crumbs={[
          { label: "11-23-2024" }
        ]} />

        <article className="w-full flex flex-col gap-3">
          <StaggerWrapper {...getTransition(0)}>
            <section className="flex flex-col gap-[0.75rem]">
            <h2>Design founders</h2>
            <div className="flex flex-col gap-2">
            <p className="b_serif">
              A few weeks ago, I was scrolling through Twitter and came across a tweet by Aaron Epstein, a YC group partner, which said:           
            </p>
            <blockquote className="border-l-[0.125rem] border-tertiary-color pl-3 my-1">
              <p className="b_serif text-primary-light">
                <SerifChar>"</SerifChar>More designers should be founders. They already have so many of the skills needed to be great—strong user empathy, a focus on solving problems, a high bar for quality, and taste.
                
                <span className="block mt-2">
                  If you're a designer, what's preventing you from making the leap<SerifChar>?</SerifChar><SerifChar>"</SerifChar>
                </span>
              </p>
            </blockquote>
            <p className="b_serif">
              After thinking about this question, I wanted to share my perspective today.           
            </p>
            </div>
            </section>
          </StaggerWrapper>

          <StaggerWrapper {...getTransition(1)}>
            <section className="flex flex-col gap-1">
            <h3>My opinion on designers</h3>
            <div className="flex flex-col gap-2">
              <p className="b_serif">
                Before diving into my thoughts, I want to clarify how I define a designer. To me, a designer is someone who uses design as a medium to bridge the gap between user needs and solutions. They are detail-obsessed and hold themselves to a high bar for taste.
              </p>
            </div>
            </section>
          </StaggerWrapper>

          <StaggerWrapper {...getTransition(2)}>
            <section className="flex flex-col gap-1">
            <h3>Skills of a great founder</h3>
            <div className="flex flex-col gap-2">
              <p className="b_serif">
                Yes, designers possess many traits of great founders, notably their ability to deeply understand users and solve complex problems. However, these traits are not unique to designers<SerifChar>;</SerifChar> I would argue they are essential for any founder.
              </p>
              <p className="b_serif">
                In the toughest stage of startup building—the early, pre-product-market-fit (PMF) phase—nimbleness in execution is crucial. At this stage, the ability to build or sell often takes priority because it<SerifChar>'</SerifChar>s the best way to test hypotheses. Design often slows down the iteration cycle through the design tax.
              </p>
            </div>
            </section>
          </StaggerWrapper>

          <StaggerWrapper {...getTransition(3)}>
            <section className="flex flex-col gap-1">
            <h3>The design tax</h3>
            <div className="flex flex-col gap-2">
              <p className="b_serif">
                Designers inherently carry a "time tax" as a trade-off for product quality. While that tax is often justified, creating an MVP frequently requires setting aside aesthetics to focus on the core user experience.
              </p>
              <p className="b_serif">
                This is where obsessiveness and a high bar for taste becomes the enemy. What may seem like sloppiness to a designer is perfectly acceptable to the target user. The subconscious urge to fix things that look “off” slows down iteration.
              </p>
              <p className="b_serif">
                Today, component libraries like shadcn, DaisyUI, and MagicUI, and languages with predefined styles like Tailwind, enable founders to build functional and usable products without a design partner. 
              </p>
            </div>
            </section>
          </StaggerWrapper>

          <StaggerWrapper {...getTransition(4)}>
            <section className="flex flex-col gap-1">
            <h3>To the design founder</h3>
            <div className="flex flex-col gap-2">
              <p className="b_serif">
                After reading this, you might get the impression that I don<SerifChar>'</SerifChar>t believe designers should be founders, but that is simply not the case. A great designer<SerifChar>'</SerifChar>s strengths scale with the growth of the product.
              </p>
              <p className="b_serif">
                Design is a powerful differentiator that amplifies a product<SerifChar>'</SerifChar>s potency by creating experiences users find irresistible, trustworthy, delightful, and effortless. Having a design founder with a high bar for quality and taste is extremely powerful to the eventual success of a product. However, there are traits that are simply more critical in the trenches of pre-PMF product ideation.
              </p>
              <p className="b_serif">
                I believe that a design founder needs to transcend the role of a designer, let go of irrational perfectionism, and master the craft of nimble execution, whether by selling or building the barebones product. It<SerifChar>'</SerifChar>s a path few choose to take, but those who do are rewarded with a skill set that makes them unstoppable.
              </p>
            </div>
            </section>
          </StaggerWrapper>
        </article>
        <StaggerWrapper {...getTransition(3)} className="w-full">
          <div className="w-full h-[0.0625rem] bg-tertiary-color opacity-[0.6]"></div>
        </StaggerWrapper>
        <StaggerWrapper {...getTransition(4)} className="w-full">
          <Footer />
        </StaggerWrapper>
      </div>
    </main>
  );
}

