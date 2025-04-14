export default function Scoreboard({ currentScore, bestScore }) {
  return (
    <div>
      <h2>Your current score is: {currentScore}</h2>
      <h2>Your best score is: {bestScore}</h2>
    </div>
  );
}
