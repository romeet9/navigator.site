'use client'

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"

export default function Home() {
  const [selectedButton, setSelectedButton] = useState<string | null>(null)

  const handleButtonClick = (buttonName: string) => {
    setSelectedButton(buttonName === selectedButton ? null : buttonName)
  }

  return (
    <div className="max-w-4xl mx-auto px-4">
      <section>
        <div className="flex flex-col gap-4">
          <h1>Hey, I'm Robert</h1>
          <div className="space-x-1 flex flex-wrap">
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
          </div>
        </div>
      </section>
    </div>
  )
}
