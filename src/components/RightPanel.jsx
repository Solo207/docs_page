import OnPageNav from './OnPageNav.jsx'

function RightPanel({ items }) {
  if (!items || items.length === 0) return null

  return (
    <aside className="right-panel">
      <p className="right-panel__title">On this page</p>
      <OnPageNav items={items} />
    </aside>
  )
}

export default RightPanel