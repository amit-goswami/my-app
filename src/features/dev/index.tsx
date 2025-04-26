import { useEffect, useState } from "react";

const GRID = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
];

interface IIsValuePresent {
  selectedGrid: string[];
  rowIndex: number;
  colIndex: number;
}

interface IRenderGrid {
  isDisabled: boolean;
  selectedGrid: string[];
  setSelectedGrid: React.Dispatch<React.SetStateAction<string[]>>;
}

const isValuePresent = ({
  selectedGrid,
  rowIndex,
  colIndex,
}: IIsValuePresent) => {
  const val = `${rowIndex}${colIndex}`;
  const isPresent = selectedGrid && selectedGrid.find((item) => item === val);
  if (!isPresent) return false;
  return true;
};

const RenderGrid = ({
  isDisabled,
  selectedGrid,
  setSelectedGrid,
}: IRenderGrid) => {
  const handleGridSelect = (rowIndex: number, colIndex: number) => {
    const val = `${rowIndex}${colIndex}`;
    setSelectedGrid([...selectedGrid, val]);
  };

  return (
    <div className="flex items-center">
      {GRID.map((row, rowIndex) => {
        return (
          <div key={rowIndex}>
            {row.map((_, colIndex) => {
              return (
                <div
                  className={`h-12 w-12 flex items-center justify-center border border-gray-400 cursor-pointer ${
                    isValuePresent({
                      selectedGrid,
                      rowIndex,
                      colIndex,
                    })
                      ? "bg-green-800"
                      : ""
                  }`}
                  key={colIndex}
                  onClick={() =>
                    !isDisabled ? handleGridSelect(rowIndex, colIndex) : {}
                  }
                ></div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

const removeElement = (arr: string[]) => {
  const updatedArr = arr.slice(1);
  return updatedArr;
};

const Development = () => {
  const [selectedGrid, setSelectedGrid] = useState<string[]>([]);
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    let interval: number;

    const startRemoving = () => {
      setTimeout(() => {}, 400);

      interval = setInterval(() => {
        const updatedGrid = removeElement(selectedGrid);
        setSelectedGrid(updatedGrid);
        if (updatedGrid.length === 0) {
          setIsDisabled(false);
        }
      }, 200);
    };

    if (selectedGrid.length >= 9 || isDisabled) {
      setIsDisabled(true);
      startRemoving();
    }

    return () => clearInterval(interval);
  }, [isDisabled, selectedGrid]);

  return (
    <div className="bg-black">
      <RenderGrid
        isDisabled={isDisabled}
        selectedGrid={selectedGrid}
        setSelectedGrid={setSelectedGrid}
      />
    </div>
  );
};

export default Development;
