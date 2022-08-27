import { Link } from "react-router-dom";
import styled from "styled-components";
import Charater from "./characters";

const CharDiv = styled.div`
  display: flex;
  gap: 30px;
  justify-content: center;
`;

function Characters(props) {
  const { characters } = props;

  const charactersDiv = (
    <div className="header">
      <CharDiv>
        {characters.map((character) => {
          return (
            <Charater
              id={character.id}
              name={character.name}
              image={character.image}
            />
          );
        })}{" "}
      </CharDiv>
    </div>
  );

  return charactersDiv;
}
export default Characters;
