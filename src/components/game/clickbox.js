import { click } from "@testing-library/user-event/dist/click";
import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  left: ${(props) => props.left}px;
  top: ${(props) => props.top}px;

  background-color: black;
`;
const Character = styled.div`
  padding: 2px 5px;
  border: 1px solid white;
  color: white;

  &:hover {
    color: gray;
  }
`;

const Image = styled.img`
  width: 20px;
`;
const Span = styled.span`
  cursor: pointer;
`;

function ClickBox(props) {
  const { clickCoordinates, setclickCoordinates, characters, takeSelection } =
    props;

  const left = clickCoordinates.x;
  const top = clickCoordinates.y;

  const clickBox = clickCoordinates ? (
    <Container left={left} top={top}>
      {characters.map((character) => {
        if (!character.found) {
          return (
            <Character
              key={`${character.id}clickbox`}
              onClick={() => {
                setclickCoordinates(false);
                takeSelection(character.id);
              }}
            >
              <Image src={character.image} alt={character.name} />
              <Span>{character.name}</Span>
            </Character>
          );
        }
        return "";
      })}
    </Container>
  ) : null;

  return clickBox;
}

export default ClickBox;
