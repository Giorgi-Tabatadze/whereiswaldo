/* eslint-disable react/jsx-boolean-value */
import styled from "styled-components";
import { useParams } from "react-router-dom";
import Header from "../header/header";
import LeaderBoardCard from "./leaderboardcard";
import LeaderboardList from "./list";

const SelectorContainer = styled.div`
  margin-top: 100px;
  display: grid;
  gap: 20px;
  grid-template-columns: 100px 100px 100px;
  justify-content: center;
`;

const LeaderboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function Leaderboard(props) {
  const { levels } = props;

  let selectedLevel;
  let { gameId } = useParams();
  if (gameId === undefined) {
    // eslint-disable-next-line prefer-destructuring
    selectedLevel = levels[0];
    gameId = selectedLevel.id;
  } else {
    selectedLevel = levels.find((level) => {
      return level.id === gameId;
    });
  }

  const { name, image, alt, id, characters } = selectedLevel;

  return (
    <LeaderboardContainer>
      <Header leaderboard={true} />
      <SelectorContainer>
        {levels.map((level) => {
          if (level.id === id) {
            return (
              <LeaderBoardCard
                img={level.cardImage}
                alt={level.alt}
                levelName={level.name}
                id={level.id}
                key={`${level.id}levelselector`}
                isSelected={true}
              />
            );
          }
          return (
            <LeaderBoardCard
              img={level.cardImage}
              alt={level.alt}
              levelName={level.name}
              id={level.id}
              key={`${level.id}levelselector`}
              isSelected={false}
            />
          );
        })}{" "}
      </SelectorContainer>
      <h2>{selectedLevel.name}</h2>
      <LeaderboardList gameId={gameId} />
    </LeaderboardContainer>
  );
}

export default Leaderboard;
