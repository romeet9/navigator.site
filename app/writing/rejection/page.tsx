'use client'

import React from 'react';
import Breadcrumbs from '@/components/ui/breadcrumbs';
import Footer from '@/components/ui/footer';

export default function Rejection() {
  return (
    <main className="page-container page-container-narrow">
      <div className="flex flex-col gap-4 items-start w-full mx-auto">
        <Breadcrumbs crumbs={[
          { label: "10-10-2024" }
        ]} />
        
        <article className="w-full flex flex-col gap-3">
          <section className="flex flex-col gap-[0.75rem]">
            <h2>Rejection</h2>
            <div className="flex flex-col gap-2">
            <p className="b_serif">
              The most anxiety-inducing part of being an intern is waiting for that recruiter call after the internship ends. Yesterday, I got that call, and as the title suggests, I was rejected.             
            </p>
            <p className="b_serif">
              When I heard the news, I felt numb. In the back of my mind, I’d always hoped to take my last semester easy—focusing on my hobbies, designing at my own pace, and avoiding the constant stress of job hunting. But now, I’m back hunting and wanted to share a few thoughts.            
            </p>
            </div>
          </section>

          <section className="flex flex-col gap-1">
            <h3>The unpredictability of life</h3>
            <div className="flex flex-col gap-2">
              <p className="b_serif">
                Sometimes, despite your best efforts, life boils down to luck. You put your best foot forward, work long hours, and earn glowing recommendations from mentors and managers. Yet, there are always factors beyond your control.
              </p>
              <p className="b_serif">
                Yes, it’s unfair. The best thing you can do is carry your growth into the next opportunity.
              </p>
            </div>
          </section>

          <section className="flex flex-col gap-1">
            <h3>Running with rejection</h3>
            <div className="flex flex-col gap-2">
              <p className="b_serif">
                I’d been meaning to refine my portfolio for a while, but for the past month, I’d been futzing around—collecting inspiration and tinkering with my existing layout, trying to make something work. Now, I’ve decided to create a new concept. I’m moving away from Webflow and putting my computer science degree to work.
              </p>
              <p className="b_serif">
                Writing is something I’ve always wanted to improve on, and now I can proudly say I’ve started. I’m even giving it center stage in my new portfolio. There’s something about personal reflection and documenting growth that really interests me. Hopefully, it can help others too.
              </p>
              <p className="b_serif">
                To improve my writing, I’ve been reading <span className="italic-text">On Writing Well</span> by William Zinsser. It’s an insightful book and currently lives on my bedside table.
              </p>
              <p className="b_serif">
                It’s only been a day, but I’m already feeling optimistic about the future. Right now, I’m fixated on growth and documenting the exciting journey ahead.
              </p>
            </div>
          </section>
        </article>
        <div className="w-full h-[0.0625rem] bg-tertiary-color opacity-[0.6]"></div>
        <Footer />
      </div>
    </main>
  );
}

