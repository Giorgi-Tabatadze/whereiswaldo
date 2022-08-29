/* eslint-disable consistent-return */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-plusplus */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { collection, getDocs, addDoc } from "@firebase/firestore";
import { async } from "@firebase/util";
import relativeCoords from "./relativeCoordinates";
import { db } from "../../firebase-config";
import Header from "../header/header";
import ClickBox from "./clickbox";
import ReportModal from "./reportModal";
import getTimeDifference from "./getTimeDifference";
import NameInputPortal from "./nameInputPortal";

const GameImg = styled.img`
  position: relative;
  width: 100vw;
`;

function Game(props) {
  ///  Props ////////////////////////////////////////////////////////////
  const { levels, setLoading } = props;
  const { gameId } = useParams();
  const selectedLevel = levels.find((level) => {
    return level.id === gameId;
  });
  const { name, image, alt, id, characters } = selectedLevel;
  const charCoorRef = collection(db, id);
  const leaderBoardRef = collection(db, `${id}Leaderboard`);

  ///  States///////////////////////////////////////////////////////////////////////////
  const [clickCoordinates, setclickCoordinates] = useState(false);
  const [charactersTracker, setCharactersTracker] = useState(
    [structuredClone(characters)][0],
  );
  const [characterCoordinates, setCharacterCoordinates] = useState();
  const [reportModalStatus, setReportModalStatus] = useState(false);
  const [startTime, setstartTime] = useState(Date.now());
  const [timeElapsed, setTimeElapsed] = useState(false);
  const [userName, setUserName] = useState("");

  ///  Functions ////////////////////////////////////////////////////////////////////

  const navigate = useNavigate();

  function setMouseClickCoordinates(event) {
    const x = event.clientX;
    const y = event.clientY;

    const relativeCoordinates = relativeCoords(event);
    clickCoordinates
      ? setclickCoordinates(false)
      : setclickCoordinates({
          x,
          y,
          xRelative: relativeCoordinates.xRelative,
          yRelative: relativeCoordinates.yRelative,
        });
  }

  function setCloseModalTimeout() {
    setTimeout(() => setReportModalStatus(false), 2000);
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

  async function AddToLeaderBoard(name) {
    const playerInfo = {};
    playerInfo.name = name;
    playerInfo.time = timeElapsed;
    console.log(leaderBoardRef);
    setLoading(true);
    await addDoc(leaderBoardRef, playerInfo);
    setLoading(false);

    navigate(`/leaderboard/${id}`);
  }

  ///  Hooks ////////////////////////////////////////////////////////////
  useEffect(() => {
    const getCharCoordinates = async function () {
      setLoading(true);
      const data = await getDocs(charCoorRef);
      setLoading(false);
      console.log("gotdata");
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setCharacterCoordinates(filteredData);
    };

    getCharCoordinates();
  }, []);

  useEffect(() => {
    if (
      !charactersTracker.some((character) => {
        return character.found === false;
      })
    ) {
      const timeeElapsed = getTimeDifference(startTime) / 1000;
      setTimeElapsed(timeeElapsed);
    }
  }, [charactersTracker]);
  useEffect(() => {
    if (userName !== "") {
      AddToLeaderBoard(userName);
    }
  }, [userName]);

  /// JSX /////////////////////////////////////////////////////////
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
      <NameInputPortal timeElapsed={timeElapsed} setUserName={setUserName} />
    </div>
  );

  return gameBoard;
}

export default Game;
