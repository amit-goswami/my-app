import Button from "../../components/button";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

interface IQuestion {
  id: string;
  question: string;
  options: { option: string; id: string; isCorrect: boolean }[];
  quizName: string;
}

interface IQuiz {
  id: string;
  quiz: IQuestion;
}

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
            <li key={j} className="">
              {i}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const DevelopmentFive = () => {
  const [quizApp, setQuizApp] = useState<IQuiz[]>([]);
  const [isAddingQuestion, setIsAddingQuestion] = useState(false);
  const [question, setQuestion] = useState<IQuestion>({
    id: uuidv4(),
    options: [
      {
        id: uuidv4(),
        isCorrect: false,
        option: "",
      },
      {
        id: uuidv4(),
        isCorrect: false,
        option: "",
      },
      {
        id: uuidv4(),
        isCorrect: false,
        option: "",
      },
      {
        id: uuidv4(),
        isCorrect: false,
        option: "",
      },
    ],
    question: "",
    quizName: "",
  });
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleAddQuestion = () => {
    setIsAddingQuestion(true);
  };

  const handleClick = (action: "I" | "D") => {
    if (action === "I") return setCurrentIndex((prev) => prev + 1);
    return setCurrentIndex((prev) => prev - 1);
  };

  const handleSubmit = () => {
    if (question) {
      const newQuestion = {
        id: uuidv4(),
        quiz: question,
      };
      const updatedQuiz = [...quizApp, newQuestion];
      setQuizApp(updatedQuiz);
    }
    setQuestion({
      id: uuidv4(),
      options: [
        {
          id: uuidv4(),
          isCorrect: false,
          option: "",
        },
        {
          id: uuidv4(),
          isCorrect: false,
          option: "",
        },
        {
          id: uuidv4(),
          isCorrect: false,
          option: "",
        },
        {
          id: uuidv4(),
          isCorrect: false,
          option: "",
        },
      ],
      question: "",
      quizName: "",
    });
    setIsAddingQuestion(false);
    setCurrentIndex(0);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    action: "QN" | "Q" | "O" | "IC",
    index?: number
  ) => {
    const { value } = e.target;

    if (action === "QN") {
      return setQuestion({
        ...question,
        quizName: value,
      });
    }

    if (action === "Q") {
      return setQuestion({
        ...question,
        question: value,
      });
    }

    if (action === "O") {
      if (!isNaN(Number(index))) {
        const updatedOptions = question.options.map((i, j) => {
          if (j === index) {
            return {
              ...i,
              option: value,
            };
          }
          return {
            ...i,
          };
        });

        return setQuestion({
          ...question,
          options: updatedOptions,
        });
      }
    }

    if (action === "IC") {
      if (!isNaN(Number(index))) {
        const updatedOptions = question.options.map((i, j) => {
          if (j === index) {
            return {
              ...i,
              isCorrect: Boolean(value),
            };
          }
          return {
            ...i,
            isCorrect: false,
          };
        });

        return setQuestion({
          ...question,
          options: updatedOptions,
        });
      }
    }
  };

  return (
    <div>
      <div>Five</div>
      <div className="bg-black flex flex-col space-y-2 items-center justify-center py-4">
        {!isAddingQuestion && (
          <Button onClick={() => handleAddQuestion()}>Add Question</Button>
        )}
        {isAddingQuestion &&
          Array(5)
            .fill(0)
            .map((_, j) => {
              if (j !== currentIndex) return null;
              return (
                <div className="flex flex-col gap-2" key={j}>
                  <div>
                    {j === 0 && (
                      <div className="flex flex-col gap-2">
                        <div>
                          <p>Quiz Name </p>
                          <input
                            type="text"
                            name="quizName"
                            className="border bg-gray-400"
                            value={question.quizName}
                            onChange={(e) => handleChange(e, "QN")}
                          />
                        </div>
                        <div>
                          <p>Question </p>
                          <input
                            type="text"
                            name="question"
                            className="border bg-gray-400"
                            value={question.question}
                            onChange={(e) => handleChange(e, "Q")}
                          />
                        </div>
                      </div>
                    )}
                    {j > 0 && (
                      <div className="flex flex-col gap-2">
                        <div>
                          Option {j} :{" "}
                          <input
                            type="text"
                            name="option"
                            className="border bg-gray-400"
                            value={question.options[j - 1].option}
                            onChange={(e) => handleChange(e, "O", j - 1)}
                          />
                        </div>
                        <div className="flex items-center justify-end gap-2">
                          <input
                            type="radio"
                            name="isCorrect"
                            checked={question.options[j - 1].isCorrect}
                            onChange={(e) => handleChange(e, "IC", j - 1)}
                          />
                          Is Correct
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    {currentIndex !== 0 && (
                      <Button onClick={() => handleClick("D")}>Prev</Button>
                    )}
                    {currentIndex !== 4 && (
                      <Button onClick={() => handleClick("I")}>Next</Button>
                    )}
                    {currentIndex === 4 && (
                      <Button onClick={() => handleSubmit()}>Submit</Button>
                    )}
                  </div>
                </div>
              );
            })}
        <ul>
          {quizApp.map((i, j) => (
            <li key={j}>{i.quiz.quizName}</li>
          ))}
        </ul>
      </div>
    </div>
  );
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
