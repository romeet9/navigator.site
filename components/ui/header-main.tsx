import React from 'react';
import { Button } from "@/components/button"

interface HeaderMainProps {
  headerText: string;
  selectedButton: string;
  handleButtonClick: (buttonName: string) => void;
}

const HeaderMain: React.FC<HeaderMainProps> = ({ headerText, selectedButton, handleButtonClick }) => {
  return (
    <header className="w-full">
      <div className="flex flex-row justify-between items-center w-full">
        <h1>{headerText}</h1>
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
    </header>
  );
};

export default HeaderMain;
