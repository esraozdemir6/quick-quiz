import { useState } from "react";
import "./App.css";
import { QUESTIONS } from "./questions";
import QuestionCard from "./components/QuestionCard";
import ResultsScreen from "./components/ResultsScreen";

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const totalQuestions = QUESTIONS.length;

  const handleAnswerClick = (selectedOption) => {
    const currentQuestion = QUESTIONS[currentQuestionIndex];
  if (selectedOption === currentQuestion.correctAnswer) {
      setScore((prevScore) => prevScore + 1);
    }

    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  const handleRestart = () => {
    setScore(0);
    setCurrentQuestionIndex(0);
  };

  const isQuizFinished = currentQuestionIndex >= totalQuestions;

  return (
    <div className="App">
      <h1 className="app-title">My React Quiz</h1>

      {!isQuizFinished ? (
        <QuestionCard
          question={QUESTIONS[currentQuestionIndex]}
          onAnswerClick={handleAnswerClick}
        />
      ) : (
        <ResultsScreen
          score={score}
          totalQuestions={totalQuestions}
          onRestart={handleRestart}
        />
      )}
    </div>
  );
}

export default App;

