'use client'

import React from 'react';
import HeaderMain from '@/components/ui/header';
import Footer from '@/components/ui/footer';
import { useRouter } from 'next/navigation';
import ItemEntry from '@/components/ui/itemEntry';
import { HoverEffectWrapper } from '@/components/hoverEffectWrapper';
import { useHoverEffect } from '@/hooks/useHoverEffect';

export default function Writing() {
  const [selectedButton, setSelectedButton] = React.useState<string>('writing');
  const router = useRouter();
  const { hoveredItem, handleMouseEnter, handleMouseLeave } = useHoverEffect();

  const handleButtonClick = (buttonName: string) => {
    setSelectedButton(buttonName);
    if (buttonName === 'home') {
      router.push('/');
    } else if (buttonName === 'writing') {
      router.push('/writing');
    }
  };

  // writing entries data
  const writingEntries = [
    { num: "001", title: "Fear and Confidence", date: "10-05-2024", href: "/writing/007-fear-and-confidence" },
    { num: "002", title: "Another Entry", date: "11-05-2024", href: "/writing/008-another-entry" },
    { num: "003", title: "Latest Entry", date: "12-05-2024", href: "/writing/009-latest-entry" },
  ];

  return (
    <main className="page-container">
      <div className="flex flex-col gap-[1.625rem] items-center w-full">
        <section className="flex flex-col gap-[0.75rem] w-full">
          <HeaderMain 
            headerText="Writing."
            selectedButton={selectedButton} 
            handleButtonClick={handleButtonClick}
          />
          <div className="flex flex-col w-full"> 
            {writingEntries.slice().reverse().map((entry) => (
              <HoverEffectWrapper
                key={entry.num}
                id={entry.num}
                hoveredItem={hoveredItem}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <ItemEntry
                  num={entry.num}
                  title={entry.title}
                  date={entry.date}
                  href={entry.href}
                />
              </HoverEffectWrapper>
            ))}
          </div>
        </section>
        <Footer />
      </div>
    </main>
  );
}
