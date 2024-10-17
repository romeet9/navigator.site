'use client'

import React from 'react';
import HeaderMain from '@/components/ui/header-main';
import Footer from '@/components/ui/footer';
import { useRouter } from 'next/navigation';

export default function Writing() {
  const [selectedButton, setSelectedButton] = React.useState<string>('writing');
  const router = useRouter();

  const handleButtonClick = (buttonName: string) => {
    setSelectedButton(buttonName);
    if (buttonName === 'home') {
      router.push('/');
    } else if (buttonName === 'writing') {
      router.push('/writing');
    }
  };

  return (
    <main className="page-container">
      <div className="flex flex-col gap-5 items-center w-full">
        <section className="flex flex-col gap-[0.75rem] w-full">
          <HeaderMain 
            headerText="Writing."
            selectedButton={selectedButton} 
            handleButtonClick={handleButtonClick}
          />
          <div className="flex flex-col w-full"> 

          </div>
        </section>

        {/* Add your writing content here */}

        <Footer />
      </div>
    </main>
  );
}
