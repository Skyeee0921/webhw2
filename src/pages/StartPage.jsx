import Button from '../components/Button'
import FloatingOrbs from '../components/FloatingOrbs'

export default function StartPage({ onStart }) {
  return (
    <div className="page start-page">
      <div className="page-noise" aria-hidden="true" />
      <FloatingOrbs />

      <div className="start-spacer" />

      <div className="start-body">
        <p className="start-welcome">
          歡迎來到 <span className="start-brand">Tealepath</span> ，
        </p>
        <div className="start-lines">
          <p>一場深度探索梨山茶業世界的奇妙心靈之旅。</p>
          <p>我們將帶你進入茶的神奇世界，</p>
          <p>不僅是品味的旅程，更是心靈與茶藝相交的契機。</p>
        </div>
      </div>

      <div className="start-footer">
        <Button onClick={onStart} variant="outline">進入測驗</Button>
      </div>
    </div>
  )
}
