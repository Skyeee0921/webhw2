import personalities from '../data/personalities'
import Button from '../components/Button'
import FloatingOrbs from '../components/FloatingOrbs'

export default function ResultPage({ mbti, onRestart }) {
  const data = personalities[mbti] || {
    type: mbti,
    title: '茶道探索者',
    description: '你是一位獨特的茶道靈魂，難以被任何框架所定義。',
  }

  return (
    <div className="page result-page">
      <div className="page-noise" aria-hidden="true" />
      <FloatingOrbs />

      <div className="result-content">
        <p className="result-label">你的茶道人格是</p>
        <div className="result-mbti">{data.type}</div>
        <div className="title-divider">
          <span className="divider-line" />
          <span className="divider-diamond">◆</span>
          <span className="divider-line" />
        </div>
        <h2 className="result-title">{data.title}</h2>
        <div className="result-card">
          <p className="result-description">{data.description}</p>
        </div>
        <Button onClick={onRestart} variant="gold">
          重新測驗
        </Button>
      </div>
    </div>
  )
}
