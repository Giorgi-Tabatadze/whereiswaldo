/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Card = styled.div`
  width: 100px;
  position: relative;
  text-align: center;
  scale: ${(props) => props.scale};
  &:hover {
    scale: 1.05;
    cursor: pointer;
  }
`;
const Image = styled.img`
  width: 100px;
`;

const Span = styled.span`
  position: absolute;
  text-transform: uppercase;
  font-size: 10px;
  width: 100px;
  padding: 7% 0;
  background-color: rgb(0, 0, 0, 0.5);
  color: white;
  left: 50%;
  top: 90%;
  transform: translate(-50%, -50%);
`;

function LeaderBoardCard(props) {
  const { img, alt, levelName, id, isSelected } = props;

  const navigate = useNavigate();

  const scale = isSelected ? "1.1" : "1";

  return (
    <Card
      className="level-card"
      key={id}
      scale={scale}
      onClick={() => {
        navigate(`/leaderboard/${id}`);
      }}
    >
      <Image src={img} alt={alt} />
      <Span>{levelName}</Span>
    </Card>
  );
}

export default LeaderBoardCard;
