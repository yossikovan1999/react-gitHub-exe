import "./Board.css";
import { useState } from "react";
import { useGameProvider } from "../../context/gameProvider";
import "./Board.css";

function Board() {
  const { board, setBoard, setBombsCount, gameOver } = useGameProvider();
  
  function handleClick(row, col) {
    
    //if it was previously revealed return.
    if (board[row][col].revealed) {
      return;
    }
    
    //update the bomb count if it is a bomb
    if(board[row][col].bomb){
        setBombsCount((prev)=>prev - 1);
    }
    
    //return a copy of the updated board.
    const newBoard = board.map((arr) => {
      return arr.map((item) => {
        console.log("here");

        if (item.row === row && item.col === col) {
          return { ...item, revealed: true };
        } else {
          return item;
        }
      });
    });

    setBoard(newBoard);
  }

  function createBoard() {
    const boardItems = [];

    for (let row = 0; row < 10; row++) {
      for (let col = 0; col < 10; col++) {
        if (board[row][col].bomb && board[row][col].revealed) {
          boardItems.push(<div key={`${row}-${col}`} className="bomb"></div>);
        } else if (!board[row][col].bomb && board[row][col].revealed) {
          boardItems.push(
            <div key={`${row}-${col}`} className="revealed-cell"></div>,
          );
        } else {
          boardItems.push(
            <div
              key={`${row}-${col}`}
              className="board-cell"
              onClick={!gameOver ? ()=>handleClick(row, col) : undefined}
            ></div>,
          );
        }
      }
    }

    return boardItems;
  }

  return (
    <section className="board-section">
      <div className="board">{createBoard()}</div>
    </section>
  );
}

export default Board;
