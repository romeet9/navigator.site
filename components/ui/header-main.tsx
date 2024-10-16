import React from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/tabs";

interface HeaderMainProps {
  headerText: string;
  selectedButton: string;
  handleButtonClick: (buttonName: string) => void;
}

const HeaderMain: React.FC<HeaderMainProps> = ({
  headerText,
  selectedButton,
  handleButtonClick,
}) => {
  return (
    <header className="w-full">
      <div className="flex flex-row justify-between items-center w-full">
        <h1>{headerText}</h1>
        <nav className="flex flex-row gap-1">
          <Tabs defaultValue={selectedButton} onValueChange={handleButtonClick}>
            <TabsList>
              <TabsTrigger value="home">HOME</TabsTrigger>
              <TabsTrigger value="writing">WRITING</TabsTrigger>
            </TabsList>
          </Tabs>
        </nav>
      </div>
    </header>
  );
};

export default HeaderMain;
