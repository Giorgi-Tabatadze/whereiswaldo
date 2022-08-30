/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Card = styled.div`
  width: 200px;
  position: relative;
  text-align: center;
  &:hover {
    scale: 1.05;
    cursor: pointer;
  }
  padding: 10px 10px;
  background-color: rgb(37, 150, 190);
  border-radius: 15px;
`;
const Image = styled.img`
  width: 200px;
`;

const Span = styled.span`
  text-transform: uppercase;
  font-size: 15px;
  padding: 20px 0;
  color: white;
`;

function LevelCard(props) {
  const { img, alt, levelName, id } = props;

  const navigate = useNavigate();

  return (
    <Card
      className="level-card"
      key={id}
      onClick={() => {
        navigate(`/game/${id}`);
      }}
    >
      <Image src={img} alt={alt} />
      <Span>{levelName}</Span>
    </Card>
  );
}

export default LevelCard;
