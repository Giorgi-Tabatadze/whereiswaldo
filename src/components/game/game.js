/* eslint-disable react/jsx-no-bind */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { collection, getDocs } from "@firebase/firestore";
import { db } from "../../firebase-config";
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
  const [charactersTracker, setCharactersTracker] = useState([]);
  const [characterCoordinates, setCharacterCoordinates] = useState({});

  const { levels } = props;
  const { gameId } = useParams();
  const selectedLevel = levels.find((level) => {
    return level.id === gameId;
  });
  const { name, image, alt, id, characters } = selectedLevel;
  const charCoorRef = collection(db, id);
  setCharacterCoordinates(characters);

  function setMouseClickCoordinates(event) {
    const x = event.clientX;
    const y = event.clientY;

    const relativeCoordinates = relativeCoords(event);
    // eslint-disable-next-line no-unused-expressions
    clickCoordinates
      ? setclickCoordinates(false)
      : setclickCoordinates({ x, y });
  }

  useEffect(() => {
    const getCharCoordinates = async function () {
      const data = await getDocs(charCoorRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setCharacterCoordinates(filteredData);
    };

    getCharCoordinates();
  }, []);

  const gameBoard = clickCoordinates ? (
    <div className="game-container">
      <Header characters={charactersTracker} />
      <GameImg src={image} alt={alt} onClick={setMouseClickCoordinates} />
      <ClickBox
        clickCoordinates={clickCoordinates}
        setclickCoordinates={setclickCoordinates}
        characters={charactersTracker}
      />
    </div>
  ) : (
    <div className="game-container">
      <Header characters={charactersTracker} />
      <GameImg src={image} alt={alt} onClick={setMouseClickCoordinates} />
    </div>
  );

  return gameBoard;
}

export default Game;
