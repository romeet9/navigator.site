'use client'

import React, { Suspense } from 'react';
import HeaderMain from '@/components/ui/header';
import Footer from '@/components/ui/footer';
import { useRouter, useSearchParams } from 'next/navigation';
import ItemEntry from '@/components/ui/itemEntry';
import { HoverEffectWrapper } from '@/components/hoverEffectWrapper';
import { useHoverEffect } from '@/hooks/useHoverEffect';
import { useStaggerAnimation } from '@/hooks/useStaggerAnimation';
import { StaggerWrapper } from '@/components/staggerWrapper';

function WritingContent() {
  const searchParams = useSearchParams();
  const isNavigatingBetweenPages = searchParams.get('from') === 'home';
  const router = useRouter();
  const [selectedButton, setSelectedButton] = React.useState<string>('writing');
  const { hoveredItem, handleMouseEnter, handleMouseLeave } = useHoverEffect();
  const { getTransition } = useStaggerAnimation({ baseDelay: 0.1 });

  const handleButtonClick = (buttonName: string) => {
    setSelectedButton(buttonName);
    if (buttonName === 'home') {
      router.push('/?from=writing');
    }
  };

  const writingEntries = [
    { num: "001", title: "Rejection", date: "10-10-2024", href: "/writing/rejection" },
    { num: "002", title: "Design Founders", date: "11-23-2024", href: "/writing/designFounders" },
    { num: "003", title: "Moving to NYC", date: "01-31-2025", href: "/writing/movingToNYC" }
  ];

  // Memoize the getTransition calls
  const transitions = React.useMemo(() => 
    writingEntries.map((_, index) => getTransition(index + 1)),
    [writingEntries.length] // Only recalculate if the number of entries changes
  );

  const headerTransition = React.useMemo(() => 
    getTransition(0),
    []
  );

  const footerTransition = React.useMemo(() => 
    getTransition(writingEntries.length + 1),
    [writingEntries.length]
  );

  return (
    <main className="page-container page-container-default">
      <div className="flex flex-col gap-[2.25rem] items-center w-full">
        <section className="flex flex-col gap-[0.75rem] w-full">
          <StaggerWrapper {...headerTransition} skipAnimation={isNavigatingBetweenPages}>
            <HeaderMain 
              headerText="Writing."
              selectedButton={selectedButton} 
              handleButtonClick={handleButtonClick}
            />
          </StaggerWrapper>
          
          <div className="flex flex-col w-full"> 
            {writingEntries.slice().reverse().map((entry, index) => (
              <StaggerWrapper key={entry.num} {...transitions[index]}>
                <HoverEffectWrapper
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
              </StaggerWrapper>
            ))}
          </div>
        </section>
        <StaggerWrapper {...footerTransition}>
          <Footer />
        </StaggerWrapper>
      </div>
    </main>
  );
}

export default function Writing() {
  return (
    <Suspense fallback={null}>
      <WritingContent />
    </Suspense>
  );
}
