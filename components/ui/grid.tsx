import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface GridProps {
  rows: number;
  cols: number;
  noBorder?: boolean;
  playLoadingAnimation?: boolean;
}

interface FallingCell {
  id: number;
  col: number;
  startTime: number;
  startRow: number;
}

const Grid: React.FC<GridProps> = ({ rows, cols, noBorder = false, playLoadingAnimation = false }) => {
  const [fallingCells, setFallingCells] = useState<FallingCell[]>([]);
  const [nextId, setNextId] = useState(0);
  const animationFrameRef = useRef<number>();
  const FALL_SPEED = 0.005; 

  useEffect(() => {
    const animate = () => {
      const now = performance.now();
      
      setFallingCells(prev => 
        prev.filter(cell => {
          const elapsedTime = now - cell.startTime;
          const currentRow = cell.startRow + elapsedTime * FALL_SPEED;
          return currentRow <= rows;
        })
      );

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [rows]);

  useEffect(() => {
    if (playLoadingAnimation) {
      // First animation at 300ms
      const timer1 = setTimeout(() => {
        handleHoverStart(3, 3);
      }, 200);

      // Second animation at 800ms
      const timer2 = setTimeout(() => {
        handleHoverStart(5, 6);
      }, 400);

      // Third animation at 1200ms
      const timer3 = setTimeout(() => {
        handleHoverStart(3, 6);
      }, 400);

      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
        clearTimeout(timer3);
      };
    }
  }, [playLoadingAnimation]);

  const handleHoverStart = (row: number, col: number) => {
    setFallingCells(prev => [...prev, {
      id: nextId,
      col,
      startRow: row,
      startTime: performance.now()
    }]);
    setNextId(prev => prev + 1);
  };

  const isHighlighted = (row: number, col: number) => {
    const now = performance.now();
    return fallingCells.some(cell => {
      const elapsedTime = now - cell.startTime;
      const currentRow = Math.floor(cell.startRow + elapsedTime * FALL_SPEED);
      return cell.col === col && currentRow === row;
    });
  };

  const BASE_CELL_SIZE = 4; // Base size in rem
  
  // Remove GAP_SIZE since we'll use borders instead
  const idealWidth = BASE_CELL_SIZE * cols;
  const idealHeight = BASE_CELL_SIZE * rows;

  // Add this to your Grid component's styles
  const gridStyles = {
    "--grid-color": "var(--color-border)",
    "& > div": {
      borderColor: "var(--grid-color)"
    }
  }

  return (
    <div 
      style={{ 
        backgroundColor: '#E6E6E6',
        padding: noBorder ? '0' : '1px',
        width: '100%',
        maxWidth: `${idealWidth}rem`,
        height: 'auto',
        outline: 'none',
        border: 'none',
        aspectRatio: `${idealWidth} / ${idealHeight}`,
      }}
    >
      <div 
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
          gridTemplateRows: `repeat(${rows}, minmax(0, 1fr))`,
          gap: 0, // Remove gap
          backgroundColor: '#E6E6E6',
          height: '100%',
          outline: 'none',
          border: 'none',
        }}
      >
        {Array.from({ length: rows * cols }).map((_, index) => {
          const row = Math.floor(index / cols);
          const col = index % cols;
          
          return (
            <motion.div
              key={`cell-${row}-${col}`}
              className="cursor-pointer bg-background"
              onHoverStart={() => handleHoverStart(row, col)}
              animate={{
                backgroundColor: isHighlighted(row, col)
                  ? '#FFFFFF'
                  : 'var(--color-background)',
              }}
              transition={{
                duration: 0.1,
                ease: "easeOut"
              }}
              style={{
                aspectRatio: '1/1',
                width: '100%',
                outline: 'none',
                borderRight: col < cols - 1 ? '1px solid var(--grid-color)' : 'none',
                borderBottom: row < rows - 1 ? '1px solid var(--grid-color)' : 'none',
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Grid;