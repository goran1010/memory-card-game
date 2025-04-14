export default function Scoreboard({ currentScore, bestScore }) {
  return (
    <div className="scoreboard">
      <div className="explain">
        <p>
          Play the memory card game by clicking on an as many different images
          only once.
        </p>
        <p>Be careful, the images move around !</p>
      </div>
      <h2>Your current score is: {currentScore}</h2>
      <h2>Your best score is: {bestScore}</h2>
    </div>
  );
}
