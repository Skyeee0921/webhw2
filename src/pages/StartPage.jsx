import Button from '../components/Button'

export default function StartPage({ onStart }) {
  return (
    <div className="page start-page">
      <div className="start-content">
        <div className="tea-icon">茶</div>
        <h1 className="start-title">茶道人格測驗</h1>
        <div className="title-divider">
          <span className="divider-line" />
          <span className="divider-diamond">◆</span>
          <span className="divider-line" />
        </div>
        <p className="start-description">
          以茶為鏡，映照內心。<br />
          透過四道茶道情境，<br />
          探索屬於你的人格之道。
        </p>
        <p className="start-sub">共 4 題，約 1 分鐘完成</p>
        <Button onClick={onStart} variant="gold">
          開始測驗
        </Button>
      </div>
      <div className="start-decoration">
        <div className="deco-circle deco-circle-1" />
        <div className="deco-circle deco-circle-2" />
      </div>
    </div>
  )
}
