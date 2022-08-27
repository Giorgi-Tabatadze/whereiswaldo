/* eslint-disable react/jsx-no-bind */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../header/header";
import ClickBox from "./clickbox";

function relativeCoords(event) {
  const bounds = event.target.getBoundingClientRect();
  const { offsetWidth, offsetHeight } = event.target;

  const xRelative = ((event.clientX - bounds.left) / offsetWidth) * 100;
  const yRelative = ((event.clientY - bounds.top) / offsetHeight) * 100;
  return { xRelative, yRelative };
}

const GameImg = styled.img`
  position: relative;
  width: 100vw;
`;

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

    const relativeCoordinates = relativeCoords(event);
    console.log(relativeCoordinates);
    // eslint-disable-next-line no-unused-expressions
    clickCoordinates
      ? setclickCoordinates(false)
      : setclickCoordinates({ x, y });
  }

  useEffect(() => {
    console.log(clickCoordinates);
  });
  const gameBoard = clickCoordinates ? (
    <div className="game-container">
      <Header characters={characters} />
      <GameImg src={image} alt={alt} onClick={setMouseClickCoordinates} />
      <ClickBox
        clickCoordinates={clickCoordinates}
        setclickCoordinates={setclickCoordinates}
        characters={characters}
      />
    </div>
  ) : (
    <div className="game-container">
      <Header characters={characters} />
      <GameImg src={image} alt={alt} onClick={setMouseClickCoordinates} />
    </div>
  );
  useEffect(() => {
    console.log(clickCoordinates);
  });

  return gameBoard;
}

export default Game;
