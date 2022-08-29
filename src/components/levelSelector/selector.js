import styled from "styled-components";
import LevelCard from "./card";
import Header from "../header/header";

const SelectorContainer = styled.div`
  margin-top: 100px;
  display: grid;
  gap: 100px;
  grid-template-columns: 200px 200px 200px;
  justify-content: center;
`;
const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const HowToPlayContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 500px;
`;

function LevelSelector(props) {
  const { levels } = props;
  return (
    <div className="level-selector">
      <Header />
      <ContentContainer>
        <SelectorContainer>
          {levels.map((level) => {
            return (
              <LevelCard
                img={level.cardImage}
                alt={level.alt}
                levelName={level.name}
                id={level.id}
                key={`${level.id}levelselector`}
              />
            );
          })}{" "}
        </SelectorContainer>
        <HowToPlayContainer>
          <h2>How to Play</h2>
          <p>
            We have created game levels based on famous cartoons. Your goal is
            to find indicated characters within the image. Characters to find
            will be indicated on the top of the screen once you enter the game.
            When you think you found the character click on it with your mouse
            and select it from the list of popup. This game is timebased so make
            sure you are quick. You can also Checkout our Leaderboard. Good
            luck!
          </p>
        </HowToPlayContainer>
      </ContentContainer>
    </div>
  );
}

export default LevelSelector;
