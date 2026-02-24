import Card from "../Card/Card";
import {useGameProvider} from "../../context/gameProvider";


function CardSection(){
    
    const {humanTime, timeLeft} = useGameProvider()
    
    console.log(humanTime);
    

    return(
        <>
          <div>
            {humanTime}
            </div>  
                  
        
        </>
    )
}

export default CardSection;