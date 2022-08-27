import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import levelsArray from "./components/levelSelector/levels";
import Header from "./components/header/header";
import LevelSelector from "./components/levelSelector/selector";
import Game from "./components/game/game";

function App() {
  return (
    <Router>
      <Header levels={levelsArray} />
      <Routes>
        <Route path="/" element={<LevelSelector levels={levelsArray} />} />
        <Route path="/leaderboards" element={<div>This is Leaderboard</div>} />
        <Route path="/game/:gameId" element={<Game levels={levelsArray} />} />
      </Routes>
    </Router>
  );
}

export default App;
