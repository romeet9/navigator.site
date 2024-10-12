'use client'

import React, { useState } from 'react'
import { Button } from "@/components/button"
import Footer from '@/components/ui/footer';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const [selectedButton, setSelectedButton] = useState<string>('home')

  const handleButtonClick = (buttonName: string) => {
    setSelectedButton(buttonName === selectedButton ? selectedButton : buttonName)
  }

  return (
    <main className="page-container">
      <div className="flex flex-col gap-5 items-center w-full">
        <section className="flex flex-col gap-2 w-full">
          <div className="flex flex-row justify-between items-center w-full">
            <h1>Hey, I'm Robert.</h1>
            <nav className="flex flex-row gap-1">
              <Button 
                isSelected={selectedButton === 'home'}
                onClick={() => handleButtonClick('home')}
              >
                HOME
              </Button>
              <Button 
                isSelected={selectedButton === 'writing'}
                onClick={() => handleButtonClick('writing')}
              >
                WRITING
              </Button>
            </nav>
          </div>
          <div className="flex flex-col gap-2 w-full"> 
            <p className="b_mono">
              I am a product designer obsessed with finding the simplest solution that leaves room for taste. 
              Previously, I was at <a href="https://business.linkedin.com/marketing-solutions/ads/linkedin-accelerate" className="link-underline-body" rel="noopener noreferrer">LinkedIn</a> reimagining 
              the future of generative AI ads. In my past life, I engineered insulin delivery pods at{' '} 
              <a href="https://www.bd.com/en-us" className="link-underline-body" rel="noopener noreferrer">Becton Dickinson & Co</a>. 
            </p>
            <p className="b_mono">
              Apart from work, you'll find me exploring analog{' '} 
              <Link href="https://twitter.com/robertkkan" className="link-underline-body" rel="noopener noreferrer" aria-label="My photography on Twitter">photography</Link>, 
              though I still reach for digital sometimes. I also enjoy ideating novel product ideas and scrolling{' '}
              <a href="https://twitter.com/robertkkan" className="link-underline-body" rel="noopener noreferrer">Twitter</a> a bit too much.
            </p>
          </div>
        </section>
        <div className="w-full md:w-[30rem] mx-auto">
          <Image
            src="/images/tennis.png"
            alt="Robert playing tennis"
            width={496}
            height={496}
            className="rounded-[0.25rem] object-cover w-full h-auto"
          />
        </div>
        <Footer />
      </div>
    </main>
  )
}
