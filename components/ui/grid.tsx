import React from 'react';

interface GridProps {
  rows: number;
  cols: number;
  noBorder?: boolean;
}

const Grid: React.FC<GridProps> = ({ rows, cols, noBorder = false }) => {
  const cellSize = 4; // Always 4rem
  const maxContainerSize = (cellSize * cols) + ((1/16) * (cols + 1));
  const containerHeight = (cellSize * rows) + ((1/16) * (rows + 1));

  const handleCellClick = (row: number, col: number) => {
    console.log(`Clicked cell at row ${row}, col ${col}`);
  };

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
            <div
              key={`cell-${row}-${col}`}
              className="cursor-pointer bg-background"
              onClick={() => handleCellClick(row, col)}
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