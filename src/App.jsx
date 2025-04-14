import "./App.css";
import Scoreboard from "./components/Scoreboard";
import Gameboard from "./components/Gameboard";
import { useState } from "react";

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  function changeCurrentScore() {
    setCurrentScore(currentScore + 1);
  }
  function endGame() {
    if (currentScore > bestScore) setBestScore(currentScore);
    setCurrentScore(0);
  }

  return (
    <div className="app">
      <Scoreboard currentScore={currentScore} bestScore={bestScore} />
      <Gameboard changeCurrentScore={changeCurrentScore} endGame={endGame} />
    </div>
  );
}

export default App;
