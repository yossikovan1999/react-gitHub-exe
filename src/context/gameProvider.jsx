import { createContext, useContext, useState } from "react";
import useTimer from "../hooks/useTimer";

const GameContex = createContext();

export function useGameProvider(){
    return useContext(GameContex);
}

function GameProvider({children}){
 
    const [bombs, setBombs] = useState(5);
    const [board, setBoard] = useState({rows : 10, cols : 8});
    const {humanTime, timeLeft} = useTimer(3);
   
    const values = {
        bombs, setBombs, humanTime, timeLeft, board
    }

    return(
        <GameContex.Provider value={values}>
            {children}
        </GameContex.Provider>
    )

}

export default GameProvider;