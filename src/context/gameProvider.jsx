import { createContext, useContext, useState } from "react";
import useTimer from "../hooks/useTimer";

const GameContex = createContext();

export function useGameProvider(){
    return useContext(GameContex);
}

function GameProvider({children}){
 
    const [bomb, setBomb] = useState(5);
    const {humanTime, timeLeft} = useTimer(3);
   
    return(
        <GameContex.Provider value={{humanTime, timeLeft}}>
            {children}
        </GameContex.Provider>
    )

}

export default GameProvider;