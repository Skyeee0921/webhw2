export default function QuestionCard({ question, onAnswer, visible, selectedKey }) {
  const hasSelection = !!selectedKey

  return (
    <div className={`question-card ${visible ? 'card-visible' : 'card-hidden'}`}>
      <div className="question-scenario">
        <p className="scenario-label">情境</p>
        <p className="scenario-text">{question.scenario}</p>
      </div>
      <p className="question-prompt">{question.prompt}</p>
      <div className={`options-container ${hasSelection ? 'has-selection' : ''}`}>
        {Object.entries(question.options).map(([key, text]) => (
          <button
            key={key}
            className={`option-btn ${selectedKey === key ? 'option-selected' : ''}`}
            onClick={() => !hasSelection && onAnswer(key)}
          >
            <span className="option-key">{key}</span>
            <span className="option-text">{text}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
