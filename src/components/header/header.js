/* eslint-disable react/prop-types */
import { Link, useParams } from "react-router-dom";

function Header(props) {
  const { logo, levels } = props;
  const { gameId } = useParams();

  if (gameId) {
    const selectedLevel = levels.find((level) => {
      return level.id === gameId;
    });
  }
  const gameHeader = (
    <div className="header">
      <Link to="/">
        <button type="button">Home</button>
      </Link>
    </div>
  );

  const defaultHeader = (
    <div className="header">
      <Link to="/leaderboard">
        <button type="button">Leaderboard</button>
      </Link>
      <img src={logo} alt="Game Logo" />
    </div>
  );
  return defaultHeader;
}

export default Header;
