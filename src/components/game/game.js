/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Game(props) {
  const [clickCoordinates, setclickCoordinates] = useState(false);

  const { levels } = props;
  const { gameId } = useParams();
  const selectedLevel = levels.find((level) => {
    return level.id === gameId;
  });
  const { name, image, alt, id, characters } = selectedLevel;

  function setMouseClickCoordinates(event) {
    const x = event.clientX;
    const y = event.clientY;
    // eslint-disable-next-line no-unused-expressions
    clickCoordinates
      ? setclickCoordinates(false)
      : setclickCoordinates({ x, y });
  }

  useEffect(() => {
    console.log(clickCoordinates);
  });

  return (
    <div className="game-container" onClick={setMouseClickCoordinates}>
      <img src={image} alt={alt} />
    </div>
  );
}

export default Game;
