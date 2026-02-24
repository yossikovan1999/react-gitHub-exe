
import "./Card.css"

function Card({ svg, headerText, mainText }) {
  return (
    <div className="card">
      <div className="card-header">
        {svg}
        <h2>{headerText}</h2>
      </div>
      <div className="card-main-text">{mainText}</div>
    </div>
  );
}

export default Card;
