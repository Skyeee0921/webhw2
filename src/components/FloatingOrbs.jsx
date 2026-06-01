// Ambient drifting light orbs placed behind every page.
// Pure decorative — aria-hidden, pointer-events: none.
export default function FloatingOrbs() {
  return (
    <div className="orbs" aria-hidden="true">
      <span className="orb orb-a" />
      <span className="orb orb-b" />
      <span className="orb orb-c" />
    </div>
  )
}
