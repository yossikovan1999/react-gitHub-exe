import { createContext, useContext, useState } from "react";
import useTimer from "../hooks/useTimer";

const GameContex = createContext();

export function useGameProvider() {
  return useContext(GameContex);
}

//=======================================
//          helper functions
//=======================================
function initializeBombs(grid, amountOfBombs, rows = 10, cols = 10) {
  let counter = 0;

  while (counter < amountOfBombs) {
    const row = Math.floor(Math.random() * rows);
    const col = Math.floor(Math.random() * cols);

    if (grid[row][col].bomb !== true) {
      grid[row][col].bomb = true;
      counter++;
    }
  }
}

function initializeBoard(rows = 10, cols = 10) {
  const grid = [];

  for (let row = 0; row < rows; row++) {
    const gridRow = [];
    for (let col = 0; col < cols; col++) {
      gridRow.push({ row: row, col: col, bomb: false, revealed: false });
    }

    grid.push(gridRow);
  }

  initializeBombs(grid, 5, 10, 10);

  return grid;
}

//=======================================
//            Game Provider
//=======================================
function GameProvider({ children }) {
  const [bombsCount, setBombsCount] = useState(5);
  const [board, setBoard] = useState(()=>initializeBoard());
  const { humanTime, timeLeft } = useTimer(3);

  const values = {
    bombsCount,
    setBombsCount,
    humanTime,
    timeLeft,
    board,
  };

  return <GameContex.Provider value={values}>{children}</GameContex.Provider>;
}

export default GameProvider;
