import "./Board.css";
import { useState } from "react";
import {useGameProvider} from "../../context/gameProvider";

function Board(){
    
    const {board, setBoard} = useGameProvider();
    

    function handleClick(row, col){
        
        if(board[row][col].revealed){
            return;
        }else{
            const newBoard = board.map((item)=>{
                item.row === row && item.col === col ? 
            })
        }
    }

    function createBoard(){
        
        const boardItems = []
        
        for(let row = 0; row < 10; row++){
            for(let col = 0; col < 10; col++){
                
                if(board[row][col].bomb && board[row][col].revealed){
                    boardItems.push(<div key={`${row}-${col}`} className="bomb"></div>);
                }else if(!board[row][col].bomb && board[row][col].revealed){
                    boardItems.push(<div key={`${row}-${col}`} className="revealed-cell"></div>)
                }else{
                    boardItems.push(<div key={`${row}-${col}`} className="board-cell" onClick={()=>handleClick(row, col)}></div>)
                }
            }
        }

        return boardItems;
        
    }



    return(
        <section className="board-section">
            <div className="board">
                {createBoard()}
            </div>
            
        </section>
    )

}

export default Board;