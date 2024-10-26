import React from 'react';

interface SeriffallbackCharProps {
  children: React.ReactNode;
}

const SeriffallbackChar: React.FC<SeriffallbackCharProps> = ({ children }) => {
  return <span className="font-jacques-francois">{children}</span>;
};

export default SeriffallbackChar;