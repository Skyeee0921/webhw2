export default function ProgressDots({ total, current }) {
  return (
    <div className="progress-dots">
      {Array.from({ length: total }, (_, i) => (
        <span
          key={i}
          className={`dot ${i < current ? 'dot-done' : ''} ${i === current ? 'dot-active' : ''}`}
        />
      ))}
    </div>
  )
}
