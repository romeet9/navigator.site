'use client'

import React from 'react';
import Breadcrumbs from '@/components/ui/breadcrumbs';
import Footer from '@/components/ui/footer';
import Image from 'next/image';
import mainImage from '@/public/images/clubsneu/main.png'; 

export default function Rejection() {
  return (
    <main className="page-container-study">
      <div className="flex flex-col gap-4 items-start w-full mx-auto">
        <Breadcrumbs crumbs={[
          { label: "CLUBSNEU DATABASE" }
        ]} />
        
        <article className="w-full flex flex-col gap-[5rem]">
          <section className="flex flex-col gap-4">
            <div className="flex flex-col gap-[0.75rem]">
              <h2>Community database focused on discovery and student-club connection</h2>
              <div className="flex flex-col gap-2">
                <p className="b_serif">
                  From March to December 2023, as the founding designer, I worked with an engineer to ship a new platform that helps Northeastern students discover and connect with clubs. Check out the <a href="https://github.com/festillis/clubsneu" className="link-underline" rel="noopener noreferrer">Github</a> here.          
                </p>
              </div>
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

          <section className="flex flex-col gap-1">
            <h3>Alumni biggest regret: not joining clubs</h3>
            <div className="flex flex-col gap-2">
              <p className="b_serif">
                During an alumni AMA, panelists were asked about their biggest regret at Northeastern. Surprisingly, they all shared the same one: not joining enough clubs. Having faced a similar issue, I decided to explore it further.
              </p>
            </div>
          </section>
        </article>
        <div className="w-full h-[0.0625rem] bg-tertiary-color opacity-[0.82]"></div>
        <Footer />
      </div>
    </main>
  );
}
