import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface GridProps {
  rows: number;
  cols: number;
  noBorder?: boolean;
}

interface FallingCell {
  id: number;
  col: number;
  startTime: number;
  startRow: number;
}

const Grid: React.FC<GridProps> = ({ rows, cols, noBorder = false }) => {
  const [fallingCells, setFallingCells] = useState<FallingCell[]>([]);
  const [nextId, setNextId] = useState(0);
  const animationFrameRef = useRef<number>();
  const FALL_SPEED = 0.005; // Back to original speed

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

  const cellSize = 4; // Always 4rem
  const maxContainerSize = (cellSize * cols) + ((1/16) * (cols + 1));
  const containerHeight = (cellSize * rows) + ((1/16) * (rows + 1));

  return (
    <div 
      style={{ 
        backgroundColor: '#E6E6E6',
        padding: noBorder ? '0' : '1px',
        width: `${maxContainerSize}rem`,
        height: `${containerHeight}rem`,
        outline: 'none',
        border: 'none'
      }}
    >
      <div 
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${cols}, minmax(0, ${cellSize}rem))`,
          gridTemplateRows: `repeat(${rows}, minmax(0, ${cellSize}rem))`,
          gap: '1px',
          backgroundColor: '#E6E6E6',
          height: '100%',
          outline: 'none',
          border: 'none'
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
                border: 'none'
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Grid;