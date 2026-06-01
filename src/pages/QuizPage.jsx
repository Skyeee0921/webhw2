import { useState } from 'react'
import questions from '../data/questions'
import QuestionCard from '../components/QuestionCard'
import ProgressDots from '../components/ProgressDots'
import FloatingOrbs from '../components/FloatingOrbs'

export default function QuizPage({ onComplete, onBack }) {
  const [current, setCurrent] = useState(0)
  const [answers, setAnswers] = useState([])
  const [visible, setVisible] = useState(true)
  const [selectedKey, setSelectedKey] = useState(null)

  const handleBack = () => {
    if (current === 0) {
      onBack()
    } else {
      setAnswers(prev => prev.slice(0, -1))
      setCurrent(prev => prev - 1)
      setSelectedKey(null)
      setVisible(true)
    }
  }

  const handleAnswer = (key) => {
    const newAnswers = [...answers, key]
    setSelectedKey(key)
    setTimeout(() => setVisible(false), 320)
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

  const q = questions[current]

  return (
    <div className="page quiz-page">
      <div className="page-noise" aria-hidden="true" />
      <FloatingOrbs />

      <button className="quiz-back" onClick={handleBack} aria-label="返回上一步">
        <span className="quiz-back-arrow">‹</span>
        <span>返回</span>
      </button>

      <div className="quiz-top-space" />

      <div
        key={current}
        className={`quiz-content ${visible ? 'content-visible' : 'content-hidden'}`}
      >
        <QuestionCard question={q} />
        <div className="quiz-options-gap" />
        <div className={`quiz-options ${selectedKey ? 'has-selection' : ''}`}>
          {Object.entries(q.options).map(([key, text]) => (
            <button
              key={key}
              className={`option-btn ${selectedKey === key ? 'option-selected' : ''}`}
              onClick={() => !selectedKey && handleAnswer(key)}
            >
              {key}. {text}
            </button>
          ))}
        </div>
      </div>

      <div className="quiz-bottom-space" />

      <div className="quiz-footer">
        <ProgressDots total={questions.length} current={current} />
      </div>
    </div>
  )
}
