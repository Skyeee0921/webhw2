import { useState } from 'react'
import questions from '../data/questions'
import QuestionCard from '../components/QuestionCard'
import ProgressDots from '../components/ProgressDots'

export default function QuizPage({ onComplete }) {
  const [current, setCurrent] = useState(0)
  const [answers, setAnswers] = useState([])
  const [visible, setVisible] = useState(true)
  const [selectedKey, setSelectedKey] = useState(null)

  const handleAnswer = (key) => {
    const newAnswers = [...answers, key]
    setSelectedKey(key)

    // Let the selection pulse animation play for 320ms, then fade out card
    setTimeout(() => {
      setVisible(false)
    }, 320)

    // After fade out (280ms), switch to next question or complete
    setTimeout(() => {
      setSelectedKey(null)
      if (current + 1 >= questions.length) {
        onComplete(newAnswers)
      } else {
        setAnswers(newAnswers)
        setCurrent(current + 1)
        setVisible(true)
      }
    }, 620)
  }

  return (
    <div className="page quiz-page">
      <div className="quiz-header">
        <div className="quiz-number">{current + 1} / {questions.length}</div>
      </div>

      <div className="quiz-body">
        <QuestionCard
          question={questions[current]}
          onAnswer={handleAnswer}
          visible={visible}
          selectedKey={selectedKey}
        />
      </div>

      <div className="quiz-footer">
        <ProgressDots total={questions.length} current={current} />
      </div>
    </div>
  )
}
