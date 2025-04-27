import Button from "../../components/button";
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
              const isChecked = isValuePresent({
                selectedGrid,
                rowIndex,
                colIndex,
              });
              return (
                <div
                  className={`h-12 w-12 flex items-center justify-center border border-gray-400 ${!isDisabled ? "cursor-pointer" : "cursor-not-allowed"} ${
                    isChecked ? "!bg-green-800" : ""
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

const DevelopmentOne = () => {
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

    if (selectedGrid.length === 9 || isDisabled) {
      setIsDisabled(true);
      startRemoving();
    }

    return () => clearInterval(interval);
  }, [isDisabled, selectedGrid]);

  return (
    <div>
      <div>One</div>
      <div className="bg-black flex items-center justify-center py-4">
        <RenderGrid
          isDisabled={isDisabled}
          selectedGrid={selectedGrid}
          setSelectedGrid={setSelectedGrid}
        />
      </div>
    </div>
  );
};

const DevelopmentTwo = () => {
  const [clock, setClock] = useState({
    hour: new Date().getHours(),
    min: new Date().getMinutes(),
    sec: new Date().getSeconds(),
  });

  useEffect(() => {
    const clockInterval = setInterval(() => {
      setClock({
        hour: new Date().getHours(),
        min: new Date().getMinutes(),
        sec: new Date().getSeconds(),
      });
    }, 200);
    return () => clearInterval(clockInterval);
  }, [clock]);

  return (
    <div>
      <div>Two</div>
      <div className="bg-black flex items-center justify-center py-4">
        {clock.hour} - {clock.min} - {clock.sec}
      </div>
    </div>
  );
};

const DevelopmentThree = () => {
  const [countMin, setCountMin] = useState<number>(0);
  const [countDown, setCountDown] = useState<number>(0);
  const [start, setStart] = useState<boolean>(false);
  const [laps, setLaps] = useState<string[]>([]);

  useEffect(() => {
    if (!start) return;

    const interval = setInterval(() => {
      const count = countDown + 1;
      if (count > 60) {
        setCountMin((prev) => {
          return prev + 1;
        });
        setCountDown(0);
      }
      setCountDown((prev) => {
        return prev + 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [countDown, start]);

  const handleReset = () => {
    setStart(false);
    setCountDown(0);
    setCountMin(0);
  };

  const handleStart = () => {
    setStart((prev) => !prev);
  };

  const handleCountLap = () => {
    const time = `${countMin}-${countDown}`;
    if (!countDown && !countMin) return;
    setLaps([time, ...laps]);
  };

  return (
    <div>
      <div>Three</div>
      <div className="bg-black flex flex-col space-y-2 items-center justify-center py-4">
        {countMin} - {countDown}
        <div className="flex gap-2 items-center justify-center">
          <Button onClick={() => handleCountLap()}>Count Lap</Button>
          <Button onClick={() => handleStart()}>
            {start ? "Stop" : "Start"}
          </Button>
          <Button onClick={() => handleReset()}>Reset</Button>
        </div>
        <ul>
          {laps.map((i, j) => (
            <li key={j}>{i}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const DevelopmentFour = () => {
  const [todo, setTodo] = useState<{
    input: string;
    list: string[];
  }>({
    input: "",
    list: [],
  });

  const handleAdd = () => {
    const text = todo.input;
    const list = [text, ...todo.list];

    setTodo({
      input: "",
      list: list,
    });
  };

  return (
    <div>
      <div>Four</div>
      <div className="bg-black flex flex-col space-y-2 items-center justify-center py-4">
        <div className="flex gap-2">
          <input
            type="text"
            name="input"
            value={todo.input}
            onChange={(e) => {
              const { value } = e.target;
              setTodo({
                input: value,
                list: todo.list,
              });
            }}
            className="border bg-gray-400"
          />
          <Button onClick={() => handleAdd()}>Add</Button>
        </div>
        <ul>
          {todo.list.map((i, j) => (
            <div key={j} className="">
              {i}
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

const DevelopmentFive = () => {
  return <></>;
};

const Development = () => {
  return (
    <div className="p-4 bg-black">
      <DevelopmentOne />
      <DevelopmentTwo />
      <DevelopmentThree />
      <DevelopmentFour />
      <DevelopmentFive />
    </div>
  );
};

export default Development;
