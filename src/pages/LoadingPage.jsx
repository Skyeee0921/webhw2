import { useEffect } from 'react'
import FloatingOrbs from '../components/FloatingOrbs'

export default function LoadingPage({ onDone }) {
  useEffect(() => {
    const timer = setTimeout(onDone, 2200)
    return () => clearTimeout(timer)
  }, [onDone])

  return (
    <div className="page loading-page">
      <div className="page-noise" aria-hidden="true" />
      <FloatingOrbs />

      <div className="loading-content">
        <div className="tea-cup-anim">
          <div className="cup-body">
            <div className="steam steam-1" />
            <div className="steam steam-2" />
            <div className="steam steam-3" />
          </div>
          <div className="cup-saucer" />
        </div>
        <p className="loading-text">正在解析你的茶道人格⋯</p>
        <div className="loading-dots">
          <span className="ldot" />
          <span className="ldot" />
          <span className="ldot" />
        </div>
      </div>
    </div>
  )
}
