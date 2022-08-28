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

function LevelSelector(props) {
  const { levels } = props;
  return (
    <div className="level-selector">
      <Header />
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
    </div>
  );
}

export default LevelSelector;
