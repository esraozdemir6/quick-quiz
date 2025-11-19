function ResultsScreen({ score, totalQuestions, onRestart }) {
  return (
    <div className="results-screen">
      <h2>Quiz Finished!</h2>
      <p>
        You scored <strong>{score}</strong> out of{" "}
        <strong>{totalQuestions}</strong>.
      </p>

      <button className="restart-button" onClick={onRestart}>
        Restart Quiz
      </button>
    </div>
  );
}

export default ResultsScreen;
