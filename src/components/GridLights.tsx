import React, { useState } from 'react';

interface Props {
  gridConfig: number[][];
}

interface CellProps {
  filled: boolean;
  activateCell: any;
  index: number;
}

const GridCell = ({ filled, activateCell, index }: CellProps) => {
  return (
    <button
      onClick={() => activateCell(index)}
      className={`w-32 h-0 pb-[100%] ${
        filled ? 'bg-green-500' : 'transparent'
      } border border-black mt-2 cursor-pointer`}
    ></button>
  );
};

const GridLights = ({ gridConfig }: Props) => {
  console.log('State Changed');

  const [order, setOrder] = useState<number[]>([]);

  const deactivateCell = () => {
    const interval = setInterval(() => {
      setOrder((originalOrder: number[]) => {
        const newOrder = originalOrder.slice();
        newOrder.pop();

        if (newOrder.length === 0) {
          clearInterval(interval);
        }

        return newOrder;
      });
    }, 300);
  };

  const activateCell = (index: number) => {
    const newOrder = [...order, index];
    setOrder(newOrder);
    console.log(newOrder);

    if (newOrder.length === gridConfig.flat(1).filter(Boolean).length) {
      // deactivate grid cells in reverse order
      deactivateCell();
    }
  };

  return (
    <div className="wrapper flex items-center justify-center">
      <div
        className="text-black w-full max-w-[300px] grid gap-4"
        style={{ gridTemplateColumns: `repeat(${gridConfig[0].length}, 1fr)` }}
      >
        {gridConfig?.flat(1).map((val, index) => {
          return val ? (
            <GridCell filled={order.includes(index)} activateCell={activateCell} index={index} />
          ) : (
            <span></span>
          );
        })}
      </div>
    </div>
  );
};

export default GridLights;
