import OnPageNav from './OnPageNav.jsx'

function RightPanel({ items }) {
  if (!items || items.length === 0) return null

  return (
    <aside className="right-panel">
      <OnPageNav items={items} />
    </aside>
  )
}

export default RightPanel