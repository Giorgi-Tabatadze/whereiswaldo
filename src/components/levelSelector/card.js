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
`;
const Image = styled.img`
  width: 200px;
`;

const Span = styled.span`
  position: absolute;
  text-transform: uppercase;
  font-size: 15px;
  width: 200px;
  padding: 20px 0;
  background-color: rgb(0, 0, 0, 0.5);
  color: white;
  left: 50%;
  top: 91%;
  transform: translate(-50%, -50%);
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
