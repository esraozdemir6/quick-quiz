function QuestionCard({ question, onAnswerClick }) {
 return (
    <div className="question-card">
      <h2 className="question-text">{question.question}</h2>

      <div className="options">
        {question.options.map((option) => (
          <button
            key={option}
            className="option-button"
            onClick={() => onAnswerClick(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default QuestionCard;
