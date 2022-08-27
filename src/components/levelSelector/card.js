/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useNavigate } from "react-router-dom";

function LevelCard(props) {
  const { img, alt, levelName, id } = props;

  const navigate = useNavigate();

  return (
    <div
      className="level-card"
      key={id}
      onClick={() => {
        navigate(`/game/${id}`);
      }}
    >
      <img src={img} alt={alt} />
      <span>{levelName}</span>
    </div>
  );
}

export default LevelCard;
