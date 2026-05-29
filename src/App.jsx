import { useState } from 'react'
import StartPage from './pages/StartPage'
import QuizPage from './pages/QuizPage'
import LoadingPage from './pages/LoadingPage'
import ResultPage from './pages/ResultPage'
import './styles/pages.css'

export default function App() {
  const [phase, setPhase] = useState('start')
  const [answers, setAnswers] = useState([])
  const [mbtiResult, setMbtiResult] = useState(null)

  const handleStart = () => setPhase('quiz')

  const handleQuizComplete = (ans) => {
    setAnswers(ans)
    const result = calcMBTI(ans)
    setMbtiResult(result)
    setPhase('loading')
  }

  const handleLoadingDone = () => setPhase('result')

  const handleRestart = () => {
    setAnswers([])
    setMbtiResult(null)
    setPhase('start')
  }

  // Q1→E/I, Q2→P/J, Q3→F/T, Q4→S/N
  // MBTI order: E/I + N/S + F/T + J/P
  function calcMBTI(ans) {
    const q1 = ans[0] === 'A' ? 'I' : 'E'   // A=I, B=E
    const q2 = ans[1] === 'A' ? 'P' : 'J'   // A=P, B=J
    const q3 = ans[2] === 'A' ? 'F' : 'T'   // A=F, B=T
    const q4 = ans[3] === 'A' ? 'S' : 'N'   // A=S, B=N

    // Standard MBTI order: E/I + N/S + F/T + J/P
    const sn = q4  // S or N from Q4
    return `${q1}${sn}${q3}${q2}`
  }

  return (
    <div className="app-wrapper">
      {phase === 'start' && <StartPage onStart={handleStart} />}
      {phase === 'quiz' && <QuizPage onComplete={handleQuizComplete} />}
      {phase === 'loading' && <LoadingPage onDone={handleLoadingDone} />}
      {phase === 'result' && <ResultPage mbti={mbtiResult} onRestart={handleRestart} />}
    </div>
  )
}
