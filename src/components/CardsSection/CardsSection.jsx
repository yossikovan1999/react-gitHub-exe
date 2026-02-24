import Card from "../Card/Card";
import {useGameProvider} from "../../context/gameProvider";
import "./CardsSection.css"

function CardSection(){
    
    const { bombs, humanTime, board} = useGameProvider()
    
    const svgArr = [
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="#e9e9e9" d="M9 3V1h6v2zm2 11h2V8h-2zm-2.488 7.288q-1.637-.713-2.862-1.938t-1.937-2.863T3 13t.713-3.488T5.65 6.65t2.863-1.937T12 4q1.55 0 2.975.5t2.675 1.45l1.4-1.4l1.4 1.4l-1.4 1.4Q20 8.6 20.5 10.025T21 13q0 1.85-.713 3.488T18.35 19.35t-2.863 1.938T12 22t-3.488-.712"/></svg>,
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 48 48"><path fill="#e9e9e9" fill-rule="evenodd" d="M37.896 12.031a4.5 4.5 0 0 1 5.829-1.048l.503.303a1.5 1.5 0 0 0 1.544-2.573l-.504-.302a7.5 7.5 0 0 0-9.715 1.746l-.113.142q-.661-.566-1.255-.992c-2.471-1.78-5.41-.805-7.183.967l-.428.428A18.5 18.5 0 0 0 20 9.5C9.783 9.5 1.5 17.782 1.5 28S9.783 46.5 20 46.5S38.5 38.217 38.5 28c0-2.316-.425-4.532-1.202-6.575l.428-.428c1.771-1.772 2.746-4.712.967-7.182a19 19 0 0 0-1.111-1.392zM7.5 28a1.5 1.5 0 0 0 3 0a9.5 9.5 0 0 1 9.5-9.5a1.5 1.5 0 0 0 0-3c-6.904 0-12.5 5.596-12.5 12.5" clip-rule="evenodd"/></svg>,
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="#e9e9e9" d="M5 3h5a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5a2 2 0 0 1 2-2m9 0h5a2 2 0 0 1 2 2v2a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m-1 8a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1zm1 5h6a1 1 0 0 1 1 1v2a2 2 0 0 1-2 2h-5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1M4 13h6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2v-5a1 1 0 0 1 1-1"/></svg>
    ]

    return(
        <div className="cards-section">
          <Card svg={svgArr[1]} headerText="Bombs Remaining" mainText={bombs}/>
          <Card svg={svgArr[0]} headerText="Time remaining" mainText={humanTime}/>
          <Card svg={svgArr[2]} headerText="Board Size" mainText={`${board.rows} X ${board.cols}`}/>
        </div>
    )
}

export default CardSection;