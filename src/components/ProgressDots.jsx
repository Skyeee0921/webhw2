// Decorative progress indicator: sm · sm · md · (counter) · md · sm · sm
export default function ProgressDots({ total, current }) {
  return (
    <div className="progress-indicator" role="status" aria-label={`第 ${current + 1} 題，共 ${total} 題`}>
      <span className="prog-dot prog-sm" />
      <span className="prog-dot prog-sm" />
      <span className="prog-dot prog-md" />
      <span className="prog-counter">{current + 1}/{total}</span>
      <span className="prog-dot prog-md" />
      <span className="prog-dot prog-sm" />
      <span className="prog-dot prog-sm" />
    </div>
  )
}
