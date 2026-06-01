// Renders the ornate double-bordered card (scenario + prompt only).
// Options are rendered separately in QuizPage to enable staggered float animation.
export default function QuestionCard({ question }) {
  return (
    <div className="q-frame">
      {/* corner bracket decorations */}
      <span className="q-corner q-tl" aria-hidden="true" />
      <span className="q-corner q-tr" aria-hidden="true" />
      <span className="q-corner q-bl" aria-hidden="true" />
      <span className="q-corner q-br" aria-hidden="true" />

      <div className="q-content">
        <p className="q-scenario">{question.scenario}</p>
        <p className="q-prompt">{question.prompt}</p>
      </div>
    </div>
  )
}
