import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import levelsArray from "./components/levelSelector/levels";
import Header from "./components/header/header";
import LevelSelector from "./components/levelSelector/selector";
import Game from "./components/game/game";
import GlobalStyle from "./Globaltyle.style";
import Leaderboard from "./components/leaderboard/leaderboard";
import LoadingSpinner from "./components/loadingSpinner";

function App() {
  const [Loading, setLoading] = useState(false);
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<LevelSelector levels={levelsArray} />} />
        <Route
          path="/leaderboard/"
          element={<Leaderboard levels={levelsArray} setLoading={setLoading} />}
        />
        <Route
          path="/leaderboard/:gameId"
          element={<Leaderboard levels={levelsArray} setLoading={setLoading} />}
        />
        <Route
          path="/game/:gameId"
          element={<Game levels={levelsArray} setLoading={setLoading} />}
        />
      </Routes>
      <LoadingSpinner Loading={Loading} />
      <div id="portal" />
    </Router>
  );
}

export default App;
