'use client'

import React, { useEffect, useState } from 'react';

interface FadeBottomWrapperProps {
  children: React.ReactNode;
}

const FadeBottomWrapper: React.FC<FadeBottomWrapperProps> = ({ children }) => {
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      const atBottom = windowHeight + scrollTop >= documentHeight - 10; // 10px threshold
      setIsAtBottom(atBottom);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial scroll position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`fade-bottom ${isAtBottom ? 'at-bottom' : ''}`}>
      {children}
    </div>
  );
};

export default FadeBottomWrapper;