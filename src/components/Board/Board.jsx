import "./Board.css";
import { useState } from "react";

function Board(){
    
    const [chosen, setChosen] = useState([]);

    function handleClick(row, col){        
        setChosen((prev)=>[...prev, `${row}-${col}`])
    }

    function createBoard(){
        
        const boardItems = []
        
        for(let row = 0; row < 10; row++){
            for(let col = 0; col < 10; col++){
                if(chosen.includes(`${row}-${col}`)){
                    boardItems.push(<div className="chosen-cell"></div>)
                }else{
                    boardItems.push(<div onClick={()=>handleClick(row, col)} className="board-cell"></div>)
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