/* eslint-disable no-plusplus */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useParams, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { collection, getDocs } from "@firebase/firestore";
import relativeCoords from "./relativeCoordinates";
import { db } from "../../firebase-config";
import Header from "../header/header";
import ClickBox from "./clickbox";
import ReportModal from "./reportModal";

const GameImg = styled.img`
  position: relative;
  width: 100vw;
`;

function Game(props) {
  const { levels } = props;
  const { gameId } = useParams();
  const selectedLevel = levels.find((level) => {
    return level.id === gameId;
  });
  const { name, image, alt, id, characters } = selectedLevel;
  const charCoorRef = collection(db, id);

  const [clickCoordinates, setclickCoordinates] = useState(false);
  const [charactersTracker, setCharactersTracker] = useState(
    [structuredClone(characters)][0],
  );
  const [characterCoordinates, setCharacterCoordinates] = useState();
  const [reportModalStatus, setReportModalStatus] = useState(false);

  function setMouseClickCoordinates(event) {
    const x = event.clientX;
    const y = event.clientY;

    const relativeCoordinates = relativeCoords(event);
    // eslint-disable-next-line no-unused-expressions
    clickCoordinates
      ? setclickCoordinates(false)
      : setclickCoordinates({
          x,
          y,
          xRelative: relativeCoordinates.xRelative,
          yRelative: relativeCoordinates.yRelative,
        });
  }
  const location = useLocation();

  const modalTimeout = setTimeout(() => setReportModalStatus(false), 5000);

  function setCloseModalTimeout() {
    setTimeout(() => setReportModalStatus(false), 5000);
  }

  function takeSelection(id) {
    const charCoordinates = characterCoordinates.find((character) => {
      return character.id === id;
    });
    const charIndex = charactersTracker.findIndex((character) => {
      return character.id === id;
    });
    if (
      clickCoordinates.xRelative >= charCoordinates.xStart &&
      clickCoordinates.xRelative <= charCoordinates.xEnd &&
      clickCoordinates.yRelative >= charCoordinates.yStart &&
      clickCoordinates.yRelative <= charCoordinates.yEnd
    ) {
      const modifiedArray = [...charactersTracker];
      modifiedArray[charIndex].found = true;
      setCharactersTracker([...modifiedArray]);
      setReportModalStatus({
        color: "green",
        characterName: modifiedArray[charIndex].name,
      });
      setCloseModalTimeout();
    } else {
      setReportModalStatus({ color: "red" });
      setCloseModalTimeout();
    }
  }
  useEffect(() => {
    console.log(location);
  }, [location.key]);

  useEffect(() => {
    const getCharCoordinates = async function () {
      const data = await getDocs(charCoorRef);
      console.log("gotdata");
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setCharacterCoordinates(filteredData);
    };

    getCharCoordinates();
  }, []);

  const gameBoard = (
    <div className="game-container">
      <Header characters={charactersTracker} />
      <GameImg src={image} alt={alt} onClick={setMouseClickCoordinates} />
      <ClickBox
        clickCoordinates={clickCoordinates}
        setclickCoordinates={setclickCoordinates}
        characters={charactersTracker}
        takeSelection={takeSelection}
      />
      <ReportModal reportModalStatus={reportModalStatus} />
    </div>
  );

  return gameBoard;
}

export default Game;
